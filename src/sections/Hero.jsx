"use client"
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Navbar1 from '@/components/navbar/Navbar1'

const HeyFont = localFont({
  src: "../fonts/Feeling Passionate Personal Use Only.ttf"
})

const Mortend = localFont({
  src: "../fonts/MortendBold.otf"
})

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <Navbar1 />
      </div>
      <div className='grid grid-col-1 grid-row-1'>
        <img src="/myimage.png" alt='my photo' className='md:w-[1264px] md:h-[803px] h-[265px] w-[350px] md:mt-0 mt-15 z-10 border-white md:border-t-0 border-y-10 border-x-8 md:rounded-t-none rounded-[32]' />
      </div>
      <div className=''>
        <div className={`${HeyFont.className} md:text-[86px] text-3xl text-white z-20 absolute md:top-130 md:left-[14%] top-65 left-15`}>Hey,👋</div>
        <div className={`${Mortend.className} md:text-[126px] text-3xl text-white z-20 absolute md:top-158 md:left-[14%] top-84 left-5`}>I AM</div>
        <div className={`${Mortend.className} md:text-[126px] text-4xl bg-yellow-500 md:bg-transparent text-white z-20 absolute md:top-185 md:left-[14%] top-90 left-29`}>HIMANSHU</div>
        <img src="/Boredlogo.svg" alt='boredlogo' className='md:w-[248px] md:h-[116px] w-[80px] md:bg-yellow-500 bg-transparent absolute md:top-168 md:left-260 z-19 top-82 left-80' />
      </div>
    </div>
  )
}

export default Hero