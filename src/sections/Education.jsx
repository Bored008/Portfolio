import React from 'react'

const Education = () => {
    return (
        <div className='text-white' id='education'>
            <div className='flex justify-center'>
                <img src='/Educationbanner.svg' className='md:w-1/3 w-1/2' />
            </div>
            <div>
                <div className='backdrop-blur-md border border-white/50 md:p-[14px] p-[8px] rounded md:mx-[126px] mx-[30px] mt-4'>
                    <div className='md:text-[32px] text-[18px]'>Bachelor in Technology - Electronics and Communication</div>
                    <div className='md:text-[24px] text-[14px]'>Dcrust, Murthal</div>
                    <div className='md:text-[16px] text-[12px]'>2024-2028</div>
                </div>
                <div className='backdrop-blur-md border border-white/50 md:p-[14px] p-[8px] rounded md:mx-[126px] mx-[30px] mt-4'>
                    <div className='md:text-[32px] text-[18px]'>Senior Secondary (12th) - Non-medical</div>
                    <div className='md:text-[24px] text-[14px]'>Indian Modern Senior Secondary School, Sonipat, Haryana </div>
                    <div className='md:text-[16px] text-[12px]'>2022-2023 </div>
                </div>
            </div>
        </div>
    )
}

export default Education