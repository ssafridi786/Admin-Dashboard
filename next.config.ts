import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // Enable Turbo Mode for faster builds (Next.js 13+)
    turbo: true,

    // Reduce serverless function size
    output: "standalone",
  
    // Optional: Improve build performance
    experimental: {
      optimizePackageImports: [
        "@radix-ui/react-*", // Optimize Radix UI imports
        "lucide-react",
        "recharts"
      ],
    },
};

export default nextConfig;
