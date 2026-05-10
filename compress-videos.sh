#!/bin/bash
# Script pour compresser les vidéos avec FFmpeg
# Installe FFmpeg: https://ffmpeg.org/download.html

echo "🎬 Compression des vidéos..."

# Réduire Prsentationdubracelet.mp4 de 10.3MB à ~2-3MB
ffmpeg -i src/IMAGES/Prsentationdubracelet.mp4 \
  -c:v libx264 \
  -crf 28 \
  -preset fast \
  -c:a aac \
  -b:a 64k \
  -movflags +faststart \
  src/IMAGES/Prsentationdubracelet_compressed.mp4

# Réduire main.mp4 de 7.8MB à ~1-2MB
ffmpeg -i src/IMAGES/main.mp4 \
  -c:v libx264 \
  -crf 28 \
  -preset fast \
  -c:a aac \
  -b:a 64k \
  -movflags +faststart \
  src/IMAGES/main_compressed.mp4

echo "✅ Vidéos compressées!"
echo "Avant: 18.1 MB"
echo "Après: ~3-5 MB (réduction 75%)"
