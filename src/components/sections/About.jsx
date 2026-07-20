import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../../data/education';
import { certifications } from '../../data/experience';
import { CardSpotlight } from '../ui/CardSpotlight';

const reveal = {
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

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

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-lg">

        {/* Section header */}
        <InView>
          <p className="label mb-5">About</p>
        </InView>

        {/* Split: large text left, detail right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Left: Heading */}
          <InView delay={0.08}>
            <h2 className="display-md" style={{ lineHeight: '1.05' }}>
              Engineer.<br />
              Researcher.<br />
              Builder.
            </h2>
          </InView>

          {/* Right: Body */}
          <InView delay={0.18} className="space-y-5">
            <p className="body-lg">
              Graduated in Electronics & Communication Engineering, student at KL University. My work sits at the intersection of hardware and intelligence —
              building systems that make embedded devices smarter, networks faster, and healthcare
              more accessible.
            </p>
            <p className="body-md">
              My technical interests include IoT system design, AI/ML applied to real-world sensors,
              5G and Beyond-5G network simulation, Digital Twin architectures, and Extended Reality
              for industrial and medical applications.
            </p>
            <p className="body-md">
              Beyond engineering, I lead the Pulse ECE Student Body (800+ members) as Vice-President,
              drive research initiatives, and Founded SafeVitals XR — a remote patient monitoring
              system that I built from hardware prototype to cloud backend.
            </p>
          </InView>
        </div>

        {/* Divider */}
        <InView>
          <div className="divider mb-16" />
        </InView>

        {/* Education */}
        <InView delay={0.08}>
          <p className="label mb-10">Education</p>
        </InView>

        <div className="space-y-0">
          {education.map((edu, i) => (
            <InView key={edu.id} delay={i * 0.1}>
              <div
                className="grid sm:grid-cols-[1fr_auto] gap-4 items-start py-7"
                style={{ borderTop: '1px solid var(--border-soft)' }}
              >
                <div>
                  <h3
                    className="text-base font-semibold mb-0.5"
                    style={{
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                    {edu.institution} · {edu.location}
                  </p>
                  {edu.highlights?.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.slice(0, 3).map(h => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs"
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
                <div className="text-right">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', letterSpacing: '-0.01em' }}
                  >
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                    >
                      {edu.grade}
                    </p>
                  )}
                </div>
              </div>
            </InView>
          ))}

          {/* Bottom border */}
          <div className="divider" />
        </div>

        {/* Certifications — minimal grid */}
        <div className="mt-16">
          <InView>
            <p className="label mb-8">Certifications</p>
          </InView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, i) => (
              <InView key={cert.id} delay={i * 0.06} className="h-full">
                <CardSpotlight className="p-5 h-full">
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="text-xs font-medium mb-2"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {cert.org} · {cert.year}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {cert.description}
                  </p>
                </CardSpotlight>
              </InView>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
