/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.dw.com", 
      "zmartbuild-bucket.s3.amazonaws.com", 
      "zb-bucket-models.s3.amazonaws.com"
    ],
  },
}

module.exports = nextConfig
