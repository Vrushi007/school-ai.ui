import React from "react";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import {
  GeneratedContent,
  UserType,
  ClassLevel,
  Subject,
  Chapter,
} from "../types";
import SessionPlanRenderer from "./SessionPlanRenderer";

interface MainContentProps {
  title: string;
  isLoading: boolean;
  currentContent: GeneratedContent | null;
  userType?: UserType | null;
  classLevel?: ClassLevel | null;
  subject?: Subject | null;
  chapter?: Chapter | null;
}

const MainContent: React.FC<MainContentProps> = ({
  title,
  isLoading,
  currentContent,
  userType,
  classLevel,
  subject,
  chapter,
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper elevation={2} sx={{ p: 3, minHeight: "500px" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, borderBottom: "2px solid #f0f0f0", pb: 2 }}
        >
          {title}
        </Typography>

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
        ) : currentContent ? (
          currentContent.type === "session-plan" &&
          currentContent.sessionPlans &&
          userType &&
          classLevel &&
          subject &&
          chapter ? (
            <SessionPlanRenderer
              sessionPlans={currentContent.sessionPlans}
              userType={userType}
              classLevel={classLevel}
              subject={subject}
              chapter={chapter}
            />
          ) : (
            <Box
              sx={{ "& h3, & h4, & h5, & h6": { color: "primary.main" } }}
              dangerouslySetInnerHTML={{ __html: currentContent.content }}
            />
          )
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
