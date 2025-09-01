import React, { useEffect, useState } from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivaals from '../components/Products/NewArrivaals'
import ProductDetails from '../components/Products/ProductDetails'
import { Toaster } from 'sonner'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import Features from '../components/Products/Features'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchProductsByFilters } from '../redux/slices/productSlice'



const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null)

  useEffect(() => {
    //fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    )
    //fetch best seller products
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBestSeller()
  }, [dispatch]);

  useEffect(() => {
    if (!bestSellerProduct?._id) {
      console.log("bestSellerProduct._id is undefined or null");
    } else {
      console.log("bestSellerProduct._id exists:", bestSellerProduct._id);
    }
  }, [bestSellerProduct]);


  return (
    <div >
      <Toaster position='top-right' />
      <Hero />
      <GenderCollectionSection />
      <NewArrivaals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct?._id} />
        
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
      



      <div className="container mx-auto px-4 my-20">
        <h2 className="text-3xl text-center font-bold mb-8">
          Top Wears for Women

        </h2>

        <ProductGrid product={products} loading={loading} error={error} />
      </div>
      <FeaturedCollection />
      <Features />
    </div>
  )
}

export default Home
