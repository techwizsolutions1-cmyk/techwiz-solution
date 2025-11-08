/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techwizpk.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ❌ Disable index sitemap
  sitemapSize: 5000, // ✅ Large limit taake sab ek file me ho
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: `${config.siteUrl}${path}`,
        lastmod: '2025-11-08T08:42:56+00:00',
        changefreq: 'daily',
        priority: 1.0,
      };
    }
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'weekly',
      priority: 0.7,
    };
  },
};
