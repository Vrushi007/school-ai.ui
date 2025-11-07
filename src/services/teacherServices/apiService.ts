import { SessionPlan } from "../../types";
import { makePostRequest } from "../baseService";
import {
  generateFallbackQuestions,
  generateFallbackSessionDetail,
  generateFallbackSessionPlan,
} from "../fallbackApis/fallbackApiCalls";
import {
  mapQuestionType,
  transformQuestionsResponse,
  transformSessionPlanResponse,
} from "./helper";
import {
  Question,
  QuestionGenerationRequest,
  SessionDetailRequest,
  SessionPlanRequest,
} from "./types";

const DEFAULT_SESSION_DURATION =
  process.env.REACT_APP_DEFAULT_SESSION_DURATION || "40 minutes";

export const generateSessionPlan = async (
  request: SessionPlanRequest
): Promise<SessionPlan[]> => {
  const { classLevel, subject, chapter, numberOfSessions } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  try {
    const requestBody = {
      subject_name: subjectName,
      class_name: className,
      chapter_title: chapter.title,
      number_of_sessions: numberOfSessions,
      default_session_duration: DEFAULT_SESSION_DURATION,
    };

    const data = await makePostRequest(
      "/api/generate-lesson-plan",
      requestBody
    );

    // Transform the response to match our SessionPlan interface and return
    const sessionPlans = transformSessionPlanResponse(data);
    return sessionPlans;
  } catch (error) {
    console.error("Error generating session plan:", error);
    // Fallback: Generate mock session plans if API fails
    const sessionPlans = generateFallbackSessionPlan();
    return transformSessionPlanResponse(sessionPlans.data);
  }
};

// Generate detailed content for a specific session
export const generateSessionDetail = async (
  request: SessionDetailRequest
): Promise<string> => {
  const { classLevel, subject, sessionPlan } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  try {
    const requestBody = {
      session_data: {
        session_number: sessionPlan.sessionNumber,
        title: sessionPlan.title,
        summary: sessionPlan.summary,
        duration: sessionPlan.duration,
        objectives: sessionPlan.objectives,
      },
      subject_name: subjectName,
      class_name: className,
    };

    const data = await makePostRequest(
      "/api/generate-detailed-content-for-session",
      requestBody
    );

    // Return the structured session content as JSON/ Stringified JSON
    const sessionContent = data.content;
    return sessionContent;
  } catch (error) {
    console.error("Error generating session detail:", error);
    // Fallback: Return structured content as JSON string
    const fallbackResponse = generateFallbackSessionDetail();
    return JSON.stringify(fallbackResponse.data.session_content);
  }
};

// Generate questions for a question paper
export const generateQuestions = async (
  request: QuestionGenerationRequest
): Promise<Question[]> => {
  const { classLevel, subject, chapter, questionRequirements } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  try {
    const requestBody = {
      class_name: className,
      subject_name: subjectName,
      chapters: [chapter.title],
      question_requirements: questionRequirements,
    };

    const data = await makePostRequest("/api/generate-questions", requestBody);

    // Transform the response to match our Question interface
    const questions: Question[] = data.questions.questions.map((q: any) => ({
      id: q.id.toString(),
      questionText: q.questionText,
      questionType: q.questionType,
      type: mapQuestionType(q.questionType),
      question: q.questionText, // For backward compatibility
      options: q.options,
      correctAnswer: q.correctAnswer,
      marks: q.marks,
      difficulty: q.difficultyLevel,
      difficultyLevel: q.difficultyLevel,
      chapterReference: q.chapterReference,
      explanation: q.explanation,
    }));

    return questions;
  } catch (error) {
    console.error("Error generating questions:", error);
    // Fallback: Generate mock questions if API fails
    return transformQuestionsResponse(generateFallbackQuestions());
  }
};
