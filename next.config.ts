import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo>/. The deploy workflow passes that prefix in;
// it is empty for local builds, user sites (<user>.github.io) and custom domains.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into `out/`.
  output: "export",
  trailingSlash: true,
  basePath,
  turbopack: {
    // A stray lockfile in the home directory would otherwise be picked as the workspace root.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
