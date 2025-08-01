import React, { useState } from 'react';
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* left logo */}
                <div>
                    <Link to="/" className="text-2xl font-medium">
                        Carry Loop
                    </Link>
                </div>

                {/* center navigation link */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/collections/all" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        men
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        women
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        topwear
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        bottomwear
                    </Link>
                </div>

                {/* right navigation link */}
                <div className="flex items-center space-x-4">
                    <Link to="/profile" className="hover:text-black">
                        <HiOutlineUser className="h-6 w-6 text-gray-700" />
                    </Link>
                    <button onClick={toggleCartDrawer} className="relative group">
                        <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 group-hover:text-black cursor-pointer" />
                        <span className="absolute -top-1 bg-[#ef4444] text-white text-xs rounded-full px-2 py-0.5">
                            4
                        </span>
                    </button>
                    <Searchbar />
                    <button className="md:hidden" onClick={toggleNavDrawer}>
                        <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full
        bg-white shadow-lg transform transition-transform duration-300 z-50
        ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-800 hover:text-red-600 transition" />
                    </button>
                </div>

                {/* Add your mobile nav links here */}
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <nav>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className="block text-gray-700 hover:text-black mb-2 "
                        >
                            MEN
                        </Link>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className="block text-gray-700 hover:text-black mb-2"
                        >
                            WOMEN
                        </Link>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className="block text-gray-700 hover:text-black mb-2"
                        >
                            TOPWEAR
                        </Link>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className="block text-gray-700 hover:text-black mb-2"
                        >
                            BOTTOMWEAR
                        </Link>
                        {/* Add more links as needed */}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
