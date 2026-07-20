import { motion } from 'framer-motion';

/**
 * Animated ECG line — premium SVG waveform
 * Loops continuously, warm palette
 */
export default function ECGLine({ color = '#C09891', height = 48, width = 200, className = '' }) {
  // Classic ECG waveform path
  const ecgPath = `
    M 0,${height / 2}
    L 20,${height / 2}
    L 28,${height / 2 + 4}
    L 33,${height / 2 - 16}
    L 38,${height / 2 + 24}
    L 43,${height / 2 - 20}
    L 48,${height / 2 + 6}
    L 53,${height / 2}
    L 70,${height / 2}
    L 78,${height / 2 + 2}
    L 83,${height / 2 - 8}
    L 88,${height / 2 + 10}
    L 93,${height / 2 - 4}
    L 98,${height / 2}
    L ${width},${height / 2}
  `;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
    >
      {/* Static background trace */}
      <path
        d={ecgPath}
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Animated foreground trace */}
      <motion.path
        d={ecgPath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          times: [0, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 0.3,
          ease: 'easeInOut',
        }}
      />
      {/* Glow dot at current position */}
      <motion.circle
        r="2.5"
        fill={color}
        animate={{
          cx: [0, width * 0.27, width * 0.5, width],
          cy: [height / 2, height / 2 - 20, height / 2, height / 2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 0.3,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}
