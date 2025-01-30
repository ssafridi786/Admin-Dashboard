import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove deprecated turbo option
  
  // Output configuration for production builds
  output: "standalone",
  
  // Experimental features
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-*",
      "lucide-react",
      "recharts"
    ],
  },
};

export default nextConfig;
