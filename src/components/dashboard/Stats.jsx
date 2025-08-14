"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, Flame, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('signsLearned'),
      value: "78",
      icon: BookMarked,
    },
    {
      title: t('currentStreak'),
      value: "🔥 5 days",
      icon: Flame,
    },
    {
      title: t('quizAccuracy'),
      value: "85%",
      icon: Target,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
