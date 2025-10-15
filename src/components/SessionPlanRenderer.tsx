import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Modal,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Close, MenuBook } from "@mui/icons-material";
import { SessionPlan, UserType, ClassLevel, Subject, Chapter } from "../types";
import { generateSessionDetail } from "../services/openaiService";

interface SessionPlanRendererProps {
  sessionPlans: SessionPlan[];
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
}

interface DetailModalState {
  isOpen: boolean;
  content: string;
  title: string;
  isLoading: boolean;
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
    content: "",
    title: "",
    isLoading: false,
  });

  const handleGetDetails = async (session: SessionPlan) => {
    setModalState({
      isOpen: true,
      content: "",
      title: `${session.title} - Detailed Lesson Plan`,
      isLoading: !session.detailContent, // Don't show loading if we have cached content
    });

    // Check if we already have cached detailed content
    if (session.detailContent) {
      setModalState((prev) => ({
        ...prev,
        content: session.detailContent!,
        isLoading: false,
      }));
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

      setModalState((prev) => ({
        ...prev,
        content: detailContent,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error loading session details:", error);
      setModalState((prev) => ({
        ...prev,
        content: "<p>Error loading session details. Please try again.</p>",
        isLoading: false,
      }));
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      content: "",
      title: "",
      isLoading: false,
    });
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
            <IconButton onClick={handleCloseModal}>
              <Close />
            </IconButton>
          </Box>

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
          ) : (
            <Box
              sx={{
                "& h3, & h4, & h5, & h6": { color: "primary.main" },
                "& p": { marginBottom: 2 },
                "& ul, & ol": { marginBottom: 2 },
              }}
              dangerouslySetInnerHTML={{ __html: modalState.content }}
            />
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
