"use client";

import Stats from "@/components/dashboard/Stats";
import ReviewSigns from "@/components/dashboard/ReviewSigns";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from '@/contexts/LanguageContext';

export default function DashboardPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto">
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary">
            {t('progressOverview')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('keepTrackJourney')}
          </p>
        </header>

        <Stats />

        <Separator />

        <ReviewSigns />
      </div>
    </div>
  );
}
