import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = 'public/images';
const files = fs.readdirSync(imageDir);

const jpgFiles = files.filter(file => file.endsWith('.jpg'));

console.log(`Found ${jpgFiles.length} JPG images to optimize...`);

async function optimize() {
  for (const file of jpgFiles) {
    const inputPath = path.join(imageDir, file);
    const outputPath = inputPath.replace('.jpg', '.webp');
    
    await sharp(inputPath)
      .webp({ quality: 80 }) // 80% 品質是視覺與體積的最佳平衡
      .toFile(outputPath);
      
    const originalSize = fs.statSync(inputPath).size / 1024;
    const newSize = fs.statSync(outputPath).size / 1024;
    
    console.log(`- ${file}: ${originalSize.toFixed(2)}KB -> ${newSize.toFixed(2)}KB (${((1 - newSize/originalSize) * 100).toFixed(1)}% reduced)`);
  }
}

optimize().then(() => console.log('Optimization complete!'));
