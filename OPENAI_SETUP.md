# OpenAI Integration Setup

## Overview

The LearnAI Educational Platform now includes OpenAI integration to generate AI-powered session plans for teachers. When a teacher selects their preferences and chooses the number of planned sessions, the system will call OpenAI's API to generate detailed session plans with titles, summaries, and learning objectives.

## Setup Instructions

### 1. Get OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Generate a new API key
4. Copy the API key

### 2. Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your OpenAI API key:
   ```
   REACT_APP_OPENAI_API_KEY=your_actual_api_key_here
   ```

### 3. Restart the Development Server

After adding the API key, restart your development server:

```bash
npm start
```

## How It Works

### For Teachers:

1. Select User Type: "Teacher"
2. Choose Class, Subject, and Chapter
3. Select number of "Planned Class Sessions" (1-10)
4. Click "Generate Session Plan"
5. The system will call OpenAI API to generate detailed session plans

### For Students:

- Students will continue to see the regular educational content
- No session planning features are available for students

## Generated Session Plan Features

Each session plan includes:

- **Session Number**: Sequential numbering (1, 2, 3...)
- **Title**: Descriptive title for each session
- **Summary**: 2-3 sentence overview of session content
- **Duration**: Estimated time (typically 45-60 minutes)
- **Learning Objectives**: 3-4 specific, measurable learning goals

## Fallback Behavior

If the OpenAI API is unavailable or fails:

- The system automatically generates fallback session plans
- Users will still receive structured session plans
- No error disruption to user experience

## Security Considerations

⚠️ **Important**: This is a client-side React application, which means the API key is visible to users. For production use, consider:

1. **Backend API**: Create a backend service to handle OpenAI calls
2. **Rate Limiting**: Implement usage limits
3. **Key Rotation**: Regularly rotate API keys
4. **Environment Separation**: Use different keys for dev/prod

## API Usage

The integration uses:

- **Model**: GPT-3.5-turbo
- **Max Tokens**: 2000
- **Temperature**: 0.7 (balanced creativity/consistency)

## Cost Considerations

- Each session plan generation costs approximately $0.01-0.03
- Cost depends on chapter complexity and number of sessions
- Monitor usage through OpenAI dashboard

## Troubleshooting

### Common Issues:

1. **"Error generating content"**

   - Check if API key is correctly set in `.env`
   - Verify API key is valid and has credits
   - Check browser console for detailed errors

2. **Session plans not generating**

   - Ensure you've selected "Teacher" as user type
   - Verify all required fields are filled
   - Check that planned sessions number is selected

3. **Fallback content showing**
   - This indicates OpenAI API call failed
   - Check API key configuration
   - Verify network connectivity

## Features

✅ AI-powered session plan generation  
✅ Fallback to mock data if API fails  
✅ Progressive session structure  
✅ Age-appropriate content for 8th-10th standards  
✅ Indian curriculum alignment  
✅ Responsive UI with loading states
