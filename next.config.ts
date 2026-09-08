import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      { source: '/work', destination: '/case-studies', permanent: true },
      { source: '/work/:slug', destination: '/case-studies/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
