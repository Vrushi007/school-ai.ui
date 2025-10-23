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
import { SessionPlan, UserType, ClassLevel, Subject, Chapter } from "../types";
import { generateSessionDetail } from "../services/teacherServices/apiService";
import {
  downloadAsPDF,
  copyToClipboard,
} from "../services/exportServices/sessionPlanExport";

interface SessionPlanRendererProps {
  sessionPlans: SessionPlan[];
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
}

interface SessionDetailContent {
  sessionTitle: string;
  duration: string;
  introduction: {
    hook: string;
    overview: string;
    previousConnection?: string;
  };
  mainContent: {
    keyConcepts: string[];
    teachingSequence: string[];
    formulas?: string[];
    examples?: string[];
  };
  activities: {
    interactive: string[];
    practiceProblems?: string[];
    groupWork?: string;
    experiments?: string[];
  };
  assessment: {
    quickQuestions: string[];
    exitTicket: string;
    homework: string;
  };
  resources: {
    materials: string[];
    references: string[];
    additionalReading?: string[];
  };
  differentiation?: {
    strugglingLearners?: string;
    advancedStudents?: string;
    multipleStyles?: string;
  };
}

interface DetailModalState {
  isOpen: boolean;
  content: SessionDetailContent | null;
  htmlContent?: string; // For fallback HTML content
  title: string;
  isLoading: boolean;
  exportMenuAnchor: HTMLElement | null;
}

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
      try {
        // Try to parse as JSON first (new format)
        const parsedContent = JSON.parse(session.detailContent);
        setModalState((prev) => ({
          ...prev,
          content: parsedContent,
          isLoading: false,
        }));
      } catch {
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

      // Cache the content in the session object
      session.detailContent = detailContent;

      try {
        // Try to parse as JSON first (new format)
        const parsedContent = JSON.parse(detailContent);
        setModalState((prev) => ({
          ...prev,
          content: parsedContent,
          isLoading: false,
        }));
      } catch {
        // If parsing fails, treat as HTML (fallback format)
        setModalState((prev) => ({
          ...prev,
          content: null,
          htmlContent: detailContent,
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
      text += `Duration: ${content.duration}\n\n`;

      text += "INTRODUCTION\n";
      text += `Hook: ${content.introduction.hook}\n`;
      text += `Overview: ${content.introduction.overview}\n`;
      if (content.introduction.previousConnection) {
        text += `Previous Connection: ${content.introduction.previousConnection}\n`;
      }
      text += "\n";

      text += "MAIN CONTENT\n";
      text += "Key Concepts:\n";
      content.mainContent.keyConcepts.forEach((concept, i) => {
        text += `${i + 1}. ${concept}\n`;
      });
      text += "\nTeaching Sequence:\n";
      content.mainContent.teachingSequence.forEach((step, i) => {
        text += `${i + 1}. ${step}\n`;
      });

      if (
        content.mainContent.formulas &&
        content.mainContent.formulas.length > 0
      ) {
        text += "\nKey Formulas:\n";
        content.mainContent.formulas.forEach((formula) => {
          text += `• ${formula}\n`;
        });
      }

      if (
        content.mainContent.examples &&
        content.mainContent.examples.length > 0
      ) {
        text += "\nExamples:\n";
        content.mainContent.examples.forEach((example) => {
          text += `• ${example}\n`;
        });
      }
      text += "\n";

      text += "ACTIVITIES\n";
      text += "Interactive Activities:\n";
      content.activities.interactive.forEach((activity) => {
        text += `• ${activity}\n`;
      });

      if (
        content.activities.practiceProblems &&
        content.activities.practiceProblems.length > 0
      ) {
        text += "\nPractice Problems:\n";
        content.activities.practiceProblems.forEach((problem, i) => {
          text += `${i + 1}. ${problem}\n`;
        });
      }

      if (content.activities.groupWork) {
        text += `\nGroup Work: ${content.activities.groupWork}\n`;
      }

      if (
        content.activities.experiments &&
        content.activities.experiments.length > 0
      ) {
        text += "\nExperiments:\n";
        content.activities.experiments.forEach((experiment) => {
          text += `• ${experiment}\n`;
        });
      }
      text += "\n";

      text += "ASSESSMENT\n";
      text += "Quick Questions:\n";
      content.assessment.quickQuestions.forEach((question) => {
        text += `• ${question}\n`;
      });
      text += `\nExit Ticket: ${content.assessment.exitTicket}\n`;
      text += `Homework: ${content.assessment.homework}\n\n`;

      text += "RESOURCES\n";
      text += "Materials Needed:\n";
      content.resources.materials.forEach((material) => {
        text += `• ${material}\n`;
      });
      text += "\nReferences:\n";
      content.resources.references.forEach((reference) => {
        text += `• ${reference}\n`;
      });

      if (
        content.resources.additionalReading &&
        content.resources.additionalReading.length > 0
      ) {
        text += "\nAdditional Reading:\n";
        content.resources.additionalReading.forEach((reading) => {
          text += `• ${reading}\n`;
        });
      }

      if (content.differentiation) {
        text += "\nDIFFERENTIATION STRATEGIES\n";
        if (content.differentiation.strugglingLearners) {
          text += `For Struggling Learners: ${content.differentiation.strugglingLearners}\n`;
        }
        if (content.differentiation.advancedStudents) {
          text += `For Advanced Students: ${content.differentiation.advancedStudents}\n`;
        }
        if (content.differentiation.multipleStyles) {
          text += `Multiple Learning Styles: ${content.differentiation.multipleStyles}\n`;
        }
      }

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
    <p><strong>Duration:</strong> ${content.duration}</p>
</div>

<div class="section">
    <h2>Introduction</h2>
    <h3>Hook</h3>
    <p>${content.introduction.hook}</p>
    <h3>Overview</h3>
    <p>${content.introduction.overview}</p>
    ${
      content.introduction.previousConnection
        ? `<h3>Previous Connection</h3><p>${content.introduction.previousConnection}</p>`
        : ""
    }
</div>

<div class="section">
    <h2>Main Content</h2>
    <h3>Key Concepts</h3>
    <ul>
        ${content.mainContent.keyConcepts
          .map((concept) => `<li>${concept}</li>`)
          .join("")}
    </ul>
    <h3>Teaching Sequence</h3>
    <ol>
        ${content.mainContent.teachingSequence
          .map((step) => `<li>${step}</li>`)
          .join("")}
    </ol>
    ${
      content.mainContent.formulas && content.mainContent.formulas.length > 0
        ? `
    <h3>Key Formulas</h3>
    ${content.mainContent.formulas
      .map((formula) => `<div class="formula">${formula}</div>`)
      .join("")}
    `
        : ""
    }
    ${
      content.mainContent.examples && content.mainContent.examples.length > 0
        ? `
    <h3>Examples</h3>
    <ul>
        ${content.mainContent.examples
          .map((example) => `<li>${example}</li>`)
          .join("")}
    </ul>
    `
        : ""
    }
</div>

<div class="section">
    <h2>Activities</h2>
    <h3>Interactive Activities</h3>
    <ul>
        ${content.activities.interactive
          .map((activity) => `<li>${activity}</li>`)
          .join("")}
    </ul>
    ${
      content.activities.practiceProblems &&
      content.activities.practiceProblems.length > 0
        ? `
    <h3>Practice Problems</h3>
    <ol>
        ${content.activities.practiceProblems
          .map((problem) => `<li>${problem}</li>`)
          .join("")}
    </ol>
    `
        : ""
    }
    ${
      content.activities.groupWork
        ? `<h3>Group Work</h3><p>${content.activities.groupWork}</p>`
        : ""
    }
    ${
      content.activities.experiments &&
      content.activities.experiments.length > 0
        ? `
    <h3>Experiments</h3>
    <ul>
        ${content.activities.experiments
          .map((experiment) => `<li>${experiment}</li>`)
          .join("")}
    </ul>
    `
        : ""
    }
</div>

<div class="section">
    <h2>Assessment</h2>
    <h3>Quick Questions</h3>
    <ul>
        ${content.assessment.quickQuestions
          .map((question) => `<li>${question}</li>`)
          .join("")}
    </ul>
    <h3>Exit Ticket</h3>
    <p>${content.assessment.exitTicket}</p>
    <h3>Homework</h3>
    <p>${content.assessment.homework}</p>
</div>

<div class="section">
    <h2>Resources</h2>
    <h3>Materials Needed</h3>
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
    ${
      content.resources.additionalReading &&
      content.resources.additionalReading.length > 0
        ? `
    <h3>Additional Reading</h3>
    <ul>
        ${content.resources.additionalReading
          .map((reading) => `<li>${reading}</li>`)
          .join("")}
    </ul>
    `
        : ""
    }
</div>

${
  content.differentiation
    ? `
<div class="section">
    <h2>Differentiation Strategies</h2>
    ${
      content.differentiation.strugglingLearners
        ? `<h3>For Struggling Learners</h3><p>${content.differentiation.strugglingLearners}</p>`
        : ""
    }
    ${
      content.differentiation.advancedStudents
        ? `<h3>For Advanced Students</h3><p>${content.differentiation.advancedStudents}</p>`
        : ""
    }
    ${
      content.differentiation.multipleStyles
        ? `<h3>Multiple Learning Styles</h3><p>${content.differentiation.multipleStyles}</p>`
        : ""
    }
</div>
`
    : ""
}

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

  const renderStructuredContent = (content: SessionDetailContent) => {
    return (
      <Box sx={{ "& > *": { marginBottom: 3 } }}>
        {/* Session Header */}
        <Paper sx={{ padding: 2, backgroundColor: "#e3f2fd", borderRadius: 1 }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 1 }}
          >
            {content.sessionTitle}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Duration: {content.duration}
          </Typography>
        </Paper>

        {/* Introduction */}
        <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Introduction
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Hook:
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              {content.introduction.hook}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Overview:
            </Typography>
            <Typography variant="body2">
              {content.introduction.overview}
            </Typography>
          </Box>

          {content.introduction.previousConnection && (
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, marginBottom: 1 }}
              >
                Previous Connection:
              </Typography>
              <Typography variant="body2">
                {content.introduction.previousConnection}
              </Typography>
            </Box>
          )}
        </Paper>

        {/* Main Content */}
        <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Main Content
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Key Concepts:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.mainContent.keyConcepts.map((concept, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {concept}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Teaching Sequence:
            </Typography>
            <Box component="ol" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.mainContent.teachingSequence.map((step, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {step}
                </Typography>
              ))}
            </Box>
          </Box>

          {content.mainContent.formulas &&
            content.mainContent.formulas.length > 0 && (
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Key Formulas:
                </Typography>
                <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
                  {content.mainContent.formulas.map((formula, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{
                        marginBottom: 0.5,
                        fontFamily: "monospace",
                        backgroundColor: "#f5f5f5",
                        padding: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {formula}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}

          {content.mainContent.examples &&
            content.mainContent.examples.length > 0 && (
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Examples:
                </Typography>
                <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
                  {content.mainContent.examples.map((example, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ marginBottom: 0.5 }}
                    >
                      {example}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
        </Paper>

        {/* Activities */}
        <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Activities
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Interactive Activities:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.activities.interactive.map((activity, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {activity}
                </Typography>
              ))}
            </Box>
          </Box>

          {content.activities.practiceProblems &&
            content.activities.practiceProblems.length > 0 && (
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Practice Problems:
                </Typography>
                <Box component="ol" sx={{ margin: 0, paddingLeft: 2.5 }}>
                  {content.activities.practiceProblems.map((problem, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ marginBottom: 0.5 }}
                    >
                      {problem}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}

          {content.activities.groupWork && (
            <Box sx={{ marginBottom: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, marginBottom: 1 }}
              >
                Group Work:
              </Typography>
              <Typography variant="body2">
                {content.activities.groupWork}
              </Typography>
            </Box>
          )}

          {content.activities.experiments &&
            content.activities.experiments.length > 0 && (
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Experiments:
                </Typography>
                <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
                  {content.activities.experiments.map((experiment, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ marginBottom: 0.5 }}
                    >
                      {experiment}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
        </Paper>

        {/* Assessment */}
        <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Assessment
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Quick Questions:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.assessment.quickQuestions.map((question, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {question}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Exit Ticket:
            </Typography>
            <Typography variant="body2">
              {content.assessment.exitTicket}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Homework:
            </Typography>
            <Typography variant="body2">
              {content.assessment.homework}
            </Typography>
          </Box>
        </Paper>

        {/* Resources */}
        <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Resources
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Materials Needed:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.resources.materials.map((material, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {material}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              References:
            </Typography>
            <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
              {content.resources.references.map((reference, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {reference}
                </Typography>
              ))}
            </Box>
          </Box>

          {content.resources.additionalReading &&
            content.resources.additionalReading.length > 0 && (
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Additional Reading:
                </Typography>
                <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
                  {content.resources.additionalReading.map((reading, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      sx={{ marginBottom: 0.5 }}
                    >
                      {reading}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
        </Paper>

        {/* Differentiation */}
        {content.differentiation && (
          <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", marginBottom: 2 }}
            >
              Differentiation Strategies
            </Typography>

            {content.differentiation.strugglingLearners && (
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  For Struggling Learners:
                </Typography>
                <Typography variant="body2">
                  {content.differentiation.strugglingLearners}
                </Typography>
              </Box>
            )}

            {content.differentiation.advancedStudents && (
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  For Advanced Students:
                </Typography>
                <Typography variant="body2">
                  {content.differentiation.advancedStudents}
                </Typography>
              </Box>
            )}

            {content.differentiation.multipleStyles && (
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  Multiple Learning Styles:
                </Typography>
                <Typography variant="body2">
                  {content.differentiation.multipleStyles}
                </Typography>
              </Box>
            )}
          </Paper>
        )}
      </Box>
    );
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
            renderStructuredContent(modalState.content)
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
