/** @type {import('next').NextConfig} */
const path = require('path'); // 1. path 선언
const apiHost=process.env.NEXT_PUBLIC_SERVER_HOST
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiHost}/:path*`,
      },
    ];
  },
  images: {
    domains: ['cdn.dev-flan.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  },
};

module.exports = nextConfig;


