"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedButton from "@/components/effects/AnimatedButton";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData, type SkillItem } from "@/data/skills";
import { gilroy } from "@/fonts";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".skill >*", {
        opacity: 0,
        z: -150,
        duration: 2,
        stagger: 0.15,
        ease: "easeInOut",
        scrollTrigger: {
          markers: false,
          trigger: ".skill",
          start: "top 90%",
          end: "top 45%",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="z-1 relative" id="skills">
      {/* Background Graphic */}
      <Image
        src="/bars.webp"
        alt="Skills Bars"
        fill
        sizes="100vw"
        className="bar-bg object-cover hidden md:block"
      />

      <div className="relative z-10 w-full flex flex-col items-center text-white bg-[url('/barsmobile.webp')] md:bg-none bg-no-repeat bg-[size:601px_657px] bg-[position:-83px_-36px] md:bg-transparent pb-10 md:pb-0">
        <motion.div
          whileHover={{
            rotate: [0, 10, -8, 5, -3, 0],
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`${gilroy.className} skillboard bg-[url('/skillboard.svg')] w-[150px] md:w-[386px] h-[75px] md:h-[178px] bg-no-repeat bg-contain flex justify-center items-center bg-center mt-7 md:mt-0`}
        >
          <div className="text-[32px] md:text-7xl pt-4 md:pt-17 text-black">Skills</div>
        </motion.div>

        <div className="skill flex gap-[18px] md:gap-[64px] gap-y-[14px] md:gap-y-[36px] mt-[24px] md:mt-[52px] flex-wrap justify-center px-4 md:px-[64px] max-w-[1200px]">
          {skillsData.map((skill: SkillItem, index: number) => (
            <AnimatedButton
              key={index}
              className="border-2 border-white py-[8px] px-[14px] md:px-[25px] rounded-[12px] bg-black overflow-visible"
            >
              <div className="gap-[8px] flex items-center justify-center">
                <div className="overflow-visible group-hover:scale-[2] group-hover:-translate-y-2.5 transition-transform duration-200">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={36}
                    height={36}
                    className={`group-hover:invert transition-all duration-200 ${skill.mobileHeight} md:${skill.desktopHeight} w-auto`}
                  />
                </div>
                <div className="text-[16px] md:text-[24px]">{skill.name}</div>
              </div>
            </AnimatedButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
