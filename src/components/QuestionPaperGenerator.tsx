import React, { useState } from "react";
import { mockData } from "../mockData";
import { ClassLevel, Subject, Chapter } from "../types";
import { Box } from "@mui/material";
import QuestionPaperLeftSidebar from "./QuestionPaperLeftSidebar";
import QuestionPaperMainContent from "./QuestionPaperMainContent";
import { Question } from "../services/teacherServices/types";
import { generateQuestions } from "../services/teacherServices/apiService";

interface QuestionPaperState {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapters: Chapter[]; // Changed from single chapter to array
  questionRequirements: string;
  generatedQuestions: Question[];
  isLoading: boolean;
}

function QuestionPaperGenerator() {
  const [state, setState] = useState<QuestionPaperState>({
    selectedClass: null,
    selectedSubject: null,
    selectedChapters: [], // Changed to empty array
    questionRequirements: "",
    generatedQuestions: [],
    isLoading: false,
  });

  const handleClassLevelChange = (classLevel: ClassLevel | "") => {
    setState((prev) => ({
      ...prev,
      selectedClass: classLevel || null,
      selectedSubject: null,
      selectedChapters: [], // Reset chapters array
      generatedQuestions: [],
    }));
  };

  const handleSubjectChange = (subject: Subject | "") => {
    setState((prev) => ({
      ...prev,
      selectedSubject: subject || null,
      selectedChapters: [], // Reset chapters array
      generatedQuestions: [],
    }));
  };

  const handleChapterChange = (chapterIds: string[]) => {
    if (state.selectedClass && state.selectedSubject) {
      const chapters =
        mockData.chapters[state.selectedClass]?.[state.selectedSubject] || [];
      const selectedChapters = chapters.filter((ch: Chapter) =>
        chapterIds.includes(ch.id)
      );
      setState((prev) => ({
        ...prev,
        selectedChapters,
        generatedQuestions: [],
      }));
    } else {
      setState((prev) => ({
        ...prev,
        selectedChapters: [],
        generatedQuestions: [],
      }));
    }
  };

  const handleQuestionRequirementsChange = (requirements: string) => {
    setState((prev) => ({
      ...prev,
      questionRequirements: requirements,
    }));
  };

  const canGenerateQuestions = (): boolean => {
    return !!(
      state.selectedClass &&
      state.selectedSubject &&
      state.selectedChapters.length > 0 && // Check if at least one chapter is selected
      state.questionRequirements.trim()
    );
  };

  const handleGenerateQuestions = async (): Promise<void> => {
    if (!canGenerateQuestions()) {
      alert(
        "Please select class, subject, at least one chapter, and specify question requirements before generating questions."
      );
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Generate questions for all selected chapters
      const allQuestions: Question[] = [];

      for (const chapter of state.selectedChapters) {
        const questions = await generateQuestions({
          classLevel: state.selectedClass!,
          subject: state.selectedSubject!,
          chapter: chapter,
          questionRequirements: state.questionRequirements,
        });

        // Add chapter context to question IDs to avoid conflicts
        const chapterQuestions = questions.map((q) => ({
          ...q,
          id: `${chapter.id}_${q.id}`,
          question: `[${chapter.title}] ${q.questionText}`, // Add chapter prefix to question
        }));

        allQuestions.push(...chapterQuestions);
      }

      setState((prev) => ({
        ...prev,
        generatedQuestions: allQuestions,
      }));
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Error generating questions. Please try again.");
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const getChapterOptions = () => {
    if (!state.selectedClass || !state.selectedSubject) return [];
    return (
      mockData.chapters[state.selectedClass]?.[state.selectedSubject] || []
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <QuestionPaperLeftSidebar
        selectedClass={state.selectedClass}
        selectedSubject={state.selectedSubject}
        selectedChapters={state.selectedChapters}
        questionRequirements={state.questionRequirements}
        isLoading={state.isLoading}
        chapterOptions={getChapterOptions()}
        onClassLevelChange={handleClassLevelChange}
        onSubjectChange={handleSubjectChange}
        onChapterChange={handleChapterChange}
        onQuestionRequirementsChange={handleQuestionRequirementsChange}
        onGenerateQuestions={handleGenerateQuestions}
      />
      <QuestionPaperMainContent
        isLoading={state.isLoading}
        generatedQuestions={state.generatedQuestions}
        selectedChapters={state.selectedChapters}
      />
    </Box>
  );
}

export default QuestionPaperGenerator;
