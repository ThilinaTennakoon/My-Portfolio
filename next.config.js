/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    experimental: {
      appDir: true, // Ensure this is a valid experimental feature you need
    },
   

}

module.exports = nextConfig
