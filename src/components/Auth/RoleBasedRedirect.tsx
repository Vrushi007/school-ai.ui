import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Box, CircularProgress } from "@mui/material";
import { ROUTES } from "../../constants/common";
import Home from "../Home";

const RoleBasedRedirect: React.FC = () => {
  const { user, isCheckingAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCheckingAuth && user) {
      // Role hierarchy: system_admin > school_admin > teacher > parent > student
      const roleName = user.role.name;
      
      switch (roleName) {
        case 'teacher':
          navigate(ROUTES.TEACHER_DASHBOARD, { replace: true });
          break;
        case 'student':
          navigate(ROUTES.STUDENT_DASHBOARD, { replace: true });
          break;
        case 'parent':
          // TODO: Add parent dashboard route when implemented
          navigate(ROUTES.STUDENT_DASHBOARD, { replace: true });
          break;
        case 'system_admin':
        case 'school_admin':
        default:
          // Admins stay on home page with all options
          break;
      }
    }
  }, [user, isCheckingAuth, navigate]);

  if (isCheckingAuth) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Only show Home component for Admin users (system_admin and school_admin)
  if (user && ['system_admin', 'school_admin'].includes(user.role.name)) {
    return <Home />;
  }

  // For other roles, show loading while redirecting
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default RoleBasedRedirect;
