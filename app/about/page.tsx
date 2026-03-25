'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const experience = [
  {
    role: 'Freelance Artist & Designer',
    years: '2022 – Present',
    note: 'Independent practice in painting, illustration, and brand design.',
  },
  {
    role: 'Design Studio Assistant',
    years: '2020 – 2022',
    note: 'Brand identity and print projects for regional clients.',
  },
  {
    role: 'BFA, Studio Art',
    years: '2016 – 2020',
    note: 'Focus in painting and drawing with a minor in graphic design.',
  },
];

const skills = [
  'Acrylic Painting',
  'Acrylic',
  'Charcoal & Pastel',
  'Figure Drawing',
  'Film Photography',
  'Digital Photography',
  'Brand Identity',
  'Editorial Layout',
  'Typography',
  'Adobe Suite',
  'Procreate',
  'Figma',
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Parallax hero */}
      <div ref={heroRef} className="relative h-[60vh] min-h-96 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-[#1a1a1a]" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent blur-3xl translate-x-1/3 -translate-y-1/3" />
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-12 max-w-7xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-accent mb-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Hello!
          </motion.h1>
        </motion.div>
      </div>

      {/* Main content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-xl md:text-2xl leading-relaxed text-charcoal font-display mb-8"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                I am Sarah Vu, a multidisciplinary artist based in Orlando, Florida. My
                work spans acrylic painting, life drawing, street photography, and
                graphic design.
              </p>
              <div
                className="space-y-5 text-base leading-relaxed text-warm-gray"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <p>
                  Growing up surrounded by art books, I developed a passion for
                  looking carefully and drawing what I see. That habit of careful
                  observation carries through everything I make — whether I&apos;m
                  standing in a life drawing session, mixing paint in the studio,
                  taking photos on a walk, or designing a visual identity from scratch.
                </p>
                <p>
                  My practice is defined by a commitment to craft and a genuine
                  love for the materials I work with. I find it endlessly
                  interesting how different disciplines teach you to see
                  differently, and that cross-pollination makes the work richer.
                </p>
                <p>
                  When I&apos;m not in the studio, I can usually be found at a museum,
                  at a cafe, sketching, or at home crafting.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/contact" size="md">
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            {/* Side panel */}
            <div className="space-y-12">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2
                  className="text-xs tracking-[0.3em] uppercase text-accent mb-6"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Skills &amp; Disciplines
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 border border-cream-dark text-sm text-charcoal-light hover:border-accent hover:text-accent transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-xs tracking-[0.3em] uppercase text-accent mb-6"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Experience &amp; Education
                </h2>
                <div className="space-y-8">
                  {experience.map((item) => (
                    <div
                      key={item.role}
                      className="border-l-2 border-cream-dark pl-5 group hover:border-accent transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3
                          className="text-base font-bold text-charcoal"
                          style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                          {item.role}
                        </h3>
                        <span
                          className="text-xs text-warm-gray flex-shrink-0 mt-1"
                          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                        >
                          {item.years}
                        </span>
                      </div>
                      <p
                        className="text-sm text-warm-gray"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      >
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
