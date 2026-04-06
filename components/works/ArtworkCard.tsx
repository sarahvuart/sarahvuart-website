'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Artwork } from '@/lib/types';
import ArtworkImage from '@/components/ui/ArtworkImage';

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  variant?: 'default' | 'wide';
}

export default function ArtworkCard({
  artwork,
  index = 0,
  variant = 'default',
}: ArtworkCardProps) {
  const [hovered, setHovered] = useState(false);

  const aspectClass = '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
    >
      <Link
        href={`/works/${artwork.category}/${artwork.slug}`}
        className="block group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative overflow-hidden mb-4">
  <motion.div
    animate={{ scale: hovered ? 1.04 : 1 }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <img
      src={artwork.thumbnail}
      alt={artwork.title}
      className="w-full h-auto block"
      loading={index < 4 ? 'eager' : 'lazy'}
    />
  </motion.div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-charcoal/50 flex items-end p-5"
          >
            <motion.span
              animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-xs tracking-[0.25em] uppercase text-cream border-b border-cream/50 pb-0.5"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              View Work
            </motion.span>
          </motion.div>
        </div>

        {/* Card info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="text-base font-bold text-charcoal group-hover:text-accent transition-colors duration-300 uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {artwork.title}
            </h3>
            {artwork.medium && (
              <p
                className="text-xs text-warm-gray mt-1"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {artwork.medium}
              </p>
            )}
          </div>
          <span
            className="text-xs text-warm-gray flex-shrink-0 mt-0.5"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {artwork.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
