import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MenuBook,
  FileDownload,
  ContentCopy,
  PictureAsPdf,
} from "@mui/icons-material";
import {
  GeneratedContent,
  UserType,
  ClassLevel,
  Subject,
  Chapter,
} from "../types";
import SessionPlanRenderer from "./SessionPlanRenderer";
import {
  downloadAsPDF,
  copyToClipboard,
  htmlToText,
  sanitizeFilename,
} from "../services/exportServices/sessionPlanExport";

interface MainContentProps {
  title: string;
  isLoading: boolean;
  currentContent: GeneratedContent | null;
  userType?: UserType | null;
  classLevel?: ClassLevel | null;
  subject?: Subject | null;
  chapter?: Chapter | null;
}

const MainContent: React.FC<MainContentProps> = ({
  title,
  isLoading,
  currentContent,
  userType,
  classLevel,
  subject,
  chapter,
}) => {
  const [exportMenuAnchor, setExportMenuAnchor] = useState<HTMLElement | null>(
    null
  );

  const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setExportMenuAnchor(event.currentTarget);
  };

  const handleExportMenuClose = () => {
    setExportMenuAnchor(null);
  };

  const getExportableContent = () => {
    if (!currentContent) return { html: "", text: "" };

    if (currentContent.type === "session-plan" && currentContent.sessionPlans) {
      // Convert session plans to exportable format
      const sessionPlansHtml = currentContent.sessionPlans
        .map((session, index) => {
          return `
          <div class="session-plan">
            <h2>Session ${session.sessionNumber}: ${session.title}</h2>
            <p><strong>Duration:</strong> ${session.duration}</p>
            <p><strong>Summary:</strong> ${session.summary}</p>
            
            <h3>Objectives:</h3>
            <ul>
              ${session.objectives
                .map((objective: string) => `<li>${objective}</li>`)
                .join("")}
            </ul>
          </div>
          ${
            index < currentContent.sessionPlans!.length - 1
              ? '<hr style="margin: 30px 0;">'
              : ""
          }
          `;
        })
        .join("");

      const fullHtml = `
        <div class="header">
          <h1>${currentContent.title}</h1>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Class:</strong> ${classLevel}</p>
          <p><strong>Chapter:</strong> ${chapter?.title}</p>
          <p><strong>Total Sessions:</strong> ${currentContent.sessionPlans.length}</p>
        </div>
        
        <div class="session-plans">
          ${sessionPlansHtml}
        </div>
      `;

      const text = currentContent.sessionPlans
        .map((session) => {
          return `Session ${session.sessionNumber}: ${session.title}
Duration: ${session.duration}
Summary: ${session.summary}

Objectives:
${session.objectives.map((objective: string) => `• ${objective}`).join("\n")}

${"=".repeat(50)}
`;
        })
        .join("\n");

      return {
        html: fullHtml,
        text: `${currentContent.title}\nSubject: ${subject}\nClass: ${classLevel}\nChapter: ${chapter?.title}\nTotal Sessions: ${currentContent.sessionPlans.length}\n\n${text}`,
      };
    } else {
      // Regular content
      return {
        html: currentContent.content,
        text: htmlToText(currentContent.content),
      };
    }
  };

  const handleExportAsPDF = () => {
    if (!currentContent) return;

    const { html } = getExportableContent();
    const filename = sanitizeFilename(currentContent.title || title);
    downloadAsPDF(html, filename, currentContent.title || title);
    handleExportMenuClose();
  };

  const handleCopyToClipboard = async () => {
    if (!currentContent) return;

    const { text } = getExportableContent();
    try {
      const success = await copyToClipboard(text);
      if (success) {
        console.log("Content copied to clipboard");
        // You could add a toast notification here
      } else {
        console.error("Failed to copy to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
    handleExportMenuClose();
  };

  // Check if export functionality should be shown
  const shouldShowExport =
    currentContent &&
    ((currentContent.type === "session-plan" &&
      currentContent.sessionPlans &&
      currentContent.sessionPlans.length > 0) ||
      (currentContent.type !== "session-plan" &&
        currentContent.content &&
        currentContent.content.trim() !== ""));

  return (
    <Box sx={{ flex: 1 }}>
      <Paper elevation={2} sx={{ p: 3, minHeight: "500px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              borderBottom: "2px solid #f0f0f0",
              pb: 2,
              flex: 1,
            }}
          >
            {title}
          </Typography>

          {shouldShowExport && (
            <Box sx={{ ml: 2 }}>
              <IconButton
                onClick={handleExportMenuOpen}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                title={
                  currentContent?.type === "session-plan"
                    ? "Export entire lesson plan"
                    : "Export content"
                }
              >
                <FileDownload />
              </IconButton>

              <Menu
                anchorEl={exportMenuAnchor}
                open={Boolean(exportMenuAnchor)}
                onClose={handleExportMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleExportAsPDF}>
                  <ListItemIcon>
                    <PictureAsPdf fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      currentContent?.type === "session-plan"
                        ? "Export Full Plan as PDF"
                        : "Export as PDF (.pdf)"
                    }
                  />
                </MenuItem>
                <MenuItem onClick={handleCopyToClipboard}>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      currentContent?.type === "session-plan"
                        ? "Copy Full Plan to Clipboard"
                        : "Copy to Clipboard"
                    }
                  />
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>

        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 6,
            }}
          >
            <CircularProgress size={60} sx={{ mb: 2 }} />
            <Typography variant="body1">Generating content...</Typography>
          </Box>
        ) : currentContent ? (
          currentContent.type === "session-plan" &&
          currentContent.sessionPlans &&
          userType &&
          classLevel &&
          subject &&
          chapter ? (
            <SessionPlanRenderer
              sessionPlans={currentContent.sessionPlans}
              userType={userType}
              classLevel={classLevel}
              subject={subject}
              chapter={chapter}
            />
          ) : (
            <Box
              sx={{ "& h3, & h4, & h5, & h6": { color: "primary.main" } }}
              dangerouslySetInnerHTML={{ __html: currentContent.content }}
            />
          )
        ) : (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <MenuBook sx={{ fontSize: 80, color: "grey.400", mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              Please select your preferences from the left panel to generate
              educational content.
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default MainContent;
