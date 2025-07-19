import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="border-t py-12 bg-gray-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 lg:px-0">

                {/* Column 1: Logo */}
                <div className="flex items-center space-x-2 text-xl font-bold hidden md:flex ">
                    <HiOutlineShoppingBag className="h-6 w-6 text-black" />
                    <span>CarryLoop</span>
                </div>

                {/* Column 2 & 3: Newsletter Section */}
                <div className="md:col-span-2 flex flex-col justify-start space-y-4">
                    <h3 className="text-lg text-gray-800 font-semibold">Newsletter</h3>
                    <p className="text-gray-500 text-sm">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p className="text-gray-600 text-sm">Sign up and get 10% off your first order.</p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 w-full text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition text-sm"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

                {/* Column 4: Instagram Section */}
                <div className="flex flex-col items-center md:items-end justify-start space-y-6 pt-5">
                    <h2 className="text-lg font-semibold text-gray-800">FOLLOW US ON</h2>

                    <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-600 transition"
                    >
                        <FaInstagram className="h-10 w-10" />
                    </a>
                </div>


            </div>
            <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 ">
                <p className="text-gray-500 text-sm tracking-tighter text-center">
                    © 2025, CompileTab. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
