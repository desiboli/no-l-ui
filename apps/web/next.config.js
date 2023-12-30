/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
}

module.exports = withContentlayer({ ...nextConfig })
