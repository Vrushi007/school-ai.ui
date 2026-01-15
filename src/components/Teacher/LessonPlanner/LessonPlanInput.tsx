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
} from "@mui/material";
import { Assignment, ExpandMore, PlayCircleOutline } from "@mui/icons-material";
import {
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../../../types";

interface LessonPlanInputProps {
  // Content API Selection
  selectedBoard: ContentBoard | null;
  selectedAPIClass: ContentClass | null;
  selectedAPISubject: ContentSubject | null;
  selectedAPIChapter: ContentChapter | null;

  plannedSessions: number | null;
  isLoading: boolean;
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
  onGroupKPs: () => void;
}

const LessonPlanInput: React.FC<LessonPlanInputProps> = ({
  selectedBoard,
  selectedAPIClass,
  selectedAPISubject,
  selectedAPIChapter,
  plannedSessions,
  isLoading,
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
  onGroupKPs,
}) => {
  const [isFormExpanded, setIsFormExpanded] = useState(true);
  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Paper elevation={2} sx={{ p: 0 }}>
        {/* Settings Form Accordion */}
        <Accordion
          expanded={isFormExpanded}
          onChange={() => setIsFormExpanded(!isFormExpanded)}
          sx={{ boxShadow: "none", "&:before": { display: "none" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              px: 2,
              py: 2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: isFormExpanded ? "4px 4px 0 0" : "4px",
              "& .MuiAccordionSummary-content": { margin: 0 },
              "& .MuiSvgIcon-root": { color: "white" },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Lesson Plan Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, py: 3 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {/* Dropdowns Row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flex: 1,
                  flexWrap: "wrap",
                  minWidth: 0,
                }}
              >
                <FormControl sx={{ minWidth: 150, flex: "1 1 150px" }}>
                  <InputLabel size="small">Board</InputLabel>
                  <Select
                    size="small"
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

                <FormControl
                  sx={{ minWidth: 120, flex: "1 1 120px" }}
                  disabled={!selectedBoard}
                >
                  <InputLabel size="small">Class</InputLabel>
                  <Select
                    size="small"
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

                <FormControl
                  sx={{ minWidth: 150, flex: "1 1 150px" }}
                  disabled={!selectedAPIClass}
                >
                  <InputLabel size="small">Subject</InputLabel>
                  <Select
                    size="small"
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

                <FormControl
                  sx={{ minWidth: 200, flex: "1 1 200px" }}
                  disabled={!selectedAPISubject}
                >
                  <InputLabel size="small">Chapter</InputLabel>
                  <Select
                    size="small"
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

                <FormControl sx={{ minWidth: 100, flex: "0 1 120px" }}>
                  <InputLabel size="small">Sessions</InputLabel>
                  <Select
                    size="small"
                    value={plannedSessions || ""}
                    label="Sessions"
                    onChange={(e) => {
                      const value = e.target.value;
                      onPlannedSessionsChange(
                        value ? parseInt(String(value)) : null
                      );
                    }}
                  >
                    <MenuItem value="">Select</MenuItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* Generate Button */}
              <Button
                variant="contained"
                onClick={onGroupKPs}
                disabled={
                  isLoading ||
                  !selectedBoard ||
                  !selectedAPIClass ||
                  !selectedAPISubject ||
                  !selectedAPIChapter ||
                  !plannedSessions
                }
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : <Assignment />
                }
                sx={{
                  minWidth: 180,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                  },
                  "&:disabled": {
                    background: "#e0e0e0",
                    color: "#999",
                  },
                }}
              >
                {isLoading ? "Grouping..." : "Group KPs to Sessions"}
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Session Plans Horizontal List */}
        {/* {sessionPlans.length > 0 && (
          <Box
            sx={{ borderTop: "1px solid #e0e0e0", p: 2, bgcolor: "#f5f5f5" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, minWidth: "fit-content" }}
              >
                Session Plans:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  overflowX: "auto",
                  flex: 1,
                  pb: 1,
                  "&::-webkit-scrollbar": {
                    height: 6,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#bbb",
                    borderRadius: 3,
                  },
                }}
              >
                {sessionPlans.map((session) => (
                  <Button
                    key={session.sessionNumber}
                    variant={
                      selectedSessionId === session.sessionNumber
                        ? "contained"
                        : "outlined"
                    }
                    disabled
                    startIcon={<PlayCircleOutline />}
                    sx={{
                      minWidth: "fit-content",
                      whiteSpace: "nowrap",
                      ...(selectedSessionId === session.sessionNumber
                        ? {
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                            },
                          }
                        : {
                            borderColor: "#667eea",
                            color: "#667eea",
                            "&:hover": {
                              borderColor: "#5a6fd8",
                              bgcolor: "rgba(102, 126, 234, 0.04)",
                            },
                          }),
                    }}
                  >
                    Session {session.sessionNumber}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        )} */}
      </Paper>
    </Box>
  );
};

export default LessonPlanInput;
