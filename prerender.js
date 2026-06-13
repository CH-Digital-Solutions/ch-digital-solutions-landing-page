/**
 * Prerender Script for CH Digital Solutions
 * 
 * This script generates static HTML snapshots of all routes after the Vite build.
 * It uses Puppeteer to visit each route and capture the fully-rendered HTML,
 * ensuring Google and AI crawlers can see the complete page content without
 * executing JavaScript.
 * 
 * Usage: node prerender.js (runs automatically after `npm run build`)
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { siteRoutes } from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = 4173;

// Map the detailed route objects into an array of simple string paths
const ROUTES = siteRoutes.map(route => route.path);

/**
 * Simple static file server for the dist folder.
 * Falls back to index.html for SPA routes (mimics Vercel behavior).
 */
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // If file doesn't exist, serve index.html (SPA fallback)
      if (!existsSync(filePath)) {
        filePath = join(DIST_DIR, 'index.html');
      }

      // Determine content type
      const ext = filePath.split('.').pop();
      const contentTypes = {
        html: 'text/html',
        js: 'application/javascript',
        css: 'text/css',
        png: 'image/png',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        json: 'application/json',
        xml: 'application/xml',
        txt: 'text/plain',
      };

      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/html' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`  📡 Preview server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('\n🔄 Pre-rendering pages for SEO...\n');

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Navigate to the route and wait for the React app to render
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      });

      // Wait a bit extra for any lazy-loaded content or animations
      await new Promise((r) => setTimeout(r, 500));

      // Get the fully rendered HTML
      const html = await page.content();

      // Determine output path
      const outputDir = route === '/'
        ? DIST_DIR
        : join(DIST_DIR, ...route.split('/').filter(Boolean));

      // Create directory if needed
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      // Write the pre-rendered HTML
      const outputFile = join(outputDir, 'index.html');
      writeFileSync(outputFile, html, 'utf-8');

      console.log(`  ✅ ${route}`);
      successCount++;

      await page.close();
    } catch (err) {
      console.log(`  ❌ ${route} — ${err.message}`);
      errorCount++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🏁 Pre-rendering complete: ${successCount} succeeded, ${errorCount} failed\n`);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
