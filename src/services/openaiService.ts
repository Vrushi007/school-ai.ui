import OpenAI from "openai";
import { UserType, ClassLevel, Subject, Chapter, SessionPlan } from "../types";
import { AI_PROMPTS, formatPrompt, AI_CONFIG } from "../constants/aiPrompts";

// Check if API key is configured
const apiKey =
  process.env.OPENAI_API_KEY || process.env.REACT_APP_OPENAI_API_KEY;

// Configuration from environment variables
const OPENAI_MODEL = process.env.REACT_APP_OPENAI_MODEL || "gpt-3.5-turbo";
const MAX_TOKENS = parseInt(
  process.env.REACT_APP_OPENAI_MAX_TOKENS || AI_CONFIG.MAX_TOKENS.toString()
);
const TEMPERATURE = parseFloat(
  process.env.REACT_APP_OPENAI_TEMPERATURE || AI_CONFIG.TEMPERATURE.toString()
);
const DEFAULT_SESSION_DURATION =
  process.env.REACT_APP_DEFAULT_SESSION_DURATION ||
  AI_CONFIG.DEFAULT_SESSION_DURATION;

if (!apiKey || apiKey === "your_openai_api_key_here") {
  console.warn(
    "OpenAI API key not configured. Session plans will use fallback mode."
  );
}

// Custom OpenAI API call function to handle CORS using local proxy
const callOpenAI = async (messages: any[], model = OPENAI_MODEL) => {
  if (!apiKey || apiKey === "your_openai_api_key_here") {
    throw new Error("OpenAI API key not configured");
  }

  try {
    // Use local proxy to avoid CORS issues in development
    const response = await fetch("/api/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("OpenAI API call failed:", error);
    throw error;
  }
};

// Initialize OpenAI client with custom fetch
const openai =
  apiKey && apiKey !== "your_openai_api_key_here"
    ? new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
        baseURL: "https://api.openai.com/v1",
        defaultHeaders: {
          "User-Agent": "OpenAI/JS 4.20.1",
        },
      })
    : null;

export interface SessionPlanRequest {
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
  numberOfSessions: number;
}

export const generateSessionPlan = async (
  request: SessionPlanRequest
): Promise<SessionPlan[]> => {
  const { userType, classLevel, subject, chapter, numberOfSessions } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  const prompt = formatPrompt(AI_PROMPTS.SESSION_PLAN_USER, {
    userType,
    subjectName,
    className,
    chapterTitle: chapter.title,
    numberOfSessions,
    defaultSessionDuration: DEFAULT_SESSION_DURATION,
  });

  try {
    // Check if API key is configured
    if (!apiKey || apiKey === "your_openai_api_key_here") {
      console.log("OpenAI not configured, using fallback session plans");
      return generateFallbackSessionPlan(request);
    }

    // Use custom fetch to avoid CORS issues
    const completion = await callOpenAI([
      {
        role: "system",
        content: AI_PROMPTS.SESSION_PLAN_SYSTEM,
      },
      {
        role: "user",
        content: prompt,
      },
    ]);

    let content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No content received from OpenAI");
    }
    if (content.startsWith("```")) {
      content = content.replace(/```json|```/g, "").trim();
    }

    // Parse the JSON response
    const sessionPlans: SessionPlan[] = JSON.parse(content);

    // Validate and ensure we have the right number of sessions
    if (
      !Array.isArray(sessionPlans) ||
      sessionPlans.length !== numberOfSessions
    ) {
      throw new Error(
        `Expected ${numberOfSessions} sessions, got ${sessionPlans.length}`
      );
    }

    return sessionPlans;
  } catch (error) {
    console.error("Error generating session plan:", error);

    // Fallback: Generate mock session plans if API fails
    return generateFallbackSessionPlan(request);
  }
};

// Fallback function to generate mock session plans if OpenAI API fails
const generateFallbackSessionPlan = (
  request: SessionPlanRequest
): SessionPlan[] => {
  const { chapter, numberOfSessions } = request;
  const sessionPlans: SessionPlan[] = [];

  for (let i = 1; i <= numberOfSessions; i++) {
    sessionPlans.push({
      sessionNumber: i,
      title: `${chapter.title} - Session ${i}`,
      summary: `This session covers fundamental concepts and practical applications related to ${chapter.title}. Students will explore key topics through interactive learning and hands-on activities.`,
      duration: DEFAULT_SESSION_DURATION,
      objectives: [
        `Understand the basic concepts of ${chapter.title}`,
        "Apply theoretical knowledge to practical scenarios",
        "Develop problem-solving skills",
        "Engage in collaborative learning activities",
      ],
    });
  }

  return sessionPlans;
};

// Utility function to check if OpenAI API key is configured
export const isOpenAIConfigured = (): boolean => {
  const key = process.env.REACT_APP_OPENAI_API_KEY;
  return !!(key && key !== "your_openai_api_key_here");
};

// Interface for session detail requests
export interface SessionDetailRequest {
  userType: UserType;
  classLevel: ClassLevel;
  subject: Subject;
  chapter: Chapter;
  sessionPlan: SessionPlan;
}

// Generate detailed content for a specific session
export const generateSessionDetail = async (
  request: SessionDetailRequest
): Promise<string> => {
  const { userType, classLevel, subject, chapter, sessionPlan } = request;

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const className =
    classLevel === "8th" ? "8th" : classLevel === "9th" ? "9th" : "10th";

  const sessionObjectives = sessionPlan.objectives
    .map((obj) => `- ${obj}`)
    .join("\n");

  const prompt = formatPrompt(AI_PROMPTS.SESSION_DETAIL_USER, {
    userType,
    className,
    subjectName,
    chapterTitle: chapter.title,
    sessionNumber: sessionPlan.sessionNumber,
    sessionTitle: sessionPlan.title,
    sessionDuration: sessionPlan.duration,
    sessionObjectives,
  });

  try {
    // Check if OpenAI is configured
    if (!openai) {
      console.log("OpenAI not configured, using fallback session detail");
      return generateFallbackSessionDetail(request);
    }

    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: AI_PROMPTS.SESSION_DETAIL_SYSTEM,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: AI_CONFIG.SESSION_DETAIL_MAX_TOKENS,
      temperature: AI_CONFIG.SESSION_DETAIL_TEMPERATURE,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No content received from OpenAI");
    }

    return content;
  } catch (error) {
    console.error("Error generating session detail:", error);
    return generateFallbackSessionDetail(request);
  }
};

// Fallback function to generate mock session details
const generateFallbackSessionDetail = (
  request: SessionDetailRequest
): string => {
  const { sessionPlan, chapter } = request;

  return `
    <div style="font-family: 'Roboto', sans-serif;">
      <div style="background-color: #e3f2fd; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <h2 style="color: #1976d2; margin-bottom: 8px;">Session ${
          sessionPlan.sessionNumber
        }: ${sessionPlan.title}</h2>
        <p style="margin-bottom: 8px;"><strong>Duration:</strong> ${
          sessionPlan.duration
        }</p>
        <p style="margin-bottom: 16px;">${sessionPlan.summary}</p>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1976d2; margin-bottom: 12px;">Learning Objectives</h3>
        <ul style="margin: 0; padding-left: 20px;">
          ${sessionPlan.objectives
            .map((obj) => `<li style="margin-bottom: 8px;">${obj}</li>`)
            .join("")}
        </ul>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1976d2; margin-bottom: 12px;">Introduction (5-10 minutes)</h3>
        <p>Begin the session by connecting today's topic to real-world applications. Engage students with thought-provoking questions related to ${
          chapter.title
        }.</p>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1976d2; margin-bottom: 12px;">Core Content (20-30 minutes)</h3>
        <p>Detailed explanation of key concepts with step-by-step examples. Include visual aids and interactive demonstrations to enhance understanding.</p>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1976d2; margin-bottom: 12px;">Activities (10-15 minutes)</h3>
        <p>Hands-on exercises and group work to reinforce learning. Include problem-solving activities that allow students to apply the concepts.</p>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1976d2; margin-bottom: 12px;">Assessment (5-10 minutes)</h3>
        <p>Quick formative assessment to check student understanding. Include both individual and collaborative evaluation methods.</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; font-style: italic; color: #666;">
        <strong>Note:</strong> This is a fallback lesson plan. For AI-generated detailed content, please configure your OpenAI API key.
      </div>
    </div>
  `;
};
