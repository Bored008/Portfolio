import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['sulfate-breeder-vacation.ngrok-free.dev'],
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000, // 30 days
  },
};

export default nextConfig;
