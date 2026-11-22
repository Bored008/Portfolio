import rawProjects from "./projects.json";

export interface ProjectItem {
  title: string;
  img: string;
  link: string;
  githubLink?: string;
  liveLink?: string;
  imgClass?: string;
  desc: string;
  tags: string[];
  icon?: string;
}

export const projectsData: ProjectItem[] = rawProjects as ProjectItem[];
