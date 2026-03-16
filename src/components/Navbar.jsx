import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-black/20 backdrop-blur-xl z-50 border-b border-white/5 flex items-center px-12 justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-widest text-white">HORIYO <span className="font-light opacity-50 text-sm ml-2">彫易刺青</span></h1>
      </div>
      
      <div className="hidden md:flex space-x-12">
        <Link to="/" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Gallery</Link>
        <Link to="/story" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Story</Link>
        <Link to="/contact" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Contact</Link>
      </div>
      
      <div className="md:hidden text-white text-2xl">
        {/* Mobile menu icon */}
        <span>☰</span>
      </div>
    </nav>
  );
};

export default Navbar;