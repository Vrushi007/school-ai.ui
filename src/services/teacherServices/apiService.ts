import { API_AI_URL, API_CONTENT_URL, makeAuthenticatedPostRequest } from "../baseService";
import { mapQuestionType } from "./helper";
import {
  Question,
  QuestionGenerationRequest,
  KPGroupingRequest,
  KPGroupingResponse,
  SessionSummaryRequest,
  SessionSummaryResponse,
  SessionDetailContentRequest,
  SessionDetailContentResponse,
} from "./types";

// Generate detailed content for a specific session
export const generateSessionDetail = async (
  request: SessionDetailContentRequest
): Promise<SessionDetailContentResponse> => {
  try {
    const data = await makeAuthenticatedPostRequest(
      `${API_CONTENT_URL}/lesson-plans/get-session-detailed-content`,
      request
    );

    return data as SessionDetailContentResponse;
  } catch (error) {
    console.error("Error generating session detail:", error);
    throw error;
  }
};

// Generate questions for a question paper
export const generateQuestions = async (
  request: QuestionGenerationRequest
): Promise<Question[]> => {
  const { classLevel, subject, chapters, totalMarks } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  try {
    const requestBody = {
      class_name: className,
      subject_name: subjectName,
      chapters: chapters.map((chapter) => chapter.title),
      total_marks: totalMarks,
    };

    const data = await makeAuthenticatedPostRequest(
      `${API_AI_URL}/api/generate-questions`,
      requestBody
    );

    // Transform the new API response format
    const questionPaper = (data as any).data.questions;
    const questions: Question[] = [];
    // Process each section
    questionPaper.sections.forEach((section: any) => {
      section.questions.forEach((questionItem: any) => {
        if (questionItem.subQuestions) {
          // Case-based question with sub-questions
          const mainQuestion: Question = {
            id: `${section.sectionName}_${questionItem.qNo}`,
            questionText: questionItem.caseText || questionItem.questionText,
            questionType: questionItem.type,
            type: mapQuestionType(questionItem.type || ""),
            question: questionItem.caseText || questionItem.questionText,
            marks:
              questionItem.marks ||
              questionItem.subQuestions.reduce(
                (sum: number, sq: any) => sum + sq.marks,
                0
              ),
            difficulty: questionItem.difficulty,
            difficultyLevel: questionItem.difficulty,
            sectionName: section.sectionName,
            sectionDescription: section.description,
            caseText: questionItem.caseText,
            subQuestions: questionItem.subQuestions.map((sq: any) => ({
              subQNo: sq.subQNo,
              questionText: sq.questionText,
              marks: sq.marks,
              answerHints: sq.answerHints,
            })),
          };
          questions.push(mainQuestion);
        } else {
          // Regular question
          const question: Question = {
            id: `${section.sectionName}_${questionItem.qNo}`,
            questionText: questionItem.questionText,
            questionType: questionItem.type,
            type: mapQuestionType(questionItem.type),
            question: questionItem.questionText,
            options: questionItem.options,
            correctAnswer: questionItem.correctAnswer,
            marks: questionItem.marks,
            difficulty: questionItem.difficulty,
            difficultyLevel: questionItem.difficulty,
            sectionName: section.sectionName,
            sectionDescription: section.description,
          };
          questions.push(question);
        }
      });
    });

    return questions;
  } catch (error) {
    console.error("Error generating questions:", error);
    throw error;
  }
};

// Group KPs into sessions
export const groupKPsIntoSessions = async (
  request: KPGroupingRequest
): Promise<KPGroupingResponse> => {
  try {
    const data = await makeAuthenticatedPostRequest(
      `${API_CONTENT_URL}/lesson-plans/group-kps-into-sessions`,
      request
    );

    return data as KPGroupingResponse;
  } catch (error) {
    console.error("Error grouping KPs into sessions:", error);
    throw error;
  }
};

// Generate session summary
export const generateSessionSummary = async (
  request: SessionSummaryRequest
): Promise<SessionSummaryResponse> => {
  try {
    const data = await makeAuthenticatedPostRequest(
      `${API_CONTENT_URL}/lesson-plans/generate-session-summary`,
      request
    );

    return data as SessionSummaryResponse;
  } catch (error) {
    console.error("Error generating session summary:", error);
    throw error;
  }
};
