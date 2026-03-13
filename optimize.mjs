// SkyClean Image Optimizer — Run: node optimize.mjs
// Requires: npm install sharp (one time)
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const QUALITY = 78;
const MAX_WIDTH = 1600;
const OUTPUT_DIR = './img';

// All images used in index.html
const images = [
  { src: 'Udrone/close-up-of-a-surveillance-drone-in-blue-sky-being-2026-01-11-09-42-19-utc.jpg', out: 'hero-bg.webp', maxW: 1920 },
  { src: 'Udrone/Udrone HTML/images/misc/2.webp', out: 'hero-drone.webp', maxW: 600 },
  { src: 'Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-06-10-38-11-utc.jpg', out: 'service-01.webp' },
  { src: 'Udrone/floating-solar-panels-providing-renewable-energy-2026-01-07-07-09-10-utc.jpg', out: 'service-02.webp' },
  { src: 'Udrone/new-york-city-june-15-2026-03-11-04-23-43-utc.jpg', out: 'service-03.webp' },
  { src: 'Udrone/male-operator-wearing-a-protective-uniform-and-a-m-2026-01-11-10-58-17-utc.jpg', out: 'about-01.webp' },
  { src: 'Udrone/engineers-inspecting-wind-turbine-structure-2026-01-11-11-05-21-utc.JPG', out: 'about-02.webp' },
  { src: 'Udrone/remote-control-with-a-tablet-and-take-off-drone-fr-2026-01-09-15-03-40-utc.jpg', out: 'about-03.webp' },
  { src: 'Udrone/male-operators-set-up-the-agro-drone-checking-eve-2026-01-11-10-58-17-utc.jpg', out: 'about-04.webp' },
  { src: 'Udrone/professional-maintenance-engineer-working-at-wind-2026-01-09-12-15-41-utc.jpg', out: 'project-01.webp' },
  { src: 'Udrone/iot-smart-agriculture-industry-concept-drone-in-p-2026-01-08-23-40-27-utc.jpg', out: 'vs-bg.webp', maxW: 1920 },
  { src: 'Udrone/agricultural-drones-and-agricultural-crops-2026-01-09-00-18-06-utc.jpg', out: 'industry-01.webp' },
  { src: 'Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-07-02-07-42-utc.jpg', out: 'industry-05.webp' },
];

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  try {
    const inputPath = img.src;
    const outputPath = path.join(OUTPUT_DIR, img.out);
    const beforeSize = fs.statSync(inputPath).size;
    totalBefore += beforeSize;

    await sharp(inputPath)
      .resize({ width: img.maxW || MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    totalAfter += afterSize;

    const saved = ((1 - afterSize / beforeSize) * 100).toFixed(0);
    console.log(`✓ ${img.out.padEnd(20)} ${(beforeSize/1024/1024).toFixed(1)}MB → ${(afterSize/1024/1024).toFixed(1)}MB  (-${saved}%)`);
  } catch (e) {
    console.log(`✗ ${img.out.padEnd(20)} ERROR: ${e.message}`);
  }
}

console.log(`\n━━━ TOTAL: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (-${((1-totalAfter/totalBefore)*100).toFixed(0)}%) ━━━`);
console.log('\nDone! Now update index.html paths from Udrone/... to img/...');
