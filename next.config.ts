import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
