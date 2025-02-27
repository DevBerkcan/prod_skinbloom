/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: false,
    };

    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    config.resolve.fallback.punycode = false;

    return config;
  },
};

module.exports = nextConfig;
