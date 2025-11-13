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
  totalMarks: number;
  generatedQuestions: Question[];
  isLoading: boolean;
}

function QuestionPaperGenerator() {
  const [state, setState] = useState<QuestionPaperState>({
    selectedClass: null,
    selectedSubject: null,
    selectedChapters: [], // Changed to empty array
    totalMarks: 0,
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

  const handleTotalMarksChange = (marks: number) => {
    setState((prev) => ({
      ...prev,
      totalMarks: marks,
    }));
  };

  const canGenerateQuestions = (): boolean => {
    return !!(
      state.selectedClass &&
      state.selectedSubject &&
      state.selectedChapters.length > 0 && // Check if at least one chapter is selected
      state.totalMarks > 10
    );
  };

  const handleGenerateQuestions = async (): Promise<void> => {
    if (!canGenerateQuestions()) {
      alert(
        "Please select class, subject, at least one chapter, and specify total marks before generating questions."
      );
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Generate questions for all selected chapters at once
      const questions = await generateQuestions({
        classLevel: state.selectedClass!,
        subject: state.selectedSubject!,
        chapters: state.selectedChapters,
        totalMarks: state.totalMarks,
      });

      setState((prev) => ({
        ...prev,
        generatedQuestions: questions,
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
        totalMarks={state.totalMarks}
        isLoading={state.isLoading}
        chapterOptions={getChapterOptions()}
        onClassLevelChange={handleClassLevelChange}
        onSubjectChange={handleSubjectChange}
        onChapterChange={handleChapterChange}
        onTotalMarksChange={handleTotalMarksChange}
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
