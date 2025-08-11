"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Award, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizClient({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState("unanswered");
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
      setAnswerState("correct");
    } else {
      setAnswerState("incorrect");
    }
  };

  const handleNextQuestion = () => {
    setAnswerState("unanswered");
    setSelectedOption(null);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setAnswerState("unanswered");
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8">
        <Award className="h-24 w-24 text-accent mb-4" />
        <h2 className="text-3xl font-bold font-headline mb-2">Quiz Complete!</h2>
        <p className="text-xl text-muted-foreground mb-6">
          You scored{" "}
          <strong className="text-primary">{score}</strong> out of{" "}
          <strong className="text-primary">{totalQuestions}</strong>
        </p>
        <Button onClick={handleRestart}>
          <RotateCw className="mr-2 h-4 w-4" />
          Play Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <Progress value={progress} />
      </div>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-lg mb-4">{currentQuestion.questionText}</p>
          <Image
            src="https://placehold.co/400x300.png"
            alt="Sign language animation"
            width={400}
            height={300}
            className="rounded-lg mx-auto border"
            data-ai-hint="sign language hand"
          />
        </CardContent>
      </Card>

      <RadioGroup
        value={selectedOption?.toString()}
        onValueChange={(value) => setSelectedOption(Number(value))}
        disabled={answerState !== "unanswered"}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctAnswerIndex;
          const isSelected = index === selectedOption;

          return (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={cn(
                "flex items-center p-4 border rounded-lg cursor-pointer transition-colors",
                answerState === "unanswered" && "hover:bg-accent/20",
                answerState !== "unanswered" && isCorrect && "border-green-500 bg-green-500/10",
                answerState !== "unanswered" && isSelected && !isCorrect && "border-red-500 bg-red-500/10",
                answerState !== "unanswered" && "cursor-not-allowed"
              )}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <span className="ml-4 text-base">{option}</span>
              {answerState !== "unanswered" && isCorrect && <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />}
              {answerState !== "unanswered" && isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 text-red-500" />}
            </Label>
          );
        })}
      </RadioGroup>

      <div className="flex justify-end">
        {answerState === "unanswered" ? (
          <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        )}
      </div>
    </div>
  );
}

