import { Chapter, ClassLevel, Subject } from "../../types";

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

// Interface for session detail requests
export interface SessionDetailRequest {
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
}

// Interface for KP grouping request
export interface KPGroupingRequest {
  boardId: number;
  classId: number;
  subjectId: number;
  chapterId: number;
  plannedSessions: number;
}

// Interface for a session in KP grouping response
export interface GroupedSession {
  sessionMapId: number;
  sessionNumber: number;
  sessionTitle: string;
  kpIds: string[];
  summary: string | null;
  objectives: string[] | null;
  isDetailedContentAvailable: boolean;
}

// Interface for metadata in KP grouping response
export interface KPGroupingMetadata {
  chapter: string;
  subject: string;
  classField: string | null;
  totalSessions: number;
  totalKps: number;
}

// Interface for KP grouping response
export interface KPGroupingResponse {
  fromCache: boolean;
  sessions: GroupedSession[];
  metadata: KPGroupingMetadata;
  success: boolean;
}

// Interface for session summary generation request
export interface SessionSummaryRequest {
  sessionMapId: number;
}

// Interface for session summary generation response
export interface SessionSummaryResponse {
  success: boolean;
  sessionNumber: number;
  sessionTitle: string;
  summary: string;
  objectives: string[];
}

// Interface for detailed session content request
export interface SessionDetailContentRequest {
  sessionId: number;
}

// Interface for detailed session content data structure
export interface SessionDetailContent {
  sessionId: number;
  content: {
    class: string;
    wrapUp: {
      summary: string[];
      closureActivity: string;
      engagementQuestions: string[];
    };
    subject: string;
    summary: string;
    duration: number;
    resources: {
      materials: string[];
      references: string[];
      youtubeVideos: {
        data: Array<{
          title: string;
          duration: string;
          videoId: string;
          embedUrl: string;
          videoUrl: string;
          channelId: string;
          likeCount: string;
          viewCount: string;
          description: string;
          publishedAt: string;
          channelTitle: string;
          thumbnailUrl: string;
        }>;
        success: boolean;
        totalVideos: number;
        keywordsSearched: string[];
      };
      youtubeSearchKeywords: string[];
      additionalReadingOrMedia: string[];
    };
    activities: {
      groupWork: {
        task: string;
        roles: string[];
        successCriteria: string;
      };
      warmUpHook: string;
      experiments: any[];
      interactive: Array<{
        name: string;
        time: string;
        type: string;
        steps: string[];
        materials: string[];
        expectedOutcome: string;
      }>;
      practiceProblems: Array<{
        answer: string;
        problem: string;
        difficulty: string;
      }>;
    };
    assessment: {
      homework: string;
      exitTicket: string;
      rubricOrMarkingHints: string;
    };
    objectives: string;
    sessionTitle: string;
    boardWorkPlan: {
      keywords: string[];
      definitions: Array<string | { term: string; definition: string }>;
      lawsOrRules: any[];
      diagramsToDraw: Array<{
        label: string;
        instructions: string;
        placeholderTag: string;
      }>;
    };
    teachingScript: {
      overview: string;
      stepByStep: Array<{
        time: string;
        teacherLines: string;
        studentActivity: string;
      }>;
      transitions: string;
    };
    differentiation: {
      advancedStudents: string;
      strugglingLearners: string;
      multipleLearningStyles: string;
    };
    quickAssessment: {
      fiveQandA: Array<{
        a: string;
        q: string;
      }>;
      formatHints: string;
    };
    detailedExplanations: {
      subtopics: Array<{
        title: string;
        diagram: string;
        example: string;
        explanation: string;
        classroomTips: string;
        comparisonTable: {
          rows: string[][];
          headers: string[];
          useIfRelevant: boolean;
        };
      }>;
      formulasAndDerivations: any[];
    };
  };
}

// Interface for detailed session content response
export interface SessionDetailContentResponse {
  success: boolean;
  from_cache: boolean;
  data: SessionDetailContent;
}
