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
} from "@mui/material";
import { Quiz, ExpandMore } from "@mui/icons-material";
import { ClassLevel, Subject, Chapter } from "../types";

interface QuestionPaperLeftSidebarProps {
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  selectedChapters: Chapter[];
  questionRequirements: string;
  isLoading: boolean;
  chapterOptions: Chapter[];
  onClassLevelChange: (classLevel: ClassLevel | "") => void;
  onSubjectChange: (subject: Subject | "") => void;
  onChapterChange: (chapterIds: string[]) => void;
  onQuestionRequirementsChange: (requirements: string) => void;
  onGenerateQuestions: () => void;
}

const QuestionPaperLeftSidebar: React.FC<QuestionPaperLeftSidebarProps> = ({
  selectedClass,
  selectedSubject,
  selectedChapters,
  questionRequirements,
  isLoading,
  chapterOptions,
  onClassLevelChange,
  onSubjectChange,
  onChapterChange,
  onQuestionRequirementsChange,
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
                  <MenuItem value="8th">8th Standard</MenuItem>
                  <MenuItem value="9th">9th Standard</MenuItem>
                  <MenuItem value="10th">10th Standard</MenuItem>
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
                  <MenuItem value="mathematics">Mathematics</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="history">History</MenuItem>
                  <MenuItem value="geography">Geography</MenuItem>
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
                      {index + 1}. {chapter.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Question Requirements"
                placeholder="Specify what kind of questions you need. Examples:
• 5 multiple choice questions (2 marks each)
• 3 short answer questions (5 marks each)
• 2 long answer questions (10 marks each)
• 1 true/false question (1 mark each)"
                value={questionRequirements}
                onChange={(e) => onQuestionRequirementsChange(e.target.value)}
                variant="outlined"
                helperText="Describe the types and number of questions you want to generate"
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
