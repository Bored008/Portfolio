"use client";
import React, { useEffect } from 'react';
import localFont from 'next/font/local';
import Navbar1 from '@/components/navbar/Navbar';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const HeyFont = localFont({
  src: "../fonts/FeelingPassionate.ttf"
});

const Mortend = localFont({
  src: "../fonts/MortendBold.otf"
});

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".name *:not(.scrambleName)", { x: 20, duration: 1, stagger: 0.5, delay: 0.4, opacity: 0 });
    gsap.to(".scrambleName", {
      scrambleText: {
        text: "HIMANSHU",
        chars: "!@#$%&*",
        speed: 0.5,
        revealDelay: 0.5
      },
      duration: 2.5
    });
  }, []);

    return (
        <div className='flex justify-center' id='home'>
            <div className='absolute top-0 left-0 w-full z-50'>
                <Navbar1 />
            </div>
            <div className='grid grid-col-1 grid-row-1'>
                <img
                    src="/myimage.webp"
                    alt='my photo'
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className='xl:w-[1264px] xl:h-[803px] md:w-[700px] md:h-[480px] h-[265px] w-[350px] xl:mt-0 md:mt-15 mt-15 z-10 border-white xl:border-t-0 border-b-8 border-t-2 border-x-5 xl:rounded-t-none md:rounded-[32px] rounded-[32px] object-cover'
                />
            </div>
            <div className='name'>
                <div className={`${HeyFont.className} xl:text-[86px] md:text-[60px] text-3xl text-white z-20 absolute xl:top-110 md:top-[280px] xl:left-[14%] md:left-[10%] top-59 left-15`}>Hey,</div>
                <div className={`${Mortend.className} xl:text-[126px] md:text-[80px] text-3xl text-white z-20 absolute xl:top-138 md:top-[340px] xl:left-[14%] md:left-[10%] top-70 left-15`}>I AM</div>
                <div className={`${Mortend.className} scrambleName xl:text-[126px] md:text-[80px] text-[40px] px-4 bg-transparent text-white z-20 absolute xl:top-165 md:top-[420px] xl:left-[14%] md:left-[10%] top-80 left-12`}>HIMANSHU</div>
                <img src="/Boredlogo.svg" alt='boredlogo' loading="eager" decoding="async" className='img xl:w-[248px] xl:h-[116px] md:w-[150px] md:h-[70px] w-[90px] bg-transparent absolute xl:top-148 md:top-[400px] xl:left-260 md:left-[60%] z-19 top-75 left-78' />
            </div>
        </div>
    );
};

export default Hero;
