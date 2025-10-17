import React from "react";
import "./App.css";
import { Container, Paper, Typography } from "@mui/material";
import { School } from "@mui/icons-material";
import { Routes, Route, Link } from "react-router-dom";
import LessonPlanner from "./components/LessonPlanner";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Student from "./components/Student";

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
        <Link to="/" style={{ textDecoration: "none" }}>
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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/lesson-plan" element={<LessonPlanner />} />
      </Routes>
    </Container>
  );
}

export default App;
