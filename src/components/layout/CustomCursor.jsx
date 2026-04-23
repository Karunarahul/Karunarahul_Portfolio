import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const ringX = useSpring(cursorX, { damping: 18, stiffness: 100 });
  const ringY = useSpring(cursorY, { damping: 18, stiffness: 100 });

  const isHovering = useRef(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const trailPositions = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const MAX_TRAILS = 8;
    // Create trail elements
    trailsRef.current = Array.from({ length: MAX_TRAILS }, (_, i) => {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed;
        width: ${8 - i}px;
        height: ${8 - i}px;
        border-radius: 50%;
        background: rgba(0, 212, 255, ${0.6 - i * 0.07});
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        filter: blur(${i * 0.5}px);
        transition: none;
      `;
      document.body.appendChild(el);
      return el;
    });

    trailPositions.current = Array.from({ length: MAX_TRAILS }, () => ({ x: -100, y: -100 }));

    let mouseX = -100, mouseY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const animate = () => {
      // Update trail positions with lag
      trailPositions.current[0] = { x: mouseX, y: mouseY };
      for (let i = 1; i < MAX_TRAILS; i++) {
        const prev = trailPositions.current[i - 1];
        const curr = trailPositions.current[i];
        trailPositions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.35,
          y: curr.y + (prev.y - curr.y) * 0.35,
        };
      }
      trailsRef.current.forEach((el, i) => {
        const pos = trailPositions.current[i];
        el.style.left = `${pos.x}px`;
        el.style.top = `${pos.y}px`;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      isHovering.current = true;
    };
    const onMouseLeaveInteractive = () => {
      isHovering.current = false;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, [role="button"], .interactive').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
      trailsRef.current.forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#4f6ef2',
          boxShadow: '0 0 10px #4f6ef2, 0 0 20px rgba(0,212,255,0.5)',
        }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          x: '-50%',
          y: '-50%',
          zIndex: 9998,
          pointerEvents: 'none',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(0, 212, 255, 0.7)',
          boxShadow: '0 0 12px rgba(0,212,255,0.3)',
        }}
      />
    </>
  );
}
