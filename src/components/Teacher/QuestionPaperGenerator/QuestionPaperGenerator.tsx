import React, { useState, useEffect } from "react";
import {
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../../../types";
import { Box } from "@mui/material";
import QuestionPaperLeftSidebar from "./QuestionPaperLeftSidebar";
import QuestionPaperMainContent from "./QuestionPaperMainContent";
import {
  getBoards,
  getClassesByBoard,
  getSubjectsByClass,
  getChaptersBySubject,
} from "../../../services/contentService";
import { generateQuestions } from "../../../services/teacherServices/apiService";
import ErrorModal from "../../ErrorModal";
import { Question } from "../../../services/teacherServices/types";

interface QuestionPaperState {
  selectedBoard: ContentBoard | null;
  selectedClass: ContentClass | null;
  selectedSubject: ContentSubject | null;
  selectedChapters: ContentChapter[];
  totalMarks: number;
  generatedQuestions: Question[];
  isLoading: boolean;
  boards: ContentBoard[];
  classes: ContentClass[];
  subjects: ContentSubject[];
  chapters: ContentChapter[];
  errorModal: {
    open: boolean;
    title: string;
    message: string;
  };
}

function QuestionPaperGenerator() {
  const [state, setState] = useState<QuestionPaperState>({
    selectedBoard: null,
    selectedClass: null,
    selectedSubject: null,
    selectedChapters: [],
    totalMarks: 0,
    generatedQuestions: [],
    isLoading: false,
    boards: [],
    classes: [],
    subjects: [],
    chapters: [],
    errorModal: {
      open: false,
      title: "Error",
      message: "",
    },
  });

  // Fetch boards on mount
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const boardsData = await getBoards();
        setState((prev) => ({
          ...prev,
          boards: boardsData,
        }));
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchBoards();
  }, []);

  // Fetch classes when board is selected
  useEffect(() => {
    if (!state.selectedBoard) {
      setState((prev) => ({
        ...prev,
        classes: [],
        selectedClass: null,
        selectedSubject: null,
        selectedChapters: [],
        subjects: [],
        chapters: [],
      }));
      return;
    }

    const fetchClasses = async () => {
      try {
        const classesData = await getClassesByBoard(state.selectedBoard!.id);
        setState((prev) => ({
          ...prev,
          classes: classesData,
          selectedClass: null,
          selectedSubject: null,
          selectedChapters: [],
          subjects: [],
          chapters: [],
        }));
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, [state.selectedBoard]);

  // Fetch subjects when class is selected
  useEffect(() => {
    if (!state.selectedClass) {
      setState((prev) => ({
        ...prev,
        subjects: [],
        selectedSubject: null,
        selectedChapters: [],
        chapters: [],
      }));
      return;
    }

    const fetchSubjects = async () => {
      try {
        const subjectsData = await getSubjectsByClass(state.selectedClass!.id);
        setState((prev) => ({
          ...prev,
          subjects: subjectsData,
          selectedSubject: null,
          selectedChapters: [],
          chapters: [],
        }));
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchSubjects();
  }, [state.selectedClass]);

  // Fetch chapters when subject is selected
  useEffect(() => {
    if (!state.selectedSubject) {
      setState((prev) => ({
        ...prev,
        chapters: [],
        selectedChapters: [],
      }));
      return;
    }

    const fetchChapters = async () => {
      try {
        const chaptersData = await getChaptersBySubject(
          state.selectedSubject!.id
        );
        setState((prev) => ({
          ...prev,
          chapters: chaptersData,
          selectedChapters: [],
        }));
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    fetchChapters();
  }, [state.selectedSubject]);


  const handleBoardChange = (board: ContentBoard | null) => {
    setState((prev) => ({
      ...prev,
      selectedBoard: board,
    }));
  };

  const handleClassLevelChange = (classItem: ContentClass | null) => {
    setState((prev) => ({
      ...prev,
      selectedClass: classItem,
    }));
  };

  const handleSubjectChange = (subject: ContentSubject | null) => {
    setState((prev) => ({
      ...prev,
      selectedSubject: subject,
    }));
  };

  const handleChapterChange = (chapterIds: number[]) => {
    const selectedChapters = state.chapters.filter((ch) =>
      chapterIds.includes(ch.id)
    );
    setState((prev) => ({
      ...prev,
      selectedChapters,
      generatedQuestions: [],
    }));
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
      // Convert ContentChapter to Chapter format for API
      const chaptersForAPI = state.selectedChapters.map((ch) => ({
        id: ch.id.toString(),
        title: ch.title,
        subject: state.selectedSubject!.name,
        classLevel: state.selectedClass!.name,
        topics: [],
        description: ch.description || undefined,
      }));

      // Generate questions for all selected chapters at once
      const questions = await generateQuestions({
        classLevel: state.selectedClass!.name,
        subject: state.selectedSubject!.name,
        chapters: chaptersForAPI,
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
          selectedBoard={state.selectedBoard}
          selectedClass={state.selectedClass}
          selectedSubject={state.selectedSubject}
          selectedChapters={state.selectedChapters}
          totalMarks={state.totalMarks}
          isLoading={state.isLoading}
          boards={state.boards}
          classes={state.classes}
          subjects={state.subjects}
          chapters={state.chapters}
          onBoardChange={handleBoardChange}
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
