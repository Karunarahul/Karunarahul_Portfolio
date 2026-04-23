import { motion } from 'framer-motion';
import { Wifi, Cpu, Heart, Radio } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FloatingCard from '../ui/FloatingCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const highlights = [
  {
    Icon: Wifi,
    title: 'IoT Systems',
    desc: 'Designing end-to-end IoT architectures with MQTT, edge computing, and cloud integration.',
    color: '#4f6ef2',
    delay: 0,
  },
  {
    Icon: Cpu,
    title: 'Embedded Systems',
    desc: 'Low-level programming on ESP32, Raspberry Pi, AVR — from bare metal to RTOS.',
    color: '#7c6af7',
    delay: 0.3,
  },
  {
    Icon: Heart,
    title: 'AI Healthcare',
    desc: 'Applying machine learning to real-time biometric analysis and patient monitoring systems.',
    color: '#ec4899',
    delay: 0.6,
  },
  {
    Icon: Radio,
    title: '5G / 6G Research',
    desc: 'Exploring mmWave propagation, network slicing, and next-gen telecom protocols.',
    color: '#22c55e',
    delay: 0.9,
  },
];

export default function About() {
  const textRef = useScrollAnimation(
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }
  );

  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="section-container">
        <SectionHeader
          label="About Me"
          title="Engineering Tomorrow"
          subtitle="Turning complex technological challenges into elegant, real-world solutions."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div ref={textRef}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-body">
              I'm <span style={{ color: '#4f6ef2', fontWeight: 600 }}>Mamidi Karuna Rahul</span>, a final-year
              Electronics and Communication Engineering student at KL University with a deep passion for
              building intelligent, connected systems that bridge the physical and digital worlds.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6 font-body">
              My work sits at the intersection of IoT hardware, AI-driven analytics, digital twin
              simulation, and next-generation 5G communication. I believe technology's highest purpose
              is improving human lives — which drives my focus on healthcare applications.
            </p>
            <p className="text-gray-400 text-base leading-relaxed font-body">
              Beyond engineering, I serve as President of the Pulse ECE Student Body, leading 800+ students
              and fostering a culture of innovation, collaboration, and technical excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '3+', label: 'Major Projects' },
                { value: '800+', label: 'Students Led' },
                { value: '4+', label: 'Certifications' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl glass"
                  style={{ border: '1px solid rgba(0,212,255,0.1)' }}
                >
                  <p className="text-2xl font-heading font-bold" style={{ color: '#4f6ef2' }}>{stat.value}</p>
                  <p className="text-xs text-gray-500 font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ Icon, title, desc, color, delay }, i) => (
              <FloatingCard key={title} delay={delay} duration={4 + i * 0.4} glowColor={color === '#4f6ef2' ? 'blue' : 'violet'}>
                <div
                  className="p-5 rounded-xl h-full glass"
                  style={{ border: `1px solid ${color}22` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-body">{desc}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
