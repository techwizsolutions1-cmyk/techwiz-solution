const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");
const oldIndex = path.join(publicDir, "sitemap_index.xml");
const newIndex = path.join(publicDir, "sitemap-index.xml");

if (fs.existsSync(oldIndex)) {
  fs.renameSync(oldIndex, newIndex);
  console.log("✅ sitemap_index.xml renamed → sitemap-index.xml");
} else {
  console.log("⚠️ sitemap_index.xml not found");
}
