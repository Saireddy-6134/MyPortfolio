import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SpaceBackground from './components/Background/SpaceBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Only track cursor on fine pointers (desktops/laptops)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#fcf8fa] selection:bg-[#ff78b4] selection:text-[#09070e]">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
        aria-hidden="true"
      />

      {/* Cosmic Animated Atmosphere */}
      <SpaceBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
