#!/bin/bash
# Script para renombrar las nuevas imágenes añadidas en projects/
cd "$(dirname "$0")"

PROJECTS="img/images/projects"

echo "=== Renombrando nuevas imágenes en $PROJECTS ==="

# Stock photos (de Udrone, reubicadas)
mv "$PROJECTS/male-operator-wearing-a-protective-uniform-and-a-m-2026-01-11-10-58-17-utc.webp" "$PROJECTS/operator-drone-preparation.webp" 2>/dev/null && echo "✓ operator-drone-preparation.webp"
mv "$PROJECTS/male-operators-set-up-the-agro-drone-checking-eve-2026-01-11-10-58-17-utc.webp" "$PROJECTS/operators-drone-setup.webp" 2>/dev/null && echo "✓ operators-drone-setup.webp"

# Nuevas imágenes AI (limpieza en acción)
mv "$PROJECTS/Puedes_mejorarme_la_imagen_Nano_Banana_2_86587.jpg" "$PROJECTS/drone-facade-glass-cleaning.jpg" 2>/dev/null && echo "✓ drone-facade-glass-cleaning.jpg"
mv "$PROJECTS/Puedes_mejorarme_la_imagen_Nano_Banana_2_63294.jpg" "$PROJECTS/drone-spray-sky.jpg" 2>/dev/null && echo "✓ drone-spray-sky.jpg"
mv "$PROJECTS/Puedes_mejorarme_la_imagen_Nano_Banana_2_10054.jpg" "$PROJECTS/drone-solar-floating-cleaning.jpg" 2>/dev/null && echo "✓ drone-solar-floating-cleaning.jpg"
mv "$PROJECTS/Puedes_mejorarme_la_imagen_Nano_Banana_2_88159.jpg" "$PROJECTS/drone-facade-stone-cleaning.jpg" 2>/dev/null && echo "✓ drone-facade-stone-cleaning.jpg"
mv "$PROJECTS/Puedes_mejorarme_la_imagen_sin_Nano_Banana_2_87917.jpg" "$PROJECTS/solar-before-after.jpg" 2>/dev/null && echo "✓ solar-before-after.jpg"

echo ""
echo "=== ¡Listo! Contenido final de $PROJECTS: ==="
ls -la "$PROJECTS/"
