import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import {
  Psychology,
  CheckCircle,
  AutoAwesome,
  Close,
} from "@mui/icons-material";
import { GroupedSession } from "../../../services/teacherServices/types";
import { KeyPoint } from "../../../services/contentService";
import { generateSessionDetail } from "../../../services/teacherServices/apiService";
import DetailedLessonPlanRenderer from "../../SessionPlan/DetailedLessonPlanRenderer";
import { SessionDetailContent } from "../../../interfaces/sessionPlanRenderer";

interface SessionSummaryCardProps {
  session: GroupedSession;
  keyPoints: KeyPoint[];
  onGenerateSessionSummary?: (sessionMapId: number) => Promise<void>;
  onError?: (message: string) => void;
}

const SessionSummaryCard: React.FC<SessionSummaryCardProps> = ({
  session,
  keyPoints,
  onGenerateSessionSummary,
  onError,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingDetail, setIsGeneratingDetail] = useState(false);
  const [detailedContent, setDetailedContent] =
    useState<SessionDetailContent | null>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  // Get KP details for this session
  const sessionKPs = session.kpIds
    .map((kpId) => keyPoints?.find((kp) => kp.id === parseInt(kpId)))
    .filter((kp) => kp !== undefined) as KeyPoint[];

  const handleGenerateSummary = async () => {
    if (!onGenerateSessionSummary) return;

    setIsGenerating(true);
    try {
      await onGenerateSessionSummary(session.sessionMapId);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateDetailedContent = async () => {
    setIsGeneratingDetail(true);
    try {
      const response = await generateSessionDetail({
        sessionId: session.sessionMapId,
      });

      if (response.success && response.data) {
        // Convert the API response structure to match SessionDetailContent interface
        const apiContent = response.data.content;
        const contentWithStringDuration: SessionDetailContent = {
          ...apiContent,
          duration: `${apiContent.duration} minutes`,
          objectives: apiContent.objectives
            .split("\t")
            .map((obj) => obj.trim())
            .filter((obj) => obj.length > 0),
          resources: {
            ...apiContent.resources,
            youtubeVideos: {
              success: apiContent.resources.youtubeVideos.success,
              totalVideos: apiContent.resources.youtubeVideos.totalVideos,
              keywordsSearched:
                apiContent.resources.youtubeVideos.keywordsSearched,
              data: apiContent.resources.youtubeVideos.data.map(
                (video: any) => ({
                  videoId: video.videoId,
                  title: video.title,
                  description: video.description,
                  channelTitle: video.channelTitle,
                  channelId: video.channelId,
                  publishedAt: video.publishedAt,
                  thumbnailUrl: video.thumbnailUrl,
                  videoUrl: video.videoUrl,
                  embedUrl: video.embedUrl,
                  duration: video.duration,
                  viewCount: video.viewCount,
                  likeCount: video.likeCount,
                })
              ),
            },
          },
        };
        setDetailedContent(contentWithStringDuration);
        setShowDetailDialog(true);
      } else {
        if (onError) {
          onError("Failed to generate detailed content");
        }
      }
    } catch (error) {
      console.error("Error generating detailed content:", error);
      if (onError) {
        onError("An error occurred while generating detailed content");
      }
    } finally {
      setIsGeneratingDetail(false);
    }
  };

  return (
    <Card
      elevation={2}
      sx={{
        border: "1px solid #e0e0e0",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: 4,
          borderColor: "#667eea",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                minWidth: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: "1.2rem",
              }}
            >
              {session.sessionNumber}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {session.sessionTitle}
            </Typography>
          </Box>

          {!session.summary ? (
            <Button
              variant="outlined"
              onClick={handleGenerateSummary}
              disabled={isGenerating}
              startIcon={
                isGenerating ? <CircularProgress size={20} /> : <AutoAwesome />
              }
              sx={{
                borderColor: "#667eea",
                color: "#667eea",
                "&:hover": {
                  borderColor: "#5a6fd8",
                  bgcolor: "rgba(102, 126, 234, 0.04)",
                },
                "&:disabled": {
                  borderColor: "#e0e0e0",
                  color: "#999",
                },
              }}
            >
              {isGenerating ? "Generating..." : "Generate Session Summary"}
            </Button>
          ) : (
            session.summary && (
              // !session.isDetailedContentAvailable && (
              <Button
                variant="outlined"
                onClick={handleGenerateDetailedContent}
                disabled={isGeneratingDetail}
                startIcon={
                  isGeneratingDetail ? (
                    <CircularProgress size={20} />
                  ) : (
                    <AutoAwesome />
                  )
                }
                sx={{
                  borderColor: "#667eea",
                  color: "#667eea",
                  "&:hover": {
                    borderColor: "#5a6fd8",
                    bgcolor: "rgba(102, 126, 234, 0.04)",
                  },
                  "&:disabled": {
                    borderColor: "#e0e0e0",
                    color: "#999",
                  },
                }}
              >
                {isGeneratingDetail
                  ? "Generating..."
                  : "Generate Detailed Session Content"}
              </Button>
            )
          )}
        </Box>

        <Box sx={{ pl: 8 }}>
          {/* Summary Section */}
          {session.summary && (
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 1, color: "#667eea" }}
              >
                Session Summary
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {session.summary}
              </Typography>
            </Box>
          )}

          {/* Knowledge Points Section */}
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, mb: 2, color: "#667eea" }}
          >
            Knowledge Points ({sessionKPs.length})
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mb: 3,
            }}
          >
            {sessionKPs.map((kp, kpIndex) => (
              <Box
                key={kp.id}
                sx={{
                  p: 2,
                  bgcolor: "#f9fafb",
                  borderRadius: 1,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "#667eea",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {kpIndex + 1}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                      {kp.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Chip
                        icon={<Psychology sx={{ fontSize: 14 }} />}
                        label={kp.cognitiveLevel || "N/A"}
                        size="small"
                        variant="outlined"
                        sx={{
                          height: 24,
                          fontSize: "0.7rem",
                          borderColor: "#667eea",
                          color: "#667eea",
                        }}
                      />
                      <Chip
                        label={kp.difficultyLevel?.replace(/_/g, " ") || "N/A"}
                        size="small"
                        color={
                          kp.difficultyLevel?.toLowerCase().includes("easy")
                            ? "success"
                            : kp.difficultyLevel
                                ?.toLowerCase()
                                .includes("medium")
                            ? "warning"
                            : "error"
                        }
                        sx={{ height: 24, fontSize: "0.7rem" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Objectives Section */}
          {session.objectives && session.objectives.length > 0 && (
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#667eea",
                }}
              >
                Learning Objectives
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {session.objectives.map((objective, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      gap: 1.5,
                    }}
                  >
                    <CheckCircle
                      sx={{
                        fontSize: 20,
                        color: "#667eea",
                        mt: 0.2,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, lineHeight: 1.6 }}
                    >
                      {objective}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>

      {/* Dialog for Detailed Content */}
      <Dialog
        open={showDetailDialog}
        onClose={() => setShowDetailDialog(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Detailed Session Content</Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setShowDetailDialog(false)}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {detailedContent && (
            <DetailedLessonPlanRenderer content={detailedContent} />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default SessionSummaryCard;
