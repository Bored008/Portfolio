"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from("#education >*", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#education",
                start: "top 80%",
                end: "top 20%",
                scrub: 1
            }
        });
    }, []);

    return (
        <div className='text-white' id='education'>
            <div className='flex justify-center'>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        y: -10,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        }
                    }}
                    className='flex justify-center'
                >
                    <img src='/Educationbanner.svg' alt="Education Banner" loading="lazy" decoding="async" className='md:w-full w-1/2' />
                </motion.div>
            </div>
            <div className='flex flex-col w-full md:px-[126px] px-[30px] mt-8 gap-4'>
                <motion.div
                    initial="rest"
                    whileHover="hover"
                    className='relative overflow-hidden group flex w-full flex-col backdrop-blur-md border border-white/50 md:p-[24px] p-[16px] rounded-2xl cursor-pointer'
                >
                    <motion.span
                        className="absolute inset-0 bg-white origin-right"
                        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                    <div className='z-10 relative group-hover:text-black transition-colors duration-300 w-full text-left'>
                        <div className='md:text-[32px] text-[18px] font-bold leading-tight'>Bachelor in Technology - Electronics and Communication</div>
                        <div className='md:text-[24px] text-[14px] mt-1 md:mt-2'>Dcrust, Murthal</div>
                        <div className='md:text-[16px] text-[12px] mt-1 text-neutral-300 group-hover:text-neutral-700 transition-colors'>2024-2028</div>
                    </div>
                </motion.div>

                <motion.div
                    initial="rest"
                    whileHover="hover"
                    className='relative overflow-hidden group flex w-full flex-col backdrop-blur-md border border-white/50 md:p-[24px] p-[16px] rounded-2xl cursor-pointer'
                >
                    <motion.span
                        className="absolute inset-0 bg-white origin-right"
                        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                    <div className='z-10 relative group-hover:text-black transition-colors duration-300 w-full text-left'>
                        <div className='md:text-[32px] text-[18px] font-bold leading-tight'>Senior Secondary (12th) - Non-medical</div>
                        <div className='md:text-[24px] text-[14px] mt-1 md:mt-2'>Indian Modern Senior Secondary School, Sonipat, Haryana</div>
                        <div className='md:text-[16px] text-[12px] mt-1 text-neutral-300 group-hover:text-neutral-700 transition-colors'>2022-2023</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
