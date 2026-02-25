import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Stack,
} from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import {
  getBoards,
  getClassesByBoard,
  getSubjectsByClass,
  getChaptersBySubject,
  Board,
  Class,
  Subject,
  Chapter,
} from "../../services/contentService";
import {
  generateKnowledgePoints,
  saveKnowledgePoints,
  getKnowledgePointsByChapter,
  KnowledgePoint,
} from "../../services/adminServices/apiService";
import KnowledgePointCard from "./KnowledgePointCard";
import AlertModal from "../Common/AlertModal";

const GenerateKPs: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [selectedBoard, setSelectedBoard] = useState<number | "">("");
  const [selectedClass, setSelectedClass] = useState<number | "">("");
  const [selectedSubject, setSelectedSubject] = useState<number | "">("");
  const [selectedChapter, setSelectedChapter] = useState<number | "">("");

  const [syllabusContent, setSyllabusContent] = useState<string>("");
  const [generatedKPs, setGeneratedKPs] = useState<KnowledgePoint[]>([]);
  const [existingKPs, setExistingKPs] = useState<KnowledgePoint[]>([]);
  const [isNewlyGenerated, setIsNewlyGenerated] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  // Modal state for alerts
  const [alertModal, setAlertModal] = useState({
    open: false,
    title: "",
    message: "",
    type: "info" as "success" | "error" | "info" | "warning",
  });

  // Fetch boards on mount
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        setLoading(true);
        const data = await getBoards();
        setBoards(data);
      } catch (err) {
        setError("Failed to fetch boards");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBoards();
  }, []);

  // Fetch classes when board is selected
  useEffect(() => {
    if (!selectedBoard) {
      setClasses([]);
      setSelectedClass("");
      return;
    }

    const fetchClasses = async () => {
      try {
        setLoading(true);
        const data = await getClassesByBoard(selectedBoard as number);
        setClasses(data);
      } catch (err) {
        setError("Failed to fetch classes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, [selectedBoard]);

  // Fetch subjects when class is selected
  useEffect(() => {
    if (!selectedClass) {
      setSubjects([]);
      setSelectedSubject("");
      return;
    }

    const fetchSubjects = async () => {
      try {
        setLoading(true);
        const data = await getSubjectsByClass(selectedClass as number);
        setSubjects(data);
      } catch (err) {
        setError("Failed to fetch subjects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, [selectedClass]);

  // Fetch chapters when subject is selected
  useEffect(() => {
    if (!selectedSubject) {
      setChapters([]);
      setSelectedChapter("");
      return;
    }

    const fetchChapters = async () => {
      try {
        setLoading(true);
        const data = await getChaptersBySubject(selectedSubject as number);
        setChapters(data);
      } catch (err) {
        setError("Failed to fetch chapters");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, [selectedSubject]);

  // Fetch existing KPs when chapter is selected
  useEffect(() => {
    if (!selectedChapter) {
      setExistingKPs([]);
      setGeneratedKPs([]);
      setIsNewlyGenerated(false);
      setIsSaved(false);
      return;
    }

    const fetchExistingKPs = async () => {
      try {
        setLoading(true);
        setError(null);
        const kps = await getKnowledgePointsByChapter(
          selectedChapter as number,
        );
        setExistingKPs(kps);

        // If KPs exist, show them in the display area
        if (kps.length > 0) {
          setGeneratedKPs(kps);
          setIsNewlyGenerated(false); // These are from database, not newly generated
        } else {
          setGeneratedKPs([]);
          setIsNewlyGenerated(false);
        }
      } catch (err) {
        setError("Failed to fetch existing knowledge points");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchExistingKPs();
  }, [selectedChapter]);

  const handleLoadSampleSyllabus = () => {
    const sample = `5. Balancing chemical equations using law of conservation of mass
6. Types of chemical changes and decomposition (A + B = AB), Displacement (A + BC = AC + B), Double displacement (AB + CD = AD + CB)
7. Exothermic reactions (release heat) and Endothermic reactions (absorb heat)
8. Oxidation (addition of oxygen/removal of nitrogen) and Reduction (removal of oxygen/addition of hydrogen)
9. Corrosion- deterioration of metals due to reaction with environment
10. Rancidity – oxidation of fats and oils causing unpleasant smell

Prerequisites:
- Atom and molecule concepts (Class 8)
- Law of conservation of mass (Class 8)
- Physical and chemical changes (Class 7)`;
    setSyllabusContent(sample);
  };

  const handleGenerateKPs = async () => {
    if (
      !selectedBoard ||
      !selectedClass ||
      !selectedSubject ||
      !selectedChapter
    ) {
      setError("Please select board, class, subject, and chapter");
      return;
    }

    setGenerating(true);
    setError(null);

    try {
      // Get the selected entities
      const selectedBoardObj = boards.find((b) => b.id === selectedBoard);
      const selectedClassObj = classes.find((c) => c.id === selectedClass);
      const selectedSubjectObj = subjects.find((s) => s.id === selectedSubject);
      const selectedChapterObj = chapters.find(
        (ch) => ch.id === selectedChapter,
      );

      if (
        !selectedBoardObj ||
        !selectedClassObj ||
        !selectedSubjectObj ||
        !selectedChapterObj
      ) {
        throw new Error("Failed to retrieve selected entities");
      }

      // Extract grade number from class name (e.g., "Class 10" -> 10)

      // Call admin service to generate KPs
      const knowledgePoints = await generateKnowledgePoints({
        grade: selectedClassObj.name,
        subject: selectedSubjectObj.name,
        chapter: selectedChapterObj.title,
        board: selectedBoardObj.name,
        section: null,
      });

      setGeneratedKPs(knowledgePoints);
      setIsNewlyGenerated(true); // Mark as newly generated from AI
      setIsSaved(false); // Reset saved state for new generation
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate knowledge points",
      );
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const handleSaveKPs = async () => {
    if (!selectedChapter || generatedKPs.length === 0) {
      setError("No knowledge points to save or chapter not selected");
      return;
    }

    try {
      setGenerating(true);
      setError(null);

      // Call API to save KPs to database
      await saveKnowledgePoints(generatedKPs, selectedChapter as number);

      // Mark as saved
      setIsSaved(true);

      // Show success message in modal
      setAlertModal({
        open: true,
        title: "Success",
        message: `Successfully saved ${generatedKPs.length} knowledge points to database!`,
        type: "success",
      });

      // Optionally clear the generated KPs after successful save
      // setGeneratedKPs([]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save knowledge points",
      );
      console.error("Error saving knowledge points:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Generate Knowledge Points from Syllabus
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Configuration Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Configuration
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
            <FormControl fullWidth disabled={loading}>
              <InputLabel>Board</InputLabel>
              <Select
                value={selectedBoard}
                label="Board"
                onChange={(e) => {
                  setSelectedBoard(e.target.value as number);
                  setSelectedClass("");
                }}
              >
                {boards.map((board) => (
                  <MenuItem key={board.id} value={board.id}>
                    {board.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
            <FormControl fullWidth disabled={loading || !selectedBoard}>
              <InputLabel>Class</InputLabel>
              <Select
                value={selectedClass}
                label="Class"
                onChange={(e) => {
                  setSelectedClass(e.target.value as number);
                  setSelectedSubject("");
                }}
              >
                {classes.map((cls) => (
                  <MenuItem key={cls.id} value={cls.id}>
                    {cls.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
            <FormControl fullWidth disabled={loading || !selectedClass}>
              <InputLabel>Subject</InputLabel>
              <Select
                value={selectedSubject}
                label="Subject"
                onChange={(e) => {
                  setSelectedSubject(e.target.value as number);
                  setSelectedChapter("");
                }}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
            <FormControl fullWidth disabled={loading || !selectedSubject}>
              <InputLabel>Chapter</InputLabel>
              <Select
                value={selectedChapter}
                label="Chapter"
                onChange={(e) => setSelectedChapter(e.target.value as number)}
              >
                {chapters.map((chapter) => (
                  <MenuItem key={chapter.id} value={chapter.id}>
                    {chapter.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Paper>

      {/* Show content only when chapter is selected and not loading */}
      {selectedChapter && !loading && (
        <>
          {/* Show Generate Button only if no existing KPs found */}
          {existingKPs.length === 0 && (
            <>
              {/* AI-Powered Generation Info */}
              <Alert severity="info" sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  No Knowledge Points Found - Generate with AI
                </Typography>
                <Typography variant="caption" component="div">
                  The system will analyze the curriculum and automatically
                  generate:
                </Typography>
                <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
                  <li>Learning objectives for each KP</li>
                  <li>Cognitive levels (Bloom's Taxonomy)</li>
                  <li>Common misconceptions and corrections</li>
                  <li>Conceptual triples for auto-grading</li>
                  <li>Key terms and synonyms</li>
                  <li>Assessment criteria</li>
                </ul>
              </Alert>

              {/* Generate Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #7C3AED 0%, #5B21B6 100%)",
                  color: "white",
                  py: 1.5,
                  mb: 3,
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                onClick={handleGenerateKPs}
                disabled={generating}
              >
                {generating ? (
                  <CircularProgress size={24} sx={{ mr: 1 }} />
                ) : (
                  <SmartToyIcon sx={{ mr: 1 }} />
                )}
                {generating
                  ? "Generating..."
                  : "Generate Knowledge Points with AI"}
              </Button>
            </>
          )}

          {/* Show Alert when existing KPs are found */}
          {existingKPs.length > 0 && (
            <Alert severity="success" sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Found {existingKPs.length} existing knowledge points for this
                chapter
              </Typography>
            </Alert>
          )}
        </>
      )}

      {/* Generated KPs Section */}
      {generatedKPs.length > 0 && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">
              Generated Knowledge Points ({generatedKPs.length})
            </Typography>
            {isNewlyGenerated && (
              <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                onClick={handleSaveKPs}
                disabled={generating || isSaved}
              >
                {isSaved ? "Saved to Database" : "Save All to Database"}
              </Button>
            )}
          </Box>

          <Stack spacing={2}>
            {generatedKPs.map((kp, index) => (
              <KnowledgePointCard
                key={kp.kpId || index}
                kp={kp}
                index={index}
              />
            ))}
          </Stack>
        </>
      )}

      {/* Alert Modal */}
      <AlertModal
        open={alertModal.open}
        title={alertModal.title}
        message={alertModal.message}
        type={alertModal.type}
        onClose={() => setAlertModal({ ...alertModal, open: false })}
      />
    </Box>
  );
};

export default GenerateKPs;
