import React from "react";
import "./App.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import LessonPlanner from "./components/LessonPlanner";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import QuestionPaperGenerator from "./components/QuestionPaperGenerator";
import StudentGetAnswers from "./components/StudentGetAnswers";
import { ROUTES } from "./constants/common";
import companyLogo from "../src/assets/images/company-logo.jpeg";
import "katex/dist/katex.min.css";

function App() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
