/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/category/:path*",
          destination: "/section",
        },
      ],
    };
  },
}

module.exports = nextConfig
