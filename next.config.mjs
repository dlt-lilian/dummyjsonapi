/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
            // Wildcard path matching
            {
                source: '/blog/:slug',
                destination: '/news/:slug',
                permanent: true,
            },
        ]
    },
}