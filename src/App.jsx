import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* 預留內容區塊：藝廊與背景故事 */}
      <section className="py-24 px-12 max-w-7xl mx-auto">
        {/* 未來可在此注入 background.txt 的故事內容 */}
      </section>
    </main>
  );
}

export default App;