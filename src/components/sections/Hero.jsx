import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

// A minimal SVG monogram / mark for the right side of the hero
function HeroMark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[320px]"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle cx="140" cy="140" r="138" stroke="rgba(10,10,10,0.08)" strokeWidth="1" />
        <circle cx="140" cy="140" r="110" stroke="rgba(10,10,10,0.05)" strokeWidth="1" />

        {/* Initials */}
        <text
          x="140"
          y="158"
          textAnchor="middle"
          fontFamily="'Satoshi', sans-serif"
          fontWeight="900"
          fontSize="72"
          letterSpacing="-4"
          fill="rgba(10,10,10,0.12)"
        >
          KR
        </text>

        {/* Tick marks — like a compass or engineering dial */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
          const isMajor = i % 6 === 0;
          const r1 = isMajor ? 130 : 133;
          const r2 = 138;
          const x1 = 140 + r1 * Math.cos(angle);
          const y1 = 140 + r1 * Math.sin(angle);
          const x2 = 140 + r2 * Math.cos(angle);
          const y2 = 140 + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(10,10,10,0.14)"
              strokeWidth={isMajor ? 1.5 : 0.75}
            />
          );
        })}

        {/* Cardinal labels */}
        {[
          { label: 'ECE', x: 140, y: 26,  anchor: 'middle' },
          { label: 'AI',  x: 258, y: 145, anchor: 'start'  },
          { label: 'IoT', x: 140, y: 264, anchor: 'middle' },
          { label: 'XR',  x: 22,  y: 145, anchor: 'end'    },
        ].map(({ label, x, y, anchor }) => (
          <text
            key={label}
            x={x} y={y}
            textAnchor={anchor}
            fontFamily="'General Sans', sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="0.08em"
            fill="rgba(10,10,10,0.30)"
          >
            {label}
          </text>
        ))}
      </svg>

      {/* Rotating element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 280 280" className="w-full max-w-[320px]" aria-hidden="true">
          <circle
            cx="140" cy="140" r="138"
            fill="none"
            stroke="rgba(10,10,10,0.06)"
            strokeWidth="1"
            strokeDasharray="4 16"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container-lg w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* ── Left: Content ─────────────────────────── */}
          <div className="space-y-8 max-w-2xl">

            {/* Role badge */}
            <motion.div {...fadeUp(0.1)}>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', letterSpacing: '0.10em' }}
              >
                <span
                  className="w-4 h-px inline-block"
                  style={{ background: 'var(--border)' }}
                  aria-hidden="true"
                />
                Founder SafeVitals XR
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="display-xl" style={{ lineHeight: '0.90' }}>
              Karuna<br />Rahul<br />
              <span style={{ color: 'var(--border)' }}>Mamidi</span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.35)} className="body-lg max-w-lg">
              Graduated from ECE, student at KL University, building at the intersection of
              AI, embedded systems, IoT, and Extended Reality.
              My research and projects focus on healthcare technology, 5G networks,
              and intelligent edge systems — including SafeVitals XR, a remote patient
              monitoring platform I founded.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo('#projects')}
                id="hero-cta-projects"
              >
                View Projects
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
              <Button
                href="/assets/karuna-rahul-profile.pdf"
                download
                id="hero-cta-resume"
              >
                Resume
              </Button>
              <Button
                onClick={() => scrollTo('#contact')}
                id="hero-cta-contact"
              >
                Contact
              </Button>
            </motion.div>

            {/* Quick facts */}
            <motion.div {...fadeUp(0.65)}>
              <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                {[
                  { label: 'KL University, Andhra Pradesh, India', note: 'B.Tech ECE · 2022–2026' },
                  { label: '',      note: '' },
                ].map(({ label, note }) => (
                  <div key={label}>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                    >
                      {label}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Engineering mark ────────────────── */}
          <div className="hidden lg:flex items-center justify-center w-72">
            <HeroMark />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          style={{ width: 1, height: 48, background: 'var(--border-soft)' }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
