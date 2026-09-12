import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['100.77.219.63', '100.77.219.63:3005', 'localhost:3005'],
  images: {
    qualities: [75, 95],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
