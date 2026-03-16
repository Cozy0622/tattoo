import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-content', {
        scrollTrigger: {
          trigger: '.story-content',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-background min-h-screen pt-48 pb-24 px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Title */}
        <div className="story-content space-y-4">
          <h2 className="text-sm tracking-[0.8em] uppercase text-white/30">The Artisan</h2>
          <h3 className="text-6xl font-bold tracking-tighter">彫易 Horiyo</h3>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="story-content space-y-8">
            <p className="text-xl leading-relaxed text-white/80 font-light">
              在台灣當代刺青文化的歷史演進中，高雄的「彫易」（Horiyo，本名陳政藝）是將「和彫」推向藝術巔峰的核心人物。
            </p>
            <p className="text-lg leading-relaxed text-white/60 italic border-l border-white/10 pl-8">
              「刺青，不僅僅是技術轉移，更是一種人格的規訓、美學品味的全面浸染。」
            </p>
          </div>
          
          <div className="story-content space-y-8 pt-12">
            <p className="text-white/60 leading-loose">
              承襲嚴格的東方傳統「修業」（Shugyo）精神，彫易專注於極高門檻的大面積傳統刺青。從半身胸割到全身總身彫，每一寸線條都展現了對人體解剖學與色彩耐受性的深度掌握。
            </p>
            <div className="pt-8">
              <span className="text-xs uppercase tracking-widest text-white/20 block mb-4">Core Philosophy</span>
              <p className="text-sm tracking-wide text-white/40 leading-relaxed">
                每日超過十小時的繪畫訓練，對江戶時代浮世繪的精確臨摹，在碎片化的數位時代，守護無可取代的肉身儀式。
              </p>
            </div>
          </div>
        </div>

        {/* Quote / Highlight */}
        <div className="story-content py-24 border-y border-white/5 text-center">
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-outline uppercase italic">
            Tradition meets the modern skin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;