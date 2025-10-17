import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HelpOutline } from "@mui/icons-material";

function Student() {
  const navigate = useNavigate();

  const handleGetAnswersClick = () => {
    // Will implement later
    console.log("Get answers clicked");
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Student Dashboard
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Get AI-powered help with your studies
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Get Answers Section */}
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
          onClick={handleGetAnswersClick}
        >
          <HelpOutline sx={{ fontSize: 60, color: "primary.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Get Answers
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Ask questions and get detailed explanations on any topic you're
            studying
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
            Ask a Question
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Student;
