import {
  API_CONTENT_URL,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "./baseService";

// Type definitions for Content Service entities
export interface State {
  id: number;
  name: string;
  code: string;
  is_active: boolean;
}

export interface Board {
  id: number;
  name: string;
  isActive: boolean;
  description: string;
  stateId: number | null;
}

export interface Class {
  id: number;
  boardId: number;
  name: string;
  displayOrder: number;
  isActive: boolean;
}

export interface Subject {
  id: number;
  classId: number;
  name: string;
  isActive: boolean;
}

export interface Chapter {
  id: number;
  subjectId: number;
  title: string;
  chapterNumber: number;
  isActive: boolean;
  description: string | null;
}

export interface KeyPoint {
  id: number;
  code: string;
  title: string;
  section: string;
  chapterId: number;
  difficultyLevel: string;
  cognitiveLevel: string;
  skillIntent: string;
  createdAt: string;
  content: {
    tags: string[];
    board: string;
    grade: number;
    kpId: string;
    chapter: string;
    subject: string;
    kpTitle: string;
    bloomLevel: string;
    sectionTitle: string;
    irtDifficulty: number;
    kpDescription: string;
    difficultyLabel: string;
    prerequisiteKps: any[];
    misconceptionTags: string[];
    assessmentExamples: string[];
    detailedExplanation: string;
    autoGradingComponents: {
      conceptualTriples: Array<{
        triple: string;
      }>;
      assessmentCriteria: Array<{
        criterion: string;
        weightage: number;
      }>;
      keyTermsAndSynonyms: Array<{
        term: string;
        synonyms: string[];
      }>;
    };
    realWorldApplications: string[];
  };
}

export interface Session {
  id: number;
  chapter_id: number;
  session_number: number;
  title: string;
  summary: string | null;
  duration: string | null;
}

export interface SessionKeyPoint {
  id: number;
  session_id: number;
  key_point_id: number;
  order: number;
}

export interface SessionDetails {
  id: number;
  session_id: number;
  introduction: string | null;
  main_content: Record<string, any> | null;
  activities: Record<string, any> | null;
  assessment: Record<string, any> | null;
  resources: Record<string, any> | null;
  differentiation: Record<string, any> | null;
}

export interface Question {
  id: number;
  chapter_id: number;
  question_text: string;
  question_type: string;
  difficulty: string;
  marks: number;
  metadata_json: Record<string, any> | null;
}

// API functions for each entity
export const getStates = async (skip = 0, limit = 100): Promise<State[]> => {
  return makeGetRequest<State>(
    `${API_CONTENT_URL}/states?skip=${skip}&limit=${limit}`,
  );
};

export const getBoards = async (skip = 0, limit = 100): Promise<Board[]> => {
  return makeGetRequest<Board>(
    `${API_CONTENT_URL}/boards?skip=${skip}&limit=${limit}`,
  );
};

export const getClassesByBoard = async (boardId: number): Promise<Class[]> => {
  return makeGetRequest<Class>(`${API_CONTENT_URL}/classes/${boardId}`);
};

export const getSubjectsByClass = async (
  classId: number,
): Promise<Subject[]> => {
  return makeGetRequest<Subject>(
    `${API_CONTENT_URL}/subjects/classes/${classId}`,
  );
};

export const getChaptersBySubject = async (
  subjectId: number,
): Promise<Chapter[]> => {
  return makeGetRequest<Chapter>(
    `${API_CONTENT_URL}/chapters/subjects/${subjectId}`,
  );
};

export const getKeyPointsByChapter = async (
  chapterId: number,
): Promise<KeyPoint[]> => {
  return makeGetRequest<KeyPoint>(
    `${API_CONTENT_URL}/key-points/chapter/${chapterId}`,
  );
};

export const getSessionsByChapter = async (
  chapterId: number,
): Promise<Session[]> => {
  return makeGetRequest<Session>(
    `${API_CONTENT_URL}/sessions/chapters/${chapterId}`,
  );
};

export const getSessionKeyPointsBySession = async (
  sessionId: number,
): Promise<SessionKeyPoint[]> => {
  return makeGetRequest<SessionKeyPoint>(
    `${API_CONTENT_URL}/session-key-points/sessions/${sessionId}`,
  );
};

export const getSessionDetailsBySession = async (
  sessionId: number,
): Promise<SessionDetails[]> => {
  return makeGetRequest<SessionDetails>(
    `/session-details/sessions/${sessionId}`,
  );
};

export const getQuestionsByChapter = async (
  chapterId: number,
): Promise<Question[]> => {
  return makeGetRequest<Question>(`/questions/chapters/${chapterId}`);
};

// Create/Update functions for each entity
export const createBoard = async (data: Omit<Board, "id">) =>
  makePostRequest(`${API_CONTENT_URL}/boards`, data);

export const updateBoard = async (id: number, data: Partial<Board>) =>
  makePutRequest(`${API_CONTENT_URL}/boards/${id}`, data);

export const createClass = async (data: Omit<Class, "id">) =>
  makePostRequest(`${API_CONTENT_URL}/classes`, data);

export const updateClass = async (id: number, data: Partial<Class>) =>
  makePutRequest(`${API_CONTENT_URL}/classes/${id}`, data);

export const createSubject = async (data: Omit<Subject, "id">) =>
  makePostRequest(`${API_CONTENT_URL}/subjects`, data);

export const updateSubject = async (id: number, data: Partial<Subject>) =>
  makePutRequest(`${API_CONTENT_URL}/subjects/${id}`, data);

export const createChapter = async (data: Omit<Chapter, "id">) =>
  makePostRequest(`${API_CONTENT_URL}/chapters`, data);

export const updateChapter = async (id: number, data: Partial<Chapter>) =>
  makePutRequest(`${API_CONTENT_URL}/chapters/${id}`, data);

// Entity metadata for admin UI
export interface EntityMetadata {
  name: string;
  endpoint?: string;
  fetchFunction: (params?: any) => Promise<any[]>;
  createFunction?: (data: any) => Promise<any>;
  updateFunction?: (id: number, data: any) => Promise<any>;
  deleteFunction?: (id: number) => Promise<void>;
  columns: { field: string; header: string; width?: string }[];
  childEntity?: string;
  childFetchFunction?: (parentId: number) => Promise<any[]>;
  parentIdField?: string;
  editFields?: Array<{
    name: string;
    label: string;
    type?: "text" | "number" | "checkbox" | "email" | "select";
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    options?: Array<{ value: any; label: string }>;
    fetchOptions?: () => Promise<Array<{ value: any; label: string }>>;
  }>;
  onSubmit?: (data: Record<string, any>, isNew: boolean) => Promise<void>;
}

export const ENTITIES: Record<string, EntityMetadata> = {
  states: {
    name: "States",
    endpoint: "/states",
    fetchFunction: getStates,
    columns: [
      { field: "name", header: "Name" },
      { field: "code", header: "Code", width: "100px" },
      { field: "isActive", header: "Active", width: "100px" },
    ],
    childEntity: "boards",
    editFields: [
      { name: "name", label: "Name", required: true },
      { name: "code", label: "Code", required: true },
      { name: "isActive", label: "Active", type: "checkbox" },
    ],
  },
  boards: {
    name: "Boards",
    endpoint: "/boards",
    fetchFunction: getBoards,
    columns: [
      { field: "name", header: "Name" },
      { field: "description", header: "Description" },
      { field: "stateName", header: "State", width: "120px" },
      { field: "isActive", header: "Active", width: "100px" },
    ],
    childEntity: "classes",
    childFetchFunction: getClassesByBoard,
    parentIdField: "id",
    editFields: [
      { name: "name", label: "Board Name", required: true },
      { name: "description", label: "Description", multiline: true, rows: 3 },
      {
        name: "stateId",
        label: "State",
        type: "select",
        fetchOptions: async () => {
          const states = await getStates();
          return states.map((state) => ({
            value: state.id,
            label: state.name,
          }));
        },
      },
      { name: "isActive", label: "Active", type: "checkbox" },
    ],
    onSubmit: async (data, isNew) => {
      if (isNew) {
        await createBoard(data as Omit<Board, "id">);
      } else {
        await updateBoard(data.id, data);
      }
    },
  },
  classes: {
    name: "Classes",
    endpoint: "/classes",
    fetchFunction: async () => [],
    columns: [
      { field: "name", header: "Name" },
      { field: "boardId", header: "Board ID", width: "100px" },
      { field: "displayOrder", header: "Order", width: "100px" },
      { field: "isActive", header: "Active", width: "100px" },
    ],
    childEntity: "subjects",
    childFetchFunction: getSubjectsByClass,
    parentIdField: "id",
    editFields: [
      { name: "name", label: "Class Name", required: true },
      {
        name: "boardId",
        label: "Board ID",
        type: "number",
        required: true,
      },
      { name: "displayOrder", label: "Display Order", type: "number" },
      { name: "isActive", label: "Active", type: "checkbox" },
    ],
    onSubmit: async (data, isNew) => {
      if (isNew) {
        await createClass(data as Omit<Class, "id">);
      } else {
        await updateClass(data.id, data);
      }
    },
  },
  subjects: {
    name: "Subjects",
    endpoint: "/subjects",
    fetchFunction: async () => [],
    columns: [
      { field: "name", header: "Name" },
      { field: "classId", header: "Class ID", width: "100px" },
      { field: "isActive", header: "Active", width: "100px" },
    ],
    childEntity: "chapters",
    childFetchFunction: getChaptersBySubject,
    parentIdField: "id",
    editFields: [
      { name: "name", label: "Subject Name", required: true },
      { name: "classId", label: "Class ID", type: "number", required: true },
      { name: "isActive", label: "Active", type: "checkbox" },
    ],
    onSubmit: async (data, isNew) => {
      if (isNew) {
        await createSubject(data as Omit<Subject, "id">);
      } else {
        await updateSubject(data.id, data);
      }
    },
  },
  chapters: {
    name: "Chapters",
    endpoint: "/chapters",
    fetchFunction: async () => [],
    columns: [
      { field: "title", header: "Title" },
      { field: "chapterNumber", header: "Chapter #", width: "100px" },
      { field: "subjectId", header: "Subject ID", width: "100px" },
      { field: "description", header: "Description" },
      { field: "isActive", header: "Active", width: "100px" },
    ],
    editFields: [
      { name: "title", label: "Chapter Title", required: true },
      { name: "chapterNumber", label: "Chapter Number", type: "number" },
      {
        name: "subjectId",
        label: "Subject ID",
        type: "number",
        required: true,
      },
      { name: "description", label: "Description", multiline: true, rows: 3 },
      { name: "isActive", label: "Active", type: "checkbox" },
    ],
    onSubmit: async (data, isNew) => {
      if (isNew) {
        await createChapter(data as Omit<Chapter, "id">);
      } else {
        await updateChapter(data.id, data);
      }
    },
  },
};
