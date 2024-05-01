/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themesfamily.com",
      },
    ],
  },
};

export default nextConfig;
