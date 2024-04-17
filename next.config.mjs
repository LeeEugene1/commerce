/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'imancosmetics.com',
      },
      {
        hostname: 'd3t32hsnjxo7q6.cloudfront.net',
      },
    ],
  },
}

export default nextConfig
