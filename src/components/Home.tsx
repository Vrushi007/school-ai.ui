import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { School, Person, Groups } from "@mui/icons-material";

function Home() {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate("/school-ai.ui/teacher");
  };

  const handleStudentClick = () => {
    navigate("/school-ai.ui/student");
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <School sx={{ fontSize: 80, color: "primary.main", mb: 3 }} />

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Welcome to LearnAI
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
        >
          Your AI-powered educational companion
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* For Teachers Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            minWidth: 350,
            maxWidth: 400,
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
          onClick={handleTeacherClick}
        >
          <Person sx={{ fontSize: 60, color: "primary.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            For Teachers
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Create engaging lesson plans and generate question papers with AI
            assistance
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
              },
            }}
          >
            Get Started
          </Button>
        </Paper>

        {/* For Students Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            minWidth: 350,
            maxWidth: 400,
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
          onClick={handleStudentClick}
        >
          <Groups sx={{ fontSize: 60, color: "secondary.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            For Students
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Get personalized answers and explanations to help with your studies
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              mt: 2,
              px: 4,
              py: 2,
            }}
          >
            Get Started
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;
