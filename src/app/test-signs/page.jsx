"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignTranslator from "@/components/home/SignTranslator";

export default function TestSignsPage() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResult, setGenerationResult] = useState(null);

  const generateTestFiles = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setGenerationResult(null);

    try {
      const response = await fetch('/api/generate-test-signs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      const result = await response.json();
      setGenerationResult(result);

      if (result.success) {
        // Auto-set the translated text to test the component
        setTranslatedText(text.trim());
      }
    } catch (error) {
      console.error('Error generating test files:', error);
      setGenerationResult({ error: 'Failed to generate test files' });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTranslate = () => {
    if (!text.trim()) return;
    setTranslatedText(text.trim());
  };

  const handleComplete = () => {
    console.log("Translation sequence completed!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Sign Language Test Page</h1>
        <p className="text-muted-foreground">
          Generate test sign files and test the SignTranslator component
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test File Generator */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Test Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter text to generate SVG test files for each word and letter.
            </p>
            
            <div className="space-y-2">
              <Input
                placeholder="Enter text (e.g., 'hello world' or 'abc')..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    generateTestFiles();
                  }
                }}
              />
              <div className="flex gap-2">
                <Button 
                  onClick={generateTestFiles} 
                  disabled={!text.trim() || isGenerating}
                  className="flex-1"
                >
                  {isGenerating ? "Generating..." : "Generate Test Files"}
                </Button>
                <Button 
                  onClick={handleTranslate} 
                  disabled={!text.trim()}
                  variant="outline"
                >
                  Test Translation
                </Button>
              </div>
            </div>

            {generationResult && (
              <div className={`p-3 rounded-lg text-sm ${
                generationResult.success 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {generationResult.success ? (
                  <div>
                    <p className="font-medium">✅ {generationResult.message}</p>
                    <p className="text-xs mt-1">
                      Generated {generationResult.files?.length || 0} files for {generationResult.signs?.length || 0} signs
                    </p>
                  </div>
                ) : (
                  <p className="font-medium">❌ {generationResult.error}</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm">
              <p className="font-medium">Step 1: Generate Test Files</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Enter text like "hello world" or "abc"</li>
                <li>Click "Generate Test Files"</li>
                <li>This creates SVG files in /public/signs/</li>
              </ul>
              
              <p className="font-medium mt-4">Step 2: Test Translation</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Click "Test Translation" or use the component below</li>
                <li>Watch the sign sequence play automatically</li>
                <li>You should see colored squares with letters</li>
              </ul>
              
              <p className="font-medium mt-4">Step 3: Check Console</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Open browser console (F12)</li>
                <li>Look for debug logs showing sign processing</li>
                <li>Check for any errors or missing files</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SignTranslator Component */}
      <Card>
        <CardHeader>
          <CardTitle>SignTranslator Component Test</CardTitle>
        </CardHeader>
        <CardContent>
          <SignTranslator 
            text={translatedText} 
            onComplete={handleComplete}
          />
        </CardContent>
      </Card>

      {/* File Structure Info */}
      <Card>
        <CardHeader>
          <CardTitle>Generated File Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <p>public/signs/</p>
            <p className="ml-4">├── videos/</p>
            <p className="ml-8">├── hello.svg</p>
            <p className="ml-8">├── world.svg</p>
            <p className="ml-8">├── a.svg</p>
            <p className="ml-8">└── ... (more files)</p>
            <p className="ml-4">└── images/</p>
            <p className="ml-8">├── hello.svg</p>
            <p className="ml-8">├── world.svg</p>
            <p className="ml-8">├── a.svg</p>
            <p className="ml-8">└── ... (more files)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

