import { writeFileSync } from 'node:fs';

const baseUrl = process.env.SITE_URL || 'https://DEINE-DOMAIN.de';
const routes = ['/', '/leistungen', '/projekte', '/kontakt'];
const now = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`)
    .join('\n') +
  `\n</urlset>\n`;

writeFileSync('static/sitemap.xml', xml, 'utf-8');
console.log('✅ sitemap generated at static/sitemap.xml for', baseUrl);
