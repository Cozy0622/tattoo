import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 輔助工具：獲取 Base URL 與 圖片路徑 ---
const BASE_URL = import.meta.env.BASE_URL || '/';
const getAssetPath = (path) => `${BASE_URL}${path.replace(/^\//, '')}`;

// --- 全域雜訊濾鏡：提升黑曜石質感的暗部層次 ---
const Noise = () => (
  <svg className="noise-overlay fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

// --- 極簡導覽列 ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 flex items-center justify-between
      ${isScrolled ? 'bg-[#0D0D12]/90 backdrop-blur-md border-b border-[#FAF8F5]/5' : 'bg-transparent'}`}>
      <div className="font-heading font-bold text-lg tracking-[0.3em] text-[#FAF8F5] uppercase">彫易刺青</div>
      <div className="flex gap-10 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
        <a href="#hero" className="hover:text-[#FAF8F5] transition-colors">作品存檔</a>
        <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">藝廊展覽</a>
        <a href="#footer" className="hover:text-[#FAF8F5] transition-colors">聯絡預約</a>
      </div>
    </nav>
  );
};

// --- Hero 區塊：滿版背景 + 襯線標題 ---
const Hero = ({ firstImage }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 30,
        opacity: 0,
        stagger: 0.3,
        duration: 2,
        ease: "expo.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#0D0D12]">
      <div className="absolute inset-0">
        <img 
          src={getAssetPath(firstImage || '/images/S__176177157_0.jpg')} 
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="職人背景"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/20 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" ref={textRef}>
        <span className="text-[#C9A84C] font-mono text-[10px] tracking-[0.8em] mb-4 uppercase">傳承江戶道統</span>
        <h1 className="text-[#FAF8F5] font-dramatic text-7xl md:text-[10rem] leading-none tracking-tight select-none">
          彫易刺青
        </h1>
        <p className="mt-6 text-[#FAF8F5]/60 font-sans tracking-[0.3em] text-sm md:text-base">於肌膚之上雕琢台灣傳統之魂</p>
        <div className="mt-12 w-[1px] h-32 bg-gradient-to-b from-[#C9A84C] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

// --- Gallery 區塊：瀑布流 (Masonry) ---
const Gallery = ({ images }) => {
  return (
    <section id="gallery" className="w-full bg-[#0D0D12] py-32 px-4 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-dramatic text-5xl text-[#FAF8F5] mb-4">作品集展覽</h2>
          <div className="h-[1px] w-12 bg-[#C9A84C] mx-auto opacity-50"></div>
          <p className="mt-6 font-mono text-[#C9A84C] text-[10px] tracking-[0.5em] uppercase">The Artisan Archive</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden bg-[#15151A] rounded-sm transition-all duration-700 min-h-[300px]">
              <img 
                src={getAssetPath(src)} 
                alt={`作品典藏 ${i}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out will-change-transform opacity-0 animate-reveal"
                onLoad={(e) => e.target.classList.remove('opacity-0')}
              />
              <div className="absolute inset-0 bg-[#0D0D12]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer 區塊 ---
const Footer = () => (
  <footer id="footer" className="bg-[#0D0D12] text-[#FAF8F5] py-32 px-10 border-t border-[#FAF8F5]/5">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
      <h2 className="font-dramatic text-4xl mb-12 text-[#FAF8F5]">彫易刺青工作室</h2>
      <a 
        href="https://www.instagram.com/horiyotattoo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative px-12 py-5 border border-[#C9A84C]/30 text-[#C9A84C] text-[11px] tracking-[0.4em] uppercase hover:text-[#0D0D12] transition-colors duration-500 overflow-hidden"
      >
        <span className="relative z-10">Instagram 藝廊典藏</span>
        <div className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
      </a>
      
      <div className="mt-16 flex flex-col gap-2">
        <p className="text-[#FAF8F5]/40 text-xs tracking-[0.1em]">高雄市前金區職人工作室</p>
        <p className="text-[#FAF8F5]/40 text-xs tracking-[0.1em]">採完全預約制．手繪構圖設計</p>
      </div>

      <div className="mt-32 font-mono text-[9px] tracking-[0.5em] text-[#FAF8F5]/20 uppercase">
        © 2024 HORIYO TATTOO STUDIO. 彫易刺青．極致職人典藏。
      </div>
    </div>
  </footer>
);

const App = () => {
  const imageFiles = [
    'images/S__176177157_0.jpg',
    'images/S__176177158_0.jpg',
    'images/S__176177159_0.jpg',
    'images/S__176177160_0.jpg',
    'images/S__176177161_0.jpg',
    'images/S__176177162.jpg',
    'images/S__176177163.jpg',
    'images/messageImage_1774080242754.jpg',
    'images/messageImage_1774080252215.jpg',
    'images/messageImage_1774080262636.jpg',
    'images/messageImage_1774080308506_0.jpg',
    'images/messageImage_1774080320463_0.jpg',
    'images/messageImage_1774080330306_0.jpg',
    'images/messageImage_1774080341909_0.jpg',
    'images/messageImage_1774080370591_0.jpg',
    'images/messageImage_1774080393694_0.jpg',
    'images/messageImage_1774080400454_0.jpg',
    'images/messageImage_1774080407813_0.jpg',
    'images/messageImage_1774080421751.jpg',
    'images/messageImage_1774080437981_0.jpg',
    'images/messageImage_1774080445654_0.jpg'
  ];

  return (
    <div className="bg-[#0D0D12] min-h-screen selection:bg-[#C9A84C] selection:text-[#0D0D12] overflow-x-hidden">
      <Noise />
      <Navbar />
      <Hero firstImage={imageFiles[0]} />
      <Gallery images={imageFiles} />
      <Footer />
    </div>
  );
};

export default App;
