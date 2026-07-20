import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  safevitalsOverview,
  safevitalsFeatures,
  safevitalsTechStack,
  safevitalsMetrics,
  safevitalsRoadmap,
} from '../../data/safevitals';
import ECGLine from '../ui/ECGLine';

// ── Feature Bento Card ─────────────────────────────────────────
function BentoCard({ feature, delay = 0, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`bento-card-dark p-6 group flex flex-col ${className}`}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-5">
        <motion.div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
          whileHover={{ scale: 1.12, rotate: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>
        <motion.span
          className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: '#8A8783' }}
        >
          Feature →
        </motion.span>
      </div>

      <h3
        className="text-base font-bold mb-2 leading-tight"
        style={{ color: '#F5F4F2', fontFamily: 'var(--font-heading)', letterSpacing: '-0.025em' }}
      >
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
        {feature.desc}
      </p>

      {feature.size === 'large' && (
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#6B6967' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>
              Core SafeVitals XR Feature
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── Metric Card ────────────────────────────────────────────────
function MetricCard({ metric, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center py-8 px-4 rounded-2xl"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <p
        className="text-5xl font-black leading-none mb-2"
        style={{ color: '#F5F4F2', fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
      >
        {metric.value}
      </p>
      <p className="text-sm font-semibold mb-1" style={{ color: '#8A8783', fontFamily: 'var(--font-heading)' }}>
        {metric.label}
      </p>
      <p className="text-xs" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>
        {metric.desc}
      </p>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────
export default function SafeVitalsXR() {
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-60px' });

  return (
    <section id="safevitals" className="relative" aria-label="SafeVitals XR">

      {/* ── 1. Dark Editorial Hero ── */}
      <div
        className="py-32 relative overflow-hidden"
        style={{ background: '#0A0A0A' }}
      >
        {/* Background elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-8 right-8 opacity-10 hidden lg:block" aria-hidden="true">
          <ECGLine color="#F5F4F2" height={40} width={260} />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-3 py-1.5 rounded-full text-xs font-semibold inline-block"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#8A8783', fontFamily: 'var(--font-body)', letterSpacing: '0.08em' }}
              >
                FLAGSHIP INNOVATION
              </div>
            </div>

            {/* Large Tagline */}
            <h2
              className="editorial-lg mb-8 max-w-4xl leading-tight"
              style={{ color: '#F5F4F2' }}
            >
              {safevitalsOverview.tagline}
            </h2>

            {/* Mission */}
            <p
              className="text-base leading-relaxed mb-14 max-w-2xl"
              style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}
            >
              {safevitalsOverview.mission}
            </p>

            {/* Problem / Solution split */}
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6B6967' }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>
                    The Problem
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,244,242,0.5)', fontFamily: 'var(--font-body)' }}>
                  Healthcare is reactive. Patients arrive at hospitals too late.
                  Data is siloed. Doctors are blind to early warning signs.
                  Millions of preventable deaths occur each year.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#8A8783' }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
                    Our Solution
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,244,242,0.5)', fontFamily: 'var(--font-body)' }}>
                  SafeVitals XR creates a continuous, intelligent health monitoring layer —
                  connecting patients, wearables, hospital systems, and AI to enable
                  proactive intervention before emergencies occur.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 2. Metrics Bar ── */}
      <div
        className="py-1"
        style={{ background: '#111111' }}
        aria-label="Key metrics"
      >
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {safevitalsMetrics.map((metric, i) => (
              <MetricCard key={metric.label} metric={metric} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Bento Feature Grid ── */}
      <div className="py-32" style={{ background: '#0D0D0D' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="section-label mb-4" style={{ color: '#494847' }}>Core Features</p>
            <h2 className="editorial-md mb-4" style={{ color: '#F5F4F2' }}>
              Built for the Future<br />of Healthcare
            </h2>
            <p className="text-base max-w-lg" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
              Ten interconnected systems working as one — from the wearable on your wrist to the intelligence in the cloud.
            </p>
          </motion.div>

          {/* Asymmetric bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safevitalsFeatures.map((feature, i) => (
              <BentoCard
                key={feature.id}
                feature={feature}
                delay={i * 0.06}
                className={feature.size === 'large' ? 'lg:col-span-2' : ''}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. Technology Stack ── */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.04)' }}
        aria-label="Technology stack"
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="section-label mb-4" style={{ color: '#494847' }}>Stack</p>
            <h2 className="editorial-sm" style={{ color: '#F5F4F2' }}>Technology Ecosystem</h2>
          </motion.div>

          <div className="flex flex-wrap gap-2.5">
            {safevitalsTechStack.map((tech, i) => (
              <motion.span
                key={tech.label}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#8A8783',
                  fontFamily: 'var(--font-body)',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -3, background: 'rgba(255,255,255,0.08)', color: '#F5F4F2' }}
              >
                {tech.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. Roadmap + CTA ── */}
      <div className="py-28" style={{ background: '#0A0A0A' }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-5" style={{ color: '#494847' }}>Vision</p>
              <h2 className="editorial-sm mb-8" style={{ color: '#F5F4F2' }}>The World We're Building</h2>
              <div className="space-y-4">
                {[
                  'Every person continuously monitored for early warning signs',
                  'Doctors receiving AI alerts before patients even feel symptoms',
                  'Hospitals operating as intelligent, connected ecosystems',
                  'Healthcare accessible in homes, villages, and remote communities',
                  'A world where medical emergencies become preventable events',
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6B6967' }} />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="section-label mb-5" style={{ color: '#494847' }}>Roadmap</p>
              <h2 className="editorial-sm mb-8" style={{ color: '#F5F4F2' }}>Where We're Going</h2>
              <div className="space-y-3">
                {safevitalsRoadmap.map((phase, i) => {
                  const styles = {
                    done:          { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)', dot: '#8A8783', label: 'Complete' },
                    'in-progress': { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.10)', dot: '#F5F4F2', label: 'Active'   },
                    upcoming:      { bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.06)', dot: '#494847', label: 'Upcoming' },
                    vision:        { bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.05)', dot: '#3A3838', label: 'Vision'   },
                  }[phase.status];

                  return (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ background: styles.bg, border: `1px solid ${styles.border}` }}
                    >
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: styles.dot }} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold" style={{ color: '#F5F4F2', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                          {phase.phase}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>{phase.desc}</p>
                      </div>
                      <span
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{ color: styles.dot, background: `${styles.dot}15`, border: `1px solid ${styles.dot}25`, fontFamily: 'var(--font-body)' }}
                      >
                        {styles.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div
              className="inline-block rounded-3xl p-px"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))' }}
            >
              <div
                className="px-10 py-10 rounded-[calc(1.5rem-1px)]"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <p
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#F5F4F2', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
                >
                  Interested in SafeVitals XR?
                </p>
                <p className="text-sm mb-8" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
                  Partnerships, hospital pilots, investment, or research collaboration — let's talk.
                </p>
                <a
                  href="mailto:karunarahul8885@gmail.com"
                  id="safevitals-cta"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    background: '#F5F4F2',
                    color: '#0A0A0A',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,244,242,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#F5F4F2'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Get in Touch <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
