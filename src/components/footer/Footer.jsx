import React from 'react'

const Footer = () => {
    return (
        <div className='z-1 mt-auto w-full'>
            {/* For Desktop */}
            <div className='bg-white md:px-[45px] md:pt-[45px] md:pb-[5px] md:mx-[126px] rounded-t-[35px] flex-col justify-center hidden md:flex'>
                <div className='bg-[url("/footerdesign.svg")] md:h-[464px] rounded-[18px] bg-cover bg-no-repeat bg-center flex justify-center items-end  md:gap-[8px]'>
                    <div className='bg-black text-white md:text-[16px] rounded-full md:px-[19px] md:py-[12px] md:mb-[29px] cursor-pointer'>Get Started Now</div>
                    <div className='bg-transparent text-black md:text-[16px] border border-black rounded-full md:px-[19px] cursor-pointer md:py-[12px] md:mb-[29px]'>Know More</div>
                </div>
                <div className='flex justify-between text-black my-[12px]'>
                    <div className='w-[281px] text-[16px]'>I bring innovative ideas to life through my designs and collaborations.</div>
                    <div>
                        <div className='font-semibold'>Stay Connected</div>
                        <div className='flex md:gap-[8px]'>
                            <a href="https://github.com/Bored008" target="_blank">
                                <img src="/Github.svg" alt="Github" className='cursor-pointer' />
                            </a>

                            <a href="https://www.linkedin.com/in/himanshuakabored/" target="_blank">
                                <img src="/LinkedIN.svg" alt="Linkedin" className='cursor-pointer' />
                            </a>

                            <a href="https://t.me/BoReD_Xagain" target="_blank">
                                <img src="/Telegram.svg" alt="Linkedin" className='cursor-pointer' />
                            </a>

                            <a href="https://x.com/Bored_OO8" target="_blank">
                                <img src="/X.svg" alt="Linkedin" className='cursor-pointer' />
                            </a>
                        </div>
                    </div>
                    <div>Copyright ©️ BORUI 2026</div>
                </div>
            </div>

            {/* For mobile version */}
            <div className='bg-white mx-[26px] rounded-t-[35px] flex flex-col sm:hidden'>
                <img src="/footerdesignmobile.svg" alt="footerdesign" className='h-full rounded-t-[24px] rounded-b-[8px] p-[12px]' />
                <div className='text-[16px] text-black text-center mx-5'>I bring innovative ideas to life through my designs and collaborations.</div>
                <div className='flex justify-center mt-[8px] gap-[6px]'>
                    <div className='bg-black text-white text-[12px] rounded-full px-[12px] py-[8px] cursor-pointer'>Get Started Now</div>
                    <div className='bg-transparent text-black border border-black text-[12px] rounded-full px-[12px] py-[8px] cursor-pointer'>Know More</div>
                </div>
                <div className='flex flex-col text-black my-[12px] items-center'>
                    <div className='font-semibold text-[16px]'>Stay Connected</div>
                    <div className='flex gap-[8px]'>
                        <a href="https://github.com/Bored008" target="_blank">
                            <img src="/Github.svg" alt="Github" className='cursor-pointer' />
                        </a>

                        <a href="https://www.linkedin.com/in/himanshuakabored/" target="_blank">
                            <img src="/LinkedIN.svg" alt="Linkedin" className='cursor-pointer' />
                        </a>

                        <a href="https://t.me/BoReD_Xagain" target="_blank">
                            <img src="/Telegram.svg" alt="Linkedin" className='cursor-pointer' />
                        </a>

                        <a href="https://x.com/Bored_OO8" target="_blank">
                            <img src="/X.svg" alt="Linkedin" className='cursor-pointer' />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-black mt-[24px] text-[14px]'>Copyright ©️ BORUI 2026</div>
                </div>
            </div>
        </div>
    )
}

export default Footer