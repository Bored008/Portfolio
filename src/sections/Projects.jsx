"use client";
import { useRef } from 'react';
import React from 'react'
import localFont from 'next/font/local'
import { MoveRight, MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const Projects = () => {

    const scrollContainerRef = useRef(null);
    return (
        <div id='projects'>
            <img src='/ProjectTag.svg' className='w-full object-cover object-center md:h-auto h-35' />
            <div className='flex justify-end'>
                <button className='flex items-center gap-[8px] md:text-xl text-[12px] border-white border rounded-lg px-[12px] md:py-[8px] py-[5px] bg-black z-1 md:mr-[90px] mr-[40px]'>Show All
                    <MoveUpRight className='w-[18px] md:w-[40px]' />
                </button>
            </div>
            <div ref={scrollContainerRef} className='flex md:mx-[90px] md:mt-[32px] gap-[32px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className='shrink-0 md:w-[381px] border border-white md:rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Docdesign.svg" alt="Docdesign" className=' md:w-[353px]' />
                    <div className='flex justify-between'>
                        <div className='md:text-[24px] md:mt-[8px] font-semibold'>DocDesign</div>
                        <a href='https://github.com/Bored008/DocDesign' target="_blank" className='flex justify-center items-center'><img src='githubpr.svg' alt='githubicon' className='md:w-[32px]' /></a>
                    </div>
                    <div className='md:text-[16px]'>A Website that can convert the image, document into easy editable image wether it is a front page of project or resume details u want to edit for free.</div>
                    <div className='flex flex-wrap mt-3 text-black md:gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Generative ai</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                    </div>
                </div>
                <div className='shrink-0 md:w-[381px] border border-white md:rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Docdesign.svg" alt="Docdesign" className=' md:w-[353px]' />
                    <div className='flex justify-between'>
                        <div className='md:text-[24px] md:mt-[8px] font-semibold'>DocDesign</div>
                        <a href='https://github.com/Bored008/DocDesign' target="_blank" className='flex justify-center items-center'><img src='githubpr.svg' alt='githubicon' className='md:w-[32px]' /></a>
                    </div>
                    <div className='md:text-[16px]'>A Website that can convert the image, document into easy editable image wether it is a front page of project or resume details u want to edit for free.</div>
                    <div className='flex flex-wrap mt-3 text-black md:gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Generative ai</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                    </div>
                </div>
                <div className='shrink-0 snap-0 snap-center md:w-[381px] border border-white md:rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Docdesign.svg" alt="Docdesign" className=' md:w-[353px]' />
                    <div className='flex justify-between'>
                        <div className='md:text-[24px] md:mt-[8px] font-semibold'>DocDesign</div>
                        <a href='https://github.com/Bored008/DocDesign' target="_blank" className='flex justify-center items-center'><img src='githubpr.svg' alt='githubicon' className='md:w-[32px]' /></a>
                    </div>
                    <div className='md:text-[16px]'>A Website that can convert the image, document into easy editable image wether it is a front page of project or resume details u want to edit for free.</div>
                    <div className='flex flex-wrap mt-3 text-black md:gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Generative ai</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                    </div>
                </div>
                <div className='shrink-0 snap-0 snap-center md:w-[381px] border border-white md:rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Docdesign.svg" alt="Docdesign" className=' md:w-[353px]' />
                    <div className='flex justify-between'>
                        <div className='md:text-[24px] md:mt-[8px] font-semibold'>DocDesign</div>
                        <a href='https://github.com/Bored008/DocDesign' target="_blank" className='flex justify-center items-center'><img src='githubpr.svg' alt='githubicon' className='md:w-[32px]' /></a>
                    </div>
                    <div className='md:text-[16px]'>A Website that can convert the image, document into easy editable image wether it is a front page of project or resume details u want to edit for free.</div>
                    <div className='flex flex-wrap mt-3 text-black md:gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Generative ai</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:mt-[16px] md:gap-[12px] '>
                <img src="prev.svg" alt="prev button" className='cursor-pointer' onClick={()=>{
                    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth'})
                }}/>
                <img src="next.svg" alt="next button" className='cursor-pointer' onClick={()=>{
                    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth'})
                }}/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Projects