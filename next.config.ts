import fs from "fs";
import path from "path";
import type { NextConfig } from "next";

// GitHub Pages serves a project repo (not a custom domain) from
// https://<user>.github.io/<repo>/, so every root-relative path needs that
// prefix baked in at build time. The deploy workflow sets this env var;
// local builds (and a future custom-domain deploy) leave it unset and get
// plain root paths.
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

// This package carries its own package-lock.json so its standalone GitHub
// repo (norah-website) can run `npm ci` in CI. Locally it also lives nested
// inside the Norah monorepo, which hoists node_modules to the monorepo
// root — two lockfiles in the same tree leave Turbopack unable to guess the
// workspace root. Point it at the monorepo root only when that root is
// actually present (local dev); in the standalone repo (CI) there's no
// ambiguity, so leave root detection to Next's default.
const monorepoRoot = path.join(__dirname, "..", "..");
const isInsideMonorepo = fs.existsSync(path.join(monorepoRoot, "package-lock.json"));

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  ...(isInsideMonorepo ? { turbopack: { root: monorepoRoot } } : {}),
};

export default nextConfig;
