const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  if (file.endsWith('.HEIC')) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.HEIC', '.jpg'));
    console.log(`Converting ${file} to ${path.basename(outputPath)}...`);
    try {
      execSync(`npx -y heic-cli -i "${inputPath}" -o "${outputPath}"`, { stdio: 'inherit' });
      console.log(`Successfully converted ${file}`);
    } catch (e) {
      console.error(`Failed to convert ${file}`, e);
    }
  }
});
