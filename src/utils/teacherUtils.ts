import { mockData } from "../mockData";
import { ClassLevel, Subject, Chapter, AppState } from "../types";

/**
 * Generates a content title based on the current app state
 */
export const getContentTitle = (state: AppState): string => {
  let title = "Welcome to LearnAI";

  if (state.selectedTopic && state.selectedChapter) {
    title = `${state.selectedChapter.title} - ${state.selectedTopic.title}`;
  } else if (state.selectedChapter) {
    title = state.selectedChapter.title;
  } else if (state.selectedSubject && state.selectedClass) {
    title = `${
      state.selectedSubject.charAt(0).toUpperCase() +
      state.selectedSubject.slice(1)
    } - Class ${state.selectedClass}`;
  }

  return title;
};

/**
 * Gets available chapter options based on selected class and subject
 */
export const getChapterOptions = (
  selectedClass: ClassLevel | null,
  selectedSubject: Subject | null
): Chapter[] => {
  if (!selectedClass || !selectedSubject) return [];
  return mockData.chapters[selectedClass]?.[selectedSubject] || [];
};

/**
 * Gets all available class levels from mock data
 */
export const getClasses = (): ClassLevel[] => {
  return Object.keys(mockData.chapters) as ClassLevel[];
};

/**
 * Gets all available subjects from mock data based on selected class
 */
export const getSubjects = (state: AppState): Subject[] => {
  if (!state.selectedClass) return [];
  return Object.keys(mockData.chapters[state.selectedClass] || {}).map(
    (key) => key as Subject
  );
};

/**
 * Gets available subjects for a specific class level
 */
export const getSubjectsForClass = (
  classLevel: ClassLevel | null
): Subject[] => {
  if (!classLevel) return [];
  return Object.keys(mockData.chapters[classLevel] || {}).map(
    (key) => key as Subject
  );
};

/**
 * Checks if content can be generated based on current state
 */
export const canGenerateContent = (state: AppState): boolean => {
  return !!(
    state.selectedClass &&
    state.selectedSubject &&
    state.selectedChapter &&
    state.plannedSessions
  );
};