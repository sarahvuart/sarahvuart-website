import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getArtworkBySlug,
  getArtworksByCategory,
  getCategoryMeta,
} from '@/lib/artworks';
import type { ArtworkCategory, ArtworkImage } from '@/lib/types';
import ArtworkCard from '@/components/works/ArtworkCard';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const { getAllArtworks } = await import('@/lib/artworks');
  return getAllArtworks().map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

function normalizeImages(images: string[] | ArtworkImage[]): ArtworkImage[] {
  return images.map((img) =>
    typeof img === 'string' ? { src: img } : img
  );
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const artwork = getArtworkBySlug(category as ArtworkCategory, slug);

  if (!artwork) notFound();

  const categoryMeta = getCategoryMeta(category);
  const related = getArtworksByCategory(category as ArtworkCategory)
    .filter((a) => a.id !== artwork.id)
    .slice(0, 3);

  const isGraphicDesign = category === 'graphic-design';
  const isInstallation = category === 'installations';
  const images = normalizeImages(artwork.images);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 max-w-7xl mx-auto px-6 lg:px-12">
        <nav
          className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-warm-gray"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          <Link href="/works" className="hover:text-accent transition-colors">
            Works
          </Link>
          <span>/</span>
          <Link
            href={`/works/${category}`}
            className="hover:text-accent transition-colors"
          >
            {categoryMeta?.label ?? category}
          </Link>
          <span>/</span>
          <span className="text-charcoal">{artwork.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">

       {isGraphicDesign ? (
  <>
    <div className="columns-1 sm:columns-2 gap-4 mb-12">
      ...
              {images.map((img, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <img
                    src={img.src}
                    alt={img.caption ?? artwork.title}
                    className="w-full h-auto block"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  {img.caption && (
                    <p
                      className="text-xs text-warm-gray mt-2 tracking-[0.1em]"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{categoryMeta?.label}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>{artwork.title}</h1>
              <p className="text-base text-warm-gray leading-relaxed mb-10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.description}</p>
              <dl className="space-y-4 border-t border-cream-dark pt-8">
                <div className="flex gap-8">
                  <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Year</dt>
                  <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.year}</dd>
                </div>
                {artwork.medium && (
                  <div className="flex gap-8">
                    <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Medium</dt>
                    <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.medium}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-10">
                <Link href={`/works/${category}`} className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  ← Back to {categoryMeta?.label}
                </Link>
              </div>
            </div>
          </>

        ) : isInstallation ? (
          /* ── Installations: single column images with captions, info below ── */
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-10 mb-16">
              {images.map((img, i) => (
                <figure key={i} className="w-full">
                  <img
                    src={img.src}
                    alt={img.caption ?? artwork.title}
                    className="w-full h-auto block"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  {img.caption && (
                    <figcaption
                      className="mt-3 text-xs text-warm-gray/70 tracking-wide"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
            <div className="border-t border-cream-dark pt-10">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{categoryMeta?.label}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>{artwork.title}</h1>
              <p className="text-base text-warm-gray leading-relaxed mb-10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.description}</p>
              <dl className="space-y-4 border-t border-cream-dark pt-8">
                <div className="flex gap-8">
                  <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Year</dt>
                  <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.year}</dd>
                </div>
                {artwork.medium && (
                  <div className="flex gap-8">
                    <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Medium</dt>
                    <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.medium}</dd>
                  </div>
                )}
                {artwork.dimensions && (
                  <div className="flex gap-8">
                    <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Dimensions</dt>
                    <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.dimensions}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-10">
                <Link href={`/works/${category}`} className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  ← Back to {categoryMeta?.label}
                </Link>
              </div>
            </div>
          </div>

        ) : (
          /* ── All other categories: single image + info side by side ── */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="overflow-hidden bg-cream-dark">
              <img src={images[0]?.src ?? ''} alt={artwork.title} className="w-full h-auto block" loading="eager" />
            </div>
            <div className="lg:pt-8 lg:sticky lg:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{categoryMeta?.label}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>{artwork.title}</h1>
              <p className="text-base text-warm-gray leading-relaxed mb-10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.description}</p>
              <dl className="space-y-4 border-t border-cream-dark pt-8">
                <div className="flex gap-8">
                  <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Year</dt>
                  <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.year}</dd>
                </div>
                {artwork.medium && (
                  <div className="flex gap-8">
                    <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Medium</dt>
                    <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.medium}</dd>
                  </div>
                )}
                {artwork.dimensions && (
                  <div className="flex gap-8">
                    <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Dimensions</dt>
                    <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{artwork.dimensions}</dd>
                  </div>
                )}
                <div className="flex gap-8">
                  <dt className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 w-28 flex-shrink-0" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Category</dt>
                  <dd className="text-sm text-charcoal" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    <Link href={`/works/${category}`} className="hover:text-accent transition-colors">{categoryMeta?.label}</Link>
                  </dd>
                </div>
              </dl>
              <div className="mt-10">
                <Link href={`/works/${category}`} className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  ← Back to {categoryMeta?.label}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Related works */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'var(--font-playfair), serif' }}>More {categoryMeta?.label}</h2>
              <Link href={`/works/${category}`} className="hidden sm:flex text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-accent transition-colors border-b border-current pb-0.5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <ArtworkCard key={a.id} artwork={a} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
