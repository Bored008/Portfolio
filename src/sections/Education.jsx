import React, { useEffect } from 'react'
import AnimatedButton from '@/components/effects/AnimatedButton'
import { easeIn, motion, scale } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Education = () => {
    useEffect(()=>{
        const tl = gsap.timeline()
        tl.from("#education >*" , {
            y:100,
            opacity:0,
            duration:0.8,
            stagger:0.3,
            scrollTrigger:{
                trigger:"#education",
                start:"top 80%",
                end:"top 20%",
                scrub:1
            }
        })
    },[])
    return (
        <div className='text-white' id='education'>
            <div className='flex justify-center'>
                <motion.div
                whileHover={{
                    scale:1.1,
                    y:-10,
                    transition:{
                        duration:0.3,
                        ease:"easeInOut"
                    }
                }}
                className='flex justify-center'>
                    <img src='/Educationbanner.svg' className='md:w-full w-1/2' />
                </motion.div>
            </div>
            <div>
                <AnimatedButton className='flex backdrop-blur-md border border-white/50 md:p-[14px] p-[8px] rounded md:mx-[126px] mx-[30px] mt-4'>
                    <div className='group-hover:text-black'>
                        <div className='md:text-[32px] text-[18px]'>Bachelor in Technology - Electronics and Communication</div>
                        <div className='md:text-[24px] text-[14px]'>Dcrust, Murthal</div>
                        <div className='md:text-[16px] text-[12px]'>2024-2028</div>
                    </div>
                </AnimatedButton>
                <AnimatedButton className='flex backdrop-blur-md border border-white/50 md:p-[14px] p-[8px] rounded md:mx-[126px] mx-[30px] mt-4 group'>
                    <div className='group-hover:text-black'>
                        <div className='md:text-[32px] text-[18px]'>Senior Secondary (12th) - Non-medical</div>
                        <div className='md:text-[24px] text-[14px]'>Indian Modern Senior Secondary School, Sonipat, Haryana </div>
                        <div className='md:text-[16px] text-[12px]'>2022-2023 </div>
                    </div>
                </AnimatedButton>
            </div>
        </div>
    )
}

export default Education