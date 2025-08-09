"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Mic,
  MicOff,
  Volume2,
  Heart,
  RotateCcw,
  FlipHorizontal,
} from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "../ui/badge";

export default function TextToSign() {
  const [text, setText] = useState("");
  const [sign, setSign] = useState<{ word: string; url: string } | null>(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast({
        title: "Browser Not Supported",
        description: "Speech recognition is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText);
      handleTranslate(spokenText);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      toast({
        title: "Speech Recognition Error",
        description:
          "There was an error with speech recognition. Please try again.",
        variant: "destructive",
      });
    };

    recognitionRef.current = recognition;
  }, [toast]);

  const handleListen = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleTranslate = (inputText: string) => {
    const word = inputText.trim().toLowerCase().split(" ")[0];
    if (!word) {
      setSign(null);
      return;
    }
    // In a real app, you'd have a mapping of words to sign animations.
    // Here we'll just use a placeholder.
    setSign({
      word: inputText.trim(),
      url: `https://placehold.co/600x400.png?text=${word}`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="relative">
          <Textarea
            placeholder="Type a word or sentence..."
            className="pr-20 text-lg"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            size="icon"
            variant={isListening ? "destructive" : "outline"}
            className="absolute top-1/2 right-4 -translate-y-1/2"
            onClick={handleListen}
          >
            {isListening ? (
              <MicOff className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
            <span className="sr-only">
              {isListening ? "Stop listening" : "Start listening"}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {sign ? (
          <Card className="bg-secondary/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-2xl font-semibold font-headline text-primary">
                {sign.word}
              </h3>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-4">
              <Image
                src={sign.url}
                alt={`Sign for ${sign.word}`}
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="sign language"
              />
            </CardContent>
            <CardFooter className="flex justify-center gap-2">
              <Button variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" /> Replay
              </Button>
              <Button variant="outline">
                <Badge className="mr-2">0.5x</Badge> Slow-Mo
              </Button>
              <Button variant="outline">
                <FlipHorizontal className="mr-2 h-4 w-4" /> Flip View
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex items-center justify-center min-h-[400px] text-center p-4 bg-muted rounded-lg">
            <p className="text-muted-foreground">
              Your sign animation will appear here.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={() => handleTranslate(text)}>
          <Volume2 className="mr-2 h-4 w-4" /> Translate
        </Button>
      </CardFooter>
    </Card>
  );
}
