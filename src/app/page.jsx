import LearningModules from '@/components/home/LearningModules';
import TextToSign from '@/components/home/TextToSign';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary">
            Welcome to SignSpeak Tutor
          </h1>
          <p className="text-lg text-muted-foreground">
            Your AI-powered guide to learning Indian Sign Language. Type or speak a word to get started!
          </p>
        </header>
        <TextToSign />
        <Separator />
        <LearningModules />
      </div>
    </div>
  );
}
