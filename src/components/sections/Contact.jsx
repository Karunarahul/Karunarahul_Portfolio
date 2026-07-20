import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const inputStyle = {
  width: '100%',
  padding: '0.75rem 0',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border-soft)',
  borderRadius: 0,
  color: 'var(--primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
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

function ContactInput({ label, name, value, onChange, type = 'text', placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="block text-xs font-semibold mb-2"
        style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}
      >
        {label}{required && <span style={{ color: 'var(--border)' }}> *</span>}
      </label>
      <input
        id={`contact-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          ...inputStyle,
          borderBottomColor: focused ? 'var(--primary)' : 'var(--border-soft)',
        }}
        onFocus={() => setFocused(true)}
        onBlur={()  => setFocused(false)}
      />
    </div>
  );
}

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setSending(false);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-lg">

        <InView>
          <p className="label mb-5">Contact</p>
        </InView>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Heading + links */}
          <div className="space-y-10">
            <InView delay={0.08}>
              <h2 className="display-md" style={{ lineHeight: '1.05' }}>
                Let's work<br />together.
              </h2>
            </InView>

            <InView delay={0.18}>
              <p className="body-lg max-w-sm">
                I'm open to provide internship opportunities, research collaborations,
                interesting engineering problems, and conversations about AI,
                IoT, and healthcare technology.
              </p>
            </InView>

            <InView delay={0.28}>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:karunarahul8885@gmail.com"
                  className="flex items-center gap-3 group"
                  id="contact-email-link"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
                  >
                    <Mail size={15} style={{ color: 'var(--secondary)' }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>Email</p>
                    <p
                      className="text-sm font-medium link-underline"
                      style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}
                    >
                      karunarahul8885@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/karunarahul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  id="contact-linkedin"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
                  >
                    <LinkedInIcon />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>LinkedIn</p>
                    <p className="text-sm font-medium link-underline" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}>
                      linkedin.com/in/karunarahul
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Karunarahul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  id="contact-github"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
                  >
                    <GithubIcon />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>GitHub</p>
                    <p className="text-sm font-medium link-underline" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}>
                      github.com/Karunarahul
                    </p>
                  </div>
                </a>

                {/* Resume */}
                <a
                  href="/assets/karuna-rahul-profile.pdf"
                  download
                  className="flex items-center gap-3 group"
                  id="contact-resume"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
                  >
                    <ArrowRight size={15} style={{ color: 'var(--secondary)' }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>Resume</p>
                    <p className="text-sm font-medium link-underline" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}>
                      Download PDF
                    </p>
                  </div>
                </a>
              </div>
            </InView>
          </div>

          {/* Right: Form */}
          <InView delay={0.22}>
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[300px] space-y-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ background: 'rgba(10,10,10,0.06)', border: '1px solid var(--border-soft)' }}
                  aria-live="polite"
                >
                  ✓
                </div>
                <h3 className="display-sm">Message sent.</h3>
                <p className="body-md">I'll get back to you within 24 hours.</p>
                <Button
                  onClick={() => setSent(false)}
                  className="mt-4"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <ContactInput
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <ContactInput
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  required
                />

                {/* Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-2"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                  >
                    Message <span style={{ color: 'var(--border)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about what you're working on..."
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      borderBottom: '1px solid var(--border-soft)',
                    }}
                    onFocus={e  => e.target.style.borderBottomColor = 'var(--primary)'}
                    onBlur={e   => e.target.style.borderBottomColor = 'var(--border-soft)'}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  id="contact-submit"
                  aria-live="polite"
                >
                  {sending ? 'Sending...' : 'Send message'}
                  {!sending && <ArrowRight size={14} aria-hidden="true" />}
                </Button>
              </form>
            )}
          </InView>

        </div>
      </div>
    </section>
  );
}
