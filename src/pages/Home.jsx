import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivaals from '../components/Products/NewArrivaals'
import ProductDetails from '../components/Products/ProductDetails'
import { Toaster } from 'sonner'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import Features from '../components/Products/Features'

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=1" }]
  },
  {
    _id: 2,
    name: "Product 2",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=2" }]
  },
  {
    _id: 3,
    name: "Product 3",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=3" }]
  },
  {
    _id: 4,
    name: "Product 4",
    price: 90,
    images: [{ url: "https://picsum.photos/500/500?random=4" }]
  },
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }]
  },
  {
    _id: 6,
    name: "Product 2",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=6" }]
  },
  {
    _id: 7,
    name: "Product 3",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=7" }]
  },
  {
    _id: 8,
    name: "Product 4",
    price: 90,
    images: [{ url: "https://picsum.photos/500/500?random=8" }]
  }
]

const Home = () => {
  return (
    <div >
      <Toaster position='top-right' />
      <Hero />
      <GenderCollectionSection />
      <NewArrivaals />
      {/* best seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto px-4 my-20">
        <h2 className="text-3xl text-center font-bold mb-8">
          Top Wears for Women
        </h2>

        <ProductGrid product={placeholderProducts} />
      </div>
      <FeaturedCollection/>
      <Features/>
    </div>
  )
}

export default Home
