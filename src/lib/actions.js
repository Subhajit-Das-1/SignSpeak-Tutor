"use server";

import { generateQuiz } from "@/ai/flows/ai-quiz-generation";

// In a real app, this data would come from a database of learned signs.
const sampleSigns = [
  { word: "Hello", animationDataUri: "data:," },
  { word: "Goodbye", animationDataUri: "data:," },
  { word: "Thank you", animationDataUri: "data:," },
  { word: "Sorry", animationDataUri: "data:," },
  { word: "Yes", animationDataUri: "data:," },
  { word: "No", animationDataUri: "data:," },
  { word: "Help", animationDataUri: "data:," },
  { word: "Water", animationDataUri: "data:," },
  { word: "Food", animationDataUri: "data:," },
  { word: "Friend", animationDataUri: "data:," },
];

export async function getQuizAction() {
  try {
    const quiz = await generateQuiz({
      signs: sampleSigns,
      numQuestions: 5,
    });
    return quiz;
  } catch (error) {
    console.error("Error generating quiz:", error);
    return null;
  }
}
