import React, { useState, useEffect } from "react";
import {
  GeneratedContent,
  AppState,
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../types";
import { Box } from "@mui/material";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import ErrorModal from "./ErrorModal";
import {
  generateSessionDetail,
  generateSessionPlan,
} from "../services/teacherServices/apiService";
import {
  getBoards,
  getClassesByBoard,
  getSubjectsByClass,
  getChaptersBySubject,
} from "../services/contentService";

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
    currentContent: null,
    isLoading: false,
    selectedSessionId: null,
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
        selectedAPIClass: null,
        selectedAPISubject: null,
        selectedAPIChapter: null,
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
          selectedAPIClass: null,
          selectedAPISubject: null,
          selectedAPIChapter: null,
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
    if (!state.selectedAPIClass) {
      setState((prev) => ({
        ...prev,
        subjects: [],
        selectedAPISubject: null,
        selectedAPIChapter: null,
        chapters: [],
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
        }));
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    fetchChapters();
  }, [state.selectedAPISubject]);

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

  const getContentTitle = (): string => {
    if (state.currentContent) {
      return state.currentContent.title;
    }
    return "Lesson Planner";
  };

  const handleTopicSelection = (): void => {
    // Placeholder - topics are no longer needed with API-based chapters
  };

  const handlePlannedSessionsChange = (sessions: number | null) => {
    setState((prev) => ({
      ...prev,
      plannedSessions: sessions,
    }));
  };

  const handleSessionSelect = async (sessionNumber: number) => {
    setState((prev) => ({
      ...prev,
      selectedSessionId: sessionNumber,
    }));

    try {
      // Find the selected session plan
      const selectedSession = state.currentContent?.sessionPlans?.find(
        (session) => session.sessionNumber === sessionNumber
      );

      if (selectedSession && state.selectedChapter) {
        // Check if we already have cached detailed content
        if (selectedSession.detailContent) {
          // Use cached content without making API call
          const sessionDetailContent: GeneratedContent = {
            id: `session_detail_${Date.now()}`,
            title: `${selectedSession.title} - Detailed Lesson Plan`,
            content: selectedSession.detailContent,
            request: {
              userType: "teacher", // Always teacher for lesson planning
              classLevel: state.selectedClass!,
              subject: state.selectedSubject!,
              chapterId: state.selectedChapter.id,
            },
            createdAt: new Date(),
            type: "explanation",
          };

          setState((prev) => ({
            ...prev,
            currentContent: sessionDetailContent,
          }));
          return;
        }

        // Set loading state for API call
        setState((prev) => ({
          ...prev,
          isLoading: true,
        }));

        // Make API call to get detailed content for the selected session
        const detailContent = await generateSessionDetail({
          userType: "teacher", // Always teacher for lesson planning
          classLevel: state.selectedClass!,
          subject: state.selectedSubject!,
          chapter: state.selectedChapter,
          sessionPlan: selectedSession,
        });

        // Cache the detailed content in the session plan
        const updatedSessionPlans = state.currentContent?.sessionPlans?.map(
          (session) =>
            session.sessionNumber === sessionNumber
              ? { ...session, detailContent }
              : session
        );

        // Update the main content with session details
        const sessionDetailContent: GeneratedContent = {
          id: `session_detail_${Date.now()}`,
          title: `${selectedSession.title} - Detailed Lesson Plan`,
          content: detailContent,
          request: {
            userType: "teacher", // Always teacher for lesson planning
            classLevel: state.selectedClass!,
            subject: state.selectedSubject!,
            chapterId: state.selectedChapter.id,
          },
          createdAt: new Date(),
          type: "explanation",
          sessionPlans: updatedSessionPlans, // Include updated session plans with cached content
        };

        setState((prev) => ({
          ...prev,
          currentContent: sessionDetailContent,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error loading session details:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        errorModal: {
          open: true,
          title: "Session Loading Failed",
          message:
            "Something failed, please try again. If the same problem occurs, please contact administrator.",
        },
      }));
    }
  };

  const handleGenerateContent = async (): Promise<void> => {
    // Validate that all API selections are made
    if (!state.selectedAPIChapter || !state.plannedSessions) {
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Validation Error",
          message:
            "Please select board, class, subject, chapter, and planned sessions before generating content.",
        },
      }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // For now, generate session plan using the API chapter data
      // Pass the IDs from the selected entities to the API
      const sessionPlans = await generateSessionPlan({
        userType: "teacher",
        classLevel: state.selectedAPIClass?.name || "",
        subject: state.selectedAPISubject?.name || "",
        chapter: {
          id: state.selectedAPIChapter.id.toString(),
          title: state.selectedAPIChapter.title,
          subject: state.selectedAPISubject?.name || "",
          classLevel: state.selectedAPIClass?.name || "",
          topics: [],
          description: state.selectedAPIChapter.description || undefined,
        },
        numberOfSessions: state.plannedSessions,
        // Pass the IDs for the new API
        board_id: state.selectedBoard?.id,
        class_id: state.selectedAPIClass?.id,
        subject_id: state.selectedAPISubject?.id,
      } as any);

      const content: GeneratedContent = {
        id: `session_plan_${Date.now()}`,
        title: `${state.selectedAPIChapter.title} - Session Plan (${state.plannedSessions} Sessions)`,
        content: "",
        request: {
          userType: "teacher",
          classLevel: state.selectedAPIClass?.name || "",
          subject: state.selectedAPISubject?.name || "",
          chapterId: state.selectedAPIChapter.id.toString(),
        },
        createdAt: new Date(),
        type: "session-plan",
        sessionPlans,
      };

      setState((prev) => ({ ...prev, currentContent: content }));
    } catch (error) {
      console.error("Error generating content:", error);
      setState((prev) => ({
        ...prev,
        errorModal: {
          open: true,
          title: "Content Generation Failed",
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
        <LeftSidebar
          selectedBoard={state.selectedBoard}
          selectedAPIClass={state.selectedAPIClass}
          selectedAPISubject={state.selectedAPISubject}
          selectedAPIChapter={state.selectedAPIChapter}
          plannedSessions={state.plannedSessions}
          isLoading={state.isLoading}
          sessionPlans={state.currentContent?.sessionPlans || []}
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
          onGenerateContent={handleGenerateContent}
          onSessionSelect={handleSessionSelect}
        />
        <MainContent
          title={getContentTitle()}
          isLoading={state.isLoading}
          currentContent={state.currentContent}
          userType="teacher" // Always teacher for lesson planning
          classLevel={state.selectedAPIClass?.name || ""}
          subject={state.selectedAPISubject?.name || ""}
          chapter={{
            id: state.selectedAPIChapter?.id.toString() || "",
            title: state.selectedAPIChapter?.title || "",
            subject: state.selectedAPISubject?.name || "",
            classLevel: state.selectedAPIClass?.name || "",
            topics: [],
          }}
        />
        {/* <RightSidebar
          topics={[]}
          selectedTopicId={null}
          onTopicSelection={handleTopicSelection}
        /> */}
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
