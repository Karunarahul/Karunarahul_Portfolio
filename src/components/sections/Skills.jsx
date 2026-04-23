import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import FloatingCard from '../ui/FloatingCard';
import { skills } from '../../data/skills';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const categories = [...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const gridRef = useStaggerAnimation(
    '.skill-card',
    { opacity: 0, y: 40, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
    0.08
  );

  return (
    <section id="skills" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="section-container">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Tools"
          subtitle="A curated arsenal of tools, languages, and platforms I use to build next-gen systems."
        />

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs rounded-full font-body"
              style={{
                background: 'rgba(0,212,255,0.05)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: 'rgba(0,212,255,0.8)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon, category, color }, i) => (
            <FloatingCard
              key={name}
              delay={i * 0.1}
              duration={3.5 + (i % 4) * 0.5}
              className="skill-card"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="glass rounded-xl p-5 flex flex-col items-center text-center gap-3 group"
                style={{ border: `1px solid ${color}20` }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${color}15`,
                    boxShadow: `0 0 0px ${color}00`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}40`;
                    e.currentTarget.style.background = `${color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${color}00`;
                    e.currentTarget.style.background = `${color}15`;
                  }}
                >
                  {Icon && <Icon size={24} style={{ color }} />}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{name}</p>
                  <p className="text-xs text-gray-600 mt-0.5 font-body">{category}</p>
                </div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
