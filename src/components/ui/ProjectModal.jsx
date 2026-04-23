import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Wifi, Activity, Radio } from 'lucide-react';

const iconMap = {
  'Digital Twin': Cpu,
  'SOS Wearable': Activity,
  '5G Ray Tracing': Radio,
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const Icon = iconMap[project.shortTitle] || Cpu;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{ background: 'rgba(2,8,23,0.85)', backdropFilter: 'blur(10px)' }}
      >
        <motion.div
          layoutId={`project-${project.id}`}
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl p-8 max-w-2xl w-full relative overflow-hidden"
          style={{ border: '1px solid rgba(0,212,255,0.3)', maxHeight: '85vh', overflowY: 'auto' }}
        >
          {/* Close */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-purple text-gray-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </motion.button>

          {/* Glow accent */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', transform: 'translate(30%, -30%)' }}
          />

          {/* Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-xl glass-purple" style={{ boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}>
              <Icon size={32} style={{ color: '#00d4ff' }} />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-white">{project.title}</h2>
              <p className="text-sm" style={{ color: '#00d4ff' }}>{project.subtitle}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span style={{ color: '#00d4ff', marginTop: 3 }}>▹</span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-full font-medium"
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
}
