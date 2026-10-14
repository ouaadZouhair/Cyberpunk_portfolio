import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep file tracing scoped to this Next.js project when the parent
  // workspace contains another package-lock.json.
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  experimental: { cpus: 1 },
};
export default nextConfig;
