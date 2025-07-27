import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivaals from '../components/Products/NewArrivaals'
import ProductDetails from '../components/Products/ProductDetails'
import { Toaster } from 'sonner'

const Home = () => {
  return (
    <div >
      <Toaster position='top-right'/>
      <Hero />
      <GenderCollectionSection />
      <NewArrivaals />
      {/* best seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails />
    </div>
  )
}

export default Home
