"use client";
import { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, type ProjectItem } from "@/data/projects";
import { designsData, type DesignItem } from "@/data/webdesign";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import DesignCard from "@/components/ui/DesignCard";
import { gilroy } from "@/fonts";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const projScrollContainerRef = useRef<HTMLDivElement>(null);
  const designScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const tl1 = gsap.timeline();

      tl.from(".left-half", {
        x: -200,
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          markers: false,
          trigger: ".left-half",
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1
        }
      });

      tl.from(".right-half", {
        x: 200,
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          markers: false,
          trigger: ".right-half",
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1
        }
      });

      tl.from(".proj-carousel", {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          markers: false,
          trigger: ".proj-carousel",
          start: "top 90%",
          end: "bottom 100%",
          scrub: 1
        }
      });

      tl1.from(".webdesign", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          markers: false,
          trigger: ".webdesign",
          start: "top 90%",
          end: "top 70%",
          scrub: 1
        }
      });

      tl1.from(".design-carousel", {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          markers: false,
          trigger: ".design-carousel",
          start: "top 90%",
          end: "bottom 100%",
          scrub: 1
        }
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="projects" ref={projectsRef} className="z-1 text-white">
      {/* Project */}
      <div className="relative w-full md:h-[250px] h-[140px] proj-title overflow-hidden">
        <Image
          src="/ProjectTag.svg"
          alt="Project Tag Left"
          width={1440}
          height={250}
          className="left-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"
        />
        <Image
          src="/ProjectTag.svg"
          alt="Project Tag Right"
          width={1440}
          height={250}
          className="right-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]"
        />
      </div>
      <div className="flex justify-end md:mx-[90px] mx-[20px] mt-4 mb-2 z-20 relative">
        <Link href="/projects" className="flex items-center justify-center gap-[4px] border border-white rounded-[8px] bg-black text-white px-[12px] py-[8px] font-['Geist'] text-[16px] transition-colors hover:bg-white/20">
          View All
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
      <div
        ref={projScrollContainerRef}
        className="proj-carousel flex md:mx-[90px] mt-[24px] md:mt-[32px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projectsData.map((project: ProjectItem, index: number) => (
          <ProjectCard
            key={index}
            project={project}
            className="shrink-0 w-[90%] md:w-[30%]"
          />
        ))}
      </div>

      <div className="flex justify-center mt-[16px] gap-[12px]">
        <Image
          src="/prev.svg"
          alt="prev button"
          width={40}
          height={40}
          className="cursor-pointer z-10 w-[40px] h-[40px]"
          onClick={() => {
            projScrollContainerRef.current?.scrollBy({
              left: -400,
              behavior: "smooth",
            });
          }}
        />
        <Image
          src="/next.svg"
          alt="next button"
          width={40}
          height={40}
          className="cursor-pointer z-10 w-[40px] h-[40px]"
          onClick={() => {
            projScrollContainerRef.current?.scrollBy({
              left: 400,
              behavior: "smooth",
            });
          }}
        />
      </div>

      {/* Design */}
      <div className="webdesign flex mt-[38px] justify-between items-center md:px-[90px] px-[20px]">
        <div
          className={`${gilroy.className} md:text-[44px] text-[36px] z-20`}
        >
          Web and App Designs
        </div>
        <Link href="/designs" className="flex items-center justify-center gap-[4px] border border-white rounded-[8px] bg-black text-white px-[12px] py-[8px] font-['Geist'] text-[16px] z-20 transition-colors hover:bg-white/20 shrink-0">
          View All
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
      
      <div
        ref={designScrollContainerRef}
        className="design-carousel flex md:mx-[90px] md:mt-[24px] mt-[18px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {designsData.map((design: DesignItem, index: number) => (
          <DesignCard
            key={index}
            design={design}
            className="shrink-0 w-[90%] md:w-[48%] md:min-w-[420px] max-w-[560px]"
          />
        ))}
      </div>

      <div className="flex justify-center md:mt-[16px] gap-[12px] mt-5">
        <Image
          src="/prev.svg"
          alt="prev button"
          width={40}
          height={40}
          className="cursor-pointer w-[40px] h-[40px]"
          onClick={() => {
            designScrollContainerRef.current?.scrollBy({
              left: -400,
              behavior: "smooth",
            });
          }}
        />
        <Image
          src="/next.svg"
          alt="next button"
          width={40}
          height={40}
          className="cursor-pointer w-[40px] h-[40px]"
          onClick={() => {
            designScrollContainerRef.current?.scrollBy({
              left: 400,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
