"use client";

import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { projectsData, type ProjectItem } from "@/data/projects";

const Gilroy = localFont({
  src: "../../fonts/Gilroy-Black.ttf",
});

export default function AllProjects() {
  return (
    <div className="bg-black min-h-screen w-full text-white pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 px-[20px] md:px-[90px]">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="flex items-center justify-center border border-white/50 rounded-full w-[40px] h-[40px] hover:bg-white/20 transition-colors">
            <img src="/prev.svg" alt="Back" className="w-[20px]" />
          </Link>
          <h1 className={`${Gilroy.className} md:text-[44px] text-[32px]`}>
            All Projects
          </h1>
        </div>

        <div className="flex flex-wrap gap-[18px] justify-center md:justify-start">
          {projectsData.map((project: ProjectItem, index: number) => {
            const githubUrl = project.githubLink || (project.link.includes("github.com") ? project.link : undefined);
            const liveUrl = project.liveLink || (!project.link.includes("github.com") ? project.link : undefined);

            return (
              <div key={index} className="w-[100%] sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-12px)] h-[430px] md:h-[460px] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col justify-between text-white">
                <div className="shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full aspect-[16/9.5] object-cover object-top ${project.imgClass || ""}`}
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-[24px] font-semibold">{project.title}</div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-white border border-white/80 rounded-full py-1 pl-2.5 pr-1 bg-black hover:bg-white hover:text-black transition-colors"
                          title="Live Website"
                        >
                          <span className="whitespace-nowrap text-[12px] md:text-[13px]">
                            Live
                          </span>
                          <img
                            src="/webproj.svg"
                            alt="live website icon"
                            loading="lazy"
                            decoding="async"
                            className="w-[18px] md:w-[20px]"
                          />
                        </a>
                      )}
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-white border border-white/80 rounded-full py-1 pl-2.5 pr-1 bg-black hover:bg-white hover:text-black transition-colors"
                          title="Visit GitHub"
                        >
                          <span className="whitespace-nowrap text-[12px] md:text-[13px]">
                            GitHub
                          </span>
                          <img
                            src="/Githubpr.svg"
                            alt="github icon"
                            loading="lazy"
                            decoding="async"
                            className="w-[18px] md:w-[20px]"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="md:text-[15px] text-[14px] mt-2 text-neutral-300 h-[85px] md:h-[95px] overflow-y-auto pr-2 overscroll-contain [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {project.desc}
                </div>
                <div className="flex flex-wrap mt-3 text-black gap-[8px] shrink-0">
                  {project.tags.map((tag: string, i: number) => (
                    <div key={i} className="bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
