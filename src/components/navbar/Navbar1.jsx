import React from 'react'
import localFont from 'next/font/local'
import { House, MessagesSquare, Menu } from "lucide-react"

const Mortend = localFont({
    src: "../../fonts/MortendBold.otf"
})

const Navbar1 = () => {
    return (
        <div className='flex justify-between items-center px-4 md:px-60 md:mt-4 mt-1'>
            <div className={`${Mortend.className} text-white text-[16px] md:text-[32px]`}>BORUI</div>
            <div className='fixed top-1 md:top-4 left-1/2 -translate-x-1/2 z-[100] flex md:text-[16px] text-[12px] text-white md:gap-[44px] gap-[16px] bg-black md:py-[5px] md:px-[5px] py-[4px] px-[4px] md:rounded-full rounded items-center shadow-lg'>
                <a href="#home" className=' flex bg-white text-black rounded md:py-[3px] md:px-[12px] px-[4px] py-[1px] items-center md:rounded-full gap-[3px]'>
                    <House className='md:size-[15px] size-3' />
                    Home
                </a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#faq" className='md:mr-3 mr-2 hidden md:flex'>FAQ</a>
                <a href="https://www.linkedin.com/in/himanshuakabored/" className='md:mr-3 mr-2 sm:hidden'>Contact me</a>
            </div>
            <div className=' text-white items-center gap-[6px] bg-black md:px-[14px] md:py-[12px] py-1 px-3 rounded hidden md:flex'>
                <MessagesSquare className='md:size-[15px] size-3' />
                <a href="https://www.linkedin.com/in/himanshuakabored/" className='md:text-1 text-[12px]'>Lets Connect</a>
            </div>
        </div>
    )
}

export default Navbar1
