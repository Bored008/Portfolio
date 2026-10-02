"use client";

import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
  children: React.ReactNode;
}

function LenisScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, syncTouch: false }}>
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
