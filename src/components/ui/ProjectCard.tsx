import React from "react";

export interface ProjectCardProps {
  title?: string;
  desc?: string;
  img?: string;
  link?: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = () => {
  return null;
};

export default ProjectCard;
