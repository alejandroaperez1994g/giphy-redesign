/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media4.giphy.com',
      'media1.giphy.com',
      'media3.giphy.com',
      'media0.giphy.com',
      'media2.giphy.com',
      'media5.giphy.com',
      'media.giphy.com',
    ],
  },
};

module.exports = nextConfig;
