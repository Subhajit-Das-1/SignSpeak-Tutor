"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignTestGenerator() {
  const [text, setText] = useState("");
  const [generatedSigns, setGeneratedSigns] = useState([]);

  const generateTestSigns = () => {
    if (!text.trim()) return;

    const words = text.toLowerCase().trim().split(/\s+/);
    const signs = [];

    words.forEach(word => {
      // Add word sign
      signs.push({
        type: 'word',
        value: word,
        displayText: word,
        videoPath: `/signs/videos/${word}.mp4`,
        imagePath: `/signs/images/${word}.png`
      });

      // Add letter signs
      word.split('').forEach(letter => {
        signs.push({
          type: 'letter',
          value: letter,
          displayText: letter,
          videoPath: `/signs/videos/${letter}.mp4`,
          imagePath: `/signs/images/${letter}.png`
        });
      });
    });

    setGeneratedSigns(signs);
  };

  const createTestFiles = async () => {
    const words = text.toLowerCase().trim().split(/\s+/);
    const allSigns = [];

    // Collect all unique signs
    words.forEach(word => {
      allSigns.push(word);
      word.split('').forEach(letter => {
        if (!allSigns.includes(letter)) {
          allSigns.push(letter);
        }
      });
    });

    // Create test files for each sign
    for (const sign of allSigns) {
      try {
        // Create test image (SVG)
        const imageSvg = `
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
        const videoSvg = `
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

        // Save files (this would need a server endpoint in a real app)
        console.log(`Generated test files for: ${sign}`);
        console.log('Image SVG:', imageSvg);
        console.log('Video SVG:', videoSvg);
        
      } catch (error) {
        console.error(`Error generating files for ${sign}:`, error);
      }
    }

    alert(`Generated test content for ${allSigns.length} signs. Check console for SVG code.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sign Test Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This component helps generate test content for the SignTranslator. 
            Enter text to see what signs would be generated.
          </p>
          
          <div className="flex gap-2">
            <Input
              placeholder="Enter text to test..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1"
            />
            <Button onClick={generateTestSigns} disabled={!text.trim()}>
              Generate Signs
            </Button>
            <Button onClick={createTestFiles} disabled={!text.trim()} variant="outline">
              Create Test Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {generatedSigns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Signs ({generatedSigns.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {generatedSigns.map((sign, index) => (
                <div key={index} className="border rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    {sign.type} - {sign.displayText}
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white font-bold text-2xl mb-2">
                    {sign.displayText.toUpperCase()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {sign.videoPath}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

