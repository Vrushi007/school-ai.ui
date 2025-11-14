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
    const totalMarks = generatedQuestions.reduce((sum, q) => sum + q.marks, 0);
    const chaptersText = selectedChapters.map((ch) => ch.title).join(", ");

    // Group questions by section
    const questionsBySection = generatedQuestions.reduce((acc, question) => {
      const sectionName = question.sectionName || "General";
      if (!acc[sectionName]) {
        acc[sectionName] = {
          description: question.sectionDescription || "",
          questions: [],
        };
      }
      acc[sectionName].questions.push(question);
      return acc;
    }, {} as Record<string, { description: string; questions: Question[] }>);

    let questionCounter = 0;
    const sectionsHtml = Object.entries(questionsBySection)
      .map(([sectionName, sectionData]) => {
        const sectionQuestionsHtml = sectionData.questions
          .map((question) => {
            questionCounter++;
            let questionContent = `
            <div class="question">
              <div class="question-header">
                <strong>Question ${questionCounter} (${question.marks} marks)</strong>
              </div>`;

            // Add case text if present
            if (question.caseText) {
              questionContent += `
              <div class="case-text">
                <strong>Case Study:</strong><br>
                ${question.caseText}
              </div>`;
            }

            questionContent += `
              <div class="question-text">
                ${question.question || question.questionText}
              </div>`;

            // Add sub-questions if present
            if (question.subQuestions && question.subQuestions.length > 0) {
              questionContent += `<div class="sub-questions">`;
              question.subQuestions.forEach((subQ) => {
                questionContent += `
                <div class="sub-question">
                  <strong>(${subQ.subQNo})</strong> ${subQ.questionText} [${
                  subQ.marks
                } mark${subQ.marks !== 1 ? "s" : ""}]
                </div>`;
              });
              questionContent += `</div>`;
            }

            // Add options for multiple choice questions
            if (
              (question.type === "multiple-choice" ||
                question.type === "MCQ") &&
              question.options
            ) {
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

        return `
        <div class="section">
          <div class="section-header">
            <h2>Section ${sectionName}</h2>
            <p class="section-description">${sectionData.description}</p>
            <p class="section-info">${sectionData.questions.length} question${
          sectionData.questions.length !== 1 ? "s" : ""
        } • ${sectionData.questions.reduce(
          (sum, q) => sum + q.marks,
          0
        )} marks</p>
          </div>
          ${sectionQuestionsHtml}
        </div>`;
      })
      .join("");

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
          <li>Use diagrams wherever necessary</li>
        </ul>
      </div>
      
      <div class="sections">
        ${sectionsHtml}
      </div>
      
      <style>
        .section { margin-bottom: 30px; }
        .section-header { margin-bottom: 20px; padding: 15px; background-color: #f0f7ff; border-radius: 8px; }
        .section-header h2 { margin: 0 0 10px 0; color: #1976d2; }
        .section-description { margin: 5px 0; font-style: italic; }
        .section-info { margin: 5px 0; font-size: 0.9em; color: #666; }
        .question { margin-bottom: 25px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
        .question-header { margin-bottom: 10px; color: #1976d2; }
        .question-text { margin-bottom: 10px; line-height: 1.5; }
        .case-text { margin: 10px 0; padding: 10px; background-color: #f9f9f9; border-radius: 4px; }
        .sub-questions { margin: 10px 0 10px 20px; }
        .sub-question { margin: 8px 0; padding: 8px; border-left: 3px solid #ddd; }
        .options { margin-left: 20px; }
        .option { margin-bottom: 5px; }
        .instructions { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 8px; }
        @media print { 
          .question { page-break-inside: avoid; }
          .section-header { page-break-after: avoid; }
          .header { page-break-after: avoid; }
        }
      </style>`;
  };

  // Format answers for export (answers only)
  const formatAnswersForExport = () => {
    let questionCounter = 0;
    const answersHtml = generatedQuestions
      .map((question) => {
        questionCounter++;
        let answerContent = `
        <div class="answer">
          <div class="answer-header">
            <strong>Answer ${questionCounter}</strong>
            ${
              question.sectionName
                ? ` <span class="section-ref">(Section ${question.sectionName})</span>`
                : ""
            }
          </div>
          <div class="question-reference">
            Question: ${(question.question || question.questionText).substring(
              0,
              80
            )}${
          (question.question || question.questionText).length > 80 ? "..." : ""
        }
          </div>`;

        // Handle case-based questions with sub-questions
        if (question.subQuestions && question.subQuestions.length > 0) {
          answerContent += `<div class="sub-answers">`;
          question.subQuestions.forEach((subQ) => {
            answerContent += `
            <div class="sub-answer">
              <strong>(${subQ.subQNo})</strong> ${subQ.questionText}
              ${
                subQ.answerHints ? `<br><em>Hint: ${subQ.answerHints}</em>` : ""
              }
              <div class="answer-lines">
                ${Array(3)
                  .fill(
                    '<div class="line">_______________________________________________________</div>'
                  )
                  .join("")}
              </div>
            </div>`;
          });
          answerContent += `</div>`;
        }

        // Add correct answer for multiple choice
        if (
          (question.type === "multiple-choice" || question.type === "MCQ") &&
          question.correctAnswer
        ) {
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

        // Add space for written answers (non-MCQ and non-case-based)
        if (
          !question.subQuestions &&
          (question.type === "short-answer" ||
            question.type === "long-answer" ||
            question.type === "VSA" ||
            question.type === "SA" ||
            question.type === "LA")
        ) {
          const lines =
            question.type === "VSA" || question.type === "short-answer"
              ? 3
              : question.type === "SA"
              ? 5
              : 8;
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
        .section-ref { font-size: 0.9em; color: #666; }
        .question-reference { margin-bottom: 10px; font-style: italic; color: #666; }
        .sub-answers { margin: 10px 0; }
        .sub-answer { margin: 10px 0; padding: 10px; border-left: 3px solid #ddd; }
        .answer-lines { margin: 5px 0; }
        .correct-answer { margin-bottom: 10px; color: #2e7d32; font-weight: 600; }
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
${"=".repeat(60)}
Chapters: ${chaptersText}
Total Questions: ${generatedQuestions.length}
Total Marks: ${totalMarks}
Time: 3 hours

INSTRUCTIONS:
• All questions are compulsory
• Write your answers clearly and legibly
• Time management is important
• Use diagrams wherever necessary

${"=".repeat(60)}
QUESTIONS:
${"=".repeat(60)}

`;

    // Group questions by section
    const questionsBySection = generatedQuestions.reduce((acc, question) => {
      const sectionName = question.sectionName || "General";
      if (!acc[sectionName]) {
        acc[sectionName] = {
          description: question.sectionDescription || "",
          questions: [],
        };
      }
      acc[sectionName].questions.push(question);
      return acc;
    }, {} as Record<string, { description: string; questions: Question[] }>);

    let questionCounter = 0;

    Object.entries(questionsBySection).forEach(([sectionName, sectionData]) => {
      text += `SECTION ${sectionName}\n`;
      text += `${"-".repeat(30)}\n`;
      text += `${sectionData.description}\n`;
      text += `${sectionData.questions.length} question${
        sectionData.questions.length !== 1 ? "s" : ""
      } • ${sectionData.questions.reduce(
        (sum, q) => sum + q.marks,
        0
      )} marks\n\n`;

      sectionData.questions.forEach((question) => {
        questionCounter++;
        text += `Question ${questionCounter} (${question.marks} marks)\n`;

        if (question.caseText) {
          text += `Case Study: ${question.caseText}\n\n`;
        }

        text += `${question.question || question.questionText}\n`;

        if (question.subQuestions && question.subQuestions.length > 0) {
          question.subQuestions.forEach((subQ) => {
            text += `  (${subQ.subQNo}) ${subQ.questionText} [${
              subQ.marks
            } mark${subQ.marks !== 1 ? "s" : ""}]\n`;
            if (subQ.answerHints) {
              text += `      Hint: ${subQ.answerHints}\n`;
            }
          });
        }

        if (
          (question.type === "multiple-choice" || question.type === "MCQ") &&
          question.options
        ) {
          question.options.forEach((option, optionIndex) => {
            text += `${String.fromCharCode(65 + optionIndex)}. ${option}\n`;
          });
        }

        text += `\n${"_".repeat(50)}\n\n`;
      });

      text += `\n`;
    });

    text += `\n${"=".repeat(60)}\nANSWER KEY:\n${"=".repeat(60)}\n\n`;

    questionCounter = 0;
    generatedQuestions.forEach((question) => {
      questionCounter++;
      text += `Answer ${questionCounter}`;
      if (question.sectionName) {
        text += ` (Section ${question.sectionName})`;
      }
      text += `\n`;

      text += `Question: ${(
        question.question || question.questionText
      ).substring(0, 80)}${
        (question.question || question.questionText).length > 80 ? "..." : ""
      }\n`;

      if (question.subQuestions && question.subQuestions.length > 0) {
        question.subQuestions.forEach((subQ) => {
          text += `  (${subQ.subQNo}) ${subQ.questionText}\n`;
          if (subQ.answerHints) {
            text += `      Answer guideline: ${subQ.answerHints}\n`;
          }
        });
      }

      if (
        (question.type === "multiple-choice" || question.type === "MCQ") &&
        question.correctAnswer
      ) {
        text += `Correct Answer: ${question.correctAnswer}\n`;
      }

      if (question.explanation) {
        text += `Explanation: ${question.explanation}\n`;
      }

      text += `\n${"_".repeat(50)}\n\n`;
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
      case "MCQ":
        return "primary";
      case "short-answer":
      case "VSA":
        return "secondary";
      case "long-answer":
      case "SA":
        return "info";
      case "LA":
        return "success";
      case "CASE":
        return "warning";
      case "true-false":
        return "error";
      default:
        return "default";
    }
  };

  const getQuestionTypeLabel = (type: Question["type"]) => {
    switch (type) {
      case "multiple-choice":
      case "MCQ":
        return "Multiple Choice (MCQ)";
      case "very-short-answer":
      case "VSA":
        return "Very Short Answer (VSA)";
      case "short-answer":
      case "SA":
        return "Short Answer (SA)";
      case "long-answer":
      case "LA":
        return "Long Answer (LA)";
      case "CASE":
      case "case-based":
        return "Case-Based Question";
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
          {/* Question Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" component="h3">
                Question {index + 1}
              </Typography>
              {question.sectionName && (
                <Typography variant="caption" color="text.secondary">
                  Section {question.sectionName}: {question.sectionDescription}
                </Typography>
              )}
            </Box>
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
              {question.difficulty && (
                <Chip
                  label={question.difficulty}
                  variant="outlined"
                  size="small"
                  color="default"
                />
              )}
            </Box>
          </Box>

          {/* Case Text for Case-Based Questions */}
          {question.caseText && (
            <Box sx={{ mb: 2, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Case Study:
              </Typography>
              <Typography variant="body2">{question.caseText}</Typography>
            </Box>
          )}

          {/* Main Question Text */}
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
            {question.question || question.questionText}
          </Typography>

          {/* Sub-questions for Case-Based Questions */}
          {question.subQuestions && question.subQuestions.length > 0 && (
            <Box sx={{ ml: 2, mt: 2 }}>
              {question.subQuestions.map((subQ, subIndex) => (
                <Box
                  key={subIndex}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    ({subQ.subQNo}) {subQ.questionText} [{subQ.marks} mark
                    {subQ.marks !== 1 ? "s" : ""}]
                  </Typography>
                  {subQ.answerHints && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      Hint: {subQ.answerHints}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Multiple Choice Options */}
          {(question.type === "multiple-choice" || question.type === "MCQ") &&
            question.options && (
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

          {/* Answer Guidelines for Non-MCQ Questions */}
          {(question.type === "short-answer" ||
            question.type === "long-answer" ||
            question.type === "VSA" ||
            question.type === "SA" ||
            question.type === "LA") &&
            !question.subQuestions && (
              <Box
                sx={{ ml: 2, mt: 2, p: 1, bgcolor: "info.50", borderRadius: 1 }}
              >
                <Typography variant="caption" color="text.secondary">
                  {question.type === "VSA" || question.type === "short-answer"
                    ? "Expected answer length: 2-3 sentences or 30-50 words"
                    : question.type === "SA"
                    ? "Expected answer length: 3-5 sentences or 50-80 words"
                    : "Expected answer length: 1-2 paragraphs or 100-150 words"}
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
        {(() => {
          // Group questions by section
          const questionsBySection = generatedQuestions.reduce(
            (acc, question) => {
              const sectionName = question.sectionName || "General";
              if (!acc[sectionName]) {
                acc[sectionName] = {
                  description: question.sectionDescription || "",
                  questions: [],
                };
              }
              acc[sectionName].questions.push(question);
              return acc;
            },
            {} as Record<string, { description: string; questions: Question[] }>
          );

          let questionCounter = 0;

          return Object.entries(questionsBySection).map(
            ([sectionName, sectionData]) => (
              <Box key={sectionName} sx={{ mb: 4 }}>
                {/* Section Header */}
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    bgcolor: "primary.50",
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "primary.200",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "primary.dark" }}
                  >
                    Section {sectionName}
                  </Typography>
                  {sectionData.description && (
                    <Typography variant="body2" color="text.secondary">
                      {sectionData.description}
                    </Typography>
                  )}
                  <Typography variant="caption" color="primary.main">
                    {sectionData.questions.length} question
                    {sectionData.questions.length !== 1 ? "s" : ""} •
                    {sectionData.questions.reduce((sum, q) => sum + q.marks, 0)}{" "}
                    marks
                  </Typography>
                </Box>

                {/* Section Questions */}
                {sectionData.questions.map((question) => {
                  questionCounter++;
                  return renderQuestion(question, questionCounter - 1);
                })}
              </Box>
            )
          );
        })()}
      </Box>
    </Paper>
  );
};

export default QuestionPaperMainContent;
