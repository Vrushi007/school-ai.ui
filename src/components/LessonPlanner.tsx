import React, { useState } from "react";
import { mockData } from "../mockData";
import {
  ClassLevel,
  Subject,
  Chapter,
  ContentRequest,
  GeneratedContent,
  AppState,
} from "../types";
import { Box } from "@mui/material";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import {
  generateSessionDetail,
  generateSessionPlan,
} from "../services/teacherServices/apiService";
import { canGenerateContent, getChapterOptions, getContentTitle } from "../utils/teacherUtils";


function LessonPlanner() {
  const [state, setState] = useState<AppState>({
    selectedClass: null,
    selectedSubject: null,
    selectedChapter: null,
    selectedTopic: null,
    plannedSessions: null,
    currentContent: null,
    isLoading: false,
    selectedSessionId: null,
  });

  const handleClassLevelChange = (classLevel: ClassLevel | "") => {
    setState((prev) => ({
      ...prev,
      selectedClass: classLevel || null,
      selectedSubject: null,
      selectedChapter: null,
      selectedTopic: null,
      plannedSessions: null,
    }));
  };

  const handleSubjectChange = (subject: Subject | "") => {
    setState((prev) => ({
      ...prev,
      selectedSubject: subject || null,
      selectedChapter: null,
      selectedTopic: null,
      plannedSessions: null,
    }));
  };

  const handleChapterChange = (chapterId: string) => {
    if (chapterId && state.selectedClass && state.selectedSubject) {
      const chapters =
        mockData.chapters[state.selectedClass]?.[state.selectedSubject] || [];
      const chapter = chapters.find((ch: Chapter) => ch.id === chapterId);
      setState((prev) => ({
        ...prev,
        selectedChapter: chapter || null,
        selectedTopic: null,
        plannedSessions: null,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        selectedChapter: null,
        selectedTopic: null,
        plannedSessions: null,
      }));
    }
  };

  const handleTopicSelection = (topicId: string) => {
    const topic = state.selectedChapter?.topics.find((t) => t.id === topicId);
    setState((prev) => ({
      ...prev,
      selectedTopic: topic || null,
    }));
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
      }));
    }
  };

  const handleGenerateContent = async (): Promise<void> => {
    if (!canGenerateContent(state)) {
      alert(
        `Please select class, subject, chapter, and planned sessions before generating content.`
      );
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    const request: ContentRequest = {
      userType: "teacher", // Always teacher for lesson planning
      classLevel: state.selectedClass!,
      subject: state.selectedSubject!,
      chapterId: state.selectedChapter!.id,
      topicId: state.selectedTopic?.id,
    };

    try {
      // Generate session plan using OpenAI since we have planned sessions
      const sessionPlans = await generateSessionPlan({
        userType: "teacher", // Always teacher for lesson planning
        classLevel: state.selectedClass!,
        subject: state.selectedSubject!,
        chapter: state.selectedChapter!,
        numberOfSessions: state.plannedSessions!,
      });

      const content: GeneratedContent = {
        id: `session_plan_${Date.now()}`,
        title: `${state.selectedChapter!.title} - Session Plan (${
          state.plannedSessions
        } Sessions)`,
        content: "", // Content will be rendered by SessionPlanRenderer component
        request,
        createdAt: new Date(),
        type: "session-plan",
        sessionPlans,
      };

      setState((prev) => ({ ...prev, currentContent: content }));
    } catch (error) {
      console.error("Error generating content:", error);
      alert("Error generating content. Please try again.");
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <LeftSidebar
        selectedClass={state.selectedClass}
        selectedSubject={state.selectedSubject}
        selectedChapter={state.selectedChapter}
        plannedSessions={state.plannedSessions}
        isLoading={state.isLoading}
        chapterOptions={getChapterOptions(
          state.selectedClass,
          state.selectedSubject
        )}
        sessionPlans={state.currentContent?.sessionPlans || []}
        selectedSessionId={state.selectedSessionId}
        onClassLevelChange={handleClassLevelChange}
        onSubjectChange={handleSubjectChange}
        onChapterChange={handleChapterChange}
        onPlannedSessionsChange={handlePlannedSessionsChange}
        onGenerateContent={handleGenerateContent}
        onSessionSelect={handleSessionSelect}
      />
      <MainContent
        title={getContentTitle(state)}
        isLoading={state.isLoading}
        currentContent={state.currentContent}
        userType="teacher" // Always teacher for lesson planning
        classLevel={state.selectedClass}
        subject={state.selectedSubject}
        chapter={state.selectedChapter}
      />
      <RightSidebar
        topics={state.selectedChapter?.topics || []}
        selectedTopicId={state.selectedTopic?.id || null}
        onTopicSelection={handleTopicSelection}
      />
    </Box>
  );
}

export default LessonPlanner;
