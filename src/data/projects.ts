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

export const projectsData: ProjectItem[] = [
  {
    title: "TraceX",
    img: "/TraceX.png",
    link: "https://trace-x-jade.vercel.app/",
    githubLink: "https://github.com/Bored008/TraceX",
    liveLink: "https://trace-x-jade.vercel.app/",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "TraceX is a distributed root cause analyzer and SRE topology visualization tool. It features live server dependency mapping, automated causal diagnosis, and real-time telemetry flow monitoring to help engineering teams quickly identify and resolve infrastructure bottlenecks.",
    tags: ["Next.js", "React Flow", "TailwindCSS", "TypeScript", "Figma"]
  },
  {
    title: "EBAT",
    img: "/EBAT.png",
    link: "https://ebat-omega.vercel.app/",
    githubLink: "https://github.com/Bored008/EBAT",
    liveLink: "https://ebat-omega.vercel.app/",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "EBAT is a high-performance military-grade drone surveillance landing page built with Next.js 16 and Tailwind CSS v4. It features a precision dark mode aesthetic, adaptive cross-platform layouts, and modular component architecture. The project showcases tactical FPV and surveillance drones through interactive UI components, delivering an immersive and highly responsive digital experience for aerospace and defense portfolios.",
    tags: ["Next.js 16", "Tailwind CSS v4", "TypeScript"]
  },
  {
    title: "Yanegi",
    img: "/Yanegi.webp",
    link: "https://www.yanegi.com/",
    githubLink: "https://github.com/Bored008/Yanegi",
    liveLink: "https://www.yanegi.com/",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "Yanegi is a real-time socializing platform and live map of community activities happening right now, from pickup sports and open mics to rooftop hangouts. Built with an interactive Next.js interface and geolocation mapping without algorithmic feeds, it makes it easier to show up to local gatherings in real life.",
    tags: ["Next.js", "React.js", "TailwindCSS", "TypeScript", "Geolocation API"]
  },
  {
    title: "PaperBuddy",
    img: "/PaperBuddy.png",
    link: "https://rich-mountain-355249.framer.app/",
    githubLink: "https://github.com/Bored008/PaperBuddy_Redesign",
    liveLink: "https://rich-mountain-355249.framer.app/",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "PaperBuddy is an all-in-one connected educational management platform for admins, teachers, students, drivers, and office staff. It centralizes attendance, fee collection, exam workflows, and school transport tracking into a single, real-time synchronized system designed to reduce paperwork and elevate classroom teaching.",
    tags: ["Framer", "React", "Web Design", "UI/UX"]
  },
  {
    title: "Paw",
    img: "/Paw.webp",
    link: "https://github.com/Bored008/Paw",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "Paw is a web application that simplifies the pet adoption journey for both adopters and rescue organizations. It provides an interactive experience where users can explore available pets, learn about pet care, and connect directly with adoption centers through a clean, accessible, and emotionally engaging user interface designed to facilitate successful animal placements.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "TypeScript", "Local Storage API"]
  },
  {
    title: "SadakSaathi",
    img: "/Sadaksaathi.webp",
    link: "https://sadak-saathi-mocha.vercel.app/",
    githubLink: "https://github.com/Bored008/SadakSaathi",
    liveLink: "https://sadak-saathi-mocha.vercel.app/",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "SadakSaathi is a comprehensive road safety and navigation companion web application. It provides real-time route insights, hazard reporting, and emergency assistance integration through an intuitive, user-friendly interface tailored for commuters and drivers.",
    tags: ["Next.js", "TailwindCSS", "Figma", "UI/UX"]
  },
  {
    title: "DocDesign",
    img: "/Docdesign.webp",
    link: "https://github.com/Bored008/DocDesign",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "DocDesign is a web application that allows users to transform static document images into editable documents without recreating them. Whether it's a resume template, doc report, users can modify content, customize styling, and export the final document in multiple formats",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Generative ai", "Figma"]
  },
  {
    title: "Github Analyzer",
    img: "/Githubprofileanalyzer.webp",
    link: "https://github.com/Bored008/github-profile-analyzer",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "GitHub Profile Analyzer is a developer-focused platform that transforms GitHub data into meaningful insights, allowing users to explore repositories, contributions, technology stacks, and coding activity through a clean and interactive interface. It visualizes data using dynamic charts and comprehensive analytics for immediate readability and technical performance tracking.",
    tags: ["Next.js", "Node.js", "Express.js", "Neon PostgreSQL", "TailwindCSS", "Bun"]
  },
  {
    title: "AI Health",
    img: "/Aihealth.webp",
    link: "https://github.com/Bored008/AI-Health",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "AI Health is a secure web application that empowers users to analyze food images using their own personal AI quota. By leveraging Google's Gemini API via OAuth, users can get detailed nutrition breakdowns without relying on a shared developer key or paid subscription.",
    tags: ["Next.js", "Node.js", "Postgres Database", "TailwindCSS", "Google Gemini 2.0 Flash"]
  },
  {
    title: "Zyricon — Unified Full-Stack & GenAI Workspace",
    img: "/projects/supabaseandgeminichatbot.png",
    link: "https://supabaseandgeminichatbot.vercel.app",
    githubLink: "https://github.com/Bored008/SupabaseAndGeminiChatBot",
    liveLink: "https://supabaseandgeminichatbot.vercel.app",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "A production-grade Full-Stack web application combining Google OAuth 2.0, PostgreSQL Row Level Security (RLS), PostgreSQL RPC Procedures, and a serverless Supabase Deno Edge Function communicating directly with the Google Gemini 2.5 Flash REST API.",
    tags: ["JavaScript", "React.js", "TypeScript", "TailwindCSS", "Supabase", "Google Gemini"]
  },
  {
    title: "ORBIT Shipping Services",
    img: "https://opengraph.githubassets.com/1/Bored008/ORBIT-SHIPPING-SERVICES",
    link: "https://orbit-shipping-services.vercel.app",
    githubLink: "https://github.com/Bored008/ORBIT-SHIPPING-SERVICES",
    liveLink: "https://orbit-shipping-services.vercel.app",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "ORBIT Shipping Services is a next-generation digital logistics and freight management web platform. Designed with smooth page transitions, responsive service portals, and real-time tracking.",
    tags: ["TypeScript", "Next.js", "React.js", "TailwindCSS", "Framer Motion", "GSAP"]
  },
  {
    title: "Moviely",
    img: "/projects/moviely.png",
    link: "https://github.com/Bored008/Moviely",
    githubLink: "https://github.com/Bored008/Moviely",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "Moviely is a movie discovery and recommendation platform built with Next.js and TypeScript, designed to explore films, trending releases, and watchlists.",
    tags: ["TypeScript", "Next.js", "React.js", "TailwindCSS"]
  },
  {
    title: "ECHO",
    img: "/projects/echo.png",
    link: "https://github.com/Bored008/ECHO",
    githubLink: "https://github.com/Bored008/ECHO",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "ECHO is a modern music streaming and audio experience mobile application built with Kotlin and Android Jetpack, focused on high-fidelity playback and clean UI.",
    tags: ["Kotlin", "Android", "Mobile Development"]
  },
  {
    title: "UI UX Designs",
    img: "/projects/ui-ux-designs.png",
    link: "https://github.com/Bored008/UI-UX-Designs",
    githubLink: "https://github.com/Bored008/UI-UX-Designs",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "A curated repository of user interface and user experience design systems, wireframes, and prototypes created across web and mobile platforms.",
    tags: ["Figma", "UI/UX", "Design Systems"]
  },
  {
    title: "YouTube Video Downloader Extension",
    img: "https://opengraph.githubassets.com/1/Bored008/youtube-extension",
    link: "https://github.com/Bored008/youtube-extension",
    githubLink: "https://github.com/Bored008/youtube-extension",
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "A Chrome Extension built to enable seamless video and audio downloads directly from browser tabs, featuring a Node.js/Express backend service.",
    tags: ["JavaScript", "Chrome Extension", "Node.js", "Express.js"]
  }
];
