import { useState, useEffect } from 'react';

/**
 * useParallax
 * Returns normalized mouse position { x, y } ranging from -1 to 1
 * relative to viewport center, for parallax effects.
 */
export function useParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return mouse;
}
