"use client";
import { useRef } from 'react';
import React from 'react'
import localFont from 'next/font/local'
import { MoveRight, MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const Mortend = localFont({
    src: "../fonts/MortendBold.otf"
})

const Gilroy = localFont({
    src: "../fonts/Gilroy-Black.ttf"
})

const Projects = () => {

    const projScrollContainerRef = useRef(null);
    const designScrollContainerRef = useRef(null);

    return (
        <div id='projects' className='z-1 text-white'>

            {/* Project */}
            <img src='/ProjectTag.svg' className='w-full object-cover object-center md:h-auto h-35' />
            {/* <div className='flex justify-end'>
                <button className='flex items-center gap-[8px] md:text-xl text-[12px] border-white border rounded-lg px-[12px] md:py-[8px] py-[5px] bg-black z-1 md:mr-[90px] mr-[40px]'>Show All
                    <MoveUpRight className='w-[18px] md:w-[40px]' />
                </button>
            </div> */}
            <div ref={projScrollContainerRef} className='flex md:mx-[90px] mt-[24px] md:mt-[32px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className='shrink-0 w-[90%] h-fit md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Paw.png" alt="Paw" className='rounded-[12px] border-2 border-t-1 border-white md:w-[353px]' />
                    <div className='flex justify-between items-center'>
                        <div className='text-[24px] mt-3 font-semibold'>Paw</div>
                        <a href='https://github.com/Bored008/Paw' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                            <div>Visit me</div>
                            <img src='Githubpr.svg' alt='githubicon' className='w-[24px]' />
                        </a>
                    </div>
                    <div className='md:text-[16px]'>Paw is a web application that simplifies the pet adoption journey for both adopters and rescue organizations. It provides an interactive experience where users can explore available pets, learn about pet care, and connect directly with adoption centers.</div>
                    <div className='flex flex-wrap mt-2 text-black gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TypeScript</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Local Storage API</div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] h-fit md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Docdesign.svg" alt="Docdesign" className=' md:w-[353px]' />
                    <div className='flex justify-between items-center'>
                        <div className='text-[24px] mt-3 font-semibold'>DocDesign</div>
                        <a href='https://github.com/Bored008/DocDesign' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                            <div>Visit me</div>
                            <img src='Githubpr.svg' alt='githubicon' className='w-[24px]' />
                        </a>
                    </div>
                    <div className='md:text-[16px]'>DocDesign is a web application that allows users to transform static document images into editable documents without recreating them. Whether it's a resume template, doc report, users can modify content, customize styling, and export the final document in multiple formats</div>
                    <div className='flex flex-wrap mt-2 text-black gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>React.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>MongoDB</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Generative ai</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] h-fit md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Githubprofileanalyzer.png" alt="Githubprofileanalyzer" className='rounded-[12px] border-2 border-t-1 border-white md:w-[353px]' />
                    <div className='flex justify-between items-center'>
                        <div className='text-[24px] mt-3 font-semibold'>Github Analyzer</div>
                        <a href='https://github.com/Bored008/github-profile-analyzer' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                            <div>Visit me</div>
                            <img src='Githubpr.svg' alt='githubicon' className='w-[24px]' />
                        </a>
                    </div>
                    <div className='md:text-[16px]'>GitHub Profile Analyzer is a developer-focused platform that transforms GitHub data into meaningful insights, allowing users to explore repositories, contributions, technology stacks, and coding activity through a clean and interactive interface.</div>
                    <div className='flex flex-wrap mt-2 text-black gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Next.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Express.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Neon PostgreSQL</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Bun</div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] h-fit md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col text-white'>
                    <img src="Aihealth.png" alt="AI Health" className='rounded-[12px] border-2 border-t-1 border-white md:w-[353px]' />
                    <div className='flex justify-between items-center'>
                        <div className='text-[24px] mt-3 font-semibold'>AI Health</div>
                        <a href='https://github.com/Bored008/AI-Health' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                            <div>Visit me</div>
                            <img src='Githubpr.svg' alt='githubicon' className='w-[24px]' />
                        </a>
                    </div>
                    <div className='md:text-[16px]'>AI Health is a secure web application that empowers users to analyze food images using their own personal AI quota. By leveraging Google's Gemini API via OAuth, users can get detailed nutrition breakdowns without relying on a shared developer key or paid subscription.</div>
                    <div className='flex flex-wrap mt-2 text-black gap-[8px]'>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Next.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Node.js</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Postgres Database</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>TailwindCSS</div>
                        <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Google Gemini 2.0 Flash</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[16px] gap-[12px] '>
                <img src="prev.svg" alt="prev button" className='cursor-pointer' onClick={() => {
                    projScrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
                }} />
                <img src="next.svg" alt="next button" className='cursor-pointer' onClick={() => {
                    projScrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
                }} />
            </div>

            {/* Design */}
            <div className='flex mt-[38px] justify-between items-center'>
                <div className={`${Gilroy.className} md:text-[44px] text-[36px] md:ml-[40px]`}>Web Designs</div>
                {/* <button className='flex items-center gap-[8px] md:text-[16px] text-[12px] border-white border rounded-lg px-[12px] md:py-[8px] py-[5px] bg-black z-1 md:mr-[90px] mr-[40px]'>Show All
                    <MoveUpRight className='w-[18px] md:w-[40px]' />
                </button> */}
            </div>
            <div ref={designScrollContainerRef} className='flex md:mx-[90px] md:mt-[24px] mt-[18px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className='shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="Paw.png" alt="Paw" className='border-2 border-white w-full rounded-[12px]' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>Paw- Pet Adoption Page</div>
                        </div>
                        <div className='md:text-[16px]'>A modern pet adoption platform built to help people discover, connect with, and adopt pets with ease.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=381-1002&t=1Qya7mG7HlEGUrkN-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="Moviely.svg" alt="Moviely" className='border-2 border-white w-full rounded-[12px]' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>Moviely Webdesign</div>
                        </div>
                        <div className='md:text-[16px]'>Designed a cinematic movie platform UI in Figma with a focus on content discovery, streamlined user journeys, and immersive visual experiences.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=349-2178&t=1Qya7mG7HlEGUrkN-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="Docdesign.svg" alt="Paw" className='w-full rounded-[12px]' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>Docdesign</div>
                        </div>
                        <div className='md:text-[16px]'>Clean UI/UX for DocDesign, enabling users to easily edit static document images and export them as customizable documents.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=225-555&t=1Qya7mG7HlEGUrkN-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="bmw.svg" alt="Bmw" className='w-full' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>A Premium Car Design</div>
                        </div>
                        <div className='md:text-[16px]'> A Car selling website Hero section design that attracts the customer with the custom navbar and clear clean ui.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Blender</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=197-555&t=9UhtvM2kPSxfU65i-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="Jewellary.svg" alt="Jewellary" className='w-full' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>A Jewellary Web Design</div>
                        </div>
                        <div className='md:text-[16px]'> A Premium Jewellary Hero section that will attract the customer and increase the sale of items placed.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=182-553&t=gb3cDCkQL20JmATY-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shrink-0 w-[90%] md:w-[48%] backdrop-blur-md md:h-fit border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 '>
                    <img src="Watch.svg" alt="Watch" className='md:w-[92%] w-full rounded-[12px]' />
                    <div>
                        <div className='flex justify-between'>
                            <div className='text-[24px] font-semibold'>Luxuary Watch WebDesign</div>
                        </div>
                        <div className='md:text-[16px]'>Designed a premium luxury watch landing page in Figma, focused on elegant typography, immersive visuals, and a high-end shopping experience.</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-wrap mt-3 text-black gap-[8px]'>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Figma</div>
                                <div className='bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]'>Framer</div>
                            </div>
                            <a href='https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=95-7&t=1Qya7mG7HlEGUrkN-1' target="_blank" className='flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black'>
                                <div>Visit me</div>
                                <img src='figmaproj.svg' alt='githubicon' className='w-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[16px] gap-[12px] '>
                <img src="prev.svg" alt="prev button" className='cursor-pointer' onClick={() => {
                    designScrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
                }} />
                <img src="next.svg" alt="next button" className='cursor-pointer' onClick={() => {
                    designScrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
                }} />
            </div>
        </div>
    )
}

export default Projects