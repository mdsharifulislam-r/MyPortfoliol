'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlowScroll = ({ children }:{children:any}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const content = wrapper.querySelector('.content') as HTMLElement;

      // Set wrapper height to match the scaled scroll height
      gsap.set(wrapper, { height: content.scrollHeight });

      gsap.to(content, {
        yPercent: -10, // Moves content upward as the user scrolls
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // Controls scroll speed
        },
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} className="relative overflow-hidden">
      <div className="content">{children}</div>
    </div>
  );
};

export default SlowScroll;
