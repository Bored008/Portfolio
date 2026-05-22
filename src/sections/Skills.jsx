import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const Mortend = localFont({
    src: "../fonts/MortendBold.otf"
})

const Gilroy = localFont({
    src: "../fonts/Gilroy-Black.ttf"
})

const Skills = () => {
    return (
        <div className='mt:20 md:mt-40'>
            <div className='w-full aspect-[1653/929] bg-[url("/bars.png")] bg-no-repeat bg-center bg-[size:100%_auto] items-center flex flex-col hidden md:flex text-white'>
                <div className={`${Gilroy.className} bg-[url("/skillboard.svg")] w-[386px] h-[178px] mt-7 bg-no-repeat bg-contain flex justify-center items-center bg-center`}>
                    <div className='text-7xl pt-17 text-black'>
                        Skills
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[70px]'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Html 5.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            HTML
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/CSS3.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            CSS
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/JavaScript.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            JavaScript
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/React.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            React
                        </div>
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[47px]'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Next.js.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Next.js
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Node js.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Node.js
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Express js.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Express
                        </div>
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[47px]'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Mongo Db.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            MongoDB
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Tailwind CSS.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Tailwind CSS
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Git.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Git
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Java.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Java
                        </div>
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[47px]'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Figma.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Figma
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Framer.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Framer
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Vector.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            Vercel
                        </div>
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[47px]'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/gsap.svg' className='h-[30px]'/>
                        <div className='text-[27px]'>
                            GSAP
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Motion.svg' className='h-[20px]'/>
                        <div className='text-[27px]'>
                            Motion
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center sm:hidden'>
                <div className={`${Gilroy.className} bg-[url("/skillboard.svg")] w-[150px] mt-7 bg-no-repeat bg-contain flex justify-center items-center bg-center`}>
                    <div className='text-[32px] pt-10 text-red'>
                        Skills
                    </div>
                </div>
                <div className='flex gap-[64px] mt-[70px] text-white'>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/Html 5.svg' className='h-[32px]'/>
                        <div className='text-[17px]'>
                            HTML
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[1px] px-[15px] rounded-[12px] bg-black'>
                        <img src='/CSS3.svg' className='h-[15px]'/>
                        <div className='text-[17px]'>
                            CSS
                        </div>
                    </div>
                    <div className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                        <img src='/JavaScript.svg' className='h-[32px]'/>
                        <div className='text-[27px]'>
                            JavaScript
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
