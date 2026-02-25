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
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { ROUTES } from "../../constants/common";
import { API_AUTH_URL, makePostRequest } from "../../services/baseService";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    try {
      await makePostRequest(`${API_AUTH_URL}/auth/reset-password`, {
        token,
        newPassword,
      });

      setSuccess(
        "Password has been reset successfully! Redirecting to login...",
      );
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to reset password. The link may be expired.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <Box className="auth-container">
        <Paper className="auth-form-wrapper" elevation={8}>
          <Typography
            variant="h5"
            component="h2"
            className="auth-form-title"
            sx={{ mb: 2 }}
          >
            Invalid Reset Link
          </Typography>
          <Alert severity="error">
            This password reset link is invalid. Please request a new password
            reset.
          </Alert>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <MuiLink component={Link} to={ROUTES.FORGOT_PASSWORD}>
              Request New Reset Link
            </MuiLink>
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <Box className="auth-container">
      <Paper className="auth-form-wrapper" elevation={8}>
        <Typography
          variant="h5"
          component="h2"
          className="auth-form-title"
          sx={{ mb: 2 }}
        >
          Reset Password
        </Typography>
        {success && <Alert severity="success">{success}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField
            fullWidth
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading}
            sx={{ mt: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Reset Password"}
          </Button>
        </form>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <MuiLink component={Link} to="/login">
            Back to Login
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
