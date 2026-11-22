"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, type ProjectItem } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { gilroy } from "@/fonts";

export default function AllProjects() {
  return (
    <div className="bg-black min-h-screen w-full text-white pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 px-[20px] md:px-[90px]">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="flex items-center justify-center border border-white/50 rounded-full w-[40px] h-[40px] hover:bg-white/20 transition-colors">
            <Image src="/prev.svg" alt="Back" width={20} height={20} className="w-[20px] h-auto" />
          </Link>
          <h1 className={`${gilroy.className} md:text-[44px] text-[32px]`}>
            All Projects
          </h1>
        </div>

        <div className="flex flex-wrap gap-[18px] justify-center md:justify-start">
          {projectsData.map((project: ProjectItem, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-[100%] sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-12px)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
