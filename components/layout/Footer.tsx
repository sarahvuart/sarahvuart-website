import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/works/paintings', label: 'Paintings' },
  { href: '/works/figure-drawings', label: 'Figure Drawings' },
  { href: '/works/photography', label: 'Photography' },
  { href: '/works/graphic-design', label: 'Graphic Design' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
  { href: 'https://behance.net', label: 'Behance', icon: 'Be' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'In' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-cream mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Sarah Vu
            </h3>
            <p
              className="text-xs tracking-[0.25em] uppercase text-cream/40 mb-4"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Art &amp; Design
            </p>
            <p className="text-sm leading-relaxed text-cream/60">
              A multidisciplinary artist working across painting, drawing,
              photography, and design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-cream/20 flex items-center justify-center text-xs font-medium text-cream/60 hover:border-accent hover:text-accent transition-all duration-200"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@sarahvuart.com"
              className="text-sm text-cream/60 hover:text-accent transition-colors duration-200"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              hello@sarahvuart.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p
            className="text-xs text-cream/30"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            &copy; {new Date().getFullYear()} Sarah Vu. All rights reserved.
          </p>
          <p
            className="text-xs text-cream/30"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
