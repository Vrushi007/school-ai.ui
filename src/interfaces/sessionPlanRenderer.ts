// Interface definitions for SessionPlanRenderer component

import { SessionPlan, UserType, ClassLevel, Subject, Chapter } from "../types";

export interface SessionPlanRendererProps {
  sessionPlans: SessionPlan[];
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
}

export interface SessionDetailContent {
  sessionTitle: string;
  subject: string;
  class: string;
  duration: string;
  summary: string;
  objectives: string[];
  teachingScript: {
    overview: string;
    stepByStep: Array<{
      time: string;
      teacherLines: string;
      studentActivity: string;
    }>;
    transitions: string;
  };
  boardWorkPlan: {
    definitions: string[];
    lawsOrRules: Array<{
      name: string;
      statement: string;
      notation: string;
    }>;
    diagramsToDraw: Array<{
      label: string;
      instructions: string;
      placeholderTag: string;
    }>;
    keywords: string[];
  };
  detailedExplanations: {
    subtopics: Array<{
      title: string;
      explanation: string;
      example: string;
      diagram: string;
      comparisonTable?: {
        useIfRelevant: boolean;
        headers: string[];
        rows: string[][];
      };
      classroomTips: string;
    }>;
    formulasAndDerivations: any[];
  };
  activities: {
    warmUpHook: string;
    interactive: Array<{
      name: string;
      type: string;
      steps: string[];
      time: string;
      materials: string[];
      expectedOutcome: string;
    }>;
    practiceProblems: Array<{
      problem: string;
      difficulty: string;
      answer: string;
    }>;
    groupWork: {
      task: string;
      roles: string[];
      successCriteria: string;
    };
    experiments: any[];
  };
  wrapUp: {
    summary: string[];
    engagementQuestions: string[];
    closureActivity: string;
  };
  quickAssessment: {
    fiveQandA: Array<{
      q: string;
      a: string;
    }>;
    formatHints: string;
  };
  assessment: {
    exitTicket: string;
    homework: string;
    rubricOrMarkingHints: string;
  };
  resources: {
    materials: string[];
    references: string[];
    additionalReadingOrMedia: string[];
    youtubeSearchKeywords: string[];
    youtubeVideos: {
      success: boolean;
      data: Array<{
        videoId: string;
        title: string;
        description: string;
        channelTitle: string;
        channelId: string;
        publishedAt: string;
        thumbnailUrl: string;
        videoUrl: string;
        embedUrl: string;
        duration: string;
        viewCount: string;
        likeCount: string;
      }>;
      totalVideos: number;
      keywordsSearched: string[];
    };
  };
  differentiation: {
    strugglingLearners: string;
    advancedStudents: string;
    multipleLearningStyles: string;
  };
}

export interface DetailModalState {
  isOpen: boolean;
  content: SessionDetailContent | null;
  htmlContent?: string; // For fallback HTML content
  title: string;
  isLoading: boolean;
  exportMenuAnchor: HTMLElement | null;
}
