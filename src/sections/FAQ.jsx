import React, { useState } from 'react'
import localFont from 'next/font/local'

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf"
})

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What design services do you offer?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    },
    {
      question: "What overall services do you offer?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    },
    {
      question: "How does your design process typically work?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    },
    {
      question: "How do I start a project with you?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    },
    {
      question: "Are you open to collaboration?",
      answer: "I offer a range of design services, including [List specific services, e.g., User interface (UI) and user experience (UX) design for web/mobile applications, and simple portfolio/business website development]."
    }
  ];

  const toggleQuestion = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }
  return (
    <div className='md:flex md:gap-[120px] md:px-[126px] z-1'>
      <div className='flex flex-col md:w-1/2 justify-start'>
        <div>
          <div className={`${Gilroy.className} md:text-[64px] text-4xl md:mb-4 md:w-2/3`}>Questions for me ?</div>
          <div className='md:text-[16px] md:w-2/3'>Here are some common questions along with their answers to help clear up any confusion.</div>
        </div>
      </div>
      <div className='flex flex-col md:w-1/2 gap-y-3'>
        {faqs.map((faq, index) => (
          <div key={index} onClick={() => toggleQuestion(index)} className={`flex flex-col cursor-pointer backdrop-blur-md border border-white/50 md:px-[19px] md:py-[14px] rounded-2xl items-start
           ${openIndex === index ? 'bg-white text-black':' text-white border border-white/50 backdrop-blur-md'}`}>
            <div className='flex justify-between items-center w-full'>
              <div className='md:text-[20px] font-bold mb-5'>{faq.question}</div>
              <img src="/arrow.svg" alt="arrow" className={`md:w-[30px] transition-transform duration-300 ${openIndex===index ? 'rotate-180':'invert'}`} />
            </div>
            {openIndex === index && (
              <div className='animate-fade-in text-gray-700'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ