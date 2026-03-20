import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    'bg-charcoal text-cream hover:bg-charcoal-light border border-charcoal hover:border-charcoal-light',
  outline:
    'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream',
  ghost:
    'bg-transparent text-charcoal hover:text-accent border border-transparent',
};

const sizes = {
  sm: 'px-5 py-2 text-xs tracking-[0.2em]',
  md: 'px-8 py-3 text-xs tracking-[0.2em]',
  lg: 'px-10 py-4 text-sm tracking-[0.2em]',
};

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center uppercase transition-all duration-300 font-medium ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      {children}
    </button>
  );
}
