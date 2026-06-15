const sharp = require('sharp');
const path = require('path');

async function createOgImage() {
  try {
    const logoPath = path.join(__dirname, 'public', 'ch_logo_d.png');
    const outPath = path.join(__dirname, 'public', 'og-image.png');

    // Create a 1200x630 background (Pitch Black)
    const background = sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 } // #000000
      }
    });

    // Resize logo to fit nicely inside the background (added padding)
    const logoBuffer = await sharp(logoPath)
      .resize(600, 300, { fit: 'inside' })
      .toBuffer();

    // Composite logo onto background
    await background
      .composite([{ input: logoBuffer, gravity: 'center' }])
      .png()
      .toFile(outPath);

    console.log("Successfully generated public/og-image.png");
  } catch(e) {
    console.error("Error generating image:", e);
  }
}
createOgImage();
