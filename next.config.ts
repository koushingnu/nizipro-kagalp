import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/audition",
  assetPrefix: "/audition",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
