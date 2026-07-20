import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { founderTimeline, founderStats } from '../../data/founder';

function TimelineNode({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const statusColor = item.status === 'done' ? '#656567' : '#C2C2C2';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start gap-6"
    >
      {/* Era + line */}
      <div className="flex flex-col items-center flex-shrink-0 w-16">
        <span className="text-xs font-bold tabular-nums" style={{ color: '#C2C2C2' }}>
          {item.era}
        </span>
        <div
          className="mt-2 w-px flex-1 min-h-12"
          style={{
            background: item.status === 'vision'
              ? 'linear-gradient(to bottom, rgba(194,194,194,0.3), transparent)'
              : 'rgba(194,194,194,0.25)',
          }}
        />
      </div>

      {/* Icon node */}
      <div className="flex-shrink-0 mt-0.5">
        <motion.div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm"
          style={{
            background: item.status === 'done' ? 'rgba(9,9,12,0.05)' : 'rgba(194,194,194,0.1)',
            border: `1px solid ${statusColor}30`,
          }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold" style={{ color: '#09090C' }}>
            {item.title}
          </h3>
          {item.status === 'done' && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
              style={{ background: 'rgba(101,101,103,0.08)', color: '#656567', border: '1px solid rgba(101,101,103,0.18)' }}
            >
              ✓ Done
            </span>
          )}
          {item.status === 'vision' && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
              style={{ background: 'rgba(194,194,194,0.12)', color: '#C2C2C2', border: '1px solid rgba(194,194,194,0.25)' }}
            >
              Vision
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: '#656567' }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function FounderStory() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const statsRef     = useRef(null);
  const statsInView  = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="founder"
      className="py-32 relative"
      style={{ background: 'var(--color-bg-deep)' }}
    >
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(194,194,194,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-2xl"
        >
          <p className="section-label mb-4">Founder Story</p>
          <h2 className="editorial-lg mb-6">
            Why I Built<br />SafeVitals XR
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#656567' }}>
            A journey from engineering curiosity to building infrastructure for the future of healthcare —
            driven by a single conviction: healthcare should prevent, not just treat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-16 items-start">
          {/* Timeline */}
          <div>
            {founderTimeline.map((item, i) => (
              <TimelineNode key={item.era + item.title} item={item} index={i} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 space-y-6">
            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="premium-card p-8"
            >
              <div
                className="text-5xl font-black leading-none mb-4 select-none"
                style={{ color: 'rgba(194,194,194,0.3)' }}
              >
                "
              </div>
              <p className="text-lg font-semibold leading-snug" style={{ color: '#09090C' }}>
                Healthcare shouldn't begin inside hospitals. It should begin where people live.
              </p>
              <div className="warm-divider my-5" />
              <p className="text-sm" style={{ color: '#C2C2C2' }}>
                — Karuna Rahul Mamidi
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {founderStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="premium-card p-5 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <p className="text-3xl font-black leading-none mb-1" style={{ color: '#09090C' }}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-semibold" style={{ color: '#656567' }}>
                    {stat.label}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: '#C2C2C2' }}>
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="warm-glass rounded-2xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#C2C2C2' }}>
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Healthcare', 'IoT', 'XR', 'Wearables', 'Embedded Systems', 'Predictive Analytics', 'Digital Twins', '5G'].map(tag => (
                  <span key={tag} className="tech-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
