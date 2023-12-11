/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
