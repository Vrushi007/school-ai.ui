import { makePostRequest } from "../baseService";
import { QuestionRequest, AnswerResponse } from "./types";

/**
 * Service for handling student Q&A functionality
 */

/**
 * Ask a question and get an AI-generated answer
 * @param questionData - The question and conversation history
 * @returns Promise with the answer response
 */
export const askQuestion = async (
  questionData: QuestionRequest
): Promise<AnswerResponse> => {
  try {
    const response = await makePostRequest("/api/get-answers", questionData);
    return (response as any).response as AnswerResponse;
  } catch (error) {
    console.error("Error asking question:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to get answer. Please try again."
    );
  }
};

/**
 * Helper function to create a question request object
 * @param question - The user's question
 * @param conversationHistory - Previous conversation messages
 * @returns QuestionRequest object
 */
export const createQuestionRequest = (
  question: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>
): QuestionRequest => {
  return {
    question: question.trim(),
    conversationHistory: conversationHistory,
  };
};
