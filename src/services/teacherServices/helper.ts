import { SessionPlan } from "../../types";
import { Question } from "./types";

export const transformSessionPlanResponse = (data: any): SessionPlan[] => {
  return data.lesson_plan.map((session: any) => ({
    sessionNumber: session.sessionNumber,
    title: session.title,
    summary: session.summary,
    duration: session.duration,
    objectives: session.objectives,
  }));
};

export const transformQuestionsResponse = (data: any): Question[] => {
  const questionsFromResponse = data.data.questions.questions;
  const transformedQuestions: Question[] = questionsFromResponse.map(
    (q: any) => ({
      id: q.id,
      questionText: q.questionText || q.question || "",
      questionType: q.questionType,
      type: mapQuestionType(q.questionType),
      options: q.options || [],
      correctAnswer: q.correctAnswer || "",
      marks: q.marks,
      difficultyLevel: q.difficultyLevel,
      chapterReference: q.chapterReference,
      explanation: q.explanation,
    })
  );
  return transformedQuestions;
};

export const transformSessionDetailsResponse = (data: any): any => {
  console.log(data);
  debugger;
  return {};
};

export const mapQuestionType = (questionType: string): Question["type"] => {
  switch (questionType.toLowerCase()) {
    case "mcq":
      return "multiple-choice";
    case "short answer":
      return "short-answer";
    case "long answer":
      return "long-answer";
    case "application":
      return "long-answer"; // Map application to long-answer
    default:
      return "multiple-choice";
  }
};
