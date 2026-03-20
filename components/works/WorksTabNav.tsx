'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/artworks';

export default function WorksTabNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[72px] z-40 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex gap-0 overflow-x-auto hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const href = `/works/${cat.slug}`;
            const isActive = pathname === href || pathname.startsWith(href + '/');

            return (
              <Link
                key={cat.slug}
                href={href}
                className="relative flex-shrink-0 px-6 py-5 group"
              >
                <span
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-charcoal'
                      : 'text-warm-gray hover:text-charcoal'
                  }`}
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {cat.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="works-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
