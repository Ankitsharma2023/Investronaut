const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // NOTE: `output: "export"` was removed so the app runs as a full Next.js
  // app on Vercel. This enables server-side API routes (e.g. /api/find_investors)
  // where the OpenAI key stays private. A static export has no server and
  // cannot hold secrets.
};

module.exports = withMDX(nextConfig);