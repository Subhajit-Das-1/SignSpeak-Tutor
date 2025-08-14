#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const SIGNS_DIR = path.join(process.cwd(), 'public', 'signs');
const VIDEOS_DIR = path.join(SIGNS_DIR, 'videos');
const IMAGES_DIR = path.join(SIGNS_DIR, 'images');

// Sample words and letters for testing
const SAMPLE_WORDS = ['hello', 'world', 'thank', 'you', 'please', 'help', 'good', 'bad', 'yes', 'no'];
const SAMPLE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dirPath}`);
  } else {
    console.log(`📁 Directory already exists: ${dirPath}`);
  }
}

function createPlaceholderFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`📄 Created placeholder file: ${filePath}`);
  } else {
    console.log(`📄 File already exists: ${filePath}`);
  }
}

function createVideoPlaceholder(filePath) {
  // Create a simple HTML5 video with a colored background
  const videoContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Sign Video</title>
    <style>
        body { margin: 0; padding: 0; background: #1a1a1a; display: flex; justify-content: center; align-items: center; height: 100vh; }
        .video-container { width: 300px; height: 300px; background: linear-gradient(45deg, #3b82f6, #8b5cf6); border-radius: 10px; display: flex; justify-content: center; align-items: center; color: white; font-size: 48px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="video-container">
        ${path.basename(filePath, '.mp4').toUpperCase()}
    </div>
</body>
</html>`;
  
  // For now, create a simple text file that can be viewed
  createPlaceholderFile(filePath.replace('.mp4', '.html'), videoContent);
  
  // Also create a minimal MP4 header for the original file
  const mp4Header = Buffer.from([
    0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6F, 0x6D,
    0x00, 0x00, 0x02, 0x00, 0x69, 0x73, 0x6F, 0x6D, 0x69, 0x73, 0x6F, 0x32,
    0x61, 0x76, 0x63, 0x31, 0x6D, 0x70, 0x34, 0x31
  ]);
  createPlaceholderFile(filePath, mp4Header);
}

function createImagePlaceholder(filePath) {
  // Create a simple HTML file that displays a colored square with the letter
  const letter = path.basename(filePath, '.png');
  const imageContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Sign Image - ${letter}</title>
    <style>
        body { margin: 0; padding: 0; background: #1a1a1a; display: flex; justify-content: center; align-items: center; height: 100vh; }
        .image-container { width: 200px; height: 200px; background: linear-gradient(45deg, #10b981, #059669); border-radius: 10px; display: flex; justify-content: center; align-items: center; color: white; font-size: 72px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <div class="image-container">
        ${letter.toUpperCase()}
    </div>
</body>
</html>`;
  
  // Create an HTML file that can be viewed
  createPlaceholderFile(filePath.replace('.png', '.html'), imageContent);
  
  // Also create a minimal PNG header for the original file
  const pngHeader = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
    0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0xE2, 0x21, 0xBC, 0x33,
    0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
  ]);
  createPlaceholderFile(filePath, pngHeader);
}

function setupSignsFolder() {
  console.log('🚀 Setting up Signs folder structure...\n');

  // Create main directories
  createDirectory(SIGNS_DIR);
  createDirectory(VIDEOS_DIR);
  createDirectory(IMAGES_DIR);

  console.log('\n📝 Creating sample word files...');
  
  // Create sample word files
  SAMPLE_WORDS.forEach(word => {
    createVideoPlaceholder(path.join(VIDEOS_DIR, `${word}.mp4`));
    createImagePlaceholder(path.join(IMAGES_DIR, `${word}.png`));
  });

  console.log('\n📝 Creating sample letter files...');
  
  // Create sample letter files
  SAMPLE_LETTERS.forEach(letter => {
    createVideoPlaceholder(path.join(VIDEOS_DIR, `${letter}.mp4`));
    createImagePlaceholder(path.join(IMAGES_DIR, `${letter}.png`));
  });

  console.log('\n✅ Setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Replace placeholder files with actual sign videos and images');
  console.log('2. Test the SignTranslator component with words like "hello world"');
  console.log('3. Test with letters like "abc"');
  console.log('\n📁 Folder structure created:');
  console.log(`   ${SIGNS_DIR}/`);
  console.log(`   ├── videos/ (${SAMPLE_WORDS.length + SAMPLE_LETTERS.length} files)`);
  console.log(`   └── images/ (${SAMPLE_WORDS.length + SAMPLE_LETTERS.length} files)`);
}

// Run the setup
if (require.main === module) {
  setupSignsFolder();
}

module.exports = { setupSignsFolder };
