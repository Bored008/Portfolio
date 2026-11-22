"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar1 from '@/components/navbar/Navbar';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { feelingPassionate, mortend } from "@/fonts";

gsap.registerPlugin(ScrambleTextPlugin);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

    return (
        <div ref={heroRef} className='flex justify-center relative' id='home'>
            <div className='absolute top-0 left-0 w-full z-50'>
                <Navbar1 />
            </div>
            <div className='grid grid-col-1 grid-row-1'>
                <Image
                    src="/myimage.webp"
                    alt='my photo'
                    width={1264}
                    height={803}
                    priority
                    className='xl:w-[1264px] xl:h-[803px] md:w-[700px] md:h-[480px] h-[265px] w-[350px] xl:mt-0 md:mt-15 mt-15 z-10 border-white xl:border-t-0 border-b-8 border-t-2 border-x-5 xl:rounded-t-none md:rounded-[32px] rounded-[32px] object-cover'
                />
            </div>
            <div className='name'>
                <div className={`${feelingPassionate.className} xl:text-[86px] md:text-[60px] text-3xl px-4 text-white z-20 absolute xl:top-110 md:top-[280px] xl:left-[14%] md:left-[10%] top-59 left-15`}>Hey,</div>
                <div className={`${mortend.className} xl:text-[126px] md:text-[80px] text-3xl px-4 text-white z-20 absolute xl:top-138 md:top-[340px] xl:left-[14%] md:left-[10%] top-70 left-15`}>I AM</div>
                <div className={`${mortend.className} scrambleName xl:text-[126px] md:text-[80px] text-[40px] px-4 bg-transparent text-white z-20 absolute xl:top-165 md:top-[420px] xl:left-[14%] md:left-[10%] top-80 left-12`}>HIMANSHU</div>
                <Image
                    src="/Boredlogo.svg"
                    alt='boredlogo'
                    width={248}
                    height={116}
                    priority
                    className='img xl:w-[248px] xl:h-[116px] md:w-[150px] md:h-[70px] w-[90px] bg-transparent absolute xl:top-148 md:top-[400px] xl:left-260 md:left-[60%] z-19 top-75 left-78'
                />
            </div>
        </div>
    );
};

export default Hero;
