import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import GlowButton from '../ui/GlowButton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const socials = [
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/Karunarahul', color: '#fff' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/', color: '#0ea5e9' },
  { Icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/', color: '#00d4ff' },
];

const contactInfo = [
  { Icon: Mail, label: 'Academic Email', value: '2200040121ece@gmail.com', href: 'mailto:2200040121ece@gmail.com' },
  { Icon: Mail, label: 'Personal Email', value: 'karunarahul8885@gmail.com', href: 'mailto:karunarahul8885@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { Icon: MapPin, label: 'Location', value: 'KL University, Andhra Pradesh, India', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const panelRef = useScrollAnimation(
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build Together"
          subtitle="Open to research collaborations, internships, and innovative engineering projects."
        />

        <div ref={panelRef} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Column */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-body">
                Whether you're interested in IoT development, AI research, digital twin systems,
                or just want to talk technology — I'd love to connect.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 mb-10">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 group"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
                    >
                      <Icon size={18} style={{ color: '#00d4ff' }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-body">{label}</p>
                      <p className="text-white font-body text-sm group-hover:text-cyan-400 transition-colors">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center glass"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                    aria-label={label}
                  >
                    <Icon size={18} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div
              className="mt-10 p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <p className="text-sm font-body text-gray-300">
                <span className="text-emerald-400 font-medium">Available</span> for internships and research roles — 2025 grad
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8"
            style={{ border: '1px solid rgba(0,212,255,0.15)' }}
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs text-gray-500 font-body mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white text-sm font-body outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0,212,255,0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-500 font-body mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white text-sm font-body outline-none transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0,212,255,0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-gray-500 font-body mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-300 resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0,212,255,0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                {sent ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-3 rounded-xl font-heading font-semibold text-emerald-400"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    ✓ Message Sent! I'll get back to you soon.
                  </motion.div>
                ) : (
                  <GlowButton variant="mixed" className="w-full justify-center">
                    <Send size={16} />
                    Send Message
                  </GlowButton>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-24 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-body">
            © 2025 Mamidi Karuna Rahul. Crafted with passion &amp; physics.
          </p>
          <p className="text-gray-700 text-xs font-body">
            Built with React + Vite + Framer Motion + GSAP
          </p>
        </div>
      </div>
    </section>
  );
}
