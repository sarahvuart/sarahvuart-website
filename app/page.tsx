import { getFeaturedArtworks, CATEGORIES } from '@/lib/artworks';
import ParallaxHero from '@/components/home/ParallaxHero';
import HorizontalGallery from '@/components/home/HorizontalGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  const featured = getFeaturedArtworks(8);

  return (
    <>
      {/* Hero with parallax */}
      <ParallaxHero />

      {/* Infinite horizontal gallery */}
      <HorizontalGallery artworks={featured} title="Featured Work" />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-cream-dark" />
      </div>

      {/* About section with parallax feel */}
      <AboutSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-cream-dark" />
      </div>

      {/* Work categories grid */}
      <CategoriesSection />

      {/* CTA strip */}
      <CTASection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="About"
              title="Hello!"
              description="I'm Sarah Vu, a multidisciplinary artist and designer. My practice spans oil painting, life drawing, film photography, and graphic design — each discipline feeding the others with new ways of seeing."
            />
            <p
              className="mt-4 text-base leading-relaxed text-warm-gray max-w-lg"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              I believe deeply in the craft of careful observation — whether
              standing before a model, mixing paint on a palette, loading a
              camera with film, or designing a brand from its first mark.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                More About Me
              </Button>
            </div>
          </div>

          {/* Decorative visual block */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-charcoal/10" />
              <span
                className="absolute bottom-8 left-8 right-8 text-7xl font-bold text-charcoal/10 leading-none select-none"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Artist.
                <br />
                Designer.
                <br />
                Observer.
              </span>
            </div>
            {/* Offset accent block */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = CATEGORIES;

  const categoryColors = [
    'from-[#e8ddd0] to-[#d4c5b0]',
    'from-[#d8dce0] to-[#c0c6cc]',
    'from-[#dde0d8] to-[#c4cab8]',
    'from-[#e0dcd8] to-[#ccc4bc]',
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <SectionHeading eyebrow="Portfolio" title="The Work" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/works/${cat.slug}`}
              className="group relative overflow-hidden aspect-[16/9] block"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${categoryColors[i]} transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span
                  className="text-xs tracking-[0.3em] uppercase text-charcoal/50 mb-2 group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {cat.description}
                </span>
                <h3
                  className="text-3xl font-bold text-charcoal uppercase tracking-tight group-hover:text-charcoal transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {cat.label}
                </h3>
                <span
                  className="mt-3 text-xs tracking-[0.25em] uppercase text-charcoal/40 border-b border-charcoal/20 pb-0.5 self-start translate-x-0 group-hover:text-charcoal group-hover:border-charcoal transition-all duration-300"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-accent mb-4"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Let&apos;s Connect
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          className="text-base text-cream/60 max-w-md mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Whether you&apos;re looking for original artwork, illustration, or
          design work — I&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href="/works/paintings" variant="outline" size="lg">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
