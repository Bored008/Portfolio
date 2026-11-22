"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { name: "Github", href: "https://github.com/Bored008", icon: "/GitHub.svg" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/himanshuakabored/", icon: "/LinkedIn.svg" },
  { name: "Telegram", href: "https://t.me/BoReD_Xagain", icon: "/Telegram.svg" },
  { name: "X", href: "https://x.com/Bored_OO8", icon: "/X.svg" },
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          markers: false,
          start: "top 95%",
          end: "top 75%",
          scrub: 1,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer z-1 mt-auto w-full">
      <div className="footer-card bg-white mx-[26px] md:mx-[126px] md:px-[40px] md:pt-[36px] md:pb-[14px] rounded-t-[35px] flex flex-col justify-center pb-4 md:pb-[14px]">
        {/* Banner Area */}
        <div className="rounded-[18px] bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-center items-center md:items-end gap-2 p-3 md:p-0 h-[260px] md:h-[370px] lg:h-[420px] bg-[url('/footerdesignmobile.webp')] md:bg-[url('/footerdesign.webp')]">
          <div className="flex justify-center gap-2 md:gap-[8px] md:mb-[24px]">
            <div className="bg-black text-white text-[12px] md:text-[16px] rounded-full px-[12px] py-[8px] md:px-[19px] md:py-[12px] cursor-pointer hover:bg-neutral-800 transition-colors">
              Get Started Now
            </div>
            <div className="bg-transparent text-black border border-black text-[12px] md:text-[16px] rounded-full px-[12px] py-[8px] md:px-[19px] md:py-[12px] cursor-pointer hover:bg-black hover:text-white transition-colors">
              Know More
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-black my-[12px] gap-4 md:gap-0">
          <div className="w-full md:w-[281px] text-[16px] text-center md:text-left">
            Design and full-stack web development based in India.
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold text-[16px]">Stay Connected</div>
            <div className="flex gap-[8px] mt-1">
              {SOCIAL_LINKS.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image src={item.icon} alt={item.name} width={24} height={24} className="cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-[14px] md:text-[16px]">Copyright ©️ BORUI 2026</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
