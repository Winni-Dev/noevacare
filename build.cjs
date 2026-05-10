const imagemin = require('imagemin');
const imageminJpegTran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Optimisation des images en cours...');
  
  try {
    // Créer le dossier public s'il n'existe pas
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public', { recursive: true });
    }

    // Optimiser les images du dossier dist
    const files = await imagemin(['dist/**/*.{jpg,jpeg,png}'], {
      destination: 'dist',
      plugins: [
        imageminJpegTran({
          progressive: true,
          quality: 80,
        }),
        imageminPngquant({
          quality: [0.6, 0.8],
          speed: 4,
        }),
      ],
    });

    if (files.length > 0) {
      console.log(`✅ ${files.length} images optimisées`);
      
      // Calculer l'économie de taille
      let totalSaved = 0;
      files.forEach(file => {
        const original = file.sourcePath;
        const optimized = file.destinationPath;
        if (fs.existsSync(optimized)) {
          const origSize = fs.statSync(original).size;
          const optSize = fs.statSync(optimized).size;
          const saved = origSize - optSize;
          if (saved > 0) {
            totalSaved += saved;
          }
        }
      });
      
      if (totalSaved > 0) {
        console.log(`💾 Espace économisé: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
      }
    } else {
      console.log('ℹ️  Aucune image à optimiser');
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'optimisation:', error);
    process.exit(1);
  }
}

// Exécuter l'optimisation seulement si dist existe
if (fs.existsSync('dist')) {
  optimizeImages();
} else {
  console.log('ℹ️  Dossier dist non trouvé - skip optimisation');
}
