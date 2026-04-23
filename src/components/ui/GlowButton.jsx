import { motion } from 'framer-motion';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

/**
 * GlowButton
 * A CTA button with magnetic cursor attraction and glow effects.
 */
export default function GlowButton({ children, onClick, href, className = '', variant = 'cyan' }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticEffect(0.35);

  const gradients = {
    cyan: 'linear-gradient(135deg, #00d4ff, #0099cc)',
    purple: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    mixed: 'linear-gradient(135deg, #00d4ff, #7c3aed, #a855f7)',
  };

  const glows = {
    cyan: '0 0 30px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.3)',
    purple: '0 0 30px rgba(124,58,237,0.6), 0 0 60px rgba(124,58,237,0.3)',
    mixed: '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(124,58,237,0.4)',
  };

  const Tag = href ? 'a' : 'div';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Tag
        {...props}
        className={`relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-white overflow-hidden transition-shadow duration-300 ${className}`}
        style={{ background: gradients[variant], textDecoration: 'none' }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = glows[variant]; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Shimmer overlay */}
        <span
          className="absolute inset-0 rounded-full opacity-30"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3), transparent 50%)' }}
        />
        <span className="relative z-10 flex items-center gap-2 font-heading">{children}</span>
      </Tag>
    </motion.div>
  );
}
