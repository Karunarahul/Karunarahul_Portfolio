import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Activity, Radio } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const iconMap = {
  'Digital Twin': Cpu,
  'SOS Wearable': Activity,
  '5G Ray Tracing': Radio,
};

export default function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    setMounted(true);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // ESC key to close
  useEffect(() => {
    if (!project) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [project, onClose]);

  if (!project || !mounted) return null;

  const Icon = iconMap[project.shortTitle] || Cpu;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
        style={{ background: 'rgba(7,9,15,0.88)', backdropFilter: 'blur(12px)' }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — project details`}
      >
        <motion.div
          layoutId={`project-${project.id}`}
          initial={{ scale: 0.88, opacity: 0, y: 32 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 32 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative overflow-hidden"
          style={{
            border: `1px solid ${project.color}35`,
            maxHeight: '88vh',
            overflowY: 'auto',
            // Custom scroll for modal
            scrollbarWidth: 'thin',
          }}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-purple text-gray-300 hover:text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </motion.button>

          {/* Background glow accent */}
          <div
            className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none opacity-8"
            style={{
              background: `radial-gradient(circle, ${project.color}40, transparent)`,
              transform: 'translate(35%, -35%)',
            }}
          />

          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pr-8">
            <div
              className="p-3 sm:p-4 rounded-xl"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}30`,
                boxShadow: `0 0 20px ${project.color}20`,
              }}
            >
              <Icon size={28} style={{ color: project.color }} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">{project.title}</h2>
              <p className="text-sm font-body mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full font-body font-medium"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Long description */}
          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base font-body">
            {project.longDescription}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-white mb-3 text-sm sm:text-base">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-gray-300 text-sm font-body"
                >
                  <span style={{ color: project.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-3 text-sm sm:text-base">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-full font-body font-medium"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    color: '#a855f7',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  const modalRoot = document.getElementById('modal-root');
  return modalRoot ? createPortal(modalContent, modalRoot) : modalContent;
}
