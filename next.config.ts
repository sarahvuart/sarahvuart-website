import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Add external domains here if needed in future
    // domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Strict mode for better React practices
  reactStrictMode: true,
};

export default nextConfig;
