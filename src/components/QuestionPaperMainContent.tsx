import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardContent,
  Chip,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Quiz,
  CheckCircle,
  FileDownload,
  PictureAsPdf,
  ContentCopy,
} from "@mui/icons-material";
import { Chapter } from "../types";
import { Question } from "../services/teacherServices/types";
import {
  downloadAsPDF,
  copyToClipboard,
  sanitizeFilename,
} from "../services/exportServices/sessionPlanExport";

interface QuestionPaperMainContentProps {
  isLoading: boolean;
  generatedQuestions: Question[];
  selectedChapters: Chapter[];
}

const QuestionPaperMainContent: React.FC<QuestionPaperMainContentProps> = ({
  isLoading,
  generatedQuestions,
  selectedChapters,
}) => {
  const [exportMenuAnchor, setExportMenuAnchor] = useState<HTMLElement | null>(
    null
  );

  const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setExportMenuAnchor(event.currentTarget);
  };

  const handleExportMenuClose = () => {
    setExportMenuAnchor(null);
  };

  // Format questions for export (questions only)
  const formatQuestionsForExport = () => {
    const questionsHtml = generatedQuestions
      .map((question, index) => {
        let questionContent = `
        <div class="question">
          <div class="question-header">
            <strong>Question ${index + 1} (${question.marks} marks)</strong>
          </div>
          <div class="question-text">
            ${question.question || question.questionText}
          </div>`;

        // Add options for multiple choice questions
        if (question.type === "multiple-choice" && question.options) {
          questionContent += `
          <div class="options">
            ${question.options
              .map(
                (option, optionIndex) =>
                  `<div class="option">${String.fromCharCode(
                    65 + optionIndex
                  )}. ${option}</div>`
              )
              .join("")}
          </div>`;
        }

        questionContent += `</div>`;
        return questionContent;
      })
      .join("");

    const totalMarks = generatedQuestions.reduce((sum, q) => sum + q.marks, 0);
    const chaptersText = selectedChapters.map((ch) => ch.title).join(", ");

    return `
      <div class="header">
        <h1>Question Paper</h1>
        <p><strong>Chapters:</strong> ${chaptersText}</p>
        <p><strong>Total Questions:</strong> ${generatedQuestions.length}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Time:</strong> 3 hours</p>
      </div>
      
      <div class="instructions">
        <h3>Instructions:</h3>
        <ul>
          <li>All questions are compulsory</li>
          <li>Write your answers clearly and legibly</li>
          <li>Time management is important</li>
        </ul>
      </div>
      
      <div class="questions">
        ${questionsHtml}
      </div>
      
      <style>
        .question { margin-bottom: 25px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
        .question-header { margin-bottom: 10px; color: #1976d2; }
        .question-text { margin-bottom: 10px; line-height: 1.5; }
        .options { margin-left: 20px; }
        .option { margin-bottom: 5px; }
        .instructions { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 8px; }
        @media print { 
          .question { page-break-inside: avoid; }
          .header { page-break-after: avoid; }
        }
      </style>`;
  };

  // Format answers for export (answers only)
  const formatAnswersForExport = () => {
    const answersHtml = generatedQuestions
      .map((question, index) => {
        let answerContent = `
        <div class="answer">
          <div class="answer-header">
            <strong>Answer ${index + 1}</strong>
          </div>
          <div class="question-reference">
            Question: ${(question.question || question.questionText).substring(
              0,
              50
            )}...
          </div>`;

        // Add correct answer for multiple choice
        if (question.type === "multiple-choice" && question.correctAnswer) {
          answerContent += `
          <div class="correct-answer">
            <strong>Correct Answer:</strong> ${question.correctAnswer}
          </div>`;
        }

        // Add explanation if available
        if (question.explanation) {
          answerContent += `
          <div class="explanation">
            <strong>Explanation:</strong> ${question.explanation}
          </div>`;
        }

        // Add space for written answers
        if (
          question.type === "short-answer" ||
          question.type === "long-answer"
        ) {
          const lines = question.type === "short-answer" ? 5 : 10;
          answerContent += `
          <div class="answer-space">
            <strong>Expected Answer:</strong>
            <div class="lines">
              ${Array(lines)
                .fill(
                  '<div class="line">_______________________________________________________</div>'
                )
                .join("")}
            </div>
          </div>`;
        }

        answerContent += `</div>`;
        return answerContent;
      })
      .join("");

    return `
      <div class="header">
        <h1>Answer Key</h1>
        <p><strong>Chapters:</strong> ${selectedChapters
          .map((ch) => ch.title)
          .join(", ")}</p>
      </div>
      
      <div class="answers">
        ${answersHtml}
      </div>
      
      <style>
        .answer { margin-bottom: 25px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
        .answer-header { margin-bottom: 8px; color: #1976d2; }
        .question-reference { margin-bottom: 10px; font-style: italic; color: #666; }
        .correct-answer { margin-bottom: 10px; color: #2e7d32; }
        .explanation { margin-bottom: 10px; line-height: 1.5; }
        .answer-space { margin-top: 10px; }
        .lines { margin-top: 10px; }
        .line { margin-bottom: 15px; color: #999; }
        @media print { 
          .answer { page-break-inside: avoid; }
          .header { page-break-after: avoid; }
        }
      </style>`;
  };

  // Combined format for both questions and answers
  const formatQuestionPaperForExport = () => {
    const questionsSection = formatQuestionsForExport();
    const answersSection = formatAnswersForExport();

    return `
      ${questionsSection}
      
      <div style="page-break-before: always; margin-top: 50px;">
        ${answersSection}
      </div>`;
  };

  const formatQuestionPaperText = () => {
    const totalMarks = generatedQuestions.reduce((sum, q) => sum + q.marks, 0);
    const chaptersText = selectedChapters.map((ch) => ch.title).join(", ");

    let text = `QUESTION PAPER
${"=".repeat(50)}
Chapters: ${chaptersText}
Total Questions: ${generatedQuestions.length}
Total Marks: ${totalMarks}
Time: 3 hours

INSTRUCTIONS:
• All questions are compulsory
• Write your answers clearly and legibly
• Time management is important

${"=".repeat(50)}
QUESTIONS:
${"=".repeat(50)}

`;

    generatedQuestions.forEach((question, index) => {
      text += `Question ${index + 1} (${question.marks} marks)\n`;
      text += `${question.question || question.questionText}\n`;

      if (question.type === "multiple-choice" && question.options) {
        question.options.forEach((option, optionIndex) => {
          text += `${String.fromCharCode(65 + optionIndex)}. ${option}\n`;
        });
      }

      text += `\n${"_".repeat(40)}\n\n`;
    });

    text += `\n${"=".repeat(50)}\nANSWER KEY:\n${"=".repeat(50)}\n\n`;

    generatedQuestions.forEach((question, index) => {
      text += `Answer ${index + 1}\n`;
      text += `Question: ${(
        question.question || question.questionText
      ).substring(0, 50)}...\n`;

      if (question.type === "multiple-choice" && question.correctAnswer) {
        text += `Correct Answer: ${question.correctAnswer}\n`;
      }

      if (question.explanation) {
        text += `Explanation: ${question.explanation}\n`;
      }

      text += `\n${"_".repeat(40)}\n\n`;
    });

    return text;
  };

  const handleExportAsPDF = () => {
    if (generatedQuestions.length === 0) return;

    const htmlContent = formatQuestionPaperForExport();
    const filename = sanitizeFilename(
      `question_paper_${selectedChapters.map((ch) => ch.title).join("_")}`
    );
    downloadAsPDF(htmlContent, filename, "Question Paper");
    handleExportMenuClose();
  };

  const handleExportQuestionsOnly = () => {
    if (generatedQuestions.length === 0) return;

    const htmlContent = formatQuestionsForExport();
    const filename = sanitizeFilename(
      `questions_only_${selectedChapters.map((ch) => ch.title).join("_")}`
    );
    downloadAsPDF(htmlContent, filename, "Questions Only");
    handleExportMenuClose();
  };

  const handleExportAnswersOnly = () => {
    if (generatedQuestions.length === 0) return;

    const htmlContent = formatAnswersForExport();
    const filename = sanitizeFilename(
      `answers_only_${selectedChapters.map((ch) => ch.title).join("_")}`
    );
    downloadAsPDF(htmlContent, filename, "Answer Key");
    handleExportMenuClose();
  };

  const handleCopyToClipboard = async () => {
    if (generatedQuestions.length === 0) return;

    const textContent = formatQuestionPaperText();
    try {
      const success = await copyToClipboard(textContent);
      if (success) {
        console.log("Question paper copied to clipboard");
      } else {
        console.error("Failed to copy to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
    handleExportMenuClose();
  };
  const getQuestionTypeColor = (type: Question["type"]) => {
    switch (type) {
      case "multiple-choice":
        return "primary";
      case "short-answer":
        return "secondary";
      case "long-answer":
        return "success";
      case "true-false":
        return "warning";
      default:
        return "default";
    }
  };

  const getQuestionTypeLabel = (type: Question["type"]) => {
    switch (type) {
      case "multiple-choice":
        return "Multiple Choice";
      case "short-answer":
        return "Short Answer";
      case "long-answer":
        return "Long Answer";
      case "true-false":
        return "True/False";
      default:
        return type;
    }
  };

  const renderQuestion = (question: Question, index: number) => {
    return (
      <Card key={question.id} sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Typography variant="h6" component="h3" sx={{ flex: 1 }}>
              Question {index + 1}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Chip
                label={getQuestionTypeLabel(question.type)}
                color={getQuestionTypeColor(question.type)}
                size="small"
              />
              <Chip
                label={`${question.marks} marks`}
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
            {question.question}
          </Typography>

          {question.type === "multiple-choice" && question.options && (
            <Box sx={{ ml: 2 }}>
              <RadioGroup>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={option}
                    control={<Radio size="small" />}
                    label={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography variant="body2">
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </Typography>
                        {question.correctAnswer === option && (
                          <CheckCircle color="success" fontSize="small" />
                        )}
                      </Box>
                    }
                    disabled
                  />
                ))}
              </RadioGroup>
              {question.correctAnswer && (
                <Typography
                  variant="caption"
                  color="success.main"
                  sx={{ mt: 1, display: "block" }}
                >
                  Correct Answer: {question.correctAnswer}
                </Typography>
              )}
            </Box>
          )}

          {(question.type === "short-answer" ||
            question.type === "long-answer") && (
            <Box sx={{ ml: 2, mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {question.type === "short-answer"
                  ? "Expected answer length: 2-3 sentences"
                  : "Expected answer length: 1-2 paragraphs"}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    );
  };

  if (isLoading) {
    return (
      <Paper elevation={2} sx={{ flex: 1, p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 400,
            gap: 2,
          }}
        >
          <CircularProgress size={60} />
          <Typography variant="h6" color="text.secondary">
            Generating Questions...
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Our AI is creating customized questions based on your requirements
          </Typography>
        </Box>
      </Paper>
    );
  }

  if (generatedQuestions.length === 0) {
    return (
      <Paper elevation={2} sx={{ flex: 1, p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 400,
            gap: 2,
          }}
        >
          <Quiz sx={{ fontSize: 80, color: "text.secondary" }} />
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Ready to Generate Questions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 400 }}
          >
            Select your class, subject, chapter, and specify your question
            requirements in the left panel to get started.
          </Typography>
        </Box>
      </Paper>
    );
  }

  const totalMarks = generatedQuestions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <Paper elevation={2} sx={{ flex: 1, p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Generated Question Paper
            </Typography>
            {selectedChapters.length > 0 && (
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Chapters:{" "}
                {selectedChapters.map((chapter) => chapter.title).join(", ")}
              </Typography>
            )}
          </Box>

          {generatedQuestions.length > 0 && (
            <Box sx={{ ml: 2 }}>
              <IconButton
                onClick={handleExportMenuOpen}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                title="Export question paper"
              >
                <FileDownload />
              </IconButton>

              <Menu
                anchorEl={exportMenuAnchor}
                open={Boolean(exportMenuAnchor)}
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
                <MenuItem onClick={handleExportQuestionsOnly}>
                  <ListItemIcon>
                    <PictureAsPdf fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Export Questions Only (PDF)" />
                </MenuItem>
                <MenuItem onClick={handleExportAnswersOnly}>
                  <ListItemIcon>
                    <PictureAsPdf fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Export Answer Key Only (PDF)" />
                </MenuItem>
                <MenuItem onClick={handleExportAsPDF}>
                  <ListItemIcon>
                    <PictureAsPdf fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Export Complete Paper (Questions + Answers)" />
                </MenuItem>
                <MenuItem onClick={handleCopyToClipboard}>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Copy to Clipboard" />
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Chip
            label={`${generatedQuestions.length} Questions`}
            color="primary"
            variant="outlined"
          />
          <Chip
            label={`Total Marks: ${totalMarks}`}
            color="secondary"
            variant="outlined"
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box>
        {generatedQuestions.map((question, index) =>
          renderQuestion(question, index)
        )}
      </Box>
    </Paper>
  );
};

export default QuestionPaperMainContent;
