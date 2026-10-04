"use client";

import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { designsData, type DesignItem } from "@/data/webdesign";

const Gilroy = localFont({
  src: "../../fonts/Gilroy-Black.ttf",
});

export default function AllDesigns() {
  return (
    <div className="bg-black min-h-screen w-full text-white pb-20">
      <div className="max-w-[1440px] mx-auto pt-10 px-[20px] md:px-[90px]">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="flex items-center justify-center border border-white/50 rounded-full w-[40px] h-[40px] hover:bg-white/20 transition-colors">
            <img src="/prev.svg" alt="Back" className="w-[20px]" />
          </Link>
          <h1 className={`${Gilroy.className} md:text-[44px] text-[32px]`}>
            Web and App Designs
          </h1>
        </div>

        <div className="flex flex-wrap gap-[18px] justify-center">
          {designsData.map((design: DesignItem, index: number) => (
            <div
              key={index}
              className="w-[100%] md:w-[calc(50%-9px)] h-auto md:h-[200px] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] py-[1px] flex flex-col md:flex-row md:items-stretch text-white md:gap-4"
            >
              <div
                className={
                  design.imgWrapperClass ||
                  "w-full md:w-1/2 shrink-0 relative overflow-hidden rounded-[12px] border-1 border-white aspect-[16/10] md:my-auto"
                }
              >
                <img
                  src={design.img}
                  alt={design.title}
                  loading="lazy"
                  decoding="async"
                  className={
                    design.imgClass ||
                    "absolute inset-0 w-full h-full object-cover object-top"
                  }
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2 md:mt-0 py-2">
                <div className="shrink-0">
                  <div className="text-[20px] md:text-[22px] font-semibold leading-snug">
                    {design.title}
                  </div>
                </div>
                <div
                  className="text-[13px] md:text-[14px] text-neutral-200 leading-relaxed h-[75px] md:h-[85px] overflow-y-auto pr-2 overscroll-contain [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {design.desc}
                </div>
                <div className="flex justify-between items-center pt-2 shrink-0">
                  <div className="flex flex-wrap text-black gap-[8px]">
                    {design.tags.map((tag: string, i: number) => (
                      <div
                        key={i}
                        className="bg-white text-[12px] rounded-[4px] px-[6px] py-[3px]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-white border border-white/80 rounded-full p-1 pl-3 pr-1.5 bg-black shrink-0 hover:bg-white hover:text-black transition-colors ml-2"
                  >
                    <div className="whitespace-nowrap text-[12px] md:text-[13px]">Figma</div>
                    <img
                      src="/figmaproj.svg"
                      alt="figmaicon"
                      loading="lazy"
                      decoding="async"
                      className="w-[20px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
