import React from 'react'
import localFont from 'next/font/local'
import { MoveRight, MoveUpRight } from "lucide-react"

const Projects = () => {
    return (
        <div id='projects'>
            <img src='/ProjectTag.svg' className='w-full object-cover object-center md:h-auto h-35' />
            <div className='flex justify-end'>
                <button className='flex items-center gap-[8px] md:text-xl text-[12px] border-white border rounded-lg px-[12px] md:py-[8px] py-[5px] bg-black z-1 md:mr-[90px] mr-[40px]'>Show All
                    <MoveUpRight className='w-[18] md:w-[40]' />
                </button>
            </div>
            <div className='flex overflow-x-auto snap-x snap-mandatory md:mx-[117px] md:mt-[32px] gap-[32px] '>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
                <div className='snap-0 snap-center md:w-[381] border border-white md:rounded-[19px] '>
                    <img src="Docdesign.svg" alt="Docdesign" className='m-[14px]' />
                    <div>DocDesign</div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Projects