import React, { useState, useEffect } from 'react'
import localFont from 'next/font/local'
import { House, MessagesSquare, Menu, Code, FolderGit2, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Link from 'next/link'
import gsap from 'gsap'

const Mortend = localFont({
    src: "../../fonts/MortendBold.otf"
})


const navLinks = [
    { id: 'home', label: 'Home', icon: House },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'faq', label: 'FAQ', icon: HelpCircle, className: 'md:mr-3 mr-2 hidden md:flex' }
];

const Navbar1 = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(".nav > *",{y:-10,opacity:0,duration:1,stagger:0.5,delay:0.4})

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='nav flex justify-between items-center px-4 md:px-60 md:mt-4 mt-1'>
            <Link href="/" className={`bg-gradient-to-b from-[#EA8E4B] to-[#FAED44] bg-clip-text bg-transparent ${Mortend.className} text-transparent text-[16px] md:text-[32px]`}>BORUI</Link>
            <div className='fixed top-1 md:top-4 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 flex md:text-[16px] text-[12px] text-white md:gap-[24px] gap-[16px] bg-black md:py-[5px] md:px-[5px] py-[4px] px-[4px] md:rounded-full rounded items-center'>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => setActiveSection(link.id)}
                        className={`relative flex items-center gap-[3px] rounded md:rounded-full md:py-[3px] md:px-[12px] px-[4px] py-[1px] transition-colors duration-300 ${
                            activeSection === link.id ? 'text-black' : 'text-white hover:text-gray-300'
                        } ${link.className || ''}`}
                    >
                        {activeSection === link.id && (
                            <motion.div
                                layoutId="nav-pill"
                                layoutDependency={activeSection}
                                className="absolute top-0 left-0 w-full h-full bg-white rounded md:rounded-full z-0"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-[3px]">
                            <AnimatePresence mode="popLayout">
                                {activeSection === link.id && link.icon && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0, scale: 0.5 }}
                                        animate={{ width: "auto", opacity: 1, scale: 1 }}
                                        exit={{ width: 0, opacity: 0, scale: 0.5 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        className="overflow-hidden flex items-center"
                                    >
                                        <link.icon className='md:size-[15px] size-3' />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {link.label}
                        </span>
                    </a>
                ))}
                <a href="https://www.linkedin.com/in/himanshuakabored/" className='md:mr-3 mr-2 sm:hidden text-white relative z-10'>Contact me</a>
            </div>
            <motion.div 
            style={{background:'black'}}
            whileHover={{background:'white', color:'black'}}
            transition={{duration:0.8, delay:0.05, ease:'easeInOut'}}
            className=' text-white items-center gap-[6px] md:px-[14px] md:py-[12px] py-1 px-3 rounded hidden md:flex'>
                <MessagesSquare className='md:size-[15px] size-3' />
                <a href="https://www.linkedin.com/in/himanshuakabored/" className='md:text-1 text-[12px]'>Lets Connect</a>
            </motion.div>
        </div>
    )
}

export default Navbar1
