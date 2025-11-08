const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");
const oldFile = path.join(publicDir, "sitemap-0.xml");
const newFile = path.join(publicDir, "sitemap-index.xml");
const indexFile = path.join(publicDir, "sitemap.xml");

// 1️⃣ Rename sitemap-0.xml → sitemap-index.xml
if (fs.existsSync(oldFile)) {
  fs.renameSync(oldFile, newFile);
  console.log("✅ sitemap-0.xml renamed → sitemap-index.xml");
} else {
  console.log("⚠️ sitemap-0.xml not found");
}

// 2️⃣ Update <loc> inside sitemap.xml
if (fs.existsSync(indexFile)) {
  let xml = fs.readFileSync(indexFile, "utf8");
  xml = xml.replace(/sitemap-0\.xml/g, "sitemap-index.xml");
  fs.writeFileSync(indexFile, xml);
  console.log("✅ sitemap.xml updated with new loc → sitemap-index.xml");
} else {
  console.log("⚠️ sitemap.xml not found");
}
