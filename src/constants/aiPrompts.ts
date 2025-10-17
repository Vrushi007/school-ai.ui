// AI Prompt Constants for OpenAI Service
// This file contains all the prompts used in the application for easy management and modification

export const AI_PROMPTS = {
  // System prompts
  SESSION_PLAN_SYSTEM:
    "You are an expert educational content creator specializing in curriculum design for Indian school standards. Always respond with valid JSON only.",

  SESSION_DETAIL_SYSTEM:
    "You are an expert educational content creator specializing in detailed lesson planning for Indian school standards. Always respond with clean, well-structured HTML.",

  // Session Plan Generation Prompt
  SESSION_PLAN_USER: `
You are an expert educational content creator. Create a detailed session plan for a {userType} teaching {subjectName} to {className} standard students.

Chapter: {chapterTitle}
Number of Sessions: {numberOfSessions}

For each session, provide:
1. A clear, engaging session title
2. A comprehensive summary (2-3 sentences) of what will be covered
3. Estimated duration (typically {defaultSessionDuration} per session)
4. 3-4 specific learning objectives

The sessions should:
- Build progressively from basic to advanced concepts
- Be age-appropriate for {className} standard students
- Include practical examples and applications
- Cover the complete chapter content across all {numberOfSessions} sessions

Please respond with a JSON array containing exactly {numberOfSessions} session objects, each with the following structure:
{
  "sessionNumber": number,
  "title": "string",
  "summary": "string", 
  "duration": "string",
  "objectives": ["objective1", "objective2", "objective3", "objective4"]
}

Ensure the JSON is valid and properly formatted.`,

  // Session Detail Generation Prompt
  SESSION_DETAIL_USER: `
You are an expert educational content creator. Create detailed lesson content for a specific session.

Context:
- User Type: {userType}
- Class: {className} Standard
- Subject: {subjectName}
- Chapter: {chapterTitle}
- Session: {sessionNumber} - {sessionTitle}
- Duration: {sessionDuration}

Session Objectives:
{sessionObjectives}

Create comprehensive lesson content that includes:
1. **Introduction** (5-10 minutes): Hook and context setting
2. **Core Content** (20-30 minutes): Main concepts with examples
3. **Activities** (10-15 minutes): Hands-on learning exercises
4. **Assessment** (5-10 minutes): Quick check for understanding
5. **Homework/Extension** (if applicable): Additional practice

Requirements:
- Age-appropriate for {className} standard students
- Include practical examples and real-world applications
- Provide step-by-step explanations
- Include interactive elements and questions for student engagement
- Format as clean HTML with proper headings and structure

Respond with well-structured HTML content only.`,
};

// Helper function to replace placeholders in prompts
export const formatPrompt = (
  template: string,
  replacements: Record<string, string | number>
): string => {
  let formattedPrompt = template;

  Object.entries(replacements).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    formattedPrompt = formattedPrompt.replace(
      new RegExp(placeholder, "g"),
      String(value)
    );
  });

  return formattedPrompt;
};

// Default configuration values
export const AI_CONFIG = {
  DEFAULT_SESSION_DURATION: "45-60 minutes",
  MAX_TOKENS: 2000,
  TEMPERATURE: 0.7,
  SESSION_DETAIL_MAX_TOKENS: 2500,
  SESSION_DETAIL_TEMPERATURE: 0.7,
};
