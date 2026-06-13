import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { siteRoutes } from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, 'public');
const SITEMAP_PATH = join(PUBLIC_DIR, 'sitemap.xml');

const BASE_URL = 'https://chdigitalsolutions.in';

function generateSitemap() {
  console.log('🗺️  Generating dynamic sitemap...');
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of siteRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`✅ Sitemap successfully generated at public/sitemap.xml with ${siteRoutes.length} routes.`);
}

generateSitemap();
