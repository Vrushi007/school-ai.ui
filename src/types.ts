// Type definitions for the educational platform

export type UserType = "teacher" | "student";

export type ClassLevel = "8th" | "9th" | "10th";

export type Subject =
  | "mathematics"
  | "science"
  | "english"
  | "history"
  | "geography";

export interface User {
  type: UserType;
  name?: string;
}

export interface Chapter {
  id: string;
  title: string;
  subject: Subject;
  classLevel: ClassLevel;
  topics: Topic[];
  description?: string;
}

export interface Topic {
  id: string;
  title: string;
  chapterId: string;
  order: number;
  content?: string;
}

export interface ContentRequest {
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapterId: string;
  topicId?: string;
}

export interface SessionPlan {
  sessionNumber: number;
  title: string;
  summary: string;
  duration: string;
  objectives: string[];
  detailContent?: string; // Cache for detailed content from API
}

export interface GeneratedContent {
  id: string;
  title: string;
  content: string;
  request: ContentRequest;
  createdAt: Date;
  type: "explanation" | "example" | "exercise" | "summary" | "session-plan";
  sessionPlans?: SessionPlan[];
}

export interface AppState {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapter: Chapter | null;
  selectedTopic: Topic | null;
  plannedSessions: number | null;
  currentContent: GeneratedContent | null;
  isLoading: boolean;
  selectedSessionId: number | null;
}

// Mock data structure for chapters and topics
export interface MockData {
  chapters: Record<ClassLevel, Record<Subject, Chapter[]>>;
}
