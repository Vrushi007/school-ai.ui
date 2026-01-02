import React from "react";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/common";
import GenerateKPs from "../../Admin/GenerateKPs";

const ViewKnowledgePoints: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ROUTES.TEACHER_DASHBOARD);
  };

  return (
    <Box>
      {/* Back Button */}
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={handleBackClick}
        sx={{ mb: 2 }}
      >
        Back to Dashboard
      </Button>

      {/* Reuse the GenerateKPs component */}
      <GenerateKPs />
    </Box>
  );
};

export default ViewKnowledgePoints;
