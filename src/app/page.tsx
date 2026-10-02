"use client";

import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";

const About = dynamic(() => import("@/sections/About"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Skills = dynamic(() => import("@/sections/Skills"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Projects = dynamic(() => import("@/sections/Projects"), {
  loading: () => <div className="min-h-[500px]" />,
});
const Education = dynamic(() => import("@/sections/Education"), {
  loading: () => <div className="min-h-[300px]" />,
});
const FAQ = dynamic(() => import("@/sections/FAQ"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import("@/components/footer/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-90 left-1/2 -translate-x-1/2 w-full z-0 select-none opacity-80 hidden md:flex">
          <img
            src="/curveline.svg"
            alt="Background curve"
            loading="lazy"
            decoding="async"
            className="absolute left-1/2 -translate-x-1/2 max-w-none min-w-[1440px] w-[80%] object-top"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-0 select-none opacity-80 flex md:hidden">
          <img
            src="/curvelinemobile.svg"
            alt="Background curve"
            loading="lazy"
            decoding="async"
            className="absolute max-w-none min-w-[420px] w-[840px] object-top inset-0 translate-x-[-25%]"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen gap-y-20 md:gap-y-30 max-w-[420px] md:max-w-[1440px] mx-auto relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
