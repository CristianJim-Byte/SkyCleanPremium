// Run AFTER optimize.mjs — updates all image paths in index.html
import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  ['Udrone/close-up-of-a-surveillance-drone-in-blue-sky-being-2026-01-11-09-42-19-utc.jpg', 'img/hero-bg.webp'],
  ['Udrone/Udrone HTML/images/misc/2.webp', 'img/hero-drone.webp'],
  ['Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-06-10-38-11-utc.jpg', 'img/service-01.webp'],
  ['Udrone/floating-solar-panels-providing-renewable-energy-2026-01-07-07-09-10-utc.jpg', 'img/service-02.webp'],
  ['Udrone/new-york-city-june-15-2026-03-11-04-23-43-utc.jpg', 'img/service-03.webp'],
  ['Udrone/male-operator-wearing-a-protective-uniform-and-a-m-2026-01-11-10-58-17-utc.jpg', 'img/about-01.webp'],
  ['Udrone/engineers-inspecting-wind-turbine-structure-2026-01-11-11-05-21-utc.JPG', 'img/about-02.webp'],
  ['Udrone/remote-control-with-a-tablet-and-take-off-drone-fr-2026-01-09-15-03-40-utc.jpg', 'img/about-03.webp'],
  ['Udrone/male-operators-set-up-the-agro-drone-checking-eve-2026-01-11-10-58-17-utc.jpg', 'img/about-04.webp'],
  ['Udrone/professional-maintenance-engineer-working-at-wind-2026-01-09-12-15-41-utc.jpg', 'img/project-01.webp'],
  ['Udrone/iot-smart-agriculture-industry-concept-drone-in-p-2026-01-08-23-40-27-utc.jpg', 'img/vs-bg.webp'],
  ['Udrone/agricultural-drones-and-agricultural-crops-2026-01-09-00-18-06-utc.jpg', 'img/industry-01.webp'],
  ['Udrone/drone-operator-modern-farmer-with-drone-on-agricu-2026-01-07-02-07-42-utc.jpg', 'img/industry-05.webp'],
];

let count = 0;
for (const [from, to] of replacements) {
  const before = html;
  html = html.replaceAll(from, to);
  const matches = (before.length - html.length + to.length * ((before.split(from).length - 1))) ;
  const n = before.split(from).length - 1;
  if (n > 0) {
    count += n;
    console.log(`✓ ${to.padEnd(25)} (${n} occurrences)`);
  }
}

fs.writeFileSync('index.html', html);
console.log(`\n━━━ Updated ${count} image paths in index.html ━━━`);
console.log('Page now loads from img/ folder with optimized WebP images!');
