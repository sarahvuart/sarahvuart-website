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
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
  {artworks.map((artwork, i) => (
    <div key={artwork.id} className="break-inside-avoid mb-6">
      <ArtworkCard artwork={artwork} index={i} />
    </div>
  ))}
</div>
  );
}
