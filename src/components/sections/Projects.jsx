import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { projects } from '../../data/projects';

function InView({ children, delay = 0, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Case Study Drawer ──────────────────────────────────────────
function Drawer({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50"
        style={{ background: 'rgba(10,10,10,0.45)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      />
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xl overflow-y-auto"
        style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border-soft)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-8 py-5"
          style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border-soft)' }}
        >
          <span className="label">{project.index} / {String(projects.length).padStart(2, '0')}</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
            aria-label="Close"
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.10)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.06)'; }}
          >
            <X size={14} style={{ color: 'var(--secondary)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-8">
          <div>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              {project.year} · {project.subtitle}
            </p>
            <h2
              className="display-sm mb-4"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              {project.title}
            </h2>
            <p className="body-md">{project.description}</p>
          </div>

          <div className="divider" />

          {[
            { label: 'Problem',  body: project.problem  },
            { label: 'Solution', body: project.solution },
            { label: 'Outcome',  body: project.outcome  },
          ].map(({ label, body }) => (
            <div key={label}>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </p>
              <p className="body-md">{body}</p>
            </div>
          ))}

          <div className="divider" />

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
            >
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="pill">{tech}</span>
              ))}
            </div>
          </div>

          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(10,10,10,0.04)',
                    border: '1px solid var(--border-soft)',
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

// ── Single Project Row ─────────────────────────────────────────
function ProjectRow({ project, index, onOpen }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isFirst = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className="group cursor-pointer"
        onClick={() => onOpen(project)}
        style={{ borderTop: '1px solid var(--border-soft)' }}
        role="button"
        tabIndex={0}
        aria-label={`Open case study: ${project.title}`}
        onKeyDown={e => e.key === 'Enter' && onOpen(project)}
      >
        <div className="py-8 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">

          {/* Index */}
          <span
            className="hidden sm:block text-xs font-semibold tabular-nums"
            style={{ color: 'var(--border)', fontFamily: 'var(--font-body)', letterSpacing: '0.05em', minWidth: '2rem' }}
            aria-hidden="true"
          >
            {project.index}
          </span>

          {/* Content */}
          <div>
            <h3
              className="text-lg font-bold mb-1 transition-all duration-200 group-hover:translate-x-1"
              style={{
                color: 'var(--primary)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.03em',
              }}
            >
              {project.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(10,10,10,0.05)',
                    border: '1px solid var(--border-soft)',
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
            aria-hidden="true"
          >
            <ArrowUpRight
              size={15}
              style={{ color: 'var(--secondary)' }}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-lg">

        <InView>
          <p className="label mb-5">Work</p>
        </InView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-14">
          <InView delay={0.08}>
            <h2 className="display-md">Projects</h2>
          </InView>
          <InView delay={0.18}>
            <p className="body-md max-w-sm mt-1">
              Engineering projects spanning healthcare systems, embedded platforms, 5G research, and digital twin architectures.
            </p>
          </InView>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
          <div className="divider" />
        </div>

      </div>

      {/* Drawer */}
      {selected && (
        <Drawer project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
