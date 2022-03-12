/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
