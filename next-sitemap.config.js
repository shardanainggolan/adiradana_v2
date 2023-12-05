/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.APP_URL,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [
        '/upload-article',
        '/create-branch',
        '/cabang-sitemap.xml',
        '/server-sitemap.xml'
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        policies: [
            { 
                userAgent: "*", 
                disallow: "/upload-article" 
            },
            { 
                userAgent: "*", 
                disallow: "/create-branch" 
            },
            {
                userAgent: '*',
                allow: '/',
            }
        ],
        additionalSitemaps: [
            `${process.env.APP_URL}/cabang-sitemap.xml`,
            `${process.env.APP_URL}/server-sitemap.xml`,
        ],
    }
}