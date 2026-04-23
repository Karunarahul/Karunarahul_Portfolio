import { motion } from 'framer-motion';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

/**
 * MagneticWrapper
 * Wraps any child element with a magnetic cursor attraction effect.
 */
export default function MagneticWrapper({ children, strength = 0.3, className = '' }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticEffect(strength);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
