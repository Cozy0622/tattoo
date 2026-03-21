import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`mx-auto max-w-7xl px-8 flex items-center justify-between transition-all duration-700 ${
        isScrolled 
          ? 'bg-brand-ink/60 backdrop-blur-2xl border border-white/5 rounded-full py-3 translate-y-2 px-12' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <Link to="/" className="group flex items-center gap-3">
            <span className="text-2xl font-display font-bold tracking-[0.2em] text-white">HORIYO</span>
            <span className="h-[1px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-8"></span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-12">
          {['Gallery', 'Story'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`} 
              className={`text-[10px] uppercase tracking-[0.4em] transition-all hover:text-brand-accent ${
                pathname.includes(item.toLowerCase()) ? 'text-brand-accent font-bold' : 'text-white/50'
              }`}
            >
              {item}
            </Link>
          ))}
          
          <button className="btn-magnetic bg-brand-accent text-brand-ink px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-brand-accent/20 transition-all">
            Book Session
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;