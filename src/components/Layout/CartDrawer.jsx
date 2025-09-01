import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';




const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    const navigate = useNavigate();
    const handleCheckout = () => {
        toggleCartDrawer();
        navigate("/checkout");
    };


    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            {/* closing button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600 hover:text-black' />
                </button>
            </div>
            {/* cart component with scrolable area */}
            <div className='flex-grow p-4'>
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                <CartContents />

            </div>
            {/*Checkout button fixed at the bottom */}
            <div className="px-4">
                <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 ease-in-out">
                    Checkout
                </button>
            </div>

            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
                Shipping, taxes, and discount codes calculated at checkout.
            </p>
        </div>
    )
}

export default CartDrawer
