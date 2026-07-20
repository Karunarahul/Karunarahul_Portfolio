import { useState, useEffect, useRef } from 'react';

/**
 * useParallax
 * Returns normalized mouse position { x, y } ranging from -1 to 1
 * relative to viewport center.
 *
 * Automatically disabled on:
 * - Touch / coarse pointer devices (mobile)
 * - prefers-reduced-motion
 *
 * Uses rAF scheduling to avoid setState on every mousemove event.
 */
export function useParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const pendingRef = useRef(null);
  const rawRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch/coarse pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) return;

    const handler = (e) => {
      rawRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };

      // Throttle state updates with rAF — no setState on every event
      if (!pendingRef.current) {
        pendingRef.current = requestAnimationFrame(() => {
          setMouse({ ...rawRef.current });
          pendingRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      if (pendingRef.current) cancelAnimationFrame(pendingRef.current);
    };
  }, []);

  return mouse;
}
