import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain } from "lucide-react";

const reviewSigns = {
  favorites: [
    { word: "Friend", url: "https://placehold.co/150x100?text=Friend" },
    { word: "Coffee", url: "https://placehold.co/150x100?text=Coffee" },
    { word: "Book", url: "https://placehold.co/150x100?text=Book" },
  ],
  practice: [
    { word: "Sorry", url: "https://placehold.co/150x100?text=Sorry" },
    { word: "Important", url: "https://placehold.co/150x100?text=Important" },
    { word: "Explain", url: "https://placehold.co/150x100?text=Explain" },
  ],
};

function SignCard({ sign }: { sign: { word: string; url: string } }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Image
        src={sign.url}
        alt={sign.word}
        width={150}
        height={100}
        className="w-full"
        data-ai-hint="sign language word"
      />
      <p className="p-2 text-center font-medium bg-secondary/30">
        {sign.word}
      </p>
    </div>
  );
}

export default function ReviewSigns() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Heart className="text-red-500" /> Your Favorite Signs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reviewSigns.favorites.map((sign) => (
              <SignCard key={sign.word} sign={sign} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Brain className="text-blue-500" /> Signs to Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reviewSigns.practice.map((sign) => (
              <SignCard key={sign.word} sign={sign} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
