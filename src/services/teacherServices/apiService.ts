import { SessionPlan } from "../../types";
import { API_AI_URL, API_CONTENT_URL, makePostRequest } from "../baseService";
import { mapQuestionType } from "./helper";
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
  const { chapter, numberOfSessions } = request;

  // Extract IDs from the chapter/subject/class data
  // Assuming the chapter object has these IDs or we need to get them from the parent objects
  const boardId = (request as any).board_id || (chapter as any).board_id;
  const classId = (request as any).class_id || (chapter as any).class_id;
  const subjectId = (request as any).subject_id || (chapter as any).subject_id;
  const chapterId =
    typeof chapter.id === "string" ? parseInt(chapter.id) : chapter.id;

  try {
    const data = await makePostRequest(
      `${API_CONTENT_URL}/lesson-plans/generate`,
      {
        board_id: boardId,
        class_id: classId,
        subject_id: subjectId,
        chapter_id: chapterId,
        planned_sessions: numberOfSessions,
      }
    );
    debugger;

    return (data as { lessonPlan: SessionPlan[] }).lessonPlan;
  } catch (error) {
    console.error("Error generating session plan:", error);
    throw error;
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
      `${API_AI_URL}/api/generate-detailed-content-for-session`,
      requestBody
    );

    // Return the structured session content as JSON/ Stringified JSON
    const sessionContent = (data as { content: string }).content;
    return sessionContent;
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

    const data = await makePostRequest(
      `${API_AI_URL}/api/generate-questions`,
      requestBody
    );

    // Transform the new API response format
    const questionPaper = (data as any).questions;
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
