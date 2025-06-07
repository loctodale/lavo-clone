import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [new URL('https://img.icons8.com/**')],
        domains: ['img.icons8.com'],
    },
};

export default nextConfig;
