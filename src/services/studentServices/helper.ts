/**
 * Helper functions for student services
 */

import { ConversationMessage } from "./types";

/**
 * Validates if a question is not empty and meets basic requirements
 * @param question - The question to validate
 * @returns boolean indicating if the question is valid
 */
export const validateQuestion = (question: string): boolean => {
  return question.trim().length > 0 && question.trim().length <= 2000;
};

/**
 * Formats the conversation history for display
 * @param history - Array of conversation messages
 * @returns Formatted conversation history
 */
export const formatConversationHistory = (
  history: ConversationMessage[]
): string => {
  return history
    .map((msg) => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join("\n\n");
};

/**
 * Truncates conversation history to keep only the last N messages
 * This helps manage token limits for API calls
 * @param history - Array of conversation messages
 * @param maxMessages - Maximum number of messages to keep (default: 10)
 * @returns Truncated conversation history
 */
export const truncateConversationHistory = (
  history: ConversationMessage[],
  maxMessages: number = 10
): ConversationMessage[] => {
  if (history.length <= maxMessages) {
    return history;
  }
  return history.slice(-maxMessages);
};

/**
 * Estimates the token count for a conversation history
 * This is a rough estimation - actual tokenization may vary
 * @param history - Array of conversation messages
 * @returns Estimated token count
 */
export const estimateTokenCount = (history: ConversationMessage[]): number => {
  const totalChars = history.reduce((sum, msg) => sum + msg.content.length, 0);
  // Rough estimation: ~4 characters per token
  return Math.ceil(totalChars / 4);
};
