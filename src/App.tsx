import React from "react";
import "./App.css";
import { Box, Container, Paper, Typography, Button } from "@mui/material";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LessonPlanner from "./components/Teacher/LessonPlanner/LessonPlanner";
import MyLessonPlans from "./components/Teacher/MyLessonPlans/MyLessonPlans";
import Teacher from "./components/Teacher/Teacher";
import { ROUTES } from "./constants/common";
import companyLogo from "../src/assets/images/company-logo.jpeg";
import "katex/dist/katex.min.css";
import Admin from "./components/Admin/Admin";
import Student from "./components/Student/Student";
import QuestionPaperGenerator from "./components/Teacher/QuestionPaperGenerator/QuestionPaperGenerator";
import StudentGetAnswers from "./components/Student/StudentGetAnswers";
import ViewKnowledgePoints from "./components/Teacher/LessonPlanner/ViewKnowledgePoints";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import RoleBasedRedirect from "./components/Auth/RoleBasedRedirect";

// Header Component (extracted to use useAuth hook)
const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated && user) {
      // Role hierarchy: system_admin > school_admin > teacher > parent > student
      const roleName = user.role.name;
      
      switch (roleName) {
        case 'system_admin':
        case 'school_admin':
          navigate(ROUTES.HOME);
          break;
        case 'teacher':
          navigate(ROUTES.TEACHER_DASHBOARD);
          break;
        case 'student':
        case 'parent':
          navigate(ROUTES.STUDENT_DASHBOARD);
          break;
        default:
          navigate(ROUTES.HOME);
      }
    } else {
      navigate("/login");
    }
  };

  return (
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          onClick={handleLogoClick}
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
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

        {/* Right-side Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isAuthenticated ? (
            <>
              <Typography sx={{ color: "white", mr: 2 }}>
                {user?.fullName || user?.username}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                  },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="text"
                size="small"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

// Main App Content Component
const AppContent: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route
          path={ROUTES.HOME}
          element={
            <ProtectedRoute>
              <RoleBasedRedirect />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.TEACHER_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <Teacher />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.STUDENT_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[5, 4]}>
              <Student />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute allowedRoles={[1, 2]}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.LESSON_PLANNER}
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <LessonPlanner />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.MY_LESSON_PLANS}
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <MyLessonPlans />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.QUESTION_PAPER_GENERATOR}
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <QuestionPaperGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.KNOWLEDGE_POINTS}
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <ViewKnowledgePoints />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.STUDENT_GET_ANSWERS}
          element={
            <ProtectedRoute allowedRoles={[5, 4]}>
              <StudentGetAnswers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Container>
  );
};

// Main App with AuthProvider
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
