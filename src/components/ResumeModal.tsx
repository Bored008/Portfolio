"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, CodeXml, Palette } from "lucide-react";

const Gilroy = localFont({
  src: "../fonts/Gilroy-Black.ttf",
});

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeOptions = [
  {
    id: "developer",
    title: "Developer Resume",
    role: "Full Stack & Frontend Developer",
    description: "Next.js, React, TypeScript, Node.js, and modern full-stack web applications.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    icon: CodeXml,
    fileUrl: "/Himanshu_Resume_Developer.pdf",
    fileName: "Himanshu_Dahiya_Developer_Resume.pdf",
  },
  {
    id: "designer",
    title: "Designer Resume",
    role: "UI/UX & Product Designer",
    description: "Figma, user research, wireframing, interactive prototyping, and design systems.",
    tags: ["Figma", "UI/UX", "Wireframing", "Design Systems"],
    icon: Palette,
    fileUrl: "/Himanshu_Resume_UIUXDesigner.pdf",
    fileName: "Himanshu_Dahiya_UIUX_Designer_Resume.pdf",
  },
];

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl backdrop-blur-[80px] bg-black/70 border border-white/50 text-white rounded-3xl shadow-2xl p-6 md:p-8 z-10 overflow-hidden mx-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full border border-white/50 bg-black text-white hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <h2
                id="resume-modal-title"
                className={`${Gilroy.className} text-2xl md:text-4xl text-white tracking-wide`}
              >
                Download CV
              </h2>
              <p
                className="text-neutral-300 text-sm md:text-base mt-2 max-w-md mx-auto"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                Select which version of my resume you would like to download.
              </p>
            </div>

            {/* Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.a
                    key={option.id}
                    href={option.fileUrl}
                    download={option.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setTimeout(onClose, 300);
                    }}
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group flex flex-col justify-between backdrop-blur-md border border-white/50 rounded-2xl p-5 bg-black cursor-pointer transition-colors"
                  >
                    {/* Sliding white curtain hover wipe matching portfolio AnimatedButton */}
                    <motion.span
                      className="absolute inset-0 bg-white origin-right pointer-events-none"
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    />

                    {/* Content inside card */}
                    <div className="relative z-10 group-hover:text-black transition-colors duration-200">
                      {/* Top icon and download badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl border border-white/50 group-hover:border-black bg-black group-hover:bg-white text-white group-hover:text-black transition-colors duration-200">
                          <Icon className="size-6" />
                        </div>
                        <div className="border border-white/50 group-hover:border-black rounded-full p-1.5 text-white group-hover:text-black transition-colors duration-200">
                          <Download className="size-4" />
                        </div>
                      </div>

                      {/* Title & Role */}
                      <h3
                        className={`${Gilroy.className} text-xl md:text-2xl text-white group-hover:text-black transition-colors duration-200`}
                      >
                        {option.title}
                      </h3>
                      <p className="text-xs text-neutral-300 group-hover:text-neutral-800 font-medium mt-1 transition-colors duration-200">
                        {option.role}
                      </p>

                      <p className="text-xs text-neutral-400 group-hover:text-neutral-700 mt-2 transition-colors duration-200 line-clamp-2">
                        {option.description}
                      </p>

                      {/* Tech / Skill Tags matching portfolio style */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {option.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white text-black group-hover:bg-black group-hover:text-white text-[11px] font-medium rounded-[4px] px-2 py-0.5 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Bar */}
                    <div className="relative z-10 mt-5 pt-3 border-t border-white/20 group-hover:border-black/20 flex items-center justify-between text-xs font-semibold text-white group-hover:text-black transition-colors duration-200">
                      <span>Download PDF</span>
                      <Download className="size-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ResumeModal;
