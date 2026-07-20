import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const events = [
  {
    id:    1,
    icon:  '🏆',
    title: 'MSME Summit',
    org:   'Ministry of MSME, India',
    desc:  'Presented SafeVitals XR as an innovative healthcare startup solution. Recognized among top student-led ventures.',
    type:  'Conference',
    date:  '2023',
    status: 'done',
  },
  {
    id:    2,
    icon:  '🎖️',
    title: 'Collector Demonstration',
    org:   'District Administration',
    desc:  'Live demonstration of the healthcare monitoring system to the District Collector — real-time vitals, AI analysis, and emergency response.',
    type:  'Government',
    date:  '2023',
    status: 'done',
  },
  {
    id:    3,
    icon:  '⚡',
    title: 'RTIH Innovation Program',
    org:   'RTIH',
    desc:  'Participated in the Retail Technology Innovation Hub innovation program, expanding the healthcare technology scope and network.',
    type:  'Innovation',
    date:  '2024',
    status: 'done',
  },
  {
    id:    4,
    icon:  '🚀',
    title: 'Startup Incubation',
    org:   'University Incubation Center',
    desc:  'Formally entering startup incubation with institutional mentorship, clinical access, and infrastructure support.',
    type:  'Incubation',
    date:  '2025',
    status: 'upcoming',
  },
  {
    id:    5,
    icon:  '🌐',
    title: 'Healthcare Innovation Award',
    org:   'TBD — Applied',
    desc:  'Targeting national and international healthcare innovation awards to gain visibility and validation.',
    type:  'Award',
    date:  '2025+',
    status: 'future',
  },
  {
    id:    6,
    icon:  '📰',
    title: 'Media Coverage',
    org:   'National Tech Media',
    desc:  'Building media presence in healthcare technology publications and startup ecosystem newsletters.',
    type:  'Media',
    date:  '2025+',
    status: 'future',
  },
];

const typeColors = {
  Conference:  '#656567',
  Government:  '#3A3A3D',
  Innovation:  '#C2C2C2',
  Incubation:  '#656567',
  Award:       '#3A3A3D',
  Media:       '#C2C2C2',
};

function EventCard({ event, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const isDone = event.status === 'done';
  const color  = typeColors[event.type] || '#656567';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="premium-card p-6 group"
      style={{
        opacity: isDone ? 1 : 0.75,
        border: isDone ? '1px solid rgba(194,194,194,0.25)' : '1px dashed rgba(194,194,194,0.3)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
          style={{ background: `${color}10`, border: `1px solid ${color}20` }}
        >
          {event.icon}
        </div>
        <div className="text-right">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ color, background: `${color}10`, border: `1px solid ${color}20` }}
          >
            {event.type}
          </span>
          <p className="text-[10px] mt-1" style={{ color: '#C2C2C2' }}>{event.date}</p>
        </div>
      </div>

      <h3 className="text-base font-bold mb-1" style={{ color: '#09090C' }}>{event.title}</h3>
      <p className="text-xs font-medium mb-3" style={{ color: '#C2C2C2' }}>{event.org}</p>
      <p className="text-sm leading-relaxed" style={{ color: '#656567' }}>{event.desc}</p>

      {!isDone && (
        <div
          className="mt-4 flex items-center gap-1.5 text-xs font-medium"
          style={{ color: '#C2C2C2' }}
        >
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C2C2C2' }} />
          {event.status === 'upcoming' ? 'Coming Soon' : 'Future Goal'}
        </div>
      )}
    </motion.div>
  );
}

export default function MediaRecognition() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="media"
      className="py-32 relative"
      style={{ background: 'var(--color-bg-deep)' }}
    >
      <div className="section-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Recognition</p>
          <h2 className="editorial-lg mb-6">Media & Recognition</h2>
          <p className="text-base max-w-xl" style={{ color: '#656567' }}>
            From government demonstrations to innovation programs —
            the milestones that validate SafeVitals XR's real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
