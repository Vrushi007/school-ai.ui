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
import { ClassLevel, Subject, Chapter } from "../types";
import { getClasses, getSubjectsForClass } from "../utils/teacherUtils";

interface QuestionPaperLeftSidebarProps {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapters: Chapter[];
  totalMarks: number;
  isLoading: boolean;
  chapterOptions: Chapter[];
  onClassLevelChange: (classLevel: ClassLevel | "") => void;
  onSubjectChange: (subject: Subject | "") => void;
  onChapterChange: (chapterIds: string[]) => void;
  onTotalMarksChange: (marks: number) => void;
  onGenerateQuestions: () => void;
}

const QuestionPaperLeftSidebar: React.FC<QuestionPaperLeftSidebarProps> = ({
  selectedClass,
  selectedSubject,
  selectedChapters,
  totalMarks,
  isLoading,
  chapterOptions,
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
                <InputLabel>Chapters</InputLabel>
                <Select
                  multiple
                  value={selectedChapters.map((chapter) => chapter.id)}
                  label="Chapters"
                  onChange={(e) => {
                    const value = e.target.value as string[];
                    onChapterChange(value);
                  }}
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
                  {chapterOptions.map((chapter, index) => (
                    <MenuItem key={chapter.id} value={chapter.id}>
                      <Checkbox
                        checked={selectedChapters.some(
                          (c) => c.id === chapter.id
                        )}
                        sx={{ padding: "4px 8px 4px 0" }}
                      />
                      <ListItemText
                        primary={`${index + 1}. ${chapter.title}`}
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
                onChange={(e) => onTotalMarksChange(parseInt(e.target.value) || 0)}
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
