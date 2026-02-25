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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import companyLogo from "../../assets/images/company-logo.jpeg";
import "../../App.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    roleId: 3, // Default to teacher role
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { register, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.username) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.fullName) {
      errors.fullName = "Full name is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validateForm()) {
      return;
    }

    const result = await register(
      formData.email,
      formData.username,
      formData.password,
      formData.fullName,
      formData.roleId,
    );

    if (result.success) {
      setSuccessMessage(
        result.message ||
          "Registration successful! Your account is pending approval by an administrator.",
      );
      setSuccessModalOpen(true);
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
    navigate("/login");
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
          Create Your Account
        </Typography>

        {/* Error Message */}
        {error && (
          <Alert severity="error" className="auth-form-error">
            {error}
          </Alert>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Full Name */}
          <TextField
            fullWidth
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            error={!!validationErrors.fullName}
            helperText={validationErrors.fullName}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            error={!!validationErrors.email}
            helperText={validationErrors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Username */}
          <TextField
            fullWidth
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            error={!!validationErrors.username}
            helperText={validationErrors.username}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Role Selection */}
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Role</InputLabel>
            <Select
              name="roleId"
              value={formData.roleId}
              onChange={handleSelectChange}
              label="Role"
              disabled={true}
            >
              <MenuItem value={3}>Teacher</MenuItem>
            </Select>
          </FormControl>

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            error={!!validationErrors.password}
            helperText={validationErrors.password}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
            disabled={isLoading}
            variant="outlined"
            error={!!validationErrors.confirmPassword}
            helperText={validationErrors.confirmPassword}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading}
            sx={{
              mt: 3,
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
              "Create Account"
            )}
          </Button>
        </form>

        {/* Sign In Link */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            Already have an account?{" "}
            <MuiLink
              component={Link}
              to="/login"
              sx={{
                textDecoration: "none",
                color: "#667eea",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign In
            </MuiLink>
          </Typography>
        </Box>
      </Paper>

      {/* Success Modal */}
      <Dialog
        open={successModalOpen}
        onClose={handleSuccessModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          Registration Successful! 🎉
        </DialogTitle>
        <DialogContent sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {successMessage}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You will receive an email notification once your account has been
            activated.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            onClick={handleSuccessModalClose}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              px: 4,
              "&:hover": {
                background:
                  "linear-gradient(135deg, #5568d3 0%, #6a3d8f 100%)",
              },
            }}
          >
            Go to Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Register;
