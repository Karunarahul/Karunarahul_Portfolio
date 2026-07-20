import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/experience';

function InView({ children, delay = 0, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ExperienceItem({ item, index }) {
  return (
    <InView delay={index * 0.08}>
      <div
        className="group"
        style={{ borderTop: '1px solid var(--border-soft)' }}
      >
        <div className="py-8 grid sm:grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr] gap-5 sm:gap-10">

          {/* Left: meta */}
          <div className="space-y-1.5">
            <span
              className="text-xs font-semibold tabular-nums block"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', letterSpacing: '-0.01em' }}
            >
              {item.period}
            </span>
            <span
              className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded"
              style={{
                background: 'rgba(10,10,10,0.05)',
                border: '1px solid var(--border-soft)',
                color: 'var(--muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {item.type}
            </span>
          </div>

          {/* Right: content */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3
                  className="text-base font-bold mb-0.5"
                  style={{
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {item.role}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                >
                  {item.org}
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
            >
              {item.description}
            </p>

            {item.highlights?.length > 0 && (
              <ul className="space-y-1.5">
                {item.highlights.map(h => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-xs"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--border)' }}
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </InView>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{
        background: 'rgba(168,166,163,0.3)',
        borderTop: '1px solid var(--border-soft)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <div className="container-lg">

        <InView>
          <p className="label mb-5">Experience</p>
        </InView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-14">
          <InView delay={0.08}>
            <h2 className="display-md">Work &<br />Leadership</h2>
          </InView>
          <InView delay={0.18}>
            <p className="body-md max-w-sm mt-1">
              Professional experience, student leadership, and research positions across engineering and product development.
            </p>
          </InView>
        </div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <ExperienceItem key={item.id} item={item} index={i} />
          ))}
          <div className="divider" />
        </div>

      </div>
    </section>
  );
}
