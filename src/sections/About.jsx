import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col h-96 items-center gap-4 mt-9 md:mt-0' id='about'>
      <img src='/about.svg' alt='Web Designer & Developer' className='md:w-[659px] w-[380px]'/>
      <div>
        <div className='backdrop-blur-md border border-white/50 text-white  rounded-[24px] shadow-2xl mx-4 md:p-6 p-5 flex flex-col items-center md:gap-[12px] gap-[8px]'>
          <div className='flex flex-wrap md:w-150 md:text-2xl  text-center'>Premium web design, development, and services
            to help your business stand out.
          </div>
          <div className='flex mt-[12px] justify-center gap-[12px]'>
            <button className='md:text-xl border-white border rounded-[12px] px-[19px] py-[12px] bg-black'>Hire me</button>
            <button className='md:text-xl border-white border rounded-[12px] px-[19px] py-[12px] bg-black'>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
