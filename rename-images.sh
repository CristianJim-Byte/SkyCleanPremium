#!/bin/bash
# Script para renombrar imágenes de SkyClean Premium
# Ejecutar desde la raíz del proyecto: bash rename-images.sh

DRONES="img/images/drones"
PROJECTS="img/images/projects"

echo "=== Renombrando imágenes en $DRONES ==="

cd "$(dirname "$0")"

# --- DRONES ---
mv "$DRONES/A_detailed_realistic_photograp_Nano_Banana_2_20869.jpg" "$DRONES/drone-roof-cleaning.jpg" 2>/dev/null && echo "✓ drone-roof-cleaning.jpg"
mv "$DRONES/A_low-angle_fotorrealista_shot_Nano_Banana_2_46942.jpg" "$DRONES/drone-solar-panel-sunset.jpg" 2>/dev/null && echo "✓ drone-solar-panel-sunset.jpg"
mv "$DRONES/A_fotorrealista_medium_eye-lev_Nano_Banana_2_77848.jpg" "$DRONES/drone-operator-rooftop.jpg" 2>/dev/null && echo "✓ drone-operator-rooftop.jpg"
mv "$DRONES/A_fotorrealista_extreme_close-_Nano_Banana_2_73444.jpg" "$DRONES/drone-nozzle-closeup.jpg" 2>/dev/null && echo "✓ drone-nozzle-closeup.jpg"
mv "$DRONES/A_fotorrealista_medium_shot_ca_Nano_Banana_2_06487 copia.jpg" "$DRONES/drone-solar-farm-operator.jpg" 2>/dev/null && echo "✓ drone-solar-farm-operator.jpg"
mv "$DRONES/IiKyVmVErflvxHF_EtcNj_Gd9kY9kS.png" "$DRONES/drone-arm-led-dark.png" 2>/dev/null && echo "✓ drone-arm-led-dark.png"

# Duplicados que también estaban en drones/ (vienen de projects)
mv "$DRONES/Panel_1_01_Roof_Cleaning_Match_Nano_Banana_2_46113.jpg" "$DRONES/card-services-dual-roof-solar.jpg" 2>/dev/null && echo "✓ card-services-dual-roof-solar.jpg (movido de duplicado)"
mv "$DRONES/Panel_1_01_Roof_Cleaning_Match_Nano_Banana_2_54380.jpg" "$DRONES/card-services-dual-alt.jpg" 2>/dev/null && echo "✓ card-services-dual-alt.jpg (movido de duplicado)"
mv "$DRONES/Roof_Cleaning_Matching_the_ori_Nano_Banana_2_98562.jpg" "$DRONES/card-service-01-roof.jpg" 2>/dev/null && echo "✓ card-service-01-roof.jpg (movido de duplicado)"
mv "$DRONES/Solar_Panel_Cleaning_Matching__Nano_Banana_2_19831.jpg" "$DRONES/card-service-02-solar.jpg" 2>/dev/null && echo "✓ card-service-02-solar.jpg (movido de duplicado)"
mv "$DRONES/Facade_Cleaning_Matching_the_o_Nano_Banana_2_75303.jpg" "$DRONES/card-service-03-facade.jpg" 2>/dev/null && echo "✓ card-service-03-facade.jpg (movido de duplicado)"
mv "$DRONES/Facade_Cleaning_Matching_the_o_Nano_Banana_2_55523.jpg" "$DRONES/card-service-03-facade-alt.jpg" 2>/dev/null && echo "✓ card-service-03-facade-alt.jpg (movido de duplicado)"
mv "$DRONES/Un_primer_plano_extremo_de_la__Nano_Banana_2_58381.jpg" "$DRONES/skyclean-tank-branding.jpg" 2>/dev/null && echo "✓ skyclean-tank-branding.jpg (movido de duplicado)"
mv "$DRONES/Un_primer_plano_macro_de_un_so_Nano_Banana_2_06154.jpg" "$DRONES/drone-arm-led-blue.jpg" 2>/dev/null && echo "✓ drone-arm-led-blue.jpg (movido de duplicado)"
mv "$DRONES/Un_primer_plano_macro_fotorrea_Nano_Banana_2_89555.jpg" "$DRONES/drone-arm-led-detail.jpg" 2>/dev/null && echo "✓ drone-arm-led-detail.jpg (movido de duplicado)"

echo ""
echo "=== Renombrando imágenes en $PROJECTS ==="

# --- PROJECTS ---
mv "$PROJECTS/Panel_1_01_Roof_Cleaning_Match_Nano_Banana_2_46113.jpg" "$PROJECTS/card-services-dual-roof-solar.jpg" 2>/dev/null && echo "✓ card-services-dual-roof-solar.jpg"
mv "$PROJECTS/Panel_1_01_Roof_Cleaning_Match_Nano_Banana_2_54380.jpg" "$PROJECTS/card-services-dual-alt.jpg" 2>/dev/null && echo "✓ card-services-dual-alt.jpg"
mv "$PROJECTS/Roof_Cleaning_Matching_the_ori_Nano_Banana_2_98562.jpg" "$PROJECTS/card-service-01-roof.jpg" 2>/dev/null && echo "✓ card-service-01-roof.jpg"
mv "$PROJECTS/Solar_Panel_Cleaning_Matching__Nano_Banana_2_19831.jpg" "$PROJECTS/card-service-02-solar.jpg" 2>/dev/null && echo "✓ card-service-02-solar.jpg"
mv "$PROJECTS/Facade_Cleaning_Matching_the_o_Nano_Banana_2_75303.jpg" "$PROJECTS/card-service-03-facade.jpg" 2>/dev/null && echo "✓ card-service-03-facade.jpg"
mv "$PROJECTS/Facade_Cleaning_Matching_the_o_Nano_Banana_2_55523.jpg" "$PROJECTS/card-service-03-facade-alt.jpg" 2>/dev/null && echo "✓ card-service-03-facade-alt.jpg"
mv "$PROJECTS/Un_primer_plano_extremo_de_la__Nano_Banana_2_58381.jpg" "$PROJECTS/skyclean-tank-branding.jpg" 2>/dev/null && echo "✓ skyclean-tank-branding.jpg"
mv "$PROJECTS/Un_primer_plano_macro_de_un_so_Nano_Banana_2_06154.jpg" "$PROJECTS/drone-arm-led-blue.jpg" 2>/dev/null && echo "✓ drone-arm-led-blue.jpg"
mv "$PROJECTS/Un_primer_plano_macro_fotorrea_Nano_Banana_2_89555.jpg" "$PROJECTS/drone-arm-led-detail.jpg" 2>/dev/null && echo "✓ drone-arm-led-detail.jpg"
mv "$PROJECTS/IiKyVmVErflvxHF_EtcNj_Gd9kY9kS.png" "$PROJECTS/drone-arm-led-dark.png" 2>/dev/null && echo "✓ drone-arm-led-dark.png"

# Limpiar .DS_Store
rm -f "$DRONES/.DS_Store" "$PROJECTS/.DS_Store" 2>/dev/null && echo "✓ Limpiados .DS_Store"

echo ""
echo "=== ¡Renombrado completado! ==="
echo ""
echo "Contenido final de $DRONES:"
ls -la "$DRONES/"
echo ""
echo "Contenido final de $PROJECTS:"
ls -la "$PROJECTS/"
