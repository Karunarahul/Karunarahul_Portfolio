import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Grouped skills — no icons, no colors, just clean text pills
const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'C / Embedded C', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Embedded & Hardware',
    skills: ['ESP32', 'Arduino', 'Raspberry Pi', 'RTOS', 'MQTT', 'I2C / SPI', 'UART'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'TensorFlow Lite', 'Keras', 'Scikit-learn', 'OpenCV', 'NLP'],
  },
  {
    category: 'Networking & Telecom',
    skills: ['5G / B5G', 'mmWave', 'Sionna RT', 'Cisco Packet Tracer', 'Wireshark', 'Network Slicing'],
  },
  {
    category: 'Web & Cloud',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Supabase', 'AWS IoT', 'Firebase'],
  },
  {
    category: '3D & Simulation',
    skills: ['Unreal Engine 5', 'Blender', 'Digital Twins', 'MATLAB', 'Ray Tracing'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Linux', 'TinkerCad', 'Figma', 'VS Code'],
  },
];

function InView({ children, delay = 0, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: 'rgba(168,166,163,0.3)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}
      aria-label="Skills and technologies"
    >
      <div className="container-lg">

        <InView>
          <p className="label mb-5">Skills</p>
        </InView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-8">
          <InView delay={0.08}>
            <h2 className="display-md">Technology</h2>
          </InView>
          <InView delay={0.16}>
            <p className="body-md max-w-sm mt-1">
              The tools and technologies I use across hardware, software, and research.
            </p>
          </InView>
        </div>

        {/* Skill groups */}
        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <InView key={group.category} delay={gi * 0.06}>
              <div className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start">
                <p
                  className="text-xs font-semibold pt-1"
                  style={{
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="pill"
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: si * 0.03 }}
                      whileHover={{ y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              {gi < skillGroups.length - 1 && (
                <div className="divider mt-8" />
              )}
            </InView>
          ))}
        </div>

      </div>
    </section>
  );
}
