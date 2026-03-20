interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-3 ${
            light ? 'text-cream/50' : 'text-accent'
          }`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-xl ${
            light ? 'text-cream/60' : 'text-warm-gray'
          } ${centered ? 'mx-auto' : ''}`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
