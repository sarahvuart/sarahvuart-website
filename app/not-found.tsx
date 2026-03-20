import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p
        className="text-xs tracking-[0.4em] uppercase text-accent mb-4"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        404
      </p>
      <h1
        className="text-6xl md:text-7xl font-bold text-charcoal mb-6"
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        Not Found
      </h1>
      <p
        className="text-warm-gray mb-10 max-w-xs"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" variant="outline">
        Back to Home
      </Button>
    </div>
  );
}
