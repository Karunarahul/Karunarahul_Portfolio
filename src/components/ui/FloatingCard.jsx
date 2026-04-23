import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';

/**
 * FloatingCard
 * A card that floats with a subtle y-axis oscillation and tilts on hover.
 */
export default function FloatingCard({
  children,
  className = '',
  delay = 0,
  duration = 4,
  tiltStrength = 15,
  glowColor = 'blue',
  style = {},
}) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(600px) rotateX(${-dy * tiltStrength}deg) rotateY(${dx * tiltStrength}deg) translateZ(10px)`;
  }, [tiltStrength]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }, []);

  const glowStyles = {
    blue: '0 0 20px rgba(79,110,242,0.3), 0 0 40px rgba(79,110,242,0.1)',
    violet: '0 0 20px rgba(124,106,247,0.3), 0 0 40px rgba(124,106,247,0.1)',
    cyan: '0 0 20px rgba(79,110,242,0.3), 0 0 40px rgba(79,110,242,0.1)', // fallback
    purple: '0 0 20px rgba(124,106,247,0.3), 0 0 40px rgba(124,106,247,0.1)', // fallback
  };

  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative ${className}`}
      style={style}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: 'transform 0.15s ease, box-shadow 0.3s ease',
          willChange: 'transform',
        }}
        className="h-full w-full"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = glowStyles[glowColor];
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
