/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techwizpk.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true, // ← yeh line add karo
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: `${config.siteUrl}${path}`,
        lastmod: '2025-11-08T08:42:56+00:00',
        changefreq: 'daily',
        priority: 1.0,
      };
    }
    return undefined;
  },
};
