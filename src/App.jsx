import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/background/ParticleBackground';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import './styles/globals.css';

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Neural net particle canvas (z-index: 0) */}
      <ParticleBackground />

      {/* Custom cursor (z-index: 9998-9999) */}
      <CustomCursor />

      {/* Sticky navbar (z-index: 40) */}
      <Navbar />

      {/* Page content (z-index: 1+) */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </motion.main>
    </div>
  );
}
