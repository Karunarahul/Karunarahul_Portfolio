import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const ref = useScrollAnimation(
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );

  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }[align];

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} mb-16`}>
      {/* Label chip */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1 text-xs font-heading font-semibold uppercase tracking-widest rounded-full mb-4"
        style={{
          background: 'rgba(0,212,255,0.1)',
          border: '1px solid rgba(0,212,255,0.4)',
          color: '#00d4ff',
        }}
      >
        {label}
      </motion.span>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-5xl font-heading font-bold mb-4"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #00d4ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {title}
      </motion.h2>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-px w-24 mb-4"
        style={{
          background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
          transformOrigin: align === 'center' ? 'center' : 'left',
        }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
