import { getArtworksByCategory, getCategoryMeta } from '@/lib/artworks';
import ArtworkGrid from '@/components/works/ArtworkGrid';

export const metadata = {
  title: 'Installations | Sarah Vu',
  description: 'Site-specific and spatial installation work.',
};

export default function InstallationsPage() {
  const artworks = getArtworksByCategory('installations');
  const meta = getCategoryMeta('installations');

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="mb-12">
        <p
          className="text-sm text-warm-gray leading-relaxed max-w-lg"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {meta?.description}
        </p>
        <p
          className="text-xs tracking-[0.2em] uppercase text-warm-gray/60 mt-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {artworks.length} work{artworks.length !== 1 ? 's' : ''}
        </p>
      </div>
      <ArtworkGrid artworks={artworks} />
    </div>
  );
}
