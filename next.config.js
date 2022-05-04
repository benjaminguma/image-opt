/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com', 'images.unsplash.com'],
		formats: ['image/avif', 'image/webp'],
		// loader: 'cloudinary',
		// path: 'https://res.cloudinary.com/dqydioa16',
	},
};

module.exports = nextConfig;
