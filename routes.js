import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const services = [
  'website-development',
  'custom-software-development',
  'mobile-app-development',
  'ecommerce-website-development',
  'erp-software-development'
];

const locations = [
  'andheri',
  'bandra',
  'thane',
  'navi-mumbai',
  'borivali',
  'malad',
  'powai',
  'south-mumbai'
];

const programmaticRoutes = [];
for (const service of services) {
  for (const location of locations) {
    programmaticRoutes.push({
      path: `/${service}-in-${location}`,
      priority: 0.9,
      changefreq: 'monthly'
    });
  }
}

// Automatically discover markdown blogs
const blogRoutes = [];
try {
  const blogDir = join(__dirname, 'src/content/blogs');
  const files = readdirSync(blogDir);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const slug = file.replace('.md', '');
      blogRoutes.push({
        path: `/blog/${slug}`,
        priority: 0.8,
        changefreq: 'monthly'
      });
    }
  }
} catch (err) {
  console.warn("No markdown blogs found or folder missing.");
}

export const siteRoutes = [
  // Homepage
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  
  // Blog Index (Content Hub)
  { path: '/blog', priority: 0.9, changefreq: 'weekly' },
  
  // Core Service Pages
  { path: '/website-development-company-mumbai', priority: 0.9, changefreq: 'monthly' },
  { path: '/custom-software-development-mumbai', priority: 0.9, changefreq: 'monthly' },
  { path: '/mobile-app-development-mumbai', priority: 0.9, changefreq: 'monthly' },
  { path: '/ecommerce-website-development-mumbai', priority: 0.9, changefreq: 'monthly' },
  { path: '/erp-software-development-mumbai', priority: 0.9, changefreq: 'monthly' },
  { path: '/whatsapp-automation', priority: 0.9, changefreq: 'monthly' },
  { path: '/ai-calling-agent', priority: 0.9, changefreq: 'monthly' },
  
  // 40+ Local SEO Landing Pages (Service x Location Matrix)
  ...programmaticRoutes,

  // Legacy JSX Blog Posts
  { path: '/website-development-cost-mumbai', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-to-build-ecommerce-website', priority: 0.8, changefreq: 'monthly' },
  { path: '/erp-software-for-small-business', priority: 0.8, changefreq: 'monthly' },
  { path: '/cost-of-custom-software-development-india', priority: 0.8, changefreq: 'monthly' },
  { path: '/react-vs-wordpress-for-startups', priority: 0.8, changefreq: 'monthly' },

  // Dynamic Markdown Blogs
  ...blogRoutes,

  // Project Case Studies
  { path: '/project/bloomtale', priority: 0.7, changefreq: 'yearly' },
  { path: '/project/stms', priority: 0.7, changefreq: 'yearly' },
  { path: '/project/mindseeds-tutorials', priority: 0.7, changefreq: 'yearly' },

  // Legal Pages
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' }
];
