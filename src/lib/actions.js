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

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function createPlaceholderSvgDataUri(label) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" rx="12" fill="#eef2ff" stroke="#c7d2fe" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#4f46e5">${label}</text>
  <rect x="140" y="130" width="120" height="40" fill="#e5e7eb" rx="8" />
  <text x="200" y="155" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#9ca3af">400 × 300</text>
</svg>`;
  const encoded = encodeURIComponent(svg).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

function generateFallbackQuiz({ signs, numQuestions }) {
  const pool = signs && signs.length ? signs : sampleSigns;
  const questions = [];

  const uniqueTargets = shuffle(pool).slice(0, Math.min(numQuestions, pool.length));

  for (const target of uniqueTargets) {
    const distractors = shuffle(pool.filter(s => s.word !== target.word)).slice(0, 3);
    const options = shuffle([target.word, ...distractors.map(d => d.word)]);
    const correctAnswerIndex = options.indexOf(target.word);
    questions.push({
      questionText: `Which sign means '${target.word}'?`,
      options,
      correctAnswerIndex,
      signAnimationDataUri: createPlaceholderSvgDataUri(target.word),
    });
  }

  // If pool was too small, pad up to requested numQuestions with repeats
  while (questions.length < numQuestions && pool.length > 0) {
    const target = pool[questions.length % pool.length];
    const distractors = shuffle(pool.filter(s => s.word !== target.word)).slice(0, 3);
    const options = shuffle([target.word, ...distractors.map(d => d.word)]);
    const correctAnswerIndex = options.indexOf(target.word);
    questions.push({
      questionText: `Which sign means '${target.word}'?`,
      options,
      correctAnswerIndex,
      signAnimationDataUri: createPlaceholderSvgDataUri(target.word),
    });
  }

  return { questions };
}

export async function getQuizAction() {
  try {
    const quiz = await generateQuiz({
      signs: sampleSigns,
      numQuestions: 5,
    });
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      return generateFallbackQuiz({ signs: sampleSigns, numQuestions: 5 });
    }
    return quiz;
  } catch (error) {
    console.error("Error generating quiz:", error);
    // Use local fallback so the page never fails to render
    return generateFallbackQuiz({ signs: sampleSigns, numQuestions: 5 });
  }
}
