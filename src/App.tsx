import React, { useState } from "react";
import "./App.css";
import { mockData } from "./mockData";
import {
  UserType,
  ClassLevel,
  Subject,
  Chapter,
  ContentRequest,
  GeneratedContent,
  AppState,
} from "./types";
import { Container, Paper, Typography, Box } from "@mui/material";
import { School } from "@mui/icons-material";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import {
  generateSessionPlan,
  generateSessionDetail,
} from "./services/openaiService";

function App() {
  const [state, setState] = useState<AppState>({
    user: null,
    selectedClass: null,
    selectedSubject: null,
    selectedChapter: null,
    selectedTopic: null,
    plannedSessions: null,
    currentContent: null,
    isLoading: false,
    selectedSessionId: null,
  });

  const handleUserTypeChange = (userType: UserType | "") => {
    setState((prev) => ({
      ...prev,
      user: userType ? { type: userType } : null,
      selectedClass: null,
      selectedSubject: null,
      selectedChapter: null,
      selectedTopic: null,
      plannedSessions: null,
    }));
  };

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
              userType: state.user!.type,
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
          userType: state.user!.type,
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
            userType: state.user!.type,
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

  const canGenerateContent = (): boolean => {
    const basicRequirements = !!(
      state.user &&
      state.selectedClass &&
      state.selectedSubject &&
      state.selectedChapter
    );

    if (state.user?.type === "teacher") {
      return basicRequirements && !!state.plannedSessions;
    }

    return basicRequirements;
  };

  const generateMockContent = (
    request: ContentRequest,
    topicTitle: string,
    chapterTitle: string
  ): string => {
    const { userType, subject, classLevel } = request;

    let content = `<h3>${topicTitle}</h3>`;

    if (userType === "teacher") {
      content += `
        <h4>Teaching Notes for ${chapterTitle}</h4>
        <p><strong>Objective:</strong> Help students understand ${topicTitle.toLowerCase()} in the context of ${chapterTitle.toLowerCase()}.</p>
        
        <h5>Key Concepts to Cover:</h5>
        <ul>
            <li>Introduction and basic definitions</li>
            <li>Real-world applications and examples</li>
            <li>Common misconceptions to address</li>
            <li>Practice problems and activities</li>
        </ul>
        
        <h5>Suggested Teaching Approach:</h5>
        <p>Start with concrete examples that students can relate to, then gradually introduce abstract concepts. Use visual aids and interactive demonstrations to make the topic engaging.</p>
        
        <h5>Assessment Ideas:</h5>
        <ul>
            <li>Quick formative assessments</li>
            <li>Group activities and discussions</li>
            <li>Problem-solving exercises</li>
        </ul>
      `;
    } else {
      content += `
        <h4>Learn About ${topicTitle}</h4>
        <p>Welcome to your lesson on <strong>${topicTitle}</strong>! This is an important topic in ${chapterTitle.toLowerCase()} for Class ${classLevel}.</p>
        
        <h5>What You'll Learn:</h5>
        <ul>
            <li>Core concepts and definitions</li>
            <li>How this topic connects to real life</li>
            <li>Step-by-step examples</li>
            <li>Practice opportunities</li>
        </ul>
        
        <h5>Let's Get Started:</h5>
        <p>Understanding ${topicTitle.toLowerCase()} will help you build a strong foundation in ${subject}. Take your time to read through each section and don't hesitate to review concepts multiple times.</p>
        
        <div className="example-box">
            <h6>Example:</h6>
            <p>Here's a simple example to illustrate the concept...</p>
        </div>
        
        <h5>Practice Questions:</h5>
        <ol>
            <li>Can you explain the main concept in your own words?</li>
            <li>How might this apply to everyday situations?</li>
            <li>What questions do you have about this topic?</li>
        </ol>
      `;
    }

    content += `
      <div className="ai-note">
          <p><em>💡 This content was generated by AI to help with your ${
            userType === "teacher" ? "teaching" : "learning"
          } experience. For more detailed information, please refer to your textbook or consult with your ${
      userType === "teacher" ? "curriculum guide" : "teacher"
    }.</em></p>
      </div>
    `;

    return content;
  };

  const handleGenerateContent = async (): Promise<void> => {
    if (!canGenerateContent()) {
      const isTeacher = state.user?.type === "teacher";
      const requiredFields = isTeacher
        ? "user type, class, subject, chapter, and planned sessions"
        : "user type, class, subject, and chapter";

      alert(`Please select ${requiredFields} before generating content.`);
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    const request: ContentRequest = {
      userType: state.user!.type,
      classLevel: state.selectedClass!,
      subject: state.selectedSubject!,
      chapterId: state.selectedChapter!.id,
      topicId: state.selectedTopic?.id,
    };

    try {
      const isTeacher = state.user?.type === "teacher";
      const hasPlannedSessions =
        state.plannedSessions && state.plannedSessions > 0;

      if (isTeacher && hasPlannedSessions) {
        // Generate session plan using OpenAI for teachers with planned sessions
        const sessionPlans = await generateSessionPlan({
          userType: state.user!.type,
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
      } else {
        // Generate regular content for students or teachers without session planning
        const topicTitle = state.selectedTopic?.title || "General Overview";
        const chapterTitle = state.selectedChapter!.title;

        const content: GeneratedContent = {
          id: `content_${Date.now()}`,
          title: `${chapterTitle} - ${topicTitle}`,
          content: generateMockContent(request, topicTitle, chapterTitle),
          request,
          createdAt: new Date(),
          type: "explanation",
        };

        setState((prev) => ({ ...prev, currentContent: content }));
      }
    } catch (error) {
      console.error("Error generating content:", error);
      alert("Error generating content. Please try again.");
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const getContentTitle = (): string => {
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

  const getChapterOptions = () => {
    if (!state.selectedClass || !state.selectedSubject) return [];
    return (
      mockData.chapters[state.selectedClass]?.[state.selectedSubject] || []
    );
  };

  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          mb: 3,
          p: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "white", fontWeight: 600 }}
        >
          <School sx={{ mr: 2, verticalAlign: "middle" }} />
          LearnAI Educational Platform
        </Typography>
      </Paper>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <LeftSidebar
          userType={state.user?.type || null}
          selectedClass={state.selectedClass}
          selectedSubject={state.selectedSubject}
          selectedChapter={state.selectedChapter}
          plannedSessions={state.plannedSessions}
          isLoading={state.isLoading}
          chapterOptions={getChapterOptions()}
          sessionPlans={state.currentContent?.sessionPlans || []}
          selectedSessionId={state.selectedSessionId}
          onUserTypeChange={handleUserTypeChange}
          onClassLevelChange={handleClassLevelChange}
          onSubjectChange={handleSubjectChange}
          onChapterChange={handleChapterChange}
          onPlannedSessionsChange={handlePlannedSessionsChange}
          onGenerateContent={handleGenerateContent}
          onSessionSelect={handleSessionSelect}
        />
        <MainContent
          title={getContentTitle()}
          isLoading={state.isLoading}
          currentContent={state.currentContent}
          userType={state.user?.type || null}
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
    </Container>
  );
}

export default App;
