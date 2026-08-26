import type { NextConfig } from "next";

// GitHub Actions sets GITHUB_ACTIONS=true during CI builds. Locally
// (npm run dev / npm run build) this stays unset so paths work at "/".
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
