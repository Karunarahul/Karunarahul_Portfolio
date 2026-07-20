import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * FloatingCard
 * A card that floats with a subtle y-axis oscillation and tilts on hover.
 *
 * Fixes:
 * - Replaces direct style.transform mutation with Framer Motion useMotionValue
 *   to avoid conflict with the parent animate loop
 * - Tilt clamped to ±5° (spec: max 5°)
 * - Disabled on touch/coarse pointer devices
 * - Low amplitude float (8px) to avoid distraction
 */
export default function FloatingCard({
  children,
  className = '',
  delay = 0,
  duration = 4,
  tiltStrength = 5,   // spec: max 5°
  glowColor = 'cyan',
  style = {},
}) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [tiltStrength, -tiltStrength]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-tiltStrength, tiltStrength]), springConfig);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set((e.clientX - cx) / (rect.width / 2));
    mouseY.set((e.clientY - cy) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowShadows = {
    cyan:   '0 0 24px rgba(0,212,255,0.35), 0 0 48px rgba(0,212,255,0.12)',
    purple: '0 0 24px rgba(124,58,237,0.35), 0 0 48px rgba(124,58,237,0.12)',
    // legacy aliases
    blue:   '0 0 24px rgba(0,212,255,0.35), 0 0 48px rgba(0,212,255,0.12)',
    violet: '0 0 24px rgba(124,58,237,0.35), 0 0 48px rgba(124,58,237,0.12)',
  };

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative ${className}`}
      style={style}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          perspective: 800,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
        className="h-full w-full"
        whileHover={{
          boxShadow: glowShadows[glowColor] ?? glowShadows.cyan,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
