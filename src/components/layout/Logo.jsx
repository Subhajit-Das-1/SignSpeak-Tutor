import Link from "next/link";
import { Hand } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Hand className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground whitespace-nowrap">
        SignSpeak Tutor
      </span>
    </Link>
  );
}

