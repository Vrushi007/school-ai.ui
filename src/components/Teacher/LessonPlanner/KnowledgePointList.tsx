import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  CircularProgress,
  Alert,
  Chip,
} from "@mui/material";
import {
  Psychology as PsychologyIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import {
  getKeyPointsByChapter,
  KeyPoint,
} from "../../../services/contentService";

interface KnowledgePointListProps {
  chapterId: number | null;
  chapterTitle: string;
  classLevel: string;
  subject: string;
}

const KnowledgePointList: React.FC<KnowledgePointListProps> = ({
  chapterId,
  chapterTitle,
  classLevel,
  subject,
}) => {
  const [keyPoints, setKeyPoints] = useState<KeyPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chapterId) {
      setKeyPoints([]);
      return;
    }

    const fetchKeyPoints = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getKeyPointsByChapter(chapterId);
        // Sort by id field
        const sortedData = data.sort((a, b) => a.id - b.id);
        setKeyPoints(sortedData);
      } catch (err) {
        console.error("Error fetching key points:", err);
        setError("Failed to load knowledge points");
      } finally {
        setLoading(false);
      }
    };

    fetchKeyPoints();
  }, [chapterId]);

  const getDifficultyColor = (difficulty: string) => {
    const normalized = difficulty?.toLowerCase().replace(/[_\s]/g, "");
    switch (normalized) {
      case "veryeasy":
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
      case "veryhard":
        return "error";
      default:
        return "default";
    }
  };

  if (!chapterId) {
    return (
      <Box
        sx={{
          flex: "0 0 40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 4,
            textAlign: "center",
            bgcolor: "#f9fafb",
            border: "2px dashed #e0e0e0",
          }}
        >
          <PsychologyIcon sx={{ fontSize: 60, color: "#bdbdbd", mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            Select a chapter to view
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Knowledge points will appear here
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: "0 0 30%", minWidth: 0 }}>
      <Paper
        elevation={2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <PsychologyIcon sx={{ fontSize: 28 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Knowledge Points
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
            Chapter: {chapterTitle || "Not Selected"}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {classLevel} · {subject}
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, overflow: "auto", p: 3 }}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 200,
              }}
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : keyPoints.length === 0 ? (
            <Alert severity="info">
              No knowledge points found for this chapter
            </Alert>
          ) : (
            <>
              {/* Total Count */}
              <Box
                sx={{
                  mb: 3,
                  p: 2,
                  bgcolor: "#f5f5f5",
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Total Knowledge Points: {keyPoints.length}
                </Typography>
              </Box>

              {/* Knowledge Points List */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {keyPoints.map((kp, index) => {
                  const difficulty = kp.difficultyLevel?.replace(/_/g, " ") || "Not specified";
                  const cognitiveLevel = kp.cognitiveLevel || "Not specified";

                  return (
                    <Paper
                      key={kp.id}
                      elevation={1}
                      sx={{
                        p: 2.5,
                        border: "1px solid #e0e0e0",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          boxShadow: 3,
                          borderColor: "#667eea",
                        },
                      }}
                    >
                      {/* KP Number and Title */}
                      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            minWidth: 36,
                            height: 36,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            flex: 1,
                            lineHeight: "36px",
                          }}
                        >
                          {kp.title}
                        </Typography>
                      </Box>

                      {/* Metadata */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          flexWrap: "wrap",
                          pl: 5.5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <TrendingUpIcon
                            sx={{ fontSize: 16, color: "#666" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "#666", fontWeight: 500 }}
                          >
                            Difficulty:
                          </Typography>
                          <Chip
                            label={difficulty}
                            size="small"
                            color={getDifficultyColor(difficulty)}
                            sx={{ height: 20, fontSize: "0.7rem" }}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <PsychologyIcon
                            sx={{ fontSize: 16, color: "#666" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "#666", fontWeight: 500 }}
                          >
                            Cognitive level:
                          </Typography>
                          <Chip
                            label={cognitiveLevel}
                            size="small"
                            variant="outlined"
                            sx={{
                              height: 20,
                              fontSize: "0.7rem",
                              borderColor: "#667eea",
                              color: "#667eea",
                            }}
                          />
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default KnowledgePointList;
