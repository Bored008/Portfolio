import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const Mortend = localFont({
    src: "../fonts/MortendBold.otf"
})

const Gilroy = localFont({
    src: "../fonts/Gilroy-Black.ttf"
})

const skillsData = [
    { name: 'HTML', icon: '/Html 5.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'CSS', icon: '/CSS3.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'JavaScript', icon: '/JavaScript.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'React', icon: '/React.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Next.js', icon: '/Next.js.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Node.js', icon: '/Node Js.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Express', icon: '/Express Js.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'MongoDB', icon: '/Mongo Db.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Tailwind CSS', icon: '/Tailwind CSS.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Git', icon: '/Git.svg', desktopHeight: 'h-[30px]', mobileHeight: 'h-[21px]' },
    { name: 'Java', icon: '/Java.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Figma', icon: '/Figma.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Framer', icon: '/Framer.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'Vercel', icon: '/Vercel.svg', desktopHeight: 'h-[32px]', mobileHeight: 'h-[21px]' },
    { name: 'GSAP', icon: '/gsap.svg', desktopHeight: 'h-[30px]', mobileHeight: 'h-[21px]' },
    { name: 'Motion', icon: '/Motion.svg', desktopHeight: 'h-[20px]', mobileHeight: 'h-[15px]' },
];

const desktopRows = [
    skillsData.slice(0, 4),   // Row 1: 4 items
    skillsData.slice(4, 7),   // Row 2: 3 items
    skillsData.slice(7, 11),  // Row 3: 4 items
    skillsData.slice(11, 14), // Row 4: 3 items
    skillsData.slice(14, 16)  // Row 5: 2 items
];


const Skills = () => {
    return (
        <div className='z-1' id='skills'>

            {/* for desktop screen */}
            <div className='w-full aspect-[1653/929] bg-[url("/bars.png")] max-w-none min-w-[10px] bg-no-repeat bg-center bg-[size:100%_auto] items-center flex flex-col hidden md:flex text-white'>
                <div className={`${Gilroy.className} bg-[url("/skillboard.svg")] w-[386px] h-[178px] bg-no-repeat bg-contain flex justify-center items-center bg-center`}>
                    <div className='text-7xl pt-17 text-black'>
                        Skills
                    </div>
                </div>
                
                <div className='flex gap-[64px] gap-y-[36px] mt-[52px] flex-wrap justify-center px-[64px] max-w-[1200px]'>
                    {skillsData.map((skill, index) => (
                        <div key={index} className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black'>
                            <img src={skill.icon} className={skill.desktopHeight} alt={skill.name} />
                            <div className='text-[24px]'>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* For mobile view */}
            <div className='flex flex-col justify-center items-center sm:hidden'>
                <div className={`${Gilroy.className} bg-[url("/skillboard.svg")] w-[150px] mt-7 bg-no-repeat bg-contain flex justify-center items-center bg-center`}>
                    <div className='text-[32px] pt-8 text-black'>
                        Skills
                    </div>
                </div>
                
                <div className='flex gap-[24px] gap-y-[18px] mt-[20px] text-white flex-wrap justify-center'>
                    {skillsData.map((skill, index) => (
                        <div key={index} className='gap-[8px] flex items-center justify-center border-2 border-white py-[8px] px-[12px] rounded-[12px] bg-black'>
                            <img src={skill.icon} className={skill.mobileHeight} alt={skill.name} />
                            <div className='text-[17px]'>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
