import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Radio, ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectModal from '../ui/ProjectModal';
import { projects } from '../../data/projects';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const projectIcons = { 1: Cpu, 2: Activity, 3: Radio };

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const gridRef = useStaggerAnimation(
    '.project-card',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    0.15
  );

  return (
    <section id="projects" className="py-32 relative">
      {/* Dual background radials */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/4 top-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute right-1/4 bottom-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="section-container">
        <SectionHeader
          label="Featured Work"
          title="Projects"
          subtitle="Cutting-edge systems at the intersection of IoT, AI, and next-generation networking."
        />

        <div ref={gridRef} className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.id];
            return (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                className="project-card group relative overflow-hidden rounded-2xl glass"
                style={{ border: `1px solid ${project.color}22`, cursor: 'pointer' }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${project.color}30, 0 20px 60px rgba(0,0,0,0.5)`;
                  e.currentTarget.style.borderColor = `${project.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = `${project.color}22`;
                }}
              >
                {/* Gradient header zone */}
                <div
                  className="h-40 relative flex items-center justify-center overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {/* Animated glow circle */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-32 h-32 rounded-full"
                    style={{ background: `radial-gradient(circle, ${project.color}40, transparent)` }}
                  />
                  <div
                    className="relative z-10 p-5 rounded-2xl"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      boxShadow: `0 0 30px ${project.color}20`,
                    }}
                  >
                    <Icon size={36} style={{ color: project.color }} />
                  </div>

                  {/* Click hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-body px-2 py-1 rounded-full" style={{ background: `${project.color}20`, color: project.color }}>
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-lg mb-1 leading-tight">{project.title}</h3>
                  <p className="text-xs font-body mb-4" style={{ color: project.color }}>{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-body mb-5">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full font-body"
                        style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-sm font-heading font-semibold group-hover:gap-2 transition-all" style={{ color: project.color }}>
                    View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
