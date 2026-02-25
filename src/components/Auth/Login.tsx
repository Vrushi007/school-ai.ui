import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Link as MuiLink,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import companyLogo from "../../assets/images/company-logo.jpeg";
import { ROUTES } from "../../constants/common";
import "../../App.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    const success = await login(email, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <Box className="auth-container">
      <Paper className="auth-form-wrapper" elevation={8}>
        {/* Logo and Title */}
        <Box className="auth-header">
          <Box
            component="img"
            src={companyLogo}
            alt="Company Logo"
            className="auth-header-logo"
          />
          <Typography variant="h4" component="h1" className="auth-header-title">
            VYON
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="auth-header-subtitle"
          >
            Boundless Knowledge Platform
          </Typography>
        </Box>

        {/* Form Title */}
        <Typography variant="h5" component="h2" className="auth-form-title">
          Login to Your Account
        </Typography>

        {/* Error Message */}
        {error && (
          <Alert severity="error" className="auth-form-error">
            {error}
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Forgot Password Link */}
          <Box sx={{ mt: 2, mb: 3, textAlign: "right" }}>
            <MuiLink
              component={Link}
              to={ROUTES.FORGOT_PASSWORD}
              sx={{
                textDecoration: "none",
                color: "#667eea",
                fontSize: "0.875rem",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Forgot Password?
            </MuiLink>
          </Box>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading || !email || !password}
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              fontSize: "1rem",
              fontWeight: 600,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6ddb 0%, #6a4296 100%)",
              },
              "&:disabled": {
                background: "rgba(102, 126, 234, 0.6)",
              },
            }}
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                }}
              />
            ) : (
              "Login"
            )}
          </Button>
        </form>

        {/* Sign Up Link */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <MuiLink
              component={Link}
              to="/register"
              sx={{
                textDecoration: "none",
                color: "#667eea",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign Up
            </MuiLink>
          </Typography>
        </Box>

        {/* Demo Credentials */}
        <Box
          sx={{
            mt: 4,
            p: 2,
            backgroundColor: "rgba(102, 126, 234, 0.1)",
            borderRadius: 1,
            border: "1px solid rgba(102, 126, 234, 0.3)",
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            Demo Credentials:
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
            Email: admin@vyon.com
          </Typography>
          <Typography variant="caption" display="block">
            Password: admin123
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
