'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Background layer moves at 30% of scroll speed (slow parallax)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Midground shape
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  // Text moves slightly faster, creating depth
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  // Fade text out as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  // Scale bg in slightly on load
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background gradient layer */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Rich layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-[#e8ddd0]" />

        {/* Decorative organic shapes */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-accent/6 blur-3xl" />
      </motion.div>

      {/* Midground decorative element */}
      <motion.div
        style={{ y: midY }}
        className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Large italic display letter as visual element */}
          <span
            className="text-[32rem] font-bold leading-none text-charcoal/[0.03] select-none"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            S
          </span>
        </div>
        {/* Floating accent line */}
        <div className="absolute top-1/3 right-24 w-px h-48 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        <div className="absolute top-1/2 right-48 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </motion.div>

      {/* Foreground text content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xs tracking-[0.4em] uppercase text-accent mb-6"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Art &amp; Design Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-charcoal leading-[0.9] tracking-tight mb-8"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Sarah
          <br />
          <em className="not-italic text-charcoal/60">Vu.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-warm-gray max-w-sm leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          A multidisciplinary artist exploring form, light, and story through
          painting, drawing, photography, and design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/works/paintings" size="lg">
            View Work
          </Button>
          <Button href="/about" variant="outline" size="lg">
            About Me
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span
          className="text-xs tracking-[0.3em] uppercase text-warm-gray"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </div>
  );
}
