import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { education } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container">
        <SectionHeader
          label="Academic Background"
          title="Education"
          subtitle="Building a foundation in engineering excellence and innovation."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-2xl p-7 relative overflow-hidden group"
              style={{ border: `1px solid ${edu.color}22` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${edu.color}25, 0 16px 50px rgba(0,0,0,0.4)`;
                e.currentTarget.style.borderColor = `${edu.color}45`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `${edu.color}22`;
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 40% at 80% 20%, ${edu.color}08, transparent)`,
                }}
              />

              {/* Header row */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${edu.color}15`,
                    border: `1.5px solid ${edu.color}30`,
                    boxShadow: `0 0 20px ${edu.color}18`,
                  }}
                >
                  {edu.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg leading-tight mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-heading font-semibold text-sm" style={{ color: edu.color }}>
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-body">
                  <Calendar size={13} style={{ color: edu.color }} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-body">
                  <MapPin size={13} style={{ color: edu.color }} />
                  {edu.location}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-body font-semibold" style={{ color: edu.color }}>
                  <Award size={13} />
                  {edu.grade}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 relative z-10">
                {edu.highlights.map((h, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + j * 0.07, duration: 0.4 }}
                    className="flex items-start gap-2 text-xs text-gray-400 font-body"
                  >
                    <span style={{ color: edu.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                    {h}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom glow line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 + 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${edu.color}50, transparent)`,
                  transformOrigin: 'left',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
