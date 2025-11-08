// created at 8 novermber
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techwizpk.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // Only include the homepage
    if (path === '/') {
      return {
        loc: `${config.siteUrl}${path}`, // full URL
        lastmod: '2025-11-08T08:42:56+00:00',
        changefreq: 'daily',
        priority: 1.0,
      };
    }
    // Skip all other paths
    return undefined;
  },
};
