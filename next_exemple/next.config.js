/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ww6.mangakakalot.tv"
            },
            {
                protocol: "https",
                hostname: "ww8.mangakakalot.tv"
            }
        ]
    }
}

module.exports = nextConfig
