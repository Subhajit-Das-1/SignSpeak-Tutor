"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Volume2 } from "lucide-react";
import SignTranslator from "./SignTranslator";

export default function TextToSign() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    
    setIsTranslating(true);
    setTranslatedText(text.trim());
    setIsTranslating(false);
  };

  const handleTranslationComplete = () => {
    console.log("Translation sequence completed");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">
          Text to Sign Translation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type a word or sentence..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleTranslate();
              }
            }}
          />
          <Button variant="outline" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Sign Translator Component */}
        <SignTranslator 
          text={translatedText} 
          onComplete={handleTranslationComplete}
        />
        
        <div className="flex justify-end">
          <Button 
            onClick={handleTranslate}
            disabled={!text.trim() || isTranslating}
            className="gap-2"
          >
            <Volume2 className="h-4 w-4" />
            {isTranslating ? "Translating..." : "Translate"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
