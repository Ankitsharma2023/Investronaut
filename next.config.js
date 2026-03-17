const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",

  // ✅ correct
  assetPrefix: "",
  trailingSlash: true,
};

module.exports = withMDX(nextConfig);