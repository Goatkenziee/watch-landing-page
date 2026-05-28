/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Replace with actual image domains if needed
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
