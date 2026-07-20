import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Track active section
      const ids = ['about', 'projects', 'experience', 'contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(176,174,171,0.92)'
            : 'rgba(176,174,171,0.0)',
          backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(138,135,131,0.18)' : '1px solid transparent',
        }}
      >
        <div className="container-lg">
          <nav
            className="flex items-center justify-between h-14"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Name / Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-display font-bold text-sm tracking-tight transition-opacity hover:opacity-70"
              style={{ color: 'var(--primary)', letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}
              aria-label="Karuna Rahul — home"
            >
              Karuna Rahul
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1" role="menubar">
              {links.map(link => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={link.href} role="none">
                    <a
                      href={link.href}
                      role="menuitem"
                      onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                      className="relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: isActive ? 'var(--primary)' : 'var(--muted)',
                        background: isActive ? 'rgba(10,10,10,0.06)' : 'transparent',
                        letterSpacing: '-0.01em',
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--secondary)'; }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--muted)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                href="mailto:karunarahul8885@gmail.com"
                style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                id="nav-cta"
              >
                Get in touch
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{ background: menuOpen ? 'rgba(10,10,10,0.06)' : 'transparent' }}
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-5 bg-primary rounded-full"
                style={{ background: 'var(--primary)' }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="block h-px w-5 rounded-full"
                style={{ background: 'var(--primary)' }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-5 rounded-full"
                style={{ background: 'var(--primary)' }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(176,174,171,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(138,135,131,0.2)',
            }}
          >
            <nav className="container-lg py-4 space-y-0.5">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); setMenuOpen(false); }}
                  className="block py-3 px-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color: 'var(--secondary)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'rgba(10,10,10,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  href="mailto:karunarahul8885@gmail.com"
                  className="w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
