import { useRef, useCallback, useEffect, useState } from 'react';
import { useSpring } from 'framer-motion';

/**
 * useMagneticEffect
 * Returns ref + motion values for a magnetic cursor-attraction effect.
 * - Disabled entirely on touch / coarse pointer devices
 * - Max translation clamped to 12px to prevent layout shift
 */
export function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.1 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.1 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const MAX_OFFSET = 12; // px — hard cap to prevent layout shift

  const onMouseMove = useCallback((e) => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rawX = (e.clientX - cx) * strength;
    const rawY = (e.clientY - cy) * strength;
    // Clamp to MAX_OFFSET
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rawX)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rawY)));
  }, [strength, x, y, isTouch]);

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, onMouseMove, onMouseLeave };
}
