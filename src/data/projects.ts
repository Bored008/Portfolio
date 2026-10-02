export interface ProjectItem {
  title: string;
  img: string;
  link: string;
  imgClass?: string;
  desc: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Paw",
    img: "/Paw.webp",
    link: "https://github.com/Bored008/Paw",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "Paw is a web application that simplifies the pet adoption journey for both adopters and rescue organizations. It provides an interactive experience where users can explore available pets, learn about pet care, and connect directly with adoption centers.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "TypeScript", "Local Storage API"]
  },
  {
    title: "DocDesign",
    img: "/Docdesign.webp",
    link: "https://github.com/Bored008/DocDesign",
    imgClass: " md:w-[353px]",
    desc: "DocDesign is a web application that allows users to transform static document images into editable documents without recreating them. Whether it's a resume template, doc report, users can modify content, customize styling, and export the final document in multiple formats",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Generative ai", "Figma"]
  },
  {
    title: "Github Analyzer",
    img: "/Githubprofileanalyzer.webp",
    link: "https://github.com/Bored008/github-profile-analyzer",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "GitHub Profile Analyzer is a developer-focused platform that transforms GitHub data into meaningful insights, allowing users to explore repositories, contributions, technology stacks, and coding activity through a clean and interactive interface.",
    tags: ["Next.js", "Node.js", "Express.js", "Neon PostgreSQL", "TailwindCSS", "Bun"]
  },
  {
    title: "AI Health",
    img: "/Aihealth.webp",
    link: "https://github.com/Bored008/AI-Health",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white md:w-[353px]",
    desc: "AI Health is a secure web application that empowers users to analyze food images using their own personal AI quota. By leveraging Google's Gemini API via OAuth, users can get detailed nutrition breakdowns without relying on a shared developer key or paid subscription.",
    tags: ["Next.js", "Node.js", "Postgres Database", "TailwindCSS", "Google Gemini 2.0 Flash"]
  }
];
