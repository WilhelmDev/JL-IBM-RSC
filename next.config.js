/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'jl.api.merakioffice.com',
        port: '',
        pathname: '/storage/imagenes/**',
      }
    ]
  }
};

module.exports = nextConfig;
