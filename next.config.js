/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
	reactStrictMode: true,
	env: {
		APP_URL: process.env.APP_URL,
		BACKEND_URL: process.env.BACKEND_URL,
		CMS_API_URL: process.env.CMS_API_URL,
		NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID,
		AXI_SALES_NAME: process.env.AXI_SALES_NAME,
		AXI_SALES_ID: process.env.AXI_SALES_ID,
		AXI_SALES_HP: process.env.AXI_SALES_HP,
		AXI_SALES_HP_INTL: process.env.AXI_SALES_HP_INTL,
		defaultLatitude: -6.200000,
		defaultLongitude: 106.816666,
		defaultMapZoom: 9.4
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'backend.adiradana.com',
				pathname: '/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'article.adiradana.com',
				pathname: '/wp-content/uploads/**',
			},
		],
	},
	compress: false,
}

module.exports = nextConfig
