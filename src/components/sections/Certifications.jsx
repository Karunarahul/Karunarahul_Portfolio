import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import FloatingCard from '../ui/FloatingCard';
import { certifications } from '../../data/experience';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,171,252,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="section-container">
        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Professional credentials validating expertise in hardware, IoT, and communications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <FloatingCard key={cert.id} delay={i * 0.3} duration={4 + i * 0.4}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass rounded-2xl p-6 text-center flex flex-col items-center gap-4 group"
                style={{ border: `1px solid ${cert.color}22` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 25px ${cert.color}30`;
                  e.currentTarget.style.borderColor = `${cert.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = `${cert.color}22`;
                }}
              >
                {/* Badge icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: `${cert.color}15`,
                    border: `2px solid ${cert.color}35`,
                    boxShadow: `0 0 20px ${cert.color}20`,
                  }}
                >
                  {cert.icon}
                </div>

                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-20 h-20 rounded-full pointer-events-none"
                  style={{
                    border: `1px dashed ${cert.color}25`,
                    top: '22px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />

                <div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs font-body mb-2" style={{ color: cert.color }}>{cert.org}</p>
                  <p className="text-gray-500 text-xs leading-relaxed font-body">{cert.description}</p>
                </div>

                {/* Verified badge */}
                <span
                  className="px-3 py-1 text-xs rounded-full font-body font-medium"
                  style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                >
                  ✓ Certified
                </span>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
