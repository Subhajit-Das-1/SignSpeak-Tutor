"use client";

import { useState, useEffect, useTransition } from "react";
import { getQuizAction } from "@/lib/actions";
import { QuizClient } from "@/components/quiz/QuizClient";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [isPending, startTransition] = useTransition();

  const loadQuiz = () => {
    startTransition(async () => {
      const data = await getQuizAction();
      setQuizData(data);
    });
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary">
          Test Your Knowledge
        </h1>
        <Button onClick={loadQuiz} disabled={isPending}>
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Generate New Quiz"
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Quiz Time!</CardTitle>
        </CardHeader>
        <CardContent>
          {isPending && (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">
                Generating your quiz...
              </p>
            </div>
          )}
          {!isPending && quizData && quizData.questions.length > 0 ? (
            <QuizClient quiz={quizData} key={JSON.stringify(quizData)} />
          ) : (
            !isPending && (
              <div className="text-center py-10">
                <p>Could not generate a quiz. Please try again.</p>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}
