import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true, // Prevents janky scroll resets on route changes
  },
};

export default nextConfig;
