"use client"; 

import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateGsap=()=>{
        ScrollTrigger.update();
    };

    gsap.ticker.add(updateGsap);
    
    return () => {
      gsap.ticker.remove(updateGsap);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      {children}
    </ReactLenis>
  );
}
