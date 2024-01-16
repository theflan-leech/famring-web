/** @type {import('next').NextConfig} */
const path = require('path'); // 1. path 선언
const apiHost=process.env.SERVER_HOST
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    console.log(apiHost);
    return [
      {
        source: '/api/:path*',
        destination: `${apiHost}/:path*`,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  },
};

module.exports = nextConfig;


