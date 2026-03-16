import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gallery = () => {
  const containerRef = useRef(null);

  const galleryItems = [
    { id: 1, title: 'Wabori One', category: 'Back Piece', color: 'bg-[#1a1a1a]' },
    { id: 2, title: 'Dragon Spirit', category: 'Sleeve', color: 'bg-[#151515]' },
    { id: 3, title: 'The Wave', category: 'Chest Piece', color: 'bg-[#1a1a1a]' },
    { id: 4, title: 'Hannya Mask', category: 'Leg Piece', color: 'bg-[#151515]' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-card', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-32 pb-24 px-12 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12">
        <h2 className="text-8xl font-bold tracking-tighter uppercase leading-none">Works</h2>
        <p className="text-sm tracking-[0.5em] text-white/30 uppercase max-w-xs text-right">Selected masterpieces from Horiyo Studio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-card group relative h-[70vh] w-full overflow-hidden border border-white/5 cursor-pointer">
            <div className={`absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ${item.color}`}>
              {/* Placeholder for real images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/5 text-9xl font-bold italic select-none">#{item.id}</span>
              </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">{item.category}</span>
              <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
              <div className="w-0 group-hover:w-full h-[1px] bg-white/20 mt-4 transition-all duration-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;