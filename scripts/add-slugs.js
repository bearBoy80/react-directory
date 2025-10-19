// 这个脚本用于为所有网站生成 slug
// 运行: node scripts/add-slugs.js

const fs = require('fs');
const path = require('path');

// 生成 slug 的函数
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// 读取 sites.ts 文件
const sitesPath = path.join(__dirname, '../src/data/sites.ts');
let content = fs.readFileSync(sitesPath, 'utf-8');

// 正则匹配所有网站对象
const siteRegex = /\{\s*id:\s*\d+,\s*title:\s*"([^"]+)",/g;
const matches = [...content.matchAll(siteRegex)];

console.log(`Found ${matches.length} sites`);

// 为每个网站添加 slug
matches.forEach((match) => {
  const title = match[1];
  const slug = generateSlug(title);
  const oldPattern = match[0];
  const newPattern = oldPattern.replace(/id:\s*(\d+),/, `id: $1,\n    slug: "${slug}",`);
  content = content.replace(oldPattern, newPattern);
});

// 写回文件
fs.writeFileSync(sitesPath, content, 'utf-8');
console.log('Slugs added successfully!');
