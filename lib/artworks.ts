import artworksData from '@/data/artworks.json';
import type { Artwork, ArtworkCategory, CategoryMeta } from './types';

const artworks = artworksData as Artwork[];

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'paintings',
    label: 'Paintings',
    description: 'Original paintings in acrylic and mixed media.',
  },
  {
    slug: 'figure-drawings',
    label: 'Figure Drawings',
    description: 'Life drawing studies exploring form, light, and gesture.',
  },
  {
    slug: 'photography',
    label: 'Photography',
    description: 'Digital photography capturing light and moment.',
  },
  {
    slug: 'graphic-design',
    label: 'Graphic Design',
    description: 'Brand identity and typographic design work.',
  },
];

export function getAllArtworks(): Artwork[] {
  return artworks;
}

export function getFeaturedArtworks(limit = 6): Artwork[] {
  return artworks.filter((a) => a.featured).slice(0, limit);
}

export function getArtworksByCategory(category: ArtworkCategory): Artwork[] {
  return artworks.filter((a) => a.category === category);
}

export function getArtworkBySlug(
  category: ArtworkCategory,
  slug: string
): Artwork | undefined {
  return artworks.find((a) => a.category === category && a.slug === slug);
}

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
