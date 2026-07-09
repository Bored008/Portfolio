"use client";
import { useEffect, useRef } from "react";
import React from "react";
import localFont from "next/font/local";
import {
  MoveRight,
  MoveUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mortend = localFont({
  src: "../fonts/MortendBold.otf",
});

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf",
});

const projectsData = [
  {
    title: "Paw",
    img: "Paw.png",
    link: "https://github.com/Bored008/Paw",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "Paw is a web application that simplifies the pet adoption journey for both adopters and rescue organizations. It provides an interactive experience where users can explore available pets, learn about pet care, and connect directly with adoption centers.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "TypeScript", "Local Storage API"]
  },
  {
    title: "DocDesign",
    img: "Docdesign.svg",
    link: "https://github.com/Bored008/DocDesign",
    imgClass: " md:w-[353px]",
    desc: "DocDesign is a web application that allows users to transform static document images into editable documents without recreating them. Whether it's a resume template, doc report, users can modify content, customize styling, and export the final document in multiple formats",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Generative ai", "Figma"]
  },
  {
    title: "Github Analyzer",
    img: "Githubprofileanalyzer.png",
    link: "https://github.com/Bored008/github-profile-analyzer",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "GitHub Profile Analyzer is a developer-focused platform that transforms GitHub data into meaningful insights, allowing users to explore repositories, contributions, technology stacks, and coding activity through a clean and interactive interface.",
    tags: ["Next.js", "Node.js", "Express.js", "Neon PostgreSQL", "TailwindCSS", "Bun"]
  },
  {
    title: "AI Health",
    img: "Aihealth.png",
    link: "https://github.com/Bored008/AI-Health",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "AI Health is a secure web application that empowers users to analyze food images using their own personal AI quota. By leveraging Google's Gemini API via OAuth, users can get detailed nutrition breakdowns without relying on a shared developer key or paid subscription.",
    tags: ["Next.js", "Node.js", "Postgres Database", "TailwindCSS", "Google Gemini 2.0 Flash"]
  }
];

const designsData = [
  {
    title: "Paw- Pet Adoption Page",
    img: "Paw.png",
    imgWrapperClass: "w-full",
    imgClass: "border-2 border-white rounded-[12px]",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=381-1002&t=1Qya7mG7HlEGUrkN-1",
    desc: "A modern pet adoption platform built to help people discover, connect with, and adopt pets with ease.",
    tags: ["Figma", "Framer"]
  },
  {
    title: "Moviely Webdesign",
    img: "Moviely.svg",
    imgWrapperClass: "w-full",
    imgClass: "border-2 border-white rounded-[12px]",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=349-2178&t=1Qya7mG7HlEGUrkN-1",
    desc: "Designed a cinematic movie platform UI in Figma with a focus on content discovery, streamlined journeys, and visual experiences.",
    tags: ["Figma", "Framer"]
  },
  {
    title: "Docdesign",
    img: "Docdesign.svg",
    imgWrapperClass: "w-full",
    imgClass: "rounded-[12px]",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=225-555&t=1Qya7mG7HlEGUrkN-1",
    desc: "Clean UI/UX for DocDesign, enabling users to easily edit static document images and export them as customizable documents.",
    tags: ["Figma", "Framer"]
  },
  {
    title: "A Premium Car Design",
    img: "bmw.svg",
    imgWrapperClass: "w-full",
    imgClass: "",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=197-555&t=9UhtvM2kPSxfU65i-1",
    desc: "A Car selling website Hero section design that attracts the customer with the custom navbar and clear clean ui.",
    tags: ["Figma", "Framer", "Blender"]
  },
  {
    title: "A Jewellary Web Design",
    img: "Jewellary.svg",
    imgWrapperClass: "w-full",
    imgClass: "w-full",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=182-553&t=gb3cDCkQL20JmATY-1",
    desc: "A Premium Jewellary Hero section that will attract the customer and increase the sale of items placed.",
    tags: ["Figma", "Framer"]
  },
  {
    title: "Luxuary Watch WebDesign",
    img: "Watch.svg",
    imgWrapperClass: "w-full overflow-hidden md:h-fit h-[180px]",
    imgClass: "rounded-[12px] border-white/80 border-[1px]",
    link: "https://www.figma.com/design/UloorFq3x9zOvJUMw85nus/Figma-work?node-id=95-7&t=1Qya7mG7HlEGUrkN-1",
    desc: "Designed a premium luxury watch landing page in Figma, focused on elegant typography, immersive visuals, and a high-end shopping experience.",
    tags: ["Figma", "Framer"]
  }
];

const Projects = () => {
  const projScrollContainerRef = useRef(null);
  const designScrollContainerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl=gsap.timeline();
    const tl1=gsap.timeline();
    tl.from(".left-half", {
      x: -200,
      y:100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        markers:false,
        trigger: ".left-half",
        start: "top 80%",
        end:"bottom 90%",
        scrub:1
      }
    });
    tl.from(".right-half", {
      x: 200,
      y:-100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        markers:false,
        trigger: ".right-half",
        start: "top 80%",
        end:"bottom 90%",
        scrub:1
      }
    });
    tl.from(".card",{
      y:50,
      opacity:0,
      duration:2,
      stagger:0.4,
      ease:"power3.out",
      scrollTrigger:{
        markers:false,
        trigger:".card",
        start:"top 90%",
        end:"bottom 100%",
        scrub:1
      }
    })
    tl1.from(".webdesign",{
      y:100,
      opacity:0,
      duration:1,
      ease:"power3.out",
      scrollTrigger:{
        markers:false,
        trigger:".webdesign",
        start:"top 90%",
        end:"top 70%",
        scrub:1
      }
    })
    tl1.from(".card2",{
      y:50,
      opacity:0,
      duration:2,
      stagger:0.4,
      ease:"power3.out",
      scrollTrigger:{
        markers:false,
        trigger:".card2",
        start:"top 90%",
        end:"bottom 100%",
        scrub:1
      }
    })
  }, []);

  return (
    <div id="projects" className="z-1 text-white">
      {/* Project */}
      <div className="relative w-full md:h-[250px] h-[140px] proj-title overflow-hidden">
        <img
          src="/ProjectTag.svg"
          className="left-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"
        />
        <img
          src="/ProjectTag.svg"
          className="right-half absolute inset-0 w-full object-cover md:h-auto h-35 z-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]"
        />
      </div>
      <div
        ref={projScrollContainerRef}
        className="card flex md:mx-[90px] mt-[24px] md:mt-[32px] gap-[18px] overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projectsData.map((project, index) => (
          
          <div key={index} className="shrink-0 w-[90%] h-fit md:w-[30%] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col text-white">
            <img
              src={project.img}
              alt={project.title}
              className={project.imgClass}
            />
            <div className="flex justify-between items-center">
              <div className="text-[24px] mt-3 font-semibold">{project.title}</div>
              <a
                href={project.link}
                target="_blank"
                className="flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black"
              >
                <div>Visit me</div>
                <img src="Githubpr.svg" alt="githubicon" className="w-[24px]" />
              </a>
            </div>
            <div className="md:text-[16px]">
              {project.desc}
            </div>
            <div className="flex flex-wrap mt-2 text-black gap-[8px]">
              {project.tags.map((tag, i) => (
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
          src="prev.svg"
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
          src="next.svg"
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
        {designsData.map((design, index) => (
          <div key={index} className="shrink-0 w-[90%] md:w-[48%] h-fit backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:flex items-center text-white md:gap-5 ">
            <div className={design.imgWrapperClass}>
              <img
                src={design.img}
                alt={design.title}
                className={design.imgClass}
              />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-[24px] font-semibold">
                  {design.title}
                </div>
              </div>
              <div className="md:text-[16px]">
                {design.desc}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap mt-3 text-black gap-[8px]">
                  {design.tags.map((tag, i) => (
                    <div key={i} className="bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]">
                      {tag}
                    </div>
                  ))}
                </div>
                <a
                  href={design.link}
                  target="_blank"
                  className="flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 bg-black"
                >
                  <div>Visit me</div>
                  <img
                    src="figmaproj.svg"
                    alt="githubicon"
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
          src="prev.svg"
          alt="prev button"
          className="cursor-pointer"
          onClick={() => {
            designScrollContainerRef.current?.scrollBy({
              left: -400,
              behavior: "smooth",
            });
          }}
        />
        <img
          src="next.svg"
          alt="next button"
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
