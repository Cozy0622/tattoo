import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gallery = () => {
  const containerRef = useRef(null);
  
  const works = [
    { id: 1, img: './images/S__176177157_0.jpg', title: 'Dragon Spirit', category: 'Wabori Full Back' },
    { id: 2, img: './images/S__176177158_0.jpg', title: 'The Great Wave', category: 'Japanese Traditional' },
    { id: 3, img: './images/S__176177159_0.jpg', title: 'Tigers Wrath', category: 'Irezumi Sleeve' },
    { id: 4, img: './images/S__176177160_0.jpg', title: 'Hannya Mask', category: 'Oriental Detail' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-ink pt-48 pb-32 px-12">
      {/* Cinematic Header */}
      <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-16">
        <div className="space-y-4">
          <span className="text-brand-accent text-[10px] tracking-[0.8em] uppercase">Masterpieces</span>
          <h2 className="text-8xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none italic">
            Works
          </h2>
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 max-w-[200px] text-right mt-8 md:mt-0">
          Selected works from the depths of Horiyo studio.
        </p>
      </div>

      {/* Full Feature Grid */}
      <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {works.map((work) => (
          <div key={work.id} className="work-card group relative aspect-[3/4] overflow-hidden bg-white/5 rounded-[2rem] border border-white/5 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${work.img})` }}
            ></div>
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
              <span className="text-brand-accent text-[10px] tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {work.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                {work.title}
              </h3>
              <div className="h-[1px] w-0 bg-white/20 mt-4 group-hover:w-full transition-all duration-700 delay-300"></div>
            </div>
            
            {/* Identity Number */}
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-mono text-white/50">0{work.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;