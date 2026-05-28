import React from 'react'
import localFont from 'next/font/local'
import { House, MessagesSquare, Menu } from "lucide-react"

const Mortend = localFont({
    src: "../../fonts/MortendBold.otf"
})

const Navbar1 = () => {
    return (
        <div className='flex justify-between items-center px-4 md:px-60 md:mt-4 mt-1 '>
            <div className={`${Mortend.className} text-white text-[16px] md:text-[32px]`}>BORUI</div>
            <div className='flex md:text-[16px] text-[12px] text-white md:gap-[44px] gap-[16px] bg-black md:py-[5px] md:px-[5px] py-[4px] px-[4px] md:rounded-full rounded items-center'>
                <a href="" className=' flex bg-white text-black rounded md:py-[3px] md:px-[12px] px-[4px] py-[1px] items-center md:rounded-full gap-[3px]'>
                    <House className='md:size-[15px] size-3' />
                    Home
                </a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="" className='md:mr-3 mr-2 hidden md:flex'>Blogs</a>
                <a href="" className='md:mr-3 mr-2 sm:hidden'>Contact me</a>
            </div>
            <div className=' text-white flex items-center gap-[6px] bg-black md:px-[14px] md:py-[12px] py-1 px-3 rounded hidden md:flex'>
                <MessagesSquare className='md:size-[15px] size-3' />
                <a href="" className='md:text-1 text-[12px]'>Lets Talk</a>
            </div>
        </div>
    )
}

export default Navbar1
