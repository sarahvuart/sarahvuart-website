'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Artwork } from '@/lib/types';
import ArtworkImage from '@/components/ui/ArtworkImage';

interface HorizontalGalleryProps {
  artworks: Artwork[];
  title?: string;
  viewAllHref?: string;
}

interface GalleryCardProps {
  artwork: Artwork;
  index: number;
}

function GalleryCard({ artwork, index }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/works/${artwork.category}/${artwork.slug}`}
      className="relative flex-shrink-0 overflow-hidden group block h-80"
      style={{ width: 'max-content' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-full"
      >
        <img
          src={artwork.thumbnail}
          alt={artwork.title}
          className="h-full w-auto object-contain"
          loading={index < 3 ? 'eager' : 'lazy'}
        />
      </motion.div>

      {/* Overlay - same as before */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 bg-charcoal/75 flex flex-col justify-end p-6"
      >
        <motion.p
          animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-xs tracking-[0.25em] uppercase text-accent mb-2"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {artwork.medium || artwork.category.replace('-', ' ')}
        </motion.p>
        <motion.h3
          animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="text-xl font-bold text-cream uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          {artwork.title}
        </motion.h3>
        <motion.span
          animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="mt-4 text-xs tracking-[0.3em] uppercase text-cream/70 border-b border-cream/30 pb-0.5 self-start"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Learn More
        </motion.span>
      </motion.div>
    </Link>
  );
}

export default function HorizontalGallery({
  artworks,
  title = 'Featured Work',
  viewAllHref = '/works/paintings',
}: HorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  // Duplicate array for seamless infinite loop
  const doubled = [...artworks, ...artworks];

  return (
    <section className="py-20 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 flex items-end justify-between">
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase text-accent mb-3"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Selected Works
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title}
          </h2>
        </div>
        <Link
          href={viewAllHref}
          className="hidden sm:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors duration-200 border-b border-current pb-0.5"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          View All Work
        </Link>
      </div>

      {/* Infinite marquee container */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (trackRef.current) {
            trackRef.current.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={() => {
          if (trackRef.current) {
            trackRef.current.style.animationPlayState = 'running';
          }
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 w-max"
          style={{
            animation: 'marquee 40s linear infinite',
          }}
        >
          {doubled.map((artwork, i) => (
            <GalleryCard
              key={`${artwork.id}-${i}`}
              artwork={artwork}
              index={i}
            />
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
      </div>

      {/* Mobile view all link */}
      <div className="sm:hidden max-w-7xl mx-auto px-6 mt-8">
        <Link
          href={viewAllHref}
          className="text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          View All Work
        </Link>
      </div>
    </section>
  );
}
