"use client"
import Hero from "@/sections/Hero";
import About from "@/sections/About"
import Skills from "@/sections/Skills"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 md:gap-y-40 bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  z-[0] select-none opacity-80 hidden md:flex">
        <img
          src="/curveline.svg"
          alt="Background curve"
          className="w-full h-auto object-top"
        />
      </div>
      <Hero />
      <About className=""/>
      <Skills />
    </div>
  );
}
