import { getArtworkBySlug, getArtworksByCategory } from '@/lib/artworks';
import type { ArtworkImage } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const artworks = getArtworksByCategory('installations');
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const artwork = getArtworkBySlug('installations', params.slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title} | Sarah Vu`,
    description: artwork.description,
  };
}

export default function InstallationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const artwork = getArtworkBySlug('installations', params.slug);
  if (!artwork) notFound();

  const images = artwork.images as ArtworkImage[];

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16">

      {/* Back link */}
      <Link
        href="/works/installations"
        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-200 mb-12"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        ← Installations
      </Link>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-charcoal mb-2"
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        {artwork.title}
      </h2>
      <p
        className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 mb-12"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {artwork.medium} &mdash; {artwork.year}
      </p>

      {/* Single-column images with captions */}
      <div className="flex flex-col gap-10 mb-16">
        {images.map((img, i) => (
          <figure key={i} className="w-full">
            <img
              src={img.src}
              alt={img.caption || artwork.title}
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

      {/* Description at the bottom */}
      <div className="border-t border-cream-dark pt-10">
        <p
          className="text-sm text-warm-gray leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {artwork.description}
        </p>
        {artwork.dimensions && (
          <p
            className="text-xs tracking-[0.2em] uppercase text-warm-gray/50 mt-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {artwork.dimensions}
          </p>
        )}
      </div>

    </div>
  );
}
