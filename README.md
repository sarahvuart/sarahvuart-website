# Sarah Vu — Art Portfolio

A Next.js art portfolio website featuring parallax scrolling, categorized works, and infinite horizontal gallery. Built for Vercel deployment.

## Tech Stack

- **Next.js 16** (App Router, SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — parallax, scroll animations, page transitions
- **next/image** — Vercel-optimized images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Home (parallax hero + gallery)
  about/                # About page
  contact/              # Contact page
  works/
    layout.tsx          # Works layout with sticky sub-tabs
    paintings/          # Paintings category
    figure-drawings/    # Figure drawings category
    photography/        # Photography category
    graphic-design/     # Graphic design category
    [category]/[slug]/  # Individual artwork detail

components/
  layout/               # Navigation, Footer, PageTransition
  home/                 # ParallaxHero, HorizontalGallery
  works/                # WorksTabNav, ArtworkCard, ArtworkGrid
  ui/                   # Button, SectionHeading, ArtworkImage

data/
  artworks.json         # All artwork metadata

lib/
  types.ts              # TypeScript interfaces
  artworks.ts           # Data helper functions

public/images/          # Artwork images (organized by category)
  paintings/
  figure-drawings/
  photography/
  graphic-design/
```

## Adding Artwork

1. Add your image to `public/images/[category]/your-image.jpg`
2. Add an entry to `data/artworks.json`:

```json
{
  "id": "unique-id",
  "slug": "url-friendly-slug",
  "title": "Artwork Title",
  "category": "paintings",
  "description": "Description of the work.",
  "year": 2024,
  "medium": "Oil on canvas",
  "dimensions": "24\" × 36\"",
  "images": ["/images/paintings/your-image.jpg"],
  "thumbnail": "/images/paintings/your-image.jpg",
  "featured": true
}
```

Categories: `paintings` | `figure-drawings` | `photography` | `graphic-design`

## Deploy to Vercel

```bash
# Push to GitHub then connect repo on vercel.com
# Or use Vercel CLI:
npx vercel
```

Images are stored in `/public` and served directly by Vercel's CDN with automatic optimization via `next/image`.
