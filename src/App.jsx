import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor from './components/layout/CustomCursor';
import Navbar       from './components/layout/Navbar';
import Hero         from './components/sections/Hero';
import About        from './components/sections/About';
import Skills       from './components/sections/Skills';
import Projects     from './components/sections/Projects';
import Experience   from './components/sections/Experience';
import Contact      from './components/sections/Contact';
import Footer       from './components/sections/Footer';

import './styles/globals.css';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export default function App() {
  // Skip-to-content link handling
  useEffect(() => {
    const skip = document.getElementById('skip-nav');
    if (skip) {
      skip.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('main-content')?.focus();
      });
    }
  }, []);

  return (
    <>
      {/* Accessibility: skip nav */}
      <a
        id="skip-nav"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg"
        style={{ background: 'var(--primary)', color: '#F5F4F2' }}
      >
        Skip to content
      </a>

      {/* Scroll indicator */}
      <ScrollProgress />

      {/* Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
