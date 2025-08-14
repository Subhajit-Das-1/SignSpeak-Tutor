import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { text } = await request.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const words = text.toLowerCase().trim().split(/\s+/);
    const allSigns = [];

    // Collect all unique signs
    words.forEach(word => {
      if (!allSigns.includes(word)) {
        allSigns.push(word);
      }
      word.split('').forEach(letter => {
        if (!allSigns.includes(letter)) {
          allSigns.push(letter);
        }
      });
    });

    const signsDir = path.join(process.cwd(), 'public', 'signs');
    const videosDir = path.join(signsDir, 'videos');
    const imagesDir = path.join(signsDir, 'images');

    // Ensure directories exist
    if (!fs.existsSync(signsDir)) fs.mkdirSync(signsDir, { recursive: true });
    if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

    const generatedFiles = [];

    for (const sign of allSigns) {
      // Create test image (SVG)
      const imageSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="url(#grad1)" rx="10"/>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="100" y="120" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">${sign.toUpperCase()}</text>
</svg>`;

      // Create test video (animated SVG)
      const videoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="300" fill="url(#grad2)" rx="15"/>
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="150" y="180" font-family="Arial, sans-serif" font-size="96" font-weight="bold" text-anchor="middle" fill="white">
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
    ${sign.toUpperCase()}
  </text>
</svg>`;

      // Save image file
      const imagePath = path.join(imagesDir, `${sign}.svg`);
      fs.writeFileSync(imagePath, imageSvg);
      generatedFiles.push(`/signs/images/${sign}.svg`);

      // Save video file
      const videoPath = path.join(videosDir, `${sign}.svg`);
      fs.writeFileSync(videoPath, videoSvg);
      generatedFiles.push(`/signs/videos/${sign}.svg`);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Generated ${generatedFiles.length} test files for ${allSigns.length} signs`,
      files: generatedFiles,
      signs: allSigns
    });

  } catch (error) {
    console.error('Error generating test signs:', error);
    return NextResponse.json({ error: 'Failed to generate test signs' }, { status: 500 });
  }
}

