import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Modal,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Close,
  MenuBook,
  FileDownload,
  ContentCopy,
  PictureAsPdf,
} from "@mui/icons-material";
import { SessionPlan, Chapter } from "../types";
import { generateSessionDetail } from "../services/teacherServices/apiService";
import {
  downloadAsPDF,
  copyToClipboard,
} from "../services/exportServices/sessionPlanExport";
import {
  SessionPlanRendererProps,
  SessionDetailContent,
  DetailModalState,
} from "../interfaces";
import { parseDetailContent } from "../services/teacherServices/helper";
import DetailedLessonPlanRenderer from "./SessionPlan/DetailedLessonPlanRenderer";

const SessionPlanRenderer: React.FC<SessionPlanRendererProps> = ({
  sessionPlans,
  userType,
  classLevel,
  subject,
  chapter,
}) => {
  const [modalState, setModalState] = useState<DetailModalState>({
    isOpen: false,
    content: null,
    title: "",
    isLoading: false,
    exportMenuAnchor: null,
  });

  const handleGetDetails = async (session: SessionPlan) => {
    setModalState({
      isOpen: true,
      content: null,
      title: `${session.title} - Detailed Lesson Plan`,
      isLoading: !session.detailContent, // Don't show loading if we have cached content
      exportMenuAnchor: null,
    });

    // Check if we already have cached detailed content
    if (session.detailContent) {
      // Try to parse the cached content using our robust parser
      const parsedContent = parseDetailContent(session.detailContent);

      if (parsedContent) {
        setModalState((prev) => ({
          ...prev,
          content: parsedContent,
          isLoading: false,
        }));
      } else {
        // If parsing fails, treat as HTML (fallback format)
        setModalState((prev) => ({
          ...prev,
          content: null,
          htmlContent: session.detailContent!,
          isLoading: false,
        }));
      }
      return;
    }

    try {
      const detailContent = await generateSessionDetail({
        userType,
        classLevel,
        subject,
        chapter,
        sessionPlan: session,
      });

      // Cache the raw content in the session object
      // Convert to string for caching if it's an object
      session.detailContent =
        typeof detailContent === "object"
          ? JSON.stringify(detailContent)
          : detailContent;

      // Try to parse the content using our robust parser
      const parsedContent = parseDetailContent(detailContent);

      if (parsedContent) {
        setModalState((prev) => ({
          ...prev,
          content: parsedContent,
          isLoading: false,
        }));
      } else {
        // If parsing fails, treat as HTML (fallback format)
        const fallbackContent =
          typeof detailContent === "string"
            ? detailContent
            : JSON.stringify(detailContent);
        setModalState((prev) => ({
          ...prev,
          content: null,
          htmlContent: fallbackContent,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error loading session details:", error);
      // Generate fallback HTML content
      const fallbackHTML = generateFallbackSessionDetailHTML(session, chapter);
      setModalState((prev) => ({
        ...prev,
        content: null,
        htmlContent: fallbackHTML,
        isLoading: false,
      }));
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      content: null,
      title: "",
      isLoading: false,
      exportMenuAnchor: null,
    });
  };

  // Export functionality
  const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setModalState((prev) => ({
      ...prev,
      exportMenuAnchor: event.currentTarget,
    }));
  };

  const handleExportMenuClose = () => {
    setModalState((prev) => ({
      ...prev,
      exportMenuAnchor: null,
    }));
  };

  const convertContentToText = (
    content: SessionDetailContent | null,
    htmlContent?: string
  ): string => {
    if (content) {
      // Convert structured content to text
      let text = `${content.sessionTitle}\n`;
      text += `Subject: ${content.subject}\n`;
      text += `Class: ${content.class}\n`;
      text += `Duration: ${content.duration}\n\n`;
      text += `Summary: ${content.summary}\n\n`;

      text += "OBJECTIVES\n";
      content.objectives.forEach((objective, i) => {
        text += `${i + 1}. ${objective}\n`;
      });
      text += "\n";

      text += "TEACHING SCRIPT\n";
      text += `Overview: ${content.teachingScript.overview}\n\n`;
      text += "Step-by-Step Teaching:\n";
      content.teachingScript.stepByStep.forEach((step, i) => {
        text += `${i + 1}. ${step.time} - ${step.teacherLines}\n`;
        text += `   Student Activity: ${step.studentActivity}\n`;
      });
      text += `\nTransitions: ${content.teachingScript.transitions}\n\n`;

      text += "BOARD WORK PLAN\n";
      text += "Definitions:\n";
      content.boardWorkPlan.definitions.forEach((definition) => {
        text += `• ${definition}\n`;
      });
      text += "\nLaws/Rules:\n";
      content.boardWorkPlan.lawsOrRules.forEach((rule) => {
        text += `• ${rule.name}: ${rule.statement} (${rule.notation})\n`;
      });
      text += "\nDiagrams to Draw:\n";
      content.boardWorkPlan.diagramsToDraw.forEach((diagram) => {
        text += `• ${diagram.label}: ${diagram.instructions}\n`;
      });
      text +=
        "\nKeywords: " + content.boardWorkPlan.keywords.join(", ") + "\n\n";

      text += "DETAILED EXPLANATIONS\n";
      content.detailedExplanations.subtopics.forEach((subtopic) => {
        text += `${subtopic.title}:\n`;
        text += `${subtopic.explanation}\n`;
        text += `Example: ${subtopic.example}\n`;
        text += `Tips: ${subtopic.classroomTips}\n\n`;
      });

      text += "ACTIVITIES\n";
      text += `Warm-up Hook: ${content.activities.warmUpHook}\n\n`;
      text += "Interactive Activities:\n";
      content.activities.interactive.forEach((activity) => {
        text += `• ${activity.name} (${activity.time}): ${activity.expectedOutcome}\n`;
      });
      text += "\nPractice Problems:\n";
      content.activities.practiceProblems.forEach((problem, i) => {
        text += `${i + 1}. ${problem.problem} (Answer: ${problem.answer})\n`;
      });
      text += `\nGroup Work: ${content.activities.groupWork.task}\n`;
      text += `Success Criteria: ${content.activities.groupWork.successCriteria}\n\n`;

      text += "WRAP-UP\n";
      text += "Summary:\n";
      content.wrapUp.summary.forEach((point) => {
        text += `• ${point}\n`;
      });
      text += "\nEngagement Questions:\n";
      content.wrapUp.engagementQuestions.forEach((question) => {
        text += `• ${question}\n`;
      });
      text += `\nClosure Activity: ${content.wrapUp.closureActivity}\n\n`;

      text += "QUICK ASSESSMENT\n";
      content.quickAssessment.fiveQandA.forEach((qa, i) => {
        text += `${i + 1}. Q: ${qa.q}\n   A: ${qa.a}\n`;
      });
      text += `\nFormat Hints: ${content.quickAssessment.formatHints}\n\n`;

      text += "ASSESSMENT\n";
      text += `Exit Ticket: ${content.assessment.exitTicket}\n`;
      text += `Homework: ${content.assessment.homework}\n`;
      text += `Marking Hints: ${content.assessment.rubricOrMarkingHints}\n\n`;

      text += "RESOURCES\n";
      text += "Materials:\n";
      content.resources.materials.forEach((material) => {
        text += `• ${material}\n`;
      });
      text += "\nReferences:\n";
      content.resources.references.forEach((reference) => {
        text += `• ${reference}\n`;
      });
      text += "\nAdditional Reading/Media:\n";
      content.resources.additionalReadingOrMedia.forEach((reading) => {
        text += `• ${reading}\n`;
      });

      // YouTube Videos Section
      if (
        content.resources.youtubeVideos &&
        content.resources.youtubeVideos.success
      ) {
        text += "\nRecommended YouTube Videos:\n";
        content.resources.youtubeVideos.data.forEach((video, index) => {
          text += `${index + 1}. ${video.title}\n`;
          text += `   Channel: ${video.channelTitle}\n`;
          text += `   Duration: ${video.duration}\n`;
          text += `   Views: ${parseInt(video.viewCount).toLocaleString()}\n`;
          text += `   URL: ${video.videoUrl}\n`;
          if (video.description) {
            const shortDescription =
              video.description.length > 100
                ? video.description.substring(0, 100) + "..."
                : video.description;
            text += `   Description: ${shortDescription}\n`;
          }
          text += "\n";
        });
        text += `Found ${
          content.resources.youtubeVideos.totalVideos
        } videos for keywords: ${content.resources.youtubeVideos.keywordsSearched.join(
          ", "
        )}\n`;
      }

      text += "\nDIFFERENTIATION STRATEGIES\n";
      text += `For Struggling Learners: ${content.differentiation.strugglingLearners}\n`;
      text += `For Advanced Students: ${content.differentiation.advancedStudents}\n`;
      text += `Multiple Learning Styles: ${content.differentiation.multipleLearningStyles}\n`;

      return text;
    } else if (htmlContent) {
      // Convert HTML to text (basic conversion)
      return htmlContent
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .trim();
    }
    return "";
  };

  const handleCopyToClipboard = async () => {
    const textContent = convertContentToText(
      modalState.content,
      modalState.htmlContent
    );
    try {
      const success = await copyToClipboard(textContent);
      if (success) {
        console.log("Content copied to clipboard");
        // You could add a toast notification here
      } else {
        console.error("Failed to copy to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
    handleExportMenuClose();
  };

  const handleExportAsPDF = () => {
    let htmlContent = "";

    if (modalState.content) {
      // Convert structured content to HTML for PDF
      const content = modalState.content;
      htmlContent = `
<div class="header">
    <h1>${content.sessionTitle}</h1>
    <p><strong>Subject:</strong> ${content.subject}</p>
    <p><strong>Class:</strong> ${content.class}</p>
    <p><strong>Duration:</strong> ${content.duration}</p>
    <p><strong>Summary:</strong> ${content.summary}</p>
</div>

<div class="section">
    <h2>Objectives</h2>
    <ol>
        ${content.objectives
          .map((objective) => `<li>${objective}</li>`)
          .join("")}
    </ol>
</div>

<div class="section">
    <h2>Teaching Script</h2>
    <h3>Overview</h3>
    <p>${content.teachingScript.overview}</p>
    <h3>Step-by-Step Teaching</h3>
    <ol>
        ${content.teachingScript.stepByStep
          .map(
            (step) => `
            <li>
                <strong>${step.time}:</strong> ${step.teacherLines}<br>
                <em>Student Activity:</em> ${step.studentActivity}
            </li>
          `
          )
          .join("")}
    </ol>
    <h3>Transitions</h3>
    <p>${content.teachingScript.transitions}</p>
</div>

<div class="section">
    <h2>Board Work Plan</h2>
    <h3>Definitions</h3>
    <ul>
        ${content.boardWorkPlan.definitions
          .map((definition) => `<li>${definition}</li>`)
          .join("")}
    </ul>
    <h3>Laws/Rules</h3>
    <ul>
        ${content.boardWorkPlan.lawsOrRules
          .map(
            (rule) =>
              `<li><strong>${rule.name}:</strong> ${rule.statement} (${rule.notation})</li>`
          )
          .join("")}
    </ul>
    <h3>Diagrams to Draw</h3>
    <ul>
        ${content.boardWorkPlan.diagramsToDraw
          .map(
            (diagram) =>
              `<li><strong>${diagram.label}:</strong> ${diagram.instructions}</li>`
          )
          .join("")}
    </ul>
    <h3>Keywords</h3>
    <p>${content.boardWorkPlan.keywords.join(", ")}</p>
</div>

<div class="section">
    <h2>Detailed Explanations</h2>
    ${content.detailedExplanations.subtopics
      .map(
        (subtopic) => `
        <h3>${subtopic.title}</h3>
        <p>${subtopic.explanation}</p>
        <p><strong>Example:</strong> ${subtopic.example}</p>
        <p><em>Classroom Tips:</em> ${subtopic.classroomTips}</p>
        ${
          subtopic.comparisonTable?.useIfRelevant
            ? `
          <table border="1" style="border-collapse: collapse; width: 100%; margin: 10px 0;">
            <tr>
              ${subtopic.comparisonTable.headers
                .map(
                  (header) =>
                    `<th style="padding: 8px; background-color: #f0f0f0;">${header}</th>`
                )
                .join("")}
            </tr>
            ${subtopic.comparisonTable.rows
              .map(
                (row) =>
                  `<tr>${row
                    .map((cell) => `<td style="padding: 8px;">${cell}</td>`)
                    .join("")}</tr>`
              )
              .join("")}
          </table>
        `
            : ""
        }
      `
      )
      .join("")}
</div>

<div class="section">
    <h2>Activities</h2>
    <h3>Warm-up Hook</h3>
    <p>${content.activities.warmUpHook}</p>
    <h3>Interactive Activities</h3>
    <ul>
        ${content.activities.interactive
          .map(
            (activity) => `
            <li>
                <strong>${activity.name}</strong> (${activity.time}): ${
              activity.expectedOutcome
            }<br>
                <em>Steps:</em> ${activity.steps.join(", ")}
            </li>
          `
          )
          .join("")}
    </ul>
    <h3>Practice Problems</h3>
    <ol>
        ${content.activities.practiceProblems
          .map(
            (problem) =>
              `<li>${problem.problem} <em>(Answer: ${problem.answer})</em></li>`
          )
          .join("")}
    </ol>
    <h3>Group Work</h3>
    <p><strong>Task:</strong> ${content.activities.groupWork.task}</p>
    <p><strong>Success Criteria:</strong> ${
      content.activities.groupWork.successCriteria
    }</p>
</div>

<div class="section">
    <h2>Wrap-up</h2>
    <h3>Summary</h3>
    <ul>
        ${content.wrapUp.summary.map((point) => `<li>${point}</li>`).join("")}
    </ul>
    <h3>Engagement Questions</h3>
    <ul>
        ${content.wrapUp.engagementQuestions
          .map((question) => `<li>${question}</li>`)
          .join("")}
    </ul>
    <h3>Closure Activity</h3>
    <p>${content.wrapUp.closureActivity}</p>
</div>

<div class="section">
    <h2>Quick Assessment</h2>
    <ol>
        ${content.quickAssessment.fiveQandA
          .map(
            (qa) =>
              `<li><strong>Q:</strong> ${qa.q}<br><strong>A:</strong> ${qa.a}</li>`
          )
          .join("")}
    </ol>
    <p><em>${content.quickAssessment.formatHints}</em></p>
</div>

<div class="section">
    <h2>Assessment</h2>
    <h3>Exit Ticket</h3>
    <p>${content.assessment.exitTicket}</p>
    <h3>Homework</h3>
    <p>${content.assessment.homework}</p>
    <h3>Marking Hints</h3>
    <p>${content.assessment.rubricOrMarkingHints}</p>
</div>

<div class="section">
    <h2>Resources</h2>
    <h3>Materials</h3>
    <ul>
        ${content.resources.materials
          .map((material) => `<li>${material}</li>`)
          .join("")}
    </ul>
    <h3>References</h3>
    <ul>
        ${content.resources.references
          .map((reference) => `<li>${reference}</li>`)
          .join("")}
    </ul>
    <h3>Additional Reading/Media</h3>
    <ul>
        ${content.resources.additionalReadingOrMedia
          .map((reading) => `<li>${reading}</li>`)
          .join("")}
    </ul>
    
    ${
      content.resources.youtubeVideos && content.resources.youtubeVideos.success
        ? `
    <h3>Recommended YouTube Videos</h3>
    <table border="1" style="border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 0.9em;">
        <thead>
            <tr style="background-color: #f5f5f5;">
                <th style="padding: 8px; text-align: left; width: 40%;">Title</th>
                <th style="padding: 8px; text-align: left; width: 20%;">Channel</th>
                <th style="padding: 8px; text-align: center; width: 10%;">Duration</th>
                <th style="padding: 8px; text-align: center; width: 10%;">Views</th>
                <th style="padding: 8px; text-align: left; width: 20%;">URL</th>
            </tr>
        </thead>
        <tbody>
            ${content.resources.youtubeVideos.data
              .map(
                (video) => `
                <tr>
                    <td style="padding: 8px; vertical-align: top;">
                        <strong>${video.title}</strong><br>
                        <small style="color: #666;">${
                          video.description && video.description.length > 80
                            ? video.description.substring(0, 80) + "..."
                            : video.description || ""
                        }</small>
                    </td>
                    <td style="padding: 8px; vertical-align: top;">${
                      video.channelTitle
                    }</td>
                    <td style="padding: 8px; text-align: center; vertical-align: top;">${
                      video.duration
                    }</td>
                    <td style="padding: 8px; text-align: center; vertical-align: top;">${parseInt(
                      video.viewCount
                    ).toLocaleString()}</td>
                    <td style="padding: 8px; vertical-align: top; word-break: break-all; font-size: 0.8em;">
                        <a href="${video.videoUrl}" target="_blank">${
                  video.videoUrl
                }</a>
                    </td>
                </tr>
                `
              )
              .join("")}
        </tbody>
    </table>
    <p style="font-style: italic; color: #666; font-size: 0.9em;">
        Found ${
          content.resources.youtubeVideos.totalVideos
        } videos for keywords: ${content.resources.youtubeVideos.keywordsSearched.join(
            ", "
          )}
    </p>
    `
        : ""
    }
</div>

<div class="section">
    <h2>Differentiation Strategies</h2>
    <h3>For Struggling Learners</h3>
    <p>${content.differentiation.strugglingLearners}</p>
    <h3>For Advanced Students</h3>
    <p>${content.differentiation.advancedStudents}</p>
    <h3>Multiple Learning Styles</h3>
    <p>${content.differentiation.multipleLearningStyles}</p>
</div>

<div class="note">
    <strong>Note:</strong> This AI-generated lesson plan provides a structured framework for teaching. 
    Feel free to adapt the content, duration, and activities based on your students' needs and classroom dynamics.
</div>`;
    } else if (modalState.htmlContent) {
      // Use existing HTML content
      htmlContent = modalState.htmlContent;
    }

    // Import the downloadAsPDF function from utils
    const filename = modalState.title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    downloadAsPDF(htmlContent, filename, modalState.title);

    handleExportMenuClose();
  };

  // Fallback HTML generator for when API returns HTML instead of structured data
  const generateFallbackSessionDetailHTML = (
    sessionPlan: SessionPlan,
    chapter: Chapter
  ): string => {
    return `
      <div style="font-family: 'Roboto', sans-serif;">
        <div style="background-color: #e3f2fd; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
          <h2 style="color: #1976d2; margin-bottom: 8px;">Session ${
            sessionPlan.sessionNumber
          }: ${sessionPlan.title}</h2>
          <p style="margin-bottom: 8px;"><strong>Duration:</strong> ${
            sessionPlan.duration
          }</p>
          <p style="margin-bottom: 16px;">${sessionPlan.summary}</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <h3 style="color: #1976d2; margin-bottom: 12px;">Learning Objectives</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${sessionPlan.objectives
              .map((obj) => `<li style="margin-bottom: 8px;">${obj}</li>`)
              .join("")}
          </ul>
        </div>
        
        <div style="margin-bottom: 24px;">
          <h3 style="color: #1976d2; margin-bottom: 12px;">Introduction (5-10 minutes)</h3>
          <p>Begin the session by connecting today's topic to real-world applications. Engage students with thought-provoking questions related to ${
            chapter.title
          }.</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <h3 style="color: #1976d2; margin-bottom: 12px;">Core Content (20-30 minutes)</h3>
          <p>Detailed explanation of key concepts with step-by-step examples. Include visual aids and interactive demonstrations to enhance understanding.</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <h3 style="color: #1976d2; margin-bottom: 12px;">Activities (10-15 minutes)</h3>
          <p>Hands-on exercises and group work to reinforce learning. Include problem-solving activities that allow students to apply the concepts.</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <h3 style="color: #1976d2; margin-bottom: 12px;">Assessment (5-10 minutes)</h3>
          <p>Quick formative assessment to check student understanding. Include both individual and collaborative evaluation methods.</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; font-style: italic; color: #666;">
          <strong>Note:</strong> This is a fallback lesson plan. For AI-generated detailed content, please try again or check your connection.
        </div>
      </div>
    `;
  };

  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Header Info */}
      <Paper
        sx={{
          backgroundColor: "#e3f2fd",
          padding: 2,
          borderRadius: 1,
          marginBottom: 3,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          📚 This session plan has been generated specifically for your teaching
          requirements using AI. Each session is designed to build upon previous
          learning and provide comprehensive coverage of the chapter.
        </Typography>
      </Paper>

      {/* Session Plans */}
      {sessionPlans.map((session) => (
        <Paper
          key={session.sessionNumber}
          sx={{
            marginBottom: 3,
            padding: 2.5,
            border: "1px solid #e0e0e0",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 1 }}
          >
            Session {session.sessionNumber}: {session.title}
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 1.5, color: "#666" }}>
            <strong>Duration:</strong> {session.duration}
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
            {session.summary}
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "primary.main",
                marginBottom: 1,
                fontSize: "1.1em",
              }}
            >
              Learning Objectives:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {session.objectives.map((obj, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {obj}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Get Details Button */}
          <Button
            variant="contained"
            startIcon={<MenuBook />}
            onClick={() => handleGetDetails(session)}
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
              },
            }}
          >
            {session.detailContent
              ? "View Detailed Content"
              : "Get Detailed Teaching Content"}
          </Button>
        </Paper>
      ))}

      {/* Footer Note */}
      <Paper
        sx={{
          marginTop: 3,
          padding: 2,
          backgroundColor: "#f5f5f5",
          fontStyle: "italic",
          color: "#666",
        }}
      >
        <Typography variant="body2">
          <strong>Note:</strong> This AI-generated session plan provides a
          structured framework for teaching. Feel free to adapt the content,
          duration, and activities based on your students' needs and classroom
          dynamics.
        </Typography>
      </Paper>

      {/* Detailed Content Modal */}
      <Modal
        open={modalState.isOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "90%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflow: "auto",
            padding: 3,
            position: "relative",
          }}
        >
          {/* Modal Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {modalState.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Export Button */}
              {(modalState.content || modalState.htmlContent) &&
                !modalState.isLoading && (
                  <Button
                    variant="outlined"
                    startIcon={<FileDownload />}
                    onClick={handleExportMenuOpen}
                    size="small"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    Export
                  </Button>
                )}
              <IconButton onClick={handleCloseModal}>
                <Close />
              </IconButton>
            </Box>
          </Box>

          {/* Export Menu */}
          <Menu
            anchorEl={modalState.exportMenuAnchor}
            open={Boolean(modalState.exportMenuAnchor)}
            onClose={handleExportMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleExportAsPDF}>
              <ListItemIcon>
                <PictureAsPdf fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Export as PDF (.pdf)" />
            </MenuItem>
            <MenuItem onClick={handleCopyToClipboard}>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Copy to Clipboard" />
            </MenuItem>
          </Menu>

          {/* Modal Content */}
          {modalState.isLoading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
              }}
            >
              <CircularProgress size={60} sx={{ marginBottom: 2 }} />
              <Typography variant="body1">
                Generating detailed teaching content...
              </Typography>
            </Box>
          ) : modalState.content ? (
            // Render new structured content
            <DetailedLessonPlanRenderer content={modalState.content} />
          ) : modalState.htmlContent ? (
            // Fallback to HTML content
            <Box
              sx={{
                "& h3, & h4, & h5, & h6": { color: "primary.main" },
                "& p": { marginBottom: 2 },
                "& ul, & ol": { marginBottom: 2 },
              }}
              dangerouslySetInnerHTML={{ __html: modalState.htmlContent }}
            />
          ) : (
            <Typography variant="body1">No content available.</Typography>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

// Keep the original function for backward compatibility
export const generateSessionPlanHTML = (
  sessionPlans: SessionPlan[]
): string => {
  const sessionHTML = sessionPlans
    .map(
      (session) => `
      <div style="margin-bottom: 24px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <h3 style="color: #1976d2; margin-bottom: 8px;">Session ${
          session.sessionNumber
        }: ${session.title}</h3>
        <p style="margin-bottom: 12px; color: #666;"><strong>Duration:</strong> ${
          session.duration
        }</p>
        <p style="margin-bottom: 16px; line-height: 1.6;">${session.summary}</p>
        <div>
          <h4 style="color: #1976d2; margin-bottom: 8px; font-size: 1.1em;">Learning Objectives:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${session.objectives
              .map((obj) => `<li style="margin-bottom: 4px;">${obj}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <div style="font-family: 'Roboto', sans-serif;">
      <p style="background-color: #e3f2fd; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-weight: 500;">
        📚 This session plan has been generated specifically for your teaching requirements using AI. 
        Each session is designed to build upon previous learning and provide comprehensive coverage of the chapter.
      </p>
      ${sessionHTML}
      <div style="margin-top: 24px; padding: 16px; background-color: #f5f5f5; border-radius: 8px; font-style: italic; color: #666;">
        <strong>Note:</strong> This AI-generated session plan provides a structured framework for teaching. 
        Feel free to adapt the content, duration, and activities based on your students' needs and classroom dynamics.
      </div>
    </div>
  `;
};

export default SessionPlanRenderer;
