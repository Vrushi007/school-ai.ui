// Type definitions for the educational platform

export type UserType = "teacher" | "student";

export type ClassLevel = string;

export type Subject = string; // Allow any subject that exists in the data

// Content Service API Types
export interface ContentBoard {
  id: number;
  name: string;
  is_active: boolean;
  description: string;
  state_id: number | null;
  state_name?: string;
}

export interface ContentClass {
  id: number;
  board_id: number;
  name: string;
  display_order: number;
  is_active: boolean;
}

export interface ContentSubject {
  id: number;
  class_id: number;
  name: string;
  is_active: boolean;
}

export interface ContentChapter {
  id: number;
  subject_id: number;
  title: string;
  chapter_number: number;
  is_active: boolean;
  description: string | null;
}

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
  weightage?: number;
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
  // Content API Selection
  selectedBoard: ContentBoard | null;
  selectedAPIClass: ContentClass | null;
  selectedAPISubject: ContentSubject | null;
  selectedAPIChapter: ContentChapter | null;

  // Legacy local data selection
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapter: Chapter | null;
  selectedTopic: Topic | null;

  plannedSessions: number | null;
  currentContent: GeneratedContent | null;
  isLoading: boolean;
  selectedSessionId: number | null;
  errorModal?: {
    open: boolean;
    title: string;
    message: string;
  };

  // API Data
  boards: ContentBoard[];
  classes: ContentClass[];
  subjects: ContentSubject[];
  chapters: ContentChapter[];
}

// Mock data structure for chapters and topics
export interface SubjectData {
  chapters: Record<ClassLevel, Record<string, Chapter[]>>; // Allow any subject keys
}
