'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { logo } from "@/assets";
import Container from '@/shared/Container';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { LiaUser } from 'react-icons/lia';
import { MdFavoriteBorder, MdOutlineFavoriteBorder } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';
import MobileNavigation from './MobileNavigation';
const MiddleHeader = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className='border-b-[1px] border-b-gray-400'>
            <Container className='py-5 flex justify-between items-center gap-4 md:gap-6 lg:gap-20'>
                <Image src={logo} alt="logo" className="w-28" />

                {/* Search ber  */}
                <div className='hidden md:inline-flex flex-1 h-10 relative'>
                    <input
                        type="text"
                        placeholder="Search products here..."
                        className="w-full h-full outline-none border-2 border-themeColor px-4"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {searchValue && (
                        <RiCloseLine
                            onClick={() => setSearchValue("")}
                            className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
                        />
                    )}
                    <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
                        <RiSearchLine />
                    </span>
                </div>

                <div className='hidden md:inline-flex items-center gap-3'>
                    {/* user  */}
                    <div className='flex items-center gap-3'>
                        <div className='border-2 border-gray-700 p-2 rounded-full text-xl'>
                            <LiaUser />
                        </div>
                        <div>
                            <p className='text-xs'>Hello, Guests</p>
                            <p className='text-sm'>Login / Register</p>
                        </div>
                    </div>
                    {/* Favorite Icon */}
                    <div className='text-2xl relative'>
                    <MdOutlineFavoriteBorder />
                    <span className='iconDesign'>0</span>
                    </div>
                    {/* Favorite Icon */}
                    <div className='text-2xl relative'>
                    <BiShoppingBag />
                    <span className='iconDesign'>0</span>
                    </div>

                </div>
                {/* Mobile navigation  */}
                <MobileNavigation/>
            </Container>
        </div>
    );
};

export default MiddleHeader;