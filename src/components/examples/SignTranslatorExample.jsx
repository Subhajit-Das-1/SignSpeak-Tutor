"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignTranslator from "@/components/home/SignTranslator";

export default function SignTranslatorExample() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    if (!text.trim()) return;
    setTranslatedText(text.trim());
  };

  const handleComplete = () => {
    console.log("Translation sequence completed!");
    // You can add additional logic here, such as:
    // - Showing a completion message
    // - Logging analytics
    // - Triggering next lesson
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SignTranslator Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This example demonstrates the SignTranslator component in action. 
            Type a word or sentence and click translate to see the sign sequence.
          </p>
          
          <div className="flex gap-2">
            <Input
              placeholder="Try: 'hello world' or 'abc'..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleTranslate();
                }
              }}
              className="flex-1"
            />
            <Button onClick={handleTranslate} disabled={!text.trim()}>
              Translate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SignTranslator Component */}
      <SignTranslator 
        text={translatedText} 
        onComplete={handleComplete}
      />

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            To test this component, you need to add sign files to your <code>public/signs/</code> directory:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Create folders: <code>public/signs/videos/</code> and <code>public/signs/images/</code></li>
            <li>Add video files: <code>hello.mp4</code>, <code>world.mp4</code>, <code>a.mp4</code>, etc.</li>
            <li>Add image files: <code>hello.png</code>, <code>world.png</code>, <code>a.png</code>, etc.</li>
            <li>Try typing "hello world" to see word-level signs</li>
            <li>Try typing "abc" to see letter-level signs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

