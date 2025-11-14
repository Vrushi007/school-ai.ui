import {
  Chapter,
  ClassLevel,
  SessionPlan,
  Subject,
  UserType,
} from "../../types";

// Sub-question interface for case-based questions
export interface SubQuestion {
  subQNo: string;
  questionText: string;
  marks: number;
  answerHints?: string;
}

// Individual question interface
export interface QuestionItem {
  qNo: number;
  questionText: string;
  marks: number;
  difficulty: string;
  type: string;
  options?: string[];
  correctAnswer?: string;
  answerHints?: string;
  caseText?: string; // For case-based questions
  subQuestions?: SubQuestion[]; // For case-based questions
}

// Section interface
export interface QuestionSection {
  sectionName: string;
  description: string;
  totalMarks: number;
  questions: QuestionItem[];
}

// Blueprint interface
export interface QuestionBlueprint {
  marksDistribution: Record<string, number>;
  difficultySplit: Record<string, number>;
  skillsCovered: string[];
}

// Main question paper response interface
export interface QuestionPaperResponse {
  class: string;
  subject: string;
  chapter: string;
  totalMarks: number;
  sections: QuestionSection[];
  blueprint: QuestionBlueprint;
  instructions: string[];
}

// Legacy Question interface for backward compatibility
export interface Question {
  id: string | number;
  questionText: string;
  questionType: string;
  type: string;
  question?: string; // For backward compatibility
  options?: string[]; // For multiple choice
  correctAnswer?: string;
  marks: number;
  difficulty?: string;
  difficultyLevel?: string;
  chapterReference?: string;
  explanation?: string;
  sectionName?: string;
  sectionDescription?: string;
  caseText?: string;
  subQuestions?: SubQuestion[];
}

export interface QuestionGenerationRequest {
  classLevel: ClassLevel;
  subject: Subject;
  chapters: Chapter[];
  totalMarks: number;
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
