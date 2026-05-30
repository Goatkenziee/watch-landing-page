/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Ensure Next.js recognizes page files
  async redirects() {
    return [
      {
        source: '/_not-found',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;