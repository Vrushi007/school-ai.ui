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
} from "@mui/material";
import { Send, Psychology, Person, Clear, SmartToy } from "@mui/icons-material";
import {
  askQuestion,
  createQuestionRequest,
} from "../services/studentServices/apiService";
import { ChatMessage, ChatState } from "../services/studentServices/types";

const StudentGetAnswers: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    conversationId: null,
    conversationHistory: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages]);

  // Generate unique ID for messages
  const generateMessageId = () => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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
        conversationId: response.conversation_id,
        conversationHistory: response.updated_history,
      }));
    } catch (error) {
      console.error("Error getting answer:", error);

      // Add error message
      const errorMessage: ChatMessage = {
        id: generateMessageId(),
        role: "assistant",
        content:
          "Sorry, I couldn't process your question right now. Please try again.",
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
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

  // Clear chat history
  const handleClearChat = () => {
    setChatState({
      messages: [],
      isLoading: false,
      conversationId: null,
      conversationHistory: [],
    });
  };

  // Format message content (handle line breaks and basic formatting)
  const formatMessageContent = (content: string) => {
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Paper
        elevation={3}
        sx={{ height: "80vh", display: "flex", flexDirection: "column" }}
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
            <IconButton
              onClick={handleClearChat}
              sx={{ color: "white" }}
              title="Clear chat"
            >
              <Clear />
            </IconButton>
          )}
        </Box>

        {/* Messages Area */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            backgroundColor: "#f5f5f5",
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
                      {formatMessageContent(message.content)}
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
    </Container>
  );
};

export default StudentGetAnswers;
