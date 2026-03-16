import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './pages/Story';
import Gallery from './pages/Gallery';

// 組合成單頁長捲軸佈局
const HomeScroll = () => (
  <>
    <Hero />
    <Story />
    <Gallery />
  </>
);

function App() {
  return (
    <main className="relative min-h-screen bg-background text-brand-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScroll />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </main>
  );
}

export default App;