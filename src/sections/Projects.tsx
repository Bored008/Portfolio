"use client";
import { useEffect, useRef } from "react";
import React from "react";
import localFont from "next/font/local";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, type ProjectItem } from "@/data/projects";
import { designsData, type DesignItem } from "@/data/webdesign";

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf",
});

const Projects: React.FC = () => {
  const projScrollContainerRef = useRef<HTMLDivElement>(null);
  const designScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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

    tl.from(".card", {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        markers: false,
        trigger: ".card",
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

    tl1.from(".card2", {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        markers: false,
        trigger: ".card2",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 1
      }
    });
  }, []);

  return (
    <div id="projects" className="z-1 text-white">
      {/* Project */}
      <div className="relative w-full md:h-[250px] h-[140px] proj-title overflow-hidden">
        <img
          src="/ProjectTag.svg"
          alt="Project Tag Left"
          loading="lazy"
          decoding="async"
          className="left-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"
        />
        <img
          src="/ProjectTag.svg"
          alt="Project Tag Right"
          loading="lazy"
          decoding="async"
          className="right-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]"
        />
      </div>
      <div
        ref={projScrollContainerRef}
        className="card flex md:mx-[90px] mt-[24px] md:mt-[32px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projectsData.map((project: ProjectItem, index: number) => (
          <div key={index} className="shrink-0 w-[90%] md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col justify-between text-white">
            <div>
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={`w-full aspect-[16/9.5] object-cover object-top ${project.imgClass || ""}`}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="text-[24px] font-semibold">{project.title}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black"
                >
                  <div>Visit me</div>
                  <img src="/Githubpr.svg" alt="githubicon" loading="lazy" decoding="async" className="w-[24px]" />
                </a>
              </div>
              <div className="md:text-[16px] mt-2">
                {project.desc}
              </div>
            </div>
            <div className="flex flex-wrap mt-4 text-black gap-[8px]">
              {project.tags.map((tag: string, i: number) => (
                <div key={i} className="bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[16px] gap-[12px]">
        <img
          src="/prev.svg"
          alt="prev button"
          className="cursor-pointer z-10"
          onClick={() => {
            projScrollContainerRef.current?.scrollBy({
              left: -400,
              behavior: "smooth",
            });
          }}
        />
        <img
          src="/next.svg"
          alt="next button"
          className="cursor-pointer z-10"
          onClick={() => {
            projScrollContainerRef.current?.scrollBy({
              left: 400,
              behavior: "smooth",
            });
          }}
        />
      </div>

      {/* Design */}
      <div className="webdesign flex mt-[38px] justify-between items-center">
        <div
          className={`${Gilroy.className} md:text-[44px] text-[36px] md:ml-[40px] z-20`}
        >
          Web Designs
        </div>
      </div>
      
      <div
        ref={designScrollContainerRef}
        className="card2 flex md:mx-[90px] md:mt-[24px] mt-[18px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {designsData.map((design: DesignItem, index: number) => (
          <div key={index} className="shrink-0 w-[90%] md:w-[48%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col md:flex-row md:items-stretch text-white md:gap-5">
            <div className={design.imgWrapperClass || "w-full md:w-1/2 shrink-0 flex items-center"}>
              <img
                src={design.img}
                alt={design.title}
                loading="lazy"
                decoding="async"
                className={design.imgClass || "border-2 border-white rounded-[12px] w-full aspect-[16/10] object-cover object-top"}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between mt-3 md:mt-0">
              <div>
                <div className="text-[24px] font-semibold">
                  {design.title}
                </div>
                <div className="md:text-[16px] mt-2 text-neutral-200">
                  {design.desc}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-wrap text-black gap-[8px]">
                  {design.tags.map((tag: string, i: number) => (
                    <div key={i} className="bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]">
                      {tag}
                    </div>
                  ))}
                </div>
                <a
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black shrink-0"
                >
                  <div>Visit me</div>
                  <img
                    src="/figmaproj.svg"
                    alt="figmaicon"
                    loading="lazy"
                    decoding="async"
                    className="w-[24px]"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:mt-[16px] gap-[12px] mt-5">
        <img
          src="/prev.svg"
          alt="prev button"
          loading="lazy"
          decoding="async"
          className="cursor-pointer"
          onClick={() => {
            designScrollContainerRef.current?.scrollBy({
              left: -400,
              behavior: "smooth",
            });
          }}
        />
        <img
          src="/next.svg"
          alt="next button"
          loading="lazy"
          decoding="async"
          className="cursor-pointer"
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
