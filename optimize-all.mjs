// SkyClean — Resize ALL oversized images IN PLACE
// Run: npm install sharp
// Then: node optimize-all.mjs
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MAX_WIDTH = 800;    // Cards, mosaic, industries
const MAX_WIDTH_BG = 1920; // Full-screen backgrounds
const QUALITY = 80;

// Images referenced in index.html — resize and overwrite
const images = [
  // Service cards (displayed at ~376px, 800 is 2x retina)
  { file: 'Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-06-10-38-11-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/floating-solar-panels-providing-renewable-energy-2026-01-07-07-09-10-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/new-york-city-june-15-2026-03-11-04-23-43-utc.webp', maxW: MAX_WIDTH },

  // About mosaic
  { file: 'Udrone/male-operator-wearing-a-protective-uniform-and-a-m-2026-01-11-10-58-17-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/engineers-inspecting-wind-turbine-structure-2026-01-11-11-05-21-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/remote-control-with-a-tablet-and-take-off-drone-fr-2026-01-09-15-03-40-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/male-operators-set-up-the-agro-drone-checking-eve-2026-01-11-10-58-17-utc.webp', maxW: MAX_WIDTH },

  // Projects
  { file: 'Udrone/professional-maintenance-engineer-working-at-wind-2026-01-09-12-15-41-utc.webp', maxW: MAX_WIDTH },

  // Industries
  { file: 'Udrone/agricultural-drones-and-agricultural-crops-2026-01-09-00-18-06-utc.webp', maxW: MAX_WIDTH },
  { file: 'Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-07-02-07-42-utc.webp', maxW: MAX_WIDTH },
];

// NOTE: These images are ALREADY optimized and don't need resizing:
// - Udrone/close-up-redimensionada.webp (180KB — hero background)
// - Udrone/iot-smart-agriculture-redimensionada.webp (326KB — VS background)
// - img/hero-drone.webp (38KB — floating drone)

console.log('SkyClean Image Optimizer — Resizing oversized images...\n');

let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  try {
    if (!fs.existsSync(img.file)) {
      console.log(`⏭ ${path.basename(img.file).substring(0, 45).padEnd(45)} SKIP (not found)`);
      continue;
    }

    const beforeSize = fs.statSync(img.file).size;
    totalBefore += beforeSize;

    // Read, resize, write to temp, then overwrite
    const tempFile = img.file + '.tmp';
    await sharp(img.file)
      .resize({ width: img.maxW, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(tempFile);

    // Overwrite original
    fs.renameSync(tempFile, img.file);

    const afterSize = fs.statSync(img.file).size;
    totalAfter += afterSize;

    const saved = ((1 - afterSize / beforeSize) * 100).toFixed(0);
    console.log(`✓ ${path.basename(img.file).substring(0, 45).padEnd(45)} ${(beforeSize/1024).toFixed(0)}KB → ${(afterSize/1024).toFixed(0)}KB  (-${saved}%)`);
  } catch (e) {
    console.log(`✗ ${path.basename(img.file).substring(0, 45).padEnd(45)} ERROR: ${e.message}`);
  }
}

console.log(`\n━━━ TOTAL: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (-${((1-totalAfter/totalBefore)*100).toFixed(0)}%) ━━━`);
console.log('\nDone! No path changes needed — files overwritten in place.');
console.log('Just commit and push!');
