import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
    return (
        <div className='bg-[#FFD700] text-grey'>
            <div className='container mx-auto flex justify-between item-center py-3'>
                <div className='hidden md:flex items-center space-x-4'>
                    <a href='#' className='hover:text-grey-300'>
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href='#' className='hover:text-grey-300'>
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href='#' className='hover:text-grey-300'>
                        <RiTwitterXLine className="h-4 w-4" />
                    </a>
                </div>
                <div className='text-sm text-center flex-grow'>
                    <span>We ship panIndia - Fast and reliable shipping!</span>
                </div>
                <div className='hidden md:block text-sm'>
                    <a href='tele:9207167137' className='hover:text-grey-300'>
                            Ph: 9207167137
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
