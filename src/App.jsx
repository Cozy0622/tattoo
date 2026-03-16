import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './pages/Story';
import Gallery from './pages/Gallery';

function App() {
  return (
    <main className="relative min-h-screen bg-background text-brand-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </main>
  );
}

export default App;