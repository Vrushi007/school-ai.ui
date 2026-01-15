import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  IconButton,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import { KnowledgePoint } from "../../services/adminServices/apiService";

interface KnowledgePointCardProps {
  kp: KnowledgePoint;
  index: number;
}

const KnowledgePointCard: React.FC<KnowledgePointCardProps> = ({
  kp,
  index,
}) => {
  const [expanded, setExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Very Easy":
      case "Easy":
        return "success";
      case "Medium":
        return "warning";
      case "Hard":
      case "Very Hard":
        return "error";
      default:
        return "default";
    }
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            cursor: "pointer",
          }}
          onClick={handleToggleExpand}
        >
          <Box sx={{ flex: 1 }}>
            {/* KP ID and Section */}
            <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                KP{index + 1}
              </Typography>
              {kp.sectionTitle && (
                <Chip
                  label={`Section: ${kp.sectionTitle}`}
                  size="small"
                  sx={{
                    backgroundColor: "#f3e8ff",
                    color: "#7c3aed",
                    fontWeight: 500,
                  }}
                />
              )}
              {kp.difficultyLabel && (
                <Chip
                  label={kp.difficultyLabel}
                  color={getDifficultyColor(kp.difficultyLabel) as any}
                  size="small"
                />
              )}
              {kp.bloomLevel && (
                <Chip
                  label={kp.bloomLevel}
                  size="small"
                  sx={{
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                  }}
                />
              )}
            </Box>

            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {kp.kpTitle}
            </Typography>

            {/* Description */}
            <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "text.secondary",
                    display: "inline-block",
                    mr: 1,
                    flexShrink: 0,
                    mt: 0.7,
                  }}
                />
                {kp.kpDescription}
              </Typography>
            </Box>
          </Box>

          {/* Expand Icon */}
          <IconButton
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        {/* Expanded Content */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ mb: 2 }} />

            {/* Detailed Explanation */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Detailed Explanation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {kp.detailedExplanation}
              </Typography>
            </Box>

            {/* Prerequisites */}
            {kp.prerequisiteKps && kp.prerequisiteKps.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Prerequisites
                </Typography>
                <List dense>
                  {kp.prerequisiteKps.map((prereq, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon
                          sx={{ color: "success.main", fontSize: 20 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={prereq}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {/* Common Misconceptions */}
            {kp.misconceptionTags && kp.misconceptionTags.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Common Misconceptions
                </Typography>
                <List dense>
                  {kp.misconceptionTags.map((misconception, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <WarningIcon
                          sx={{ color: "error.main", fontSize: 20 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={misconception.replace(/_/g, " ")}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "error.main",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {/* Assessment Examples */}
            {kp.assessmentExamples && kp.assessmentExamples.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Real-World Applications
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {kp.assessmentExamples.map((example, idx) => (
                    <Chip
                      key={idx}
                      label={example}
                      size="small"
                      sx={{
                        backgroundColor: "#d1fae5",
                        color: "#065f46",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Auto-Grading Components */}
            <Box
              sx={{
                p: 2,
                backgroundColor: "#faf5ff",
                borderRadius: 1,
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "#7c3aed" }}
                >
                  📚 Auto-Grading Components
                </Typography>
              </Box>

              {/* Assessment Criteria */}
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, display: "block", mb: 1 }}
              >
                Assessment Criteria
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Can define and identify knowledge point
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#7c3aed" }}
                  >
                    40%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Can apply in context
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#7c3aed" }}
                  >
                    30%
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="caption" color="text.secondary">
                    Can identify related concepts
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#7c3aed" }}
                  >
                    30%
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Metadata */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Typography variant="caption" color="text.secondary">
                <strong>KP ID:</strong> {kp.kpId || "N/A"}
              </Typography>
              {kp.irtDifficulty !== undefined && kp.irtDifficulty !== null && (
                <Typography variant="caption" color="text.secondary">
                  <strong>IRT Difficulty:</strong> {kp.irtDifficulty.toFixed(2)}
                </Typography>
              )}
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default KnowledgePointCard;
