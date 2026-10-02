"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, CodeXml, Palette } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeOptions = [
  {
    id: "developer",
    title: "Developer Resume",
    role: "Full Stack & Frontend Engineering",
    description: "React, Next.js, TypeScript, Node.js, REST APIs, Performance",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    icon: CodeXml,
    color: "from-amber-500/20 to-yellow-500/10",
    borderColor: "hover:border-[#FAED44]/60",
    accentColor: "text-[#FAED44]",
    fileUrl: "/Himanshu_Resume_Developer.pdf",
    fileName: "Himanshu_Dahiya_Developer_Resume.pdf",
  },
  {
    id: "designer",
    title: "Designer Resume",
    role: "UI/UX & Product Design",
    description: "Figma, Design Systems, Wireframing, User Flows, Prototyping",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    icon: Palette,
    color: "from-orange-500/20 to-amber-500/10",
    borderColor: "hover:border-[#EA8E4B]/60",
    accentColor: "text-[#EA8E4B]",
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-neutral-950 p-6 md:p-8 shadow-2xl backdrop-blur-2xl z-10 overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-[#EA8E4B]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-[#FAED44]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-3">
                Curriculum Vitae
              </span>
              <h2
                id="resume-modal-title"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#EA8E4B] via-[#FAED44] to-[#EA8E4B] bg-clip-text text-transparent"
              >
                Choose Resume Track
              </h2>
              <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-md mx-auto">
                Select whether you would like to download my Designer or Developer resume.
              </p>
            </div>

            {/* Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <a
                    key={option.id}
                    href={option.fileUrl}
                    download={option.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setTimeout(onClose, 300);
                    }}
                    className={`group relative flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.03] ${option.borderColor} hover:bg-white/[0.07] transition-all duration-300 hover:shadow-lg cursor-pointer`}
                  >
                    <div>
                      {/* Top Icon Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${option.color} border border-white/10 ${option.accentColor}`}
                        >
                          <Icon className="size-6" />
                        </div>
                        <span className="text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300">
                          <Download className="size-5" />
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#FAED44] transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-medium mt-1">
                        {option.role}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {option.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
                      <span>Download PDF</span>
                      <Download className="size-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </a>
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
