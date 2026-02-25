# VYON Boundless Knowledge - UI

A modern React-based frontend application for the VYON education platform, providing AI-powered lesson planning, knowledge management, and student learning tools.

## Features

### 🎓 For Teachers

- **AI-Powered Lesson Planner**
  - Generate knowledge points from curriculum
  - Intelligently group knowledge points into teaching sessions
  - Create detailed session plans with AI assistance
  - View and manage knowledge points by chapter
  - Export lesson plans to PDF

- **Question Paper Generator**
  - Generate diverse question sets using AI
  - Multiple question types and difficulty levels
  - Customizable based on chapters and topics

### 👨‍🎓 For Students

- **Interactive AI Chatbot**
  - Ask questions and get detailed explanations
  - Conversation history for contextual responses
  - Subject and class-aware answers
  - Markdown and LaTeX formula support

### 👔 For Admins

- **Knowledge Point Generation**
  - Decompose curriculum into atomic knowledge points
  - Align with Bloom's Taxonomy and IRT difficulty metrics
  - Manage curriculum across boards, classes, and subjects

### 🔐 Authentication & Authorization

- **User Management**
  - Login/Register functionality
  - Password recovery (Forgot/Reset password)
  - Role-based access control (RBAC)
  - Hierarchical roles: system_admin, school_admin, teacher, student, parent

- **Protected Routes**
  - Role-based navigation and access control
  - Automatic redirects based on user role

## Tech Stack

- **React 19.2** - Modern React with hooks
- **TypeScript 4.9** - Type-safe development
- **Material-UI (MUI) 7.3** - Modern component library
- **React Router DOM 7.9** - Client-side routing
- **KaTeX 0.16** - Mathematical formula rendering
- **jsPDF 3.0** - PDF generation
- **html2canvas 1.4** - Canvas-based rendering for PDFs

## Project Structure

```
school-ai.ui/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Admin/                  # Admin dashboard components
│   │   │   ├── Admin.tsx
│   │   │   ├── GenerateKPs.tsx
│   │   │   └── KnowledgePointCard.tsx
│   │   ├── Auth/                   # Authentication components
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── ResetPassword.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── RoleBasedRedirect.tsx
│   │   ├── Common/                 # Shared components
│   │   ├── Student/                # Student dashboard components
│   │   │   ├── Student.tsx
│   │   │   ├── StudentGetAnswers.tsx
│   │   │   └── RenderAIResponse.tsx
│   │   ├── Teacher/                # Teacher dashboard components
│   │   │   ├── Teacher.tsx
│   │   │   ├── LessonPlanner/
│   │   │   │   ├── LessonPlanner.tsx
│   │   │   │   └── ViewKnowledgePoints.tsx
│   │   │   └── QuestionPaperGenerator/
│   │   │       └── QuestionPaperGenerator.tsx
│   │   ├── SessionPlan/            # Session plan rendering
│   │   ├── Home.tsx
│   │   ├── EntityTable.tsx
│   │   ├── EditModal.tsx
│   │   └── ErrorModal.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx         # Authentication context
│   ├── services/
│   │   ├── adminServices/          # Admin API services
│   │   ├── authAdminService.ts     # Auth API services
│   │   ├── baseService.ts          # Base HTTP service
│   │   ├── contentService.ts       # Content API services
│   │   ├── exportServices/         # PDF export services
│   │   ├── fallbackApis/           # Fallback API handlers
│   │   ├── studentServices/        # Student API services
│   │   └── teacherServices/        # Teacher API services
│   ├── constants/
│   │   └── common.ts               # App-wide constants
│   ├── interfaces/                 # TypeScript interfaces
│   ├── utils/                      # Utility functions
│   ├── assets/                     # Images and static assets
│   ├── App.tsx                     # Main application component
│   ├── App.css                     # Application styles
│   ├── index.tsx                   # Application entry point
│   └── types.ts                    # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Access to backend APIs:
  - Authentication API (school-ai.auth.api)
  - Content API (school-ai.content.api)
  - AI Generation API (school-ai.api)

### Installation

1. **Clone the repository**

   ```bash
   cd school-ai.ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure API endpoints**

   Create or update the proxy configuration in `src/setupProxy.js`:

   ```javascript
   // Configure your backend API URLs
   const API_BASE_URL = 'http://localhost:8000';
   const AUTH_API_URL = 'http://localhost:8001';
   const CONTENT_API_URL = 'http://localhost:8002';
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for best performance. The build is minified and filenames include hashes.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Ejects the Create React App configuration for full control over webpack, Babel, ESLint, etc.

## Key Features Detail

### Lesson Planning Workflow

1. **Generate Knowledge Points**: Admin/Teacher selects board, class, subject, and chapter to generate KPs
2. **Group into Sessions**: System intelligently groups KPs into teaching sessions
3. **Generate Session Content**: AI creates detailed teaching content for each session
4. **Export to PDF**: Teachers can export complete lesson plans as PDF documents

### Student Learning Experience

- Students can ask questions in natural language
- AI provides contextually aware answers
- Supports mathematical formulas (LaTeX rendering)
- Maintains conversation history for follow-up questions

### PDF Export

- Session plans rendered with professional formatting
- Includes all teaching content, activities, assessments
- Teacher notes and differentiation strategies
- Resources and materials list

## Environment Configuration

The application expects the following backend services:

- **Authentication Service**: User authentication and authorization
- **Content Service**: Curriculum data and knowledge points management
- **AI Service**: OpenAI-powered content generation

Configure these endpoints in your proxy setup or environment variables.

## Role-Based Access

### System Admin / School Admin
- Full access to all features
- Manage curriculum and knowledge points
- Access admin dashboard

### Teacher
- Access to lesson planner
- Question paper generator
- View and manage teaching content

### Student / Parent
- Access to student dashboard
- AI chatbot for learning support
- View learning materials

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
PORT=3001 npm start
```

### API Connection Issues

- Verify backend services are running
- Check proxy configuration in `setupProxy.js`
- Ensure CORS is properly configured on backend

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear React scripts cache
npm start -- --reset-cache
```

## Contributing

When adding new features:
1. Follow existing component structure
2. Use TypeScript for type safety
3. Implement proper error handling
4. Add loading states for async operations
5. Follow Material-UI design patterns

## Learn More

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://create-react-app.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## License

This project is part of the VYON Boundless Knowledge platform.
