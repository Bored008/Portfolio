"use client"
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Navbar1 from '@/components/navbar/Navbar'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import ShinyText from '@/components/effects/ShinyText'

gsap.registerPlugin(ScrambleTextPlugin);

const HeyFont = localFont({
  src: "../fonts/FeelingPassionate.ttf"
})

const Mortend = localFont({
  src: "../fonts/MortendBold.otf"
})

const Hero = () => {
  useEffect(()=>{
  const tl = gsap.timeline();
  tl.from(".name *:not(.scrambleName)",{x:20,duration:1,stagger:0.5,delay:0.4,opacity:0});
  gsap.to(".scrambleName",{
    scrambleText:{
      text:"HIMANSHU",
      chars:"!@#$%&*",
      speed:0.5,
      revealDelay:0.5
    },
    duration:2.5
  })
  },[]);

  return (
    <div className='flex justify-center' id='home'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <Navbar1 />
      </div>
      <div className='grid grid-col-1 grid-row-1'>
        <img src="/myimage.png" alt='my photo' className='md:w-[1264px] md:h-[803px] h-[265px] w-[350px] md:mt-0 mt-15 z-10 border-white md:border-t-0 border-b-8 border-t-2 border-x-5 md:rounded-t-none rounded-[32]' />
      </div>
      <div className='name'>
        <div className={`${HeyFont.className} md:text-[86px] text-3xl text-white z-20 absolute md:top-110 md:left-[14%] top-59 left-15`}>Hey,</div>
        <div className={`${Mortend.className} md:text-[126px] text-3xl text-white z-20 absolute md:top-138 md:left-[14%] top-70 left-15`}>I AM</div>
        <div className={`${Mortend.className} scrambleName md:text-[126px] text-[40px] px-4 bg-transparent text-white z-20 absolute md:top-165 md:left-[14%] top-80 left-12`}>HIMANSHU</div>
        <img src="/Boredlogo.svg" alt='boredlogo' className='img md:w-[248px] md:h-[116px] w-[90px] bg-yellow-500 bg-transparent absolute md:top-148 md:left-260 z-19 top-75 left-78' />
      </div>
    </div>
  )
}

export default Hero