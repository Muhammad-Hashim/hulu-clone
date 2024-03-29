import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import Headerbutton from './Headerbutton'
const Header = () => {
    return (
        <header className="flex items-center justify-between h-12 p-0 m-0 border-b-2 border-gray-700 ">
            <div className='m-2'>
                <Image src={logo} alt='logo' width={75} height={75} />
            </div>

            <div>
                <Headerbutton />
            </div>

            <div className='flex gap-8 mr-6 ' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </div>
        </header>
    )
}

export default Header