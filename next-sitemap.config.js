/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techwizpk.com',
  generateRobotsTxt: true,

  // Index sitemap banaye
  generateIndexSitemap: true,

  // Base name 'sitemap' rakho taake sitemap.xml bane
  sitemapBaseFileName: 'sitemap',

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
