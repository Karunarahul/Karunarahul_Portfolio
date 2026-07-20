import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  if (typeof window !== 'undefined') {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return null;
    }
  }
  return <CursorImpl />;
}

function CursorImpl() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = e => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: x, top: y,
        x: '-3px', y: '-3px',
        pointerEvents: 'none',
        zIndex: 999999,
        willChange: 'transform',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2, 2)">
          {/* Black border */}
          <path d="M 2 2 L 16 42 L 24 24 L 42 16 Z" fill="#000" stroke="#000" strokeWidth="6" strokeLinejoin="miter" />
          
          {/* White border */}
          <path d="M 2 2 L 16 42 L 24 24 L 42 16 Z" fill="#FFF" stroke="#FFF" strokeWidth="3" strokeLinejoin="miter" />
          
          {/* Gray fill */}
          <path d="M 2 2 L 16 42 L 24 24 L 42 16 Z" fill="#7C7D82" />
          
          {/* White highlight on top-right edge */}
          <path d="M 14 7 L 24 10.5 M 27 11.5 L 29 12.2 M 31 13 L 32 13.5" stroke="#FFF" strokeWidth="2" />
          
          {/* Black shadow on bottom-left edge */}
          <path d="M 7 14 L 10.5 24 M 11.5 27 L 12.2 29 M 13 31 L 13.5 32" stroke="#000" strokeWidth="2" />
          
          {/* Black line from notch */}
          <path d="M 23 23 L 16 16" stroke="#000" strokeWidth="2.5" strokeLinecap="square" />
        </g>
      </svg>
    </motion.div>
  );
}
