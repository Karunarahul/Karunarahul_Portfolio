import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technologies = [
  { label: 'React',             delay: 0 },
  { label: 'Next.js',           delay: 0.05 },
  { label: 'TypeScript',        delay: 0.1 },
  { label: 'Python',            delay: 0.15 },
  { label: 'FastAPI',           delay: 0.2 },
  { label: 'TensorFlow',        delay: 0.25 },
  { label: 'Machine Learning',  delay: 0.3 },
  { label: 'Healthcare AI',     delay: 0.35 },
  { label: 'OpenCV',            delay: 0.4 },
  { label: 'Supabase',          delay: 0.45 },
  { label: 'ESP32',             delay: 0.5 },
  { label: 'Arduino',           delay: 0.55 },
  { label: 'Raspberry Pi',      delay: 0.6 },
  { label: 'MQTT',              delay: 0.65 },
  { label: 'Embedded C',        delay: 0.7 },
  { label: 'MATLAB',            delay: 0.75 },
  { label: 'Unreal Engine',     delay: 0.8 },
  { label: 'Digital Twins',     delay: 0.85 },
  { label: '5G / B5G',          delay: 0.9 },
  { label: 'Edge Computing',    delay: 0.95 },
  { label: 'Cloud',             delay: 1.0 },
  { label: 'Git',               delay: 1.05 },
  { label: 'Linux',             delay: 1.1 },
  { label: 'Docker',            delay: 1.15 },
  { label: 'IoT Protocols',     delay: 1.2 },
  { label: 'Signal Processing', delay: 1.25 },
];

// Assign varied float delays for organic look
const floatDelays = [0, 0.6, 1.2, 1.8, 2.4, 3.0, 0.3, 0.9, 1.5, 2.1, 2.7, 3.3];

export default function TechEcosystem() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const pillsRef     = useRef(null);
  const pillsInView  = useInView(pillsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: 'rgba(168,166,163,0.45)' }}
      aria-label="Technology Ecosystem"
    >
      {/* Dividers */}
      <div className="warm-divider absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="warm-divider absolute bottom-0 left-0 right-0" aria-hidden="true" />

      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(10,10,10,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="section-label mb-5">Stack</p>
            <h2 className="editorial-md">Technology Ecosystem</h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right" style={{ color: '#6B6967', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
            The tools, languages, and platforms powering SafeVitals XR and every project I build.
          </p>
        </motion.div>

        {/* Pill Cloud */}
        <div
          ref={pillsRef}
          className="flex flex-wrap gap-3"
          role="list"
          aria-label="Technologies"
        >
          {technologies.map((tech, i) => (
            <motion.span
              key={tech.label}
              role="listitem"
              className="tech-pill"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={pillsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: tech.delay * 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.04 }}
              style={{
                animationDelay: `${floatDelays[i % floatDelays.length]}s`,
              }}
            >
              {tech.label}
            </motion.span>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={pillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 text-xs"
          style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}
        >
          + exploring XR tooling, biomedical signal processing, and next-generation network protocols
        </motion.p>
      </div>
    </section>
  );
}
