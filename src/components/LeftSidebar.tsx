import React, { useState } from "react";
import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Assignment, ExpandMore, PlayCircleOutline } from "@mui/icons-material";
import { ClassLevel, Subject, Chapter, SessionPlan } from "../types";
import { getClasses, getSubjectsForClass } from "../utils/teacherUtils";

interface LeftSidebarProps {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapter: Chapter | null;
  plannedSessions: number | null;
  isLoading: boolean;
  chapterOptions: Chapter[];
  sessionPlans: SessionPlan[];
  selectedSessionId: number | null;
  onClassLevelChange: (classLevel: ClassLevel | "") => void;
  onSubjectChange: (subject: Subject | "") => void;
  onChapterChange: (chapterId: string) => void;
  onPlannedSessionsChange: (sessions: number | null) => void;
  onGenerateContent: () => void;
  onSessionSelect: (sessionNumber: number) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  selectedClass,
  selectedSubject,
  selectedChapter,
  plannedSessions,
  isLoading,
  chapterOptions,
  sessionPlans,
  selectedSessionId,
  onClassLevelChange,
  onSubjectChange,
  onChapterChange,
  onPlannedSessionsChange,
  onGenerateContent,
  onSessionSelect,
}) => {
  const [isFormExpanded, setIsFormExpanded] = useState(true);
  return (
    <Box sx={{ flex: "0 0 300px" }}>
      <Paper elevation={2} sx={{ p: 0, height: "fit-content" }}>
        {/* Settings Form Accordion */}
        <Accordion
          expanded={isFormExpanded}
          onChange={() => setIsFormExpanded(!isFormExpanded)}
          sx={{ boxShadow: "none", "&:before": { display: "none" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              px: 3,
              py: 2,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Class</InputLabel>
                <Select
                  value={selectedClass || ""}
                  label="Class"
                  onChange={(e) =>
                    onClassLevelChange(e.target.value as ClassLevel)
                  }
                >
                  <MenuItem value="">Select Class</MenuItem>
                  {getClasses().map((classLevel) => (
                    <MenuItem key={classLevel} value={classLevel}>
                      {classLevel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={selectedSubject || ""}
                  label="Subject"
                  onChange={(e) => onSubjectChange(e.target.value as Subject)}
                >
                  <MenuItem value="">Select Subject</MenuItem>
                  {getSubjectsForClass(selectedClass).map((subject) => (
                    <MenuItem key={subject} value={subject}>
                      {subject.charAt(0).toUpperCase() + subject.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Chapter</InputLabel>
                <Select
                  value={selectedChapter?.id || ""}
                  label="Chapter"
                  onChange={(e) => onChapterChange(e.target.value)}
                >
                  <MenuItem value="">Select Chapter</MenuItem>
                  {chapterOptions.map((chapter, index) => (
                    <MenuItem key={chapter.id} value={chapter.id}>
                      {index + 1}. {chapter.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Planned Class Sessions</InputLabel>
                <Select
                  value={plannedSessions || ""}
                  label="Planned Class Sessions"
                  onChange={(e) => {
                    const value = e.target.value;
                    onPlannedSessionsChange(
                      value ? parseInt(String(value)) : null
                    );
                  }}
                >
                  <MenuItem value="">Select Sessions</MenuItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                size="large"
                onClick={onGenerateContent}
                disabled={isLoading}
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : <Assignment />
                }
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                  },
                }}
              >
                {isLoading ? "Generating..." : "Generate Session Plan"}
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Session Plans List */}
        {sessionPlans.length > 0 && (
          <>
            <Divider />
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Session Plans
              </Typography>
              <List dense sx={{ bgcolor: "background.paper" }}>
                {sessionPlans.map((session) => (
                  <ListItem key={session.sessionNumber} disablePadding>
                    <ListItemButton
                      selected={selectedSessionId === session.sessionNumber}
                      onClick={() => onSessionSelect(session.sessionNumber)}
                      sx={{
                        borderRadius: 1,
                        mb: 1,
                        border: "1px solid #e0e0e0",
                        "&.Mui-selected": {
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                          },
                        },
                      }}
                    >
                      <PlayCircleOutline
                        sx={{
                          mr: 2,
                          color:
                            selectedSessionId === session.sessionNumber
                              ? "white"
                              : "primary.main",
                        }}
                      />
                      <ListItemText
                        primary={`Session ${session.sessionNumber}`}
                        secondary={session.title}
                        secondaryTypographyProps={{
                          sx: {
                            color:
                              selectedSessionId === session.sessionNumber
                                ? "rgba(255,255,255,0.8)"
                                : "text.secondary",
                            fontSize: "0.85rem",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default LeftSidebar;
