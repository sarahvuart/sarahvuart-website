import WorksTabNav from '@/components/works/WorksTabNav';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page header with parallax background */}
      <div className="relative pt-32 pb-12 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="text-xs tracking-[0.4em] uppercase text-accent mb-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Portfolio
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Works
          </h1>
        </div>
      </div>

      {/* Sticky category tabs */}
      <WorksTabNav />

      {/* Page content */}
      {children}
    </>
  );
}
