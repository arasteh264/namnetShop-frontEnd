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
      'logoyab.com',
      "sunstarjuice.ir",
      "behamadco.com",
      "www.golshanjuice.ir",
      "ranimania.com",
      "dkstatics-public.digikala.com"
    ],
  },
};

module.exports = nextConfig;