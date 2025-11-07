import { SessionDetailContent } from "../../interfaces";
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


// Helper function to parse detail content that can come in multiple formats
export const parseDetailContent = (
  rawContent: any
): SessionDetailContent | null => {
  try {
    // Case 1: Already a parsed JSON object
    if (typeof rawContent === "object" && rawContent !== null) {
      return rawContent as SessionDetailContent;
    }

    // Case 2 & 3: String content - could be stringified JSON or markdown wrapped
    if (typeof rawContent === "string") {
      const content = rawContent.trim();

      // Case 3: Check if the content is wrapped in markdown code block
      const codeBlockRegex = /^```(?:json)?\s*([\s\S]*?)\s*```$/;
      const codeBlockMatch = content.match(codeBlockRegex);

      let jsonString: string;
      if (codeBlockMatch) {
        // Extract JSON from markdown code block
        jsonString = codeBlockMatch[1].trim();
      } else {
        // Case 2: Assume it's direct stringified JSON
        jsonString = content;
      }

      // Parse the JSON string
      const parsed = JSON.parse(jsonString);
      return parsed as SessionDetailContent;
    }

    console.error("Unsupported content type:", typeof rawContent);
    return null;
  } catch (error) {
    console.error("Failed to parse detail content:", error);
    console.error("Raw content type:", typeof rawContent);
    console.error("Raw content:", rawContent);
    return null;
  }
};
