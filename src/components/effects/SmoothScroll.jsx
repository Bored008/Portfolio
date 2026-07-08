"use client"; 

import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.add((time) => {
      ScrollTrigger.update();
    });
    
    return () => {
      gsap.ticker.remove(ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      {children}
    </ReactLenis>
  );
}
