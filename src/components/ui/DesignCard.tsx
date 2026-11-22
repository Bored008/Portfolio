import React from "react";
import Image from "next/image";
import { type DesignItem } from "@/data/webdesign";

export interface DesignCardProps {
  design: DesignItem;
  className?: string;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design, className = "" }) => {
  return (
    <div
      className={`h-auto md:h-[200px] backdrop-blur-md border border-white/50 rounded-[19px] p-[12px] md:py-[1px] pt-3 flex flex-col md:flex-row md:items-stretch text-white md:gap-4 ${className}`}
    >
      <div
        className={
          design.imgWrapperClass ||
          "w-full md:w-1/2 shrink-0 relative overflow-hidden rounded-[12px] border-1 border-white aspect-[16/10] md:my-auto"
        }
      >
        <Image
          src={design.img}
          alt={design.title}
          fill
          sizes="(max-width: 768px) 90vw, 35vw"
          className={
            design.imgClass ||
            "object-cover object-top"
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
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="text-[13px] md:text-[14px] text-neutral-200 leading-relaxed h-[75px] md:h-[85px] overflow-y-auto pr-2 overscroll-contain [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {design.desc}
        </div>
        <div className="flex justify-between items-center pt-2 shrink-0 mt-auto">
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
            <Image
              src="/figmaproj.svg"
              alt="figmaicon"
              width={20}
              height={20}
              className="w-[20px] h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
