import type { Artwork } from '@/lib/types';
import ArtworkCard from './ArtworkCard';

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p
          className="text-warm-gray text-sm tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          No works yet — check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {artworks.map((artwork, i) => (
        <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
      ))}
    </div>
  );
}
