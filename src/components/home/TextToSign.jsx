"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Volume2 } from "lucide-react";

export default function TextToSign() {
  const [text, setText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    
    setIsTranslating(true);
    // TODO: Implement translation logic
    setTimeout(() => {
      setIsTranslating(false);
    }, 2000);
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
          />
          <Button variant="outline" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="min-h-[400px] bg-muted/20 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            Your sign animation will appear here
          </p>
        </div>
        
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
