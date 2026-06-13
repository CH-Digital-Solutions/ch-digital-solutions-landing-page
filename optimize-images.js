import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, 'public');
const SRC_DIR = join(__dirname, 'src');

function getAllFiles(dir, extArray, fileList = []) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      getAllFiles(filePath, extArray, fileList);
    } else {
      if (extArray.includes(extname(filePath).toLowerCase())) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function optimizeImages() {
  console.log('🔄 Starting Image Optimization Pipeline...');
  
  const images = getAllFiles(PUBLIC_DIR, ['.png', '.jpg', '.jpeg']);
  const convertedFiles = new Map(); // Map of old filename to new filename
  
  for (const imgPath of images) {
    const ext = extname(imgPath);
    const webpPath = imgPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    
    // Convert to webp
    try {
      if (imgPath.includes('favicon')) {
        continue; // skip favicon just in case it breaks anything
      }
      
      const imgBuffer = readFileSync(imgPath);
      await sharp(imgBuffer)
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      console.log(`✅ Converted: ${imgPath.split('public')[1]} -> .webp`);
      
      // Store the filename change mapping (just the basename since paths might differ slightly in references)
      const oldName = imgPath.split(/[\\/]/).pop();
      const newName = webpPath.split(/[\\/]/).pop();
      convertedFiles.set(oldName, newName);
      
    } catch (err) {
      console.error(`❌ Failed to convert ${imgPath}:`, err.message);
    }
  }

  // Find and replace in source code
  const sourceFiles = getAllFiles(SRC_DIR, ['.js', '.jsx', '.html', '.css']);
  // also add index.html
  sourceFiles.push(join(__dirname, 'index.html'));
  
  for (const filePath of sourceFiles) {
    try {
      let content = readFileSync(filePath, 'utf8');
      let changed = false;
      
      for (const [oldName, newName] of convertedFiles.entries()) {
        const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newName);
          changed = true;
        }
      }
      
      // Also inject loading="lazy" into img tags if they don't have it
      // Simple regex for <img ... />
      if (filePath.endsWith('.jsx') || filePath.endsWith('.html')) {
        const imgRegex = /<img(?![^>]*loading=['"]lazy['"])([^>]+)>/gi;
        if (imgRegex.test(content)) {
          content = content.replace(imgRegex, '<img loading="lazy"$1>');
          changed = true;
        }
      }
      
      if (changed) {
        writeFileSync(filePath, content, 'utf8');
        console.log(`📝 Updated references in: ${filePath.split('ChLabsWebsite')[1]}`);
      }
    } catch (err) {
      console.error(`❌ Failed to update ${filePath}:`, err.message);
    }
  }
  
  console.log('🏁 Image optimization complete!');
}

optimizeImages();
