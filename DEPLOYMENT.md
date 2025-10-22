# GitHub Pages Deployment Guide

## Prerequisites

- Ensure your server at `https://school-ai-api.onrender.com` is running and accessible
- Make sure you have the latest changes committed to your repository

## Deployment Steps

### 1. Build and Deploy

```bash
# Build the application with production settings
npm run build:production

# Deploy to GitHub Pages
npm run deploy
```

### 2. Alternative One-Command Deployment

```bash
# This will automatically run predeploy (build:production) and then deploy
npm run deploy
```

### 3. Manual Build (if needed)

```bash
# Build with production environment variables
REACT_APP_API_BASE_URL=https://school-ai-api.onrender.com npm run build
```

## Post-Deployment

### 1. Access Your Application

Your application will be available at: https://Vrushi007.github.io/school-ai.ui

### 2. Verify API Connection

- Open the browser developer tools (F12)
- Check the Console tab for any API connection errors
- Test the lesson planning functionality to ensure the server is connected

### 3. GitHub Pages Settings

1. Go to your repository: https://github.com/Vrushi007/school-ai.ui
2. Navigate to **Settings** > **Pages**
3. Ensure the source is set to "Deploy from a branch"
4. Select branch: `gh-pages` and folder: `/ (root)`

## Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**: The 404.html file should handle this automatically
2. **API Connection Issues**: Verify your server URL is correct and accessible
3. **CORS Issues**: Ensure your server allows requests from `https://Vrushi007.github.io`
4. **Build Failures**: Check that all dependencies are properly installed

### Environment Variables:

- **Development**: Uses `http://localhost:8000` (when running locally)
- **Production**: Uses `https://school-ai-api.onrender.com` (when deployed)

### Updating the Deployment:

```bash
# Make your changes, then redeploy
git add .
git commit -m "Your changes"
git push origin main
npm run deploy
```

## Server CORS Configuration

Make sure your server at `https://school-ai-api.onrender.com` accepts requests from:

- `https://Vrushi007.github.io`
- `http://localhost:3000` (for development)
- `http://localhost:4040` (for your custom development port)
