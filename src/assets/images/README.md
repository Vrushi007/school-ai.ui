# Logo Setup Instructions

## How to Add Your Company Logo

### Step 1: Add Your Logo File

Place your company logo file in this directory (`src/assets/images/`).

**Recommended formats:**

- `.svg` (best for scalability)
- `.png` (good quality, supports transparency)
- `.jpg` (smaller file size)

**Recommended naming:**

- `company-logo.svg`
- `company-logo.png`
- `logo.svg`

### Step 2: Update Home.tsx

After adding your logo file, update the `src/components/Home.tsx` file:

#### Option 1: Using imported image (Recommended)

1. Uncomment the import line at the top:
   ```tsx
   import companyLogo from "../assets/images/company-logo.png";
   ```
2. Uncomment the first logo option in the component:
   ```tsx
   <Box
     component="img"
     src={companyLogo}
     alt="Company Logo"
     sx={{
       width: 120,
       height: 120,
       mb: 3,
       objectFit: "contain",
     }}
   />
   ```
3. Remove or comment out the School icon fallback

#### Option 2: Using public folder

1. Place your logo in the `public/` folder instead
2. Uncomment the second logo option:
   ```tsx
   <Box
     component="img"
     src="/logo.png"
     alt="Company Logo"
     sx={{
       width: 120,
       height: 120,
       mb: 3,
       objectFit: "contain",
     }}
   />
   ```
3. Update the `src` prop with your actual filename

### Step 3: Customize Logo Size

Adjust the `width` and `height` values in the `sx` prop to fit your logo's proportions:

- For wider logos: increase width, keep height proportional
- For taller logos: increase height, keep width proportional
- For square logos: keep width and height equal

### Notes:

- `objectFit: "contain"` ensures your logo maintains its aspect ratio
- The logo will be centered automatically
- You can add hover effects or animations if needed

## Example File Structure:

```
src/
├── assets/
│   └── images/
│       ├── company-logo.svg
│       └── README.md
└── components/
    └── Home.tsx
```
