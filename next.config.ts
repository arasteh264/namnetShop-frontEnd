import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig : NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'mahyarcake.com',
      'siranggroup.com',
      'dorna-co.com',
      'shirinasal.com',
      'noosheen.ir',
      'chelci.co',
      'donyaieshirin.com',
      'logoyab.com'
    ],
  },
};

module.exports = nextConfig;