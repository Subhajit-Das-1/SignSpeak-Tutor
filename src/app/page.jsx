"use client";

import LearningModules from '@/components/home/LearningModules';
import TextToSign from '@/components/home/TextToSign';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary">
            {t('welcomeTitle')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('welcomeSubtitle')}
          </p>
        </header>
        <TextToSign />
        <Separator />
        <LearningModules />
      </div>
    </div>
  );
}
