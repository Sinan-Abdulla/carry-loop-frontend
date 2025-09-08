import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'

import OrderConfirmation from '../src/orderConfirmation/orderConfirmation'
import OrdersList from '../src/pages/MyOrdersPage'
import OrderDetailPage from '../src/pages/orderDetailPage'

import { Provider } from 'react-redux'
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='collections/:collection' element={<CollectionPage />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path="/order-Confirmation" element={<OrderConfirmation />} />
            <Route path="/myorders" element={<OrdersList />} />
            <Route path="/orderDetails" element={<OrderDetailPage/>} />

          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
