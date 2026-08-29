import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      'marked',
      'motion',
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/ui-ux/:city',
        destination: '/services/ui-ux-design/:city',
        permanent: true,
      },
      {
        source: '/services/web-dev/:city',
        destination: '/services/web-development/:city',
        permanent: true,
      },
      {
        source: '/services/seo/:city',
        destination: '/services/seo-and-organic-growth/:city',
        permanent: true,
      },
      {
        source: '/services/seo-services/:city',
        destination: '/services/seo-and-organic-growth/:city',
        permanent: true,
      },
      {
        source: '/services/seo/performance-marketing',
        destination: '/services/seo-and-organic-growth/performance-marketing',
        permanent: true,
      },
      {
        source: '/services/seo-services/performance-marketing',
        destination: '/services/seo-and-organic-growth/performance-marketing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
