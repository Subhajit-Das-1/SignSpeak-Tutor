"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Coffee, Hand, Users, Building, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LearningModules() {
  const { t } = useLanguage();

  const modules = [
    {
      title: t('greetings'),
      icon: Hand,
      description: t('greetingsDesc'),
    },
    {
      title: t('dailyEssentials'),
      icon: Coffee,
      description: t('dailyEssentialsDesc'),
    },
    {
      title: t('familyAndPeople'),
      icon: Users,
      description: t('familyAndPeopleDesc'),
    },
    {
      title: t('alphabets'),
      icon: BookOpen,
      description: t('alphabetsDesc'),
    },
    {
      title: t('actionWords'),
      icon: Move,
      description: t('actionWordsDesc'),
    },
    {
      title: t('places'),
      icon: Building,
      description: t('placesDesc'),
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold font-headline text-primary">
        {t('learningModules')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <module.icon className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline">{module.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{module.description}</p>
            </CardContent>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t('startLearning')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center pt-4">
        <Button>
          {t('exploreAllModules')}
        </Button>
      </div>
    </section>
  );
}
