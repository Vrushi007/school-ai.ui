# 🔧 QUICK SETUP - OpenAI API Key

The app is now configured to work with OpenAI, but you need to add your API key.

## STEP 1: Get Your OpenAI API Key

1. Go to: https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with "sk-...")

## STEP 2: Add Your API Key

1. Open the `.env` file in your project root
2. Replace `your_openai_api_key_here` with your actual API key:

   REACT_APP_OPENAI_API_KEY=sk-your-actual-key-here

## STEP 3: Restart Your App

1. Stop your development server (Ctrl+C)
2. Run: npm start

## STEP 4: Test It Out

1. Select "Teacher" as user type
2. Choose class, subject, and chapter
3. Select number of planned sessions (1-10)
4. Click "Generate Session Plan"

## 🛡️ SAFETY FEATURES

- If your API key isn't set up, the app will automatically use fallback session plans
- No crashes or errors - it just works!
- You'll see a console message if using fallback mode

## 💡 TROUBLESHOOTING

- Make sure your .env file is in the project root (same folder as package.json)
- API key must start with REACT_APP_OPENAI_API_KEY=
- Restart the server after adding/changing the API key
- Check browser console for any messages

You're all set! 🚀
