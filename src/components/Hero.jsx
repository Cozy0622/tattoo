import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const panelImages = [
    'https://images.unsplash.com/photo-1598449334855-0112764548fc?q=80&w=2070&auto=format&fit=crop', // Ink
    'https://images.unsplash.com/photo-1590246814883-578561dbdab1?q=80&w=1974&auto=format&fit=crop', // Japanese art
    'https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2072&auto=format&fit=crop', // Traditional
    'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=2070&auto=format&fit=crop', // Texture
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Panels sliding in
      gsap.from(panelsRef.current, {
        y: '100%',
        duration: 1.8,
        stagger: 0.15,
        ease: 'power4.inOut'
      });

      // Text animation
      gsap.from('.hero-text', {
        y: 120,
        opacity: 0,
        duration: 1.5,
        delay: 1,
        stagger: 0.3,
        ease: 'expo.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black flex overflow-hidden">
      {/* 4 Split Panels with High Quality Backgrounds */}
      {panelImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className="h-full flex-1 relative border-r border-white/10 last:border-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 opacity-30 hover:opacity-60"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      ))}

      {/* Central Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="text-center">
          <h2 className="hero-text text-8xl md:text-[14rem] font-bold tracking-tighter leading-none text-white uppercase italic drop-shadow-2xl">
            Tradition
          </h2>
          <h2 className="hero-text text-8xl md:text-[14rem] font-bold tracking-tighter leading-none uppercase italic text-outline -mt-6 md:-mt-16 drop-shadow-2xl">
            Redefined
          </h2>
        </div>
        
        <p className="hero-text mt-12 text-sm tracking-[0.8em] uppercase text-white/50 font-light">
          彫易刺青 — HORIYO TATTOO
        </p>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 w-full flex justify-center hero-text">
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-4 italic">Discover the story</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;