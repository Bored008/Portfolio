"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AnimatedButton from "@/components/effects/AnimatedButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData, type SkillItem } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf",
});

const Skills: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".skill >*", {
      opacity: 0,
      z: -150,
      duration: 2,
      stagger: 0.2,
      ease: "easeInOut",
      scrollTrigger: {
        markers: false,
        trigger: ".skill",
        start: "top bottom",
        end: "top 45%",
        scrub: 1,
      },
    });

    const tl2 = gsap.timeline();
    tl2.from(".skillMobile >*", {
      opacity: 0,
      z: -150,
      duration: 2,
      stagger: 0.2,
      ease: "easeInOut",
      scrollTrigger: {
        markers: false,
        trigger: ".skillMobile",
        start: "top 90%",
        end: "top 35%",
        scrub: 1,
      },
    });

    gsap.fromTo(
      ".skillboard",
      {
        rotation: -20,
        transformOrigin: "top center",
      },
      {
        rotation: 0,
        transformOrigin: "top center",
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        scrollTrigger: {
          trigger: ".skillboard",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      },
    );
    gsap.fromTo(
      ".skillboardmobile",
      {
        rotation: -20,
        transformOrigin: "top center",
      },
      {
        rotation: 0,
        transformOrigin: "top center",
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        scrollTrigger: {
          trigger: ".skillboardmobile",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      },
    );
  }, []);

  return (
    <div className="z-1" id="skills">
      {/* for desktop screen */}
      <div className="relative" id="skills-desktop">
        <img
          src="/bars.webp"
          alt="Skills Bars"
          loading="lazy"
          decoding="async"
          className="bar-bg absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        <div className="relative z-10 w-full aspect-[1653/929] items-center flex flex-col hidden md:flex text-white">
          <motion.div
            whileHover={{
              rotate: [0, 10, -8, 5, -3, 0]
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`${Gilroy.className} skillboard bg-[url("/skillboard.svg")] w-[386px] h-[178px] bg-no-repeat bg-contain flex justify-center items-center bg-center`}
          >
            <div className="text-7xl pt-17 text-black">Skills</div>
          </motion.div>

          <div className="skill flex gap-[64px] gap-y-[36px] mt-[52px] flex-wrap justify-center px-[64px] max-w-[1200px]">
            {skillsData.map((skill: SkillItem, index: number) => (
              <AnimatedButton
                key={index}
                className="border-2 border-white py-[8px] px-[25px] rounded-[12px] bg-black overflow-visible"
              >
                <div className="gap-[8px] flex items-center justify-center">
                  <div className="overflow-visible group-hover:scale-[2] group-hover:-translate-y-2.5 transition-transform duration-200">
                    <img
                      src={skill.icon}
                      loading="lazy"
                      decoding="async"
                      className={`group-hover:invert transition-all duration-200 ${skill.desktopHeight}`}
                      alt={skill.name}
                    />
                  </div>
                  <div className="text-[24px]">{skill.name}</div>
                </div>
              </AnimatedButton>
            ))}
          </div>
        </div>
      </div>

      {/* For mobile view */}
      <div className="w-full min-h-full bg-[url('/barsmobile.webp')] bg-no-repeat bg-[size:601px_657px] bg-[position:-83px_-36px] flex flex-col justify-center items-center md:hidden">
        <motion.div
          whileHover={{
            rotate: [0, 10, -8, 5, -3, 0]
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`${Gilroy.className} skillboardmobile bg-[url('/skillboard.svg')] w-[150px] mt-7 bg-no-repeat bg-contain flex justify-center items-center bg-center`}
        >
          <div className="text-[32px] pt-8 text-black">Skills</div>
        </motion.div>

        <div className="skillMobile flex gap-[24px] gap-y-[18px] mt-[20px] text-white flex-wrap justify-center">
          {skillsData.map((skill: SkillItem, index: number) => (
            <AnimatedButton
              key={index}
              className=" border-2 border-white py-[8px] px-[12px] rounded-[12px] bg-black overflow-visible"
            >
              <div className="flex gap-[8px] flex items-center justify-center">
                <div className="flex overflow-visible group-hover:scale-[2] group-hover:-translate-y-2.5 transition-transform duration-200">
                  <img
                    src={skill.icon}
                    loading="lazy"
                    decoding="async"
                    className={`group-hover:invert transition-all duration-200 ${skill.mobileHeight}`}
                    alt={skill.name}
                  />
                </div>
                <div className="text-[17px]">{skill.name}</div>
              </div>
            </AnimatedButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
