'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ArtworkImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  placeholderText?: string;
  placeholderIndex?: number;
}

export default function ArtworkImage({
  src,
  alt,
  fill = true,
  sizes,
  priority = false,
  className = 'object-cover',
  placeholderText,
  placeholderIndex = 0,
}: ArtworkImageProps) {
  const [error, setError] = useState(false);

  const bgColor = `hsl(${(placeholderIndex * 47) % 360 + 15}, 18%, ${70 - (placeholderIndex % 4) * 5}%)`;

  return (
    <>
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={className}
          onError={() => setError(true)}
        />
      )}
      {/* Always render placeholder behind, visible when image errors or loading */}
      <div
        className="absolute inset-0 -z-10 flex items-center justify-center"
        style={{ background: bgColor }}
      >
        {placeholderText && (
          <span
            className="text-[10rem] font-bold text-white/20 select-none"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {placeholderText}
          </span>
        )}
      </div>
    </>
  );
}
