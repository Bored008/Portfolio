import React from "react";
import Image from "next/image";
import { type ProjectItem } from "@/data/projects";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  const githubUrl = project.githubLink || (project.link.includes("github.com") ? project.link : undefined);
  const liveUrl = project.liveLink || (!project.link.includes("github.com") ? project.link : undefined);

  return (
    <div className={`h-[430px] md:h-[460px] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] flex flex-col justify-between text-white ${className}`}>
      <div className="shrink-0">
        <div className={`relative w-full aspect-[16/9.5] overflow-hidden ${project.imgClass || "rounded-[12px] border-2 border-t-1 border-white"}`}>
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-cover object-top"
          />
        </div>
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
                <Image
                  src="/webproj.svg"
                  alt="live website icon"
                  width={20}
                  height={20}
                  className="w-[18px] md:w-[20px] h-auto"
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
                <Image
                  src="/Githubpr.svg"
                  alt="github icon"
                  width={20}
                  height={20}
                  className="w-[18px] md:w-[20px] h-auto"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
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
};

export default ProjectCard;
