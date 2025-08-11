'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating quizzes based on learned signs.
 *
 * @fileOverview This file defines a Genkit flow for generating quizzes related to Indian Sign Language (ISL).
 * It includes functions for generating quiz questions, defining input and output schemas,
 * and integrating with the Genkit AI platform.
 *
 * @exports generateQuiz - A function to generate a quiz based on provided signs.
 */

import {ai} from '@/ai/genkit';

// Exported function to generate a quiz
export async function generateQuiz(input) {
  return quizGenerationFlow(input);
}

// Define the prompt for quiz generation
const quizPrompt = ai.definePrompt({
  name: 'quizPrompt',
  input: {
    schema: {
      type: 'object',
      properties: {
        signs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              word: { type: 'string', description: 'The word being signed.' },
              animationDataUri: { 
                type: 'string', 
                description: 'The animation data URI for the sign, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.' 
              }
            }
          },
          description: 'An array of signs (word and animation) to generate a quiz from.'
        },
        numQuestions: { 
          type: 'number', 
          minimum: 1, 
          maximum: 10, 
          default: 5, 
          description: 'The number of quiz questions to generate (max 10).' 
        }
      }
    }
  },
  output: {
    schema: {
      type: 'object',
      properties: {
        questions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              questionText: { type: 'string', description: 'The text of the quiz question.' },
              options: { type: 'array', items: { type: 'string' }, description: 'The possible answers for the question.' },
              correctAnswerIndex: { type: 'number', description: 'The index of the correct answer in the options array.' },
              signAnimationDataUri: { 
                type: 'string', 
                description: 'The animation data URI for the sign related to the question, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.' 
              }
            }
          },
          description: 'An array of quiz questions.'
        }
      }
    }
  },
  prompt: `You are an AI quiz generator for Indian Sign Language (ISL).

Given a list of signs (word and animation data), generate a quiz with {{numQuestions}} questions.
Each question should have 4 answer options, with only one correct answer.

Signs:
{{#each signs}}
  - Word: {{this.word}}
{{/each}}

Output the quiz questions in the following JSON format:

Output:
`
});

// Define the Genkit flow for quiz generation
const quizGenerationFlow = ai.defineFlow(
  {
    name: 'quizGenerationFlow',
    inputSchema: {
      type: 'object',
      properties: {
        signs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              word: { type: 'string', description: 'The word being signed.' },
              animationDataUri: { 
                type: 'string', 
                description: 'The animation data URI for the sign, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.' 
              }
            }
          },
          description: 'An array of signs (word and animation) to generate a quiz from.'
        },
        numQuestions: { 
          type: 'number', 
          minimum: 1, 
          maximum: 10, 
          default: 5, 
          description: 'The number of quiz questions to generate (max 10).' 
        }
      }
    },
    outputSchema: {
      type: 'object',
      properties: {
        questions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              questionText: { type: 'string', description: 'The text of the quiz question.' },
              options: { type: 'array', items: { type: 'string' }, description: 'The possible answers for the question.' },
              correctAnswerIndex: { type: 'number', description: 'The index of the correct answer in the options array.' },
              signAnimationDataUri: { 
                type: 'string', 
                description: 'The animation data URI for the sign related to the question, must include MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.' 
              }
            }
          },
          description: 'An array of quiz questions.'
        }
      }
    }
  },
  async (input) => {
    const {output} = await quizPrompt(input);
    return output;
  }
);
