#!/bin/bash
# Script para copiar los archivos nuevos a sus ubicaciones correctas
# Ejecutar desde la carpeta SkyCleanPremium

BASEDIR="$(cd "$(dirname "$0")" && pwd)"
UPLOADS="$BASEDIR/../uploads"
HTML_DIR="$BASEDIR/Udrone/Udrone HTML"

echo "Copiando videoheader2.mp4 -> video/2.mp4..."
cp "$UPLOADS/videoheader2.mp4" "$HTML_DIR/video/2.mp4"

echo "Copiando herovideo.mov -> video/herovideo.mov..."
cp "$UPLOADS/herovideo.mov" "$HTML_DIR/video/herovideo.mov"

echo "Archivos copiados!"
ls -lh "$HTML_DIR/video/"
