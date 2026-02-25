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
  TextField,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Quiz, ExpandMore } from "@mui/icons-material";
import {
  ContentBoard,
  ContentClass,
  ContentSubject,
  ContentChapter,
} from "../../../types";

interface QuestionPaperLeftSidebarProps {
  selectedBoard: ContentBoard | null;
  selectedClass: ContentClass | null;
  selectedSubject: ContentSubject | null;
  selectedChapters: ContentChapter[];
  totalMarks: number;
  isLoading: boolean;
  boards: ContentBoard[];
  classes: ContentClass[];
  subjects: ContentSubject[];
  chapters: ContentChapter[];
  onBoardChange: (board: ContentBoard | null) => void;
  onClassLevelChange: (classItem: ContentClass | null) => void;
  onSubjectChange: (subject: ContentSubject | null) => void;
  onChapterChange: (chapterIds: number[]) => void;
  onTotalMarksChange: (marks: number) => void;
  onGenerateQuestions: () => void;
}

const QuestionPaperLeftSidebar: React.FC<QuestionPaperLeftSidebarProps> = ({
  selectedBoard,
  selectedClass,
  selectedSubject,
  selectedChapters,
  totalMarks,
  isLoading,
  boards,
  classes,
  subjects,
  chapters,
  onBoardChange,
  onClassLevelChange,
  onSubjectChange,
  onChapterChange,
  onTotalMarksChange,
  onGenerateQuestions,
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
              Question Paper Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Board</InputLabel>
                <Select
                  value={selectedBoard?.id || ""}
                  label="Board"
                  onChange={(e) => {
                    const board =
                      boards.find((b) => b.id === e.target.value) || null;
                    onBoardChange(board);
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

              <FormControl fullWidth>
                <InputLabel>Class</InputLabel>
                <Select
                  value={selectedClass?.id || ""}
                  label="Class"
                  onChange={(e) => {
                    const classItem =
                      classes.find((c) => c.id === e.target.value) || null;
                    onClassLevelChange(classItem);
                  }}
                  disabled={!selectedBoard}
                >
                  <MenuItem value="">Select Class</MenuItem>
                  {classes.map((classItem) => (
                    <MenuItem key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={selectedSubject?.id || ""}
                  label="Subject"
                  onChange={(e) => {
                    const subject =
                      subjects.find((s) => s.id === e.target.value) || null;
                    onSubjectChange(subject);
                  }}
                  disabled={!selectedClass}
                >
                  <MenuItem value="">Select Subject</MenuItem>
                  {subjects.map((subject) => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Chapters</InputLabel>
                <Select
                  multiple
                  value={selectedChapters.map((chapter) => chapter.id)}
                  label="Chapters"
                  onChange={(e) => {
                    const value = e.target.value as number[];
                    onChapterChange(value);
                  }}
                  disabled={!selectedSubject}
                  sx={{
                    "& .MuiSelect-select": {
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                  renderValue={(selected) => {
                    if (selected.length === 0) return "Select Chapters";
                    if (selected.length === 1) {
                      const chapter = selectedChapters.find(
                        (c) => c.id === selected[0]
                      );
                      return chapter ? chapter.title : "Select Chapters";
                    }
                    return `${selected.length} chapters selected`;
                  }}
                >
                  {chapters.map((chapter) => (
                    <MenuItem key={chapter.id} value={chapter.id}>
                      <Checkbox
                        checked={selectedChapters.some(
                          (c) => c.id === chapter.id
                        )}
                        sx={{ padding: "4px 8px 4px 0" }}
                      />
                      <ListItemText
                        primary={`${chapter.chapterNumber}. ${chapter.title}`}
                        sx={{ margin: 0 }}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                type="number"
                label="Total Marks"
                placeholder="Enter total marks for the question paper"
                value={totalMarks || ""}
                onChange={(e) =>
                  onTotalMarksChange(parseInt(e.target.value) || 0)
                }
                variant="outlined"
                helperText="Enter the total marks for the question paper"
                inputProps={{ min: 1 }}
              />

              <Button
                variant="contained"
                size="large"
                onClick={onGenerateQuestions}
                disabled={isLoading}
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : <Quiz />
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
                {isLoading ? "Generating..." : "Generate Questions"}
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default QuestionPaperLeftSidebar;
