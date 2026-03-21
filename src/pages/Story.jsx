import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Story = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-reveal', {
        scrollTrigger: {
          trigger: '.story-reveal',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.8,
        stagger: 0.4,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-brand-ink min-h-screen pt-48 pb-32 px-12 overflow-hidden">
      {/* Background Texture Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none">
          <circle cx="50" cy="50" r="40" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto space-y-64">
        {/* Cinematic Title */}
        <div className="story-reveal space-y-6 text-center">
          <span className="text-brand-accent text-[10px] tracking-[0.8em] uppercase block">Personal Monologue</span>
          <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter leading-none italic">
            Pure <br /> <span className="text-outline">Obsession.</span>
          </h2>
        </div>

        {/* Closing Visual Quote */}
        <div className="story-reveal py-32 border-t border-white/5 text-center">
          <p className="text-5xl md:text-7xl font-bold tracking-tighter text-outline uppercase italic hover:text-white transition-all duration-1000 cursor-default">
            Silence is the loudest ink.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;