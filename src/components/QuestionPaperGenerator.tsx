import React, { useState } from "react";
import { subjectData } from "../subjectData";
import { ClassLevel, Subject, Chapter } from "../types";
import { Box } from "@mui/material";
import QuestionPaperLeftSidebar from "./QuestionPaperLeftSidebar";
import QuestionPaperMainContent from "./QuestionPaperMainContent";
import ErrorModal from "./ErrorModal";
import { Question } from "../services/teacherServices/types";
import { generateQuestions } from "../services/teacherServices/apiService";

interface QuestionPaperState {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapters: Chapter[]; // Changed from single chapter to array
  totalMarks: number;
  generatedQuestions: Question[];
  isLoading: boolean;
  errorModal: {
    open: boolean;
    title: string;
    message: string;
  };
}

function QuestionPaperGenerator() {
  const [state, setState] = useState<QuestionPaperState>({
    selectedClass: null,
    selectedSubject: null,
    selectedChapters: [], // Changed to empty array
    totalMarks: 0,
    generatedQuestions: [],
    isLoading: false,
    errorModal: {
      open: false,
      title: "Error",
      message: "",
    },
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
        subjectData.chapters[state.selectedClass]?.[state.selectedSubject] ||
        [];
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

  const handleCloseErrorModal = () => {
    setState((prev) => ({
      ...prev,
      errorModal: {
        ...prev.errorModal,
        open: false,
      },
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
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Validation Error",
          message:
            "Please select class, subject, at least one chapter, and specify total marks before generating questions.",
        },
      }));
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
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Generation Failed",
          message:
            "Something failed, please try again. If the same problem occurs, please contact administrator.",
        },
      }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const getChapterOptions = () => {
    if (!state.selectedClass || !state.selectedSubject) return [];
    return (
      subjectData.chapters[state.selectedClass]?.[state.selectedSubject] || []
    );
  };

  return (
    <>
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

      <ErrorModal
        open={state.errorModal.open}
        onClose={handleCloseErrorModal}
        title={state.errorModal.title}
        message={state.errorModal.message}
      />
    </>
  );
}

export default QuestionPaperGenerator;
