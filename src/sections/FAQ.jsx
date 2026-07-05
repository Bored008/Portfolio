import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { motion } from 'framer-motion';

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf"
})

const FAQ = () => {

  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from(".heading",{
      x:-20,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".page",
        start:"top+=150 bottom",
        end:"top+=250 bottom",
        markers:false,
        scrub:2
      }
    })

    tl.from(".card >*",{
      x:10,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:".card",
        start:"top+=150 bottom",
        end:"top+=500 bottom",
        markers:false,
        scrub:2
      }
    })
  },[])

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What design services do you offer?",
      answer: "I specialize in UI/UX design, creating intuitive user interfaces, engaging user experiences, and responsive wireframes using tools like Figma."
    },
    {
      question: "What overall services do you offer?",
      answer: "As a Full Stack Developer and Designer, I offer end-to-end solutions: from UI/UX design and prototyping to building the frontend and setting up the backend database."
    },
    {
      question: "How does your process typically work?",
      answer: "We start with a discovery chat, followed by wireframing and design. Once approved, I move into full-stack development, testing, and final deployment."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "A landing page might take 1-2 weeks, while a full-stack web application can take 3-6 weeks depending on the complexity and feature requirements."
    },
    {
      question: "How do I start a project with you?",
      answer: "Just send me a message through the contact section! We'll set up a quick call to discuss your goals, timeline, and project requirements."
    },
    {
      question: "Are you open to collaboration?",
      answer: "Absolutely! I love teaming up with other developers, designers, or agencies on exciting UI/UX or full-stack projects."
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
    <div className='page text-white md:flex md:gap-[120px] md:px-[126px] z-1' id='faq'>
      <div className='flex flex-col md:w-1/2 justify-start'>
        <div className='heading flex flex-col items-center md:items-start'>
          <div className={`${Gilroy.className} md:text-[64px] text-4xl md:mb-4 md:w-2/3`}>Questions for me ?</div>
          <div className='md:text-[16px] mx-3 mb-5 text-center md:text-start md:mx-0 md:w-2/3'>Here are some common questions along with their answers to help clear up any confusion.</div>
        </div>
      </div>
      <div className='card flex flex-col md:w-1/2 gap-y-3'>
        {faqs.map((faq, index) => (
          <motion.div 
          layout
          key={index} onClick={() => toggleQuestion(index)} className={`flex flex-col cursor-pointer backdrop-blur-md border border-white/50 md:px-[19px] mx-[30px] md:mx-0 md:py-[14px] px-4 p-2 md:rounded-2xl rounded-xl
           ${openIndex === index ? 'bg-white text-black':' text-white border border-white/50 backdrop-blur-md'}`}>
            <div className='flex justify-between w-full'>
              <div className='md:text-[20px] font-bold '>{faq.question}</div>
              <img src="/Arrow.svg" alt="arrow" className={`md:w-[30px] w-[25px] transition-transform duration-300 ${openIndex===index ? 'rotate-0':'rotate-180 invert'}`} />
            </div>
            {openIndex === index && (
              <div className='animate-fade-in mt-1 md:mt-2 text-gray-500'>{faq.answer}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQ