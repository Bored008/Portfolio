"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
        });
      }

      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const clickables = document.querySelectorAll<HTMLElement>("a, button, .cursor-pointer");
    const handleMouseEnter = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 1.5,
          backgroundColor: "rgba(234, 142, 75, 0.2)",
          duration: 0.3,
        });
      }
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 1,
          backgroundColor: "transparent",
          duration: 0.3,
        });
      }
    };

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#EA8E4B] rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
      />
      
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#EA8E4B] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
