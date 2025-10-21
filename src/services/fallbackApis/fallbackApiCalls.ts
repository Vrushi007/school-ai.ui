import {
  DETAILED_SESSION_CONTENT_MOCK_RESPONSE,
  GENERATED_QUESTIONS_MOCK_RESPONSE,
  SESSION_PLAN_MOCK_RESPONSE,
} from "./mockResponse";

// Fallback function to generate mock session plans if OpenAI API fails
export const generateFallbackSessionPlan = (): any =>
  SESSION_PLAN_MOCK_RESPONSE;

export const generateFallbackSessionDetail = (): any =>
  DETAILED_SESSION_CONTENT_MOCK_RESPONSE;

export const generateFallbackQuestions = (): any =>
  GENERATED_QUESTIONS_MOCK_RESPONSE;
