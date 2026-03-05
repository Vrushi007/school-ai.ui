import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuBook, Quiz, Psychology, ListAlt } from "@mui/icons-material";
import { ROUTES } from "../../constants/common";

function Teacher() {
  const navigate = useNavigate();

  const handleLessonPlanningClick = () => {
    navigate(ROUTES.LESSON_PLANNER);
  };

  const handleMyLessonPlansClick = () => {
    navigate(ROUTES.MY_LESSON_PLANS);
  };

  const handleQuestionPaperClick = () => {
    navigate(ROUTES.QUESTION_PAPER_GENERATOR);
  };

  const handleKnowledgePointsClick = () => {
    navigate(ROUTES.KNOWLEDGE_POINTS);
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
          Teacher Dashboard
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Choose the tool you'd like to use
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
        {/* Lesson Planning Section */}
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
          onClick={handleLessonPlanningClick}
        >
          <MenuBook sx={{ fontSize: 60, color: "primary.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Lesson Planning
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Create detailed lesson plans with AI assistance for any subject and
            class level
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 8,
              px: 4,
              py: 2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
              },
            }}
          >
            Start Planning
          </Button>
        </Paper>

        {/* My Lesson Plans Section */}
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
          onClick={handleMyLessonPlansClick}
        >
          <ListAlt sx={{ fontSize: 60, color: "info.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            My Lesson Plans
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            View and manage all your generated lesson plans in one place
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="info"
            sx={{
              mt: 8,
              px: 4,
              py: 2,
            }}
          >
            View My Plans
          </Button>
        </Paper>

        {/* Question Paper Generation Section */}
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
          onClick={handleQuestionPaperClick}
        >
          <Quiz sx={{ fontSize: 60, color: "secondary.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Question Paper Generation
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Generate customized question papers and assessments for your
            students
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
            Generate Questions
          </Button>
        </Paper>

        {/* View Knowledge Points Section */}
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
          onClick={handleKnowledgePointsClick}
        >
          <Psychology sx={{ fontSize: 60, color: "success.main", mb: 3 }} />

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            View Knowledge Points
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Browse and view existing knowledge points across different subjects
            and chapters
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="success"
            sx={{
              mt: 2,
              px: 4,
              py: 2,
            }}
          >
            View Knowledge Points
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Teacher;
