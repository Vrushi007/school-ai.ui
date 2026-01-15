import React from "react";
import "./App.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import LessonPlanner from "./components/Teacher/LessonPlanner/LessonPlanner";
import Home from "./components/Home";
import Teacher from "./components/Teacher/Teacher";
import { ROUTES } from "./constants/common";
import companyLogo from "../src/assets/images/company-logo.jpeg";
import "katex/dist/katex.min.css";
import Admin from "./components/Admin/Admin";
import Student from "./components/Student/Student";
import QuestionPaperGenerator from "./components/Teacher/QuestionPaperGenerator/QuestionPaperGenerator";
import StudentGetAnswers from "./components/Student/StudentGetAnswers";
import ViewKnowledgePoints from "./components/Teacher/LessonPlanner/ViewKnowledgePoints";

function App() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        }}
      >
        <Link to="" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
            }}
          >
            {/* Company Logo */}
            <Box
              component="img"
              src={companyLogo}
              alt="Company Logo"
              sx={{
                width: 50,
                height: 50,
                objectFit: "contain",
              }}
            />
            {/* Company Name */}
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: "white",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              VYON Boundless Knowledge
            </Typography>
          </Box>
        </Link>
      </Paper>

      {/* Routes */}
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TEACHER_DASHBOARD} element={<Teacher />} />
        <Route path={ROUTES.STUDENT_DASHBOARD} element={<Student />} />
        <Route path={ROUTES.ADMIN} element={<Admin />} />
        <Route path={ROUTES.LESSON_PLANNER} element={<LessonPlanner />} />
        <Route
          path={ROUTES.QUESTION_PAPER_GENERATOR}
          element={<QuestionPaperGenerator />}
        />
        <Route
          path={ROUTES.KNOWLEDGE_POINTS}
          element={<ViewKnowledgePoints />}
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
