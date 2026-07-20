import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ECGLine from '../ui/ECGLine';

export default function Vision() {
  const ref                 = useRef(null);
  const inView              = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y                   = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      id="vision"
      className="py-40 relative overflow-hidden"
      style={{ background: '#09090C' }}
    >
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(194,194,194,0.06) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-20">
        <ECGLine color="#C2C2C2" height={36} width={300} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-10" style={{ color: '#656567' }}>
            The Vision
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="font-heading font-black leading-tight mb-8"
              style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
                color: '#E4E5F1',
                letterSpacing: '-0.03em',
              }}
            >
              Healthcare shouldn't begin
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #656567, #C2C2C2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                inside hospitals.
              </span>
              <br />
              It should begin
              <br />
              where people{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E4E5F1, #656567)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                live.
              </span>
            </h2>
          </div>

          <div
            className="w-24 h-px mx-auto mb-16"
            style={{ background: 'rgba(194,194,194,0.3)' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-16"
            style={{ color: 'rgba(228,229,241,0.6)' }}
          >
            SafeVitals XR's mission is to make healthcare{' '}
            <strong style={{ color: '#E4E5F1', fontWeight: 600 }}>predictive</strong>,{' '}
            <strong style={{ color: '#E4E5F1', fontWeight: 600 }}>intelligent</strong>,{' '}
            <strong style={{ color: '#E4E5F1', fontWeight: 600 }}>accessible</strong>, and{' '}
            <strong style={{ color: '#E4E5F1', fontWeight: 600 }}>continuous</strong> —
            transforming the global healthcare system from reactive treatment
            into proactive prevention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { word: 'Predictive', desc: 'AI that anticipates health events' },
              { word: 'Intelligent', desc: 'Systems that learn and adapt' },
              { word: 'Accessible', desc: 'Healthcare for every community' },
              { word: 'Continuous', desc: 'Monitoring without interruption' },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-2xl text-center"
                style={{
                  background: 'rgba(228,229,241,0.03)',
                  border: '1px solid rgba(194,194,194,0.1)',
                }}
              >
                <p className="text-base font-bold mb-1" style={{ color: '#E4E5F1' }}>
                  {pillar.word}
                </p>
                <p className="text-xs leading-snug" style={{ color: 'rgba(228,229,241,0.45)' }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-15">
        <ECGLine color="#C2C2C2" height={36} width={300} />
      </div>
    </section>
  );
}
