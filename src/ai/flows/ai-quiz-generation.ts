'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating quizzes based on learned signs.
 *
 * @fileOverview This file defines a Genkit flow for generating quizzes related to Indian Sign Language (ISL).
 * It includes functions for generating quiz questions, defining input and output schemas,
 * and integrating with the Genkit AI platform.
 *
 * @exports generateQuiz - A function to generate a quiz based on provided signs.
 * @exports QuizGenerationInput - The input type for the generateQuiz function.
 * @exports QuizGenerationOutput - The output type for the generateQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for quiz generation
const QuizGenerationInputSchema = z.object({
  signs: z.array(
    z.object({
      word: z.string().describe('The word being signed.'),
      animationDataUri: z
        .string()
        .describe(
          'The animation data URI for the sign, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
        ),
    })
  ).describe('An array of signs (word and animation) to generate a quiz from.'),
  numQuestions: z.number().int().min(1).max(10).default(5).describe('The number of quiz questions to generate (max 10).'),
});
export type QuizGenerationInput = z.infer<typeof QuizGenerationInputSchema>;

// Define the output schema for quiz generation
const QuizGenerationOutputSchema = z.object({
  questions: z.array(
    z.object({
      questionText: z.string().describe('The text of the quiz question.'),
      options: z.array(z.string()).describe('The possible answers for the question.'),
      correctAnswerIndex: z.number().int().describe('The index of the correct answer in the options array.'),
      signAnimationDataUri: z
        .string()
        .optional()
        .describe(
          'The animation data URI for the sign related to the question, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
        ),
    })
  ).describe('An array of quiz questions.'),
});
export type QuizGenerationOutput = z.infer<typeof QuizGenerationOutputSchema>;

// Exported function to generate a quiz
export async function generateQuiz(input: QuizGenerationInput): Promise<QuizGenerationOutput> {
  return quizGenerationFlow(input);
}

// Define the prompt for quiz generation
const quizPrompt = ai.definePrompt({
  name: 'quizPrompt',
  input: {schema: QuizGenerationInputSchema},
  output: {schema: QuizGenerationOutputSchema},
  prompt: `You are an AI quiz generator for Indian Sign Language (ISL).

Given a list of signs (word and animation data), generate a quiz with {{numQuestions}} questions.
Each question should have 4 answer options, with only one correct answer.

Signs:
{{#each signs}}
  - Word: {{this.word}}
{{/each}}


Output the quiz questions in the following JSON format:

Output:
`, // Keep the prompt simple and rely on the schema for formatting
});

// Define the Genkit flow for quiz generation
const quizGenerationFlow = ai.defineFlow(
  {
    name: 'quizGenerationFlow',
    inputSchema: QuizGenerationInputSchema,
    outputSchema: QuizGenerationOutputSchema,
  },
  async input => {
    const {output} = await quizPrompt(input);
    return output!;
  }
);
