import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { House, MessagesSquare, Code, FolderGit2, HelpCircle, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import gsap from 'gsap';
import AnimatedButton from '../effects/AnimatedButton';

const Mortend = localFont({
    src: "../../fonts/MortendBold.otf"
});

interface NavLinkItem {
    id: string;
    label: string;
    icon: LucideIcon;
    className?: string;
}

const navLinks: NavLinkItem[] = [
    { id: 'home', label: 'Home', icon: House },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
];

const Navbar1: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".nav > *", { y: -10, opacity: 0, duration: 1, stagger: 0.5, delay: 0.4 });

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
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
        <div className='nav flex justify-between items-center px-4 md:px-60 md:mt-4 mt-3'>
            <Link href="/" className={`md:bg-gradient-to-b md:from-[#EA8E4B] md:to-[#FAED44] md:bg-clip-text md:text-transparent text-white text-[32px] ${Mortend.className}`}>BORUI</Link>
            
            {/* Nav Pill */}
            <div className='fixed bottom-6 md:top-4 md:bottom-auto left-1/2 -translate-x-1/2 flex items-center justify-between w-[calc(100%-32px)] md:w-auto md:justify-center bg-black border border-white/65 md:border-none md:py-[5px] md:px-[5px] py-[7px] pl-[8px] pr-[18px] rounded-[32px] md:rounded-full z-50 md:gap-[24px]'>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => setActiveSection(link.id)}
                        className={`relative flex items-center justify-center gap-[4px] rounded-[32px] transition-colors duration-300 ${
                            activeSection === link.id 
                                ? 'text-black py-[6px] px-[10px] md:py-[3px] md:px-[12px]' 
                                : 'text-white hover:text-gray-300 py-[6px] px-[10px] md:py-[3px] md:px-[12px]'
                        } ${link.className || ''}`}
                    >
                        {activeSection === link.id && (
                            <motion.div
                                layoutId="nav-pill"
                                layoutDependency={activeSection}
                                className="absolute inset-0 bg-white rounded-[32px] z-0"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-[4px] text-[12px] md:text-[16px]" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            <AnimatePresence mode="popLayout">
                                {activeSection === link.id && link.icon && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0, scale: 0.5 }}
                                        animate={{ width: "auto", opacity: 1, scale: 1 }}
                                        exit={{ width: 0, opacity: 0, scale: 0.5 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        className="overflow-hidden flex items-center"
                                    >
                                        <link.icon className='size-[15px] md:size-[15px]' />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <span className={`${activeSection !== link.id ? 'font-normal' : 'font-medium'}`}>
                                {link.label}
                            </span>
                        </span>
                    </a>
                ))}
            </div>

            {/* Mobile Let's Talk Button */}
            <Link href="https://www.linkedin.com/in/himanshuakabored/" className='md:hidden flex items-center justify-center gap-[6px] bg-black border border-white rounded-[32px] py-[9px] px-[14px]'>
                <MessagesSquare className='w-[15px] h-[17px] text-white' />
                <span className='font-medium text-[12px] text-white' style={{ fontFamily: 'var(--font-geist-sans)' }}>Let's Talk</span>
            </Link>

            {/* Desktop Connect Button */}
            <AnimatedButton href="https://www.linkedin.com/in/himanshuakabored/" className='bg-black text-white py-[8px] px-[12px] hidden md:flex'>
                <div className='hidden md:flex items-center gap-[12px] '>
                    <MessagesSquare className='md:size-[18px] size-3' />
                    <span className='md:text-[16px] text-[12px]'>Lets Connect</span>
                </div>
            </AnimatedButton>
        </div>
    );
};

export default Navbar1;
