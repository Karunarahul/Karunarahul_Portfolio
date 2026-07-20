export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--primary)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="container-lg py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

          {/* Identity */}
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: '#F5F4F2', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Karuna Rahul Mamidi
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: 'rgba(245,244,242,0.4)', fontFamily: 'var(--font-body)' }}
            >
              ECE Engineer · Founder of SafeVitals XR
            </p>
          </div>

          {/* Links + copyright */}
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/karunarahul' },
              { label: 'GitHub',   href: 'https://github.com/Karunarahul' },
              { label: 'Resume',   href: '/assets/karuna-rahul-profile.pdf', download: true },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noopener noreferrer'}
                download={link.download || undefined}
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: 'rgba(245,244,242,0.5)', fontFamily: 'var(--font-body)', letterSpacing: '-0.01em' }}
              >
                {link.label}
              </a>
            ))}
            <span
              className="text-xs"
              style={{ color: 'rgba(245,244,242,0.25)', fontFamily: 'var(--font-body)' }}
            >
              © {year}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
