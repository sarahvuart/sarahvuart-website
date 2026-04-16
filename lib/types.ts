export type ArtworkCategory =
  | 'paintings'
  | 'figure-drawings'
  | 'photography'
  | 'graphic-design'
  | 'installations';

export interface ArtworkImage {
  src: string;
  caption?: string;
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  description: string;
  year: number;
  medium?: string;
  dimensions?: string;
  link?: string;
  images: string[] | ArtworkImage[];
  thumbnail: string;
  featured: boolean;
}

export interface CategoryMeta {
  slug: ArtworkCategory;
  label: string;
  description: string;
}
