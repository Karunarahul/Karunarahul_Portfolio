import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Cpu, Zap, Radio, Globe, Activity, ChevronDown } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import { useParallax } from '../../hooks/useParallax';

const TITLES = [
  'IoT Systems Engineer',
  'AI Developer',
  'Digital Twin Architect',
  '5G / 6G Researcher',
  'Embedded Systems Designer',
];

const floatingIcons = [
  { Icon: Wifi, x: '10%', y: '25%', delay: 0, size: 28, color: '#00d4ff' },
  { Icon: Cpu, x: '85%', y: '20%', delay: 0.8, size: 32, color: '#a855f7' },
  { Icon: Zap, x: '8%', y: '65%', delay: 1.6, size: 24, color: '#f0abfc' },
  { Icon: Radio, x: '88%', y: '60%', delay: 0.4, size: 30, color: '#00d4ff' },
  { Icon: Globe, x: '15%', y: '45%', delay: 1.2, size: 22, color: '#22c55e' },
  { Icon: Activity, x: '80%', y: '40%', delay: 2, size: 26, color: '#a855f7' },
];

export default function Hero() {
  const parallax = useParallax();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size, color }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4 + i * 0.5, delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            x: `${parallax.x * (8 + i * 3)}px`,
            y: `${parallax.y * (6 + i * 2)}px`,
            color,
            filter: `drop-shadow(0 0 10px ${color})`,
            opacity: 0.7,
            zIndex: 1,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="section-container relative z-10 text-center px-4">
        {/* Greeting chip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium font-body"
          style={{
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.25)',
            color: '#00d4ff',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for research collaborations &amp; opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight"
        >
          <span className="block text-white">Mamidi</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #f0abfc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Karuna Rahul
          </span>
        </motion.h1>

        {/* Subtitle bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff)' }} />
          <span className="text-sm font-body text-gray-400 uppercase tracking-widest">ECE Engineer</span>
          <span className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl font-heading font-semibold mb-10 h-8"
          style={{ color: '#00d4ff' }}
        >
          {displayed}
          <span className="animate-pulse ml-0.5">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-body"
        >
          Building the future through IoT ecosystems, AI-driven healthcare systems,
          digital twin architectures, and next-generation 5G/6G communication networks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton
            variant="mixed"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Projects ↗
          </GlowButton>
          <GlowButton
            variant="cyan"
            href="mailto:karunarahul8885@gmail.com"
          >
            Contact Me
          </GlowButton>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap justify-center gap-2 mt-12"
        >
          {['IoT', 'AI/ML', 'Digital Twin', '5G/6G', 'Raspberry Pi', 'Unreal Engine', 'Python', 'Embedded C'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full font-body"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(0,212,255,0.6)' }}
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
