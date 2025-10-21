import {
  Chapter,
  ClassLevel,
  SessionPlan,
  Subject,
  UserType,
} from "../../types";

// Question Generation Interface - Updated to match your API response
export interface Question {
  id: string | number;
  questionText: string;
  questionType: string;
  type:
    | "multiple-choice"
    | "short-answer"
    | "long-answer"
    | "true-false"
    | "MCQ"
    | "Short Answer"
    | "Long Answer"
    | "Application";
  question?: string; // For backward compatibility
  options?: string[]; // For multiple choice
  correctAnswer?: string;
  marks: number;
  difficulty?: string;
  difficultyLevel?: string;
  chapterReference?: string;
  explanation?: string;
}

export interface QuestionGenerationRequest {
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
  questionRequirements: string;
}

export interface SessionPlanRequest {
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
  numberOfSessions: number;
}

// Interface for session detail requests
export interface SessionDetailRequest {
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
  sessionPlan: SessionPlan;
}
