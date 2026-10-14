import type { NextConfig } from "next";

// GitHub Pages serves a project repo (not a custom domain) from
// https://<user>.github.io/<repo>/, so every root-relative path needs that
// prefix baked in at build time. The deploy workflow sets this env var;
// local builds (and a future custom-domain deploy) leave it unset and get
// plain root paths.
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
};

export default nextConfig;
