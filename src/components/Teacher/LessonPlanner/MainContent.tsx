import React from "react";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { ClassLevel, Subject, Chapter } from "../../../types";
import { GroupedSession } from "../../../services/teacherServices/types";
import { KeyPoint } from "../../../services/contentService";
import SessionSummaryCard from "./SessionSummaryCard";

interface MainContentProps {
  title: string;
  isLoading: boolean;
  classLevel?: ClassLevel | null;
  subject?: Subject | null;
  chapter?: Chapter | null;
  groupedSessions?: GroupedSession[] | null;
  keyPoints?: KeyPoint[];
  onGenerateSessionSummary?: (sessionMapId: number) => Promise<void>;
  onError?: (message: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  title,
  isLoading,
  classLevel,
  subject,
  chapter,
  groupedSessions,
  keyPoints,
  onGenerateSessionSummary,
  onError,
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper elevation={2} sx={{ p: 3, minHeight: "500px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              borderBottom: "2px solid #f0f0f0",
              pb: 2,
              flex: 1,
            }}
          >
            {title}
          </Typography>
        </Box>

        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 6,
            }}
          >
            <CircularProgress size={60} sx={{ mb: 2 }} />
            <Typography variant="body1">Generating content...</Typography>
          </Box>
        ) : groupedSessions && groupedSessions.length > 0 ? (
          <Box>
            <Typography variant="h6" sx={{ mb: 3, color: "primary.main" }}>
              Knowledge Points Grouped into Sessions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {groupedSessions.map((session) => (
                <SessionSummaryCard
                  key={session.sessionMapId}
                  session={session}
                  keyPoints={keyPoints || []}
                  onGenerateSessionSummary={onGenerateSessionSummary}
                  onError={onError}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <MenuBook sx={{ fontSize: 80, color: "grey.400", mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              Please select your preferences from the left panel to generate
              educational content.
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default MainContent;
