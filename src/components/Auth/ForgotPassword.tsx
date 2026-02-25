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
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/common";
import { API_AUTH_URL, makePostRequest } from "../../services/baseService";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [resetToken, setResetToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setResetToken("");
    setIsLoading(true);
    try {
      const data = await makePostRequest(`${API_AUTH_URL}/auth/forgot-password`, {
        email,
      }) as any;

      setSuccess(
        data.message ||
          "If this email is registered, a password reset link has been sent.",
      );
      // In development, the API returns the token for testing
      if (data.resetToken) {
        setResetToken(data.resetToken);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send reset link.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseResetToken = () => {
    if (resetToken) {
      navigate(`${ROUTES.RESET_PASSWORD}?token=${resetToken}`);
    }
  };

  return (
    <Box className="auth-container">
      <Paper className="auth-form-wrapper" elevation={8}>
        <Typography
          variant="h5"
          component="h2"
          className="auth-form-title"
          sx={{ mb: 2 }}
        >
          Forgot Password
        </Typography>
        {success && <Alert severity="success">{success}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        {resetToken && (
          <Box sx={{ mt: 2 }}>
            <Alert severity="info">
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Development Mode:</strong> Reset token generated
              </Typography>
              <Button
                variant="contained"
                size="small"
                onClick={handleUseResetToken}
                sx={{ mt: 1 }}
              >
                Reset Password Now
              </Button>
            </Alert>
          </Box>
        )}

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
          />
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading}
            sx={{ mt: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Send Reset Link"}
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

export default ForgotPassword;
