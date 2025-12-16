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
import {
  SessionPlan,
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../types";

interface LeftSidebarProps {
  // Content API Selection
  selectedBoard: ContentBoard | null;
  selectedAPIClass: ContentClass | null;
  selectedAPISubject: ContentSubject | null;
  selectedAPIChapter: ContentChapter | null;

  plannedSessions: number | null;
  isLoading: boolean;
  sessionPlans: SessionPlan[];
  selectedSessionId: number | null;

  // Content API Data
  boards: ContentBoard[];
  classes: ContentClass[];
  subjects: ContentSubject[];
  chapters: ContentChapter[];

  // Handlers
  onBoardChange: (board: ContentBoard | null) => void;
  onAPIClassChange: (classItem: ContentClass | null) => void;
  onAPISubjectChange: (subject: ContentSubject | null) => void;
  onAPIChapterChange: (chapter: ContentChapter | null) => void;

  onPlannedSessionsChange: (sessions: number | null) => void;
  onGenerateContent: () => void;
  onSessionSelect: (sessionNumber: number) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  selectedBoard,
  selectedAPIClass,
  selectedAPISubject,
  selectedAPIChapter,
  plannedSessions,
  isLoading,
  sessionPlans,
  selectedSessionId,
  boards,
  classes,
  subjects,
  chapters,
  onBoardChange,
  onAPIClassChange,
  onAPISubjectChange,
  onAPIChapterChange,
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
              {/* New Dropdowns for Content API */}
              <FormControl fullWidth>
                <InputLabel>Board</InputLabel>
                <Select
                  value={selectedBoard?.id || ""}
                  label="Board"
                  onChange={(e) => {
                    const board = boards.find(
                      (b) => b.id === Number(e.target.value)
                    );
                    onBoardChange(board || null);
                  }}
                >
                  <MenuItem value="">Select Board</MenuItem>
                  {boards.map((board) => (
                    <MenuItem key={board.id} value={board.id}>
                      {board.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth disabled={!selectedBoard}>
                <InputLabel>Class</InputLabel>
                <Select
                  value={selectedAPIClass?.id || ""}
                  label="Class"
                  onChange={(e) => {
                    const classItem = classes.find(
                      (c) => c.id === Number(e.target.value)
                    );
                    onAPIClassChange(classItem || null);
                  }}
                >
                  <MenuItem value="">Select Class</MenuItem>
                  {classes.map((cls) => (
                    <MenuItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth disabled={!selectedAPIClass}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={selectedAPISubject?.id || ""}
                  label="Subject"
                  onChange={(e) => {
                    const subject = subjects.find(
                      (s) => s.id === Number(e.target.value)
                    );
                    onAPISubjectChange(subject || null);
                  }}
                >
                  <MenuItem value="">Select Subject</MenuItem>
                  {subjects.map((subj) => (
                    <MenuItem key={subj.id} value={subj.id}>
                      {subj.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth disabled={!selectedAPISubject}>
                <InputLabel>Chapter</InputLabel>
                <Select
                  value={selectedAPIChapter?.id || ""}
                  label="Chapter"
                  onChange={(e) => {
                    const chapter = chapters.find(
                      (c) => c.id === Number(e.target.value)
                    );
                    onAPIChapterChange(chapter || null);
                  }}
                >
                  <MenuItem value="">Select Chapter</MenuItem>
                  {chapters.map((chap, index) => (
                    <MenuItem key={chap.id} value={chap.id}>
                      {index + 1}. {chap.title}
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
