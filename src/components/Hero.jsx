import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Panels sliding in
      gsap.from(panelsRef.current, {
        y: '100%',
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out'
      });

      // Text animation
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex">
      {/* 4 Split Panels */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className={`h-full flex-1 border-r border-white/5 last:border-0`}
          style={{ backgroundColor: `rgb(${34 + i * 5}, ${34 + i * 5}, ${34 + i * 5})` }}
        ></div>
      ))}

      {/* Central Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div ref={textRef} className="text-center">
          <h2 className="hero-text text-8xl md:text-[12rem] font-bold tracking-tighter leading-none text-white uppercase italic">
            Tradition
          </h2>
          <h2 className="hero-text text-8xl md:text-[12rem] font-bold tracking-tighter leading-none uppercase italic text-outline -mt-6 md:-mt-12">
            Redefined
          </h2>
        </div>
        
        <p className="hero-text mt-8 text-sm tracking-[0.5em] uppercase text-white/40 font-light">
          彫易刺青 — HORIYO TATTOO
        </p>
      </div>
      
      {/* Visual Texture Decor */}
      <div className="absolute bottom-12 left-12 hero-text">
        <span className="text-xs tracking-widest text-white/20 uppercase">Wabori Master Since 1995</span>
      </div>
    </div>
  );
};

export default Hero;