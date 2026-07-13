import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/RandomDrink',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
