import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '../../data/experience';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const prev = () => setCurrentIndex(i => (i === 0 ? certifications.length - 1 : i - 1));
  const next = () => setCurrentIndex(i => (i === certifications.length - 1 ? 0 : i + 1));

  return (
    <section id="certifications" className="py-20 relative" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        {/* Compact header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="section-label mb-3">Credentials</p>
            <h2 className="editorial-sm">Certifications</h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid rgba(10,10,10,0.10)' }}
              aria-label="Previous certification"
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.06)'; }}
            >
              <ChevronLeft size={15} style={{ color: '#494847' }} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid rgba(10,10,10,0.10)' }}
              aria-label="Next certification"
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.06)'; }}
            >
              <ChevronRight size={15} style={{ color: '#494847' }} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => {
              const isActive = i === currentIndex;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-6 rounded-2xl transition-all duration-300 flex flex-col items-start gap-4"
                  style={{
                    background: isActive ? 'rgba(10,10,10,0.06)' : 'rgba(10,10,10,0.03)',
                    border: isActive ? '1px solid rgba(10,10,10,0.12)' : '1px solid rgba(10,10,10,0.07)',
                  }}
                  whileHover={{ y: -3 }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(10,10,10,0.05)', border: '1px solid rgba(10,10,10,0.08)' }}
                  >
                    {cert.icon}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-sm font-bold mb-0.5"
                      style={{ color: '#0A0A0A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium mb-3" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
                      {cert.org}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
                      {cert.description}
                    </p>
                  </div>

                  <span
                    className="px-2.5 py-0.5 text-[10px] rounded-full font-semibold"
                    style={{ background: 'rgba(10,10,10,0.06)', color: '#6B6967', fontFamily: 'var(--font-body)' }}
                  >
                    ✓ Certified
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-7">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === currentIndex ? '20px' : '6px',
                height: '6px',
                background: i === currentIndex ? 'rgba(10,10,10,0.4)' : 'rgba(10,10,10,0.15)',
              }}
              aria-label={`View certification ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
