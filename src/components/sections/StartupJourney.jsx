import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { journeyMilestones } from '../../data/journey';

const statusConfig = {
  done:          { color: '#656567', bg: 'rgba(101,101,103,0.07)', label: 'Complete',    border: 'rgba(101,101,103,0.18)' },
  'in-progress': { color: '#3A3A3D', bg: 'rgba(58,58,61,0.08)',   label: 'In Progress', border: 'rgba(58,58,61,0.2)'    },
  upcoming:      { color: '#C2C2C2', bg: 'rgba(194,194,194,0.07)',label: 'Upcoming',    border: 'rgba(194,194,194,0.2)' },
  vision:        { color: '#09090C', bg: 'rgba(9,9,12,0.04)',      label: 'Vision',      border: 'rgba(9,9,12,0.1)'      },
};

function MilestoneCard({ milestone, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const config = statusConfig[milestone.status];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ top: '1.5rem' }}>
        <motion.div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg z-10 relative"
          style={{
            background: config.bg,
            border: `1px solid ${config.border}`,
            boxShadow: `0 4px 16px ${config.color}15`,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {milestone.icon}
        </motion.div>
        {index < journeyMilestones.length - 1 && (
          <div
            className="w-px mt-1 flex-1"
            style={{ height: '100%', minHeight: '60px', background: 'linear-gradient(to bottom, rgba(194,194,194,0.3), transparent)' }}
          />
        )}
      </div>

      <div className={`grid grid-cols-2 gap-8 items-start ${isEven ? '' : ''}`}>
        <div className={isEven ? 'pr-12 text-right' : 'col-start-2 pl-12 text-left'}>
          <div
            className="premium-card p-5 inline-block text-left w-full"
            style={{ border: `1px solid ${config.border}` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-bold tabular-nums block mb-1" style={{ color: '#C2C2C2' }}>
                  {milestone.date}
                </span>
                <h3 className="text-base font-bold" style={{ color: '#09090C' }}>
                  {milestone.title}
                </h3>
              </div>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2"
                style={{ color: config.color, background: config.bg, border: `1px solid ${config.border}` }}
              >
                {config.label}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#656567' }}>
              {milestone.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {milestone.tags.map(tag => (
                <span key={tag} className="tech-pill text-[10px]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        {isEven && <div />}
      </div>
    </motion.div>
  );
}

function MilestoneCardMobile({ milestone, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const config = statusConfig[milestone.status];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg z-10"
          style={{ background: config.bg, border: `1px solid ${config.border}` }}
        >
          {milestone.icon}
        </div>
        {index < journeyMilestones.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ background: 'rgba(194,194,194,0.2)', minHeight: '24px' }} />
        )}
      </div>

      <div className="pb-6 flex-1">
        <div className="flex items-start justify-between mb-1">
          <span className="text-xs font-bold" style={{ color: '#C2C2C2' }}>{milestone.date}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ color: config.color, background: config.bg }}>
            {config.label}
          </span>
        </div>
        <h3 className="text-base font-bold mb-2" style={{ color: '#09090C' }}>{milestone.title}</h3>
        <p className="text-sm leading-relaxed mb-3" style={{ color: '#656567' }}>{milestone.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {milestone.tags.map(tag => (
            <span key={tag} className="tech-pill text-[10px]">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function StartupJourney() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="journey" className="py-32 relative" style={{ background: 'var(--color-bg-deep)' }}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(194,194,194,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="section-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Entrepreneurship</p>
          <h2 className="editorial-lg mb-6">The Startup Journey</h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#656567' }}>
            From a dorm room idea to a registered healthcare startup —
            every milestone on the road to building SafeVitals XR.
          </p>
        </motion.div>

        <div className="hidden lg:block relative space-y-8">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(194,194,194,0.22), rgba(194,194,194,0.22), transparent)' }}
          />
          {journeyMilestones.map((milestone, i) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={i} />
          ))}
        </div>

        <div className="lg:hidden space-y-0">
          {journeyMilestones.map((milestone, i) => (
            <MilestoneCardMobile key={milestone.id} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
