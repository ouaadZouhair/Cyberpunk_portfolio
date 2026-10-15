import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";


const nextConfig = (phase: string): NextConfig => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Keep development output separate so `next build` and restarts cannot
    // remove manifests while the development server is using them.
    distDir: isDevelopment ? ".next-dev" : ".next",
    reactStrictMode: true,
    // Keep file tracing scoped to this Next.js project when the parent
    // workspace contains another package-lock.json.
    outputFileTracingRoot: process.cwd(),
    turbopack: { root: process.cwd() },
    experimental: { cpus: 1 },
  };
};

export default nextConfig;
