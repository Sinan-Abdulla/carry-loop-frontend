import React from 'react'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto  flex justify-between items-center py-4 px-6'>
                {/* left logo */}
                <div>
                    <Link to="/" className='text-2xl font-medium' >
                        Carry Loop
                    </Link>
                </div>
                {/* center navigation link */}
                <div className='hidden md:flex space-x-6 '>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        men
                    </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        women
                    </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        topwear
                    </Link>
                    <Link to={"#"} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        botomwear
                    </Link>
                </div>
                {/* right navigation link */}
                <div className='flex items-center space-x-4'>
                    <Link to={"/profile"} className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button className='relative group'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 group-hover:text-black cursor-pointer' />
                        <span className='absolute -top-1 bg-[#ef4444] text-white text-xs rounded-full px-2 py-0.5 '>
                            4
                        </span>
                    </button>
                    {/* search */}
                    <Searchbar/>
                    <button className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700'>

                        </HiBars3BottomRight>
                    </button>
                    <button>
                        
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
