import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  CircularProgress,
  IconButton,
  Divider,
  Container,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ErrorModal from "./ErrorModal";
import {
  Send,
  Psychology,
  Person,
  Clear,
  SmartToy,
  FileDownload,
  ContentCopy,
  PictureAsPdf,
} from "@mui/icons-material";
import {
  askQuestion,
  createQuestionRequest,
} from "../services/studentServices/apiService";
import { ChatMessage, ChatState } from "../services/studentServices/types";
import { ErrorModalState } from "../interfaces/sessionPlanRenderer";
import {
  downloadAsPDF,
  copyToClipboard,
  sanitizeFilename,
} from "../services/exportServices/sessionPlanExport";
import RenderAIResponse from "./Student/RenderAIResponse";

const StudentGetAnswers: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    conversationId: null,
    conversationHistory: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [exportMenuAnchor, setExportMenuAnchor] = useState<HTMLElement | null>(
    null
  );
  const [errorModal, setErrorModal] = useState<ErrorModalState>({
    open: false,
    title: "",
    message: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesContainerRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop =
            messagesContainerRef.current.scrollHeight;
        }
      });
    }
  }, [chatState.messages]);

  // Generate unique ID for messages
  const generateMessageId = () => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // Handle closing error modal
  const handleCloseErrorModal = () => {
    setErrorModal({ open: false, title: "", message: "" });
  };

  // Handle sending a question
  const handleSendQuestion = async () => {
    if (!currentQuestion.trim() || chatState.isLoading) return;

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      role: "user",
      content: currentQuestion.trim(),
      timestamp: new Date(),
    };

    // Add user message to chat
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    // Clear input
    setCurrentQuestion("");

    try {
      // Create API request
      const questionRequest = createQuestionRequest(
        userMessage.content,
        chatState.conversationHistory
      );

      // Call API
      const response = await askQuestion(questionRequest);

      // Create assistant message
      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        role: "assistant",
        content: response.answer,
        timestamp: new Date(),
      };

      // Update chat state with response
      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
        conversationId: response.conversationId,
        conversationHistory: response.updatedHistory,
      }));
    } catch (error) {
      console.error("Error getting answer:", error);

      // Show error modal instead of adding to chat
      setErrorModal({
        open: true,
        title: "Failed to Get Answer",
        message:
          "Something failed, please try again. If the same problem occurs, please contact administrator.",
      });

      setChatState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  // Handle Enter key press
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendQuestion();
    }
  };

  // Export functionality
  const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setExportMenuAnchor(event.currentTarget);
  };

  const handleExportMenuClose = () => {
    setExportMenuAnchor(null);
  };

  const formatChatForExport = () => {
    if (chatState.messages.length === 0) return "";

    const chatContent = chatState.messages
      .map((message) => {
        const role = message.role === "user" ? "Student" : "AI Assistant";
        const timestamp = message.timestamp.toLocaleString();
        return `[${timestamp}] ${role}:\n${message.content}\n`;
      })
      .join("\n");

    return `Study Session Chat\n${"=".repeat(50)}\nConversation ID: ${
      chatState.conversationId || "N/A"
    }\nDate: ${new Date().toLocaleString()}\n\n${chatContent}`;
  };

  const formatChatForPDF = () => {
    if (chatState.messages.length === 0) return "";

    const chatContent = chatState.messages
      .map((message) => {
        const role = message.role === "user" ? "Student" : "AI Assistant";
        const timestamp = message.timestamp.toLocaleString();
        return `
        <div class="message ${message.role}">
          <div class="message-header">
            <strong>${role}</strong>
            <span class="timestamp">${timestamp}</span>
          </div>
          <div class="message-content">${message.content.replace(
            /\n/g,
            "<br>"
          )}</div>
        </div>`;
      })
      .join("");

    return `
      <div class="header">
        <h1>Study Session Chat</h1>
        <p><strong>Conversation ID:</strong> ${
          chatState.conversationId || "N/A"
        }</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Total Messages:</strong> ${chatState.messages.length}</p>
      </div>
      
      <div class="chat-container">
        ${chatContent}
      </div>
      
      <style>
        .message { margin-bottom: 15px; padding: 10px; border-radius: 8px; }
        .message.user { background-color: #e3f2fd; border-left: 4px solid #1976d2; }
        .message.assistant { background-color: #f3e5f5; border-left: 4px solid #7b1fa2; }
        .message-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .timestamp { font-size: 0.8em; color: #666; }
        .message-content { line-height: 1.4; }
        .chat-container { margin-top: 20px; }
      </style>`;
  };

  const handleExportAsPDF = () => {
    if (chatState.messages.length === 0) {
      setErrorModal({
        open: true,
        title: "Export Error",
        message: "No conversation to export. Start chatting first!",
      });
      return;
    }

    const htmlContent = formatChatForPDF();
    const filename = sanitizeFilename(
      `study_session_${chatState.conversationId || Date.now()}`
    );
    downloadAsPDF(htmlContent, filename, "Study Session Chat");
    handleExportMenuClose();
  };

  const handleCopyToClipboard = async () => {
    if (chatState.messages.length === 0) {
      setErrorModal({
        open: true,
        title: "Copy Error",
        message: "No conversation to copy. Start chatting first!",
      });
      return;
    }

    const textContent = formatChatForExport();
    try {
      const success = await copyToClipboard(textContent);
      if (success) {
        console.log("Chat copied to clipboard");
        // You could add a toast notification here
      } else {
        console.error("Failed to copy to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
    handleExportMenuClose();
  };

  // Clear chat history
  const handleClearChat = () => {
    setChatState({
      messages: [],
      isLoading: false,
      conversationId: null,
      conversationHistory: [],
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Paper
        elevation={3}
        sx={{
          height: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SmartToy fontSize="large" />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                AI Study Assistant
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Ask any question and get detailed explanations
              </Typography>
            </Box>
          </Box>

          {chatState.messages.length > 0 && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={handleExportMenuOpen}
                sx={{ color: "white" }}
                title="Export conversation"
              >
                <FileDownload />
              </IconButton>
              <IconButton
                onClick={handleClearChat}
                sx={{ color: "white" }}
                title="Clear chat"
              >
                <Clear />
              </IconButton>
            </Box>
          )}

          {/* Export Menu */}
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
              <ListItemText primary="Export as PDF (.pdf)" />
            </MenuItem>
            <MenuItem onClick={handleCopyToClipboard}>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Copy to Clipboard" />
            </MenuItem>
          </Menu>
        </Box>

        {/* Messages Area */}
        <Box
          ref={messagesContainerRef}
          sx={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            p: 2,
            backgroundColor: "#f5f5f5",
            position: "relative",
            scrollBehavior: "smooth",
          }}
        >
          {chatState.messages.length === 0 ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              <Psychology sx={{ fontSize: 64, mb: 2, opacity: 0.5 }} />
              <Typography variant="h6" gutterBottom>
                Welcome to AI Study Assistant!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ask any question about your studies and I'll provide detailed
                explanations.
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                Try asking: "Explain photosynthesis" or "What is the Pythagorean
                theorem?"
              </Typography>
            </Box>
          ) : (
            <Box>
              {chatState.messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: "flex",
                    mb: 2,
                    flexDirection:
                      message.role === "user" ? "row-reverse" : "row",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        message.role === "user"
                          ? "primary.main"
                          : "secondary.main",
                      mx: 1,
                    }}
                  >
                    {message.role === "user" ? <Person /> : <SmartToy />}
                  </Avatar>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      maxWidth: "70%",
                      bgcolor:
                        message.role === "user" ? "primary.light" : "white",
                      color: message.role === "user" ? "white" : "text.primary",
                    }}
                  >
                    <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                      <RenderAIResponse content={message.content} />
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mt: 1,
                        opacity: 0.7,
                        textAlign: "right",
                      }}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </Typography>
                  </Paper>
                </Box>
              ))}

              {/* Loading indicator */}
              {chatState.isLoading && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Avatar sx={{ bgcolor: "secondary.main", mx: 1 }}>
                    <SmartToy />
                  </Avatar>
                  <Paper elevation={1} sx={{ p: 2, bgcolor: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CircularProgress size={16} />
                      <Typography variant="body2" color="text.secondary">
                        Thinking...
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              )}

              <div ref={messagesEndRef} />
            </Box>
          )}
        </Box>

        <Divider />

        {/* Input Area */}
        <Box sx={{ p: 2, backgroundColor: "white" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              variant="outlined"
              placeholder="Ask any question about your studies..."
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={chatState.isLoading}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSendQuestion}
              disabled={!currentQuestion.trim() || chatState.isLoading}
              sx={{
                borderRadius: "50%",
                minWidth: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                },
              }}
            >
              {chatState.isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <Send />
              )}
            </Button>
          </Box>

          {chatState.conversationId && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 1, display: "block" }}
            >
              Conversation ID: {chatState.conversationId}
            </Typography>
          )}
        </Box>
      </Paper>

      <ErrorModal
        open={errorModal.open}
        onClose={handleCloseErrorModal}
        title={errorModal.title}
        message={errorModal.message}
      />
    </Container>
  );
};

export default StudentGetAnswers;
