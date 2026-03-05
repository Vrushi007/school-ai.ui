import {
  API_AI_URL,
  API_CONTENT_URL,
  makeAuthenticatedGetRequest,
  makeAuthenticatedPostRequest,
} from "../baseService";

export interface GenerateKPsRequest {
  grade: string;
  subject: string;
  chapter: string;
  board: string;
  section?: string | null;
  provider?: string | null; // AI provider: 'openai' or 'sarvam'
}

export interface SaveKnowledgePointRequest {
  code: string;
  title: string;
  chapterId: number;
  difficultyLevel: string;
  cognitiveLevel: string;
  skillIntent: string;
  content: any;
  section: string;
  modelVersion?: string;
  promptVersion?: string;
}

export interface KnowledgePoint {
  kpId: string;
  kpTitle: string;
  kpDescription: string;
  bloomLevel: string;
  irtDifficulty: number;
  difficultyLabel: string;
  prerequisiteKps: string[];
  misconceptionTags: string[];
  assessmentExamples: string[];
  sectionTitle?: string;
  detailedExplanation?: string;
  autoGradingComponents?: {
    conceptualTriples?: Array<{
      triple: string;
    }>;
    keyTermsAndSynonyms?: Array<{
      term: string;
      synonyms: string[];
    }>;
    assessmentCriteria?: Array<{
      criterion: string;
      weightage: number;
    }>;
  };
  tags?: string[];
  realWorldApplications?: string[];
  board?: string;
  grade?: number;
  subject?: string;
  chapter?: string;
}

export interface GenerateKPsResponse {
  success: boolean;
  data?: {
    knowledgePoints?: KnowledgePoint[]; // Flat array of knowledge points (transformed from knowledge_points)
  };
  message?: string;
  error?: string | null;
}

/**
 * Generate knowledge points for a curriculum chapter using AI
 * @param request - Request parameters including grade, subject, chapter, and board
 * @returns Array of knowledge points with all their metadata
 */
/**
 * Fetch existing knowledge points for a chapter from the database
 * @param chapterId - The chapter ID to fetch knowledge points for
 * @returns Array of existing knowledge points
 */
export const getKnowledgePointsByChapter = async (
  chapterId: number,
): Promise<KnowledgePoint[]> => {
  try {
    const result = await makeAuthenticatedGetRequest(
      `${API_CONTENT_URL}/key-points/chapter/${chapterId}`,
    );

    console.log("Fetched KPs from DB:", result);

    // Map database format to KnowledgePoint format
    // Database stores most fields at top level, but rich content in JSONB 'content' field
    const knowledgePoints = (result as any[]).map((dbKp: any) => {
      // Merge top-level fields with content field (content has priority for rich data)
      const content = dbKp.content || {};

      return {
        kpId: dbKp.code || content.kpId || "",
        kpTitle: dbKp.title || content.kpTitle || "",
        kpDescription: content.kpDescription || "",
        bloomLevel: dbKp.cognitiveLevel || content.bloomLevel || "",
        irtDifficulty: content.irtDifficulty,
        difficultyLabel:
          dbKp.difficultyLevel?.replace("_", " ") ||
          content.difficultyLabel ||
          "",
        prerequisiteKps: content.prerequisiteKps || [],
        misconceptionTags: content.misconceptionTags || [],
        assessmentExamples: content.assessmentExamples || [],
        sectionTitle: dbKp.section || content.sectionTitle,
        detailedExplanation: content.detailedExplanation,
        autoGradingComponents: content.autoGradingComponents,
        tags: content.tags,
        realWorldApplications: content.realWorldApplications,
        board: content.board,
        grade: content.grade,
        subject: content.subject,
        chapter: content.chapter,
      } as KnowledgePoint;
    });

    return knowledgePoints;
  } catch (error) {
    console.error("Error fetching knowledge points:", error);
    // Return empty array if no KPs found or error occurs
    return [];
  }
};

export const generateKnowledgePoints = async (
  request: GenerateKPsRequest,
): Promise<KnowledgePoint[]> => {
  try {
    const result = await makeAuthenticatedPostRequest(
      `${API_AI_URL}/api/generate-knowledge-points`,
      request,
    );

    console.log("API Response:", result);

    // Extract knowledge points from the flat array response
    // Note: baseService automatically transforms snake_case to camelCase
    // Handle both nested and direct response structures
    const knowledgePoints =
      (result as unknown as GenerateKPsResponse).data?.knowledgePoints ||
      (result as any).knowledgePoints ||
      [];

    return knowledgePoints;
  } catch (error) {
    console.error("Error generating knowledge points:", error);
    throw error;
  }
};

/**
 * Save knowledge points to the database
 * @param knowledgePoints - Array of knowledge points to save
 * @param chapterId - The chapter ID to associate with the knowledge points
 * @returns Response from the API
 */
export const saveKnowledgePoints = async (
  knowledgePoints: KnowledgePoint[],
  chapterId: number,
): Promise<any> => {
  try {
    // Map frontend KnowledgePoint format to backend SaveKnowledgePointRequest format
    const saveRequests: SaveKnowledgePointRequest[] = knowledgePoints.map(
      (kp) => ({
        code: kp.kpId,
        title: kp.kpTitle,
        chapterId: chapterId,
        difficultyLevel: kp.difficultyLabel.replace(" ", "_"), // "Very Easy" -> "Very_Easy"
        cognitiveLevel: kp.bloomLevel,
        skillIntent: "Explain", // Default value - can be enhanced later
        content: {
          // Store full KP object as JSONB content (makeAuthenticatedPostRequest converts to snake_case)
          kpId: kp.kpId,
          kpTitle: kp.kpTitle,
          kpDescription: kp.kpDescription,
          bloomLevel: kp.bloomLevel,
          irtDifficulty: kp.irtDifficulty,
          difficultyLabel: kp.difficultyLabel,
          prerequisiteKps: kp.prerequisiteKps,
          misconceptionTags: kp.misconceptionTags,
          assessmentExamples: kp.assessmentExamples,
          sectionTitle: kp.sectionTitle,
          detailedExplanation: kp.detailedExplanation,
          autoGradingComponents: kp.autoGradingComponents,
          tags: kp.tags,
          realWorldApplications: kp.realWorldApplications,
          board: kp.board,
          grade: kp.grade,
          subject: kp.subject,
          chapter: kp.chapter,
        },
        section: kp.sectionTitle || "",
        modelVersion: "gpt-4-turbo-2024-04-09", // Default - can be enhanced later
        promptVersion: "v1.0", // Default - can be enhanced later
      }),
    );

    // Call the API to save knowledge points
    const result = await makeAuthenticatedPostRequest(
      `${API_CONTENT_URL}/key-points/`,
      saveRequests,
    );

    return result;
  } catch (error) {
    console.error("Error saving knowledge points:", error);
    throw error;
  }
};
