/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techwizpk.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ✅ sirf ek sitemap.xml file banayega
  sitemapBaseFileName: 'sitemap', // ✅ file name: sitemap.xml
  sitemapSize: 5000,

  // ❌ sab kuch exclude kar do
  exclude: ['/*'],

  // ✅ manually sirf homepage return karwao
  additionalPaths: async (config) => {
    return [
      {
        loc: 'https://techwizpk.com',
        lastmod: '2025-11-08T08:42:56+00:00',
        changefreq: 'daily',
        priority: 1.0,
      },
    ];
  },
};
