import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivaals from '../components/Products/NewArrivaals'

const Home = () => {
  return (
    <div >
      <Hero/>
      <GenderCollectionSection/>
      <NewArrivaals/>
    </div>
  )
}

export default Home
