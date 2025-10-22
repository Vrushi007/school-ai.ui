// Types for student services

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

export interface QuestionRequest {
  question: string;
  conversation_history: ConversationMessage[];
}

export interface AnswerResponse {
  answer: string;
  conversation_id: string;
  updated_history: ConversationMessage[];
}

export interface ApiResponse {
  success: boolean;
  data: {
    response: AnswerResponse;
  };
  message: string;
  error: string | null;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  conversationId: string | null;
  conversationHistory: ConversationMessage[];
}
