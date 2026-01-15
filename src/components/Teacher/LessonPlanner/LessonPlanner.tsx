import React, { useState, useEffect } from "react";
import {
  AppState,
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../../../types";
import { Box } from "@mui/material";
import {
  groupKPsIntoSessions,
  generateSessionSummary,
} from "../../../services/teacherServices/apiService";
import {
  getBoards,
  getClassesByBoard,
  getSubjectsByClass,
  getChaptersBySubject,
  getKeyPointsByChapter,
  KeyPoint,
} from "../../../services/contentService";
import LessonPlanInput from "./LessonPlanInput";
import KnowledgePointList from "./KnowledgePointList";
import MainContent from "./MainContent";
import ErrorModal from "../../ErrorModal";

function LessonPlanner() {
  const [state, setState] = useState<AppState>({
    selectedBoard: null,
    selectedAPIClass: null,
    selectedAPISubject: null,
    selectedAPIChapter: null,
    selectedClass: null,
    selectedSubject: null,
    selectedChapter: null,
    selectedTopic: null,
    plannedSessions: null,
    isLoading: false,
    selectedSessionId: null,
    groupedSessions: null,
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

  const [keyPoints, setKeyPoints] = useState<KeyPoint[]>([]);

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
        selectedAPIClass: null,
        selectedAPISubject: null,
        selectedAPIChapter: null,
        subjects: [],
        chapters: [],
        groupedSessions: null,
      }));
      return;
    }

    const fetchClasses = async () => {
      try {
        const classesData = await getClassesByBoard(state.selectedBoard!.id);
        setState((prev) => ({
          ...prev,
          classes: classesData,
          selectedAPIClass: null,
          selectedAPISubject: null,
          selectedAPIChapter: null,
          subjects: [],
          chapters: [],
          groupedSessions: null,
        }));
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, [state.selectedBoard]);

  // Fetch subjects when class is selected
  useEffect(() => {
    if (!state.selectedAPIClass) {
      setState((prev) => ({
        ...prev,
        subjects: [],
        selectedAPISubject: null,
        selectedAPIChapter: null,
        chapters: [],
        groupedSessions: null,
      }));
      return;
    }

    const fetchSubjects = async () => {
      try {
        const subjectsData = await getSubjectsByClass(
          state.selectedAPIClass!.id
        );
        setState((prev) => ({
          ...prev,
          subjects: subjectsData,
          selectedAPISubject: null,
          selectedAPIChapter: null,
          chapters: [],
          groupedSessions: null,
        }));
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchSubjects();
  }, [state.selectedAPIClass]);

  // Fetch chapters when subject is selected
  useEffect(() => {
    if (!state.selectedAPISubject) {
      setState((prev) => ({
        ...prev,
        chapters: [],
        selectedAPIChapter: null,
        groupedSessions: null,
      }));
      return;
    }

    const fetchChapters = async () => {
      try {
        const chaptersData = await getChaptersBySubject(
          state.selectedAPISubject!.id
        );
        setState((prev) => ({
          ...prev,
          chapters: chaptersData,
          selectedAPIChapter: null,
          groupedSessions: null,
        }));
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    fetchChapters();
  }, [state.selectedAPISubject]);

  // Fetch key points when chapter is selected
  useEffect(() => {
    if (!state.selectedAPIChapter) {
      setKeyPoints([]);
      return;
    }

    const fetchKeyPoints = async () => {
      try {
        const kpData = await getKeyPointsByChapter(
          state.selectedAPIChapter!.id
        );
        setKeyPoints(kpData);
      } catch (error) {
        console.error("Error fetching key points:", error);
      }
    };
    fetchKeyPoints();
  }, [state.selectedAPIChapter]);

  // Handlers for Board selection
  const handleBoardChange = (board: ContentBoard | null) => {
    setState((prev) => ({
      ...prev,
      selectedBoard: board,
    }));
  };

  const handleAPIClassChange = (classItem: ContentClass | null) => {
    setState((prev) => ({
      ...prev,
      selectedAPIClass: classItem,
    }));
  };

  const handleAPISubjectChange = (subject: ContentSubject | null) => {
    setState((prev) => ({
      ...prev,
      selectedAPISubject: subject,
    }));
  };

  const handleAPIChapterChange = (chapter: ContentChapter | null) => {
    setState((prev) => ({
      ...prev,
      selectedAPIChapter: chapter,
      groupedSessions: null,
      plannedSessions: null,
    }));
  };

  const handleCloseErrorModal = () => {
    setState((prev) => ({
      ...prev,
      errorModal: {
        ...prev.errorModal!,
        open: false,
      },
    }));
  };

  const handleGroupKPs = async (): Promise<void> => {
    // Validate that all required selections are made
    if (
      !state.selectedBoard ||
      !state.selectedAPIClass ||
      !state.selectedAPISubject ||
      !state.selectedAPIChapter ||
      !state.plannedSessions
    ) {
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Validation Error",
          message:
            "Please select board, class, subject, chapter, and planned sessions before grouping KPs.",
        },
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
      groupedSessions: null,
      currentContent: null,
    }));

    try {
      const response = await groupKPsIntoSessions({
        boardId: state.selectedBoard.id,
        classId: state.selectedAPIClass.id,
        subjectId: state.selectedAPISubject.id,
        chapterId: state.selectedAPIChapter.id,
        plannedSessions: state.plannedSessions,
      });

      setState((prev) => ({
        ...prev,
        groupedSessions: response.sessions,
      }));
    } catch (error) {
      console.error("Error grouping KPs:", error);
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "KP Grouping Failed",
          message:
            "Failed to group knowledge points into sessions. Please try again.",
        },
      }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleGenerateSessionSummary = async (
    sessionMapId: number
  ): Promise<void> => {
    try {
      const response = await generateSessionSummary({ sessionMapId });

      // Update the specific session in groupedSessions
      setState((prev) => ({
        ...prev,
        groupedSessions:
          prev.groupedSessions?.map((session) =>
            session.sessionMapId === sessionMapId
              ? {
                  ...session,
                  summary: response.summary,
                  objectives: response.objectives,
                }
              : session
          ) || null,
      }));
    } catch (error) {
      console.error("Error generating session summary:", error);
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Session Summary Generation Failed",
          message: "Failed to generate session summary. Please try again.",
        },
      }));
    }
  };

  const handleError = (message: string) => {
    setState((prev) => ({
      ...prev,
      errorModal: {
        open: true,
        title: "Error",
        message: message,
      },
    }));
  };

  const getContentTitle = (): string => {
    return "Lesson Planner";
  };

  const handlePlannedSessionsChange = (sessions: number | null) => {
    setState((prev) => ({
      ...prev,
      plannedSessions: sessions,
    }));
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Horizontal Top Bar (formerly LeftSidebar) */}
        <LessonPlanInput
          selectedBoard={state.selectedBoard}
          selectedAPIClass={state.selectedAPIClass}
          selectedAPISubject={state.selectedAPISubject}
          selectedAPIChapter={state.selectedAPIChapter}
          plannedSessions={state.plannedSessions}
          isLoading={state.isLoading}
          selectedSessionId={state.selectedSessionId}
          boards={state.boards}
          classes={state.classes}
          subjects={state.subjects}
          chapters={state.chapters}
          onBoardChange={handleBoardChange}
          onAPIClassChange={handleAPIClassChange}
          onAPISubjectChange={handleAPISubjectChange}
          onAPIChapterChange={handleAPIChapterChange}
          onPlannedSessionsChange={handlePlannedSessionsChange}
          onGroupKPs={handleGroupKPs}
        />

        {/* Main Content Area */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side - Knowledge Points (40%) */}
          <KnowledgePointList
            chapterId={state.selectedAPIChapter?.id || null}
            chapterTitle={state.selectedAPIChapter?.title || ""}
            classLevel={state.selectedAPIClass?.name || ""}
            subject={state.selectedAPISubject?.name || ""}
          />

          {/* Main Content */}
          <MainContent
            title={getContentTitle()}
            isLoading={state.isLoading}
            classLevel={state.selectedAPIClass?.name || ""}
            subject={state.selectedAPISubject?.name || ""}
            chapter={{
              id: state.selectedAPIChapter?.id.toString() || "",
              title: state.selectedAPIChapter?.title || "",
              subject: state.selectedAPISubject?.name || "",
              classLevel: state.selectedAPIClass?.name || "",
              topics: [],
            }}
            groupedSessions={state.groupedSessions}
            keyPoints={keyPoints}
            onGenerateSessionSummary={handleGenerateSessionSummary}
            onError={handleError}
          />
        </Box>
      </Box>

      <ErrorModal
        open={state.errorModal?.open || false}
        onClose={handleCloseErrorModal}
        title={state.errorModal?.title || "Error"}
        message={state.errorModal?.message || ""}
      />
    </>
  );
}

export default LessonPlanner;
