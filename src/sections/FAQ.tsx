"use client";
import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf"
});

interface FAQItemData {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".faq-heading", {
        x: -20,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top+=150 bottom",
          end: "top+=250 bottom",
          markers: false,
          scrub: 2
        }
      });

      tl.from(".faq-card-container > *", {
        x: 10,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".faq-card-container",
          start: "top+=150 bottom",
          end: "top+=500 bottom",
          markers: false,
          scrub: 2
        }
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  const faqs: FAQItemData[] = [
    {
      question: "What design services do you offer?",
      answer: "I provide UI/UX design, design systems, interactive prototypes, and wireframes in Figma."
    },
    {
      question: "What development services do you offer?",
      answer: "I build responsive frontends with Next.js and TypeScript, integrate APIs, and set up backend databases with Node.js and PostgreSQL."
    },
    {
      question: "How does your process typically work?",
      answer: "We review requirements, create Figma wireframes, iterate on feedback, and implement the application with tests and deployment."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "A landing page takes one to two weeks. A full-stack web application takes three to six weeks depending on features."
    },
    {
      question: "How do I start a project with you?",
      answer: "Reach out via LinkedIn or email to schedule an initial call about your scope, timeline, and goals."
    },
    {
      question: "Are you open to collaboration?",
      answer: "Yes. I collaborate with engineering teams, design studios, and open-source contributors on product development."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div ref={faqRef} className='page text-white md:flex md:gap-[120px] md:px-[126px] z-1' id='faq'>
      <div className='flex flex-col md:w-1/2 justify-start'>
        <div className='sticky top-0 faq-heading flex flex-col items-center md:items-start'>
          <div className={`${Gilroy.className} md:text-[64px] text-4xl md:mb-4 md:w-2/3`}>Questions for me?</div>
          <div className='md:text-[16px] mx-3 mb-5 text-center md:text-start md:mx-0 md:w-2/3'>Common questions and answers about design and engineering projects.</div>
        </div>
      </div>
      <div className='faq-card-container flex flex-col md:w-1/2 gap-y-3'>
        {faqs.map((faq, index) => (
          <motion.div 
            layout
            key={index}
            onClick={() => toggleQuestion(index)}
            className={`flex flex-col cursor-pointer backdrop-blur-md border border-white/50 md:px-[19px] mx-[30px] md:mx-0 md:py-[14px] px-4 p-2 md:rounded-2xl rounded-xl
            ${openIndex === index ? 'bg-white text-black' : ' text-white border border-white/50 backdrop-blur-md'}`}
          >
            <motion.div layout className='flex justify-between w-full'>
              <div className='md:text-[20px] font-bold '>{faq.question}</div>
              <img src="/Arrow.svg" alt="arrow" loading="lazy" decoding="async" className={`md:w-[30px] w-[25px] transition-transform duration-300 ${openIndex === index ? 'rotate-0' : 'rotate-180 invert'}`} />
            </motion.div>
            {openIndex === index && (
              <motion.div className='animate-fade-in mt-1 md:mt-2 text-gray-500'>{faq.answer}</motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
