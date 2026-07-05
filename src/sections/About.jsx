"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import gsap from 'gsap';
import { easeInOut, motion } from 'motion/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const RockyBilly = localFont({
  src:"../fonts/Rockybilly.ttf"
})

const About = () => {
  useEffect(()=>{
    const tl=gsap.timeline({scrollTrigger:{
        trigger:".about",
        start:"top+=150 bottom",
        end:"top+=600 bottom",
        scrub:2,
        markers:false
      },});
    tl.from(".about >*",{
      z:-500,
      opacity:0,
      duration:2,
      stagger:0.5
    })
  },[])
  return (
    <motion.div 
    // initial={{opacity:0,z:-500}}
    // whileInView={{opacity:1,z:1}}
    // viewport={{margin:"-20px",amount:0.5}}
    className='about flex flex-col items-center gap-4 mt-9 md:mt-0 pt-6' id='about'
    style={{perspective:"1000px"}}>
      <div className='relative overflow-visible'>
        <div className='flex flex-col items-center'>
          <div className='relative'>
            <motion.div animate={{opacity:[1, 0, 1]}} transition={{duration:2, repeat:Infinity, ease:"easeInOut"}}
              className={`${RockyBilly.className} text-transparent text-stroke absolute top-0 left-0 text-3xl md:text-7xl leading-[3.4]`}>Web Designer</motion.div>
            <div className={`${RockyBilly.className} z-[20] bg-gradient-to-b from-[#EA8E4B] to-[#FAED44] bg-clip-text text-transparent text-3xl md:text-7xl leading-[3.7]`}>Web Designer</div>
          </div>
          <div className='relative -mt-10 md:-mt-20'>
            <motion.div animate={{opacity:[1, 0, 1]}} transition={{duration:2, repeat:Infinity, ease:"easeInOut"}}
              className={`${RockyBilly.className} text-transparent text-stroke absolute top-0 left-0 text-3xl md:text-7xl leading-[3.4]`}>& Developer</motion.div>
            <div className={`${RockyBilly.className} bg-gradient-to-b from-[#EA8E4B] to-[#FAED44] bg-clip-text text-transparent text-3xl md:text-7xl leading-[3.7]`}>& Developer</div>
          </div>
        </div>
      </div>
      <div>
        <div className='backdrop-blur-md border border-white/50 text-white  rounded-[24px] shadow-2xl mx-4 md:p-6 p-5 flex flex-col items-center md:gap-[12px] gap-[8px]'>
          <div className='flex flex-wrap md:w-150 md:text-xl font-normal text-neutral-300 text-center'
          style={{fontFamily:"var(--font-geist-sans)"}}
          >Premium web design, development, and services
            to help your business stand out.
          </div>
          <div className='flex mt-[12px] justify-center gap-[12px]'>
            <a href='https://www.linkedin.com/in/himanshuakabored/' className='md:text-md border-white border rounded-[12px] px-[12px] py-[8px] bg-black'>Hire me</a>
            <a href='/Himanshu_D_Resume.pdf' download="Himanshu_D_Resume.pdf" className='md:text-md border-white border rounded-[12px] px-[12px] py-[8px] bg-black'>Download CV</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
