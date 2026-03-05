import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress,
  Alert,
  Chip,
  Collapse,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Visibility,
  PlayArrow,
  Close,
  CheckCircle,
  Psychology,
  Add,
} from "@mui/icons-material";
import {
  getMyLessonPlans,
  getKeyPointsByIds,
  KeyPoint,
} from "../../../services/contentService";
import {
  generateSessionSummary,
  generateSessionDetail,
} from "../../../services/teacherServices/apiService";
import DetailedLessonPlanRenderer from "../../SessionPlan/DetailedLessonPlanRenderer";
import { SessionDetailContent } from "../../../interfaces/sessionPlanRenderer";
import { ROUTES } from "../../../constants/common";

interface SessionData {
  sessionNumber: number;
  sessionTitle: string;
  sessionMapId: number;
  kpIds: number[];
  hasSummary: boolean;
  hasDetailedContent: boolean;
  sessionContentId: number | null;
  summary: string | null;
  objectives: string[] | null;
}

interface LessonPlan {
  id: number;
  boardName: string;
  className: string;
  subjectName: string;
  chapterTitle: string;
  chapterId: number;
  plannedSessions: number;
  createdAt: string;
  sessions: SessionData[];
}

function LessonPlanRow({ lessonPlan }: { lessonPlan: LessonPlan }) {
  const [open, setOpen] = useState(false);
  const [viewSummaryDialog, setViewSummaryDialog] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionData | null>(
    null,
  );
  const [keyPoints, setKeyPoints] = useState<KeyPoint[]>([]);
  const [loadingKPs, setLoadingKPs] = useState(false);
  const [generatingSessionId, setGeneratingSessionId] = useState<number | null>(
    null,
  );
  const [generatingDetailSessionId, setGeneratingDetailSessionId] = useState<
    number | null
  >(null);
  const [detailedContent, setDetailedContent] =
    useState<SessionDetailContent | null>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });
  const [sessions, setSessions] = useState<SessionData[]>(lessonPlan.sessions);

  // Sync sessions state when lessonPlan changes
  useEffect(() => {
    setSessions(lessonPlan.sessions);
  }, [lessonPlan.sessions]);

  const handleViewSummary = async (session: SessionData) => {
    setSelectedSession(session);
    setViewSummaryDialog(true);
    setLoadingKPs(true);

    try {
      if (session.kpIds && session.kpIds.length > 0) {
        const kps = await getKeyPointsByIds(session.kpIds);
        setKeyPoints(kps);
      } else {
        setKeyPoints([]);
      }
    } catch (error) {
      console.error("Error loading key points:", error);
      setKeyPoints([]);
    } finally {
      setLoadingKPs(false);
    }
  };

  const handleGenerateSummary = async (sessionMapId: number) => {
    setGeneratingSessionId(sessionMapId);
    try {
      const response = await generateSessionSummary({ sessionMapId });

      if (response.success) {
        // Update the session in local state
        const updatedSessions = sessions.map((session) => {
          if (session.sessionMapId === sessionMapId) {
            return {
              ...session,
              hasSummary: true,
              summary: response.summary,
              objectives: response.objectives,
            };
          }
          return session;
        });
        setSessions(updatedSessions);

        // Find and show the updated session in modal
        const updatedSession = updatedSessions.find(
          (s) => s.sessionMapId === sessionMapId,
        );
        if (updatedSession) {
          handleViewSummary(updatedSession);
        }

        setSnackbar({
          open: true,
          message: "Summary generated successfully!",
          severity: "success",
        });
      }
    } catch (error: any) {
      console.error("Error generating summary:", error);
      setSnackbar({
        open: true,
        message: error.message || "Failed to generate summary",
        severity: "error",
      });
    } finally {
      setGeneratingSessionId(null);
    }
  };

  const handleGenerateDetailedContent = async (sessionMapId: number) => {
    setGeneratingDetailSessionId(sessionMapId);
    try {
      const response = await generateSessionDetail({
        sessionId: sessionMapId,
      });

      if (response.success && response.data) {
        // Convert the API response structure to match SessionDetailContent interface
        const apiContent = response.data.content;
        const contentWithStringDuration: SessionDetailContent = {
          ...apiContent,
          duration: `${apiContent.duration}`,
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
                }),
              ),
            },
          },
        };

        // Update the session in local state
        const updatedSessions = sessions.map((session) => {
          if (session.sessionMapId === sessionMapId) {
            return {
              ...session,
              hasDetailedContent: true,
            };
          }
          return session;
        });
        setSessions(updatedSessions);

        // Show the detailed content in modal
        setDetailedContent(contentWithStringDuration);
        setShowDetailDialog(true);

        setSnackbar({
          open: true,
          message: "Detailed content generated successfully!",
          severity: "success",
        });
      }
    } catch (error: any) {
      console.error("Error generating detailed content:", error);
      setSnackbar({
        open: true,
        message: error.message || "Failed to generate detailed content",
        severity: "error",
      });
    } finally {
      setGeneratingDetailSessionId(null);
    }
  };

  const handleViewContent = async (sessionMapId: number) => {
    try {
      // Fetch the detailed content
      const response = await generateSessionDetail({
        sessionId: sessionMapId,
      });

      if (response.success && response.data) {
        // Convert the API response structure to match SessionDetailContent interface
        const apiContent = response.data.content;
        const contentWithStringDuration: SessionDetailContent = {
          ...apiContent,
          duration: `${apiContent.duration}`,
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
                }),
              ),
            },
          },
        };

        // Show the detailed content in modal
        setDetailedContent(contentWithStringDuration);
        setShowDetailDialog(true);
      }
    } catch (error: any) {
      console.error("Error loading content:", error);
      setSnackbar({
        open: true,
        message: error.message || "Failed to load content",
        severity: "error",
      });
    }
  };

  const getCognitiveLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      Remember: "#8b5cf6",
      Understand: "#3b82f6",
      Apply: "#10b981",
      Analyze: "#f59e0b",
      Evaluate: "#ef4444",
      Create: "#ec4899",
    };
    return colors[level] || "#6b7280";
  };

  const getDifficultyInfo = (difficulty: string) => {
    const info: {
      [key: string]: { color: "success" | "warning" | "error"; label: string };
    } = {
      Easy: { color: "success", label: "Easy" },
      Medium: { color: "warning", label: "Medium" },
      Hard: { color: "error", label: "Hard" },
    };
    return info[difficulty] || { color: "success", label: difficulty };
  };

  const getActionButton = (session: SessionData) => {
    const isGenerating = generatingSessionId === session.sessionMapId;
    const isGeneratingDetail =
      generatingDetailSessionId === session.sessionMapId;
    if (!session.hasSummary) {
      return (
        <Button
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<PlayArrow />}
          onClick={() => handleGenerateSummary(session.sessionMapId)}
          disabled={generatingSessionId !== null}
        >
          {isGenerating ? "Generating..." : "Generate Summary"}
        </Button>
      );
    } else if (!session.hasDetailedContent) {
      return (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Button
            size="small"
            variant="outlined"
            color="info"
            startIcon={<Visibility />}
            onClick={() => handleViewSummary(session)}
          >
            View Summary
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            startIcon={<PlayArrow />}
            onClick={() => handleGenerateDetailedContent(session.sessionMapId)}
            disabled={generatingDetailSessionId !== null}
          >
            {isGeneratingDetail ? "Generating..." : "Generate Content"}
          </Button>
        </Box>
      );
    } else {
      return (
        <Button
          size="small"
          variant="contained"
          color="success"
          startIcon={<Visibility />}
          onClick={() => handleViewContent(session.sessionMapId)}
        >
          View Content
        </Button>
      );
    }
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{lessonPlan.boardName}</TableCell>
        <TableCell>{lessonPlan.className}</TableCell>
        <TableCell>{lessonPlan.subjectName}</TableCell>
        <TableCell>{lessonPlan.chapterTitle}</TableCell>
        <TableCell align="center">{lessonPlan.plannedSessions}</TableCell>
        <TableCell>
          {new Date(lessonPlan.createdAt).toLocaleDateString()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                Sessions
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Session #</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.sessionMapId}>
                      <TableCell>{session.sessionNumber}</TableCell>
                      <TableCell>{session.sessionTitle}</TableCell>
                      <TableCell>
                        {session.hasDetailedContent ? (
                          <Chip label="Complete" color="success" size="small" />
                        ) : session.hasSummary ? (
                          <Chip
                            label="Summary Ready"
                            color="primary"
                            size="small"
                          />
                        ) : (
                          <Chip label="Pending" color="default" size="small" />
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {getActionButton(session)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* View Summary Modal */}
      <Dialog
        open={viewSummaryDialog}
        onClose={() => setViewSummaryDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Session Summary</Typography>
            <IconButton
              onClick={() => setViewSummaryDialog(false)}
              size="small"
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedSession && (
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Session {selectedSession.sessionNumber}:{" "}
                {selectedSession.sessionTitle}
              </Typography>

              {/* Summary Section */}
              {selectedSession.summary && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Summary
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedSession.summary}
                  </Typography>
                </Box>
              )}

              {/* Objectives Section */}
              {selectedSession.objectives &&
                selectedSession.objectives.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Learning Objectives
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      {selectedSession.objectives.map((objective, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1,
                          }}
                        >
                          <CheckCircle
                            sx={{
                              color: "success.main",
                              mr: 1,
                              mt: 0.25,
                              fontSize: 20,
                            }}
                          />
                          <Typography variant="body2">{objective}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

              {/* Key Points Section */}
              {selectedSession.kpIds && selectedSession.kpIds.length > 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Knowledge Points ({selectedSession.kpIds.length})
                  </Typography>
                  {loadingKPs ? (
                    <Box
                      sx={{ display: "flex", justifyContent: "center", p: 2 }}
                    >
                      <CircularProgress size={24} />
                    </Box>
                  ) : (
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {selectedSession.kpIds.map((kpId, index) => {
                        const kp = keyPoints.find((k) => k.id === kpId);
                        if (!kp) return null;

                        return (
                          <Box
                            key={kpId}
                            sx={{
                              display: "flex",
                              gap: 2,
                              alignItems: "flex-start",
                            }}
                          >
                            {/* KP Number Badge */}
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "white", fontWeight: "bold" }}
                              >
                                {index + 1}
                              </Typography>
                            </Box>

                            {/* KP Details */}
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="body1" fontWeight="medium">
                                {kp.title}
                              </Typography>
                              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                                {/* Cognitive Level Chip */}
                                {kp.cognitiveLevel && (
                                  <Chip
                                    icon={<Psychology />}
                                    label={kp.cognitiveLevel}
                                    size="small"
                                    sx={{
                                      backgroundColor: getCognitiveLevelColor(
                                        kp.cognitiveLevel,
                                      ),
                                      color: "white",
                                      "& .MuiChip-icon": {
                                        color: "white",
                                      },
                                    }}
                                  />
                                )}
                                {/* Difficulty Chip */}
                                {kp.difficultyLevel && (
                                  <Chip
                                    label={
                                      getDifficultyInfo(kp.difficultyLevel)
                                        .label
                                    }
                                    size="small"
                                    color={
                                      getDifficultyInfo(kp.difficultyLevel)
                                        .color
                                    }
                                  />
                                )}
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
      </Dialog>

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

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

function MyLessonPlans() {
  const navigate = useNavigate();
  const [lessonPlans, setLessonPlans] = useState<LessonPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLessonPlans();
  }, []);

  const fetchLessonPlans = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getMyLessonPlans();
      setLessonPlans(response.data);
    } catch (err: any) {
      setError(err.message || "Failed to load lesson plans");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          My Lesson Plans
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate(ROUTES.LESSON_PLANNER)}
        >
          Create New Lesson Plan
        </Button>
      </Box>

      {lessonPlans.length === 0 ? (
        <Alert severity="info">
          You haven't created any lesson plans yet. Start by creating a new
          lesson plan!
        </Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Board</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Chapter</TableCell>
                <TableCell align="center">Sessions</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lessonPlans.map((lessonPlan) => (
                <LessonPlanRow key={lessonPlan.id} lessonPlan={lessonPlan} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default MyLessonPlans;
