import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-black/20 backdrop-blur-xl z-50 border-b border-white/5 flex items-center px-12 justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          HORIYO <span className="font-light opacity-30 text-xs ml-2 uppercase">Traditional Tattoo</span>
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-12">
        <Link to="/gallery" className="text-[10px] uppercase tracking-[0.4em] hover:text-white/40 transition-colors">Gallery</Link>
        <Link to="/story" className="text-[10px] uppercase tracking-[0.4em] hover:text-white/40 transition-colors">The Story</Link>
        <Link to="/contact" className="text-[10px] uppercase tracking-[0.4em] hover:text-white/40 transition-colors">Contact</Link>
      </div>
      
      <div className="md:hidden text-white text-2xl">
        <span>☰</span>
      </div>
    </nav>
  );
};

export default Navbar;