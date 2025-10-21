import React from "react";
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
} from "@mui/material";
import { Quiz, CheckCircle } from "@mui/icons-material";
import { Chapter } from "../types";
import { Question } from "../services/teacherServices/types";

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
