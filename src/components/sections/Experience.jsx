import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="section-container">
        <SectionHeader
          label="Leadership"
          title="Experience"
          subtitle="Building communities and leading technical initiatives alongside engineering studies."
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #4f6ef2, #7c6af7, transparent)' }}
          />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: item.side === 'left' ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: 'power3.out' }}
              className={`relative flex items-start mb-16 ${
                item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-5/12 glass rounded-2xl p-6 ${
                  item.side === 'left' ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                style={{ border: `1px solid ${item.color}25` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }}
                  />
                  <span className="text-xs font-body" style={{ color: item.color }}>{item.period}</span>
                </div>

                <h3 className="font-heading font-bold text-white text-xl mb-1">{item.role}</h3>
                <p className="font-body text-sm font-medium mb-3" style={{ color: item.color }}>@ {item.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-body mb-4">{item.description}</p>

                <ul className="space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-500 font-body">
                      <span style={{ color: item.color }}>▹</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center dot */}
              <motion.div
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                style={{
                  background: item.color,
                  boxShadow: `0 0 15px ${item.color}, 0 0 30px ${item.color}50`,
                  border: '2px solid #020817',
                  top: '28px',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
