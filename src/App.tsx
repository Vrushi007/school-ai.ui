import React from "react";
import "./App.css";
import { Container, Paper, Typography } from "@mui/material";
import { School } from "@mui/icons-material";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import LessonPlanner from "./components/LessonPlanner";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import QuestionPaperGenerator from "./components/QuestionPaperGenerator";
import StudentGetAnswers from "./components/StudentGetAnswers";
import { ROUTES } from "./constants/common";

function App() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          mb: 3,
          p: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Link to="/school-ai.ui" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "white", fontWeight: 600 }}
          >
            <School sx={{ mr: 2, verticalAlign: "middle" }} />
            LearnAI Educational Platform
          </Typography>
        </Link>
      </Paper>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/school-ai.ui" replace />} />
        <Route path="/school-ai.ui" element={<Home />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TEACHER_DASHBOARD} element={<Teacher />} />
        <Route path={ROUTES.STUDENT_DASHBOARD} element={<Student />} />
        <Route path={ROUTES.LESSON_PLANNER} element={<LessonPlanner />} />
        <Route
          path={ROUTES.QUESTION_PAPER_GENERATOR}
          element={<QuestionPaperGenerator />}
        />
        <Route
          path={ROUTES.STUDENT_GET_ANSWERS}
          element={<StudentGetAnswers />}
        />
      </Routes>
    </Container>
  );
}

export default App;
