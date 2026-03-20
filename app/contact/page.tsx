'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const subjects = [
  'Commission Inquiry',
  'Print Purchase',
  'Design Project',
  'Exhibition / Collaboration',
  'General',
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate form submission — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setFormState('sent');
  };

  return (
    <>
      {/* Parallax hero */}
      <div ref={heroRef} className="relative h-[50vh] min-h-80 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2018] to-charcoal" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-accent blur-3xl" />
          </div>
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-12 max-w-7xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-accent mb-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Let&apos;s Talk
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get in Touch
          </motion.h1>
        </motion.div>
      </div>

      {/* Contact section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <p
                className="text-base leading-relaxed text-warm-gray mb-10"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Feel free to leave a message via the form, or reach me directly
                at{' '}
                <a
                  href="mailto:hello@sarahvuart.com"
                  className="text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
                >
                  hello@sarahvuart.com
                </a>
              </p>

              <div
                className="space-y-6 text-sm text-warm-gray"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <p>
                  I take on a limited number of commissions each year to ensure
                  each project receives proper attention.
                </p>
                <p>
                  Typical response time is 2–3 business days.
                </p>
              </div>

              {/* Social */}
              <div className="mt-12">
                <p
                  className="text-xs tracking-[0.3em] uppercase text-accent mb-4"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Follow
                </p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'Behance', href: 'https://behance.net' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.15em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {formState === 'sent' ? (
                <div className="text-center py-20">
                  <p
                    className="text-4xl font-bold text-charcoal mb-4"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    Thank you!
                  </p>
                  <p
                    className="text-warm-gray"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Your message has been received. I&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-2"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream-dark py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-2"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream-dark py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-2"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      What&apos;s This Regarding? *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-cream-dark py-3 text-sm text-charcoal focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-2"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-cream-dark py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full sm:w-auto px-10 py-4 bg-charcoal text-cream text-xs tracking-[0.2em] uppercase hover:bg-charcoal-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
