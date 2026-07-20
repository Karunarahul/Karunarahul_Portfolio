import { motion } from 'framer-motion';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

/**
 * GlowButton
 * CTA button with magnetic cursor attraction and glow effects.
 * - Magnetic effect clamped to 12px (via useMagneticEffect)
 * - Touch-safe (no-op on mobile)
 */
export default function GlowButton({ children, onClick, href, id, className = '', variant = 'cyan' }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticEffect(0.28);

  const gradients = {
    cyan:   'linear-gradient(135deg, #0099cc, #00d4ff)',
    purple: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
    mixed:  'linear-gradient(135deg, #0099cc, #7c3aed, #a855f7)',
  };

  const glows = {
    cyan:   '0 0 28px rgba(0,212,255,0.6), 0 0 55px rgba(0,212,255,0.25)',
    purple: '0 0 28px rgba(124,58,237,0.6), 0 0 55px rgba(124,58,237,0.25)',
    mixed:  '0 0 28px rgba(0,212,255,0.4), 0 0 55px rgba(124,58,237,0.35)',
  };

  const Tag = href ? 'a' : 'div';
  const tagProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <Tag
        {...tagProps}
        className={`relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-white overflow-hidden transition-shadow duration-300 ${className}`}
        style={{ background: gradients[variant] ?? gradients.cyan, textDecoration: 'none' }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = glows[variant] ?? glows.cyan; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Shimmer overlay */}
        <span
          className="absolute inset-0 rounded-full opacity-25"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.35), transparent 50%)' }}
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2 font-heading">{children}</span>
      </Tag>
    </motion.div>
  );
}
