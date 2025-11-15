import { SubjectData } from "./types";

// Restructured mock data: class → subject → chapters
export const subjectData: SubjectData = {
  chapters: {
    "8th": {
      "Mathematics": [
        {
          "id": "math_8_ch1",
          "title": "Rational Numbers",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Understanding rational numbers and their operations",
          "topics": [
            { "id": "topic_1_1", "title": "Introduction to Rational Numbers", "chapterId": "math_8_ch1", "order": 1 },
            { "id": "topic_1_2", "title": "Properties of Rational Numbers", "chapterId": "math_8_ch1", "order": 2 },
            { "id": "topic_1_3", "title": "Operations on Rational Numbers", "chapterId": "math_8_ch1", "order": 3 }
          ]
        },
        {
          "id": "math_8_ch2",
          "title": "Linear Equations in One Variable",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Solving linear equations with one variable",
          "topics": [
            { "id": "topic_2_1", "title": "Introduction to Linear Equations", "chapterId": "math_8_ch2", "order": 1 },
            { "id": "topic_2_2", "title": "Solving Linear Equations", "chapterId": "math_8_ch2", "order": 2 },
            { "id": "topic_2_3", "title": "Applications of Linear Equations", "chapterId": "math_8_ch2", "order": 3 }
          ]
        },
        {
          "id": "math_8_ch3",
          "title": "Understanding Quadrilaterals",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Properties and types of quadrilaterals",
          "topics": [
            { "id": "topic_3_1", "title": "Introduction to Quadrilaterals", "chapterId": "math_8_ch3", "order": 1 },
            { "id": "topic_3_2", "title": "Types of Quadrilaterals", "chapterId": "math_8_ch3", "order": 2 },
            { "id": "topic_3_3", "title": "Properties of Parallelograms", "chapterId": "math_8_ch3", "order": 3 }
          ]
        },
        {
          "id": "math_8_ch4",
          "title": "Practical Geometry",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Construction of geometrical shapes",
          "topics": [
            { "id": "topic_4_1", "title": "Construction of Quadrilaterals", "chapterId": "math_8_ch4", "order": 1 },
            { "id": "topic_4_2", "title": "Special Cases in Construction", "chapterId": "math_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch5",
          "title": "Data Handling",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Organizing and interpreting data",
          "topics": [
            { "id": "topic_5_1", "title": "Bar Graphs & Pie Charts", "chapterId": "math_8_ch5", "order": 1 },
            { "id": "topic_5_2", "title": "Probability Basics", "chapterId": "math_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch6",
          "title": "Squares and Square Roots",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Finding squares and square roots",
          "topics": [
            { "id": "topic_6_1", "title": "Square Numbers", "chapterId": "math_8_ch6", "order": 1 },
            { "id": "topic_6_2", "title": "Square Roots – Methods", "chapterId": "math_8_ch6", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch7",
          "title": "Cubes and Cube Roots",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Understanding cubes and cube roots",
          "topics": [
            { "id": "topic_7_1", "title": "Cube Numbers", "chapterId": "math_8_ch7", "order": 1 },
            { "id": "topic_7_2", "title": "Cube Roots", "chapterId": "math_8_ch7", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch8",
          "title": "Comparing Quantities",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Ratios, percentages, and profit-loss",
          "topics": [
            { "id": "topic_8_1", "title": "Ratios & Percentages", "chapterId": "math_8_ch8", "order": 1 },
            { "id": "topic_8_2", "title": "Simple & Compound Interest", "chapterId": "math_8_ch8", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch9",
          "title": "Algebraic Expressions and Identities",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Manipulating algebraic expressions",
          "topics": [
            { "id": "topic_9_1", "title": "Terms, Factors, and Coefficients", "chapterId": "math_8_ch9", "order": 1 },
            { "id": "topic_9_2", "title": "Identities and Expansion", "chapterId": "math_8_ch9", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch10",
          "title": "Visualising Solid Shapes",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Understanding 3D shapes",
          "topics": [
            { "id": "topic_10_1", "title": "2D Representation of 3D objects", "chapterId": "math_8_ch10", "order": 1 },
            { "id": "topic_10_2", "title": "Mapping Space", "chapterId": "math_8_ch10", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch11",
          "title": "Mensuration",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Area and volume calculations",
          "topics": [
            { "id": "topic_11_1", "title": "Surface Area", "chapterId": "math_8_ch11", "order": 1 },
            { "id": "topic_11_2", "title": "Volume", "chapterId": "math_8_ch11", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch12",
          "title": "Exponents and Powers",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Understanding exponents",
          "topics": [
            { "id": "topic_12_1", "title": "Laws of Exponents", "chapterId": "math_8_ch12", "order": 1 },
            { "id": "topic_12_2", "title": "Standard Form", "chapterId": "math_8_ch12", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch13",
          "title": "Direct and Inverse Proportions",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Understanding proportionality",
          "topics": [
            { "id": "topic_13_1", "title": "Direct Proportion", "chapterId": "math_8_ch13", "order": 1 },
            { "id": "topic_13_2", "title": "Inverse Proportion", "chapterId": "math_8_ch13", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch14",
          "title": "Factorisation",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Breaking expressions into factors",
          "topics": [
            { "id": "topic_14_1", "title": "Common Factors", "chapterId": "math_8_ch14", "order": 1 },
            { "id": "topic_14_2", "title": "Factorisation Using Identities", "chapterId": "math_8_ch14", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch15",
          "title": "Introduction to Graphs",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Plotting and understanding graphs",
          "topics": [
            { "id": "topic_15_1", "title": "Cartesian Plane Basics", "chapterId": "math_8_ch15", "order": 1 },
            { "id": "topic_15_2", "title": "Plotting Linear Graphs", "chapterId": "math_8_ch15", "order": 2 }
          ]
        },
        {
          "id": "math_8_ch16",
          "title": "Playing with Numbers",
          "subject": "Mathematics",
          "classLevel": "8th",
          "description": "Number puzzles and tricks",
          "topics": [
            { "id": "topic_16_1", "title": "Number Games", "chapterId": "math_8_ch16", "order": 1 },
            { "id": "topic_16_2", "title": "Divisibility Rules", "chapterId": "math_8_ch16", "order": 2 }
          ]
        }
      ],

      "Science": [
        {
          "id": "sci_8_ch1",
          "title": "Crop Production and Management",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Agricultural practices and crop management",
          "topics": [
            { "id": "topic_sci_8_1_1", "title": "Agricultural Practices", "chapterId": "sci_8_ch1", "order": 1 },
            { "id": "topic_sci_8_1_2", "title": "Basic Practices of Crop Production", "chapterId": "sci_8_ch1", "order": 2 },
            { "id": "topic_sci_8_1_3", "title": "Preparation of Soil", "chapterId": "sci_8_ch1", "order": 3 }
          ]
        },
        {
          "id": "sci_8_ch2",
          "title": "Microorganisms: Friend and Foe",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Understanding microorganisms and their effects",
          "topics": [
            { "id": "id_sci_8_2_1", "title": "Types of Microorganisms", "chapterId": "sci_8_ch2", "order": 1 },
            { "id": "id_sci_8_2_2", "title": "Useful Microorganisms", "chapterId": "sci_8_ch2", "order": 2 },
            { "id": "id_sci_8_2_3", "title": "Diseases Caused by Microorganisms", "chapterId": "sci_8_ch2", "order": 3 }
          ]
        },
        {
          "id": "sci_8_ch3",
          "title": "Synthetic Fibres and Plastics",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Types of synthetic fibres and their properties",
          "topics": [
            { "id": "topic_sci_8_3_1", "title": "Types of Synthetic Fibres", "chapterId": "sci_8_ch3", "order": 1 },
            { "id": "topic_sci_8_3_2", "title": "Plastics and Environment", "chapterId": "sci_8_ch3", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch4",
          "title": "Materials: Metals and Non-metals",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Properties and uses of metals and non-metals",
          "topics": [
            { "id": "topic_sci_8_4_1", "title": "Physical Properties", "chapterId": "sci_8_ch4", "order": 1 },
            { "id": "topic_sci_8_4_2", "title": "Chemical Properties", "chapterId": "sci_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch5",
          "title": "Coal and Petroleum",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Fossil fuels and their uses",
          "topics": [
            { "id": "topic_sci_8_5_1", "title": "Formation of Fossil Fuels", "chapterId": "sci_8_ch5", "order": 1 },
            { "id": "topic_sci_8_5_2", "title": "Natural Gas and Petroleum", "chapterId": "sci_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch6",
          "title": "Combustion and Flame",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Understanding combustion and fire control",
          "topics": [
            { "id": "topic_sci_8_6_1", "title": "Types of Combustion", "chapterId": "sci_8_ch6", "order": 1 },
            { "id": "topic_sci_8_6_2", "title": "Structure of a Flame", "chapterId": "sci_8_ch6", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch7",
          "title": "Conservation of Plants and Animals",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Protecting flora and fauna",
          "topics": [
            { "id": "topic_sci_8_7_1", "title": "Deforestation", "chapterId": "sci_8_ch7", "order": 1 },
            { "id": "topic_sci_8_7_2", "title": "Conservation Methods", "chapterId": "sci_8_ch7", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch8",
          "title": "Cell – Structure and Functions",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Understanding the basic unit of life",
          "topics": [
            { "id": "topic_sci_8_8_1", "title": "Cell Structure", "chapterId": "sci_8_ch8", "order": 1 },
            { "id": "topic_sci_8_8_2", "title": "Cell Organelles", "chapterId": "sci_8_ch8", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch9",
          "title": "Reproduction in Animals",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Modes of reproduction",
          "topics": [
            { "id": "topic_sci_8_9_1", "title": "Asexual Reproduction", "chapterId": "sci_8_ch9", "order": 1 },
            { "id": "topic_sci_8_9_2", "title": "Sexual Reproduction", "chapterId": "sci_8_ch9", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch10",
          "title": "Reaching the Age of Adolescence",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Adolescence and reproductive health",
          "topics": [
            { "id": "topic_sci_8_10_1", "title": "Puberty Changes", "chapterId": "sci_8_ch10", "order": 1 },
            { "id": "topic_sci_8_10_2", "title": "Reproductive Health", "chapterId": "sci_8_ch10", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch11",
          "title": "Force and Pressure",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Forces, pressure, and their applications",
          "topics": [
            { "id": "topic_sci_8_11_1", "title": "Types of Forces", "chapterId": "sci_8_ch11", "order": 1 },
            { "id": "topic_sci_8_11_2", "title": "Pressure and Applications", "chapterId": "sci_8_ch11", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch12",
          "title": "Friction",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Effects of friction and ways to reduce it",
          "topics": [
            { "id": "topic_sci_8_12_1", "title": "Causes of Friction", "chapterId": "sci_8_ch12", "order": 1 },
            { "id": "topic_sci_8_12_2", "title": "Increasing & Reducing Friction", "chapterId": "sci_8_ch12", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch13",
          "title": "Sound",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Properties and production of sound",
          "topics": [
            { "id": "topic_sci_8_13_1", "title": "Sound Waves", "chapterId": "sci_8_ch13", "order": 1 },
            { "id": "topic_sci_8_13_2", "title": "Human Ear", "chapterId": "sci_8_ch13", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch14",
          "title": "Chemical Effects of Electric Current",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Electrolysis and its uses",
          "topics": [
            { "id": "topic_sci_8_14_1", "title": "Electroplating", "chapterId": "sci_8_ch14", "order": 1 },
            { "id": "topic_sci_8_14_2", "title": "Chemical Reactions", "chapterId": "sci_8_ch14", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch15",
          "title": "Some Natural Phenomena",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Earthquakes, lightning, and safety",
          "topics": [
            { "id": "topic_sci_8_15_1", "title": "Lightning", "chapterId": "sci_8_ch15", "order": 1 },
            { "id": "topic_sci_8_15_2", "title": "Earthquakes", "chapterId": "sci_8_ch15", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch16",
          "title": "Light",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Reflection and refraction basics",
          "topics": [
            { "id": "topic_sci_8_16_1", "title": "Reflection", "chapterId": "sci_8_ch16", "order": 1 },
            { "id": "topic_sci_8_16_2", "title": "Human Eye", "chapterId": "sci_8_ch16", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch17",
          "title": "Stars and the Solar System",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Astronomy and celestial objects",
          "topics": [
            { "id": "topic_sci_8_17_1", "title": "Stars & Constellations", "chapterId": "sci_8_ch17", "order": 1 },
            { "id": "topic_sci_8_17_2", "title": "Planetary System", "chapterId": "sci_8_ch17", "order": 2 }
          ]
        },
        {
          "id": "sci_8_ch18",
          "title": "Pollution of Air and Water",
          "subject": "Science",
          "classLevel": "8th",
          "description": "Environmental pollution and solutions",
          "topics": [
            { "id": "topic_sci_8_18_1", "title": "Air Pollution", "chapterId": "sci_8_ch18", "order": 1 },
            { "id": "topic_sci_8_18_2", "title": "Water Pollution", "chapterId": "sci_8_ch18", "order": 2 }
          ]
        }
      ],

      "English": [
        {
          "id": "eng_8_ch1",
          "title": "The Best Christmas Present in the World",
          "subject": "English",
          "classLevel": "8th",
          "description": "A touching story about war and humanity",
          "topics": [
            { "id": "topic_eng_8_1_1", "title": "Character Analysis", "chapterId": "eng_8_ch1", "order": 1 },
            { "id": "topic_eng_8_1_2", "title": "Theme and Message", "chapterId": "eng_8_ch1", "order": 2 },
            { "id": "topic_eng_8_1_3", "title": "Literary Devices", "chapterId": "eng_8_ch1", "order": 3 }
          ]
        },
        {
          "id": "eng_8_ch2",
          "title": "The Tsunami",
          "subject": "English",
          "classLevel": "8th",
          "description": "Stories of survival and courage during natural disasters",
          "topics": [
            { "id": "topic_eng_8_2_1", "title": "Understanding Natural Disasters", "chapterId": "eng_8_ch2", "order": 1 },
            { "id": "topic_eng_8_2_2", "title": "Human Response to Crisis", "chapterId": "eng_8_ch2", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch3",
          "title": "Glimpses of the Past",
          "subject": "English",
          "classLevel": "8th",
          "description": "Historical events leading to India's independence",
          "topics": [
            { "id": "topic_eng_8_3_1", "title": "Timeline of Events", "chapterId": "eng_8_ch3", "order": 1 },
            { "id": "topic_eng_8_3_2", "title": "Important Freedom Fighters", "chapterId": "eng_8_ch3", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch4",
          "title": "Bepin Choudhury’s Lapse of Memory",
          "subject": "English",
          "classLevel": "8th",
          "description": "A humorous mystery story",
          "topics": [
            { "id": "topic_eng_8_4_1", "title": "Plot Overview", "chapterId": "eng_8_ch4", "order": 1 },
            { "id": "topic_eng_8_4_2", "title": "Character Traits", "chapterId": "eng_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch5",
          "title": "The Summit Within",
          "subject": "English",
          "classLevel": "8th",
          "description": "Autobiographical account of climbing a mountain",
          "topics": [
            { "id": "topic_eng_8_5_1", "title": "Mountaineering Challenges", "chapterId": "eng_8_ch5", "order": 1 },
            { "id": "topic_eng_8_5_2", "title": "Inner Strength", "chapterId": "eng_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch6",
          "title": "This is Jody's Fawn",
          "subject": "English",
          "classLevel": "8th",
          "description": "A story about compassion",
          "topics": [
            { "id": "topic_eng_8_6_1", "title": "Moral Values", "chapterId": "eng_8_ch6", "order": 1 },
            { "id": "topic_eng_8_6_2", "title": "Character Analysis", "chapterId": "eng_8_ch6", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch7",
          "title": "A Visit to Cambridge",
          "subject": "English",
          "classLevel": "8th",
          "description": "A meeting with Stephen Hawking",
          "topics": [
            { "id": "topic_eng_8_7_1", "title": "Understanding Disabilities", "chapterId": "eng_8_ch7", "order": 1 },
            { "id": "topic_eng_8_7_2", "title": "Life of Stephen Hawking", "chapterId": "eng_8_ch7", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch8",
          "title": "A Short Monsoon Diary",
          "subject": "English",
          "classLevel": "8th",
          "description": "Ruskin Bond’s diary entries about monsoon",
          "topics": [
            { "id": "topic_eng_8_8_1", "title": "Diary Writing Style", "chapterId": "eng_8_ch8", "order": 1 },
            { "id": "topic_eng_8_8_2", "title": "Nature Themes", "chapterId": "eng_8_ch8", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch9",
          "title": "The Great Stone Face – I",
          "subject": "English",
          "classLevel": "8th",
          "description": "A moral story about character",
          "topics": [
            { "id": "topic_eng_8_9_1", "title": "Symbolism", "chapterId": "eng_8_ch9", "order": 1 },
            { "id": "topic_eng_8_9_2", "title": "Character Study", "chapterId": "eng_8_ch9", "order": 2 }
          ]
        },
        {
          "id": "eng_8_ch10",
          "title": "The Great Stone Face – II",
          "subject": "English",
          "classLevel": "8th",
          "description": "Continuation of the inspiring story",
          "topics": [
            { "id": "topic_eng_8_10_1", "title": "Final Revelation", "chapterId": "eng_8_ch10", "order": 1 },
            { "id": "topic_eng_8_10_2", "title": "Moral Lessons", "chapterId": "eng_8_ch10", "order": 2 }
          ]
        }
      ],
      "Social Science": [
        {
          "id": "sst_hist_8_ch1",
          "title": "How, When and Where",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Understanding history and its importance",
          "topics": [
            { "id": "topic_hist_8_1_1", "title": "Importance of Dates", "chapterId": "sst_hist_8_ch1", "order": 1 },
            { "id": "topic_hist_8_1_2", "title": "Sources of History", "chapterId": "sst_hist_8_ch1", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch2",
          "title": "From Trade to Territory",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "British rule and expansion",
          "topics": [
            { "id": "topic_hist_8_2_1", "title": "East India Company", "chapterId": "sst_hist_8_ch2", "order": 1 },
            { "id": "topic_hist_8_2_2", "title": "Battle of Plassey", "chapterId": "sst_hist_8_ch2", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch3",
          "title": "Ruling the Countryside",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Revenue systems and impact on farmers",
          "topics": [
            { "id": "topic_hist_8_3_1", "title": "Permanent Settlement", "chapterId": "sst_hist_8_ch3", "order": 1 },
            { "id": "topic_hist_8_3_2", "title": "Indigo Rebellion", "chapterId": "sst_hist_8_ch3", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch4",
          "title": "Tribals, Dikus and the Vision of a Golden Age",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Tribal communities and their struggles",
          "topics": [
            { "id": "topic_hist_8_4_1", "title": "Tribal Life", "chapterId": "sst_hist_8_ch4", "order": 1 },
            { "id": "topic_hist_8_4_2", "title": "Revolt of Birsa Munda", "chapterId": "sst_hist_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch5",
          "title": "When People Rebel – 1857",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "First war of independence",
          "topics": [
            { "id": "topic_hist_8_5_1", "title": "Causes of Revolt", "chapterId": "sst_hist_8_ch5", "order": 1 },
            { "id": "topic_hist_8_5_2", "title": "Major Events of 1857", "chapterId": "sst_hist_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch6",
          "title": "Colonialism and the City",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Changes in Indian cities under British rule",
          "topics": [
            { "id": "topic_hist_8_6_1", "title": "Urbanization", "chapterId": "sst_hist_8_ch6", "order": 1 },
            { "id": "topic_hist_8_6_2", "title": "Delhi and Calcutta", "chapterId": "sst_hist_8_ch6", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch7",
          "title": "Weavers, Iron Smelters and Factory Owners",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Industrial changes in India",
          "topics": [
            { "id": "topic_hist_8_7_1", "title": "Decline of Indian Textiles", "chapterId": "sst_hist_8_ch7", "order": 1 },
            { "id": "topic_hist_8_7_2", "title": "Rise of Factories", "chapterId": "sst_hist_8_ch7", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch8",
          "title": "Civilising the ‘Native’, Educating the Nation",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Education during colonial rule",
          "topics": [
            { "id": "topic_hist_8_8_1", "title": "Macaulay's Education Policy", "chapterId": "sst_hist_8_ch8", "order": 1 },
            { "id": "topic_hist_8_8_2", "title": "Wood’s Despatch", "chapterId": "sst_hist_8_ch8", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch9",
          "title": "Women, Caste and Reform",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Social reforms in India",
          "topics": [
            { "id": "topic_hist_8_9_1", "title": "Women Reformers", "chapterId": "sst_hist_8_ch9", "order": 1 },
            { "id": "topic_hist_8_9_2", "title": "Caste-based Reforms", "chapterId": "sst_hist_8_ch9", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch10",
          "title": "The Changing World of Visual Arts",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Art and culture changes in India",
          "topics": [
            { "id": "topic_hist_8_10_1", "title": "Traditional Paintings", "chapterId": "sst_hist_8_ch10", "order": 1 },
            { "id": "topic_hist_8_10_2", "title": "Colonial Art Influence", "chapterId": "sst_hist_8_ch10", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch11",
          "title": "The Making of the National Movement: 1870s–1947",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Indian independence movement",
          "topics": [
            { "id": "topic_hist_8_11_1", "title": "Early Nationalists", "chapterId": "sst_hist_8_ch11", "order": 1 },
            { "id": "topic_hist_8_11_2", "title": "Gandhian Era", "chapterId": "sst_hist_8_ch11", "order": 2 }
          ]
        },
        {
          "id": "sst_hist_8_ch12",
          "title": "India After Independence",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Challenges faced by independent India",
          "topics": [
            { "id": "topic_hist_8_12_1", "title": "Framing the Constitution", "chapterId": "sst_hist_8_ch12", "order": 1 },
            { "id": "topic_hist_8_12_2", "title": "Economic Development", "chapterId": "sst_hist_8_ch12", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch1",
          "title": "The Indian Constitution",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Understanding the constitution",
          "topics": [
            { "id": "topic_civ_8_1_1", "title": "Features of Constitution", "chapterId": "sst_civ_8_ch1", "order": 1 },
            { "id": "topic_civ_8_1_2", "title": "Need for Constitution", "chapterId": "sst_civ_8_ch1", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch2",
          "title": "Understanding Secularism",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Meaning of secularism",
          "topics": [
            { "id": "topic_civ_8_2_1", "title": "Secular State", "chapterId": "sst_civ_8_ch2", "order": 1 },
            { "id": "topic_civ_8_2_2", "title": "Religious Freedom", "chapterId": "sst_civ_8_ch2", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch3",
          "title": "Why Do We Need a Parliament?",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Role of parliament in democracy",
          "topics": [
            { "id": "topic_civ_8_3_1", "title": "Functions of Parliament", "chapterId": "sst_civ_8_ch3", "order": 1 },
            { "id": "topic_civ_8_3_2", "title": "Representation of People", "chapterId": "sst_civ_8_ch3", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch4",
          "title": "Understanding Laws",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "How laws are made",
          "topics": [
            { "id": "topic_civ_8_4_1", "title": "Need for Laws", "chapterId": "sst_civ_8_ch4", "order": 1 },
            { "id": "topic_civ_8_4_2", "title": "Law Making Process", "chapterId": "sst_civ_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch5",
          "title": "The Judiciary",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Structure and role of judiciary",
          "topics": [
            { "id": "topic_civ_8_5_1", "title": "Hierarchy of Courts", "chapterId": "sst_civ_8_ch5", "order": 1 },
            { "id": "topic_civ_8_5_2", "title": "Judicial Review", "chapterId": "sst_civ_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch6",
          "title": "Understanding Our Criminal Justice System",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Basics of criminal justice",
          "topics": [
            { "id": "topic_civ_8_6_1", "title": "Police and FIR", "chapterId": "sst_civ_8_ch6", "order": 1 },
            { "id": "topic_civ_8_6_2", "title": "Role of Courts", "chapterId": "sst_civ_8_ch6", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch7",
          "title": "Understanding Marginalisation",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Marginalised groups and challenges",
          "topics": [
            { "id": "topic_civ_8_7_1", "title": "Adivasis & Minorities", "chapterId": "sst_civ_8_ch7", "order": 1 },
            { "id": "topic_civ_8_7_2", "title": "Marginalisation Effects", "chapterId": "sst_civ_8_ch7", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch8",
          "title": "Confronting Marginalisation",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Ways to reduce marginalisation",
          "topics": [
            { "id": "topic_civ_8_8_1", "title": "Law & Rights", "chapterId": "sst_civ_8_ch8", "order": 1 },
            { "id": "topic_civ_8_8_2", "title": "Public Advocacy", "chapterId": "sst_civ_8_ch8", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch9",
          "title": "Public Facilities",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Role of government in providing resources",
          "topics": [
            { "id": "topic_civ_8_9_1", "title": "Water Supply", "chapterId": "sst_civ_8_ch9", "order": 1 },
            { "id": "topic_civ_8_9_2", "title": "Healthcare", "chapterId": "sst_civ_8_ch9", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_8_ch10",
          "title": "Law and Social Justice",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "How laws ensure equality",
          "topics": [
            { "id": "topic_civ_8_10_1", "title": "Worker Protection Laws", "chapterId": "sst_civ_8_ch10", "order": 1 },
            { "id": "topic_civ_8_10_2", "title": "Child Labour Laws", "chapterId": "sst_civ_8_ch10", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch1",
          "title": "Resources",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Types of resources and their uses",
          "topics": [
            { "id": "topic_geo_8_1_1", "title": "Natural Resources", "chapterId": "sst_geo_8_ch1", "order": 1 },
            { "id": "topic_geo_8_1_2", "title": "Human-made Resources", "chapterId": "sst_geo_8_ch1", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch2",
          "title": "Land, Soil, Water, Natural Vegetation and Wildlife Resources",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Conservation and management of resources",
          "topics": [
            { "id": "topic_geo_8_2_1", "title": "Land Use", "chapterId": "sst_geo_8_ch2", "order": 1 },
            { "id": "topic_geo_8_2_2", "title": "Soil Formation", "chapterId": "sst_geo_8_ch2", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch3",
          "title": "Mineral and Power Resources",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Types of minerals and energy sources",
          "topics": [
            { "id": "topic_geo_8_3_1", "title": "Types of Minerals", "chapterId": "sst_geo_8_ch3", "order": 1 },
            { "id": "topic_geo_8_3_2", "title": "Conventional & Non-Conventional Energy", "chapterId": "sst_geo_8_ch3", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch4",
          "title": "Agriculture",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Types of farming",
          "topics": [
            { "id": "topic_geo_8_4_1", "title": "Types of Agriculture", "chapterId": "sst_geo_8_ch4", "order": 1 },
            { "id": "topic_geo_8_4_2", "title": "Major Crops", "chapterId": "sst_geo_8_ch4", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch5",
          "title": "Industries",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Industrial classification",
          "topics": [
            { "id": "topic_geo_8_5_1", "title": "Types of Industries", "chapterId": "sst_geo_8_ch5", "order": 1 },
            { "id": "topic_geo_8_5_2", "title": "Industrial Location Factors", "chapterId": "sst_geo_8_ch5", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_8_ch6",
          "title": "Human Resources",
          "subject": "Social Science",
          "classLevel": "8th",
          "description": "Population dynamics",
          "topics": [
            { "id": "topic_geo_8_6_1", "title": "Population Distribution", "chapterId": "sst_geo_8_ch6", "order": 1 },
            { "id": "topic_geo_8_6_2", "title": "Human Development", "chapterId": "sst_geo_8_ch6", "order": 2 }
          ]
        }
      ]
    },
    "9th": {
      "Mathematics": [
        {
          "id": "math_9_ch1",
          "title": "Number Systems",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Real numbers, irrational numbers and their properties",
          "topics": [
            { "id": "topic_math_9_1_1", "title": "Rational & Irrational Numbers", "chapterId": "math_9_ch1", "order": 1 },
            { "id": "topic_math_9_1_2", "title": "Real Number System", "chapterId": "math_9_ch1", "order": 2 },
            { "id": "topic_math_9_1_3", "title": "Operations on Real Numbers", "chapterId": "math_9_ch1", "order": 3 }
          ]
        },
        {
          "id": "math_9_ch2",
          "title": "Polynomials",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Basics of polynomials and identities",
          "topics": [
            { "id": "topic_math_9_2_1", "title": "Types of Polynomials", "chapterId": "math_9_ch2", "order": 1 },
            { "id": "topic_math_9_2_2", "title": "Zeroes of a Polynomial", "chapterId": "math_9_ch2", "order": 2 },
            { "id": "topic_math_9_2_3", "title": "Remainder Theorem", "chapterId": "math_9_ch2", "order": 3 }
          ]
        },
        {
          "id": "math_9_ch3",
          "title": "Coordinate Geometry",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Plotting points and understanding the Cartesian plane",
          "topics": [
            { "id": "topic_math_9_3_1", "title": "Cartesian System", "chapterId": "math_9_ch3", "order": 1 },
            { "id": "topic_math_9_3_2", "title": "Plotting Points", "chapterId": "math_9_ch3", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch4",
          "title": "Linear Equations in Two Variables",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Understanding and plotting linear equations",
          "topics": [
            { "id": "topic_math_9_4_1", "title": "Solutions of Linear Equations", "chapterId": "math_9_ch4", "order": 1 },
            { "id": "topic_math_9_4_2", "title": "Graphing Linear Equations", "chapterId": "math_9_ch4", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch5",
          "title": "Introduction to Euclid’s Geometry",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Euclid's postulates and axioms",
          "topics": [
            { "id": "topic_math_9_5_1", "title": "Euclid’s Definitions", "chapterId": "math_9_ch5", "order": 1 },
            { "id": "topic_math_9_5_2", "title": "Postulates & Axioms", "chapterId": "math_9_ch5", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch6",
          "title": "Lines and Angles",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Types of angles and angle relationships",
          "topics": [
            { "id": "topic_math_9_6_1", "title": "Linear Pair & Adjacent Angles", "chapterId": "math_9_ch6", "order": 1 },
            { "id": "topic_math_9_6_2", "title": "Parallel Lines & Transversal", "chapterId": "math_9_ch6", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch7",
          "title": "Triangles",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Congruence and inequality of triangles",
          "topics": [
            { "id": "topic_math_9_7_1", "title": "Congruency Criteria", "chapterId": "math_9_ch7", "order": 1 },
            { "id": "topic_math_9_7_2", "title": "Inequalities in a Triangle", "chapterId": "math_9_ch7", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch8",
          "title": "Quadrilaterals",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Properties of quadrilaterals",
          "topics": [
            { "id": "topic_math_9_8_1", "title": "Parallelograms", "chapterId": "math_9_ch8", "order": 1 },
            { "id": "topic_math_9_8_2", "title": "Conditions for Parallelogram", "chapterId": "math_9_ch8", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch9",
          "title": "Areas of Parallelograms and Triangles",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Area properties of polygons",
          "topics": [
            { "id": "topic_math_9_9_1", "title": "Area Theorems", "chapterId": "math_9_ch9", "order": 1 },
            { "id": "topic_math_9_9_2", "title": "Parallelogram–Triangle Area Relation", "chapterId": "math_9_ch9", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch10",
          "title": "Circles",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Circle definitions and theorems",
          "topics": [
            { "id": "topic_math_9_10_1", "title": "Chord Properties", "chapterId": "math_9_ch10", "order": 1 },
            { "id": "topic_math_9_10_2", "title": "Perpendicular from Centre", "chapterId": "math_9_ch10", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch11",
          "title": "Constructions",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Geometric constructions using ruler and compass",
          "topics": [
            { "id": "topic_math_9_11_1", "title": "Angle Bisector", "chapterId": "math_9_ch11", "order": 1 },
            { "id": "topic_math_9_11_2", "title": "Triangles Construction", "chapterId": "math_9_ch11", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch12",
          "title": "Heron’s Formula",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Finding area of triangles using Heron’s Formula",
          "topics": [
            { "id": "topic_math_9_12_1", "title": "Derivation of Formula", "chapterId": "math_9_ch12", "order": 1 },
            { "id": "topic_math_9_12_2", "title": "Applications", "chapterId": "math_9_ch12", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch13",
          "title": "Surface Areas and Volumes",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "3D shapes and their surface areas",
          "topics": [
            { "id": "topic_math_9_13_1", "title": "Cuboid and Cube", "chapterId": "math_9_ch13", "order": 1 },
            { "id": "topic_math_9_13_2", "title": "Cylinder, Cone, Sphere", "chapterId": "math_9_ch13", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch14",
          "title": "Statistics",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Data representation and central tendency",
          "topics": [
            { "id": "topic_math_9_14_1", "title": "Frequency Tables", "chapterId": "math_9_ch14", "order": 1 },
            { "id": "topic_math_9_14_2", "title": "Mean, Median & Mode", "chapterId": "math_9_ch14", "order": 2 }
          ]
        },
        {
          "id": "math_9_ch15",
          "title": "Probability",
          "subject": "Mathematics",
          "classLevel": "9th",
          "description": "Basic probability concepts",
          "topics": [
            { "id": "topic_math_9_15_1", "title": "Random Experiments", "chapterId": "math_9_ch15", "order": 1 },
            { "id": "topic_math_9_15_2", "title": "Simple Probability", "chapterId": "math_9_ch15", "order": 2 }
          ]
        }
      ],

      "Science": [
        {
          "id": "sci_9_ch1",
          "title": "Matter in Our Surroundings",
          "subject": "Science",
          "classLevel": "9th",
          "description": "States of matter and their properties",
          "topics": [
            { "id": "topic_sci_9_1_1", "title": "Physical Nature of Matter", "chapterId": "sci_9_ch1", "order": 1 },
            { "id": "topic_sci_9_1_2", "title": "Characteristics of Particles", "chapterId": "sci_9_ch1", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch2",
          "title": "Is Matter Around Us Pure?",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Mixtures, solutions and separation techniques",
          "topics": [
            { "id": "topic_sci_9_2_1", "title": "Types of Mixtures", "chapterId": "sci_9_ch2", "order": 1 },
            { "id": "topic_sci_9_2_2", "title": "Separation Techniques", "chapterId": "sci_9_ch2", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch3",
          "title": "Atoms and Molecules",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Laws of chemical combination and atomic theory",
          "topics": [
            { "id": "topic_sci_9_3_1", "title": "Laws of Chemical Combination", "chapterId": "sci_9_ch3", "order": 1 },
            { "id": "topic_sci_9_3_2", "title": "Atomic Mass & Mole Concept", "chapterId": "sci_9_ch3", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch4",
          "title": "Structure of the Atom",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Models of the atom and electronic configuration",
          "topics": [
            { "id": "topic_sci_9_4_1", "title": "Thomson, Rutherford, Bohr Models", "chapterId": "sci_9_ch4", "order": 1 },
            { "id": "topic_sci_9_4_2", "title": "Valency & Atomic Number", "chapterId": "sci_9_ch4", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch5",
          "title": "The Fundamental Unit of Life",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Cell structure and functions",
          "topics": [
            { "id": "topic_sci_9_5_1", "title": "Cell Organelles", "chapterId": "sci_9_ch5", "order": 1 },
            { "id": "topic_sci_9_5_2", "title": "Plasma Membrane & Nucleus", "chapterId": "sci_9_ch5", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch6",
          "title": "Tissues",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Plant and animal tissues",
          "topics": [
            { "id": "topic_sci_9_6_1", "title": "Plant Tissues", "chapterId": "sci_9_ch6", "order": 1 },
            { "id": "topic_sci_9_6_2", "title": "Animal Tissues", "chapterId": "sci_9_ch6", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch7",
          "title": "Diversity in Living Organisms",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Classification of living beings",
          "topics": [
            { "id": "topic_sci_9_7_1", "title": "Five Kingdom Classification", "chapterId": "sci_9_ch7", "order": 1 },
            { "id": "topic_sci_9_7_2", "title": "Plant & Animal Kingdom", "chapterId": "sci_9_ch7", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch8",
          "title": "Motion",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Motion, speed, velocity and graphs",
          "topics": [
            { "id": "topic_sci_9_8_1", "title": "Distance & Displacement", "chapterId": "sci_9_ch8", "order": 1 },
            { "id": "topic_sci_9_8_2", "title": "Motion Graphs", "chapterId": "sci_9_ch8", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch9",
          "title": "Force and Laws of Motion",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Newton’s laws and inertia",
          "topics": [
            { "id": "topic_sci_9_9_1", "title": "Newton’s Laws", "chapterId": "sci_9_ch9", "order": 1 },
            { "id": "topic_sci_9_9_2", "title": "Inertia & Momentum", "chapterId": "sci_9_ch9", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch10",
          "title": "Gravitation",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Universal law of gravitation and buoyancy",
          "topics": [
            { "id": "topic_sci_9_10_1", "title": "Gravitational Force", "chapterId": "sci_9_ch10", "order": 1 },
            { "id": "topic_sci_9_10_2", "title": "Buoyant Force", "chapterId": "sci_9_ch10", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch11",
          "title": "Work and Energy",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Work, power and different forms of energy",
          "topics": [
            { "id": "topic_sci_9_11_1", "title": "Work & Power", "chapterId": "sci_9_ch11", "order": 1 },
            { "id": "topic_sci_9_11_2", "title": "Kinetic & Potential Energy", "chapterId": "sci_9_ch11", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch12",
          "title": "Sound",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Propagation of sound and its properties",
          "topics": [
            { "id": "topic_sci_9_12_1", "title": "Production of Sound", "chapterId": "sci_9_ch12", "order": 1 },
            { "id": "topic_sci_9_12_2", "title": "Speed & Characteristics", "chapterId": "sci_9_ch12", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch13",
          "title": "Why Do We Fall Ill?",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Health, diseases and prevention",
          "topics": [
            { "id": "topic_sci_9_13_1", "title": "Causes of Diseases", "chapterId": "sci_9_ch13", "order": 1 },
            { "id": "topic_sci_9_13_2", "title": "Prevention Methods", "chapterId": "sci_9_ch13", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch14",
          "title": "Natural Resources",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Air, water, soil and biogeochemical cycles",
          "topics": [
            { "id": "topic_sci_9_14_1", "title": "Air & Water Resources", "chapterId": "sci_9_ch14", "order": 1 },
            { "id": "topic_sci_9_14_2", "title": "Biogeochemical Cycles", "chapterId": "sci_9_ch14", "order": 2 }
          ]
        },
        {
          "id": "sci_9_ch15",
          "title": "Improvement in Food Resources",
          "subject": "Science",
          "classLevel": "9th",
          "description": "Crop improvement and management",
          "topics": [
            { "id": "topic_sci_9_15_1", "title": "Crop Production", "chapterId": "sci_9_ch15", "order": 1 },
            { "id": "topic_sci_9_15_2", "title": "Animal Husbandry", "chapterId": "sci_9_ch15", "order": 2 }
          ]
        }
      ],
      "English": [

        {
          "id": "eng_9_bh_ch1",
          "title": "The Fun They Had",
          "subject": "English",
          "classLevel": "9th",
          "description": "A futuristic story comparing virtual schooling with traditional schooling.",
          "topics": [
            { "id": "topic_eng_9_bh_1_1", "title": "Story Summary", "chapterId": "eng_9_bh_ch1", "order": 1 },
            { "id": "topic_eng_9_bh_1_2", "title": "Characters and Themes", "chapterId": "eng_9_bh_ch1", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch2",
          "title": "The Sound of Music",
          "subject": "English",
          "classLevel": "9th",
          "description": "Success stories of Evelyn Glennie and Bismillah Khan.",
          "topics": [
            { "id": "topic_eng_9_bh_2_1", "title": "Evelyn Glennie’s Journey", "chapterId": "eng_9_bh_ch2", "order": 1 },
            { "id": "topic_eng_9_bh_2_2", "title": "Bismillah Khan’s Achievements", "chapterId": "eng_9_bh_ch2", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch3",
          "title": "The Little Girl",
          "subject": "English",
          "classLevel": "9th",
          "description": "A touching story of a girl's relationship with her father.",
          "topics": [
            { "id": "topic_eng_9_bh_3_1", "title": "Character Study", "chapterId": "eng_9_bh_ch3", "order": 1 },
            { "id": "topic_eng_9_bh_3_2", "title": "Theme & Message", "chapterId": "eng_9_bh_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch4",
          "title": "A Truly Beautiful Mind",
          "subject": "English",
          "classLevel": "9th",
          "description": "Biography of Albert Einstein.",
          "topics": [
            { "id": "topic_eng_9_bh_4_1", "title": "Einstein's Early Life", "chapterId": "eng_9_bh_ch4", "order": 1 },
            { "id": "topic_eng_9_bh_4_2", "title": "Scientific Contributions", "chapterId": "eng_9_bh_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch5",
          "title": "The Snake and the Mirror",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous anecdote of a doctor encountering a snake.",
          "topics": [
            { "id": "topic_eng_9_bh_5_1", "title": "Plot Overview", "chapterId": "eng_9_bh_ch5", "order": 1 },
            { "id": "topic_eng_9_bh_5_2", "title": "Humor and Irony", "chapterId": "eng_9_bh_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch6",
          "title": "My Childhood",
          "subject": "English",
          "classLevel": "9th",
          "description": "Autobiographical account by A.P.J. Abdul Kalam.",
          "topics": [
            { "id": "topic_eng_9_bh_6_1", "title": "Life Lessons", "chapterId": "eng_9_bh_ch6", "order": 1 },
            { "id": "topic_eng_9_bh_6_2", "title": "Influence of Family", "chapterId": "eng_9_bh_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch7",
          "title": "Packing",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous account of the narrator packing for a trip.",
          "topics": [
            { "id": "topic_eng_9_bh_7_1", "title": "Humor Elements", "chapterId": "eng_9_bh_ch7", "order": 1 },
            { "id": "topic_eng_9_bh_7_2", "title": "Characters Analysis", "chapterId": "eng_9_bh_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch8",
          "title": "Reach for the Top",
          "subject": "English",
          "classLevel": "9th",
          "description": "Inspirational stories of Santosh Yadav & Maria Sharapova.",
          "topics": [
            { "id": "topic_eng_9_bh_8_1", "title": "Santosh Yadav’s Achievements", "chapterId": "eng_9_bh_ch8", "order": 1 },
            { "id": "topic_eng_9_bh_8_2", "title": "Maria Sharapova’s Journey", "chapterId": "eng_9_bh_ch8", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch9",
          "title": "The Bond of Love",
          "subject": "English",
          "classLevel": "9th",
          "description": "A true story of a boy and his pet bear.",
          "topics": [
            { "id": "topic_eng_9_bh_9_1", "title": "Summary & Key Events", "chapterId": "eng_9_bh_ch9", "order": 1 },
            { "id": "topic_eng_9_bh_9_2", "title": "Human–Animal Bond", "chapterId": "eng_9_bh_ch9", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch10",
          "title": "Kathmandu",
          "subject": "English",
          "classLevel": "9th",
          "description": "Narrative on the author’s experiences in Kathmandu.",
          "topics": [
            { "id": "topic_eng_9_bh_10_1", "title": "Travel Experiences", "chapterId": "eng_9_bh_ch10", "order": 1 },
            { "id": "topic_eng_9_bh_10_2", "title": "Cultural Descriptions", "chapterId": "eng_9_bh_ch10", "order": 2 }
          ]
        },

        {
          "id": "eng_9_bh_ch11",
          "title": "If I Were You",
          "subject": "English",
          "classLevel": "9th",
          "description": "A play about mistaken identity and calm thinking.",
          "topics": [
            { "id": "topic_eng_9_bh_11_1", "title": "Dramatic Elements", "chapterId": "eng_9_bh_ch11", "order": 1 },
            { "id": "topic_eng_9_bh_11_2", "title": "Character Roles", "chapterId": "eng_9_bh_ch11", "order": 2 }
          ]
        },
        {
          "id": "eng_9_poem_1",
          "title": "The Road Not Taken",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem about life choices and individuality.",
          "topics": [
            { "id": "topic_eng_9_p_1_1", "title": "Poem Summary", "chapterId": "eng_9_poem_1", "order": 1 },
            { "id": "topic_eng_9_p_1_2", "title": "Theme & Message", "chapterId": "eng_9_poem_1", "order": 2 },
            { "id": "topic_eng_9_p_1_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_1", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_2",
          "title": "Wind",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem highlighting the power of the wind.",
          "topics": [
            { "id": "topic_eng_9_p_2_1", "title": "Poem Summary", "chapterId": "eng_9_poem_2", "order": 1 },
            { "id": "topic_eng_9_p_2_2", "title": "Theme & Message", "chapterId": "eng_9_poem_2", "order": 2 },
            { "id": "topic_eng_9_p_2_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_2", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_3",
          "title": "Rain on the Roof",
          "subject": "English",
          "classLevel": "9th",
          "description": "A nostalgic poem about rain and memories.",
          "topics": [
            { "id": "topic_eng_9_p_3_1", "title": "Poem Summary", "chapterId": "eng_9_poem_3", "order": 1 },
            { "id": "topic_eng_9_p_3_2", "title": "Theme & Message", "chapterId": "eng_9_poem_3", "order": 2 },
            { "id": "topic_eng_9_p_3_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_3", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_4",
          "title": "The Lake Isle of Innisfree",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem expressing longing for peace in nature.",
          "topics": [
            { "id": "topic_eng_9_p_4_1", "title": "Poem Summary", "chapterId": "eng_9_poem_4", "order": 1 },
            { "id": "topic_eng_9_p_4_2", "title": "Theme & Message", "chapterId": "eng_9_poem_4", "order": 2 },
            { "id": "topic_eng_9_p_4_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_4", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_5",
          "title": "A Legend of the Northland",
          "subject": "English",
          "classLevel": "9th",
          "description": "A ballad describing a moral tale.",
          "topics": [
            { "id": "topic_eng_9_p_5_1", "title": "Poem Summary", "chapterId": "eng_9_poem_5", "order": 1 },
            { "id": "topic_eng_9_p_5_2", "title": "Theme & Message", "chapterId": "eng_9_poem_5", "order": 2 },
            { "id": "topic_eng_9_p_5_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_5", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_6",
          "title": "No Men Are Foreign",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem promoting peace and unity.",
          "topics": [
            { "id": "topic_eng_9_p_6_1", "title": "Poem Summary", "chapterId": "eng_9_poem_6", "order": 1 },
            { "id": "topic_eng_9_p_6_2", "title": "Theme & Message", "chapterId": "eng_9_poem_6", "order": 2 },
            { "id": "topic_eng_9_p_6_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_6", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_7",
          "title": "The Duck and the Kangaroo",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous and imaginative poem.",
          "topics": [
            { "id": "topic_eng_9_p_7_1", "title": "Poem Summary", "chapterId": "eng_9_poem_7", "order": 1 },
            { "id": "topic_eng_9_p_7_2", "title": "Theme & Message", "chapterId": "eng_9_poem_7", "order": 2 },
            { "id": "topic_eng_9_p_7_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_7", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_8",
          "title": "On Killing a Tree",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem about cruelty against nature.",
          "topics": [
            { "id": "topic_eng_9_p_8_1", "title": "Poem Summary", "chapterId": "eng_9_poem_8", "order": 1 },
            { "id": "topic_eng_9_p_8_2", "title": "Theme & Message", "chapterId": "eng_9_poem_8", "order": 2 },
            { "id": "topic_eng_9_p_8_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_8", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_9",
          "title": "The Snake Trying",
          "subject": "English",
          "classLevel": "9th",
          "description": "A poem urging compassion for creatures.",
          "topics": [
            { "id": "topic_eng_9_p_9_1", "title": "Poem Summary", "chapterId": "eng_9_poem_9", "order": 1 },
            { "id": "topic_eng_9_p_9_2", "title": "Theme & Message", "chapterId": "eng_9_poem_9", "order": 2 },
            { "id": "topic_eng_9_p_9_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_9", "order": 3 }
          ]
        },

        {
          "id": "eng_9_poem_10",
          "title": "A Slumber Did My Spirit Seal",
          "subject": "English",
          "classLevel": "9th",
          "description": "A reflective poem about loss and death.",
          "topics": [
            { "id": "topic_eng_9_p_10_1", "title": "Poem Summary", "chapterId": "eng_9_poem_10", "order": 1 },
            { "id": "topic_eng_9_p_10_2", "title": "Theme & Message", "chapterId": "eng_9_poem_10", "order": 2 },
            { "id": "topic_eng_9_p_10_3", "title": "Poetic Devices", "chapterId": "eng_9_poem_10", "order": 3 }
          ]
        },

        {
          "id": "eng_9_mom_ch1",
          "title": "The Lost Child",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story about a child who gets lost in a fair.",
          "topics": [
            { "id": "topic_eng_9_m_1_1", "title": "Plot Summary", "chapterId": "eng_9_mom_ch1", "order": 1 },
            { "id": "topic_eng_9_m_1_2", "title": "Theme of Innocence", "chapterId": "eng_9_mom_ch1", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch2",
          "title": "The Adventures of Toto",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous story about a mischievous monkey.",
          "topics": [
            { "id": "topic_eng_9_m_2_1", "title": "Character Traits of Toto", "chapterId": "eng_9_mom_ch2", "order": 1 },
            { "id": "topic_eng_9_m_2_2", "title": "Humor Elements", "chapterId": "eng_9_mom_ch2", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch3",
          "title": "Iswaran the Storyteller",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story highlighting storytelling skills of Iswaran.",
          "topics": [
            { "id": "topic_eng_9_m_3_1", "title": "Iswaran’s Anecdotes", "chapterId": "eng_9_mom_ch3", "order": 1 },
            { "id": "topic_eng_9_m_3_2", "title": "Narration Style", "chapterId": "eng_9_mom_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch4",
          "title": "In the Kingdom of Fools",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous story about foolish rulers.",
          "topics": [
            { "id": "topic_eng_9_m_4_1", "title": "Summary of Events", "chapterId": "eng_9_mom_ch4", "order": 1 },
            { "id": "topic_eng_9_m_4_2", "title": "Moral Message", "chapterId": "eng_9_mom_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch5",
          "title": "The Happy Prince",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story about sacrifice and compassion.",
          "topics": [
            { "id": "topic_eng_9_m_5_1", "title": "Character Analysis", "chapterId": "eng_9_mom_ch5", "order": 1 },
            { "id": "topic_eng_9_m_5_2", "title": "Themes of Kindness", "chapterId": "eng_9_mom_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch6",
          "title": "Weathering the Storm in Ersama",
          "subject": "English",
          "classLevel": "9th",
          "description": "A survival story during a cyclone.",
          "topics": [
            { "id": "topic_eng_9_m_6_1", "title": "Real-life Incident", "chapterId": "eng_9_mom_ch6", "order": 1 },
            { "id": "topic_eng_9_m_6_2", "title": "Heroism and Responsibility", "chapterId": "eng_9_mom_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch7",
          "title": "The Last Leaf",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story about hope and sacrifice.",
          "topics": [
            { "id": "topic_eng_9_m_7_1", "title": "Symbolism of the Leaf", "chapterId": "eng_9_mom_ch7", "order": 1 },
            { "id": "topic_eng_9_m_7_2", "title": "Theme of Hope", "chapterId": "eng_9_mom_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch8",
          "title": "A House Is Not a Home",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story about adjustment and rebuilding life.",
          "topics": [
            { "id": "topic_eng_9_m_8_1", "title": "Emotional Journey", "chapterId": "eng_9_mom_ch8", "order": 1 },
            { "id": "topic_eng_9_m_8_2", "title": "Overcoming Difficulties", "chapterId": "eng_9_mom_ch8", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch9",
          "title": "The Accidental Tourist",
          "subject": "English",
          "classLevel": "9th",
          "description": "A humorous story of awkward travel incidents.",
          "topics": [
            { "id": "topic_eng_9_m_9_1", "title": "Comedic Incidents", "chapterId": "eng_9_mom_ch9", "order": 1 },
            { "id": "topic_eng_9_m_9_2", "title": "Character Study", "chapterId": "eng_9_mom_ch9", "order": 2 }
          ]
        },

        {
          "id": "eng_9_mom_ch10",
          "title": "The Beggar",
          "subject": "English",
          "classLevel": "9th",
          "description": "A story about transformation through kindness.",
          "topics": [
            { "id": "topic_eng_9_m_10_1", "title": "Plot & Moral", "chapterId": "eng_9_mom_ch10", "order": 1 },
            { "id": "topic_eng_9_m_10_2", "title": "Compassion & Change", "chapterId": "eng_9_mom_ch10", "order": 2 }
          ]
        }
      ],
      "Social Science": [
        {
          "id": "sst_hist_9_ch1",
          "title": "The French Revolution",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Events, causes and impact of the French Revolution.",
          "topics": [
            { "id": "topic_hist_9_1_1", "title": "Causes of the Revolution", "chapterId": "sst_hist_9_ch1", "order": 1 },
            { "id": "topic_hist_9_1_2", "title": "Major Events of 1789", "chapterId": "sst_hist_9_ch1", "order": 2 }
          ]
        },

        {
          "id": "sst_hist_9_ch2",
          "title": "Socialism in Europe and the Russian Revolution",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Emergence of socialism and the Russian Revolution.",
          "topics": [
            { "id": "topic_hist_9_2_1", "title": "Rise of Socialism", "chapterId": "sst_hist_9_ch2", "order": 1 },
            { "id": "topic_hist_9_2_2", "title": "Russian Revolution of 1917", "chapterId": "sst_hist_9_ch2", "order": 2 }
          ]
        },

        {
          "id": "sst_hist_9_ch3",
          "title": "Nazism and the Rise of Hitler",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Hitler's rise, Nazism and its impact.",
          "topics": [
            { "id": "topic_hist_9_3_1", "title": "Rise of Hitler", "chapterId": "sst_hist_9_ch3", "order": 1 },
            { "id": "topic_hist_9_3_2", "title": "Nazi Ideology", "chapterId": "sst_hist_9_ch3", "order": 2 }
          ]
        },

        {
          "id": "sst_hist_9_ch4",
          "title": "Forest Society and Colonialism",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Impact of colonial rule on forests and forest people.",
          "topics": [
            { "id": "topic_hist_9_4_1", "title": "Colonial Impact on Forests", "chapterId": "sst_hist_9_ch4", "order": 1 },
            { "id": "topic_hist_9_4_2", "title": "Rebellion and Resistance", "chapterId": "sst_hist_9_ch4", "order": 2 }
          ]
        },

        {
          "id": "sst_hist_9_ch5",
          "title": "Pastoralists in the Modern World",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Changes in the lives of pastoral communities worldwide.",
          "topics": [
            { "id": "topic_hist_9_5_1", "title": "Pastoral Life", "chapterId": "sst_hist_9_ch5", "order": 1 },
            { "id": "topic_hist_9_5_2", "title": "Impact of Modern Policies", "chapterId": "sst_hist_9_ch5", "order": 2 }
          ]
        },
        {
          "id": "sst_civ_9_ch1",
          "title": "What is Democracy? Why Democracy?",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Meaning and features of democracy.",
          "topics": [
            { "id": "topic_civ_9_1_1", "title": "Definition of Democracy", "chapterId": "sst_civ_9_ch1", "order": 1 },
            { "id": "topic_civ_9_1_2", "title": "Arguments for Democracy", "chapterId": "sst_civ_9_ch1", "order": 2 }
          ]
        },

        {
          "id": "sst_civ_9_ch2",
          "title": "Constitutional Design",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Making of the Indian Constitution.",
          "topics": [
            { "id": "topic_civ_9_2_1", "title": "South African Constitution", "chapterId": "sst_civ_9_ch2", "order": 1 },
            { "id": "topic_civ_9_2_2", "title": "Making of Indian Constitution", "chapterId": "sst_civ_9_ch2", "order": 2 }
          ]
        },

        {
          "id": "sst_civ_9_ch3",
          "title": "Electoral Politics",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "How elections are held and why they are important.",
          "topics": [
            { "id": "topic_civ_9_3_1", "title": "Why Elections?", "chapterId": "sst_civ_9_ch3", "order": 1 },
            { "id": "topic_civ_9_3_2", "title": "Election Process", "chapterId": "sst_civ_9_ch3", "order": 2 }
          ]
        },

        {
          "id": "sst_civ_9_ch4",
          "title": "Working of Institutions",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Functioning of Parliament, Executive and Judiciary.",
          "topics": [
            { "id": "topic_civ_9_4_1", "title": "Role of Parliament", "chapterId": "sst_civ_9_ch4", "order": 1 },
            { "id": "topic_civ_9_4_2", "title": "Judicial System", "chapterId": "sst_civ_9_ch4", "order": 2 }
          ]
        },

        {
          "id": "sst_civ_9_ch5",
          "title": "Democratic Rights",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Fundamental rights and their importance.",
          "topics": [
            { "id": "topic_civ_9_5_1", "title": "Fundamental Rights", "chapterId": "sst_civ_9_ch5", "order": 1 },
            { "id": "topic_civ_9_5_2", "title": "Right to Equality & Freedom", "chapterId": "sst_civ_9_ch5", "order": 2 }
          ]
        },

        {
          "id": "sst_civ_9_ch6",
          "title": "Local Self-Government (Extended Topic)",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Understanding Panchayati Raj and Municipalities.",
          "topics": [
            { "id": "topic_civ_9_6_1", "title": "Panchayati Raj System", "chapterId": "sst_civ_9_ch6", "order": 1 },
            { "id": "topic_civ_9_6_2", "title": "Urban Local Bodies", "chapterId": "sst_civ_9_ch6", "order": 2 }
          ]
        },
        {
          "id": "sst_geo_9_ch1",
          "title": "India – Size and Location",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Geographical position and size of India.",
          "topics": [
            { "id": "topic_geo_9_1_1", "title": "Location of India", "chapterId": "sst_geo_9_ch1", "order": 1 },
            { "id": "topic_geo_9_1_2", "title": "India’s Neighbours", "chapterId": "sst_geo_9_ch1", "order": 2 }
          ]
        },

        {
          "id": "sst_geo_9_ch2",
          "title": "Physical Features of India",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Physiographic divisions of India.",
          "topics": [
            { "id": "topic_geo_9_2_1", "title": "Himalayas", "chapterId": "sst_geo_9_ch2", "order": 1 },
            { "id": "topic_geo_9_2_2", "title": "Peninsular Plateau", "chapterId": "sst_geo_9_ch2", "order": 2 }
          ]
        },

        {
          "id": "sst_geo_9_ch3",
          "title": "Drainage",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "River systems of India.",
          "topics": [
            { "id": "topic_geo_9_3_1", "title": "Indus & Ganga Systems", "chapterId": "sst_geo_9_ch3", "order": 1 },
            { "id": "topic_geo_9_3_2", "title": "Peninsular Rivers", "chapterId": "sst_geo_9_ch3", "order": 2 }
          ]
        },

        {
          "id": "sst_geo_9_ch4",
          "title": "Climate",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Indian climate and monsoon system.",
          "topics": [
            { "id": "topic_geo_9_4_1", "title": "Monsoon Mechanism", "chapterId": "sst_geo_9_ch4", "order": 1 },
            { "id": "topic_geo_9_4_2", "title": "Seasons in India", "chapterId": "sst_geo_9_ch4", "order": 2 }
          ]
        },

        {
          "id": "sst_geo_9_ch5",
          "title": "Natural Vegetation and Wildlife",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Flora, fauna and conservation.",
          "topics": [
            { "id": "topic_geo_9_5_1", "title": "Vegetation Types", "chapterId": "sst_geo_9_ch5", "order": 1 },
            { "id": "topic_geo_9_5_2", "title": "Wildlife Conservation", "chapterId": "sst_geo_9_ch5", "order": 2 }
          ]
        },

        {
          "id": "sst_geo_9_ch6",
          "title": "Population",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Population distribution and demographics.",
          "topics": [
            { "id": "topic_geo_9_6_1", "title": "Population Growth", "chapterId": "sst_geo_9_ch6", "order": 1 },
            { "id": "topic_geo_9_6_2", "title": "Demographic Indicators", "chapterId": "sst_geo_9_ch6", "order": 2 }
          ]
        },
        {
          "id": "sst_eco_9_ch1",
          "title": "The Story of Village Palampur",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Introduction to production and economic activities.",
          "topics": [
            { "id": "topic_eco_9_1_1", "title": "Factors of Production", "chapterId": "sst_eco_9_ch1", "order": 1 },
            { "id": "topic_eco_9_1_2", "title": "Farming in Palampur", "chapterId": "sst_eco_9_ch1", "order": 2 }
          ]
        },

        {
          "id": "sst_eco_9_ch2",
          "title": "People as Resource",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Human capital and education.",
          "topics": [
            { "id": "topic_eco_9_2_1", "title": "Human Capital Formation", "chapterId": "sst_eco_9_ch2", "order": 1 },
            { "id": "topic_eco_9_2_2", "title": "Quality of Population", "chapterId": "sst_eco_9_ch2", "order": 2 }
          ]
        },

        {
          "id": "sst_eco_9_ch3",
          "title": "Poverty as a Challenge",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Poverty trends and anti-poverty measures.",
          "topics": [
            { "id": "topic_eco_9_3_1", "title": "Causes of Poverty", "chapterId": "sst_eco_9_ch3", "order": 1 },
            { "id": "topic_eco_9_3_2", "title": "Government Schemes", "chapterId": "sst_eco_9_ch3", "order": 2 }
          ]
        },

        {
          "id": "sst_eco_9_ch4",
          "title": "Food Security in India",
          "subject": "Social Science",
          "classLevel": "9th",
          "description": "Public Distribution System and food security measures.",
          "topics": [
            { "id": "topic_eco_9_4_1", "title": "Role of PDS", "chapterId": "sst_eco_9_ch4", "order": 1 },
            { "id": "topic_eco_9_4_2", "title": "Buffer Stock", "chapterId": "sst_eco_9_ch4", "order": 2 }
          ]
        }
      ]
    },
    "10th": {
      "Mathematics": [
        {
          "id": "math_10_ch1",
          "title": "Real Numbers",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Euclid's division lemma and fundamental theorem of arithmetic.",
          "topics": [
            {
              "id": "topic_math_10_1_1",
              "title": "Euclid's Division Lemma",
              "chapterId": "math_10_ch1",
              "order": 1
            },
            {
              "id": "topic_math_10_1_2",
              "title": "Prime Factorisation",
              "chapterId": "math_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch2",
          "title": "Polynomials",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Zeros of polynomials and relationship between coefficients and zeros.",
          "topics": [
            {
              "id": "topic_math_10_2_1",
              "title": "Zeros of Polynomials",
              "chapterId": "math_10_ch2",
              "order": 1
            },
            {
              "id": "topic_math_10_2_2",
              "title": "Relationship of Zeros & Coefficients",
              "chapterId": "math_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch3",
          "title": "Pair of Linear Equations in Two Variables",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Graphical and algebraic solutions of linear equations.",
          "topics": [
            {
              "id": "topic_math_10_3_1",
              "title": "Graphical Method",
              "chapterId": "math_10_ch3",
              "order": 1
            },
            {
              "id": "topic_math_10_3_2",
              "title": "Algebraic Methods",
              "chapterId": "math_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch4",
          "title": "Quadratic Equations",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Solutions of quadratic equations by different methods.",
          "topics": [
            {
              "id": "topic_math_10_4_1",
              "title": "Factoring Method",
              "chapterId": "math_10_ch4",
              "order": 1
            },
            {
              "id": "topic_math_10_4_2",
              "title": "Quadratic Formula",
              "chapterId": "math_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch5",
          "title": "Arithmetic Progressions",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "AP formulas for nth term and sum of n terms.",
          "topics": [
            {
              "id": "topic_math_10_5_1",
              "title": "Nth Term of AP",
              "chapterId": "math_10_ch5",
              "order": 1
            },
            {
              "id": "topic_math_10_5_2",
              "title": "Sum of n Terms",
              "chapterId": "math_10_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch6",
          "title": "Triangles",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Similarity of triangles and related theorems.",
          "topics": [
            {
              "id": "topic_math_10_6_1",
              "title": "Similarity Criteria",
              "chapterId": "math_10_ch6",
              "order": 1
            },
            {
              "id": "topic_math_10_6_2",
              "title": "Pythagoras Theorem",
              "chapterId": "math_10_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch7",
          "title": "Coordinate Geometry",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Distance, section, and area of triangle formulas.",
          "topics": [
            {
              "id": "topic_math_10_7_1",
              "title": "Distance Formula",
              "chapterId": "math_10_ch7",
              "order": 1
            },
            {
              "id": "topic_math_10_7_2",
              "title": "Section Formula",
              "chapterId": "math_10_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch8",
          "title": "Introduction to Trigonometry",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Trigonometric ratios and identities.",
          "topics": [
            {
              "id": "topic_math_10_8_1",
              "title": "Trigonometric Ratios",
              "chapterId": "math_10_ch8",
              "order": 1
            },
            {
              "id": "topic_math_10_8_2",
              "title": "Trigonometric Identities",
              "chapterId": "math_10_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch9",
          "title": "Applications of Trigonometry",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Heights and distances problems.",
          "topics": [
            {
              "id": "topic_math_10_9_1",
              "title": "Angle of Elevation",
              "chapterId": "math_10_ch9",
              "order": 1
            },
            {
              "id": "topic_math_10_9_2",
              "title": "Angle of Depression",
              "chapterId": "math_10_ch9",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch10",
          "title": "Circles",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Tangents to circles and related theorems.",
          "topics": [
            {
              "id": "topic_math_10_10_1",
              "title": "Tangent Properties",
              "chapterId": "math_10_ch10",
              "order": 1
            },
            {
              "id": "topic_math_10_10_2",
              "title": "Length of Tangents",
              "chapterId": "math_10_ch10",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch11",
          "title": "Constructions",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Tangents and similar triangle constructions.",
          "topics": [
            {
              "id": "topic_math_10_11_1",
              "title": "Division of Line Segment",
              "chapterId": "math_10_ch11",
              "order": 1
            },
            {
              "id": "topic_math_10_11_2",
              "title": "Tangent Constructions",
              "chapterId": "math_10_ch11",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch12",
          "title": "Areas Related to Circles",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Calculations involving sectors and segments.",
          "topics": [
            {
              "id": "topic_math_10_12_1",
              "title": "Sector Area",
              "chapterId": "math_10_ch12",
              "order": 1
            },
            {
              "id": "topic_math_10_12_2",
              "title": "Segment Area",
              "chapterId": "math_10_ch12",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch13",
          "title": "Surface Areas and Volumes",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Volume and surface area of 3D shapes.",
          "topics": [
            {
              "id": "topic_math_10_13_1",
              "title": "Volume of Solids",
              "chapterId": "math_10_ch13",
              "order": 1
            },
            {
              "id": "topic_math_10_13_2",
              "title": "Surface Area of Mixed Solids",
              "chapterId": "math_10_ch13",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch14",
          "title": "Statistics",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Mean, median, mode of grouped data.",
          "topics": [
            {
              "id": "topic_math_10_14_1",
              "title": "Mean & Mode (Grouped Data)",
              "chapterId": "math_10_ch14",
              "order": 1
            },
            {
              "id": "topic_math_10_14_2",
              "title": "Median",
              "chapterId": "math_10_ch14",
              "order": 2
            }
          ]
        },
        {
          "id": "math_10_ch15",
          "title": "Probability",
          "subject": "Mathematics",
          "classLevel": "10th",
          "description": "Theoretical probability.",
          "topics": [
            {
              "id": "topic_math_10_15_1",
              "title": "Simple Probability",
              "chapterId": "math_10_ch15",
              "order": 1
            },
            {
              "id": "topic_math_10_15_2",
              "title": "Complementary Events",
              "chapterId": "math_10_ch15",
              "order": 2
            }
          ]
        }
      ],
      "Science": [
        {
          "id": "sci_10_ch1",
          "title": "Chemical Reactions and Equations",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Chemical reactions, equations, and types.",
          "topics": [
            {
              "id": "topic_sci_10_1_1",
              "title": "Balancing Equations",
              "chapterId": "sci_10_ch1",
              "order": 1
            },
            {
              "id": "topic_sci_10_1_2",
              "title": "Types of Reactions",
              "chapterId": "sci_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch2",
          "title": "Acids, Bases and Salts",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Formation and reactions of acids, bases, and salts.",
          "topics": [
            {
              "id": "topic_sci_10_2_1",
              "title": "Properties of Acids & Bases",
              "chapterId": "sci_10_ch2",
              "order": 1
            },
            {
              "id": "topic_sci_10_2_2",
              "title": "Salts & Neutralisation",
              "chapterId": "sci_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch3",
          "title": "Metals and Non-metals",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Properties, reactions and uses of metals and non-metals.",
          "topics": [
            {
              "id": "topic_sci_10_3_1",
              "title": "Physical & Chemical Properties",
              "chapterId": "sci_10_ch3",
              "order": 1
            },
            {
              "id": "topic_sci_10_3_2",
              "title": "Reactivity Series",
              "chapterId": "sci_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch4",
          "title": "Carbon and its Compounds",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Bonding, properties, and reactions of carbon compounds.",
          "topics": [
            {
              "id": "topic_sci_10_4_1",
              "title": "Covalent Bonding",
              "chapterId": "sci_10_ch4",
              "order": 1
            },
            {
              "id": "topic_sci_10_4_2",
              "title": "Functional Groups",
              "chapterId": "sci_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch5",
          "title": "Periodic Classification of Elements",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Modern periodic table and trends.",
          "topics": [
            {
              "id": "topic_sci_10_5_1",
              "title": "Modern Periodic Table",
              "chapterId": "sci_10_ch5",
              "order": 1
            },
            {
              "id": "topic_sci_10_5_2",
              "title": "Periodic Trends",
              "chapterId": "sci_10_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch6",
          "title": "Life Processes",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Nutrition, respiration, excretion and transportation in organisms.",
          "topics": [
            {
              "id": "topic_sci_10_6_1",
              "title": "Nutrition & Respiration",
              "chapterId": "sci_10_ch6",
              "order": 1
            },
            {
              "id": "topic_sci_10_6_2",
              "title": "Transportation & Excretion",
              "chapterId": "sci_10_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch7",
          "title": "Control and Coordination",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Nervous system and hormonal coordination.",
          "topics": [
            {
              "id": "topic_sci_10_7_1",
              "title": "Nervous System",
              "chapterId": "sci_10_ch7",
              "order": 1
            },
            {
              "id": "topic_sci_10_7_2",
              "title": "Endocrine System",
              "chapterId": "sci_10_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch8",
          "title": "How Do Organisms Reproduce?",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Asexual and sexual reproduction in plants and animals.",
          "topics": [
            {
              "id": "topic_sci_10_8_1",
              "title": "Asexual Reproduction",
              "chapterId": "sci_10_ch8",
              "order": 1
            },
            {
              "id": "topic_sci_10_8_2",
              "title": "Sexual Reproduction",
              "chapterId": "sci_10_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch9",
          "title": "Heredity and Evolution",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Genetics, traits, and evolution concepts.",
          "topics": [
            {
              "id": "topic_sci_10_9_1",
              "title": "Mendel's Laws",
              "chapterId": "sci_10_ch9",
              "order": 1
            },
            {
              "id": "topic_sci_10_9_2",
              "title": "Evolution Concepts",
              "chapterId": "sci_10_ch9",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch10",
          "title": "Light – Reflection and Refraction",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Laws of reflection and refraction, lenses, mirrors.",
          "topics": [
            {
              "id": "topic_sci_10_10_1",
              "title": "Reflection Laws",
              "chapterId": "sci_10_ch10",
              "order": 1
            },
            {
              "id": "topic_sci_10_10_2",
              "title": "Refraction & Lenses",
              "chapterId": "sci_10_ch10",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch11",
          "title": "Human Eye and Colorful World",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Working of the human eye and light phenomena.",
          "topics": [
            {
              "id": "topic_sci_10_11_1",
              "title": "Structure of Eye",
              "chapterId": "sci_10_ch11",
              "order": 1
            },
            {
              "id": "topic_sci_10_11_2",
              "title": "Dispersion & Scattering",
              "chapterId": "sci_10_ch11",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch12",
          "title": "Electricity",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Current, resistance, Ohm's law and power.",
          "topics": [
            {
              "id": "topic_sci_10_12_1",
              "title": "Ohm’s Law",
              "chapterId": "sci_10_ch12",
              "order": 1
            },
            {
              "id": "topic_sci_10_12_2",
              "title": "Resistance & Power",
              "chapterId": "sci_10_ch12",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch13",
          "title": "Magnetic Effects of Electric Current",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Magnetic fields, motors, and electromagnetic induction.",
          "topics": [
            {
              "id": "topic_sci_10_13_1",
              "title": "Magnetic Field & Right Hand Rule",
              "chapterId": "sci_10_ch13",
              "order": 1
            },
            {
              "id": "topic_sci_10_13_2",
              "title": "Electric Motor & Induction",
              "chapterId": "sci_10_ch13",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch14",
          "title": "Sources of Energy",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Conventional and non-conventional energy sources.",
          "topics": [
            {
              "id": "topic_sci_10_14_1",
              "title": "Conventional Sources",
              "chapterId": "sci_10_ch14",
              "order": 1
            },
            {
              "id": "topic_sci_10_14_2",
              "title": "Renewable Energy",
              "chapterId": "sci_10_ch14",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch15",
          "title": "Our Environment",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Ecosystems, food chains and environmental issues.",
          "topics": [
            {
              "id": "topic_sci_10_15_1",
              "title": "Ecosystem Components",
              "chapterId": "sci_10_ch15",
              "order": 1
            },
            {
              "id": "topic_sci_10_15_2",
              "title": "Food Chains & Pollution",
              "chapterId": "sci_10_ch15",
              "order": 2
            }
          ]
        },
        {
          "id": "sci_10_ch16",
          "title": "Sustainable Management of Natural Resources",
          "subject": "Science",
          "classLevel": "10th",
          "description": "Resource conservation and management.",
          "topics": [
            {
              "id": "topic_sci_10_16_1",
              "title": "Conservation Practices",
              "chapterId": "sci_10_ch16",
              "order": 1
            },
            {
              "id": "topic_sci_10_16_2",
              "title": "Management of Forests & Water",
              "chapterId": "sci_10_ch16",
              "order": 2
            }
          ]
        }
      ],
      "English": [
        {
          "id": "eng_10_ff_ch1",
          "title": "A Letter to God",
          "subject": "English",
          "classLevel": "10th",
          "description": "A story about faith and innocence.",
          "topics": [
            {
              "id": "topic_eng_10_ff_1_1",
              "title": "Plot Summary",
              "chapterId": "eng_10_ff_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_1_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_ff_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch2",
          "title": "Nelson Mandela: Long Walk to Freedom",
          "subject": "English",
          "classLevel": "10th",
          "description": "Mandela's speech on freedom, struggle, and courage.",
          "topics": [
            {
              "id": "topic_eng_10_ff_2_1",
              "title": "Summary of Speech",
              "chapterId": "eng_10_ff_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_2_2",
              "title": "Leadership Qualities",
              "chapterId": "eng_10_ff_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch3",
          "title": "Two Stories About Flying",
          "subject": "English",
          "classLevel": "10th",
          "description": "Stories related to fear, courage, and adventure.",
          "topics": [
            {
              "id": "topic_eng_10_ff_3_1",
              "title": "Fear of Flying (His First Flight)",
              "chapterId": "eng_10_ff_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_3_2",
              "title": "Black Aeroplane Story",
              "chapterId": "eng_10_ff_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch4",
          "title": "From the Diary of Anne Frank",
          "subject": "English",
          "classLevel": "10th",
          "description": "Anne Frank’s diary entries during World War II.",
          "topics": [
            {
              "id": "topic_eng_10_ff_4_1",
              "title": "Anne’s Thoughts & Emotions",
              "chapterId": "eng_10_ff_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_4_2",
              "title": "Historical Context",
              "chapterId": "eng_10_ff_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch5",
          "title": "The Hundred Dresses – I",
          "subject": "English",
          "classLevel": "10th",
          "description": "A story introducing Wanda and bullying.",
          "topics": [
            {
              "id": "topic_eng_10_ff_5_1",
              "title": "Characters & Conflict",
              "chapterId": "eng_10_ff_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_5_2",
              "title": "Bullying Theme",
              "chapterId": "eng_10_ff_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch6",
          "title": "The Hundred Dresses – II",
          "subject": "English",
          "classLevel": "10th",
          "description": "The continuation and resolution of Wanda’s story.",
          "topics": [
            {
              "id": "topic_eng_10_ff_6_1",
              "title": "Resolution & Message",
              "chapterId": "eng_10_ff_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_6_2",
              "title": "Themes of Regret & Empathy",
              "chapterId": "eng_10_ff_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch7",
          "title": "Glimpses of India",
          "subject": "English",
          "classLevel": "10th",
          "description": "Three short pieces about different regions of India.",
          "topics": [
            {
              "id": "topic_eng_10_ff_7_1",
              "title": "A Baker from Goa",
              "chapterId": "eng_10_ff_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_7_2",
              "title": "Coorg & Tea Gardens",
              "chapterId": "eng_10_ff_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch8",
          "title": "Mijbil the Otter",
          "subject": "English",
          "classLevel": "10th",
          "description": "The author’s experience raising an otter.",
          "topics": [
            {
              "id": "topic_eng_10_ff_8_1",
              "title": "Human–Animal Bond",
              "chapterId": "eng_10_ff_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_8_2",
              "title": "Travel Challenges",
              "chapterId": "eng_10_ff_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch9",
          "title": "Madam Rides the Bus",
          "subject": "English",
          "classLevel": "10th",
          "description": "A bus journey that teaches life lessons.",
          "topics": [
            {
              "id": "topic_eng_10_ff_9_1",
              "title": "Valli’s Curiosity",
              "chapterId": "eng_10_ff_ch9",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_9_2",
              "title": "Life Lessons",
              "chapterId": "eng_10_ff_ch9",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch10",
          "title": "The Sermon at Benares",
          "subject": "English",
          "classLevel": "10th",
          "description": "Teachings of Buddha on life and suffering.",
          "topics": [
            {
              "id": "topic_eng_10_ff_10_1",
              "title": "Teachings of Buddha",
              "chapterId": "eng_10_ff_ch10",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_10_2",
              "title": "Theme of Suffering",
              "chapterId": "eng_10_ff_ch10",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_ff_ch11",
          "title": "The Proposal",
          "subject": "English",
          "classLevel": "10th",
          "description": "A humorous play about marriage negotiations.",
          "topics": [
            {
              "id": "topic_eng_10_ff_11_1",
              "title": "Dramatic Elements",
              "chapterId": "eng_10_ff_ch11",
              "order": 1
            },
            {
              "id": "topic_eng_10_ff_11_2",
              "title": "Humor & Irony",
              "chapterId": "eng_10_ff_ch11",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_poem_1",
          "title": "Dust of Snow",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem about how small moments can change one's mood.",
          "topics": [
            {
              "id": "topic_eng_10_p_1_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_1",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_1_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_1",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_1_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_1",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_2",
          "title": "Fire and Ice",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem about destructive human emotions.",
          "topics": [
            {
              "id": "topic_eng_10_p_2_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_2",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_2_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_2",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_2_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_2",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_3",
          "title": "A Tiger in the Zoo",
          "subject": "English",
          "classLevel": "10th",
          "description": "Comparison of a tiger in the wild and in captivity.",
          "topics": [
            {
              "id": "topic_eng_10_p_3_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_3",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_3_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_3",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_3_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_3",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_4",
          "title": "How to Tell Wild Animals",
          "subject": "English",
          "classLevel": "10th",
          "description": "A humorous poem describing various wild animals.",
          "topics": [
            {
              "id": "topic_eng_10_p_4_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_4",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_4_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_4",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_4_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_4",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_5",
          "title": "The Ball Poem",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem teaching acceptance and loss.",
          "topics": [
            {
              "id": "topic_eng_10_p_5_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_5",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_5_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_5",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_5_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_5",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_6",
          "title": "Amanda!",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem about a child's desire for freedom.",
          "topics": [
            {
              "id": "topic_eng_10_p_6_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_6",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_6_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_6",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_6_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_6",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_7",
          "title": "Animals",
          "subject": "English",
          "classLevel": "10th",
          "description": "A reflection on human and animal nature.",
          "topics": [
            {
              "id": "topic_eng_10_p_7_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_7",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_7_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_7",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_7_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_7",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_8",
          "title": "The Trees",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem about nature reclaiming freedom.",
          "topics": [
            {
              "id": "topic_eng_10_p_8_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_8",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_8_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_8",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_8_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_8",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_9",
          "title": "Fog",
          "subject": "English",
          "classLevel": "10th",
          "description": "A metaphorical poem comparing fog to a cat.",
          "topics": [
            {
              "id": "topic_eng_10_p_9_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_9",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_9_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_9",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_9_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_9",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_10",
          "title": "The Tale of Custard the Dragon",
          "subject": "English",
          "classLevel": "10th",
          "description": "A humorous ballad about bravery and fear.",
          "topics": [
            {
              "id": "topic_eng_10_p_10_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_10",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_10_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_10",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_10_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_10",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_poem_11",
          "title": "For Anne Gregory",
          "subject": "English",
          "classLevel": "10th",
          "description": "A poem about love beyond physical beauty.",
          "topics": [
            {
              "id": "topic_eng_10_p_11_1",
              "title": "Poem Summary",
              "chapterId": "eng_10_poem_11",
              "order": 1
            },
            {
              "id": "topic_eng_10_p_11_2",
              "title": "Theme & Message",
              "chapterId": "eng_10_poem_11",
              "order": 2
            },
            {
              "id": "topic_eng_10_p_11_3",
              "title": "Poetic Devices",
              "chapterId": "eng_10_poem_11",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_10_fw_ch1",
          "title": "A Triumph of Surgery",
          "subject": "English",
          "classLevel": "10th",
          "description": "Mrs. Pumphrey's dog Tricki gets treated by a veterinarian.",
          "topics": [
            {
              "id": "topic_eng_10_fw_1_1",
              "title": "Plot Summary",
              "chapterId": "eng_10_fw_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_1_2",
              "title": "Characters & Themes",
              "chapterId": "eng_10_fw_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch2",
          "title": "The Thief’s Story",
          "subject": "English",
          "classLevel": "10th",
          "description": "A thief reforms after experiencing trust.",
          "topics": [
            {
              "id": "topic_eng_10_fw_2_1",
              "title": "Transformation Arc",
              "chapterId": "eng_10_fw_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_2_2",
              "title": "Theme of Trust",
              "chapterId": "eng_10_fw_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch3",
          "title": "The Midnight Visitor",
          "subject": "English",
          "classLevel": "10th",
          "description": "A detective story highlighting intelligence over strength.",
          "topics": [
            {
              "id": "topic_eng_10_fw_3_1",
              "title": "Plot & Suspense",
              "chapterId": "eng_10_fw_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_3_2",
              "title": "Character Analysis",
              "chapterId": "eng_10_fw_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch4",
          "title": "A Question of Trust",
          "subject": "English",
          "classLevel": "10th",
          "description": "A thief breaks into a house and meets another thief.",
          "topics": [
            {
              "id": "topic_eng_10_fw_4_1",
              "title": "Irony & Twist",
              "chapterId": "eng_10_fw_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_4_2",
              "title": "Theme of Betrayal",
              "chapterId": "eng_10_fw_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch5",
          "title": "Footprints Without Feet",
          "subject": "English",
          "classLevel": "10th",
          "description": "A story about an invisible man causing trouble.",
          "topics": [
            {
              "id": "topic_eng_10_fw_5_1",
              "title": "Invisible Man Plot",
              "chapterId": "eng_10_fw_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_5_2",
              "title": "Science Fiction Aspects",
              "chapterId": "eng_10_fw_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch6",
          "title": "The Making of a Scientist",
          "subject": "English",
          "classLevel": "10th",
          "description": "Life story of Richard Ebright and the making of a scientist.",
          "topics": [
            {
              "id": "topic_eng_10_fw_6_1",
              "title": "Ebright’s Early Life",
              "chapterId": "eng_10_fw_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_6_2",
              "title": "Qualities of a Scientist",
              "chapterId": "eng_10_fw_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch7",
          "title": "The Necklace",
          "subject": "English",
          "classLevel": "10th",
          "description": "A story about pride, vanity, and life-changing consequences.",
          "topics": [
            {
              "id": "topic_eng_10_fw_7_1",
              "title": "Summary & Irony",
              "chapterId": "eng_10_fw_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_7_2",
              "title": "Moral of the Story",
              "chapterId": "eng_10_fw_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch8",
          "title": "The Hack Driver",
          "subject": "English",
          "classLevel": "10th",
          "description": "A humorous story involving identity deception.",
          "topics": [
            {
              "id": "topic_eng_10_fw_8_1",
              "title": "Plot & Humor",
              "chapterId": "eng_10_fw_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_8_2",
              "title": "Theme of Deception",
              "chapterId": "eng_10_fw_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch9",
          "title": "Bholi",
          "subject": "English",
          "classLevel": "10th",
          "description": "Story of a girl overcoming challenges and gaining confidence.",
          "topics": [
            {
              "id": "topic_eng_10_fw_9_1",
              "title": "Transformation of Bholi",
              "chapterId": "eng_10_fw_ch9",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_9_2",
              "title": "Themes of Education & Empowerment",
              "chapterId": "eng_10_fw_ch9",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_10_fw_ch10",
          "title": "The Book That Saved the Earth",
          "subject": "English",
          "classLevel": "10th",
          "description": "A futuristic play about Earth being saved by a book.",
          "topics": [
            {
              "id": "topic_eng_10_fw_10_1",
              "title": "Plot & Characters",
              "chapterId": "eng_10_fw_ch10",
              "order": 1
            },
            {
              "id": "topic_eng_10_fw_10_2",
              "title": "Humor & Science Fiction",
              "chapterId": "eng_10_fw_ch10",
              "order": 2
            }
          ]
        }
      ],
      "Social Science": [
        {
          "id": "sst_hist_10_ch1",
          "title": "The Rise of Nationalism in Europe",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Growth of nationalism in Europe, French Revolution, and unification movements.",
          "topics": [
            {
              "id": "topic_hist_10_1_1",
              "title": "French Revolution & Nationalism",
              "chapterId": "sst_hist_10_ch1",
              "order": 1
            },
            {
              "id": "topic_hist_10_1_2",
              "title": "Unification of Germany & Italy",
              "chapterId": "sst_hist_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_hist_10_ch2",
          "title": "Nationalism in India",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Indian nationalism, Gandhian movements, and freedom struggle.",
          "topics": [
            {
              "id": "topic_hist_10_2_1",
              "title": "Non-Cooperation Movement",
              "chapterId": "sst_hist_10_ch2",
              "order": 1
            },
            {
              "id": "topic_hist_10_2_2",
              "title": "Civil Disobedience Movement",
              "chapterId": "sst_hist_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_hist_10_ch3",
          "title": "The Making of a Global World",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Globalisation, world trade patterns and colonial connections.",
          "topics": [
            {
              "id": "topic_hist_10_3_1",
              "title": "Pre-modern World",
              "chapterId": "sst_hist_10_ch3",
              "order": 1
            },
            {
              "id": "topic_hist_10_3_2",
              "title": "Industrialization & Global Trade",
              "chapterId": "sst_hist_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_hist_10_ch4",
          "title": "The Age of Industrialisation",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Industrial revolution and its impact on society.",
          "topics": [
            {
              "id": "topic_hist_10_4_1",
              "title": "Proto-Industrialisation",
              "chapterId": "sst_hist_10_ch4",
              "order": 1
            },
            {
              "id": "topic_hist_10_4_2",
              "title": "Factories & Labour",
              "chapterId": "sst_hist_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_hist_10_ch5",
          "title": "Print Culture and the Modern World",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Invention of print, spread of literacy and cultural impacts.",
          "topics": [
            {
              "id": "topic_hist_10_5_1",
              "title": "Print Technology Evolution",
              "chapterId": "sst_hist_10_ch5",
              "order": 1
            },
            {
              "id": "topic_hist_10_5_2",
              "title": "Impact on Society & Reform",
              "chapterId": "sst_hist_10_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch1",
          "title": "Power Sharing",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Different forms of power sharing and its importance in democracy.",
          "topics": [
            {
              "id": "topic_civ_10_1_1",
              "title": "Forms of Power Sharing",
              "chapterId": "sst_civ_10_ch1",
              "order": 1
            },
            {
              "id": "topic_civ_10_1_2",
              "title": "Case Studies: Belgium & Sri Lanka",
              "chapterId": "sst_civ_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch2",
          "title": "Federalism",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Division of powers between central and state governments.",
          "topics": [
            {
              "id": "topic_civ_10_2_1",
              "title": "Federal System Features",
              "chapterId": "sst_civ_10_ch2",
              "order": 1
            },
            {
              "id": "topic_civ_10_2_2",
              "title": "India as a Federal Country",
              "chapterId": "sst_civ_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch3",
          "title": "Gender, Religion and Caste",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Inequalities and role of gender, religion, caste in politics.",
          "topics": [
            {
              "id": "topic_civ_10_3_1",
              "title": "Gender Inequality",
              "chapterId": "sst_civ_10_ch3",
              "order": 1
            },
            {
              "id": "topic_civ_10_3_2",
              "title": "Caste in Politics",
              "chapterId": "sst_civ_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch4",
          "title": "Political Parties",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Importance, functions and challenges of political parties.",
          "topics": [
            {
              "id": "topic_civ_10_4_1",
              "title": "Functions of Parties",
              "chapterId": "sst_civ_10_ch4",
              "order": 1
            },
            {
              "id": "topic_civ_10_4_2",
              "title": "Challenges to Parties",
              "chapterId": "sst_civ_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch5",
          "title": "Outcomes of Democracy",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Effectiveness of democracy in providing equality and development.",
          "topics": [
            {
              "id": "topic_civ_10_5_1",
              "title": "Accountability & Transparency",
              "chapterId": "sst_civ_10_ch5",
              "order": 1
            },
            {
              "id": "topic_civ_10_5_2",
              "title": "Economic Outcomes",
              "chapterId": "sst_civ_10_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch6",
          "title": "Democratic Rights",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Fundamental rights and their role in democracy.",
          "topics": [
            {
              "id": "topic_civ_10_6_1",
              "title": "Fundamental Rights Overview",
              "chapterId": "sst_civ_10_ch6",
              "order": 1
            },
            {
              "id": "topic_civ_10_6_2",
              "title": "Right to Equality & Freedom",
              "chapterId": "sst_civ_10_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch7",
          "title": "Local Government (Extended Topic)",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Understanding Panchayati Raj system and municipalities.",
          "topics": [
            {
              "id": "topic_civ_10_7_1",
              "title": "Rural Local Bodies",
              "chapterId": "sst_civ_10_ch7",
              "order": 1
            },
            {
              "id": "topic_civ_10_7_2",
              "title": "Urban Local Governance",
              "chapterId": "sst_civ_10_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_civ_10_ch8",
          "title": "Challenges to Democracy",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Political, social and economic challenges faced by democracies.",
          "topics": [
            {
              "id": "topic_civ_10_8_1",
              "title": "Types of Challenges",
              "chapterId": "sst_civ_10_ch8",
              "order": 1
            },
            {
              "id": "topic_civ_10_8_2",
              "title": "Reforms and Improvements",
              "chapterId": "sst_civ_10_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch1",
          "title": "Resources and Development",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Types of resources and their development.",
          "topics": [
            {
              "id": "topic_geo_10_1_1",
              "title": "Resource Types",
              "chapterId": "sst_geo_10_ch1",
              "order": 1
            },
            {
              "id": "topic_geo_10_1_2",
              "title": "Sustainable Development",
              "chapterId": "sst_geo_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch2",
          "title": "Forest and Wildlife Resources",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Biodiversity, depletion and conservation.",
          "topics": [
            {
              "id": "topic_geo_10_2_1",
              "title": "Biodiversity Importance",
              "chapterId": "sst_geo_10_ch2",
              "order": 1
            },
            {
              "id": "topic_geo_10_2_2",
              "title": "Conservation Strategies",
              "chapterId": "sst_geo_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch3",
          "title": "Water Resources",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Water scarcity and conservation systems.",
          "topics": [
            {
              "id": "topic_geo_10_3_1",
              "title": "Irrigation & Dams",
              "chapterId": "sst_geo_10_ch3",
              "order": 1
            },
            {
              "id": "topic_geo_10_3_2",
              "title": "Rainwater Harvesting",
              "chapterId": "sst_geo_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch4",
          "title": "Agriculture",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Types of farming and crop patterns.",
          "topics": [
            {
              "id": "topic_geo_10_4_1",
              "title": "Types of Farming",
              "chapterId": "sst_geo_10_ch4",
              "order": 1
            },
            {
              "id": "topic_geo_10_4_2",
              "title": "Major Crops",
              "chapterId": "sst_geo_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch5",
          "title": "Minerals and Energy Resources",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Mineral types, distribution and energy resources.",
          "topics": [
            {
              "id": "topic_geo_10_5_1",
              "title": "Mineral Distribution",
              "chapterId": "sst_geo_10_ch5",
              "order": 1
            },
            {
              "id": "topic_geo_10_5_2",
              "title": "Conventional & Non-Conventional Energy",
              "chapterId": "sst_geo_10_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch6",
          "title": "Manufacturing Industries",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Growth of industries and their location factors.",
          "topics": [
            {
              "id": "topic_geo_10_6_1",
              "title": "Industrial Location Factors",
              "chapterId": "sst_geo_10_ch6",
              "order": 1
            },
            {
              "id": "topic_geo_10_6_2",
              "title": "Major Industries in India",
              "chapterId": "sst_geo_10_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_geo_10_ch7",
          "title": "Lifelines of National Economy",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Transport, communication, and trade in India.",
          "topics": [
            {
              "id": "topic_geo_10_7_1",
              "title": "Transportation Systems",
              "chapterId": "sst_geo_10_ch7",
              "order": 1
            },
            {
              "id": "topic_geo_10_7_2",
              "title": "Trade & Communication",
              "chapterId": "sst_geo_10_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_eco_10_ch1",
          "title": "Development",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Understanding development goals and indicators.",
          "topics": [
            {
              "id": "topic_eco_10_1_1",
              "title": "Different Development Goals",
              "chapterId": "sst_eco_10_ch1",
              "order": 1
            },
            {
              "id": "topic_eco_10_1_2",
              "title": "HDI & Indicators",
              "chapterId": "sst_eco_10_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_eco_10_ch2",
          "title": "Sectors of the Indian Economy",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Classification of economy into sectors and employment patterns.",
          "topics": [
            {
              "id": "topic_eco_10_2_1",
              "title": "Primary, Secondary, Tertiary Sectors",
              "chapterId": "sst_eco_10_ch2",
              "order": 1
            },
            {
              "id": "topic_eco_10_2_2",
              "title": "Organised & Unorganised Sectors",
              "chapterId": "sst_eco_10_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_eco_10_ch3",
          "title": "Money and Credit",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Role of money, formal and informal credit sources.",
          "topics": [
            {
              "id": "topic_eco_10_3_1",
              "title": "Functions of Money",
              "chapterId": "sst_eco_10_ch3",
              "order": 1
            },
            {
              "id": "topic_eco_10_3_2",
              "title": "Formal & Informal Credit",
              "chapterId": "sst_eco_10_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_eco_10_ch4",
          "title": "Globalisation and the Indian Economy",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Impact of globalisation on Indian markets.",
          "topics": [
            {
              "id": "topic_eco_10_4_1",
              "title": "Liberalisation & Globalisation",
              "chapterId": "sst_eco_10_ch4",
              "order": 1
            },
            {
              "id": "topic_eco_10_4_2",
              "title": "Foreign Trade & MNCs",
              "chapterId": "sst_eco_10_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "sst_eco_10_ch5",
          "title": "Consumer Rights",
          "subject": "Social Science",
          "classLevel": "10th",
          "description": "Consumer protection laws and responsibilities.",
          "topics": [
            {
              "id": "topic_eco_10_5_1",
              "title": "Consumer Rights Overview",
              "chapterId": "sst_eco_10_ch5",
              "order": 1
            },
            {
              "id": "topic_eco_10_5_2",
              "title": "Legal Protection & Redressal",
              "chapterId": "sst_eco_10_ch5",
              "order": 2
            }
          ]
        }
      ]
    },
    "11th - Science stream": {
      "Physics": [
        {
          "id": "phy_11_ch1",
          "title": "Physical World",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Scope of physics, nature of physical laws.",
          "topics": [
            {
              "id": "topic_phy_11_1_1",
              "title": "Physics in Nature",
              "chapterId": "phy_11_ch1",
              "order": 1
            },
            {
              "id": "topic_phy_11_1_2",
              "title": "Fundamental Forces",
              "chapterId": "phy_11_ch1",
              "order": 2
            },
            {
              "id": "topic_phy_11_1_3",
              "title": "Nature of Physical Laws",
              "chapterId": "phy_11_ch1",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch2",
          "title": "Units and Measurements",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Units, dimensions, errors and measurements.",
          "topics": [
            {
              "id": "topic_phy_11_2_1",
              "title": "System of Units",
              "chapterId": "phy_11_ch2",
              "order": 1
            },
            {
              "id": "topic_phy_11_2_2",
              "title": "Dimensional Analysis",
              "chapterId": "phy_11_ch2",
              "order": 2
            },
            {
              "id": "topic_phy_11_2_3",
              "title": "Errors in Measurement",
              "chapterId": "phy_11_ch2",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch3",
          "title": "Motion in a Straight Line",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Kinematics: speed, velocity, acceleration.",
          "topics": [
            {
              "id": "topic_phy_11_3_1",
              "title": "Distance & Displacement",
              "chapterId": "phy_11_ch3",
              "order": 1
            },
            {
              "id": "topic_phy_11_3_2",
              "title": "Velocity & Speed",
              "chapterId": "phy_11_ch3",
              "order": 2
            },
            {
              "id": "topic_phy_11_3_3",
              "title": "Acceleration Graphs",
              "chapterId": "phy_11_ch3",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch4",
          "title": "Motion in a Plane",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Vectors and two-dimensional motion.",
          "topics": [
            {
              "id": "topic_phy_11_4_1",
              "title": "Vectors & Operations",
              "chapterId": "phy_11_ch4",
              "order": 1
            },
            {
              "id": "topic_phy_11_4_2",
              "title": "Projectile Motion",
              "chapterId": "phy_11_ch4",
              "order": 2
            },
            {
              "id": "topic_phy_11_4_3",
              "title": "Relative Velocity",
              "chapterId": "phy_11_ch4",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch5",
          "title": "Laws of Motion",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Newton’s laws, friction and forces.",
          "topics": [
            {
              "id": "topic_phy_11_5_1",
              "title": "Newton’s Laws",
              "chapterId": "phy_11_ch5",
              "order": 1
            },
            {
              "id": "topic_phy_11_5_2",
              "title": "Types of Forces",
              "chapterId": "phy_11_ch5",
              "order": 2
            },
            {
              "id": "topic_phy_11_5_3",
              "title": "Friction",
              "chapterId": "phy_11_ch5",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch6",
          "title": "Work, Energy and Power",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Work–energy theorem, power and collisions.",
          "topics": [
            {
              "id": "topic_phy_11_6_1",
              "title": "Work & Kinetic Energy",
              "chapterId": "phy_11_ch6",
              "order": 1
            },
            {
              "id": "topic_phy_11_6_2",
              "title": "Power & Energy",
              "chapterId": "phy_11_ch6",
              "order": 2
            },
            {
              "id": "topic_phy_11_6_3",
              "title": "Collisions",
              "chapterId": "phy_11_ch6",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch7",
          "title": "System of Particles and Rotational Motion",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Centre of mass, torque, angular momentum.",
          "topics": [
            {
              "id": "topic_phy_11_7_1",
              "title": "Centre of Mass",
              "chapterId": "phy_11_ch7",
              "order": 1
            },
            {
              "id": "topic_phy_11_7_2",
              "title": "Moment of Inertia",
              "chapterId": "phy_11_ch7",
              "order": 2
            },
            {
              "id": "topic_phy_11_7_3",
              "title": "Torque & Angular Momentum",
              "chapterId": "phy_11_ch7",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch8",
          "title": "Gravitation",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Newton’s law of gravitation & satellites.",
          "topics": [
            {
              "id": "topic_phy_11_8_1",
              "title": "Gravitational Law",
              "chapterId": "phy_11_ch8",
              "order": 1
            },
            {
              "id": "topic_phy_11_8_2",
              "title": "Acceleration due to Gravity",
              "chapterId": "phy_11_ch8",
              "order": 2
            },
            {
              "id": "topic_phy_11_8_3",
              "title": "Kepler’s Laws",
              "chapterId": "phy_11_ch8",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch9",
          "title": "Mechanical Properties of Solids",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Elasticity, Hooke’s law and stress–strain.",
          "topics": [
            {
              "id": "topic_phy_11_9_1",
              "title": "Stress & Strain",
              "chapterId": "phy_11_ch9",
              "order": 1
            },
            {
              "id": "topic_phy_11_9_2",
              "title": "Elastic Moduli",
              "chapterId": "phy_11_ch9",
              "order": 2
            },
            {
              "id": "topic_phy_11_9_3",
              "title": "Hooke’s Law",
              "chapterId": "phy_11_ch9",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch10",
          "title": "Mechanical Properties of Fluids",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Pressure, buoyancy, viscosity & Bernoulli’s principle.",
          "topics": [
            {
              "id": "topic_phy_11_10_1",
              "title": "Pressure & Pascal’s Law",
              "chapterId": "phy_11_ch10",
              "order": 1
            },
            {
              "id": "topic_phy_11_10_2",
              "title": "Viscosity & Drag",
              "chapterId": "phy_11_ch10",
              "order": 2
            },
            {
              "id": "topic_phy_11_10_3",
              "title": "Bernoulli’s Principle",
              "chapterId": "phy_11_ch10",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch11",
          "title": "Thermal Properties of Matter",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Heat, temperature, expansion, calorimetry.",
          "topics": [
            {
              "id": "topic_phy_11_11_1",
              "title": "Heat & Temperature",
              "chapterId": "phy_11_ch11",
              "order": 1
            },
            {
              "id": "topic_phy_11_11_2",
              "title": "Thermal Expansion",
              "chapterId": "phy_11_ch11",
              "order": 2
            },
            {
              "id": "topic_phy_11_11_3",
              "title": "Calorimetry",
              "chapterId": "phy_11_ch11",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch12",
          "title": "Thermodynamics",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Laws of thermodynamics, heat engines.",
          "topics": [
            {
              "id": "topic_phy_11_12_1",
              "title": "Zeroth & First Law",
              "chapterId": "phy_11_ch12",
              "order": 1
            },
            {
              "id": "topic_phy_11_12_2",
              "title": "Second Law & Entropy",
              "chapterId": "phy_11_ch12",
              "order": 2
            },
            {
              "id": "topic_phy_11_12_3",
              "title": "Heat Engines",
              "chapterId": "phy_11_ch12",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch13",
          "title": "Kinetic Theory",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Molecular theory of gases.",
          "topics": [
            {
              "id": "topic_phy_11_13_1",
              "title": "Gas Laws",
              "chapterId": "phy_11_ch13",
              "order": 1
            },
            {
              "id": "topic_phy_11_13_2",
              "title": "Pressure of Gas",
              "chapterId": "phy_11_ch13",
              "order": 2
            },
            {
              "id": "topic_phy_11_13_3",
              "title": "Equipartition of Energy",
              "chapterId": "phy_11_ch13",
              "order": 3
            }
          ]
        },
        {
          "id": "phy_11_ch14",
          "title": "Oscillations",
          "subject": "Physics",
          "classLevel": "11th - Science stream",
          "description": "Simple harmonic motion (SHM).",
          "topics": [
            {
              "id": "topic_phy_11_14_1",
              "title": "SHM Basics",
              "chapterId": "phy_11_ch14",
              "order": 1
            },
            {
              "id": "topic_phy_11_14_2",
              "title": "Energy in SHM",
              "chapterId": "phy_11_ch14",
              "order": 2
            },
            {
              "id": "topic_phy_11_14_3",
              "title": "Damped & Forced Oscillations",
              "chapterId": "phy_11_ch14",
              "order": 3
            }
          ]
        }
      ],
      "Chemistry": [
        {
          "id": "chem_11_ch1",
          "title": "Some Basic Concepts of Chemistry",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Mole concept, stoichiometry & atomic masses.",
          "topics": [
            {
              "id": "topic_chem_11_1_1",
              "title": "Laws of Chemical Combination",
              "chapterId": "chem_11_ch1",
              "order": 1
            },
            {
              "id": "topic_chem_11_1_2",
              "title": "Mole Concept",
              "chapterId": "chem_11_ch1",
              "order": 2
            },
            {
              "id": "topic_chem_11_1_3",
              "title": "Stoichiometry",
              "chapterId": "chem_11_ch1",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch2",
          "title": "Structure of Atom",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Atomic models, quantum numbers, orbitals.",
          "topics": [
            {
              "id": "topic_chem_11_2_1",
              "title": "Atomic Models",
              "chapterId": "chem_11_ch2",
              "order": 1
            },
            {
              "id": "topic_chem_11_2_2",
              "title": "Quantum Numbers",
              "chapterId": "chem_11_ch2",
              "order": 2
            },
            {
              "id": "topic_chem_11_2_3",
              "title": "Electronic Configuration",
              "chapterId": "chem_11_ch2",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch3",
          "title": "Classification of Elements and Periodicity",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Periodic table and periodic trends.",
          "topics": [
            {
              "id": "topic_chem_11_3_1",
              "title": "Modern Periodic Table",
              "chapterId": "chem_11_ch3",
              "order": 1
            },
            {
              "id": "topic_chem_11_3_2",
              "title": "Periodic Trends",
              "chapterId": "chem_11_ch3",
              "order": 2
            },
            {
              "id": "topic_chem_11_3_3",
              "title": "Ionization Enthalpy & Radii",
              "chapterId": "chem_11_ch3",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch4",
          "title": "Chemical Bonding and Molecular Structure",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Bond types, VSEPR theory and hybridization.",
          "topics": [
            {
              "id": "topic_chem_11_4_1",
              "title": "Ionic & Covalent Bonds",
              "chapterId": "chem_11_ch4",
              "order": 1
            },
            {
              "id": "topic_chem_11_4_2",
              "title": "VSEPR Theory",
              "chapterId": "chem_11_ch4",
              "order": 2
            },
            {
              "id": "topic_chem_11_4_3",
              "title": "Hybridization",
              "chapterId": "chem_11_ch4",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch5",
          "title": "States of Matter",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Gaseous & liquid states, gas laws.",
          "topics": [
            {
              "id": "topic_chem_11_5_1",
              "title": "Gas Laws",
              "chapterId": "chem_11_ch5",
              "order": 1
            },
            {
              "id": "topic_chem_11_5_2",
              "title": "Kinetic Theory",
              "chapterId": "chem_11_ch5",
              "order": 2
            },
            {
              "id": "topic_chem_11_5_3",
              "title": "Liquefaction of Gases",
              "chapterId": "chem_11_ch5",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch6",
          "title": "Thermodynamics",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Enthalpy, entropy and thermodynamic laws.",
          "topics": [
            {
              "id": "topic_chem_11_6_1",
              "title": "First Law of Thermodynamics",
              "chapterId": "chem_11_ch6",
              "order": 1
            },
            {
              "id": "topic_chem_11_6_2",
              "title": "Enthalpy & Entropy",
              "chapterId": "chem_11_ch6",
              "order": 2
            },
            {
              "id": "topic_chem_11_6_3",
              "title": "Spontaneous Processes",
              "chapterId": "chem_11_ch6",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch7",
          "title": "Equilibrium",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Chemical equilibrium and ionic equilibrium.",
          "topics": [
            {
              "id": "topic_chem_11_7_1",
              "title": "Law of Equilibrium",
              "chapterId": "chem_11_ch7",
              "order": 1
            },
            {
              "id": "topic_chem_11_7_2",
              "title": "Le Chatelier’s Principle",
              "chapterId": "chem_11_ch7",
              "order": 2
            },
            {
              "id": "topic_chem_11_7_3",
              "title": "pH & Buffer Solutions",
              "chapterId": "chem_11_ch7",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch8",
          "title": "Redox Reactions",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Oxidation, reduction and redox balancing.",
          "topics": [
            {
              "id": "topic_chem_11_8_1",
              "title": "Oxidation & Reduction",
              "chapterId": "chem_11_ch8",
              "order": 1
            },
            {
              "id": "topic_chem_11_8_2",
              "title": "Redox Reactions",
              "chapterId": "chem_11_ch8",
              "order": 2
            },
            {
              "id": "topic_chem_11_8_3",
              "title": "Balancing Redox Equations",
              "chapterId": "chem_11_ch8",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch9",
          "title": "Hydrogen",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Properties of hydrogen, isotopes and hydrides.",
          "topics": [
            {
              "id": "topic_chem_11_9_1",
              "title": "Isotopes of Hydrogen",
              "chapterId": "chem_11_ch9",
              "order": 1
            },
            {
              "id": "topic_chem_11_9_2",
              "title": "Hydrides",
              "chapterId": "chem_11_ch9",
              "order": 2
            },
            {
              "id": "topic_chem_11_9_3",
              "title": "Water & Hydrogen Peroxide",
              "chapterId": "chem_11_ch9",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch10",
          "title": "The s-Block Elements",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Alkali & alkaline earth metals.",
          "topics": [
            {
              "id": "topic_chem_11_10_1",
              "title": "Group 1 Elements",
              "chapterId": "chem_11_ch10",
              "order": 1
            },
            {
              "id": "topic_chem_11_10_2",
              "title": "Group 2 Elements",
              "chapterId": "chem_11_ch10",
              "order": 2
            },
            {
              "id": "topic_chem_11_10_3",
              "title": "Properties & Uses",
              "chapterId": "chem_11_ch10",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch11",
          "title": "The p-Block Elements",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Group 13 and 14 elements and their compounds.",
          "topics": [
            {
              "id": "topic_chem_11_11_1",
              "title": "Group 13 Elements",
              "chapterId": "chem_11_ch11",
              "order": 1
            },
            {
              "id": "topic_chem_11_11_2",
              "title": "Group 14 Elements",
              "chapterId": "chem_11_ch11",
              "order": 2
            },
            {
              "id": "topic_chem_11_11_3",
              "title": "Important Compounds",
              "chapterId": "chem_11_ch11",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch12",
          "title": "Organic Chemistry – Some Basic Principles",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Hybridization, resonance, nomenclature and mechanisms.",
          "topics": [
            {
              "id": "topic_chem_11_12_1",
              "title": "Nomenclature of Organics",
              "chapterId": "chem_11_ch12",
              "order": 1
            },
            {
              "id": "topic_chem_11_12_2",
              "title": "Hybridization & Resonance",
              "chapterId": "chem_11_ch12",
              "order": 2
            },
            {
              "id": "topic_chem_11_12_3",
              "title": "Reaction Mechanisms",
              "chapterId": "chem_11_ch12",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch13",
          "title": "Hydrocarbons",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Alkanes, alkenes, alkynes and aromatic compounds.",
          "topics": [
            {
              "id": "topic_chem_11_13_1",
              "title": "Alkanes",
              "chapterId": "chem_11_ch13",
              "order": 1
            },
            {
              "id": "topic_chem_11_13_2",
              "title": "Alkenes & Alkynes",
              "chapterId": "chem_11_ch13",
              "order": 2
            },
            {
              "id": "topic_chem_11_13_3",
              "title": "Aromatic Compounds",
              "chapterId": "chem_11_ch13",
              "order": 3
            }
          ]
        },
        {
          "id": "chem_11_ch14",
          "title": "Environmental Chemistry",
          "subject": "Chemistry",
          "classLevel": "11th - Science stream",
          "description": "Pollution, green chemistry and environmental issues.",
          "topics": [
            {
              "id": "topic_chem_11_14_1",
              "title": "Air & Water Pollution",
              "chapterId": "chem_11_ch14",
              "order": 1
            },
            {
              "id": "topic_chem_11_14_2",
              "title": "Soil Pollution",
              "chapterId": "chem_11_ch14",
              "order": 2
            },
            {
              "id": "topic_chem_11_14_3",
              "title": "Green Chemistry",
              "chapterId": "chem_11_ch14",
              "order": 3
            }
          ]
        }
      ],
      "Mathematics": [
        {
          "id": "math_11_ch1",
          "title": "Sets",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Basic definitions, Venn diagrams and set operations.",
          "topics": [
            {
              "id": "topic_math_11_1_1",
              "title": "Types of Sets",
              "chapterId": "math_11_ch1",
              "order": 1
            },
            {
              "id": "topic_math_11_1_2",
              "title": "Venn Diagrams",
              "chapterId": "math_11_ch1",
              "order": 2
            },
            {
              "id": "topic_math_11_1_3",
              "title": "Set Operations",
              "chapterId": "math_11_ch1",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch2",
          "title": "Relations and Functions",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Types of relations, functions and domain–range.",
          "topics": [
            {
              "id": "topic_math_11_2_1",
              "title": "Relations",
              "chapterId": "math_11_ch2",
              "order": 1
            },
            {
              "id": "topic_math_11_2_2",
              "title": "Functions",
              "chapterId": "math_11_ch2",
              "order": 2
            },
            {
              "id": "topic_math_11_2_3",
              "title": "Domain & Range",
              "chapterId": "math_11_ch2",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch3",
          "title": "Trigonometric Functions",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Radian measure, identities and graphs.",
          "topics": [
            {
              "id": "topic_math_11_3_1",
              "title": "Radian & Degree",
              "chapterId": "math_11_ch3",
              "order": 1
            },
            {
              "id": "topic_math_11_3_2",
              "title": "Trigonometric Identities",
              "chapterId": "math_11_ch3",
              "order": 2
            },
            {
              "id": "topic_math_11_3_3",
              "title": "Trigonometric Graphs",
              "chapterId": "math_11_ch3",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch4",
          "title": "Principle of Mathematical Induction",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Mathematical induction basics and applications.",
          "topics": [
            {
              "id": "topic_math_11_4_1",
              "title": "Principle Explanation",
              "chapterId": "math_11_ch4",
              "order": 1
            },
            {
              "id": "topic_math_11_4_2",
              "title": "Proof by Induction",
              "chapterId": "math_11_ch4",
              "order": 2
            },
            {
              "id": "topic_math_11_4_3",
              "title": "Examples",
              "chapterId": "math_11_ch4",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch5",
          "title": "Complex Numbers and Quadratic Equations",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Imaginary numbers, modulus, equations.",
          "topics": [
            {
              "id": "topic_math_11_5_1",
              "title": "Imaginary Unit",
              "chapterId": "math_11_ch5",
              "order": 1
            },
            {
              "id": "topic_math_11_5_2",
              "title": "Modulus & Argument",
              "chapterId": "math_11_ch5",
              "order": 2
            },
            {
              "id": "topic_math_11_5_3",
              "title": "Quadratic Equations",
              "chapterId": "math_11_ch5",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch6",
          "title": "Linear Inequalities",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Solving inequalities and graphical representation.",
          "topics": [
            {
              "id": "topic_math_11_6_1",
              "title": "Inequality Basics",
              "chapterId": "math_11_ch6",
              "order": 1
            },
            {
              "id": "topic_math_11_6_2",
              "title": "Solving Inequalities",
              "chapterId": "math_11_ch6",
              "order": 2
            },
            {
              "id": "topic_math_11_6_3",
              "title": "Graphical Method",
              "chapterId": "math_11_ch6",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch7",
          "title": "Permutations and Combinations",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Counting principles, arrangements and selections.",
          "topics": [
            {
              "id": "topic_math_11_7_1",
              "title": "Factorial Concept",
              "chapterId": "math_11_ch7",
              "order": 1
            },
            {
              "id": "topic_math_11_7_2",
              "title": "Permutations",
              "chapterId": "math_11_ch7",
              "order": 2
            },
            {
              "id": "topic_math_11_7_3",
              "title": "Combinations",
              "chapterId": "math_11_ch7",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch8",
          "title": "Binomial Theorem",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Binomial expansion and general term.",
          "topics": [
            {
              "id": "topic_math_11_8_1",
              "title": "Binomial Expansion",
              "chapterId": "math_11_ch8",
              "order": 1
            },
            {
              "id": "topic_math_11_8_2",
              "title": "General & Middle Term",
              "chapterId": "math_11_ch8",
              "order": 2
            },
            {
              "id": "topic_math_11_8_3",
              "title": "Applications",
              "chapterId": "math_11_ch8",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch9",
          "title": "Sequences and Series",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "AP, GP and sum formulas.",
          "topics": [
            {
              "id": "topic_math_11_9_1",
              "title": "Arithmetic Progression",
              "chapterId": "math_11_ch9",
              "order": 1
            },
            {
              "id": "topic_math_11_9_2",
              "title": "Geometric Progression",
              "chapterId": "math_11_ch9",
              "order": 2
            },
            {
              "id": "topic_math_11_9_3",
              "title": "Sum of n Terms",
              "chapterId": "math_11_ch9",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch10",
          "title": "Straight Lines",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Slope, intercepts, inclination and equation of lines.",
          "topics": [
            {
              "id": "topic_math_11_10_1",
              "title": "Slope & Intercepts",
              "chapterId": "math_11_ch10",
              "order": 1
            },
            {
              "id": "topic_math_11_10_2",
              "title": "Various Forms of Line Equation",
              "chapterId": "math_11_ch10",
              "order": 2
            },
            {
              "id": "topic_math_11_10_3",
              "title": "Angle Between Lines",
              "chapterId": "math_11_ch10",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch11",
          "title": "Conic Sections",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Parabola, ellipse, hyperbola and circles.",
          "topics": [
            {
              "id": "topic_math_11_11_1",
              "title": "Parabola",
              "chapterId": "math_11_ch11",
              "order": 1
            },
            {
              "id": "topic_math_11_11_2",
              "title": "Ellipse",
              "chapterId": "math_11_ch11",
              "order": 2
            },
            {
              "id": "topic_math_11_11_3",
              "title": "Hyperbola",
              "chapterId": "math_11_ch11",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch12",
          "title": "Introduction to Three-Dimensional Geometry",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Basics of 3D coordinate geometry.",
          "topics": [
            {
              "id": "topic_math_11_12_1",
              "title": "Coordinate Axes & Planes",
              "chapterId": "math_11_ch12",
              "order": 1
            },
            {
              "id": "topic_math_11_12_2",
              "title": "Distance Formula in 3D",
              "chapterId": "math_11_ch12",
              "order": 2
            },
            {
              "id": "topic_math_11_12_3",
              "title": "Section Formula in 3D",
              "chapterId": "math_11_ch12",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch13",
          "title": "Limits and Derivatives",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Introduction to limits, continuity and differentiation.",
          "topics": [
            {
              "id": "topic_math_11_13_1",
              "title": "Limits Concepts",
              "chapterId": "math_11_ch13",
              "order": 1
            },
            {
              "id": "topic_math_11_13_2",
              "title": "Continuity Overview",
              "chapterId": "math_11_ch13",
              "order": 2
            },
            {
              "id": "topic_math_11_13_3",
              "title": "Derivatives Basics",
              "chapterId": "math_11_ch13",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch14",
          "title": "Mathematical Reasoning",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Statements, logic and implications.",
          "topics": [
            {
              "id": "topic_math_11_14_1",
              "title": "Mathematical Statements",
              "chapterId": "math_11_ch14",
              "order": 1
            },
            {
              "id": "topic_math_11_14_2",
              "title": "Implications & Converse",
              "chapterId": "math_11_ch14",
              "order": 2
            },
            {
              "id": "topic_math_11_14_3",
              "title": "Valid Arguments",
              "chapterId": "math_11_ch14",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch15",
          "title": "Statistics",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Measures of central tendency and dispersion.",
          "topics": [
            {
              "id": "topic_math_11_15_1",
              "title": "Mean, Median & Mode",
              "chapterId": "math_11_ch15",
              "order": 1
            },
            {
              "id": "topic_math_11_15_2",
              "title": "Variance & Standard Deviation",
              "chapterId": "math_11_ch15",
              "order": 2
            },
            {
              "id": "topic_math_11_15_3",
              "title": "Analysis of Data",
              "chapterId": "math_11_ch15",
              "order": 3
            }
          ]
        },
        {
          "id": "math_11_ch16",
          "title": "Probability",
          "subject": "Mathematics",
          "classLevel": "11th - Science stream",
          "description": "Classical and axiomatic approach to probability.",
          "topics": [
            {
              "id": "topic_math_11_16_1",
              "title": "Random Experiments",
              "chapterId": "math_11_ch16",
              "order": 1
            },
            {
              "id": "topic_math_11_16_2",
              "title": "Axioms of Probability",
              "chapterId": "math_11_ch16",
              "order": 2
            },
            {
              "id": "topic_math_11_16_3",
              "title": "Conditional Probability Basics",
              "chapterId": "math_11_ch16",
              "order": 3
            }
          ]
        }
      ],
      "Biology": [
        {
          "id": "bio_11_ch1",
          "title": "The Living World",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Characteristics of living organisms & taxonomy.",
          "topics": [
            {
              "id": "topic_bio_11_1_1",
              "title": "Characteristics of Life",
              "chapterId": "bio_11_ch1",
              "order": 1
            },
            {
              "id": "topic_bio_11_1_2",
              "title": "Classification Basics",
              "chapterId": "bio_11_ch1",
              "order": 2
            },
            {
              "id": "topic_bio_11_1_3",
              "title": "Nomenclature",
              "chapterId": "bio_11_ch1",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch2",
          "title": "Biological Classification",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Five kingdom classification and characteristics.",
          "topics": [
            {
              "id": "topic_bio_11_2_1",
              "title": "Five Kingdom System",
              "chapterId": "bio_11_ch2",
              "order": 1
            },
            {
              "id": "topic_bio_11_2_2",
              "title": "Kingdom Monera, Protista",
              "chapterId": "bio_11_ch2",
              "order": 2
            },
            {
              "id": "topic_bio_11_2_3",
              "title": "Fungi & Plantae",
              "chapterId": "bio_11_ch2",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch3",
          "title": "Plant Kingdom",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Algae, bryophytes, pteridophytes and gymnosperms.",
          "topics": [
            {
              "id": "topic_bio_11_3_1",
              "title": "Algae & Bryophytes",
              "chapterId": "bio_11_ch3",
              "order": 1
            },
            {
              "id": "topic_bio_11_3_2",
              "title": "Pteridophytes",
              "chapterId": "bio_11_ch3",
              "order": 2
            },
            {
              "id": "topic_bio_11_3_3",
              "title": "Gymnosperms & Angiosperms",
              "chapterId": "bio_11_ch3",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch4",
          "title": "Animal Kingdom",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Classification of animals based on features.",
          "topics": [
            {
              "id": "topic_bio_11_4_1",
              "title": "Non-Chordates",
              "chapterId": "bio_11_ch4",
              "order": 1
            },
            {
              "id": "topic_bio_11_4_2",
              "title": "Chordates",
              "chapterId": "bio_11_ch4",
              "order": 2
            },
            {
              "id": "topic_bio_11_4_3",
              "title": "Comparative Features",
              "chapterId": "bio_11_ch4",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch5",
          "title": "Morphology of Flowering Plants",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Root, stem, leaf morphology and modifications.",
          "topics": [
            {
              "id": "topic_bio_11_5_1",
              "title": "Root & Stem Morphology",
              "chapterId": "bio_11_ch5",
              "order": 1
            },
            {
              "id": "topic_bio_11_5_2",
              "title": "Leaf Forms & Modifications",
              "chapterId": "bio_11_ch5",
              "order": 2
            },
            {
              "id": "topic_bio_11_5_3",
              "title": "Inflorescence & Flowers",
              "chapterId": "bio_11_ch5",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch6",
          "title": "Anatomy of Flowering Plants",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Tissues, vascular bundles and secondary growth.",
          "topics": [
            {
              "id": "topic_bio_11_6_1",
              "title": "Plant Tissues",
              "chapterId": "bio_11_ch6",
              "order": 1
            },
            {
              "id": "topic_bio_11_6_2",
              "title": "Vascular System",
              "chapterId": "bio_11_ch6",
              "order": 2
            },
            {
              "id": "topic_bio_11_6_3",
              "title": "Secondary Growth",
              "chapterId": "bio_11_ch6",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch7",
          "title": "Structural Organisation in Animals",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Animal tissues and organ systems.",
          "topics": [
            {
              "id": "topic_bio_11_7_1",
              "title": "Animal Tissues",
              "chapterId": "bio_11_ch7",
              "order": 1
            },
            {
              "id": "topic_bio_11_7_2",
              "title": "Frog Anatomy",
              "chapterId": "bio_11_ch7",
              "order": 2
            },
            {
              "id": "topic_bio_11_7_3",
              "title": "Organ Systems Overview",
              "chapterId": "bio_11_ch7",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch8",
          "title": "Cell: The Unit of Life",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Cell structure, membrane models and organelles.",
          "topics": [
            {
              "id": "topic_bio_11_8_1",
              "title": "Cell Structure",
              "chapterId": "bio_11_ch8",
              "order": 1
            },
            {
              "id": "topic_bio_11_8_2",
              "title": "Membrane Models",
              "chapterId": "bio_11_ch8",
              "order": 2
            },
            {
              "id": "topic_bio_11_8_3",
              "title": "Cell Organelles",
              "chapterId": "bio_11_ch8",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch9",
          "title": "Biomolecules",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Carbohydrates, proteins, lipids and nucleic acids.",
          "topics": [
            {
              "id": "topic_bio_11_9_1",
              "title": "Carbohydrates & Lipids",
              "chapterId": "bio_11_ch9",
              "order": 1
            },
            {
              "id": "topic_bio_11_9_2",
              "title": "Proteins & Enzymes",
              "chapterId": "bio_11_ch9",
              "order": 2
            },
            {
              "id": "topic_bio_11_9_3",
              "title": "Nucleic Acids",
              "chapterId": "bio_11_ch9",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch10",
          "title": "Cell Cycle and Cell Division",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Mitosis, meiosis and regulation.",
          "topics": [
            {
              "id": "topic_bio_11_10_1",
              "title": "Cell Cycle Phases",
              "chapterId": "bio_11_ch10",
              "order": 1
            },
            {
              "id": "topic_bio_11_10_2",
              "title": "Mitosis",
              "chapterId": "bio_11_ch10",
              "order": 2
            },
            {
              "id": "topic_bio_11_10_3",
              "title": "Meiosis",
              "chapterId": "bio_11_ch10",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch11",
          "title": "Transport in Plants",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Transpiration, osmosis and transport mechanisms.",
          "topics": [
            {
              "id": "topic_bio_11_11_1",
              "title": "Diffusion & Osmosis",
              "chapterId": "bio_11_ch11",
              "order": 1
            },
            {
              "id": "topic_bio_11_11_2",
              "title": "Transpiration",
              "chapterId": "bio_11_ch11",
              "order": 2
            },
            {
              "id": "topic_bio_11_11_3",
              "title": "Transport of Minerals",
              "chapterId": "bio_11_ch11",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch12",
          "title": "Mineral Nutrition",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Essential nutrients and nitrogen cycle.",
          "topics": [
            {
              "id": "topic_bio_11_12_1",
              "title": "Essential Mineral Elements",
              "chapterId": "bio_11_ch12",
              "order": 1
            },
            {
              "id": "topic_bio_11_12_2",
              "title": "Deficiency Symptoms",
              "chapterId": "bio_11_ch12",
              "order": 2
            },
            {
              "id": "topic_bio_11_12_3",
              "title": "Nitrogen Fixation",
              "chapterId": "bio_11_ch12",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch13",
          "title": "Photosynthesis in Higher Plants",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Light reactions, Calvin cycle and C4 pathway.",
          "topics": [
            {
              "id": "topic_bio_11_13_1",
              "title": "Light Reaction",
              "chapterId": "bio_11_ch13",
              "order": 1
            },
            {
              "id": "topic_bio_11_13_2",
              "title": "Calvin Cycle",
              "chapterId": "bio_11_ch13",
              "order": 2
            },
            {
              "id": "topic_bio_11_13_3",
              "title": "Photorespiration & C4",
              "chapterId": "bio_11_ch13",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch14",
          "title": "Respiration in Plants",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Glycolysis, Krebs cycle and ETS.",
          "topics": [
            {
              "id": "topic_bio_11_14_1",
              "title": "Glycolysis",
              "chapterId": "bio_11_ch14",
              "order": 1
            },
            {
              "id": "topic_bio_11_14_2",
              "title": "Krebs Cycle",
              "chapterId": "bio_11_ch14",
              "order": 2
            },
            {
              "id": "topic_bio_11_14_3",
              "title": "Electron Transport System",
              "chapterId": "bio_11_ch14",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch15",
          "title": "Plant Growth and Development",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Growth hormones, differentiation and photoperiodism.",
          "topics": [
            {
              "id": "topic_bio_11_15_1",
              "title": "Growth Regulators",
              "chapterId": "bio_11_ch15",
              "order": 1
            },
            {
              "id": "topic_bio_11_15_2",
              "title": "Differentiation",
              "chapterId": "bio_11_ch15",
              "order": 2
            },
            {
              "id": "topic_bio_11_15_3",
              "title": "Photoperiodism",
              "chapterId": "bio_11_ch15",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch16",
          "title": "Digestion and Absorption",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Human digestive system and absorption.",
          "topics": [
            {
              "id": "topic_bio_11_16_1",
              "title": "Digestive System Overview",
              "chapterId": "bio_11_ch16",
              "order": 1
            },
            {
              "id": "topic_bio_11_16_2",
              "title": "Enzymes & Digestion Steps",
              "chapterId": "bio_11_ch16",
              "order": 2
            },
            {
              "id": "topic_bio_11_16_3",
              "title": "Absorption Mechanisms",
              "chapterId": "bio_11_ch16",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch17",
          "title": "Breathing and Exchange of Gases",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Mechanism of breathing and gas exchange.",
          "topics": [
            {
              "id": "topic_bio_11_17_1",
              "title": "Mechanism of Breathing",
              "chapterId": "bio_11_ch17",
              "order": 1
            },
            {
              "id": "topic_bio_11_17_2",
              "title": "Gas Exchange in Lungs",
              "chapterId": "bio_11_ch17",
              "order": 2
            },
            {
              "id": "topic_bio_11_17_3",
              "title": "Transport of Gases",
              "chapterId": "bio_11_ch17",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch18",
          "title": "Body Fluids and Circulation",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Blood, heart, lymphatic system and circulation.",
          "topics": [
            {
              "id": "topic_bio_11_18_1",
              "title": "Blood Components",
              "chapterId": "bio_11_ch18",
              "order": 1
            },
            {
              "id": "topic_bio_11_18_2",
              "title": "Heart & Cardiac Cycle",
              "chapterId": "bio_11_ch18",
              "order": 2
            },
            {
              "id": "topic_bio_11_18_3",
              "title": "Lymph System",
              "chapterId": "bio_11_ch18",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch19",
          "title": "Excretory Products and Their Elimination",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Urine formation, kidney function.",
          "topics": [
            {
              "id": "topic_bio_11_19_1",
              "title": "Kidney Structure",
              "chapterId": "bio_11_ch19",
              "order": 1
            },
            {
              "id": "topic_bio_11_19_2",
              "title": "Urine Formation",
              "chapterId": "bio_11_ch19",
              "order": 2
            },
            {
              "id": "topic_bio_11_19_3",
              "title": "Regulation of Kidney Function",
              "chapterId": "bio_11_ch19",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch20",
          "title": "Locomotion and Movement",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Muscular and skeletal systems.",
          "topics": [
            {
              "id": "topic_bio_11_20_1",
              "title": "Types of Movement",
              "chapterId": "bio_11_ch20",
              "order": 1
            },
            {
              "id": "topic_bio_11_20_2",
              "title": "Muscle Structure",
              "chapterId": "bio_11_ch20",
              "order": 2
            },
            {
              "id": "topic_bio_11_20_3",
              "title": "Skeletal System",
              "chapterId": "bio_11_ch20",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch21",
          "title": "Neural Control and Coordination",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Nervous system and reflexes.",
          "topics": [
            {
              "id": "topic_bio_11_21_1",
              "title": "Neuron Structure",
              "chapterId": "bio_11_ch21",
              "order": 1
            },
            {
              "id": "topic_bio_11_21_2",
              "title": "Synapse & Transmission",
              "chapterId": "bio_11_ch21",
              "order": 2
            },
            {
              "id": "topic_bio_11_21_3",
              "title": "Central Nervous System",
              "chapterId": "bio_11_ch21",
              "order": 3
            }
          ]
        },
        {
          "id": "bio_11_ch22",
          "title": "Chemical Coordination and Integration",
          "subject": "Biology",
          "classLevel": "11th - Science stream",
          "description": "Hormonal control and endocrine system.",
          "topics": [
            {
              "id": "topic_bio_11_22_1",
              "title": "Endocrine Glands",
              "chapterId": "bio_11_ch22",
              "order": 1
            },
            {
              "id": "topic_bio_11_22_2",
              "title": "Hormones & Functions",
              "chapterId": "bio_11_ch22",
              "order": 2
            },
            {
              "id": "topic_bio_11_22_3",
              "title": "Feedback Mechanisms",
              "chapterId": "bio_11_ch22",
              "order": 3
            }
          ]
        }
      ],
      "English": [
        {
          "id": "eng_11_hb_ch1",
          "title": "The Portrait of a Lady",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A story about the author's grandmother and changing lifestyles.",
          "topics": [
            {
              "id": "topic_eng_11_hb_1_1",
              "title": "Summary",
              "chapterId": "eng_11_hb_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_1_2",
              "title": "Themes & Character",
              "chapterId": "eng_11_hb_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch2",
          "title": "We're Not Afraid to Die... If We Can All Be Together",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A thrilling story of courage and survival at sea.",
          "topics": [
            {
              "id": "topic_eng_11_hb_2_1",
              "title": "Adventure Summary",
              "chapterId": "eng_11_hb_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_2_2",
              "title": "Courage & Family Bond",
              "chapterId": "eng_11_hb_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch3",
          "title": "Discovering Tut: The Saga Continues",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Investigating King Tut’s mummy using modern technology.",
          "topics": [
            {
              "id": "topic_eng_11_hb_3_1",
              "title": "Archaeological Findings",
              "chapterId": "eng_11_hb_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_3_2",
              "title": "Scientific Investigation",
              "chapterId": "eng_11_hb_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch4",
          "title": "Landscape of the Soul",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Differences between Western and Chinese art.",
          "topics": [
            {
              "id": "topic_eng_11_hb_4_1",
              "title": "Art Comparison",
              "chapterId": "eng_11_hb_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_4_2",
              "title": "Philosophical Meanings",
              "chapterId": "eng_11_hb_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch5",
          "title": "The Ailing Planet: The Green Movement’s Role",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Environmental crisis and responsible development.",
          "topics": [
            {
              "id": "topic_eng_11_hb_5_1",
              "title": "Environmental Issues",
              "chapterId": "eng_11_hb_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_5_2",
              "title": "Green Movement Insights",
              "chapterId": "eng_11_hb_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch6",
          "title": "The Browning Version",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A dramatic lesson about a strict teacher and his student.",
          "topics": [
            {
              "id": "topic_eng_11_hb_6_1",
              "title": "Plot & Characters",
              "chapterId": "eng_11_hb_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_6_2",
              "title": "Themes of Respect & Regret",
              "chapterId": "eng_11_hb_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch7",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Reflecting on the loss of childhood innocence.",
          "topics": [
            {
              "id": "topic_eng_11_hb_7_1",
              "title": "Childhood vs Adulthood",
              "chapterId": "eng_11_hb_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_7_2",
              "title": "Themes & Reflection",
              "chapterId": "eng_11_hb_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch8",
          "title": "The Adventure",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A science-fiction story involving parallel worlds.",
          "topics": [
            {
              "id": "topic_eng_11_hb_8_1",
              "title": "Parallel World Concept",
              "chapterId": "eng_11_hb_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_8_2",
              "title": "Science & Imagination",
              "chapterId": "eng_11_hb_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_1",
          "title": "A Photograph",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on memory, loss and nostalgia.",
          "topics": [
            {
              "id": "topic_eng_11_poem_1_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_1",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_1_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_1",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_1_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_1",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_2",
          "title": "The Laburnum Top",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem depicting a goldfinch’s visit to a silent tree.",
          "topics": [
            {
              "id": "topic_eng_11_poem_2_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_2",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_2_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_2",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_2_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_2",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_3",
          "title": "The Voice of the Rain",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A lyrical conversation between the poet and the rain.",
          "topics": [
            {
              "id": "topic_eng_11_poem_3_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_3",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_3_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_3",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_3_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_3",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_4",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on transition from childhood to adulthood.",
          "topics": [
            {
              "id": "topic_eng_11_poem_4_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_4",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_4_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_4",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_4_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_4",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_5",
          "title": "Father to Son",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem expressing a father’s emotional distance from his son.",
          "topics": [
            {
              "id": "topic_eng_11_poem_5_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_5",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_5_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_5",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_5_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_5",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_snap_ch1",
          "title": "The Summer of the Beautiful White Horse",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Story of two Armenian boys and a stolen horse.",
          "topics": [
            {
              "id": "topic_eng_11_snap_1_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_1_2",
              "title": "Themes of Honesty & Culture",
              "chapterId": "eng_11_snap_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch2",
          "title": "The Address",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A daughter revisits her mother's possessions after war.",
          "topics": [
            {
              "id": "topic_eng_11_snap_2_1",
              "title": "Memory & Loss",
              "chapterId": "eng_11_snap_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_2_2",
              "title": "Symbolism & Themes",
              "chapterId": "eng_11_snap_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch3",
          "title": "Ranga’s Marriage",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A humorous tale about arranged marriage traditions.",
          "topics": [
            {
              "id": "topic_eng_11_snap_3_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_3_2",
              "title": "Cultural Themes",
              "chapterId": "eng_11_snap_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch4",
          "title": "Albert Einstein at School",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Einstein’s struggles with rigid schooling.",
          "topics": [
            {
              "id": "topic_eng_11_snap_4_1",
              "title": "Einstein’s Conflicts",
              "chapterId": "eng_11_snap_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_4_2",
              "title": "Educational Commentary",
              "chapterId": "eng_11_snap_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch5",
          "title": "Mother’s Day",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A play highlighting family responsibilities.",
          "topics": [
            {
              "id": "topic_eng_11_snap_5_1",
              "title": "Family Roles & Lessons",
              "chapterId": "eng_11_snap_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_5_2",
              "title": "Humor & Satire",
              "chapterId": "eng_11_snap_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch6",
          "title": "The Ghat of the Only World",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A tribute to a friend who passed away.",
          "topics": [
            {
              "id": "topic_eng_11_snap_6_1",
              "title": "Friendship & Memory",
              "chapterId": "eng_11_snap_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_6_2",
              "title": "Tone & Style",
              "chapterId": "eng_11_snap_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch7",
          "title": "Birth",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A doctor's struggle to save a newborn baby.",
          "topics": [
            {
              "id": "topic_eng_11_snap_7_1",
              "title": "Medical Challenges",
              "chapterId": "eng_11_snap_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_7_2",
              "title": "Perseverance Theme",
              "chapterId": "eng_11_snap_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch8",
          "title": "The Tale of Melon City",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A satirical poem-story about a foolish king.",
          "topics": [
            {
              "id": "topic_eng_11_snap_8_1",
              "title": "Satirical Elements",
              "chapterId": "eng_11_snap_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_8_2",
              "title": "Themes & Message",
              "chapterId": "eng_11_snap_ch8",
              "order": 2
            }
          ]
        }
      ]
    },
    "11th - Commerce stream": {
      "Accountancy": [
        {
          "id": "acc_11_ch1",
          "title": "Introduction to Accounting",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, objectives, advantages, limitations, and branches of accounting.",
          "topics": [
            {
              "id": "topic_acc_11_1_1",
              "title": "Meaning & Need of Accounting",
              "chapterId": "acc_11_ch1",
              "order": 1
            },
            {
              "id": "topic_acc_11_1_2",
              "title": "Objectives of Accounting",
              "chapterId": "acc_11_ch1",
              "order": 2
            },
            {
              "id": "topic_acc_11_1_3",
              "title": "Advantages of Accounting",
              "chapterId": "acc_11_ch1",
              "order": 3
            },
            {
              "id": "topic_acc_11_1_4",
              "title": "Limitations of Accounting",
              "chapterId": "acc_11_ch1",
              "order": 4
            },
            {
              "id": "topic_acc_11_1_5",
              "title": "Users of Accounting Information",
              "chapterId": "acc_11_ch1",
              "order": 5
            },
            {
              "id": "topic_acc_11_1_6",
              "title": "Branches of Accounting",
              "chapterId": "acc_11_ch1",
              "order": 6
            },
            {
              "id": "topic_acc_11_1_7",
              "title": "Bookkeeping vs Accounting",
              "chapterId": "acc_11_ch1",
              "order": 7
            }
          ]
        },
        {
          "id": "acc_11_ch2",
          "title": "Theory Base of Accounting",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Basic accounting concepts, conventions, and standards.",
          "topics": [
            {
              "id": "topic_acc_11_2_1",
              "title": "Accounting Concepts",
              "chapterId": "acc_11_ch2",
              "order": 1
            },
            {
              "id": "topic_acc_11_2_2",
              "title": "Accounting Conventions",
              "chapterId": "acc_11_ch2",
              "order": 2
            },
            {
              "id": "topic_acc_11_2_3",
              "title": "Systems of Accounting",
              "chapterId": "acc_11_ch2",
              "order": 3
            },
            {
              "id": "topic_acc_11_2_4",
              "title": "Basis of Accounting (Cash vs Accrual)",
              "chapterId": "acc_11_ch2",
              "order": 4
            },
            {
              "id": "topic_acc_11_2_5",
              "title": "Accounting Standards (AS/IndAS)",
              "chapterId": "acc_11_ch2",
              "order": 5
            },
            {
              "id": "topic_acc_11_2_6",
              "title": "IASB & IFRS Introduction",
              "chapterId": "acc_11_ch2",
              "order": 6
            }
          ]
        },
        {
          "id": "acc_11_ch3",
          "title": "Recording Transactions – I",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Source documents and preparation of vouchers.",
          "topics": [
            {
              "id": "topic_acc_11_3_1",
              "title": "Source Documents (Invoices, Receipts)",
              "chapterId": "acc_11_ch3",
              "order": 1
            },
            {
              "id": "topic_acc_11_3_2",
              "title": "Accounting Vouchers",
              "chapterId": "acc_11_ch3",
              "order": 2
            },
            {
              "id": "topic_acc_11_3_3",
              "title": "Debit and Credit Rules",
              "chapterId": "acc_11_ch3",
              "order": 3
            },
            {
              "id": "topic_acc_11_3_4",
              "title": "Types of Accounts",
              "chapterId": "acc_11_ch3",
              "order": 4
            },
            {
              "id": "topic_acc_11_3_5",
              "title": "Journal Entry Format",
              "chapterId": "acc_11_ch3",
              "order": 5
            }
          ]
        },
        {
          "id": "acc_11_ch4",
          "title": "Recording Transactions – II",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Books of original entry including purchase and sales books.",
          "topics": [
            {
              "id": "topic_acc_11_4_1",
              "title": "Cash Book (Single, Double, Triple Column)",
              "chapterId": "acc_11_ch4",
              "order": 1
            },
            {
              "id": "topic_acc_11_4_2",
              "title": "Purchase & Sales Books",
              "chapterId": "acc_11_ch4",
              "order": 2
            },
            {
              "id": "topic_acc_11_4_3",
              "title": "Purchase Returns & Sales Returns Books",
              "chapterId": "acc_11_ch4",
              "order": 3
            },
            {
              "id": "topic_acc_11_4_4",
              "title": "Journal Proper",
              "chapterId": "acc_11_ch4",
              "order": 4
            },
            {
              "id": "topic_acc_11_4_5",
              "title": "Ledger Posting",
              "chapterId": "acc_11_ch4",
              "order": 5
            }
          ]
        },
        {
          "id": "acc_11_ch5",
          "title": "Bank Reconciliation Statement",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Understanding the causes of differences and BRS preparation.",
          "topics": [
            {
              "id": "topic_acc_11_5_1",
              "title": "Need for BRS",
              "chapterId": "acc_11_ch5",
              "order": 1
            },
            {
              "id": "topic_acc_11_5_2",
              "title": "Causes of Differences",
              "chapterId": "acc_11_ch5",
              "order": 2
            },
            {
              "id": "topic_acc_11_5_3",
              "title": "Preparing BRS",
              "chapterId": "acc_11_ch5",
              "order": 3
            },
            {
              "id": "topic_acc_11_5_4",
              "title": "Adjusted Cash Book Method",
              "chapterId": "acc_11_ch5",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch6",
          "title": "Trial Balance and Rectification of Errors",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Trial balance preparation, types of errors and rectification.",
          "topics": [
            {
              "id": "topic_acc_11_6_1",
              "title": "Methods of Preparing Trial Balance",
              "chapterId": "acc_11_ch6",
              "order": 1
            },
            {
              "id": "topic_acc_11_6_2",
              "title": "Types of Accounting Errors",
              "chapterId": "acc_11_ch6",
              "order": 2
            },
            {
              "id": "topic_acc_11_6_3",
              "title": "Suspense Account",
              "chapterId": "acc_11_ch6",
              "order": 3
            },
            {
              "id": "topic_acc_11_6_4",
              "title": "Rectification of Errors",
              "chapterId": "acc_11_ch6",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch7",
          "title": "Depreciation, Provisions and Reserves",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, methods of depreciation and types of reserves.",
          "topics": [
            {
              "id": "topic_acc_11_7_1",
              "title": "Meaning & Causes of Depreciation",
              "chapterId": "acc_11_ch7",
              "order": 1
            },
            {
              "id": "topic_acc_11_7_2",
              "title": "Straight Line Method (SLM)",
              "chapterId": "acc_11_ch7",
              "order": 2
            },
            {
              "id": "topic_acc_11_7_3",
              "title": "Written Down Value Method (WDV)",
              "chapterId": "acc_11_ch7",
              "order": 3
            },
            {
              "id": "topic_acc_11_7_4",
              "title": "Provision vs Reserve",
              "chapterId": "acc_11_ch7",
              "order": 4
            },
            {
              "id": "topic_acc_11_7_5",
              "title": "Types of Reserves",
              "chapterId": "acc_11_ch7",
              "order": 5
            }
          ]
        },
        {
          "id": "acc_11_ch8",
          "title": "Bills of Exchange",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Bills of exchange, promissory notes, endorsement and discounting.",
          "topics": [
            {
              "id": "topic_acc_11_8_1",
              "title": "Meaning & Parties Involved",
              "chapterId": "acc_11_ch8",
              "order": 1
            },
            {
              "id": "topic_acc_11_8_2",
              "title": "Promissory Notes",
              "chapterId": "acc_11_ch8",
              "order": 2
            },
            {
              "id": "topic_acc_11_8_3",
              "title": "Accounting Treatment",
              "chapterId": "acc_11_ch8",
              "order": 3
            },
            {
              "id": "topic_acc_11_8_4",
              "title": "Endorsement & Discounting",
              "chapterId": "acc_11_ch8",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch9",
          "title": "Financial Statements - I",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning of financial statements, trading and profit & loss account.",
          "topics": [
            {
              "id": "topic_acc_11_9_1",
              "title": "Meaning & Objectives",
              "chapterId": "acc_11_ch9",
              "order": 1
            },
            {
              "id": "topic_acc_11_9_2",
              "title": "Trading Account",
              "chapterId": "acc_11_ch9",
              "order": 2
            },
            {
              "id": "topic_acc_11_9_3",
              "title": "Profit & Loss Account",
              "chapterId": "acc_11_ch9",
              "order": 3
            },
            {
              "id": "topic_acc_11_9_4",
              "title": "Gross Profit vs Net Profit",
              "chapterId": "acc_11_ch9",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch10",
          "title": "Financial Statements – II",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Balance sheet, adjustments and classifications of assets and liabilities.",
          "topics": [
            {
              "id": "topic_acc_11_10_1",
              "title": "Balance Sheet Format",
              "chapterId": "acc_11_ch10",
              "order": 1
            },
            {
              "id": "topic_acc_11_10_2",
              "title": "Types of Assets & Liabilities",
              "chapterId": "acc_11_ch10",
              "order": 2
            },
            {
              "id": "topic_acc_11_10_3",
              "title": "Adjustments (Outstanding, Prepaid, Depreciation)",
              "chapterId": "acc_11_ch10",
              "order": 3
            }
          ]
        },
        {
          "id": "acc_11_ch11",
          "title": "Accounts from Incomplete Records",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Single entry system and preparation of statements.",
          "topics": [
            {
              "id": "topic_acc_11_11_1",
              "title": "Single Entry System Features",
              "chapterId": "acc_11_ch11",
              "order": 1
            },
            {
              "id": "topic_acc_11_11_2",
              "title": "Statement of Affairs",
              "chapterId": "acc_11_ch11",
              "order": 2
            },
            {
              "id": "topic_acc_11_11_3",
              "title": "Conversion to Double Entry",
              "chapterId": "acc_11_ch11",
              "order": 3
            }
          ]
        },
        {
          "id": "acc_11_ch12",
          "title": "Accounting for Not-for-Profit Organisations",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Receipts and payments, income and expenditure, balance sheet.",
          "topics": [
            {
              "id": "topic_acc_11_12_1",
              "title": "Characteristics of NPOs",
              "chapterId": "acc_11_ch12",
              "order": 1
            },
            {
              "id": "topic_acc_11_12_2",
              "title": "Receipts & Payments Account",
              "chapterId": "acc_11_ch12",
              "order": 2
            },
            {
              "id": "topic_acc_11_12_3",
              "title": "Income & Expenditure Account",
              "chapterId": "acc_11_ch12",
              "order": 3
            },
            {
              "id": "topic_acc_11_12_4",
              "title": "NPO Balance Sheet",
              "chapterId": "acc_11_ch12",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch13",
          "title": "Accounting for Partnership Firms – I",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Fundamentals of partnership and profit-sharing ratios.",
          "topics": [
            {
              "id": "topic_acc_11_13_1",
              "title": "Partnership Deed",
              "chapterId": "acc_11_ch13",
              "order": 1
            },
            {
              "id": "topic_acc_11_13_2",
              "title": "Capital Accounts (Fixed & Fluctuating)",
              "chapterId": "acc_11_ch13",
              "order": 2
            },
            {
              "id": "topic_acc_11_13_3",
              "title": "Interest on Capital & Drawings",
              "chapterId": "acc_11_ch13",
              "order": 3
            },
            {
              "id": "topic_acc_11_13_4",
              "title": "Profit-Sharing Ratio",
              "chapterId": "acc_11_ch13",
              "order": 4
            }
          ]
        },
        {
          "id": "acc_11_ch14",
          "title": "Accounting for Partnership Firms – II",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Admission, retirement and death of a partner.",
          "topics": [
            {
              "id": "topic_acc_11_14_1",
              "title": "Admission of Partner",
              "chapterId": "acc_11_ch14",
              "order": 1
            },
            {
              "id": "topic_acc_11_14_2",
              "title": "Goodwill Valuation",
              "chapterId": "acc_11_ch14",
              "order": 2
            },
            {
              "id": "topic_acc_11_14_3",
              "title": "Retirement & Death",
              "chapterId": "acc_11_ch14",
              "order": 3
            }
          ]
        },
        {
          "id": "acc_11_ch15",
          "title": "Company Accounts – Share Capital",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Shares, issue, forfeiture and reissue of shares.",
          "topics": [
            {
              "id": "topic_acc_11_15_1",
              "title": "Types of Shares",
              "chapterId": "acc_11_ch15",
              "order": 1
            },
            {
              "id": "topic_acc_11_15_2",
              "title": "Issue of Shares",
              "chapterId": "acc_11_ch15",
              "order": 2
            },
            {
              "id": "topic_acc_11_15_3",
              "title": "Forfeiture & Reissue",
              "chapterId": "acc_11_ch15",
              "order": 3
            }
          ]
        },
        {
          "id": "acc_11_ch16",
          "title": "Company Accounts – Financial Statements",
          "subject": "Accountancy",
          "classLevel": "11th - Commerce stream",
          "description": "Preparation of company financial statements.",
          "topics": [
            {
              "id": "topic_acc_11_16_1",
              "title": "Company Balance Sheet (Schedule III Format)",
              "chapterId": "acc_11_ch16",
              "order": 1
            },
            {
              "id": "topic_acc_11_16_2",
              "title": "Statement of Profit & Loss",
              "chapterId": "acc_11_ch16",
              "order": 2
            },
            {
              "id": "topic_acc_11_16_3",
              "title": "Notes to Accounts",
              "chapterId": "acc_11_ch16",
              "order": 3
            }
          ]
        }
      ],
      "Business Studies": [

        {
          "id": "bst_11_ch1",
          "title": "Nature and Purpose of Business",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Concept of business, objectives, risks, and classification.",
          "topics": [
            { "id": "topic_bst_11_1_1", "title": "Concept of Business", "chapterId": "bst_11_ch1", "order": 1 },
            { "id": "topic_bst_11_1_2", "title": "Business vs Profession vs Employment", "chapterId": "bst_11_ch1", "order": 2 },
            { "id": "topic_bst_11_1_3", "title": "Objectives of Business", "chapterId": "bst_11_ch1", "order": 3 },
            { "id": "topic_bst_11_1_4", "title": "Classification of Business Activities", "chapterId": "bst_11_ch1", "order": 4 },
            { "id": "topic_bst_11_1_5", "title": "Business Risks", "chapterId": "bst_11_ch1", "order": 5 }
          ]
        },

        {
          "id": "bst_11_ch2",
          "title": "Forms of Business Organisation",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Sole proprietorship, partnership, HUF, and company forms.",
          "topics": [
            { "id": "topic_bst_11_2_1", "title": "Sole Proprietorship", "chapterId": "bst_11_ch2", "order": 1 },
            { "id": "topic_bst_11_2_2", "title": "Partnership Features & Types", "chapterId": "bst_11_ch2", "order": 2 },
            { "id": "topic_bst_11_2_3", "title": "Hindu Undivided Family (HUF)", "chapterId": "bst_11_ch2", "order": 3 },
            { "id": "topic_bst_11_2_4", "title": "Cooperative Societies", "chapterId": "bst_11_ch2", "order": 4 },
            { "id": "topic_bst_11_2_5", "title": "Company – Private & Public", "chapterId": "bst_11_ch2", "order": 5 },
            { "id": "topic_bst_11_2_6", "title": "Choosing a Form of Organisation", "chapterId": "bst_11_ch2", "order": 6 }
          ]
        },

        {
          "id": "bst_11_ch3",
          "title": "Private, Public and Global Enterprises",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Classification of business enterprises and MNCs.",
          "topics": [
            { "id": "topic_bst_11_3_1", "title": "Private Sector Enterprises", "chapterId": "bst_11_ch3", "order": 1 },
            { "id": "topic_bst_11_3_2", "title": "Public Sector Enterprises", "chapterId": "bst_11_ch3", "order": 2 },
            { "id": "topic_bst_11_3_3", "title": "Government Companies", "chapterId": "bst_11_ch3", "order": 3 },
            { "id": "topic_bst_11_3_4", "title": "MNCs – Features & Role", "chapterId": "bst_11_ch3", "order": 4 },
            { "id": "topic_bst_11_3_5", "title": "Changing Role of Public Sector", "chapterId": "bst_11_ch3", "order": 5 }
          ]
        },
        {
          "id": "bst_11_ch4",
          "title": "Business Services",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Banking, insurance, transportation, warehousing, communication.",
          "topics": [
            { "id": "topic_bst_11_4_1", "title": "Nature of Business Services", "chapterId": "bst_11_ch4", "order": 1 },
            { "id": "topic_bst_11_4_2", "title": "Banking & Types of Accounts", "chapterId": "bst_11_ch4", "order": 2 },
            { "id": "topic_bst_11_4_3", "title": "Insurance — Principles & Types", "chapterId": "bst_11_ch4", "order": 3 },
            { "id": "topic_bst_11_4_4", "title": "Telecom & Postal Services", "chapterId": "bst_11_ch4", "order": 4 },
            { "id": "topic_bst_11_4_5", "title": "Warehousing", "chapterId": "bst_11_ch4", "order": 5 },
            { "id": "topic_bst_11_4_6", "title": "Transportation", "chapterId": "bst_11_ch4", "order": 6 }
          ]
        },
        {
          "id": "bst_11_ch5",
          "title": "Emerging Modes of Business",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "E-business, outsourcing, online transactions.",
          "topics": [
            { "id": "topic_bst_11_5_1", "title": "E-Business Concepts", "chapterId": "bst_11_ch5", "order": 1 },
            { "id": "topic_bst_11_5_2", "title": "E-Business vs Traditional Business", "chapterId": "bst_11_ch5", "order": 2 },
            { "id": "topic_bst_11_5_3", "title": "Online Transactions", "chapterId": "bst_11_ch5", "order": 3 },
            { "id": "topic_bst_11_5_4", "title": "Outsourcing — BPO/KPO", "chapterId": "bst_11_ch5", "order": 4 },
            { "id": "topic_bst_11_5_5", "title": "E-Marketplaces", "chapterId": "bst_11_ch5", "order": 5 }
          ]
        },
        {
          "id": "bst_11_ch6",
          "title": "Social Responsibilities of Business",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "CSR, ethics, environmental protection.",
          "topics": [
            { "id": "topic_bst_11_6_1", "title": "Meaning of Social Responsibility", "chapterId": "bst_11_ch6", "order": 1 },
            { "id": "topic_bst_11_6_2", "title": "Arguments For & Against CSR", "chapterId": "bst_11_ch6", "order": 2 },
            { "id": "topic_bst_11_6_3", "title": "Business & Environmental Protection", "chapterId": "bst_11_ch6", "order": 3 },
            { "id": "topic_bst_11_6_4", "title": "Ethical Business Practices", "chapterId": "bst_11_ch6", "order": 4 }
          ]
        },

        {
          "id": "bst_11_ch7",
          "title": "Formation of a Company",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Stages of company formation and documents required.",
          "topics": [
            { "id": "topic_bst_11_7_1", "title": "Stages of Company Formation", "chapterId": "bst_11_ch7", "order": 1 },
            { "id": "topic_bst_11_7_2", "title": "Promoters & Functions", "chapterId": "bst_11_ch7", "order": 2 },
            { "id": "topic_bst_11_7_3", "title": "Memorandum of Association", "chapterId": "bst_11_ch7", "order": 3 },
            { "id": "topic_bst_11_7_4", "title": "Articles of Association", "chapterId": "bst_11_ch7", "order": 4 },
            { "id": "topic_bst_11_7_5", "title": "Prospectus", "chapterId": "bst_11_ch7", "order": 5 }
          ]
        },

        {
          "id": "bst_11_ch8",
          "title": "Sources of Business Finance",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Short-term, medium-term and long-term sources of finance.",
          "topics": [
            { "id": "topic_bst_11_8_1", "title": "Need for Business Finance", "chapterId": "bst_11_ch8", "order": 1 },
            { "id": "topic_bst_11_8_2", "title": "Short-Term Sources", "chapterId": "bst_11_ch8", "order": 2 },
            { "id": "topic_bst_11_8_3", "title": "Long-Term Sources", "chapterId": "bst_11_ch8", "order": 3 },
            { "id": "topic_bst_11_8_4", "title": "Owned vs Borrowed Capital", "chapterId": "bst_11_ch8", "order": 4 },
            { "id": "topic_bst_11_8_5", "title": "International Financing", "chapterId": "bst_11_ch8", "order": 5 }
          ]
        },

        {
          "id": "bst_11_ch9",
          "title": "Small Business and Entrepreneurship",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Role of small-scale industries and entrepreneurship.",
          "topics": [
            { "id": "topic_bst_11_9_1", "title": "Small-Scale Industries (SSI)", "chapterId": "bst_11_ch9", "order": 1 },
            { "id": "topic_bst_11_9_2", "title": "Role in Indian Economy", "chapterId": "bst_11_ch9", "order": 2 },
            { "id": "topic_bst_11_9_3", "title": "Entrepreneurship Characteristics", "chapterId": "bst_11_ch9", "order": 3 },
            { "id": "topic_bst_11_9_4", "title": "Government Support Schemes", "chapterId": "bst_11_ch9", "order": 4 }
          ]
        },

        {
          "id": "bst_11_ch10",
          "title": "Internal Trade",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Retail and wholesale trade, types of traders and GST.",
          "topics": [
            { "id": "topic_bst_11_10_1", "title": "Retailers: Types & Functions", "chapterId": "bst_11_ch10", "order": 1 },
            { "id": "topic_bst_11_10_2", "title": "Wholesalers", "chapterId": "bst_11_ch10", "order": 2 },
            { "id": "topic_bst_11_10_3", "title": "Chambers of Commerce", "chapterId": "bst_11_ch10", "order": 3 },
            { "id": "topic_bst_11_10_4", "title": "GST Basics", "chapterId": "bst_11_ch10", "order": 4 }
          ]
        },

        {
          "id": "bst_11_ch11",
          "title": "International Trade",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, export/import procedures and foreign trade documentation.",
          "topics": [
            { "id": "topic_bst_11_11_1", "title": "Meaning & Importance", "chapterId": "bst_11_ch11", "order": 1 },
            { "id": "topic_bst_11_11_2", "title": "Export Procedure", "chapterId": "bst_11_ch11", "order": 2 },
            { "id": "topic_bst_11_11_3", "title": "Import Procedure", "chapterId": "bst_11_ch11", "order": 3 },
            { "id": "topic_bst_11_11_4", "title": "Export Documents (Bill of Lading etc.)", "chapterId": "bst_11_ch11", "order": 4 }
          ]
        },

        {
          "id": "bst_11_ch12",
          "title": "Important Business Terms (Appendix)",
          "subject": "Business Studies",
          "classLevel": "11th - Commerce stream",
          "description": "Overview of essential business terms and concepts.",
          "topics": [
            { "id": "topic_bst_11_12_1", "title": "Basic Business Terminology", "chapterId": "bst_11_ch12", "order": 1 },
            { "id": "topic_bst_11_12_2", "title": "Financial Terms", "chapterId": "bst_11_ch12", "order": 2 },
            { "id": "topic_bst_11_12_3", "title": "Global Trade Terms", "chapterId": "bst_11_ch12", "order": 3 }
          ]
        }

      ],
      "Economics": [

        {
          "id": "eco_stats_11_ch1",
          "title": "Introduction",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, scope and functions of statistics in economics.",
          "topics": [
            { "id": "topic_stats_11_1_1", "title": "Meaning of Statistics", "chapterId": "eco_stats_11_ch1", "order": 1 },
            { "id": "topic_stats_11_1_2", "title": "Scope of Statistics", "chapterId": "eco_stats_11_ch1", "order": 2 },
            { "id": "topic_stats_11_1_3", "title": "Functions & Importance", "chapterId": "eco_stats_11_ch1", "order": 3 },
            { "id": "topic_stats_11_1_4", "title": "Limitations of Statistics", "chapterId": "eco_stats_11_ch1", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch2",
          "title": "Collection of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, types, sources and methods of data collection.",
          "topics": [
            { "id": "topic_stats_11_2_1", "title": "Primary & Secondary Data", "chapterId": "eco_stats_11_ch2", "order": 1 },
            { "id": "topic_stats_11_2_2", "title": "Direct & Indirect Investigation", "chapterId": "eco_stats_11_ch2", "order": 2 },
            { "id": "topic_stats_11_2_3", "title": "Sampling Methods", "chapterId": "eco_stats_11_ch2", "order": 3 },
            { "id": "topic_stats_11_2_4", "title": "Census vs Sample", "chapterId": "eco_stats_11_ch2", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch3",
          "title": "Organisation of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Classification and tabulation of data.",
          "topics": [
            { "id": "topic_stats_11_3_1", "title": "Raw Data vs Classified Data", "chapterId": "eco_stats_11_ch3", "order": 1 },
            { "id": "topic_stats_11_3_2", "title": "Frequency Distribution", "chapterId": "eco_stats_11_ch3", "order": 2 },
            { "id": "topic_stats_11_3_3", "title": "Types of Series", "chapterId": "eco_stats_11_ch3", "order": 3 },
            { "id": "topic_stats_11_3_4", "title": "Tabulation", "chapterId": "eco_stats_11_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch4",
          "title": "Presentation of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Textual, tabular, pie charts, bar diagrams and frequency polygons.",
          "topics": [
            { "id": "topic_stats_11_4_1", "title": "Textual & Tabular Presentation", "chapterId": "eco_stats_11_ch4", "order": 1 },
            { "id": "topic_stats_11_4_2", "title": "Bar Diagrams", "chapterId": "eco_stats_11_ch4", "order": 2 },
            { "id": "topic_stats_11_4_3", "title": "Pie Charts", "chapterId": "eco_stats_11_ch4", "order": 3 },
            { "id": "topic_stats_11_4_4", "title": "Frequency Curves", "chapterId": "eco_stats_11_ch4", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch5",
          "title": "Measures of Central Tendency",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Mean, median, mode and their applications.",
          "topics": [
            { "id": "topic_stats_11_5_1", "title": "Arithmetic Mean", "chapterId": "eco_stats_11_ch5", "order": 1 },
            { "id": "topic_stats_11_5_2", "title": "Median", "chapterId": "eco_stats_11_ch5", "order": 2 },
            { "id": "topic_stats_11_5_3", "title": "Mode", "chapterId": "eco_stats_11_ch5", "order": 3 },
            { "id": "topic_stats_11_5_4", "title": "Comparison of Central Measures", "chapterId": "eco_stats_11_ch5", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch6",
          "title": "Measures of Dispersion",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Range, quartile deviation, mean deviation and standard deviation.",
          "topics": [
            { "id": "topic_stats_11_6_1", "title": "Range & Quartile Deviation", "chapterId": "eco_stats_11_ch6", "order": 1 },
            { "id": "topic_stats_11_6_2", "title": "Mean Deviation", "chapterId": "eco_stats_11_ch6", "order": 2 },
            { "id": "topic_stats_11_6_3", "title": "Standard Deviation", "chapterId": "eco_stats_11_ch6", "order": 3 },
            { "id": "topic_stats_11_6_4", "title": "Lorenz Curve", "chapterId": "eco_stats_11_ch6", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch7",
          "title": "Correlation",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Karl Pearson’s and Spearman’s methods of correlation.",
          "topics": [
            { "id": "topic_stats_11_7_1", "title": "Meaning & Types of Correlation", "chapterId": "eco_stats_11_ch7", "order": 1 },
            { "id": "topic_stats_11_7_2", "title": "Scatter Diagram", "chapterId": "eco_stats_11_ch7", "order": 2 },
            { "id": "topic_stats_11_7_3", "title": "Karl Pearson's Method", "chapterId": "eco_stats_11_ch7", "order": 3 },
            { "id": "topic_stats_11_7_4", "title": "Spearman’s Rank Method", "chapterId": "eco_stats_11_ch7", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch8",
          "title": "Index Numbers",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, uses, types and consumer price index.",
          "topics": [
            { "id": "topic_stats_11_8_1", "title": "Meaning & Importance", "chapterId": "eco_stats_11_ch8", "order": 1 },
            { "id": "topic_stats_11_8_2", "title": "Laspeyres & Paasche Indices", "chapterId": "eco_stats_11_ch8", "order": 2 },
            { "id": "topic_stats_11_8_3", "title": "Consumer Price Index", "chapterId": "eco_stats_11_ch8", "order": 3 },
            { "id": "topic_stats_11_8_4", "title": "Inflation Measurement", "chapterId": "eco_stats_11_ch8", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch9",
          "title": "Use of Statistical Tools",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Application of all statistical methods in economics.",
          "topics": [
            { "id": "topic_stats_11_9_1", "title": "Interpretation of Mean, Median, Mode", "chapterId": "eco_stats_11_ch9", "order": 1 },
            { "id": "topic_stats_11_9_2", "title": "Interpretation of Dispersion", "chapterId": "eco_stats_11_ch9", "order": 2 },
            { "id": "topic_stats_11_9_3", "title": "Interpretation of Correlation", "chapterId": "eco_stats_11_ch9", "order": 3 }
          ]
        },
        {
          "id": "eco_ied_11_ch1",
          "title": "Indian Economy on the Eve of Independence",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Economic conditions of India in 1947.",
          "topics": [
            { "id": "topic_ied_11_1_1", "title": "State of Agriculture", "chapterId": "eco_ied_11_ch1", "order": 1 },
            { "id": "topic_ied_11_1_2", "title": "Industrial Backwardness", "chapterId": "eco_ied_11_ch1", "order": 2 },
            { "id": "topic_ied_11_1_3", "title": "Foreign Trade", "chapterId": "eco_ied_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch2",
          "title": "Indian Economy (1950–1990)",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Features of Indian planning post-independence.",
          "topics": [
            { "id": "topic_ied_11_2_1", "title": "Five-Year Plans", "chapterId": "eco_ied_11_ch2", "order": 1 },
            { "id": "topic_ied_11_2_2", "title": "Agriculture Reforms", "chapterId": "eco_ied_11_ch2", "order": 2 },
            { "id": "topic_ied_11_2_3", "title": "Public & Private Sectors", "chapterId": "eco_ied_11_ch2", "order": 3 },
            { "id": "topic_ied_11_2_4", "title": "Import Substitution", "chapterId": "eco_ied_11_ch2", "order": 4 }
          ]
        },

        {
          "id": "eco_ied_11_ch3",
          "title": "Economic Reforms Since 1991",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Liberalisation, privatisation and globalisation.",
          "topics": [
            { "id": "topic_ied_11_3_1", "title": "Need for Reforms", "chapterId": "eco_ied_11_ch3", "order": 1 },
            { "id": "topic_ied_11_3_2", "title": "Liberalisation Measures", "chapterId": "eco_ied_11_ch3", "order": 2 },
            { "id": "topic_ied_11_3_3", "title": "Privatisation & Disinvestment", "chapterId": "eco_ied_11_ch3", "order": 3 },
            { "id": "topic_ied_11_3_4", "title": "Globalisation & WTO", "chapterId": "eco_ied_11_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_ied_11_ch4",
          "title": "Poverty",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Types, causes and anti-poverty measures.",
          "topics": [
            { "id": "topic_ied_11_4_1", "title": "Types of Poverty", "chapterId": "eco_ied_11_ch4", "order": 1 },
            { "id": "topic_ied_11_4_2", "title": "Causes of Poverty", "chapterId": "eco_ied_11_ch4", "order": 2 },
            { "id": "topic_ied_11_4_3", "title": "Government Measures", "chapterId": "eco_ied_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch5",
          "title": "Human Capital Formation",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Education, health and skill formation.",
          "topics": [
            { "id": "topic_ied_11_5_1", "title": "Sources of Human Capital", "chapterId": "eco_ied_11_ch5", "order": 1 },
            { "id": "topic_ied_11_5_2", "title": "Role of Education & Health", "chapterId": "eco_ied_11_ch5", "order": 2 },
            { "id": "topic_ied_11_5_3", "title": "Human Capital vs Human Development", "chapterId": "eco_ied_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch6",
          "title": "Rural Development",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Agricultural development, microfinance and rural credit.",
          "topics": [
            { "id": "topic_ied_11_6_1", "title": "Rural Credit Structure", "chapterId": "eco_ied_11_ch6", "order": 1 },
            { "id": "topic_ied_11_6_2", "title": "Agricultural Marketing", "chapterId": "eco_ied_11_ch6", "order": 2 },
            { "id": "topic_ied_11_6_3", "title": "Organic Farming", "chapterId": "eco_ied_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch7",
          "title": "Employment: Growth, Informalisation and Other Issues",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Types of employment and workforce structure.",
          "topics": [
            { "id": "topic_ied_11_7_1", "title": "Types of Workers", "chapterId": "eco_ied_11_ch7", "order": 1 },
            { "id": "topic_ied_11_7_2", "title": "Informalisation of Workforce", "chapterId": "eco_ied_11_ch7", "order": 2 },
            { "id": "topic_ied_11_7_3", "title": "Unemployment Issues", "chapterId": "eco_ied_11_ch7", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch8",
          "title": "Infrastructure",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Energy, health and education as infrastructure.",
          "topics": [
            { "id": "topic_ied_11_8_1", "title": "Meaning & Types of Infrastructure", "chapterId": "eco_ied_11_ch8", "order": 1 },
            { "id": "topic_ied_11_8_2", "title": "Health Infrastructure", "chapterId": "eco_ied_11_ch8", "order": 2 },
            { "id": "topic_ied_11_8_3", "title": "Energy & Transport", "chapterId": "eco_ied_11_ch8", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch9",
          "title": "Environment and Sustainable Development",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Environmental issues, pollution and sustainable development.",
          "topics": [
            { "id": "topic_ied_11_9_1", "title": "Environmental Degradation Causes", "chapterId": "eco_ied_11_ch9", "order": 1 },
            { "id": "topic_ied_11_9_2", "title": "Pollution Types", "chapterId": "eco_ied_11_ch9", "order": 2 },
            { "id": "topic_ied_11_9_3", "title": "Strategies for Sustainability", "chapterId": "eco_ied_11_ch9", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch10",
          "title": "Comparative Development Experiences of India and Neighbours",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Comparison of India with China & Pakistan.",
          "topics": [
            { "id": "topic_ied_11_10_1", "title": "India vs China", "chapterId": "eco_ied_11_ch10", "order": 1 },
            { "id": "topic_ied_11_10_2", "title": "India vs Pakistan", "chapterId": "eco_ied_11_ch10", "order": 2 },
            { "id": "topic_ied_11_10_3", "title": "Indicators of Development", "chapterId": "eco_ied_11_ch10", "order": 3 }
          ]
        }

      ],
      "English": [
        {
          "id": "eng_11_hb_ch1",
          "title": "The Portrait of a Lady",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A story about the author's grandmother and changing lifestyles.",
          "topics": [
            {
              "id": "topic_eng_11_hb_1_1",
              "title": "Summary",
              "chapterId": "eng_11_hb_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_1_2",
              "title": "Themes & Character",
              "chapterId": "eng_11_hb_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch2",
          "title": "We're Not Afraid to Die... If We Can All Be Together",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A thrilling story of courage and survival at sea.",
          "topics": [
            {
              "id": "topic_eng_11_hb_2_1",
              "title": "Adventure Summary",
              "chapterId": "eng_11_hb_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_2_2",
              "title": "Courage & Family Bond",
              "chapterId": "eng_11_hb_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch3",
          "title": "Discovering Tut: The Saga Continues",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Investigating King Tut’s mummy using modern technology.",
          "topics": [
            {
              "id": "topic_eng_11_hb_3_1",
              "title": "Archaeological Findings",
              "chapterId": "eng_11_hb_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_3_2",
              "title": "Scientific Investigation",
              "chapterId": "eng_11_hb_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch4",
          "title": "Landscape of the Soul",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Differences between Western and Chinese art.",
          "topics": [
            {
              "id": "topic_eng_11_hb_4_1",
              "title": "Art Comparison",
              "chapterId": "eng_11_hb_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_4_2",
              "title": "Philosophical Meanings",
              "chapterId": "eng_11_hb_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch5",
          "title": "The Ailing Planet: The Green Movement’s Role",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Environmental crisis and responsible development.",
          "topics": [
            {
              "id": "topic_eng_11_hb_5_1",
              "title": "Environmental Issues",
              "chapterId": "eng_11_hb_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_5_2",
              "title": "Green Movement Insights",
              "chapterId": "eng_11_hb_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch6",
          "title": "The Browning Version",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A dramatic lesson about a strict teacher and his student.",
          "topics": [
            {
              "id": "topic_eng_11_hb_6_1",
              "title": "Plot & Characters",
              "chapterId": "eng_11_hb_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_6_2",
              "title": "Themes of Respect & Regret",
              "chapterId": "eng_11_hb_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch7",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Reflecting on the loss of childhood innocence.",
          "topics": [
            {
              "id": "topic_eng_11_hb_7_1",
              "title": "Childhood vs Adulthood",
              "chapterId": "eng_11_hb_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_7_2",
              "title": "Themes & Reflection",
              "chapterId": "eng_11_hb_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch8",
          "title": "The Adventure",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A science-fiction story involving parallel worlds.",
          "topics": [
            {
              "id": "topic_eng_11_hb_8_1",
              "title": "Parallel World Concept",
              "chapterId": "eng_11_hb_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_8_2",
              "title": "Science & Imagination",
              "chapterId": "eng_11_hb_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_1",
          "title": "A Photograph",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on memory, loss and nostalgia.",
          "topics": [
            {
              "id": "topic_eng_11_poem_1_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_1",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_1_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_1",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_1_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_1",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_2",
          "title": "The Laburnum Top",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem depicting a goldfinch’s visit to a silent tree.",
          "topics": [
            {
              "id": "topic_eng_11_poem_2_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_2",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_2_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_2",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_2_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_2",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_3",
          "title": "The Voice of the Rain",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A lyrical conversation between the poet and the rain.",
          "topics": [
            {
              "id": "topic_eng_11_poem_3_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_3",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_3_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_3",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_3_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_3",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_4",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on transition from childhood to adulthood.",
          "topics": [
            {
              "id": "topic_eng_11_poem_4_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_4",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_4_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_4",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_4_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_4",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_5",
          "title": "Father to Son",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem expressing a father’s emotional distance from his son.",
          "topics": [
            {
              "id": "topic_eng_11_poem_5_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_5",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_5_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_5",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_5_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_5",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_snap_ch1",
          "title": "The Summer of the Beautiful White Horse",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Story of two Armenian boys and a stolen horse.",
          "topics": [
            {
              "id": "topic_eng_11_snap_1_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_1_2",
              "title": "Themes of Honesty & Culture",
              "chapterId": "eng_11_snap_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch2",
          "title": "The Address",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A daughter revisits her mother's possessions after war.",
          "topics": [
            {
              "id": "topic_eng_11_snap_2_1",
              "title": "Memory & Loss",
              "chapterId": "eng_11_snap_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_2_2",
              "title": "Symbolism & Themes",
              "chapterId": "eng_11_snap_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch3",
          "title": "Ranga’s Marriage",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A humorous tale about arranged marriage traditions.",
          "topics": [
            {
              "id": "topic_eng_11_snap_3_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_3_2",
              "title": "Cultural Themes",
              "chapterId": "eng_11_snap_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch4",
          "title": "Albert Einstein at School",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Einstein’s struggles with rigid schooling.",
          "topics": [
            {
              "id": "topic_eng_11_snap_4_1",
              "title": "Einstein’s Conflicts",
              "chapterId": "eng_11_snap_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_4_2",
              "title": "Educational Commentary",
              "chapterId": "eng_11_snap_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch5",
          "title": "Mother’s Day",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A play highlighting family responsibilities.",
          "topics": [
            {
              "id": "topic_eng_11_snap_5_1",
              "title": "Family Roles & Lessons",
              "chapterId": "eng_11_snap_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_5_2",
              "title": "Humor & Satire",
              "chapterId": "eng_11_snap_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch6",
          "title": "The Ghat of the Only World",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A tribute to a friend who passed away.",
          "topics": [
            {
              "id": "topic_eng_11_snap_6_1",
              "title": "Friendship & Memory",
              "chapterId": "eng_11_snap_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_6_2",
              "title": "Tone & Style",
              "chapterId": "eng_11_snap_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch7",
          "title": "Birth",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A doctor's struggle to save a newborn baby.",
          "topics": [
            {
              "id": "topic_eng_11_snap_7_1",
              "title": "Medical Challenges",
              "chapterId": "eng_11_snap_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_7_2",
              "title": "Perseverance Theme",
              "chapterId": "eng_11_snap_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch8",
          "title": "The Tale of Melon City",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A satirical poem-story about a foolish king.",
          "topics": [
            {
              "id": "topic_eng_11_snap_8_1",
              "title": "Satirical Elements",
              "chapterId": "eng_11_snap_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_8_2",
              "title": "Themes & Message",
              "chapterId": "eng_11_snap_ch8",
              "order": 2
            }
          ]
        }
      ]
    },
    "11th - Arts stream": {
      "History": [
        {
          "id": "hist_11_world_ch1",
          "title": "From the Beginning of Time",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Human evolution, early societies, stone age and migration.",
          "topics": [
            { "id": "topic_hist_11_world_1_1", "title": "Human Evolution Stages", "chapterId": "hist_11_world_ch1", "order": 1 },
            { "id": "topic_hist_11_world_1_2", "title": "Hunter-Gatherer Societies", "chapterId": "hist_11_world_ch1", "order": 2 },
            { "id": "topic_hist_11_world_1_3", "title": "Tool Making & Fire", "chapterId": "hist_11_world_ch1", "order": 3 },
            { "id": "topic_hist_11_world_1_4", "title": "Early Art & Culture", "chapterId": "hist_11_world_ch1", "order": 4 },
            { "id": "topic_hist_11_world_1_5", "title": "Migration of Early Humans", "chapterId": "hist_11_world_ch1", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch2",
          "title": "Writing and City Life",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Mesopotamian civilisation, invention of writing and urban life.",
          "topics": [
            { "id": "topic_hist_11_world_2_1", "title": "Mesopotamian Cities", "chapterId": "hist_11_world_ch2", "order": 1 },
            { "id": "topic_hist_11_world_2_2", "title": "Invention of Writing", "chapterId": "hist_11_world_ch2", "order": 2 },
            { "id": "topic_hist_11_world_2_3", "title": "Early Administration", "chapterId": "hist_11_world_ch2", "order": 3 },
            { "id": "topic_hist_11_world_2_4", "title": "Trade & Economy", "chapterId": "hist_11_world_ch2", "order": 4 },
            { "id": "topic_hist_11_world_2_5", "title": "Life in Mesopotamia", "chapterId": "hist_11_world_ch2", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch3",
          "title": "An Empire Across Three Continents",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Political, social and cultural developments of the Roman Empire.",
          "topics": [
            { "id": "topic_hist_11_world_3_1", "title": "Rise of the Roman Empire", "chapterId": "hist_11_world_ch3", "order": 1 },
            { "id": "topic_hist_11_world_3_2", "title": "Social Structure", "chapterId": "hist_11_world_ch3", "order": 2 },
            { "id": "topic_hist_11_world_3_3", "title": "Slavery & Economy", "chapterId": "hist_11_world_ch3", "order": 3 },
            { "id": "topic_hist_11_world_3_4", "title": "Army & Administration", "chapterId": "hist_11_world_ch3", "order": 4 },
            { "id": "topic_hist_11_world_3_5", "title": "Decline of Rome", "chapterId": "hist_11_world_ch3", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch4",
          "title": "The Central Islamic Lands",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Rise of Islam, Caliphate, social structure and cultural achievements.",
          "topics": [
            { "id": "topic_hist_11_world_4_1", "title": "Rise of Islam", "chapterId": "hist_11_world_ch4", "order": 1 },
            { "id": "topic_hist_11_world_4_2", "title": "Umayyad & Abbasid Caliphates", "chapterId": "hist_11_world_ch4", "order": 2 },
            { "id": "topic_hist_11_world_4_3", "title": "Economic Structure", "chapterId": "hist_11_world_ch4", "order": 3 },
            { "id": "topic_hist_11_world_4_4", "title": "Role of Ulama", "chapterId": "hist_11_world_ch4", "order": 4 },
            { "id": "topic_hist_11_world_4_5", "title": "Cultural Contributions", "chapterId": "hist_11_world_ch4", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch5",
          "title": "Nomadic Empires",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Mongol empire, Genghis Khan, warfare and administration.",
          "topics": [
            { "id": "topic_hist_11_world_5_1", "title": "Mongol Society", "chapterId": "hist_11_world_ch5", "order": 1 },
            { "id": "topic_hist_11_world_5_2", "title": "Rise of Genghis Khan", "chapterId": "hist_11_world_ch5", "order": 2 },
            { "id": "topic_hist_11_world_5_3", "title": "Military Organisation", "chapterId": "hist_11_world_ch5", "order": 3 },
            { "id": "topic_hist_11_world_5_4", "title": "Expansion of Empire", "chapterId": "hist_11_world_ch5", "order": 4 },
            { "id": "topic_hist_11_world_5_5", "title": "Decline of Mongols", "chapterId": "hist_11_world_ch5", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch6",
          "title": "The Three Orders",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Medieval European society — clergy, nobility and peasants.",
          "topics": [
            { "id": "topic_hist_11_world_6_1", "title": "Feudal Society Structure", "chapterId": "hist_11_world_ch6", "order": 1 },
            { "id": "topic_hist_11_world_6_2", "title": "Role of the Clergy", "chapterId": "hist_11_world_ch6", "order": 2 },
            { "id": "topic_hist_11_world_6_3", "title": "Nobility & Knights", "chapterId": "hist_11_world_ch6", "order": 3 },
            { "id": "topic_hist_11_world_6_4", "title": "Peasants & Serfs", "chapterId": "hist_11_world_ch6", "order": 4 },
            { "id": "topic_hist_11_world_6_5", "title": "Crisis of Feudalism", "chapterId": "hist_11_world_ch6", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch7",
          "title": "Changing Cultural Traditions",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Renaissance, humanism, art and scientific revolution.",
          "topics": [
            { "id": "topic_hist_11_world_7_1", "title": "Renaissance Origins", "chapterId": "hist_11_world_ch7", "order": 1 },
            { "id": "topic_hist_11_world_7_2", "title": "Humanism", "chapterId": "hist_11_world_ch7", "order": 2 },
            { "id": "topic_hist_11_world_7_3", "title": "Art Developments", "chapterId": "hist_11_world_ch7", "order": 3 },
            { "id": "topic_hist_11_world_7_4", "title": "Scientific Revolution", "chapterId": "hist_11_world_ch7", "order": 4 },
            { "id": "topic_hist_11_world_7_5", "title": "Impact on Europe", "chapterId": "hist_11_world_ch7", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch8",
          "title": "Confrontation of Cultures",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "European expansion, conquest of Americas and slave trade.",
          "topics": [
            { "id": "topic_hist_11_world_8_1", "title": "Voyages of Exploration", "chapterId": "hist_11_world_ch8", "order": 1 },
            { "id": "topic_hist_11_world_8_2", "title": "Conquest of the Americas", "chapterId": "hist_11_world_ch8", "order": 2 },
            { "id": "topic_hist_11_world_8_3", "title": "Colonisation Process", "chapterId": "hist_11_world_ch8", "order": 3 },
            { "id": "topic_hist_11_world_8_4", "title": "Slave Trade", "chapterId": "hist_11_world_ch8", "order": 4 },
            { "id": "topic_hist_11_world_8_5", "title": "Cultural Exchange", "chapterId": "hist_11_world_ch8", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch9",
          "title": "The Industrial Revolution",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Changes in production, technology, labour and society.",
          "topics": [
            { "id": "topic_hist_11_world_9_1", "title": "Causes of Industrial Revolution", "chapterId": "hist_11_world_ch9", "order": 1 },
            { "id": "topic_hist_11_world_9_2", "title": "Technological Innovations", "chapterId": "hist_11_world_ch9", "order": 2 },
            { "id": "topic_hist_11_world_9_3", "title": "Urbanisation", "chapterId": "hist_11_world_ch9", "order": 3 },
            { "id": "topic_hist_11_world_9_4", "title": "Capitalism & Labour Class", "chapterId": "hist_11_world_ch9", "order": 4 },
            { "id": "topic_hist_11_world_9_5", "title": "Spread Beyond Britain", "chapterId": "hist_11_world_ch9", "order": 5 }
          ]
        },

        {
          "id": "hist_11_world_ch10",
          "title": "Displacing Indigenous Peoples",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Native Americans, aboriginal people and colonial expansion.",
          "topics": [
            { "id": "topic_hist_11_world_10_1", "title": "Native American Societies", "chapterId": "hist_11_world_ch10", "order": 1 },
            { "id": "topic_hist_11_world_10_2", "title": "European Settlers", "chapterId": "hist_11_world_ch10", "order": 2 },
            { "id": "topic_hist_11_world_10_3", "title": "Displacement Policies", "chapterId": "hist_11_world_ch10", "order": 3 },
            { "id": "topic_hist_11_world_10_4", "title": "Impact on Indigenous People", "chapterId": "hist_11_world_ch10", "order": 4 }
          ]
        },

        {
          "id": "hist_11_world_ch11",
          "title": "Paths to Modernisation",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Modernisation in Japan and China.",
          "topics": [
            { "id": "topic_hist_11_world_11_1", "title": "Meiji Restoration (Japan)", "chapterId": "hist_11_world_ch11", "order": 1 },
            { "id": "topic_hist_11_world_11_2", "title": "Industrial Growth in Japan", "chapterId": "hist_11_world_ch11", "order": 2 },
            { "id": "topic_hist_11_world_11_3", "title": "China's Modernisation Attempts", "chapterId": "hist_11_world_ch11", "order": 3 },
            { "id": "topic_hist_11_world_11_4", "title": "Comparative Analysis", "chapterId": "hist_11_world_ch11", "order": 4 }
          ]
        }, {
          "id": "hist_11_india1_ch1",
          "title": "From the Beginning of Time (India)",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Prehistoric India, hunter-gatherers and early tools.",
          "topics": [
            { "id": "topic_hist_11_india1_1_1", "title": "Hunter-Gatherers in India", "chapterId": "hist_11_india1_ch1", "order": 1 },
            { "id": "topic_hist_11_india1_1_2", "title": "Palaeolithic & Mesolithic Tools", "chapterId": "hist_11_india1_ch1", "order": 2 },
            { "id": "topic_hist_11_india1_1_3", "title": "Habitation Sites & Caves", "chapterId": "hist_11_india1_ch1", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india1_ch2",
          "title": "Early Cities: Harappan Civilisation",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Features of Indus Valley civilisation.",
          "topics": [
            { "id": "topic_hist_11_india1_2_1", "title": "Town Planning", "chapterId": "hist_11_india1_ch2", "order": 1 },
            { "id": "topic_hist_11_india1_2_2", "title": "Craft Production", "chapterId": "hist_11_india1_ch2", "order": 2 },
            { "id": "topic_hist_11_india1_2_3", "title": "Trade & Communication", "chapterId": "hist_11_india1_ch2", "order": 3 },
            { "id": "topic_hist_11_india1_2_4", "title": "Religion & Culture", "chapterId": "hist_11_india1_ch2", "order": 4 }
          ]
        },

        {
          "id": "hist_11_india1_ch3",
          "title": "Kinship, Caste and Class",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Early Indian society and social structures.",
          "topics": [
            { "id": "topic_hist_11_india1_3_1", "title": "Kinship Patterns", "chapterId": "hist_11_india1_ch3", "order": 1 },
            { "id": "topic_hist_11_india1_3_2", "title": "Varnashrama System", "chapterId": "hist_11_india1_ch3", "order": 2 },
            { "id": "topic_hist_11_india1_3_3", "title": "Class Hierarchies", "chapterId": "hist_11_india1_ch3", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india1_ch4",
          "title": "Thinkers, Beliefs and Buildings",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Religious developments: Buddhism, Jainism and temples.",
          "topics": [
            { "id": "topic_hist_11_india1_4_1", "title": "Teachings of Buddha", "chapterId": "hist_11_india1_ch4", "order": 1 },
            { "id": "topic_hist_11_india1_4_2", "title": "Jainism Philosophy", "chapterId": "hist_11_india1_ch4", "order": 2 },
            { "id": "topic_hist_11_india1_4_3", "title": "Stupa Architecture", "chapterId": "hist_11_india1_ch4", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india1_ch5",
          "title": "Political and Economic History: Mauryan Empire",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Mauryan administration, economy and inscriptions.",
          "topics": [
            { "id": "topic_hist_11_india1_5_1", "title": "Administration System", "chapterId": "hist_11_india1_ch5", "order": 1 },
            { "id": "topic_hist_11_india1_5_2", "title": "Economy & Taxation", "chapterId": "hist_11_india1_ch5", "order": 2 },
            { "id": "topic_hist_11_india1_5_3", "title": "Ashokan Inscriptions", "chapterId": "hist_11_india1_ch5", "order": 3 }
          ]
        }, {
          "id": "hist_11_india2_ch1",
          "title": "The Gupta and Post-Gupta Period",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Political, economic and cultural achievements.",
          "topics": [
            { "id": "topic_hist_11_india2_1_1", "title": "Gupta Administration", "chapterId": "hist_11_india2_ch1", "order": 1 },
            { "id": "topic_hist_11_india2_1_2", "title": "Economic Prosperity", "chapterId": "hist_11_india2_ch1", "order": 2 },
            { "id": "topic_hist_11_india2_1_3", "title": "Growth of Sanskrit Literature", "chapterId": "hist_11_india2_ch1", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india2_ch2",
          "title": "The Cholas",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Chola administration, trade, economy and culture.",
          "topics": [
            { "id": "topic_hist_11_india2_2_1", "title": "Chola Administration", "chapterId": "hist_11_india2_ch2", "order": 1 },
            { "id": "topic_hist_11_india2_2_2", "title": "Temple Economy", "chapterId": "hist_11_india2_ch2", "order": 2 },
            { "id": "topic_hist_11_india2_2_3", "title": "Cultural Achievements", "chapterId": "hist_11_india2_ch2", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india2_ch3",
          "title": "The Delhi Sultanate",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Political structure, administration and social relations.",
          "topics": [
            { "id": "topic_hist_11_india2_3_1", "title": "Slave, Khalji & Tughlaq Dynasties", "chapterId": "hist_11_india2_ch3", "order": 1 },
            { "id": "topic_hist_11_india2_3_2", "title": "Iqta System", "chapterId": "hist_11_india2_ch3", "order": 2 },
            { "id": "topic_hist_11_india2_3_3", "title": "Society & Culture", "chapterId": "hist_11_india2_ch3", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india2_ch4",
          "title": "The Mughal Empire",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Political history, mansabdari system, art and economy.",
          "topics": [
            { "id": "topic_hist_11_india2_4_1", "title": "Babur to Aurangzeb", "chapterId": "hist_11_india2_ch4", "order": 1 },
            { "id": "topic_hist_11_india2_4_2", "title": "Mansabdari & Jagirdari", "chapterId": "hist_11_india2_ch4", "order": 2 },
            { "id": "topic_hist_11_india2_4_3", "title": "Agrarian System", "chapterId": "hist_11_india2_ch4", "order": 3 },
            { "id": "topic_hist_11_india2_4_4", "title": "Art & Architecture", "chapterId": "hist_11_india2_ch4", "order": 4 }
          ]
        },

        {
          "id": "hist_11_india2_ch5",
          "title": "Colonialism and The Rural Society",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "British revenue systems and rural changes.",
          "topics": [
            { "id": "topic_hist_11_india2_5_1", "title": "Permanent Settlement", "chapterId": "hist_11_india2_ch5", "order": 1 },
            { "id": "topic_hist_11_india2_5_2", "title": "Ryotwari & Mahalwari", "chapterId": "hist_11_india2_ch5", "order": 2 },
            { "id": "topic_hist_11_india2_5_3", "title": "Impact on Peasantry", "chapterId": "hist_11_india2_ch5", "order": 3 }
          ]
        },

        {
          "id": "hist_11_india2_ch6",
          "title": "Mahatma Gandhi and the Nationalist Movement",
          "subject": "History",
          "classLevel": "11th - Arts stream",
          "description": "Gandhian movements, mass mobilisation and independence.",
          "topics": [
            { "id": "topic_hist_11_india2_6_1", "title": "Gandhi’s Arrival & Early Movements", "chapterId": "hist_11_india2_ch6", "order": 1 },
            { "id": "topic_hist_11_india2_6_2", "title": "Non-Cooperation & Civil Disobedience", "chapterId": "hist_11_india2_ch6", "order": 2 },
            { "id": "topic_hist_11_india2_6_3", "title": "Quit India Movement", "chapterId": "hist_11_india2_ch6", "order": 3 },
            { "id": "topic_hist_11_india2_6_4", "title": "Gandhi’s Ideology", "chapterId": "hist_11_india2_ch6", "order": 4 }
          ]
        }

      ],
      "Geography": [

        {
          "id": "geo_11_fund_ch1",
          "title": "Geography as a Discipline",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Nature, scope, branches and approaches of geography.",
          "topics": [
            { "id": "topic_geo_11_fund_1_1", "title": "Nature of Geography", "chapterId": "geo_11_fund_ch1", "order": 1 },
            { "id": "topic_geo_11_fund_1_2", "title": "Branches of Geography", "chapterId": "geo_11_fund_ch1", "order": 2 },
            { "id": "topic_geo_11_fund_1_3", "title": "Human & Physical Geography", "chapterId": "geo_11_fund_ch1", "order": 3 },
            { "id": "topic_geo_11_fund_1_4", "title": "Geography & other Sciences", "chapterId": "geo_11_fund_ch1", "order": 4 }
          ]
        },

        {
          "id": "geo_11_fund_ch2",
          "title": "The Earth",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Earth’s interior, seismic waves and continental drift.",
          "topics": [
            { "id": "topic_geo_11_fund_2_1", "title": "Earth’s Interior Layers", "chapterId": "geo_11_fund_ch2", "order": 1 },
            { "id": "topic_geo_11_fund_2_2", "title": "Continental Drift Theory", "chapterId": "geo_11_fund_ch2", "order": 2 },
            { "id": "topic_geo_11_fund_2_3", "title": "Plate Tectonics", "chapterId": "geo_11_fund_ch2", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch3",
          "title": "Interior of the Earth",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Seismic waves and earth's structure.",
          "topics": [
            { "id": "topic_geo_11_fund_3_1", "title": "Nature of Seismic Waves", "chapterId": "geo_11_fund_ch3", "order": 1 },
            { "id": "topic_geo_11_fund_3_2", "title": "Earthquake & Measurement", "chapterId": "geo_11_fund_ch3", "order": 2 },
            { "id": "topic_geo_11_fund_3_3", "title": "Structure of Earth’s Interior", "chapterId": "geo_11_fund_ch3", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch4",
          "title": "Distribution of Oceans and Continents",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Wegener’s theory, plate movements and continental drift.",
          "topics": [
            { "id": "topic_geo_11_fund_4_1", "title": "Wegener’s Continental Drift", "chapterId": "geo_11_fund_ch4", "order": 1 },
            { "id": "topic_geo_11_fund_4_2", "title": "Sea Floor Spreading", "chapterId": "geo_11_fund_ch4", "order": 2 },
            { "id": "topic_geo_11_fund_4_3", "title": "Plate Movements", "chapterId": "geo_11_fund_ch4", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch5",
          "title": "Minerals and Rocks",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Formation and classification of minerals and rocks.",
          "topics": [
            { "id": "topic_geo_11_fund_5_1", "title": "Types of Minerals", "chapterId": "geo_11_fund_ch5", "order": 1 },
            { "id": "topic_geo_11_fund_5_2", "title": "Igneous, Sedimentary & Metamorphic Rocks", "chapterId": "geo_11_fund_ch5", "order": 2 },
            { "id": "topic_geo_11_fund_5_3", "title": "Rock Cycle", "chapterId": "geo_11_fund_ch5", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch6",
          "title": "Geomorphic Processes",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Weathering, erosion, mass wasting and geomorphic agents.",
          "topics": [
            { "id": "topic_geo_11_fund_6_1", "title": "Weathering Types", "chapterId": "geo_11_fund_ch6", "order": 1 },
            { "id": "topic_geo_11_fund_6_2", "title": "Mass Wasting", "chapterId": "geo_11_fund_ch6", "order": 2 },
            { "id": "topic_geo_11_fund_6_3", "title": "Erosion & Deposition", "chapterId": "geo_11_fund_ch6", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch7",
          "title": "Landforms and their Evolution",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Work of rivers, wind, glacier and waves.",
          "topics": [
            { "id": "topic_geo_11_fund_7_1", "title": "River Landforms", "chapterId": "geo_11_fund_ch7", "order": 1 },
            { "id": "topic_geo_11_fund_7_2", "title": "Glacial Landforms", "chapterId": "geo_11_fund_ch7", "order": 2 },
            { "id": "topic_geo_11_fund_7_3", "title": "Wind & Wave Action", "chapterId": "geo_11_fund_ch7", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch8",
          "title": "Composition and Structure of the Atmosphere",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Layers and composition of Earth's atmosphere.",
          "topics": [
            { "id": "topic_geo_11_fund_8_1", "title": "Atmospheric Composition", "chapterId": "geo_11_fund_ch8", "order": 1 },
            { "id": "topic_geo_11_fund_8_2", "title": "Structure: Troposphere to Exosphere", "chapterId": "geo_11_fund_ch8", "order": 2 },
            { "id": "topic_geo_11_fund_8_3", "title": "Ozone Layer", "chapterId": "geo_11_fund_ch8", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch9",
          "title": "Solar Radiation, Heat Balance and Temperature",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Heat budget, temperature distribution and inversion.",
          "topics": [
            { "id": "topic_geo_11_fund_9_1", "title": "Insolation", "chapterId": "geo_11_fund_ch9", "order": 1 },
            { "id": "topic_geo_11_fund_9_2", "title": "Heat Budget", "chapterId": "geo_11_fund_ch9", "order": 2 },
            { "id": "topic_geo_11_fund_9_3", "title": "Temperature Inversion", "chapterId": "geo_11_fund_ch9", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch10",
          "title": "Atmospheric Circulation and Weather Systems",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Wind circulation, cyclones, monsoon systems.",
          "topics": [
            { "id": "topic_geo_11_fund_10_1", "title": "Pressure Belts", "chapterId": "geo_11_fund_ch10", "order": 1 },
            { "id": "topic_geo_11_fund_10_2", "title": "Wind Systems", "chapterId": "geo_11_fund_ch10", "order": 2 },
            { "id": "topic_geo_11_fund_10_3", "title": "Cyclones & Anticyclones", "chapterId": "geo_11_fund_ch10", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch11",
          "title": "Water in the Atmosphere",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Humidity, condensation, clouds and rainfall.",
          "topics": [
            { "id": "topic_geo_11_fund_11_1", "title": "Humidity & Evaporation", "chapterId": "geo_11_fund_ch11", "order": 1 },
            { "id": "topic_geo_11_fund_11_2", "title": "Types of Clouds", "chapterId": "geo_11_fund_ch11", "order": 2 },
            { "id": "topic_geo_11_fund_11_3", "title": "Forms of Precipitation", "chapterId": "geo_11_fund_ch11", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch12",
          "title": "World Climate and Climate Change",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Climate classification and climate change.",
          "topics": [
            { "id": "topic_geo_11_fund_12_1", "title": "Koppen’s Climate Classification", "chapterId": "geo_11_fund_ch12", "order": 1 },
            { "id": "topic_geo_11_fund_12_2", "title": "Factors Affecting Climate", "chapterId": "geo_11_fund_ch12", "order": 2 },
            { "id": "topic_geo_11_fund_12_3", "title": "Global Warming Effects", "chapterId": "geo_11_fund_ch12", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch13",
          "title": "Life on the Earth",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Biodiversity, ecosystems and biomes.",
          "topics": [
            { "id": "topic_geo_11_fund_13_1", "title": "Ecosystem Components", "chapterId": "geo_11_fund_ch13", "order": 1 },
            { "id": "topic_geo_11_fund_13_2", "title": "Major Biomes", "chapterId": "geo_11_fund_ch13", "order": 2 },
            { "id": "topic_geo_11_fund_13_3", "title": "Human-Environment Interaction", "chapterId": "geo_11_fund_ch13", "order": 3 }
          ]
        },

        {
          "id": "geo_11_fund_ch14",
          "title": "Movements of Ocean Water",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Ocean currents, tides and waves.",
          "topics": [
            { "id": "topic_geo_11_fund_14_1", "title": "Waves & Tides", "chapterId": "geo_11_fund_ch14", "order": 1 },
            { "id": "topic_geo_11_fund_14_2", "title": "Ocean Currents", "chapterId": "geo_11_fund_ch14", "order": 2 },
            { "id": "topic_geo_11_fund_14_3", "title": "Thermohaline Circulation", "chapterId": "geo_11_fund_ch14", "order": 3 }
          ]
        }, {
          "id": "geo_11_india_ch1",
          "title": "India—Location",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "India's geographical location, latitudes, longitudes.",
          "topics": [
            { "id": "topic_geo_11_india_1_1", "title": "Position & Extent", "chapterId": "geo_11_india_ch1", "order": 1 },
            { "id": "topic_geo_11_india_1_2", "title": "India’s Neighbours", "chapterId": "geo_11_india_ch1", "order": 2 },
            { "id": "topic_geo_11_india_1_3", "title": "Standard Meridian", "chapterId": "geo_11_india_ch1", "order": 3 }
          ]
        },

        {
          "id": "geo_11_india_ch2",
          "title": "Structure and Physiography",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Physiographic divisions of India.",
          "topics": [
            { "id": "topic_geo_11_india_2_1", "title": "Northern Mountains", "chapterId": "geo_11_india_ch2", "order": 1 },
            { "id": "topic_geo_11_india_2_2", "title": "North Indian Plains", "chapterId": "geo_11_india_ch2", "order": 2 },
            { "id": "topic_geo_11_india_2_3", "title": "Peninsular Plateau", "chapterId": "geo_11_india_ch2", "order": 3 },
            { "id": "topic_geo_11_india_2_4", "title": "Coastal Plains & Islands", "chapterId": "geo_11_india_ch2", "order": 4 }
          ]
        },

        {
          "id": "geo_11_india_ch3",
          "title": "Drainage System",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "River systems of India.",
          "topics": [
            { "id": "topic_geo_11_india_3_1", "title": "Indus River System", "chapterId": "geo_11_india_ch3", "order": 1 },
            { "id": "topic_geo_11_india_3_2", "title": "Ganga River System", "chapterId": "geo_11_india_ch3", "order": 2 },
            { "id": "topic_geo_11_india_3_3", "title": "Peninsular Rivers", "chapterId": "geo_11_india_ch3", "order": 3 }
          ]
        },

        {
          "id": "geo_11_india_ch4",
          "title": "Climate",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Monsoons, weather patterns and climate of India.",
          "topics": [
            { "id": "topic_geo_11_india_4_1", "title": "Monsoon Mechanism", "chapterId": "geo_11_india_ch4", "order": 1 },
            { "id": "topic_geo_11_india_4_2", "title": "Climatic Seasons in India", "chapterId": "geo_11_india_ch4", "order": 2 },
            { "id": "topic_geo_11_india_4_3", "title": "Rainfall Distribution", "chapterId": "geo_11_india_ch4", "order": 3 }
          ]
        },

        {
          "id": "geo_11_india_ch5",
          "title": "Natural Vegetation",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Types of vegetation and conservation.",
          "topics": [
            { "id": "topic_geo_11_india_5_1", "title": "Forest Types", "chapterId": "geo_11_india_ch5", "order": 1 },
            { "id": "topic_geo_11_india_5_2", "title": "Wildlife & Conservation", "chapterId": "geo_11_india_ch5", "order": 2 },
            { "id": "topic_geo_11_india_5_3", "title": "Biosphere Reserves", "chapterId": "geo_11_india_ch5", "order": 3 }
          ]
        },

        {
          "id": "geo_11_india_ch6",
          "title": "Soils",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Classification of Indian soils and degradation.",
          "topics": [
            { "id": "topic_geo_11_india_6_1", "title": "Types of Indian Soils", "chapterId": "geo_11_india_ch6", "order": 1 },
            { "id": "topic_geo_11_india_6_2", "title": "Soil Erosion", "chapterId": "geo_11_india_ch6", "order": 2 },
            { "id": "topic_geo_11_india_6_3", "title": "Soil Conservation", "chapterId": "geo_11_india_ch6", "order": 3 }
          ]
        },

        {
          "id": "geo_11_india_ch7",
          "title": "Natural Hazards and Disasters",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Types of natural disasters and disaster management.",
          "topics": [
            { "id": "topic_geo_11_india_7_1", "title": "Earthquake Zones", "chapterId": "geo_11_india_ch7", "order": 1 },
            { "id": "topic_geo_11_india_7_2", "title": "Floods & Droughts", "chapterId": "geo_11_india_ch7", "order": 2 },
            { "id": "topic_geo_11_india_7_3", "title": "Cyclones", "chapterId": "geo_11_india_ch7", "order": 3 },
            { "id": "topic_geo_11_india_7_4", "title": "Disaster Management", "chapterId": "geo_11_india_ch7", "order": 4 }
          ]
        }, {
          "id": "geo_11_practical_ch1",
          "title": "Introduction to Maps",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Types of maps and scales.",
          "topics": [
            { "id": "topic_geo_11_practical_1_1", "title": "Types of Maps", "chapterId": "geo_11_practical_ch1", "order": 1 },
            { "id": "topic_geo_11_practical_1_2", "title": "Map Scale Types", "chapterId": "geo_11_practical_ch1", "order": 2 },
            { "id": "topic_geo_11_practical_1_3", "title": "Conversion of Scale", "chapterId": "geo_11_practical_ch1", "order": 3 }
          ]
        },

        {
          "id": "geo_11_practical_ch2",
          "title": "Topographical Maps",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Contours, symbols and interpretation of topo sheets.",
          "topics": [
            { "id": "topic_geo_11_practical_2_1", "title": "Contours & Elevation", "chapterId": "geo_11_practical_ch2", "order": 1 },
            { "id": "topic_geo_11_practical_2_2", "title": "Conventional Symbols", "chapterId": "geo_11_practical_ch2", "order": 2 },
            { "id": "topic_geo_11_practical_2_3", "title": "Interpreting Topo Maps", "chapterId": "geo_11_practical_ch2", "order": 3 }
          ]
        },

        {
          "id": "geo_11_practical_ch3",
          "title": "Field Surveys",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Methods of field surveys and data collection.",
          "topics": [
            { "id": "topic_geo_11_practical_3_1", "title": "Types of Field Surveys", "chapterId": "geo_11_practical_ch3", "order": 1 },
            { "id": "topic_geo_11_practical_3_2", "title": "Tools & Instruments", "chapterId": "geo_11_practical_ch3", "order": 2 },
            { "id": "topic_geo_11_practical_3_3", "title": "Survey Data Interpretation", "chapterId": "geo_11_practical_ch3", "order": 3 }
          ]
        },

        {
          "id": "geo_11_practical_ch4",
          "title": "Graphical Representation of Data",
          "subject": "Geography",
          "classLevel": "11th - Arts stream",
          "description": "Graphs, diagrams and cartographic techniques.",
          "topics": [
            { "id": "topic_geo_11_practical_4_1", "title": "Bar & Line Graphs", "chapterId": "geo_11_practical_ch4", "order": 1 },
            { "id": "topic_geo_11_practical_4_2", "title": "Pie Diagrams", "chapterId": "geo_11_practical_ch4", "order": 2 },
            { "id": "topic_geo_11_practical_4_3", "title": "Thematic Maps", "chapterId": "geo_11_practical_ch4", "order": 3 }
          ]
        }

      ],
      "Political Science": [

        {
          "id": "pols_11_const_ch1",
          "title": "Constitution: Why and How?",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Meaning, need, and making of the Indian Constitution.",
          "topics": [
            { "id": "topic_pols_11_const_1_1", "title": "Need for a Constitution", "chapterId": "pols_11_const_ch1", "order": 1 },
            { "id": "topic_pols_11_const_1_2", "title": "Role of Constituent Assembly", "chapterId": "pols_11_const_ch1", "order": 2 },
            { "id": "topic_pols_11_const_1_3", "title": "Preamble Features", "chapterId": "pols_11_const_ch1", "order": 3 },
            { "id": "topic_pols_11_const_1_4", "title": "Philosophy of Constitution", "chapterId": "pols_11_const_ch1", "order": 4 }
          ]
        },

        {
          "id": "pols_11_const_ch2",
          "title": "Rights in the Indian Constitution",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Fundamental Rights and Directive Principles of State Policy.",
          "topics": [
            { "id": "topic_pols_11_const_2_1", "title": "Fundamental Rights", "chapterId": "pols_11_const_ch2", "order": 1 },
            { "id": "topic_pols_11_const_2_2", "title": "Fundamental Duties", "chapterId": "pols_11_const_ch2", "order": 2 },
            { "id": "topic_pols_11_const_2_3", "title": "DPSPs", "chapterId": "pols_11_const_ch2", "order": 3 },
            { "id": "topic_pols_11_const_2_4", "title": "Right to Constitutional Remedies", "chapterId": "pols_11_const_ch2", "order": 4 }
          ]
        },

        {
          "id": "pols_11_const_ch3",
          "title": "Elections and Representation",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Election systems, constituencies and election commission.",
          "topics": [
            { "id": "topic_pols_11_const_3_1", "title": "Election System in India", "chapterId": "pols_11_const_ch3", "order": 1 },
            { "id": "topic_pols_11_const_3_2", "title": "Delimitation & Constituencies", "chapterId": "pols_11_const_ch3", "order": 2 },
            { "id": "topic_pols_11_const_3_3", "title": "Election Commission", "chapterId": "pols_11_const_ch3", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch4",
          "title": "Executive",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Powers and functions of President, PM and Council of Ministers.",
          "topics": [
            { "id": "topic_pols_11_const_4_1", "title": "President of India", "chapterId": "pols_11_const_ch4", "order": 1 },
            { "id": "topic_pols_11_const_4_2", "title": "Prime Minister & Council of Ministers", "chapterId": "pols_11_const_ch4", "order": 2 },
            { "id": "topic_pols_11_const_4_3", "title": "Permanent Executive (Bureaucracy)", "chapterId": "pols_11_const_ch4", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch5",
          "title": "Legislature",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Parliament structure, law-making process.",
          "topics": [
            { "id": "topic_pols_11_const_5_1", "title": "Lok Sabha & Rajya Sabha", "chapterId": "pols_11_const_ch5", "order": 1 },
            { "id": "topic_pols_11_const_5_2", "title": "Law Making Procedure", "chapterId": "pols_11_const_ch5", "order": 2 },
            { "id": "topic_pols_11_const_5_3", "title": "Budget & Financial Bills", "chapterId": "pols_11_const_ch5", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch6",
          "title": "Judiciary",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Supreme Court, High Courts and judicial review.",
          "topics": [
            { "id": "topic_pols_11_const_6_1", "title": "Structure of Judiciary", "chapterId": "pols_11_const_ch6", "order": 1 },
            { "id": "topic_pols_11_const_6_2", "title": "Judicial Review", "chapterId": "pols_11_const_ch6", "order": 2 },
            { "id": "topic_pols_11_const_6_3", "title": "Judicial Activism", "chapterId": "pols_11_const_ch6", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch7",
          "title": "Federalism",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Union-state relations, decentralisation.",
          "topics": [
            { "id": "topic_pols_11_const_7_1", "title": "Features of Federalism", "chapterId": "pols_11_const_ch7", "order": 1 },
            { "id": "topic_pols_11_const_7_2", "title": "Centre-State Powers", "chapterId": "pols_11_const_ch7", "order": 2 },
            { "id": "topic_pols_11_const_7_3", "title": "Local Government & Panchayati Raj", "chapterId": "pols_11_const_ch7", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch8",
          "title": "Local Governments",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Municipalities, Panchayati Raj and decentralisation.",
          "topics": [
            { "id": "topic_pols_11_const_8_1", "title": "73rd & 74th Amendments", "chapterId": "pols_11_const_ch8", "order": 1 },
            { "id": "topic_pols_11_const_8_2", "title": "Panchayati Raj Institutions", "chapterId": "pols_11_const_ch8", "order": 2 },
            { "id": "topic_pols_11_const_8_3", "title": "Urban Local Bodies", "chapterId": "pols_11_const_ch8", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch9",
          "title": "Constitution as a Living Document",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Flexibility, amendments and judicial interpretations.",
          "topics": [
            { "id": "topic_pols_11_const_9_1", "title": "Amendment Procedure", "chapterId": "pols_11_const_ch9", "order": 1 },
            { "id": "topic_pols_11_const_9_2", "title": "Basic Structure Doctrine", "chapterId": "pols_11_const_ch9", "order": 2 },
            { "id": "topic_pols_11_const_9_3", "title": "Role of Judiciary", "chapterId": "pols_11_const_ch9", "order": 3 }
          ]
        },

        {
          "id": "pols_11_const_ch10",
          "title": "The Philosophy of the Constitution",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Values and ideals behind the Constitution.",
          "topics": [
            { "id": "topic_pols_11_const_10_1", "title": "Preamble Interpretation", "chapterId": "pols_11_const_ch10", "order": 1 },
            { "id": "topic_pols_11_const_10_2", "title": "Justice, Liberty, Equality", "chapterId": "pols_11_const_ch10", "order": 2 },
            { "id": "topic_pols_11_const_10_3", "title": "Democratic Principles", "chapterId": "pols_11_const_ch10", "order": 3 }
          ]
        }, {
          "id": "pols_11_theory_ch1",
          "title": "Political Theory: An Introduction",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Meaning, relevance and importance of political theory.",
          "topics": [
            { "id": "topic_pols_11_theory_1_1", "title": "What is Political Theory?", "chapterId": "pols_11_theory_ch1", "order": 1 },
            { "id": "topic_pols_11_theory_1_2", "title": "Normative vs Empirical Theory", "chapterId": "pols_11_theory_ch1", "order": 2 },
            { "id": "topic_pols_11_theory_1_3", "title": "Relevance of Political Theory", "chapterId": "pols_11_theory_ch1", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch2",
          "title": "Freedom",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Negative and positive freedom, rights and state control.",
          "topics": [
            { "id": "topic_pols_11_theory_2_1", "title": "Negative & Positive Liberty", "chapterId": "pols_11_theory_ch2", "order": 1 },
            { "id": "topic_pols_11_theory_2_2", "title": "Harm Principle", "chapterId": "pols_11_theory_ch2", "order": 2 },
            { "id": "topic_pols_11_theory_2_3", "title": "Freedom of Expression", "chapterId": "pols_11_theory_ch2", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch3",
          "title": "Equality",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Forms of equality and affirmative action.",
          "topics": [
            { "id": "topic_pols_11_theory_3_1", "title": "Political, Social, Economic Equality", "chapterId": "pols_11_theory_ch3", "order": 1 },
            { "id": "topic_pols_11_theory_3_2", "title": "Inequality & Justice", "chapterId": "pols_11_theory_ch3", "order": 2 },
            { "id": "topic_pols_11_theory_3_3", "title": "Affirmative Action", "chapterId": "pols_11_theory_ch3", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch4",
          "title": "Social Justice",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Theory of justice, rights and fairness.",
          "topics": [
            { "id": "topic_pols_11_theory_4_1", "title": "Justice as Fairness (Rawls)", "chapterId": "pols_11_theory_ch4", "order": 1 },
            { "id": "topic_pols_11_theory_4_2", "title": "Libertarian View", "chapterId": "pols_11_theory_ch4", "order": 2 },
            { "id": "topic_pols_11_theory_4_3", "title": "Feminist Critique", "chapterId": "pols_11_theory_ch4", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch5",
          "title": "Rights",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Meaning, types and significance of rights.",
          "topics": [
            { "id": "topic_pols_11_theory_5_1", "title": "Natural & Moral Rights", "chapterId": "pols_11_theory_ch5", "order": 1 },
            { "id": "topic_pols_11_theory_5_2", "title": "Human Rights", "chapterId": "pols_11_theory_ch5", "order": 2 },
            { "id": "topic_pols_11_theory_5_3", "title": "Role of the State", "chapterId": "pols_11_theory_ch5", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch6",
          "title": "Citizenship",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Citizenship types, global citizenship and rights.",
          "topics": [
            { "id": "topic_pols_11_theory_6_1", "title": "Citizen vs Non-citizen", "chapterId": "pols_11_theory_ch6", "order": 1 },
            { "id": "topic_pols_11_theory_6_2", "title": "Global Citizenship", "chapterId": "pols_11_theory_ch6", "order": 2 },
            { "id": "topic_pols_11_theory_6_3", "title": "Responsibilities of Citizens", "chapterId": "pols_11_theory_ch6", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch7",
          "title": "Nationalism",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Forms, features and debates on nationalism.",
          "topics": [
            { "id": "topic_pols_11_theory_7_1", "title": "Cultural & Political Nationalism", "chapterId": "pols_11_theory_ch7", "order": 1 },
            { "id": "topic_pols_11_theory_7_2", "title": "Liberalism & Nationalism", "chapterId": "pols_11_theory_ch7", "order": 2 },
            { "id": "topic_pols_11_theory_7_3", "title": "Challenges to Nationalism", "chapterId": "pols_11_theory_ch7", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch8",
          "title": "Secularism",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Meaning of secularism and Indian model of secularism.",
          "topics": [
            { "id": "topic_pols_11_theory_8_1", "title": "Western vs Indian Secularism", "chapterId": "pols_11_theory_ch8", "order": 1 },
            { "id": "topic_pols_11_theory_8_2", "title": "Freedom of Religion", "chapterId": "pols_11_theory_ch8", "order": 2 },
            { "id": "topic_pols_11_theory_8_3", "title": "State Intervention", "chapterId": "pols_11_theory_ch8", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch9",
          "title": "Peace",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Meaning of peace, violence and conflict resolution.",
          "topics": [
            { "id": "topic_pols_11_theory_9_1", "title": "Types of Peace", "chapterId": "pols_11_theory_ch9", "order": 1 },
            { "id": "topic_pols_11_theory_9_2", "title": "Conflict & Violence", "chapterId": "pols_11_theory_ch9", "order": 2 },
            { "id": "topic_pols_11_theory_9_3", "title": "Non-violent Movements", "chapterId": "pols_11_theory_ch9", "order": 3 }
          ]
        },

        {
          "id": "pols_11_theory_ch10",
          "title": "Development",
          "subject": "Political Science",
          "classLevel": "11th - Arts stream",
          "description": "Debates on development, sustainability and human development.",
          "topics": [
            { "id": "topic_pols_11_theory_10_1", "title": "Economic vs Human Development", "chapterId": "pols_11_theory_ch10", "order": 1 },
            { "id": "topic_pols_11_theory_10_2", "title": "Environmental Sustainability", "chapterId": "pols_11_theory_ch10", "order": 2 },
            { "id": "topic_pols_11_theory_10_3", "title": "Alternative Models", "chapterId": "pols_11_theory_ch10", "order": 3 }
          ]
        }

      ],
      "Economics": [

        {
          "id": "eco_stats_11_ch1",
          "title": "Introduction",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, scope and functions of statistics in economics.",
          "topics": [
            { "id": "topic_stats_11_1_1", "title": "Meaning of Statistics", "chapterId": "eco_stats_11_ch1", "order": 1 },
            { "id": "topic_stats_11_1_2", "title": "Scope of Statistics", "chapterId": "eco_stats_11_ch1", "order": 2 },
            { "id": "topic_stats_11_1_3", "title": "Functions & Importance", "chapterId": "eco_stats_11_ch1", "order": 3 },
            { "id": "topic_stats_11_1_4", "title": "Limitations of Statistics", "chapterId": "eco_stats_11_ch1", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch2",
          "title": "Collection of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, types, sources and methods of data collection.",
          "topics": [
            { "id": "topic_stats_11_2_1", "title": "Primary & Secondary Data", "chapterId": "eco_stats_11_ch2", "order": 1 },
            { "id": "topic_stats_11_2_2", "title": "Direct & Indirect Investigation", "chapterId": "eco_stats_11_ch2", "order": 2 },
            { "id": "topic_stats_11_2_3", "title": "Sampling Methods", "chapterId": "eco_stats_11_ch2", "order": 3 },
            { "id": "topic_stats_11_2_4", "title": "Census vs Sample", "chapterId": "eco_stats_11_ch2", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch3",
          "title": "Organisation of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Classification and tabulation of data.",
          "topics": [
            { "id": "topic_stats_11_3_1", "title": "Raw Data vs Classified Data", "chapterId": "eco_stats_11_ch3", "order": 1 },
            { "id": "topic_stats_11_3_2", "title": "Frequency Distribution", "chapterId": "eco_stats_11_ch3", "order": 2 },
            { "id": "topic_stats_11_3_3", "title": "Types of Series", "chapterId": "eco_stats_11_ch3", "order": 3 },
            { "id": "topic_stats_11_3_4", "title": "Tabulation", "chapterId": "eco_stats_11_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch4",
          "title": "Presentation of Data",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Textual, tabular, pie charts, bar diagrams and frequency polygons.",
          "topics": [
            { "id": "topic_stats_11_4_1", "title": "Textual & Tabular Presentation", "chapterId": "eco_stats_11_ch4", "order": 1 },
            { "id": "topic_stats_11_4_2", "title": "Bar Diagrams", "chapterId": "eco_stats_11_ch4", "order": 2 },
            { "id": "topic_stats_11_4_3", "title": "Pie Charts", "chapterId": "eco_stats_11_ch4", "order": 3 },
            { "id": "topic_stats_11_4_4", "title": "Frequency Curves", "chapterId": "eco_stats_11_ch4", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch5",
          "title": "Measures of Central Tendency",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Mean, median, mode and their applications.",
          "topics": [
            { "id": "topic_stats_11_5_1", "title": "Arithmetic Mean", "chapterId": "eco_stats_11_ch5", "order": 1 },
            { "id": "topic_stats_11_5_2", "title": "Median", "chapterId": "eco_stats_11_ch5", "order": 2 },
            { "id": "topic_stats_11_5_3", "title": "Mode", "chapterId": "eco_stats_11_ch5", "order": 3 },
            { "id": "topic_stats_11_5_4", "title": "Comparison of Central Measures", "chapterId": "eco_stats_11_ch5", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch6",
          "title": "Measures of Dispersion",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Range, quartile deviation, mean deviation and standard deviation.",
          "topics": [
            { "id": "topic_stats_11_6_1", "title": "Range & Quartile Deviation", "chapterId": "eco_stats_11_ch6", "order": 1 },
            { "id": "topic_stats_11_6_2", "title": "Mean Deviation", "chapterId": "eco_stats_11_ch6", "order": 2 },
            { "id": "topic_stats_11_6_3", "title": "Standard Deviation", "chapterId": "eco_stats_11_ch6", "order": 3 },
            { "id": "topic_stats_11_6_4", "title": "Lorenz Curve", "chapterId": "eco_stats_11_ch6", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch7",
          "title": "Correlation",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Karl Pearson’s and Spearman’s methods of correlation.",
          "topics": [
            { "id": "topic_stats_11_7_1", "title": "Meaning & Types of Correlation", "chapterId": "eco_stats_11_ch7", "order": 1 },
            { "id": "topic_stats_11_7_2", "title": "Scatter Diagram", "chapterId": "eco_stats_11_ch7", "order": 2 },
            { "id": "topic_stats_11_7_3", "title": "Karl Pearson's Method", "chapterId": "eco_stats_11_ch7", "order": 3 },
            { "id": "topic_stats_11_7_4", "title": "Spearman’s Rank Method", "chapterId": "eco_stats_11_ch7", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch8",
          "title": "Index Numbers",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Meaning, uses, types and consumer price index.",
          "topics": [
            { "id": "topic_stats_11_8_1", "title": "Meaning & Importance", "chapterId": "eco_stats_11_ch8", "order": 1 },
            { "id": "topic_stats_11_8_2", "title": "Laspeyres & Paasche Indices", "chapterId": "eco_stats_11_ch8", "order": 2 },
            { "id": "topic_stats_11_8_3", "title": "Consumer Price Index", "chapterId": "eco_stats_11_ch8", "order": 3 },
            { "id": "topic_stats_11_8_4", "title": "Inflation Measurement", "chapterId": "eco_stats_11_ch8", "order": 4 }
          ]
        },

        {
          "id": "eco_stats_11_ch9",
          "title": "Use of Statistical Tools",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Application of all statistical methods in economics.",
          "topics": [
            { "id": "topic_stats_11_9_1", "title": "Interpretation of Mean, Median, Mode", "chapterId": "eco_stats_11_ch9", "order": 1 },
            { "id": "topic_stats_11_9_2", "title": "Interpretation of Dispersion", "chapterId": "eco_stats_11_ch9", "order": 2 },
            { "id": "topic_stats_11_9_3", "title": "Interpretation of Correlation", "chapterId": "eco_stats_11_ch9", "order": 3 }
          ]
        },
        {
          "id": "eco_ied_11_ch1",
          "title": "Indian Economy on the Eve of Independence",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Economic conditions of India in 1947.",
          "topics": [
            { "id": "topic_ied_11_1_1", "title": "State of Agriculture", "chapterId": "eco_ied_11_ch1", "order": 1 },
            { "id": "topic_ied_11_1_2", "title": "Industrial Backwardness", "chapterId": "eco_ied_11_ch1", "order": 2 },
            { "id": "topic_ied_11_1_3", "title": "Foreign Trade", "chapterId": "eco_ied_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch2",
          "title": "Indian Economy (1950–1990)",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Features of Indian planning post-independence.",
          "topics": [
            { "id": "topic_ied_11_2_1", "title": "Five-Year Plans", "chapterId": "eco_ied_11_ch2", "order": 1 },
            { "id": "topic_ied_11_2_2", "title": "Agriculture Reforms", "chapterId": "eco_ied_11_ch2", "order": 2 },
            { "id": "topic_ied_11_2_3", "title": "Public & Private Sectors", "chapterId": "eco_ied_11_ch2", "order": 3 },
            { "id": "topic_ied_11_2_4", "title": "Import Substitution", "chapterId": "eco_ied_11_ch2", "order": 4 }
          ]
        },

        {
          "id": "eco_ied_11_ch3",
          "title": "Economic Reforms Since 1991",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Liberalisation, privatisation and globalisation.",
          "topics": [
            { "id": "topic_ied_11_3_1", "title": "Need for Reforms", "chapterId": "eco_ied_11_ch3", "order": 1 },
            { "id": "topic_ied_11_3_2", "title": "Liberalisation Measures", "chapterId": "eco_ied_11_ch3", "order": 2 },
            { "id": "topic_ied_11_3_3", "title": "Privatisation & Disinvestment", "chapterId": "eco_ied_11_ch3", "order": 3 },
            { "id": "topic_ied_11_3_4", "title": "Globalisation & WTO", "chapterId": "eco_ied_11_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_ied_11_ch4",
          "title": "Poverty",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Types, causes and anti-poverty measures.",
          "topics": [
            { "id": "topic_ied_11_4_1", "title": "Types of Poverty", "chapterId": "eco_ied_11_ch4", "order": 1 },
            { "id": "topic_ied_11_4_2", "title": "Causes of Poverty", "chapterId": "eco_ied_11_ch4", "order": 2 },
            { "id": "topic_ied_11_4_3", "title": "Government Measures", "chapterId": "eco_ied_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch5",
          "title": "Human Capital Formation",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Education, health and skill formation.",
          "topics": [
            { "id": "topic_ied_11_5_1", "title": "Sources of Human Capital", "chapterId": "eco_ied_11_ch5", "order": 1 },
            { "id": "topic_ied_11_5_2", "title": "Role of Education & Health", "chapterId": "eco_ied_11_ch5", "order": 2 },
            { "id": "topic_ied_11_5_3", "title": "Human Capital vs Human Development", "chapterId": "eco_ied_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch6",
          "title": "Rural Development",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Agricultural development, microfinance and rural credit.",
          "topics": [
            { "id": "topic_ied_11_6_1", "title": "Rural Credit Structure", "chapterId": "eco_ied_11_ch6", "order": 1 },
            { "id": "topic_ied_11_6_2", "title": "Agricultural Marketing", "chapterId": "eco_ied_11_ch6", "order": 2 },
            { "id": "topic_ied_11_6_3", "title": "Organic Farming", "chapterId": "eco_ied_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch7",
          "title": "Employment: Growth, Informalisation and Other Issues",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Types of employment and workforce structure.",
          "topics": [
            { "id": "topic_ied_11_7_1", "title": "Types of Workers", "chapterId": "eco_ied_11_ch7", "order": 1 },
            { "id": "topic_ied_11_7_2", "title": "Informalisation of Workforce", "chapterId": "eco_ied_11_ch7", "order": 2 },
            { "id": "topic_ied_11_7_3", "title": "Unemployment Issues", "chapterId": "eco_ied_11_ch7", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch8",
          "title": "Infrastructure",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Energy, health and education as infrastructure.",
          "topics": [
            { "id": "topic_ied_11_8_1", "title": "Meaning & Types of Infrastructure", "chapterId": "eco_ied_11_ch8", "order": 1 },
            { "id": "topic_ied_11_8_2", "title": "Health Infrastructure", "chapterId": "eco_ied_11_ch8", "order": 2 },
            { "id": "topic_ied_11_8_3", "title": "Energy & Transport", "chapterId": "eco_ied_11_ch8", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch9",
          "title": "Environment and Sustainable Development",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Environmental issues, pollution and sustainable development.",
          "topics": [
            { "id": "topic_ied_11_9_1", "title": "Environmental Degradation Causes", "chapterId": "eco_ied_11_ch9", "order": 1 },
            { "id": "topic_ied_11_9_2", "title": "Pollution Types", "chapterId": "eco_ied_11_ch9", "order": 2 },
            { "id": "topic_ied_11_9_3", "title": "Strategies for Sustainability", "chapterId": "eco_ied_11_ch9", "order": 3 }
          ]
        },

        {
          "id": "eco_ied_11_ch10",
          "title": "Comparative Development Experiences of India and Neighbours",
          "subject": "Economics",
          "classLevel": "11th - Commerce stream",
          "description": "Comparison of India with China & Pakistan.",
          "topics": [
            { "id": "topic_ied_11_10_1", "title": "India vs China", "chapterId": "eco_ied_11_ch10", "order": 1 },
            { "id": "topic_ied_11_10_2", "title": "India vs Pakistan", "chapterId": "eco_ied_11_ch10", "order": 2 },
            { "id": "topic_ied_11_10_3", "title": "Indicators of Development", "chapterId": "eco_ied_11_ch10", "order": 3 }
          ]
        }

      ],
      "English": [
        {
          "id": "eng_11_hb_ch1",
          "title": "The Portrait of a Lady",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A story about the author's grandmother and changing lifestyles.",
          "topics": [
            {
              "id": "topic_eng_11_hb_1_1",
              "title": "Summary",
              "chapterId": "eng_11_hb_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_1_2",
              "title": "Themes & Character",
              "chapterId": "eng_11_hb_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch2",
          "title": "We're Not Afraid to Die... If We Can All Be Together",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A thrilling story of courage and survival at sea.",
          "topics": [
            {
              "id": "topic_eng_11_hb_2_1",
              "title": "Adventure Summary",
              "chapterId": "eng_11_hb_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_2_2",
              "title": "Courage & Family Bond",
              "chapterId": "eng_11_hb_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch3",
          "title": "Discovering Tut: The Saga Continues",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Investigating King Tut’s mummy using modern technology.",
          "topics": [
            {
              "id": "topic_eng_11_hb_3_1",
              "title": "Archaeological Findings",
              "chapterId": "eng_11_hb_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_3_2",
              "title": "Scientific Investigation",
              "chapterId": "eng_11_hb_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch4",
          "title": "Landscape of the Soul",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Differences between Western and Chinese art.",
          "topics": [
            {
              "id": "topic_eng_11_hb_4_1",
              "title": "Art Comparison",
              "chapterId": "eng_11_hb_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_4_2",
              "title": "Philosophical Meanings",
              "chapterId": "eng_11_hb_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch5",
          "title": "The Ailing Planet: The Green Movement’s Role",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Environmental crisis and responsible development.",
          "topics": [
            {
              "id": "topic_eng_11_hb_5_1",
              "title": "Environmental Issues",
              "chapterId": "eng_11_hb_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_5_2",
              "title": "Green Movement Insights",
              "chapterId": "eng_11_hb_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch6",
          "title": "The Browning Version",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A dramatic lesson about a strict teacher and his student.",
          "topics": [
            {
              "id": "topic_eng_11_hb_6_1",
              "title": "Plot & Characters",
              "chapterId": "eng_11_hb_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_6_2",
              "title": "Themes of Respect & Regret",
              "chapterId": "eng_11_hb_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch7",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Reflecting on the loss of childhood innocence.",
          "topics": [
            {
              "id": "topic_eng_11_hb_7_1",
              "title": "Childhood vs Adulthood",
              "chapterId": "eng_11_hb_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_7_2",
              "title": "Themes & Reflection",
              "chapterId": "eng_11_hb_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_ch8",
          "title": "The Adventure",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A science-fiction story involving parallel worlds.",
          "topics": [
            {
              "id": "topic_eng_11_hb_8_1",
              "title": "Parallel World Concept",
              "chapterId": "eng_11_hb_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_hb_8_2",
              "title": "Science & Imagination",
              "chapterId": "eng_11_hb_ch8",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_1",
          "title": "A Photograph",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on memory, loss and nostalgia.",
          "topics": [
            {
              "id": "topic_eng_11_poem_1_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_1",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_1_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_1",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_1_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_1",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_2",
          "title": "The Laburnum Top",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem depicting a goldfinch’s visit to a silent tree.",
          "topics": [
            {
              "id": "topic_eng_11_poem_2_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_2",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_2_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_2",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_2_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_2",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_3",
          "title": "The Voice of the Rain",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A lyrical conversation between the poet and the rain.",
          "topics": [
            {
              "id": "topic_eng_11_poem_3_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_3",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_3_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_3",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_3_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_3",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_4",
          "title": "Childhood",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem reflecting on transition from childhood to adulthood.",
          "topics": [
            {
              "id": "topic_eng_11_poem_4_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_4",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_4_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_4",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_4_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_4",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_hb_poem_5",
          "title": "Father to Son",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A poem expressing a father’s emotional distance from his son.",
          "topics": [
            {
              "id": "topic_eng_11_poem_5_1",
              "title": "Poem Summary",
              "chapterId": "eng_11_hb_poem_5",
              "order": 1
            },
            {
              "id": "topic_eng_11_poem_5_2",
              "title": "Theme & Message",
              "chapterId": "eng_11_hb_poem_5",
              "order": 2
            },
            {
              "id": "topic_eng_11_poem_5_3",
              "title": "Poetic Devices",
              "chapterId": "eng_11_hb_poem_5",
              "order": 3
            }
          ]
        },
        {
          "id": "eng_11_snap_ch1",
          "title": "The Summer of the Beautiful White Horse",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Story of two Armenian boys and a stolen horse.",
          "topics": [
            {
              "id": "topic_eng_11_snap_1_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch1",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_1_2",
              "title": "Themes of Honesty & Culture",
              "chapterId": "eng_11_snap_ch1",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch2",
          "title": "The Address",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A daughter revisits her mother's possessions after war.",
          "topics": [
            {
              "id": "topic_eng_11_snap_2_1",
              "title": "Memory & Loss",
              "chapterId": "eng_11_snap_ch2",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_2_2",
              "title": "Symbolism & Themes",
              "chapterId": "eng_11_snap_ch2",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch3",
          "title": "Ranga’s Marriage",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A humorous tale about arranged marriage traditions.",
          "topics": [
            {
              "id": "topic_eng_11_snap_3_1",
              "title": "Plot Summary",
              "chapterId": "eng_11_snap_ch3",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_3_2",
              "title": "Cultural Themes",
              "chapterId": "eng_11_snap_ch3",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch4",
          "title": "Albert Einstein at School",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "Einstein’s struggles with rigid schooling.",
          "topics": [
            {
              "id": "topic_eng_11_snap_4_1",
              "title": "Einstein’s Conflicts",
              "chapterId": "eng_11_snap_ch4",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_4_2",
              "title": "Educational Commentary",
              "chapterId": "eng_11_snap_ch4",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch5",
          "title": "Mother’s Day",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A play highlighting family responsibilities.",
          "topics": [
            {
              "id": "topic_eng_11_snap_5_1",
              "title": "Family Roles & Lessons",
              "chapterId": "eng_11_snap_ch5",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_5_2",
              "title": "Humor & Satire",
              "chapterId": "eng_11_snap_ch5",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch6",
          "title": "The Ghat of the Only World",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A tribute to a friend who passed away.",
          "topics": [
            {
              "id": "topic_eng_11_snap_6_1",
              "title": "Friendship & Memory",
              "chapterId": "eng_11_snap_ch6",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_6_2",
              "title": "Tone & Style",
              "chapterId": "eng_11_snap_ch6",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch7",
          "title": "Birth",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A doctor's struggle to save a newborn baby.",
          "topics": [
            {
              "id": "topic_eng_11_snap_7_1",
              "title": "Medical Challenges",
              "chapterId": "eng_11_snap_ch7",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_7_2",
              "title": "Perseverance Theme",
              "chapterId": "eng_11_snap_ch7",
              "order": 2
            }
          ]
        },
        {
          "id": "eng_11_snap_ch8",
          "title": "The Tale of Melon City",
          "subject": "English",
          "classLevel": "11th - Science stream",
          "description": "A satirical poem-story about a foolish king.",
          "topics": [
            {
              "id": "topic_eng_11_snap_8_1",
              "title": "Satirical Elements",
              "chapterId": "eng_11_snap_ch8",
              "order": 1
            },
            {
              "id": "topic_eng_11_snap_8_2",
              "title": "Themes & Message",
              "chapterId": "eng_11_snap_ch8",
              "order": 2
            }
          ]
        }
      ],
      "Sociology": [

        {
          "id": "soc_11_intro_ch1",
          "title": "Sociology and Society",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Nature of sociology, society, and relationship with other disciplines.",
          "topics": [
            { "id": "topic_soc_11_intro_1_1", "title": "Meaning & Nature of Sociology", "chapterId": "soc_11_intro_ch1", "order": 1 },
            { "id": "topic_soc_11_intro_1_2", "title": "Sociology vs Psychology vs Anthropology", "chapterId": "soc_11_intro_ch1", "order": 2 },
            { "id": "topic_soc_11_intro_1_3", "title": "Society as a Network of Relationships", "chapterId": "soc_11_intro_ch1", "order": 3 },
            { "id": "topic_soc_11_intro_1_4", "title": "Culture & Social Norms", "chapterId": "soc_11_intro_ch1", "order": 4 }
          ]
        },

        {
          "id": "soc_11_intro_ch2",
          "title": "Terms, Concepts and Their Use in Sociology",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Basic concepts used in understanding society.",
          "topics": [
            { "id": "topic_soc_11_intro_2_1", "title": "Status & Role", "chapterId": "soc_11_intro_ch2", "order": 1 },
            { "id": "topic_soc_11_intro_2_2", "title": "Social Groups", "chapterId": "soc_11_intro_ch2", "order": 2 },
            { "id": "topic_soc_11_intro_2_3", "title": "Community vs Society", "chapterId": "soc_11_intro_ch2", "order": 3 },
            { "id": "topic_soc_11_intro_2_4", "title": "Social Stratification", "chapterId": "soc_11_intro_ch2", "order": 4 }
          ]
        },

        {
          "id": "soc_11_intro_ch3",
          "title": "Understanding Social Institutions",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Family, marriage, kinship, economy and polity.",
          "topics": [
            { "id": "topic_soc_11_intro_3_1", "title": "Family & Household", "chapterId": "soc_11_intro_ch3", "order": 1 },
            { "id": "topic_soc_11_intro_3_2", "title": "Marriage Systems", "chapterId": "soc_11_intro_ch3", "order": 2 },
            { "id": "topic_soc_11_intro_3_3", "title": "Kinship Patterns", "chapterId": "soc_11_intro_ch3", "order": 3 },
            { "id": "topic_soc_11_intro_3_4", "title": "Economic Institutions", "chapterId": "soc_11_intro_ch3", "order": 4 },
            { "id": "topic_soc_11_intro_3_5", "title": "Political Institutions", "chapterId": "soc_11_intro_ch3", "order": 5 }
          ]
        },

        {
          "id": "soc_11_intro_ch4",
          "title": "Culture and Socialisation",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Elements of culture and the socialisation process.",
          "topics": [
            { "id": "topic_soc_11_intro_4_1", "title": "Components of Culture", "chapterId": "soc_11_intro_ch4", "order": 1 },
            { "id": "topic_soc_11_intro_4_2", "title": "Culture vs Society", "chapterId": "soc_11_intro_ch4", "order": 2 },
            { "id": "topic_soc_11_intro_4_3", "title": "Process of Socialisation", "chapterId": "soc_11_intro_ch4", "order": 3 },
            { "id": "topic_soc_11_intro_4_4", "title": "Agencies of Socialisation", "chapterId": "soc_11_intro_ch4", "order": 4 }
          ]
        },

        {
          "id": "soc_11_intro_ch5",
          "title": "Doing Sociology: Research Methods",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Field work, surveys and sociological methods.",
          "topics": [
            { "id": "topic_soc_11_intro_5_1", "title": "Qualitative Methods", "chapterId": "soc_11_intro_ch5", "order": 1 },
            { "id": "topic_soc_11_intro_5_2", "title": "Quantitative Methods", "chapterId": "soc_11_intro_ch5", "order": 2 },
            { "id": "topic_soc_11_intro_5_3", "title": "Sampling & Surveys", "chapterId": "soc_11_intro_ch5", "order": 3 },
            { "id": "topic_soc_11_intro_5_4", "title": "Ethics in Research", "chapterId": "soc_11_intro_ch5", "order": 4 }
          ]
        }, {
          "id": "soc_11_under_ch6",
          "title": "Social Structure, Stratification and Social Processes",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Stratification, hierarchy and social processes.",
          "topics": [
            { "id": "topic_soc_11_under_6_1", "title": "Social Structure Concept", "chapterId": "soc_11_under_ch6", "order": 1 },
            { "id": "topic_soc_11_under_6_2", "title": "Stratification Types", "chapterId": "soc_11_under_ch6", "order": 2 },
            { "id": "topic_soc_11_under_6_3", "title": "Social Mobility", "chapterId": "soc_11_under_ch6", "order": 3 },
            { "id": "topic_soc_11_under_6_4", "title": "Cooperation & Conflict", "chapterId": "soc_11_under_ch6", "order": 4 }
          ]
        },

        {
          "id": "soc_11_under_ch7",
          "title": "Social Change and Social Order in Rural and Urban Society",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Urbanisation, rural structures and change in society.",
          "topics": [
            { "id": "topic_soc_11_under_7_1", "title": "Rural Society Features", "chapterId": "soc_11_under_ch7", "order": 1 },
            { "id": "topic_soc_11_under_7_2", "title": "Urbanisation", "chapterId": "soc_11_under_ch7", "order": 2 },
            { "id": "topic_soc_11_under_7_3", "title": "Causes of Social Change", "chapterId": "soc_11_under_ch7", "order": 3 },
            { "id": "topic_soc_11_under_7_4", "title": "Social Control Mechanisms", "chapterId": "soc_11_under_ch7", "order": 4 }
          ]
        },

        {
          "id": "soc_11_under_ch8",
          "title": "Environment and Society",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Environmental issues, movements and human-environment interaction.",
          "topics": [
            { "id": "topic_soc_11_under_8_1", "title": "Environment & Human Interaction", "chapterId": "soc_11_under_ch8", "order": 1 },
            { "id": "topic_soc_11_under_8_2", "title": "Environmental Movements", "chapterId": "soc_11_under_ch8", "order": 2 },
            { "id": "topic_soc_11_under_8_3", "title": "Sustainable Development", "chapterId": "soc_11_under_ch8", "order": 3 }
          ]
        },

        {
          "id": "soc_11_under_ch9",
          "title": "Introducing Western Sociologists",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Ideas of Marx, Weber and Durkheim.",
          "topics": [
            { "id": "topic_soc_11_under_9_1", "title": "Karl Marx – Class & Capitalism", "chapterId": "soc_11_under_ch9", "order": 1 },
            { "id": "topic_soc_11_under_9_2", "title": "Emile Durkheim – Social Facts", "chapterId": "soc_11_under_ch9", "order": 2 },
            { "id": "topic_soc_11_under_9_3", "title": "Max Weber – Authority Types", "chapterId": "soc_11_under_ch9", "order": 3 }
          ]
        },

        {
          "id": "soc_11_under_ch10",
          "title": "Indian Sociologists",
          "subject": "Sociology",
          "classLevel": "11th - Arts stream",
          "description": "Contributions by Indian sociologists like M.N. Srinivas.",
          "topics": [
            { "id": "topic_soc_11_under_10_1", "title": "M.N. Srinivas – Sanskritisation", "chapterId": "soc_11_under_ch10", "order": 1 },
            { "id": "topic_soc_11_under_10_2", "title": "Ghurye’s Caste Analysis", "chapterId": "soc_11_under_ch10", "order": 2 },
            { "id": "topic_soc_11_under_10_3", "title": "Yogendra Singh – Modernisation", "chapterId": "soc_11_under_ch10", "order": 3 }
          ]
        }

      ],
      "Psychology": [

        {
          "id": "psy_11_ch1",
          "title": "What is Psychology?",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Introduction to psychology, branches, and applications.",
          "topics": [
            { "id": "topic_psy_11_1_1", "title": "Nature of Psychology", "chapterId": "psy_11_ch1", "order": 1 },
            { "id": "topic_psy_11_1_2", "title": "Psychology as a Discipline", "chapterId": "psy_11_ch1", "order": 2 },
            { "id": "topic_psy_11_1_3", "title": "Branches of Psychology", "chapterId": "psy_11_ch1", "order": 3 },
            { "id": "topic_psy_11_1_4", "title": "Psychology in Everyday Life", "chapterId": "psy_11_ch1", "order": 4 }
          ]
        },

        {
          "id": "psy_11_ch2",
          "title": "Methods of Enquiry in Psychology",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Scientific methods, data collection and ethics.",
          "topics": [
            { "id": "topic_psy_11_2_1", "title": "Observation Method", "chapterId": "psy_11_ch2", "order": 1 },
            { "id": "topic_psy_11_2_2", "title": "Experimental Method", "chapterId": "psy_11_ch2", "order": 2 },
            { "id": "topic_psy_11_2_3", "title": "Survey & Case Study", "chapterId": "psy_11_ch2", "order": 3 },
            { "id": "topic_psy_11_2_4", "title": "Ethics in Research", "chapterId": "psy_11_ch2", "order": 4 }
          ]
        },

        {
          "id": "psy_11_ch3",
          "title": "The Bases of Human Behaviour",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Biological and environmental influences on behaviour.",
          "topics": [
            { "id": "topic_psy_11_3_1", "title": "Genetics & Heredity", "chapterId": "psy_11_ch3", "order": 1 },
            { "id": "topic_psy_11_3_2", "title": "Brain & Nervous System", "chapterId": "psy_11_ch3", "order": 2 },
            { "id": "topic_psy_11_3_3", "title": "Endocrine System", "chapterId": "psy_11_ch3", "order": 3 },
            { "id": "topic_psy_11_3_4", "title": "Culture & Environment", "chapterId": "psy_11_ch3", "order": 4 }
          ]
        },

        {
          "id": "psy_11_ch4",
          "title": "Human Development",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Lifespan development and major theories.",
          "topics": [
            { "id": "topic_psy_11_4_1", "title": "Stages of Development", "chapterId": "psy_11_ch4", "order": 1 },
            { "id": "topic_psy_11_4_2", "title": "Cognitive Development (Piaget)", "chapterId": "psy_11_ch4", "order": 2 },
            { "id": "topic_psy_11_4_3", "title": "Psychosocial Development (Erikson)", "chapterId": "psy_11_ch4", "order": 3 },
            { "id": "topic_psy_11_4_4", "title": "Moral Development", "chapterId": "psy_11_ch4", "order": 4 }
          ]
        },

        {
          "id": "psy_11_ch5",
          "title": "Sensory, Attentional and Perceptual Processes",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Sensation, perception and attention.",
          "topics": [
            { "id": "topic_psy_11_5_1", "title": "Sensation vs Perception", "chapterId": "psy_11_ch5", "order": 1 },
            { "id": "topic_psy_11_5_2", "title": "Gestalt Principles", "chapterId": "psy_11_ch5", "order": 2 },
            { "id": "topic_psy_11_5_3", "title": "Attention Factors", "chapterId": "psy_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "psy_11_ch6",
          "title": "Learning",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Types and theories of learning.",
          "topics": [
            { "id": "topic_psy_11_6_1", "title": "Classical Conditioning", "chapterId": "psy_11_ch6", "order": 1 },
            { "id": "topic_psy_11_6_2", "title": "Operant Conditioning", "chapterId": "psy_11_ch6", "order": 2 },
            { "id": "topic_psy_11_6_3", "title": "Cognitive Learning", "chapterId": "psy_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "psy_11_ch7",
          "title": "Human Memory",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Types of memory and forgetting.",
          "topics": [
            { "id": "topic_psy_11_7_1", "title": "Sensory, Short & Long-term Memory", "chapterId": "psy_11_ch7", "order": 1 },
            { "id": "topic_psy_11_7_2", "title": "Forgetting Theories", "chapterId": "psy_11_ch7", "order": 2 },
            { "id": "topic_psy_11_7_3", "title": "Mnemonics Techniques", "chapterId": "psy_11_ch7", "order": 3 }
          ]
        },

        {
          "id": "psy_11_ch8",
          "title": "Thinking",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Reasoning, problem-solving and decision-making.",
          "topics": [
            { "id": "topic_psy_11_8_1", "title": "Types of Thinking", "chapterId": "psy_11_ch8", "order": 1 },
            { "id": "topic_psy_11_8_2", "title": "Problem Solving", "chapterId": "psy_11_ch8", "order": 2 },
            { "id": "topic_psy_11_8_3", "title": "Decision-Making", "chapterId": "psy_11_ch8", "order": 3 }
          ]
        },

        {
          "id": "psy_11_ch9",
          "title": "Motivation and Emotion",
          "subject": "Psychology",
          "classLevel": "11th - Arts stream",
          "description": "Motivational theories and emotional processes.",
          "topics": [
            { "id": "topic_psy_11_9_1", "title": "Maslow’s Hierarchy", "chapterId": "psy_11_ch9", "order": 1 },
            { "id": "topic_psy_11_9_2", "title": "Primary & Secondary Motives", "chapterId": "psy_11_ch9", "order": 2 },
            { "id": "topic_psy_11_9_3", "title": "Theories of Emotion", "chapterId": "psy_11_ch9", "order": 3 }
          ]
        }

      ],
      "Legal Studies": [

        {
          "id": "legal_11_ch1",
          "title": "Introduction to Indian Constitution",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Structure and features of the Indian Constitution.",
          "topics": [
            { "id": "topic_legal_11_1_1", "title": "Salient Features", "chapterId": "legal_11_ch1", "order": 1 },
            { "id": "topic_legal_11_1_2", "title": "Federal Features", "chapterId": "legal_11_ch1", "order": 2 },
            { "id": "topic_legal_11_1_3", "title": "Constitutional Amendments", "chapterId": "legal_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch2",
          "title": "Structure of Government",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Union and state executive and legislatures.",
          "topics": [
            { "id": "topic_legal_11_2_1", "title": "Union Government Structure", "chapterId": "legal_11_ch2", "order": 1 },
            { "id": "topic_legal_11_2_2", "title": "State Government Features", "chapterId": "legal_11_ch2", "order": 2 },
            { "id": "topic_legal_11_2_3", "title": "Panchayati Raj", "chapterId": "legal_11_ch2", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch3",
          "title": "Judiciary",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Structure and functions of courts.",
          "topics": [
            { "id": "topic_legal_11_3_1", "title": "Supreme Court", "chapterId": "legal_11_ch3", "order": 1 },
            { "id": "topic_legal_11_3_2", "title": "High Courts", "chapterId": "legal_11_ch3", "order": 2 },
            { "id": "topic_legal_11_3_3", "title": "Judicial Review", "chapterId": "legal_11_ch3", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch4",
          "title": "Nature of Indian Legal System",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Sources of law, classification and legal procedures.",
          "topics": [
            { "id": "topic_legal_11_4_1", "title": "Sources of Law", "chapterId": "legal_11_ch4", "order": 1 },
            { "id": "topic_legal_11_4_2", "title": "Civil & Criminal Law", "chapterId": "legal_11_ch4", "order": 2 },
            { "id": "topic_legal_11_4_3", "title": "FIR & Legal Procedures", "chapterId": "legal_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch5",
          "title": "Arbitration, Mediation and Conciliation",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Alternative dispute resolution methods.",
          "topics": [
            { "id": "topic_legal_11_5_1", "title": "Arbitration Process", "chapterId": "legal_11_ch5", "order": 1 },
            { "id": "topic_legal_11_5_2", "title": "Mediation Techniques", "chapterId": "legal_11_ch5", "order": 2 },
            { "id": "topic_legal_11_5_3", "title": "Conciliation", "chapterId": "legal_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch6",
          "title": "Legal Research & Legal Profession",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Lawyers, legal ethics and legal research techniques.",
          "topics": [
            { "id": "topic_legal_11_6_1", "title": "Legal Profession Structure", "chapterId": "legal_11_ch6", "order": 1 },
            { "id": "topic_legal_11_6_2", "title": "Ethics of Lawyers", "chapterId": "legal_11_ch6", "order": 2 },
            { "id": "topic_legal_11_6_3", "title": "Legal Research Process", "chapterId": "legal_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch7",
          "title": "Basic Concepts of Criminal Law",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Crime, IPC and types of offences.",
          "topics": [
            { "id": "topic_legal_11_7_1", "title": "Offences under IPC", "chapterId": "legal_11_ch7", "order": 1 },
            { "id": "topic_legal_11_7_2", "title": "Bailable vs Non-Bailable", "chapterId": "legal_11_ch7", "order": 2 },
            { "id": "topic_legal_11_7_3", "title": "Cognizable vs Non-Cognizable", "chapterId": "legal_11_ch7", "order": 3 }
          ]
        },

        {
          "id": "legal_11_ch8",
          "title": "Civil Wrongs (Torts)",
          "subject": "Legal Studies",
          "classLevel": "11th - Arts stream",
          "description": "Torts, negligence and liability.",
          "topics": [
            { "id": "topic_legal_11_8_1", "title": "Meaning of Tort", "chapterId": "legal_11_ch8", "order": 1 },
            { "id": "topic_legal_11_8_2", "title": "Negligence", "chapterId": "legal_11_ch8", "order": 2 },
            { "id": "topic_legal_11_8_3", "title": "Strict Liability", "chapterId": "legal_11_ch8", "order": 3 }
          ]
        }

      ],
      "Philosophy": [

        {
          "id": "phil_11_ch1",
          "title": "Introduction to Philosophy",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Nature, scope and branches of philosophy.",
          "topics": [
            { "id": "topic_phil_11_1_1", "title": "Meaning & Nature of Philosophy", "chapterId": "phil_11_ch1", "order": 1 },
            { "id": "topic_phil_11_1_2", "title": "Branches: Epistemology, Ethics etc.", "chapterId": "phil_11_ch1", "order": 2 },
            { "id": "topic_phil_11_1_3", "title": "Why Study Philosophy?", "chapterId": "phil_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "phil_11_ch2",
          "title": "Indian Philosophy",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Schools of Indian philosophy.",
          "topics": [
            { "id": "topic_phil_11_2_1", "title": "Astika Schools (Nyaya, Yoga, Vedanta)", "chapterId": "phil_11_ch2", "order": 1 },
            { "id": "topic_phil_11_2_2", "title": "Nastika Schools (Buddhism, Jainism)", "chapterId": "phil_11_ch2", "order": 2 },
            { "id": "topic_phil_11_2_3", "title": "Core Indian Philosophical Ideas", "chapterId": "phil_11_ch2", "order": 3 }
          ]
        },

        {
          "id": "phil_11_ch3",
          "title": "Western Philosophy",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Greek philosophy, rationalism and empiricism.",
          "topics": [
            { "id": "topic_phil_11_3_1", "title": "Socrates, Plato & Aristotle", "chapterId": "phil_11_ch3", "order": 1 },
            { "id": "topic_phil_11_3_2", "title": "Rationalism (Descartes)", "chapterId": "phil_11_ch3", "order": 2 },
            { "id": "topic_phil_11_3_3", "title": "Empiricism (Locke, Hume)", "chapterId": "phil_11_ch3", "order": 3 }
          ]
        },

        {
          "id": "phil_11_ch4",
          "title": "Ethics",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Moral philosophy and ethical theories.",
          "topics": [
            { "id": "topic_phil_11_4_1", "title": "Virtue Ethics", "chapterId": "phil_11_ch4", "order": 1 },
            { "id": "topic_phil_11_4_2", "title": "Deontology (Kant)", "chapterId": "phil_11_ch4", "order": 2 },
            { "id": "topic_phil_11_4_3", "title": "Consequentialism", "chapterId": "phil_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "phil_11_ch5",
          "title": "Logic",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Arguments, fallacies and reasoning.",
          "topics": [
            { "id": "topic_phil_11_5_1", "title": "Deductive & Inductive Logic", "chapterId": "phil_11_ch5", "order": 1 },
            { "id": "topic_phil_11_5_2", "title": "Common Fallacies", "chapterId": "phil_11_ch5", "order": 2 },
            { "id": "topic_phil_11_5_3", "title": "Arguments & Validity", "chapterId": "phil_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "phil_11_ch6",
          "title": "Aesthetics",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Nature of beauty and art.",
          "topics": [
            { "id": "topic_phil_11_6_1", "title": "Beauty & Aesthetic Experience", "chapterId": "phil_11_ch6", "order": 1 },
            { "id": "topic_phil_11_6_2", "title": "Major Aesthetic Theories", "chapterId": "phil_11_ch6", "order": 2 }
          ]
        },

        {
          "id": "phil_11_ch7",
          "title": "Metaphysics",
          "subject": "Philosophy",
          "classLevel": "11th - Arts stream",
          "description": "Reality, time, free will and mind-body problem.",
          "topics": [
            { "id": "topic_phil_11_7_1", "title": "Mind-Body Problem", "chapterId": "phil_11_ch7", "order": 1 },
            { "id": "topic_phil_11_7_2", "title": "Free Will vs Determinism", "chapterId": "phil_11_ch7", "order": 2 },
            { "id": "topic_phil_11_7_3", "title": "Nature of Reality", "chapterId": "phil_11_ch7", "order": 3 }
          ]
        }

      ],
      "Home Science": [

        {
          "id": "hs_11_ch1",
          "title": "Understanding Home Science",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Scope, relevance and areas of home science.",
          "topics": [
            { "id": "topic_hs_11_1_1", "title": "Meaning & Scope of Home Science", "chapterId": "hs_11_ch1", "order": 1 },
            { "id": "topic_hs_11_1_2", "title": "Fields of Home Science", "chapterId": "hs_11_ch1", "order": 2 },
            { "id": "topic_hs_11_1_3", "title": "Professional Opportunities", "chapterId": "hs_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch2",
          "title": "Understanding the Self",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Self-awareness, values, and personality development.",
          "topics": [
            { "id": "topic_hs_11_2_1", "title": "Self-Concept & Self-Esteem", "chapterId": "hs_11_ch2", "order": 1 },
            { "id": "topic_hs_11_2_2", "title": "Values & Beliefs", "chapterId": "hs_11_ch2", "order": 2 },
            { "id": "topic_hs_11_2_3", "title": "Personality Factors", "chapterId": "hs_11_ch2", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch3",
          "title": "Food, Nutrition and Health",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Nutrition, balanced diet and deficiency diseases.",
          "topics": [
            { "id": "topic_hs_11_3_1", "title": "Nutrients & Functions", "chapterId": "hs_11_ch3", "order": 1 },
            { "id": "topic_hs_11_3_2", "title": "Balanced Diet", "chapterId": "hs_11_ch3", "order": 2 },
            { "id": "topic_hs_11_3_3", "title": "Deficiency Diseases", "chapterId": "hs_11_ch3", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch4",
          "title": "Resource Management",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Types and management of resources.",
          "topics": [
            { "id": "topic_hs_11_4_1", "title": "Human & Non-human Resources", "chapterId": "hs_11_ch4", "order": 1 },
            { "id": "topic_hs_11_4_2", "title": "Budgeting & Planning", "chapterId": "hs_11_ch4", "order": 2 },
            { "id": "topic_hs_11_4_3", "title": "Time & Energy Management", "chapterId": "hs_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch5",
          "title": "Fabric Around Us",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Fibres, fabrics and their properties.",
          "topics": [
            { "id": "topic_hs_11_5_1", "title": "Types of Fibres", "chapterId": "hs_11_ch5", "order": 1 },
            { "id": "topic_hs_11_5_2", "title": "Fabric Construction", "chapterId": "hs_11_ch5", "order": 2 },
            { "id": "topic_hs_11_5_3", "title": "Finishing Processes", "chapterId": "hs_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch6",
          "title": "Relationships and Communication",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Family relations, conflict and communication.",
          "topics": [
            { "id": "topic_hs_11_6_1", "title": "Types of Relationships", "chapterId": "hs_11_ch6", "order": 1 },
            { "id": "topic_hs_11_6_2", "title": "Conflict Management", "chapterId": "hs_11_ch6", "order": 2 },
            { "id": "topic_hs_11_6_3", "title": "Communication Skills", "chapterId": "hs_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "hs_11_ch7",
          "title": "Life Skills",
          "subject": "Home Science",
          "classLevel": "11th - Arts stream",
          "description": "Decision making, problem solving and stress management.",
          "topics": [
            { "id": "topic_hs_11_7_1", "title": "Decision Making", "chapterId": "hs_11_ch7", "order": 1 },
            { "id": "topic_hs_11_7_2", "title": "Problem Solving", "chapterId": "hs_11_ch7", "order": 2 },
            { "id": "topic_hs_11_7_3", "title": "Managing Stress", "chapterId": "hs_11_ch7", "order": 3 }
          ]
        }

      ],
      "Fine Arts": [

        {
          "id": "fa_11_ch1",
          "title": "Fundamentals of Art",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Basics of drawing, design and art elements.",
          "topics": [
            { "id": "topic_fa_11_1_1", "title": "Elements of Art", "chapterId": "fa_11_ch1", "order": 1 },
            { "id": "topic_fa_11_1_2", "title": "Principles of Design", "chapterId": "fa_11_ch1", "order": 2 },
            { "id": "topic_fa_11_1_3", "title": "Colour Theory", "chapterId": "fa_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch2",
          "title": "Indian Art (Prehistoric to Gupta Period)",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Evolution of Indian art – caves, temples and sculptures.",
          "topics": [
            { "id": "topic_fa_11_2_1", "title": "Prehistoric Rock Art", "chapterId": "fa_11_ch2", "order": 1 },
            { "id": "topic_fa_11_2_2", "title": "Indus Valley Art", "chapterId": "fa_11_ch2", "order": 2 },
            { "id": "topic_fa_11_2_3", "title": "Maurya to Gupta Art", "chapterId": "fa_11_ch2", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch3",
          "title": "Medieval Indian Art",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Temple architecture and miniature painting.",
          "topics": [
            { "id": "topic_fa_11_3_1", "title": "Temple Architecture Styles", "chapterId": "fa_11_ch3", "order": 1 },
            { "id": "topic_fa_11_3_2", "title": "Rajput Miniature Paintings", "chapterId": "fa_11_ch3", "order": 2 },
            { "id": "topic_fa_11_3_3", "title": "Mughal Miniatures", "chapterId": "fa_11_ch3", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch4",
          "title": "Modern Indian Art",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Artists of modern India and their work.",
          "topics": [
            { "id": "topic_fa_11_4_1", "title": "Company School of Art", "chapterId": "fa_11_ch4", "order": 1 },
            { "id": "topic_fa_11_4_2", "title": "Bengal School Artists", "chapterId": "fa_11_ch4", "order": 2 },
            { "id": "topic_fa_11_4_3", "title": "Contemporary Artists", "chapterId": "fa_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch5",
          "title": "Techniques of Painting",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Tools, techniques and materials used in painting.",
          "topics": [
            { "id": "topic_fa_11_5_1", "title": "Watercolour Techniques", "chapterId": "fa_11_ch5", "order": 1 },
            { "id": "topic_fa_11_5_2", "title": "Acrylic & Oil Painting", "chapterId": "fa_11_ch5", "order": 2 },
            { "id": "topic_fa_11_5_3", "title": "Brushwork & Textures", "chapterId": "fa_11_ch5", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch6",
          "title": "Still Life",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Observation drawing, composition and lighting.",
          "topics": [
            { "id": "topic_fa_11_6_1", "title": "Composition Techniques", "chapterId": "fa_11_ch6", "order": 1 },
            { "id": "topic_fa_11_6_2", "title": "Light & Shadow Study", "chapterId": "fa_11_ch6", "order": 2 },
            { "id": "topic_fa_11_6_3", "title": "Texture Representation", "chapterId": "fa_11_ch6", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch7",
          "title": "Portrait Study",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Human anatomy and portrait drawing basics.",
          "topics": [
            { "id": "topic_fa_11_7_1", "title": "Facial Proportions", "chapterId": "fa_11_ch7", "order": 1 },
            { "id": "topic_fa_11_7_2", "title": "Shading Techniques", "chapterId": "fa_11_ch7", "order": 2 },
            { "id": "topic_fa_11_7_3", "title": "Live Sketch Practice", "chapterId": "fa_11_ch7", "order": 3 }
          ]
        },

        {
          "id": "fa_11_ch8",
          "title": "Composition in Painting",
          "subject": "Fine Arts",
          "classLevel": "11th - Arts stream",
          "description": "Rules of composition and thematic painting.",
          "topics": [
            { "id": "topic_fa_11_8_1", "title": "Balance & Harmony", "chapterId": "fa_11_ch8", "order": 1 },
            { "id": "topic_fa_11_8_2", "title": "Perspective Techniques", "chapterId": "fa_11_ch8", "order": 2 },
            { "id": "topic_fa_11_8_3", "title": "Figure Composition", "chapterId": "fa_11_ch8", "order": 3 }
          ]
        }

      ],
      "Fashion Studies": [

        {
          "id": "fs_11_ch1",
          "title": "Introduction to Fashion",
          "subject": "Fashion Studies",
          "classLevel": "11th - Arts stream",
          "description": "Fashion terminology, concepts and career options.",
          "topics": [
            { "id": "topic_fs_11_1_1", "title": "Fashion & Apparel Industry", "chapterId": "fs_11_ch1", "order": 1 },
            { "id": "topic_fs_11_1_2", "title": "Fashion Terminology", "chapterId": "fs_11_ch1", "order": 2 },
            { "id": "topic_fs_11_1_3", "title": "Career Opportunities", "chapterId": "fs_11_ch1", "order": 3 }
          ]
        },

        {
          "id": "fs_11_ch2",
          "title": "Elements of Fashion",
          "subject": "Fashion Studies",
          "classLevel": "11th - Arts stream",
          "description": "Elements and principles of fashion design.",
          "topics": [
            { "id": "topic_fs_11_2_1", "title": "Elements of Design", "chapterId": "fs_11_ch2", "order": 1 },
            { "id": "topic_fs_11_2_2", "title": "Principles of Design", "chapterId": "fs_11_ch2", "order": 2 }
          ]
        },

        {
          "id": "fs_11_ch3",
          "title": "Textile Basics",
          "subject": "Fashion Studies",
          "classLevel": "11th - Arts stream",
          "description": "Fibres, yarns, fabrics and their construction.",
          "topics": [
            { "id": "topic_fs_11_3_1", "title": "Natural & Synthetic Fibres", "chapterId": "fs_11_ch3", "order": 1 },
            { "id": "topic_fs_11_3_2", "title": "Yarn Construction", "chapterId": "fs_11_ch3", "order": 2 },
            { "id": "topic_fs_11_3_3", "title": "Fabric Weaves", "chapterId": "fs_11_ch3", "order": 3 }
          ]
        },

        {
          "id": "fs_11_ch4",
          "title": "Fashion Merchandising",
          "subject": "Fashion Studies",
          "classLevel": "11th - Arts stream",
          "description": "Fashion marketing and retail concepts.",
          "topics": [
            { "id": "topic_fs_11_4_1", "title": "Merchandising Process", "chapterId": "fs_11_ch4", "order": 1 },
            { "id": "topic_fs_11_4_2", "title": "Retail Formats", "chapterId": "fs_11_ch4", "order": 2 },
            { "id": "topic_fs_11_4_3", "title": "Fashion Forecasting", "chapterId": "fs_11_ch4", "order": 3 }
          ]
        },

        {
          "id": "fs_11_ch5",
          "title": "Fashion Communication",
          "subject": "Fashion Studies",
          "classLevel": "11th - Arts stream",
          "description": "Fashion media, advertising and visual communication.",
          "topics": [
            { "id": "topic_fs_11_5_1", "title": "Fashion Journalism", "chapterId": "fs_11_ch5", "order": 1 },
            { "id": "topic_fs_11_5_2", "title": "Brand Promotion", "chapterId": "fs_11_ch5", "order": 2 },
            { "id": "topic_fs_11_5_3", "title": "Visual Merchandising", "chapterId": "fs_11_ch5", "order": 3 }
          ]
        }

      ],
      "Physical Education": [

        {
          "id": "pe_11_ch1",
          "title": "Changing Trends & Career in Physical Education",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Careers, evolution and scope of physical education.",
          "topics": [
            { "id": "topic_pe_11_1_1", "title": "Concept & Aims", "chapterId": "pe_11_ch1", "order": 1 },
            { "id": "topic_pe_11_1_2", "title": "Career Opportunities", "chapterId": "pe_11_ch1", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch2",
          "title": "Olympic Movement",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "History and development of Olympic games.",
          "topics": [
            { "id": "topic_pe_11_2_1", "title": "Ancient Olympics", "chapterId": "pe_11_ch2", "order": 1 },
            { "id": "topic_pe_11_2_2", "title": "Modern Olympic Movement", "chapterId": "pe_11_ch2", "order": 2 },
            { "id": "topic_pe_11_2_3", "title": "Olympic Symbols & Values", "chapterId": "pe_11_ch2", "order": 3 }
          ]
        },

        {
          "id": "pe_11_ch3",
          "title": "Physical Fitness and Wellness",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Components of fitness and wellness lifestyle.",
          "topics": [
            { "id": "topic_pe_11_3_1", "title": "Components of Fitness", "chapterId": "pe_11_ch3", "order": 1 },
            { "id": "topic_pe_11_3_2", "title": "Wellness & Lifestyle", "chapterId": "pe_11_ch3", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch4",
          "title": "Yoga",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Meaning, types and benefits of yoga practices.",
          "topics": [
            { "id": "topic_pe_11_4_1", "title": "Meaning & Importance", "chapterId": "pe_11_ch4", "order": 1 },
            { "id": "topic_pe_11_4_2", "title": "Types of Asanas", "chapterId": "pe_11_ch4", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch5",
          "title": "Physical Activity Environment",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Facilities and equipment required for sports.",
          "topics": [
            { "id": "topic_pe_11_5_1", "title": "Sports Infrastructure", "chapterId": "pe_11_ch5", "order": 1 },
            { "id": "topic_pe_11_5_2", "title": "Outdoor & Indoor Facilities", "chapterId": "pe_11_ch5", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch6",
          "title": "Tests and Measurements",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Fitness tests and skill tests.",
          "topics": [
            { "id": "topic_pe_11_6_1", "title": "AAHPER Tests", "chapterId": "pe_11_ch6", "order": 1 },
            { "id": "topic_pe_11_6_2", "title": "General Motor Ability Tests", "chapterId": "pe_11_ch6", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch7",
          "title": "Fundamentals of Anatomy & Physiology",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Systems of the body and their functioning.",
          "topics": [
            { "id": "topic_pe_11_7_1", "title": "Muscular System", "chapterId": "pe_11_ch7", "order": 1 },
            { "id": "topic_pe_11_7_2", "title": "Respiratory System", "chapterId": "pe_11_ch7", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch8",
          "title": "Biomechanics",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Motion, force and equilibrium.",
          "topics": [
            { "id": "topic_pe_11_8_1", "title": "Types of Motion", "chapterId": "pe_11_ch8", "order": 1 },
            { "id": "topic_pe_11_8_2", "title": "Levers & Balance", "chapterId": "pe_11_ch8", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch9",
          "title": "Psychology in Sports",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Motivation, personality and stress in sports.",
          "topics": [
            { "id": "topic_pe_11_9_1", "title": "Sports Motivation", "chapterId": "pe_11_ch9", "order": 1 },
            { "id": "topic_pe_11_9_2", "title": "Anxiety & Stress", "chapterId": "pe_11_ch9", "order": 2 }
          ]
        },

        {
          "id": "pe_11_ch10",
          "title": "Training Methods",
          "subject": "Physical Education",
          "classLevel": "11th - Arts stream",
          "description": "Strength, endurance and speed training.",
          "topics": [
            { "id": "topic_pe_11_10_1", "title": "Strength Training", "chapterId": "pe_11_ch10", "order": 1 },
            { "id": "topic_pe_11_10_2", "title": "Endurance Training", "chapterId": "pe_11_ch10", "order": 2 },
            { "id": "topic_pe_11_10_3", "title": "Speed Training", "chapterId": "pe_11_ch10", "order": 3 }
          ]
        }

      ],
    },
    "12th - Science stream": {
      "Physics": [
        {
          "id": "phy_12_p1_ch1",
          "title": "Electric Charges and Fields",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Coulomb’s law, electric field, flux and Gauss’s theorem.",
          "topics": [
            { "id": "topic_phy_12_p1_1_1", "title": "Electric Charge & Properties", "chapterId": "phy_12_p1_ch1", "order": 1 },
            { "id": "topic_phy_12_p1_1_2", "title": "Coulomb’s Law", "chapterId": "phy_12_p1_ch1", "order": 2 },
            { "id": "topic_phy_12_p1_1_3", "title": "Electric Field & Field Lines", "chapterId": "phy_12_p1_ch1", "order": 3 },
            { "id": "topic_phy_12_p1_1_4", "title": "Electric Dipole & Field", "chapterId": "phy_12_p1_ch1", "order": 4 },
            { "id": "topic_phy_12_p1_1_5", "title": "Electric Flux", "chapterId": "phy_12_p1_ch1", "order": 5 },
            { "id": "topic_phy_12_p1_1_6", "title": "Gauss’s Theorem", "chapterId": "phy_12_p1_ch1", "order": 6 },
            { "id": "topic_phy_12_p1_1_7", "title": "Applications of Gauss’s Law", "chapterId": "phy_12_p1_ch1", "order": 7 }
          ]
        },

        {
          "id": "phy_12_p1_ch2",
          "title": "Electrostatic Potential and Capacitance",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Electric potential, potential energy, capacitance and dielectrics.",
          "topics": [
            { "id": "topic_phy_12_p1_2_1", "title": "Electric Potential & Potential Difference", "chapterId": "phy_12_p1_ch2", "order": 1 },
            { "id": "topic_phy_12_p1_2_2", "title": "Equipotential Surfaces", "chapterId": "phy_12_p1_ch2", "order": 2 },
            { "id": "topic_phy_12_p1_2_3", "title": "Electric Potential Energy", "chapterId": "phy_12_p1_ch2", "order": 3 },
            { "id": "topic_phy_12_p1_2_4", "title": "Capacitance & Capacitor Types", "chapterId": "phy_12_p1_ch2", "order": 4 },
            { "id": "topic_phy_12_p1_2_5", "title": "Capacitors in Series & Parallel", "chapterId": "phy_12_p1_ch2", "order": 5 },
            { "id": "topic_phy_12_p1_2_6", "title": "Dielectrics & Polarisation", "chapterId": "phy_12_p1_ch2", "order": 6 },
            { "id": "topic_phy_12_p1_2_7", "title": "Energy Stored in Capacitor", "chapterId": "phy_12_p1_ch2", "order": 7 }
          ]
        },

        {
          "id": "phy_12_p1_ch3",
          "title": "Current Electricity",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Electric current, drift velocity, Ohm’s law, resistors and cells.",
          "topics": [
            { "id": "topic_phy_12_p1_3_1", "title": "Electric Current & Drift Velocity", "chapterId": "phy_12_p1_ch3", "order": 1 },
            { "id": "topic_phy_12_p1_3_2", "title": "Ohm’s Law & Limitations", "chapterId": "phy_12_p1_ch3", "order": 2 },
            { "id": "topic_phy_12_p1_3_3", "title": "Resistance & Resistivity", "chapterId": "phy_12_p1_ch3", "order": 3 },
            { "id": "topic_phy_12_p1_3_4", "title": "Temperature Dependence of Resistance", "chapterId": "phy_12_p1_ch3", "order": 4 },
            { "id": "topic_phy_12_p1_3_5", "title": "Kirchhoff’s Laws", "chapterId": "phy_12_p1_ch3", "order": 5 },
            { "id": "topic_phy_12_p1_3_6", "title": "Wheatstone Bridge", "chapterId": "phy_12_p1_ch3", "order": 6 },
            { "id": "topic_phy_12_p1_3_7", "title": "Meter Bridge", "chapterId": "phy_12_p1_ch3", "order": 7 },
            { "id": "topic_phy_12_p1_3_8", "title": "Potentiometer", "chapterId": "phy_12_p1_ch3", "order": 8 }
          ]
        },

        {
          "id": "phy_12_p1_ch4",
          "title": "Moving Charges and Magnetism",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Magnetic force, Biot–Savart law, Ampere’s law and cyclotron.",
          "topics": [
            { "id": "topic_phy_12_p1_4_1", "title": "Magnetic Force on Moving Charge", "chapterId": "phy_12_p1_ch4", "order": 1 },
            { "id": "topic_phy_12_p1_4_2", "title": "Lorentz Force", "chapterId": "phy_12_p1_ch4", "order": 2 },
            { "id": "topic_phy_12_p1_4_3", "title": "Biot–Savart Law", "chapterId": "phy_12_p1_ch4", "order": 3 },
            { "id": "topic_phy_12_p1_4_4", "title": "Ampere’s Circuital Law", "chapterId": "phy_12_p1_ch4", "order": 4 },
            { "id": "topic_phy_12_p1_4_5", "title": "Magnetic Field due to Solenoid & Toroid", "chapterId": "phy_12_p1_ch4", "order": 5 },
            { "id": "topic_phy_12_p1_4_6", "title": "Force Between Two Parallel Currents", "chapterId": "phy_12_p1_ch4", "order": 6 },
            { "id": "topic_phy_12_p1_4_7", "title": "Cyclotron", "chapterId": "phy_12_p1_ch4", "order": 7 }
          ]
        },

        {
          "id": "phy_12_p1_ch5",
          "title": "Magnetism and Matter",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Magnetisation, susceptibility, Earth’s magnetism and materials.",
          "topics": [
            { "id": "topic_phy_12_p1_5_1", "title": "Magnetization & Magnetic Intensity", "chapterId": "phy_12_p1_ch5", "order": 1 },
            { "id": "topic_phy_12_p1_5_2", "title": "Magnetic Susceptibility", "chapterId": "phy_12_p1_ch5", "order": 2 },
            { "id": "topic_phy_12_p1_5_3", "title": "Types of Magnetic Materials", "chapterId": "phy_12_p1_ch5", "order": 3 },
            { "id": "topic_phy_12_p1_5_4", "title": "Earth’s Magnetic Field", "chapterId": "phy_12_p1_ch5", "order": 4 },
            { "id": "topic_phy_12_p1_5_5", "title": "Magnetic Declination & Dip", "chapterId": "phy_12_p1_ch5", "order": 5 }
          ]
        },

        {
          "id": "phy_12_p1_ch6",
          "title": "Electromagnetic Induction",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Faraday’s law, Lenz’s law, mutual & self induction and generators.",
          "topics": [
            { "id": "topic_phy_12_p1_6_1", "title": "Faraday’s Law of Induction", "chapterId": "phy_12_p1_ch6", "order": 1 },
            { "id": "topic_phy_12_p1_6_2", "title": "Lenz’s Law", "chapterId": "phy_12_p1_ch6", "order": 2 },
            { "id": "topic_phy_12_p1_6_3", "title": "Induced EMF & Current", "chapterId": "phy_12_p1_ch6", "order": 3 },
            { "id": "topic_phy_12_p1_6_4", "title": "Self & Mutual Induction", "chapterId": "phy_12_p1_ch6", "order": 4 },
            { "id": "topic_phy_12_p1_6_5", "title": "Energy Stored in Inductor", "chapterId": "phy_12_p1_ch6", "order": 5 },
            { "id": "topic_phy_12_p1_6_6", "title": "AC Generator", "chapterId": "phy_12_p1_ch6", "order": 6 }
          ]
        },

        {
          "id": "phy_12_p1_ch7",
          "title": "Alternating Current",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "AC circuits, impedance, resonance and transformers.",
          "topics": [
            { "id": "topic_phy_12_p1_7_1", "title": "AC Voltage & Current", "chapterId": "phy_12_p1_ch7", "order": 1 },
            { "id": "topic_phy_12_p1_7_2", "title": "Phasor Diagrams", "chapterId": "phy_12_p1_ch7", "order": 2 },
            { "id": "topic_phy_12_p1_7_3", "title": "Impedance & Reactance", "chapterId": "phy_12_p1_ch7", "order": 3 },
            { "id": "topic_phy_12_p1_7_4", "title": "Series LCR Circuit", "chapterId": "phy_12_p1_ch7", "order": 4 },
            { "id": "topic_phy_12_p1_7_5", "title": "Resonance", "chapterId": "phy_12_p1_ch7", "order": 5 },
            { "id": "topic_phy_12_p1_7_6", "title": "Power in AC Circuits", "chapterId": "phy_12_p1_ch7", "order": 6 },
            { "id": "topic_phy_12_p1_7_7", "title": "Transformers", "chapterId": "phy_12_p1_ch7", "order": 7 }
          ]
        },

        {
          "id": "phy_12_p1_ch8",
          "title": "Electromagnetic Waves",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Maxwell’s equations, EM wave properties and spectrum.",
          "topics": [
            { "id": "topic_phy_12_p1_8_1", "title": "Displacement Current", "chapterId": "phy_12_p1_ch8", "order": 1 },
            { "id": "topic_phy_12_p1_8_2", "title": "Maxwell’s Equations Basics", "chapterId": "phy_12_p1_ch8", "order": 2 },
            { "id": "topic_phy_12_p1_8_3", "title": "Properties of EM Waves", "chapterId": "phy_12_p1_ch8", "order": 3 },
            { "id": "topic_phy_12_p1_8_4", "title": "Electromagnetic Spectrum", "chapterId": "phy_12_p1_ch8", "order": 4 },
            { "id": "topic_phy_12_p1_8_5", "title": "Applications of EM Waves", "chapterId": "phy_12_p1_ch8", "order": 5 }
          ]
        },
        {
          "id": "phy_12_p2_ch9",
          "title": "Ray Optics and Optical Instruments",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Reflection, refraction, lenses, mirrors, and optical instruments.",
          "topics": [
            { "id": "topic_phy_12_p2_9_1", "title": "Reflection & Refraction Basics", "chapterId": "phy_12_p2_ch9", "order": 1 },
            { "id": "topic_phy_12_p2_9_2", "title": "Total Internal Reflection", "chapterId": "phy_12_p2_ch9", "order": 2 },
            { "id": "topic_phy_12_p2_9_3", "title": "Refraction through Lenses", "chapterId": "phy_12_p2_ch9", "order": 3 },
            { "id": "topic_phy_12_p2_9_4", "title": "Lens Maker's Formula", "chapterId": "phy_12_p2_ch9", "order": 4 },
            { "id": "topic_phy_12_p2_9_5", "title": "Prism & Dispersion", "chapterId": "phy_12_p2_ch9", "order": 5 },
            { "id": "topic_phy_12_p2_9_6", "title": "Human Eye & Defects", "chapterId": "phy_12_p2_ch9", "order": 6 },
            { "id": "topic_phy_12_p2_9_7", "title": "Microscopes", "chapterId": "phy_12_p2_ch9", "order": 7 },
            { "id": "topic_phy_12_p2_9_8", "title": "Astronomical Telescopes", "chapterId": "phy_12_p2_ch9", "order": 8 }
          ]
        },

        {
          "id": "phy_12_p2_ch10",
          "title": "Wave Optics",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Interference, diffraction, polarisation and Young’s experiment.",
          "topics": [
            { "id": "topic_phy_12_p2_10_1", "title": "Huygens’ Principle", "chapterId": "phy_12_p2_ch10", "order": 1 },
            { "id": "topic_phy_12_p2_10_2", "title": "Interference of Light", "chapterId": "phy_12_p2_ch10", "order": 2 },
            { "id": "topic_phy_12_p2_10_3", "title": "Young’s Double Slit Experiment", "chapterId": "phy_12_p2_ch10", "order": 3 },
            { "id": "topic_phy_12_p2_10_4", "title": "Diffraction: Single Slit", "chapterId": "phy_12_p2_ch10", "order": 4 },
            { "id": "topic_phy_12_p2_10_5", "title": "Polarisation", "chapterId": "phy_12_p2_ch10", "order": 5 },
            { "id": "topic_phy_12_p2_10_6", "title": "Brewster’s Law", "chapterId": "phy_12_p2_ch10", "order": 6 }
          ]
        },

        {
          "id": "phy_12_p2_ch11",
          "title": "Dual Nature of Radiation and Matter",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Photoelectric effect, electron emission and de Broglie waves.",
          "topics": [
            { "id": "topic_phy_12_p2_11_1", "title": "Electron Emission Types", "chapterId": "phy_12_p2_ch11", "order": 1 },
            { "id": "topic_phy_12_p2_11_2", "title": "Photoelectric Effect", "chapterId": "phy_12_p2_ch11", "order": 2 },
            { "id": "topic_phy_12_p2_11_3", "title": "Einstein’s Photoelectric Equation", "chapterId": "phy_12_p2_ch11", "order": 3 },
            { "id": "topic_phy_12_p2_11_4", "title": "Wave-Particle Duality", "chapterId": "phy_12_p2_ch11", "order": 4 },
            { "id": "topic_phy_12_p2_11_5", "title": "de Broglie Wavelength", "chapterId": "phy_12_p2_ch11", "order": 5 },
            { "id": "topic_phy_12_p2_11_6", "title": "Davisson-Germer Experiment", "chapterId": "phy_12_p2_ch11", "order": 6 }
          ]
        },

        {
          "id": "phy_12_p2_ch12",
          "title": "Atoms",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Atomic models, spectra and Bohr’s theory.",
          "topics": [
            { "id": "topic_phy_12_p2_12_1", "title": "Rutherford’s Scattering Experiment", "chapterId": "phy_12_p2_ch12", "order": 1 },
            { "id": "topic_phy_12_p2_12_2", "title": "Atomic Spectra", "chapterId": "phy_12_p2_ch12", "order": 2 },
            { "id": "topic_phy_12_p2_12_3", "title": "Bohr’s Model of Hydrogen Atom", "chapterId": "phy_12_p2_ch12", "order": 3 },
            { "id": "topic_phy_12_p2_12_4", "title": "Energy Levels & Spectral Lines", "chapterId": "phy_12_p2_ch12", "order": 4 },
            { "id": "topic_phy_12_p2_12_5", "title": "de Broglie Explanation", "chapterId": "phy_12_p2_ch12", "order": 5 }
          ]
        },

        {
          "id": "phy_12_p2_ch13",
          "title": "Nuclei",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Nuclear structure, radioactivity and nuclear energy.",
          "topics": [
            { "id": "topic_phy_12_p2_13_1", "title": "Atomic Mass & Binding Energy", "chapterId": "phy_12_p2_ch13", "order": 1 },
            { "id": "topic_phy_12_p2_13_2", "title": "Mass Defect & BE Curve", "chapterId": "phy_12_p2_ch13", "order": 2 },
            { "id": "topic_phy_12_p2_13_3", "title": "Radioactivity: α, β, γ", "chapterId": "phy_12_p2_ch13", "order": 3 },
            { "id": "topic_phy_12_p2_13_4", "title": "Radioactive Decay Law", "chapterId": "phy_12_p2_ch13", "order": 4 },
            { "id": "topic_phy_12_p2_13_5", "title": "Nuclear Fission & Fusion", "chapterId": "phy_12_p2_ch13", "order": 5 }
          ]
        },

        {
          "id": "phy_12_p2_ch14",
          "title": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
          "subject": "Physics",
          "classLevel": "12th - Science stream",
          "description": "Semiconductors, diodes, transistors and logic gates.",
          "topics": [
            { "id": "topic_phy_12_p2_14_1", "title": "Semiconductor Types (n & p)", "chapterId": "phy_12_p2_ch14", "order": 1 },
            { "id": "topic_phy_12_p2_14_2", "title": "p-n Junction Diode", "chapterId": "phy_12_p2_ch14", "order": 2 },
            { "id": "topic_phy_12_p2_14_3", "title": "Zener Diode", "chapterId": "phy_12_p2_ch14", "order": 3 },
            { "id": "topic_phy_12_p2_14_4", "title": "Transistor (CE Configuration)", "chapterId": "phy_12_p2_ch14", "order": 4 },
            { "id": "topic_phy_12_p2_14_5", "title": "Transistor as Amplifier & Switch", "chapterId": "phy_12_p2_ch14", "order": 5 },
            { "id": "topic_phy_12_p2_14_6", "title": "Logic Gates (AND, OR, NOT, NAND, NOR)", "chapterId": "phy_12_p2_ch14", "order": 6 }
          ]
        }
      ],
      "Chemistry": [

        {
          "id": "chem_12_p1_ch1",
          "title": "The Solid State",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Crystalline and amorphous solids, defects, packing and properties.",
          "topics": [
            { "id": "topic_chem_12_p1_1_1", "title": "Crystalline vs Amorphous Solids", "chapterId": "chem_12_p1_ch1", "order": 1 },
            { "id": "topic_chem_12_p1_1_2", "title": "Unit Cells & Crystal Lattices", "chapterId": "chem_12_p1_ch1", "order": 2 },
            { "id": "topic_chem_12_p1_1_3", "title": "Packing Efficiency", "chapterId": "chem_12_p1_ch1", "order": 3 },
            { "id": "topic_chem_12_p1_1_4", "title": "Interstitial & Vacancy Defects", "chapterId": "chem_12_p1_ch1", "order": 4 },
            { "id": "topic_chem_12_p1_1_5", "title": "Electrical & Magnetic Properties", "chapterId": "chem_12_p1_ch1", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p1_ch2",
          "title": "Solutions",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Solubility, concentration terms, Raoult's law and colligative properties.",
          "topics": [
            { "id": "topic_chem_12_p1_2_1", "title": "Types of Solutions", "chapterId": "chem_12_p1_ch2", "order": 1 },
            { "id": "topic_chem_12_p1_2_2", "title": "Solubility Factors", "chapterId": "chem_12_p1_ch2", "order": 2 },
            { "id": "topic_chem_12_p1_2_3", "title": "Raoult’s Law", "chapterId": "chem_12_p1_ch2", "order": 3 },
            { "id": "topic_chem_12_p1_2_4", "title": "Ideal & Non-ideal Solutions", "chapterId": "chem_12_p1_ch2", "order": 4 },
            { "id": "topic_chem_12_p1_2_5", "title": "Colligative Properties", "chapterId": "chem_12_p1_ch2", "order": 5 },
            { "id": "topic_chem_12_p1_2_6", "title": "Abnormal Molar Mass", "chapterId": "chem_12_p1_ch2", "order": 6 }
          ]
        },

        {
          "id": "chem_12_p1_ch3",
          "title": "Electrochemistry",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Electrochemical cells, Nernst equation, conductance and batteries.",
          "topics": [
            { "id": "topic_chem_12_p1_3_1", "title": "Redox Reactions & Electrochemical Cells", "chapterId": "chem_12_p1_ch3", "order": 1 },
            { "id": "topic_chem_12_p1_3_2", "title": "Nernst Equation", "chapterId": "chem_12_p1_ch3", "order": 2 },
            { "id": "topic_chem_12_p1_3_3", "title": "Conductance & Kohlrausch Law", "chapterId": "chem_12_p1_ch3", "order": 3 },
            { "id": "topic_chem_12_p1_3_4", "title": "Primary & Secondary Batteries", "chapterId": "chem_12_p1_ch3", "order": 4 },
            { "id": "topic_chem_12_p1_3_5", "title": "Fuel Cells & Corrosion", "chapterId": "chem_12_p1_ch3", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p1_ch4",
          "title": "Chemical Kinetics",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Rate laws, order of reaction, Arrhenius equation and collision theory.",
          "topics": [
            { "id": "topic_chem_12_p1_4_1", "title": "Rate of Reaction & Rate Law", "chapterId": "chem_12_p1_ch4", "order": 1 },
            { "id": "topic_chem_12_p1_4_2", "title": "Half-life & Order of Reaction", "chapterId": "chem_12_p1_ch4", "order": 2 },
            { "id": "topic_chem_12_p1_4_3", "title": "Temperature Dependence & Arrhenius Equation", "chapterId": "chem_12_p1_ch4", "order": 3 },
            { "id": "topic_chem_12_p1_4_4", "title": "Collision Theory", "chapterId": "chem_12_p1_ch4", "order": 4 }
          ]
        },

        {
          "id": "chem_12_p1_ch5",
          "title": "Surface Chemistry",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Adsorption, catalysts, colloids, emulsions and surface phenomena.",
          "topics": [
            { "id": "topic_chem_12_p1_5_1", "title": "Adsorption & Types", "chapterId": "chem_12_p1_ch5", "order": 1 },
            { "id": "topic_chem_12_p1_5_2", "title": "Freundlich Adsorption Isotherm", "chapterId": "chem_12_p1_ch5", "order": 2 },
            { "id": "topic_chem_12_p1_5_3", "title": "Catalysis & Enzyme Catalysis", "chapterId": "chem_12_p1_ch5", "order": 3 },
            { "id": "topic_chem_12_p1_5_4", "title": "Colloids & Properties", "chapterId": "chem_12_p1_ch5", "order": 4 },
            { "id": "topic_chem_12_p1_5_5", "title": "Emulsions & Applications", "chapterId": "chem_12_p1_ch5", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p1_ch6",
          "title": "General Principles and Processes of Isolation of Elements",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Metallurgy, extraction of metals and refining processes.",
          "topics": [
            { "id": "topic_chem_12_p1_6_1", "title": "Concentration of Ores", "chapterId": "chem_12_p1_ch6", "order": 1 },
            { "id": "topic_chem_12_p1_6_2", "title": "Roasting & Calcination", "chapterId": "chem_12_p1_ch6", "order": 2 },
            { "id": "topic_chem_12_p1_6_3", "title": "Reduction Processes", "chapterId": "chem_12_p1_ch6", "order": 3 },
            { "id": "topic_chem_12_p1_6_4", "title": "Electrolytic Refining", "chapterId": "chem_12_p1_ch6", "order": 4 },
            { "id": "topic_chem_12_p1_6_5", "title": "Thermodynamics of Metallurgy", "chapterId": "chem_12_p1_ch6", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p1_ch7",
          "title": "p-Block Elements (Group 15–18)",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Group 15, 16, 17 and 18 elements, their compounds and trends.",
          "topics": [
            { "id": "topic_chem_12_p1_7_1", "title": "Group 15: Nitrogen Family", "chapterId": "chem_12_p1_ch7", "order": 1 },
            { "id": "topic_chem_12_p1_7_2", "title": "Ammonia & Nitric Acid", "chapterId": "chem_12_p1_ch7", "order": 2 },
            { "id": "topic_chem_12_p1_7_3", "title": "Group 16: Oxygen Family", "chapterId": "chem_12_p1_ch7", "order": 3 },
            { "id": "topic_chem_12_p1_7_4", "title": "Ozone & Sulphur Compounds", "chapterId": "chem_12_p1_ch7", "order": 4 },
            { "id": "topic_chem_12_p1_7_5", "title": "Group 17: Halogens", "chapterId": "chem_12_p1_ch7", "order": 5 },
            { "id": "topic_chem_12_p1_7_6", "title": "Group 18: Noble Gases", "chapterId": "chem_12_p1_ch7", "order": 6 }
          ]
        },

        {
          "id": "chem_12_p2_ch8",
          "title": "d- and f-Block Elements",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Properties, trends and important compounds of transition and inner-transition elements.",
          "topics": [
            { "id": "topic_chem_12_p2_8_1", "title": "General Properties of d-Block Elements", "chapterId": "chem_12_p2_ch8", "order": 1 },
            { "id": "topic_chem_12_p2_8_2", "title": "Transition Metal Complexes", "chapterId": "chem_12_p2_ch8", "order": 2 },
            { "id": "topic_chem_12_p2_8_3", "title": "Magnetic Properties", "chapterId": "chem_12_p2_ch8", "order": 3 },
            { "id": "topic_chem_12_p2_8_4", "title": "f-Block: Lanthanides & Actinides", "chapterId": "chem_12_p2_ch8", "order": 4 },
            { "id": "topic_chem_12_p2_8_5", "title": "Oxidation States & Chemical Reactivity", "chapterId": "chem_12_p2_ch8", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p2_ch9",
          "title": "Coordination Compounds",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Nomenclature, bonding, isomerism and importance of coordination compounds.",
          "topics": [
            { "id": "topic_chem_12_p2_9_1", "title": "Coordination Entity & Terminology", "chapterId": "chem_12_p2_ch9", "order": 1 },
            { "id": "topic_chem_12_p2_9_2", "title": "Nomenclature of Complexes", "chapterId": "chem_12_p2_ch9", "order": 2 },
            { "id": "topic_chem_12_p2_9_3", "title": "Werner’s Theory", "chapterId": "chem_12_p2_ch9", "order": 3 },
            { "id": "topic_chem_12_p2_9_4", "title": "Isomerism in Coordination Compounds", "chapterId": "chem_12_p2_ch9", "order": 4 },
            { "id": "topic_chem_12_p2_9_5", "title": "Bonding: VBT & CFT", "chapterId": "chem_12_p2_ch9", "order": 5 },
            { "id": "topic_chem_12_p2_9_6", "title": "Applications & Stability", "chapterId": "chem_12_p2_ch9", "order": 6 }
          ]
        },

        {
          "id": "chem_12_p2_ch10",
          "title": "Haloalkanes and Haloarenes",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Nomenclature, properties, reactions and uses of halo-organic compounds.",
          "topics": [
            { "id": "topic_chem_12_p2_10_1", "title": "Nomenclature of Haloalkanes & Haloarenes", "chapterId": "chem_12_p2_ch10", "order": 1 },
            { "id": "topic_chem_12_p2_10_2", "title": "Nature of C–X Bond", "chapterId": "chem_12_p2_ch10", "order": 2 },
            { "id": "topic_chem_12_p2_10_3", "title": "SN1 and SN2 Mechanisms", "chapterId": "chem_12_p2_ch10", "order": 3 },
            { "id": "topic_chem_12_p2_10_4", "title": "Elimination Reactions", "chapterId": "chem_12_p2_ch10", "order": 4 },
            { "id": "topic_chem_12_p2_10_5", "title": "Electrophilic Substitution in Haloarenes", "chapterId": "chem_12_p2_ch10", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p2_ch11",
          "title": "Alcohols, Phenols and Ethers",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Preparation, reactions and properties of alcohols, phenols and ethers.",
          "topics": [
            { "id": "topic_chem_12_p2_11_1", "title": "Preparation of Alcohols & Phenols", "chapterId": "chem_12_p2_ch11", "order": 1 },
            { "id": "topic_chem_12_p2_11_2", "title": "Reactions of Alcohols", "chapterId": "chem_12_p2_ch11", "order": 2 },
            { "id": "topic_chem_12_p2_11_3", "title": "Phenol: Electrophilic Substitution", "chapterId": "chem_12_p2_ch11", "order": 3 },
            { "id": "topic_chem_12_p2_11_4", "title": "Ether Preparation & Reactions", "chapterId": "chem_12_p2_ch11", "order": 4 }
          ]
        },

        {
          "id": "chem_12_p2_ch12",
          "title": "Aldehydes, Ketones and Carboxylic Acids",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Structure, preparation and nucleophilic addition reactions.",
          "topics": [
            { "id": "topic_chem_12_p2_12_1", "title": "Structure & Reactivity of Carbonyl Group", "chapterId": "chem_12_p2_ch12", "order": 1 },
            { "id": "topic_chem_12_p2_12_2", "title": "Nucleophilic Addition Reactions", "chapterId": "chem_12_p2_ch12", "order": 2 },
            { "id": "topic_chem_12_p2_12_3", "title": "Oxidation & Reduction", "chapterId": "chem_12_p2_ch12", "order": 3 },
            { "id": "topic_chem_12_p2_12_4", "title": "Aldol & Cannizzaro Reactions", "chapterId": "chem_12_p2_ch12", "order": 4 },
            { "id": "topic_chem_12_p2_12_5", "title": "Carboxylic Acid Reactions", "chapterId": "chem_12_p2_ch12", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p2_ch13",
          "title": "Amines",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Preparation, classification, basicity and diazonium salts.",
          "topics": [
            { "id": "topic_chem_12_p2_13_1", "title": "Classification of Amines", "chapterId": "chem_12_p2_ch13", "order": 1 },
            { "id": "topic_chem_12_p2_13_2", "title": "Preparation of Amines", "chapterId": "chem_12_p2_ch13", "order": 2 },
            { "id": "topic_chem_12_p2_13_3", "title": "Basicity of Amines", "chapterId": "chem_12_p2_ch13", "order": 3 },
            { "id": "topic_chem_12_p2_13_4", "title": "Diazotisation & Coupling Reactions", "chapterId": "chem_12_p2_ch13", "order": 4 }
          ]
        },

        {
          "id": "chem_12_p2_ch14",
          "title": "Biomolecules",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Carbohydrates, proteins, vitamins, enzymes and nucleic acids.",
          "topics": [
            { "id": "topic_chem_12_p2_14_1", "title": "Carbohydrates: Mono-, Di-, Poly-saccharides", "chapterId": "chem_12_p2_ch14", "order": 1 },
            { "id": "topic_chem_12_p2_14_2", "title": "Proteins & Amino Acids", "chapterId": "chem_12_p2_ch14", "order": 2 },
            { "id": "topic_chem_12_p2_14_3", "title": "Enzymes & Their Functions", "chapterId": "chem_12_p2_ch14", "order": 3 },
            { "id": "topic_chem_12_p2_14_4", "title": "Nucleic Acids (DNA & RNA)", "chapterId": "chem_12_p2_ch14", "order": 4 },
            { "id": "topic_chem_12_p2_14_5", "title": "Vitamins & Hormones", "chapterId": "chem_12_p2_ch14", "order": 5 }
          ]
        },

        {
          "id": "chem_12_p2_ch15",
          "title": "Polymers",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Types of polymers, polymerisation methods and examples.",
          "topics": [
            { "id": "topic_chem_12_p2_15_1", "title": "Classification of Polymers", "chapterId": "chem_12_p2_ch15", "order": 1 },
            { "id": "topic_chem_12_p2_15_2", "title": "Addition & Condensation Polymerisation", "chapterId": "chem_12_p2_ch15", "order": 2 },
            { "id": "topic_chem_12_p2_15_3", "title": "Copolymers", "chapterId": "chem_12_p2_ch15", "order": 3 },
            { "id": "topic_chem_12_p2_15_4", "title": "Important Polymers (Nylon, PVC, Bakelite)", "chapterId": "chem_12_p2_ch15", "order": 4 }
          ]
        },

        {
          "id": "chem_12_p2_ch16",
          "title": "Chemistry in Everyday Life",
          "subject": "Chemistry",
          "classLevel": "12th - Science stream",
          "description": "Drugs, food additives, detergents and chemical applications.",
          "topics": [
            { "id": "topic_chem_12_p2_16_1", "title": "Drugs & Their Classification", "chapterId": "chem_12_p2_ch16", "order": 1 },
            { "id": "topic_chem_12_p2_16_2", "title": "Antibiotics & Analgesics", "chapterId": "chem_12_p2_ch16", "order": 2 },
            { "id": "topic_chem_12_p2_16_3", "title": "Cleansing Agents & Detergents", "chapterId": "chem_12_p2_ch16", "order": 3 },
            { "id": "topic_chem_12_p2_16_4", "title": "Food Additives & Preservatives", "chapterId": "chem_12_p2_ch16", "order": 4 }
          ]
        }

      ],
      "Mathematics": [

        {
          "id": "math_12_ch1",
          "title": "Relations and Functions",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Types of relations, functions and composition.",
          "topics": [
            { "id": "topic_math_12_1_1", "title": "Types of Relations", "chapterId": "math_12_ch1", "order": 1 },
            { "id": "topic_math_12_1_2", "title": "Equivalence Relations", "chapterId": "math_12_ch1", "order": 2 },
            { "id": "topic_math_12_1_3", "title": "Types of Functions", "chapterId": "math_12_ch1", "order": 3 },
            { "id": "topic_math_12_1_4", "title": "Composition of Functions", "chapterId": "math_12_ch1", "order": 4 },
            { "id": "topic_math_12_1_5", "title": "Invertible Functions", "chapterId": "math_12_ch1", "order": 5 }
          ]
        },

        {
          "id": "math_12_ch2",
          "title": "Inverse Trigonometric Functions",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Principal values, properties and graphs.",
          "topics": [
            { "id": "topic_math_12_2_1", "title": "Principal Value Branches", "chapterId": "math_12_ch2", "order": 1 },
            { "id": "topic_math_12_2_2", "title": "Graphs of Inverse Trigonometric Functions", "chapterId": "math_12_ch2", "order": 2 },
            { "id": "topic_math_12_2_3", "title": "Properties & Identities", "chapterId": "math_12_ch2", "order": 3 }
          ]
        },

        {
          "id": "math_12_ch3",
          "title": "Matrices",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Matrix types, operations, and inverses.",
          "topics": [
            { "id": "topic_math_12_3_1", "title": "Types of Matrices", "chapterId": "math_12_ch3", "order": 1 },
            { "id": "topic_math_12_3_2", "title": "Matrix Addition & Multiplication", "chapterId": "math_12_ch3", "order": 2 },
            { "id": "topic_math_12_3_3", "title": "Transpose of a Matrix", "chapterId": "math_12_ch3", "order": 3 },
            { "id": "topic_math_12_3_4", "title": "Invertible Matrices", "chapterId": "math_12_ch3", "order": 4 }
          ]
        },

        {
          "id": "math_12_ch4",
          "title": "Determinants",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Properties of determinants, adjoint and applications.",
          "topics": [
            { "id": "topic_math_12_4_1", "title": "Determinant Properties", "chapterId": "math_12_ch4", "order": 1 },
            { "id": "topic_math_12_4_2", "title": "Cofactor & Adjoint", "chapterId": "math_12_ch4", "order": 2 },
            { "id": "topic_math_12_4_3", "title": "Inverse using Adjoint", "chapterId": "math_12_ch4", "order": 3 },
            { "id": "topic_math_12_4_4", "title": "Area of Triangle", "chapterId": "math_12_ch4", "order": 4 }
          ]
        },

        {
          "id": "math_12_ch5",
          "title": "Continuity and Differentiability",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Continuity, differentiability and advanced derivatives.",
          "topics": [
            { "id": "topic_math_12_5_1", "title": "Continuity of Functions", "chapterId": "math_12_ch5", "order": 1 },
            { "id": "topic_math_12_5_2", "title": "Differentiability & Chain Rule", "chapterId": "math_12_ch5", "order": 2 },
            { "id": "topic_math_12_5_3", "title": "Derivative of Inverse Trig Functions", "chapterId": "math_12_ch5", "order": 3 },
            { "id": "topic_math_12_5_4", "title": "Logarithmic Differentiation", "chapterId": "math_12_ch5", "order": 4 },
            { "id": "topic_math_12_5_5", "title": "Exponential & Log Derivatives", "chapterId": "math_12_ch5", "order": 5 }
          ]
        },

        {
          "id": "math_12_ch6",
          "title": "Applications of Derivatives",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Tangents, normals, rates, monotonicity and maxima-minima.",
          "topics": [
            { "id": "topic_math_12_6_1", "title": "Rate of Change", "chapterId": "math_12_ch6", "order": 1 },
            { "id": "topic_math_12_6_2", "title": "Increasing & Decreasing Functions", "chapterId": "math_12_ch6", "order": 2 },
            { "id": "topic_math_12_6_3", "title": "Tangents & Normals", "chapterId": "math_12_ch6", "order": 3 },
            { "id": "topic_math_12_6_4", "title": "Local Maxima & Minima", "chapterId": "math_12_ch6", "order": 4 },
            { "id": "topic_math_12_6_5", "title": "Rolle’s & Lagrange’s Theorem", "chapterId": "math_12_ch6", "order": 5 }
          ]
        },

        {
          "id": "math_12_ch7",
          "title": "Integrals",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Definite and indefinite integrals, substitution and partial fractions.",
          "topics": [
            { "id": "topic_math_12_7_1", "title": "Indefinite Integrals: Basic Formulae", "chapterId": "math_12_ch7", "order": 1 },
            { "id": "topic_math_12_7_2", "title": "Integration by Substitution", "chapterId": "math_12_ch7", "order": 2 },
            { "id": "topic_math_12_7_3", "title": "Integration by Parts", "chapterId": "math_12_ch7", "order": 3 },
            { "id": "topic_math_12_7_4", "title": "Definite Integrals & Properties", "chapterId": "math_12_ch7", "order": 4 },
            { "id": "topic_math_12_7_5", "title": "Partial Fractions", "chapterId": "math_12_ch7", "order": 5 }
          ]
        },

        {
          "id": "math_12_ch8",
          "title": "Applications of Integrals",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Area under curves and between curves.",
          "topics": [
            { "id": "topic_math_12_8_1", "title": "Area Under Curve", "chapterId": "math_12_ch8", "order": 1 },
            { "id": "topic_math_12_8_2", "title": "Area Between Two Curves", "chapterId": "math_12_ch8", "order": 2 }
          ]
        },

        {
          "id": "math_12_ch9",
          "title": "Differential Equations",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Order, degree, formation and solutions of differential equations.",
          "topics": [
            { "id": "topic_math_12_9_1", "title": "Order & Degree", "chapterId": "math_12_ch9", "order": 1 },
            { "id": "topic_math_12_9_2", "title": "Formation of Differential Equations", "chapterId": "math_12_ch9", "order": 2 },
            { "id": "topic_math_12_9_3", "title": "Variable Separable Method", "chapterId": "math_12_ch9", "order": 3 },
            { "id": "topic_math_12_9_4", "title": "Homogeneous DE", "chapterId": "math_12_ch9", "order": 4 }
          ]
        },

        {
          "id": "math_12_ch10",
          "title": "Vector Algebra",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Scalars, vectors, dot and cross product.",
          "topics": [
            { "id": "topic_math_12_10_1", "title": "Scalars & Vectors", "chapterId": "math_12_ch10", "order": 1 },
            { "id": "topic_math_12_10_2", "title": "Dot Product", "chapterId": "math_12_ch10", "order": 2 },
            { "id": "topic_math_12_10_3", "title": "Cross Product", "chapterId": "math_12_ch10", "order": 3 },
            { "id": "topic_math_12_10_4", "title": "Scalar Triple Product", "chapterId": "math_12_ch10", "order": 4 }
          ]
        },

        {
          "id": "math_12_ch11",
          "title": "Three Dimensional Geometry",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Direction cosines, lines and planes in 3D.",
          "topics": [
            { "id": "topic_math_12_11_1", "title": "Direction Cosines & Ratios", "chapterId": "math_12_ch11", "order": 1 },
            { "id": "topic_math_12_11_2", "title": "Equation of Line in 3D", "chapterId": "math_12_ch11", "order": 2 },
            { "id": "topic_math_12_11_3", "title": "Equation of Plane", "chapterId": "math_12_ch11", "order": 3 },
            { "id": "topic_math_12_11_4", "title": "Angle Between Lines & Planes", "chapterId": "math_12_ch11", "order": 4 }
          ]
        },

        {
          "id": "math_12_ch12",
          "title": "Linear Programming",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Linear inequalities, feasible region and optimization.",
          "topics": [
            { "id": "topic_math_12_12_1", "title": "Linear Inequalities", "chapterId": "math_12_ch12", "order": 1 },
            { "id": "topic_math_12_12_2", "title": "Feasible Solutions", "chapterId": "math_12_ch12", "order": 2 },
            { "id": "topic_math_12_12_3", "title": "Objective Function Optimization", "chapterId": "math_12_ch12", "order": 3 }
          ]
        },

        {
          "id": "math_12_ch13",
          "title": "Probability",
          "subject": "Mathematics",
          "classLevel": "12th - Science stream",
          "description": "Conditional probability, Bayes theorem and random variables.",
          "topics": [
            { "id": "topic_math_12_13_1", "title": "Conditional Probability", "chapterId": "math_12_ch13", "order": 1 },
            { "id": "topic_math_12_13_2", "title": "Multiplication Theorem", "chapterId": "math_12_ch13", "order": 2 },
            { "id": "topic_math_12_13_3", "title": "Bayes Theorem", "chapterId": "math_12_ch13", "order": 3 },
            { "id": "topic_math_12_13_4", "title": "Independent Events", "chapterId": "math_12_ch13", "order": 4 }
          ]
        }

      ],
      "Biology": [
        {
          "id": "bio_12_ch1",
          "title": "Reproduction in Organisms",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Modes of reproduction, lifespan and reproductive strategies.",
          "topics": [
            { "id": "topic_bio_12_1_1", "title": "Lifespan & Aging", "chapterId": "bio_12_ch1", "order": 1 },
            { "id": "topic_bio_12_1_2", "title": "Asexual Reproduction Types", "chapterId": "bio_12_ch1", "order": 2 },
            { "id": "topic_bio_12_1_3", "title": "Sexual Reproduction Stages", "chapterId": "bio_12_ch1", "order": 3 },
            { "id": "topic_bio_12_1_4", "title": "Pre-fertilisation Events", "chapterId": "bio_12_ch1", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch2",
          "title": "Sexual Reproduction in Flowering Plants",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Pollination, fertilisation and seed formation.",
          "topics": [
            { "id": "topic_bio_12_2_1", "title": "Anther Structure & Microsporogenesis", "chapterId": "bio_12_ch2", "order": 1 },
            { "id": "topic_bio_12_2_2", "title": "Megasporogenesis", "chapterId": "bio_12_ch2", "order": 2 },
            { "id": "topic_bio_12_2_3", "title": "Double Fertilisation", "chapterId": "bio_12_ch2", "order": 3 },
            { "id": "topic_bio_12_2_4", "title": "Pollination Types & Agents", "chapterId": "bio_12_ch2", "order": 4 },
            { "id": "topic_bio_12_2_5", "title": "Apomixis & Polyembryony", "chapterId": "bio_12_ch2", "order": 5 }
          ]
        },

        {
          "id": "bio_12_ch3",
          "title": "Human Reproduction",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Male and female reproductive systems & gametogenesis.",
          "topics": [
            { "id": "topic_bio_12_3_1", "title": "Male Reproductive System", "chapterId": "bio_12_ch3", "order": 1 },
            { "id": "topic_bio_12_3_2", "title": "Female Reproductive System", "chapterId": "bio_12_ch3", "order": 2 },
            { "id": "topic_bio_12_3_3", "title": "Gametogenesis", "chapterId": "bio_12_ch3", "order": 3 },
            { "id": "topic_bio_12_3_4", "title": "Menstrual Cycle", "chapterId": "bio_12_ch3", "order": 4 },
            { "id": "topic_bio_12_3_5", "title": "Fertilisation & Implantation", "chapterId": "bio_12_ch3", "order": 5 }
          ]
        },

        {
          "id": "bio_12_ch4",
          "title": "Reproductive Health",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Birth control, infertility, ART and health measures.",
          "topics": [
            { "id": "topic_bio_12_4_1", "title": "Contraception Methods", "chapterId": "bio_12_ch4", "order": 1 },
            { "id": "topic_bio_12_4_2", "title": "Medical Termination of Pregnancy", "chapterId": "bio_12_ch4", "order": 2 },
            { "id": "topic_bio_12_4_3", "title": "Infertility & ART (IVF, ZIFT)", "chapterId": "bio_12_ch4", "order": 3 },
            { "id": "topic_bio_12_4_4", "title": "Sexually Transmitted Diseases", "chapterId": "bio_12_ch4", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch5",
          "title": "Principles of Inheritance and Variation",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Mendelian genetics, incomplete dominance and chromosomal theory.",
          "topics": [
            { "id": "topic_bio_12_5_1", "title": "Mendel’s Laws", "chapterId": "bio_12_ch5", "order": 1 },
            { "id": "topic_bio_12_5_2", "title": "Test Cross & Back Cross", "chapterId": "bio_12_ch5", "order": 2 },
            { "id": "topic_bio_12_5_3", "title": "Gene Interaction", "chapterId": "bio_12_ch5", "order": 3 },
            { "id": "topic_bio_12_5_4", "title": "Chromosomal Theory", "chapterId": "bio_12_ch5", "order": 4 },
            { "id": "topic_bio_12_5_5", "title": "Pedigree Analysis", "chapterId": "bio_12_ch5", "order": 5 }
          ]
        },

        {
          "id": "bio_12_ch6",
          "title": "Molecular Basis of Inheritance",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "DNA, RNA, replication, transcription & translation.",
          "topics": [
            { "id": "topic_bio_12_6_1", "title": "DNA Structure & Packaging", "chapterId": "bio_12_ch6", "order": 1 },
            { "id": "topic_bio_12_6_2", "title": "DNA Replication", "chapterId": "bio_12_ch6", "order": 2 },
            { "id": "topic_bio_12_6_3", "title": "Transcription", "chapterId": "bio_12_ch6", "order": 3 },
            { "id": "topic_bio_12_6_4", "title": "Genetic Code", "chapterId": "bio_12_ch6", "order": 4 },
            { "id": "topic_bio_12_6_5", "title": "Translation", "chapterId": "bio_12_ch6", "order": 5 },
            { "id": "topic_bio_12_6_6", "title": "Regulation of Gene Expression", "chapterId": "bio_12_ch6", "order": 6 },
            { "id": "topic_bio_12_6_7", "title": "Human Genome Project", "chapterId": "bio_12_ch6", "order": 7 }
          ]
        },

        {
          "id": "bio_12_ch7",
          "title": "Evolution",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Origin of life, evolution theories and Hardy-Weinberg principle.",
          "topics": [
            { "id": "topic_bio_12_7_1", "title": "Origin of Life", "chapterId": "bio_12_ch7", "order": 1 },
            { "id": "topic_bio_12_7_2", "title": "Darwin’s Theory", "chapterId": "bio_12_ch7", "order": 2 },
            { "id": "topic_bio_12_7_3", "title": "Speciation", "chapterId": "bio_12_ch7", "order": 3 },
            { "id": "topic_bio_12_7_4", "title": "Hardy-Weinberg Equilibrium", "chapterId": "bio_12_ch7", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch8",
          "title": "Human Health and Disease",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Immunity, diseases, vaccines and disorders.",
          "topics": [
            { "id": "topic_bio_12_8_1", "title": "Innate & Acquired Immunity", "chapterId": "bio_12_ch8", "order": 1 },
            { "id": "topic_bio_12_8_2", "title": "Vaccination & Immunisation", "chapterId": "bio_12_ch8", "order": 2 },
            { "id": "topic_bio_12_8_3", "title": "Pathogens: Bacteria, Virus", "chapterId": "bio_12_ch8", "order": 3 },
            { "id": "topic_bio_12_8_4", "title": "AIDS & Cancer", "chapterId": "bio_12_ch8", "order": 4 }
          ]
        },
        {
          "id": "bio_12_ch9",
          "title": "Strategies for Enhancement in Food Production",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Plant breeding, animal husbandry and biofortification.",
          "topics": [
            { "id": "topic_bio_12_9_1", "title": "Plant Breeding Techniques", "chapterId": "bio_12_ch9", "order": 1 },
            { "id": "topic_bio_12_9_2", "title": "Hybridisation", "chapterId": "bio_12_ch9", "order": 2 },
            { "id": "topic_bio_12_9_3", "title": "Animal Husbandry", "chapterId": "bio_12_ch9", "order": 3 },
            { "id": "topic_bio_12_9_4", "title": "Biofortification", "chapterId": "bio_12_ch9", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch10",
          "title": "Microbes in Human Welfare",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Industrial, medical and environmental uses of microbes.",
          "topics": [
            { "id": "topic_bio_12_10_1", "title": "Fermentation & Antibiotics", "chapterId": "bio_12_ch10", "order": 1 },
            { "id": "topic_bio_12_10_2", "title": "Sewage Treatment", "chapterId": "bio_12_ch10", "order": 2 },
            { "id": "topic_bio_12_10_3", "title": "Biogas Production", "chapterId": "bio_12_ch10", "order": 3 },
            { "id": "topic_bio_12_10_4", "title": "Bio-control Agents", "chapterId": "bio_12_ch10", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch11",
          "title": "Biotechnology: Principles and Processes",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Genetic engineering, cloning, vectors and PCR.",
          "topics": [
            { "id": "topic_bio_12_11_1", "title": "Tools: Restriction Enzymes", "chapterId": "bio_12_ch11", "order": 1 },
            { "id": "topic_bio_12_11_2", "title": "Cloning Vectors", "chapterId": "bio_12_ch11", "order": 2 },
            { "id": "topic_bio_12_11_3", "title": "rDNA Technology Steps", "chapterId": "bio_12_ch11", "order": 3 },
            { "id": "topic_bio_12_11_4", "title": "PCR & Gel Electrophoresis", "chapterId": "bio_12_ch11", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch12",
          "title": "Biotechnology and Its Applications",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "GMOs, gene therapy, vaccines and bioethics.",
          "topics": [
            { "id": "topic_bio_12_12_1", "title": "GM Crops (Bt Cotton)", "chapterId": "bio_12_ch12", "order": 1 },
            { "id": "topic_bio_12_12_2", "title": "Gene Therapy", "chapterId": "bio_12_ch12", "order": 2 },
            { "id": "topic_bio_12_12_3", "title": "Molecular Diagnostics", "chapterId": "bio_12_ch12", "order": 3 },
            { "id": "topic_bio_12_12_4", "title": "Ethical Issues", "chapterId": "bio_12_ch12", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch13",
          "title": "Organisms and Populations",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Organism-environment interactions and population dynamics.",
          "topics": [
            { "id": "topic_bio_12_13_1", "title": "Population Attributes", "chapterId": "bio_12_ch13", "order": 1 },
            { "id": "topic_bio_12_13_2", "title": "Growth Models (J & S Curves)", "chapterId": "bio_12_ch13", "order": 2 },
            { "id": "topic_bio_12_13_3", "title": "Population Interactions", "chapterId": "bio_12_ch13", "order": 3 },
            { "id": "topic_bio_12_13_4", "title": "Adaptations", "chapterId": "bio_12_ch13", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch14",
          "title": "Ecosystem",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Energy flow, nutrient cycles and ecosystem structure.",
          "topics": [
            { "id": "topic_bio_12_14_1", "title": "Ecosystem Components", "chapterId": "bio_12_ch14", "order": 1 },
            { "id": "topic_bio_12_14_2", "title": "Food Chain & Food Web", "chapterId": "bio_12_ch14", "order": 2 },
            { "id": "topic_bio_12_14_3", "title": "Energy Flow (10% Law)", "chapterId": "bio_12_ch14", "order": 3 },
            { "id": "topic_bio_12_14_4", "title": "Biogeochemical Cycles", "chapterId": "bio_12_ch14", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch15",
          "title": "Biodiversity and Conservation",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Levels, threats, conservation methods and hotspots.",
          "topics": [
            { "id": "topic_bio_12_15_1", "title": "Levels of Biodiversity", "chapterId": "bio_12_ch15", "order": 1 },
            { "id": "topic_bio_12_15_2", "title": "Patterns of Biodiversity", "chapterId": "bio_12_ch15", "order": 2 },
            { "id": "topic_bio_12_15_3", "title": "Threats to Biodiversity", "chapterId": "bio_12_ch15", "order": 3 },
            { "id": "topic_bio_12_15_4", "title": "In-situ & Ex-situ Conservation", "chapterId": "bio_12_ch15", "order": 4 }
          ]
        },

        {
          "id": "bio_12_ch16",
          "title": "Environmental Issues",
          "subject": "Biology",
          "classLevel": "12th - Science stream",
          "description": "Pollution, waste management, climate change, ozone depletion.",
          "topics": [
            { "id": "topic_bio_12_16_1", "title": "Air & Water Pollution", "chapterId": "bio_12_ch16", "order": 1 },
            { "id": "topic_bio_12_16_2", "title": "Solid Waste Management", "chapterId": "bio_12_ch16", "order": 2 },
            { "id": "topic_bio_12_16_3", "title": "Climate Change & Global Warming", "chapterId": "bio_12_ch16", "order": 3 },
            { "id": "topic_bio_12_16_4", "title": "Ozone Depletion", "chapterId": "bio_12_ch16", "order": 4 }
          ]
        }

      ],
      "English": [
        {
          "id": "eng_12_fla_ch1",
          "title": "The Last Lesson",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Story about linguistic pride and loss during Franco-Prussian war.",
          "topics": [
            { "id": "topic_eng_12_fla_1_1", "title": "Character Analysis", "chapterId": "eng_12_fla_ch1", "order": 1 },
            { "id": "topic_eng_12_fla_1_2", "title": "Theme of Language & Patriotism", "chapterId": "eng_12_fla_ch1", "order": 2 },
            { "id": "topic_eng_12_fla_1_3", "title": "Historical Context", "chapterId": "eng_12_fla_ch1", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_ch2",
          "title": "Lost Spring",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Accounts of poverty-stricken children deprived of basic joys.",
          "topics": [
            { "id": "topic_eng_12_fla_2_1", "title": "Themes of Poverty & Exploitation", "chapterId": "eng_12_fla_ch2", "order": 1 },
            { "id": "topic_eng_12_fla_2_2", "title": "Character Sketches", "chapterId": "eng_12_fla_ch2", "order": 2 },
            { "id": "topic_eng_12_fla_2_3", "title": "Social Commentary", "chapterId": "eng_12_fla_ch2", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_ch3",
          "title": "Deep Water",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "William Douglas’s experience with fear of water and courage.",
          "topics": [
            { "id": "topic_eng_12_fla_3_1", "title": "Theme of Overcoming Fear", "chapterId": "eng_12_fla_ch3", "order": 1 },
            { "id": "topic_eng_12_fla_3_2", "title": "Autobiographical Elements", "chapterId": "eng_12_fla_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch4",
          "title": "The Rattrap",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "A story of redemption, kindness and human goodness.",
          "topics": [
            { "id": "topic_eng_12_fla_4_1", "title": "Theme of Compassion & Redemption", "chapterId": "eng_12_fla_ch4", "order": 1 },
            { "id": "topic_eng_12_fla_4_2", "title": "Symbolism of the Rattrap", "chapterId": "eng_12_fla_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch5",
          "title": "Indigo",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Gandhi’s freedom struggle in Champaran and principles of Satyagraha.",
          "topics": [
            { "id": "topic_eng_12_fla_5_1", "title": "Gandhian Philosophy", "chapterId": "eng_12_fla_ch5", "order": 1 },
            { "id": "topic_eng_12_fla_5_2", "title": "Social and Political Reform", "chapterId": "eng_12_fla_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch6",
          "title": "Poets and Pancakes",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "A humorous description of Gemini Studios and film industry life.",
          "topics": [
            { "id": "topic_eng_12_fla_6_1", "title": "Satire on Film Industry", "chapterId": "eng_12_fla_ch6", "order": 1 },
            { "id": "topic_eng_12_fla_6_2", "title": "Humour and Irony", "chapterId": "eng_12_fla_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch7",
          "title": "The Interview",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Different perspectives on interviews and media.",
          "topics": [
            { "id": "topic_eng_12_fla_7_1", "title": "Interview as a Literary Form", "chapterId": "eng_12_fla_ch7", "order": 1 },
            { "id": "topic_eng_12_fla_7_2", "title": "Diverse Opinions on Interviews", "chapterId": "eng_12_fla_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch8",
          "title": "Going Places",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Teenage fantasies vs reality and ambitions.",
          "topics": [
            { "id": "topic_eng_12_fla_8_1", "title": "Reality vs Fantasy", "chapterId": "eng_12_fla_ch8", "order": 1 },
            { "id": "topic_eng_12_fla_8_2", "title": "Character Study of Sophie", "chapterId": "eng_12_fla_ch8", "order": 2 }
          ]
        }, {
          "id": "eng_12_fla_poem1",
          "title": "My Mother at Sixty-Six",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Poem on aging, separation and emotional bonds.",
          "topics": [
            { "id": "topic_eng_12_fla_p1_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem1", "order": 1 },
            { "id": "topic_eng_12_fla_p1_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem1", "order": 2 },
            { "id": "topic_eng_12_fla_p1_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem1", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem2",
          "title": "An Elementary School Classroom in a Slum",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Depiction of unequal opportunities for slum children.",
          "topics": [
            { "id": "topic_eng_12_fla_p2_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem2", "order": 1 },
            { "id": "topic_eng_12_fla_p2_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem2", "order": 2 },
            { "id": "topic_eng_12_fla_p2_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem2", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem3",
          "title": "Keeping Quiet",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Call for introspection and universal peace.",
          "topics": [
            { "id": "topic_eng_12_fla_p3_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem3", "order": 1 },
            { "id": "topic_eng_12_fla_p3_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem3", "order": 2 },
            { "id": "topic_eng_12_fla_p3_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem3", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem4",
          "title": "A Thing of Beauty",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Beauty as an eternal source of joy.",
          "topics": [
            { "id": "topic_eng_12_fla_p4_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem4", "order": 1 },
            { "id": "topic_eng_12_fla_p4_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem4", "order": 2 },
            { "id": "topic_eng_12_fla_p4_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem4", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem5",
          "title": "A Roadside Stand",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Loss and injustice faced by rural communities.",
          "topics": [
            { "id": "topic_eng_12_fla_p5_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem5", "order": 1 },
            { "id": "topic_eng_12_fla_p5_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem5", "order": 2 },
            { "id": "topic_eng_12_fla_p5_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem5", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem6",
          "title": "Aunt Jennifer's Tigers",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Feminist poem on oppression and freedom.",
          "topics": [
            { "id": "topic_eng_12_fla_p6_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem6", "order": 1 },
            { "id": "topic_eng_12_fla_p6_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem6", "order": 2 },
            { "id": "topic_eng_12_fla_p6_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem6", "order": 3 }
          ]
        }, {
          "id": "eng_12_vis_ch1",
          "title": "The Third Level",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "A psychological story blending fantasy and escapism.",
          "topics": [
            { "id": "topic_eng_12_vis_1_1", "title": "Theme of Escapism", "chapterId": "eng_12_vis_ch1", "order": 1 },
            { "id": "topic_eng_12_vis_1_2", "title": "Character Analysis", "chapterId": "eng_12_vis_ch1", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch2",
          "title": "The Tiger King",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Satire on power, arrogance and fate.",
          "topics": [
            { "id": "topic_eng_12_vis_2_1", "title": "Political Satire", "chapterId": "eng_12_vis_ch2", "order": 1 },
            { "id": "topic_eng_12_vis_2_2", "title": "Irony in the Story", "chapterId": "eng_12_vis_ch2", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch3",
          "title": "Journey to the End of the Earth",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "A journey to Antarctica exploring climate and environment.",
          "topics": [
            { "id": "topic_eng_12_vis_3_1", "title": "Environmental Themes", "chapterId": "eng_12_vis_ch3", "order": 1 },
            { "id": "topic_eng_12_vis_3_2", "title": "Experiential Writing", "chapterId": "eng_12_vis_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch4",
          "title": "The Enemy",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Moral conflict during war times.",
          "topics": [
            { "id": "topic_eng_12_vis_4_1", "title": "Theme: Humanity in War", "chapterId": "eng_12_vis_ch4", "order": 1 },
            { "id": "topic_eng_12_vis_4_2", "title": "Character Analysis", "chapterId": "eng_12_vis_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch5",
          "title": "Should Wizard Hit Mommy?",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Story about parent-child psychology and imagination.",
          "topics": [
            { "id": "topic_eng_12_vis_5_1", "title": "Theme of Parenting", "chapterId": "eng_12_vis_ch5", "order": 1 },
            { "id": "topic_eng_12_vis_5_2", "title": "Moral Dilemmas", "chapterId": "eng_12_vis_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch6",
          "title": "On the Face of It",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Story about acceptance, disability and inner beauty.",
          "topics": [
            { "id": "topic_eng_12_vis_6_1", "title": "Theme: Empathy & Acceptance", "chapterId": "eng_12_vis_ch6", "order": 1 },
            { "id": "topic_eng_12_vis_6_2", "title": "Character Dynamics", "chapterId": "eng_12_vis_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch7",
          "title": "Evans Tries an O-Level",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "A clever prison escape story.",
          "topics": [
            { "id": "topic_eng_12_vis_7_1", "title": "Theme of Deception", "chapterId": "eng_12_vis_ch7", "order": 1 },
            { "id": "topic_eng_12_vis_7_2", "title": "Plot Structure", "chapterId": "eng_12_vis_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch8",
          "title": "Memories of Childhood",
          "subject": "English",
          "classLevel": "12th - Science stream",
          "description": "Autobiographical accounts of discrimination.",
          "topics": [
            { "id": "topic_eng_12_vis_8_1", "title": "Theme of Social Inequality", "chapterId": "eng_12_vis_ch8", "order": 1 },
            { "id": "topic_eng_12_vis_8_2", "title": "Autobiographical Tone", "chapterId": "eng_12_vis_ch8", "order": 2 }
          ]
        }
      ]
    },
    "12th - Commerce stream": {
      "Accountancy": [

        {
          "id": "acc_12_ch1",
          "title": "Accounting for Partnership: Basic Concepts",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Partnership deed, profit sharing, capital accounts and adjustments.",
          "topics": [
            { "id": "topic_acc_12_1_1", "title": "Features of Partnership", "chapterId": "acc_12_ch1", "order": 1 },
            { "id": "topic_acc_12_1_2", "title": "Partnership Deed", "chapterId": "acc_12_ch1", "order": 2 },
            { "id": "topic_acc_12_1_3", "title": "Profit & Loss Appropriation Account", "chapterId": "acc_12_ch1", "order": 3 },
            { "id": "topic_acc_12_1_4", "title": "Past Adjustments", "chapterId": "acc_12_ch1", "order": 4 },
            { "id": "topic_acc_12_1_5", "title": "Guarantee of Profit", "chapterId": "acc_12_ch1", "order": 5 }
          ]
        },

        {
          "id": "acc_12_ch2",
          "title": "Goodwill: Nature and Valuation",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Meaning of goodwill and valuation methods.",
          "topics": [
            { "id": "topic_acc_12_2_1", "title": "Nature of Goodwill", "chapterId": "acc_12_ch2", "order": 1 },
            { "id": "topic_acc_12_2_2", "title": "Average Profit Method", "chapterId": "acc_12_ch2", "order": 2 },
            { "id": "topic_acc_12_2_3", "title": "Super Profit Method", "chapterId": "acc_12_ch2", "order": 3 },
            { "id": "topic_acc_12_2_4", "title": "Capitalisation Method", "chapterId": "acc_12_ch2", "order": 4 }
          ]
        },

        {
          "id": "acc_12_ch3",
          "title": "Admission of a Partner",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Effects of admission on profit sharing and adjustment of assets.",
          "topics": [
            { "id": "topic_acc_12_3_1", "title": "New Profit Sharing Ratio", "chapterId": "acc_12_ch3", "order": 1 },
            { "id": "topic_acc_12_3_2", "title": "Sacrificing Ratio", "chapterId": "acc_12_ch3", "order": 2 },
            { "id": "topic_acc_12_3_3", "title": "Revaluation of Assets & Liabilities", "chapterId": "acc_12_ch3", "order": 3 },
            { "id": "topic_acc_12_3_4", "title": "Adjustment for Goodwill", "chapterId": "acc_12_ch3", "order": 4 },
            { "id": "topic_acc_12_3_5", "title": "Capital Adjustment", "chapterId": "acc_12_ch3", "order": 5 }
          ]
        },

        {
          "id": "acc_12_ch4",
          "title": "Retirement and Death of a Partner",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Settling amounts due to retiring or deceased partner.",
          "topics": [
            { "id": "topic_acc_12_4_1", "title": "Gaining Ratio", "chapterId": "acc_12_ch4", "order": 1 },
            { "id": "topic_acc_12_4_2", "title": "Revaluation Account", "chapterId": "acc_12_ch4", "order": 2 },
            { "id": "topic_acc_12_4_3", "title": "Goodwill Treatment", "chapterId": "acc_12_ch4", "order": 3 },
            { "id": "topic_acc_12_4_4", "title": "Adjustment of Capital", "chapterId": "acc_12_ch4", "order": 4 },
            { "id": "topic_acc_12_4_5", "title": "Executor’s Account (Death)", "chapterId": "acc_12_ch4", "order": 5 }
          ]
        },

        {
          "id": "acc_12_ch5",
          "title": "Dissolution of a Partnership Firm",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Settlement of liabilities and closing accounts during dissolution.",
          "topics": [
            { "id": "topic_acc_12_5_1", "title": "Dissolution vs Retirement", "chapterId": "acc_12_ch5", "order": 1 },
            { "id": "topic_acc_12_5_2", "title": "Realisation Account", "chapterId": "acc_12_ch5", "order": 2 },
            { "id": "topic_acc_12_5_3", "title": "Settlement of Creditors & Loans", "chapterId": "acc_12_ch5", "order": 3 },
            { "id": "topic_acc_12_5_4", "title": "Treatment of Unrecorded Assets", "chapterId": "acc_12_ch5", "order": 4 }
          ]
        },
        {
          "id": "acc_12_ch6",
          "title": "Accounting for Share Capital",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Share issue, forfeiture and reissue procedures.",
          "topics": [
            { "id": "topic_acc_12_6_1", "title": "Types of Share Capital", "chapterId": "acc_12_ch6", "order": 1 },
            { "id": "topic_acc_12_6_2", "title": "Issue at Par, Premium & Discount", "chapterId": "acc_12_ch6", "order": 2 },
            { "id": "topic_acc_12_6_3", "title": "Forfeiture of Shares", "chapterId": "acc_12_ch6", "order": 3 },
            { "id": "topic_acc_12_6_4", "title": "Reissue of Forfeited Shares", "chapterId": "acc_12_ch6", "order": 4 }
          ]
        },

        {
          "id": "acc_12_ch7",
          "title": "Issue and Redemption of Debentures",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Debenture issue, interest, and redemption processes.",
          "topics": [
            { "id": "topic_acc_12_7_1", "title": "Types of Debentures", "chapterId": "acc_12_ch7", "order": 1 },
            { "id": "topic_acc_12_7_2", "title": "Issue at Par, Premium, Discount", "chapterId": "acc_12_ch7", "order": 2 },
            { "id": "topic_acc_12_7_3", "title": "Interest on Debentures", "chapterId": "acc_12_ch7", "order": 3 },
            { "id": "topic_acc_12_7_4", "title": "Redemption Methods", "chapterId": "acc_12_ch7", "order": 4 },
            { "id": "topic_acc_12_7_5", "title": "Debenture Redemption Reserve (DRR)", "chapterId": "acc_12_ch7", "order": 5 }
          ]
        },
        {
          "id": "acc_12_ch8",
          "title": "Cash Flow Statement",
          "subject": "Accountancy",
          "classLevel": "12th - Commerce stream",
          "description": "Preparation of cash flow statements using AS-3.",
          "topics": [
            { "id": "topic_acc_12_8_1", "title": "Cash & Cash Equivalents", "chapterId": "acc_12_ch8", "order": 1 },
            { "id": "topic_acc_12_8_2", "title": "Operating Activities", "chapterId": "acc_12_ch8", "order": 2 },
            { "id": "topic_acc_12_8_3", "title": "Investing Activities", "chapterId": "acc_12_ch8", "order": 3 },
            { "id": "topic_acc_12_8_4", "title": "Financing Activities", "chapterId": "acc_12_ch8", "order": 4 },
            { "id": "topic_acc_12_8_5", "title": "Non-Cash Transactions", "chapterId": "acc_12_ch8", "order": 5 }
          ]
        }

      ],
      "Business Studies": [

        {
          "id": "bst_12_ch1",
          "title": "Nature and Significance of Management",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Meaning, characteristics, objectives and importance of management.",
          "topics": [
            { "id": "topic_bst_12_1_1", "title": "Concept and Characteristics of Management", "chapterId": "bst_12_ch1", "order": 1 },
            { "id": "topic_bst_12_1_2", "title": "Objectives & Importance of Management", "chapterId": "bst_12_ch1", "order": 2 },
            { "id": "topic_bst_12_1_3", "title": "Management as Science, Art & Profession", "chapterId": "bst_12_ch1", "order": 3 },
            { "id": "topic_bst_12_1_4", "title": "Levels of Management", "chapterId": "bst_12_ch1", "order": 4 }
          ]
        },

        {
          "id": "bst_12_ch2",
          "title": "Principles of Management",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Fayol’s principles and Taylor’s scientific management.",
          "topics": [
            { "id": "topic_bst_12_2_1", "title": "Fayol’s 14 Principles", "chapterId": "bst_12_ch2", "order": 1 },
            { "id": "topic_bst_12_2_2", "title": "Scientific Management (Taylor)", "chapterId": "bst_12_ch2", "order": 2 },
            { "id": "topic_bst_12_2_3", "title": "Differential Piece Rate System", "chapterId": "bst_12_ch2", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch3",
          "title": "Business Environment",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Dimensions of business environment and recent developments.",
          "topics": [
            { "id": "topic_bst_12_3_1", "title": "Economic, Social, Technological Environments", "chapterId": "bst_12_ch3", "order": 1 },
            { "id": "topic_bst_12_3_2", "title": "Impact of Government Policies", "chapterId": "bst_12_ch3", "order": 2 },
            { "id": "topic_bst_12_3_3", "title": "Liberalisation, Privatisation, Globalisation (LPG)", "chapterId": "bst_12_ch3", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch4",
          "title": "Planning",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Process, importance and limitations of planning.",
          "topics": [
            { "id": "topic_bst_12_4_1", "title": "Features & Importance of Planning", "chapterId": "bst_12_ch4", "order": 1 },
            { "id": "topic_bst_12_4_2", "title": "Planning Process", "chapterId": "bst_12_ch4", "order": 2 },
            { "id": "topic_bst_12_4_3", "title": "Limitations of Planning", "chapterId": "bst_12_ch4", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch5",
          "title": "Organising",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Organisation structure, delegation and decentralisation.",
          "topics": [
            { "id": "topic_bst_12_5_1", "title": "Functional & Divisional Structure", "chapterId": "bst_12_ch5", "order": 1 },
            { "id": "topic_bst_12_5_2", "title": "Delegation of Authority", "chapterId": "bst_12_ch5", "order": 2 },
            { "id": "topic_bst_12_5_3", "title": "Decentralisation", "chapterId": "bst_12_ch5", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch6",
          "title": "Staffing",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Recruitment, selection, training and human resource management.",
          "topics": [
            { "id": "topic_bst_12_6_1", "title": "Recruitment vs Selection", "chapterId": "bst_12_ch6", "order": 1 },
            { "id": "topic_bst_12_6_2", "title": "Sources of Recruitment", "chapterId": "bst_12_ch6", "order": 2 },
            { "id": "topic_bst_12_6_3", "title": "Training Methods", "chapterId": "bst_12_ch6", "order": 3 },
            { "id": "topic_bst_12_6_4", "title": "HRM Functions", "chapterId": "bst_12_ch6", "order": 4 }
          ]
        },

        {
          "id": "bst_12_ch7",
          "title": "Directing",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Supervision, leadership, communication and motivation.",
          "topics": [
            { "id": "topic_bst_12_7_1", "title": "Leadership Styles", "chapterId": "bst_12_ch7", "order": 1 },
            { "id": "topic_bst_12_7_2", "title": "Barriers to Communication", "chapterId": "bst_12_ch7", "order": 2 },
            { "id": "topic_bst_12_7_3", "title": "Maslow’s Motivation Theory", "chapterId": "bst_12_ch7", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch8",
          "title": "Controlling",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Meaning, process and importance of controlling.",
          "topics": [
            { "id": "topic_bst_12_8_1", "title": "Features & Importance of Controlling", "chapterId": "bst_12_ch8", "order": 1 },
            { "id": "topic_bst_12_8_2", "title": "Steps in Controlling Process", "chapterId": "bst_12_ch8", "order": 2 },
            { "id": "topic_bst_12_8_3", "title": "Relationship between Planning & Controlling", "chapterId": "bst_12_ch8", "order": 3 }
          ]
        },
        {
          "id": "bst_12_ch9",
          "title": "Financial Management",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Financial decisions, capital structure and working capital.",
          "topics": [
            { "id": "topic_bst_12_9_1", "title": "Objectives of Financial Management", "chapterId": "bst_12_ch9", "order": 1 },
            { "id": "topic_bst_12_9_2", "title": "Financing, Investment & Dividend Decisions", "chapterId": "bst_12_ch9", "order": 2 },
            { "id": "topic_bst_12_9_3", "title": "Working Capital Management", "chapterId": "bst_12_ch9", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch10",
          "title": "Financial Markets",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Capital markets, stock exchange and SEBI regulations.",
          "topics": [
            { "id": "topic_bst_12_10_1", "title": "Primary & Secondary Markets", "chapterId": "bst_12_ch10", "order": 1 },
            { "id": "topic_bst_12_10_2", "title": "Functions of Stock Exchange", "chapterId": "bst_12_ch10", "order": 2 },
            { "id": "topic_bst_12_10_3", "title": "SEBI Objectives & Functions", "chapterId": "bst_12_ch10", "order": 3 }
          ]
        },

        {
          "id": "bst_12_ch11",
          "title": "Marketing Management",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "4Ps/7Ps of marketing, product mix, pricing and channels.",
          "topics": [
            { "id": "topic_bst_12_11_1", "title": "Marketing vs Selling", "chapterId": "bst_12_ch11", "order": 1 },
            { "id": "topic_bst_12_11_2", "title": "Marketing Mix (4Ps/7Ps)", "chapterId": "bst_12_ch11", "order": 2 },
            { "id": "topic_bst_12_11_3", "title": "Product Mix & Pricing Strategies", "chapterId": "bst_12_ch11", "order": 3 },
            { "id": "topic_bst_12_11_4", "title": "Channels of Distribution", "chapterId": "bst_12_ch11", "order": 4 }
          ]
        },

        {
          "id": "bst_12_ch12",
          "title": "Consumer Protection",
          "subject": "Business Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Consumer rights, redressal agencies and responsibilities.",
          "topics": [
            { "id": "topic_bst_12_12_1", "title": "Consumer Rights & Responsibilities", "chapterId": "bst_12_ch12", "order": 1 },
            { "id": "topic_bst_12_12_2", "title": "Consumer Protection Act 2019", "chapterId": "bst_12_ch12", "order": 2 },
            { "id": "topic_bst_12_12_3", "title": "Three-tier Redressal Mechanism", "chapterId": "bst_12_ch12", "order": 3 }
          ]
        }

      ],
      "Economics": [

        {
          "id": "eco_12_macro_ch1",
          "title": "National Income and Related Aggregates",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Basic concepts of national income and methods of calculating it.",
          "topics": [
            { "id": "topic_eco_12_macro_1_1", "title": "GDP, GNP, NNP, NDP Concepts", "chapterId": "eco_12_macro_ch1", "order": 1 },
            { "id": "topic_eco_12_macro_1_2", "title": "Factor Cost vs Market Price", "chapterId": "eco_12_macro_ch1", "order": 2 },
            { "id": "topic_eco_12_macro_1_3", "title": "Methods of NI Calculation (I, E, O)", "chapterId": "eco_12_macro_ch1", "order": 3 },
            { "id": "topic_eco_12_macro_1_4", "title": "Real GDP vs Nominal GDP", "chapterId": "eco_12_macro_ch1", "order": 4 },
            { "id": "topic_eco_12_macro_1_5", "title": "Limitations of NI", "chapterId": "eco_12_macro_ch1", "order": 5 }
          ]
        },

        {
          "id": "eco_12_macro_ch2",
          "title": "Money and Banking",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Functions of money, central banking and credit control.",
          "topics": [
            { "id": "topic_eco_12_macro_2_1", "title": "Meaning & Functions of Money", "chapterId": "eco_12_macro_ch2", "order": 1 },
            { "id": "topic_eco_12_macro_2_2", "title": "RBI Functions", "chapterId": "eco_12_macro_ch2", "order": 2 },
            { "id": "topic_eco_12_macro_2_3", "title": "Commercial Banks & Credit Creation", "chapterId": "eco_12_macro_ch2", "order": 3 },
            { "id": "topic_eco_12_macro_2_4", "title": "Credit Control Methods (Quantitative & Qualitative)", "chapterId": "eco_12_macro_ch2", "order": 4 }
          ]
        },

        {
          "id": "eco_12_macro_ch3",
          "title": "Determination of Income and Employment",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Keynesian theory, aggregate demand, and multiplier effect.",
          "topics": [
            { "id": "topic_eco_12_macro_3_1", "title": "Aggregate Demand & Aggregate Supply", "chapterId": "eco_12_macro_ch3", "order": 1 },
            { "id": "topic_eco_12_macro_3_2", "title": "Propensity to Consume", "chapterId": "eco_12_macro_ch3", "order": 2 },
            { "id": "topic_eco_12_macro_3_3", "title": "Saving-Investment Equilibrium", "chapterId": "eco_12_macro_ch3", "order": 3 },
            { "id": "topic_eco_12_macro_3_4", "title": "Multiplier Effect", "chapterId": "eco_12_macro_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_12_macro_ch4",
          "title": "Government Budget and the Economy",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Budget, deficits and fiscal policies.",
          "topics": [
            { "id": "topic_eco_12_macro_4_1", "title": "Components of Budget", "chapterId": "eco_12_macro_ch4", "order": 1 },
            { "id": "topic_eco_12_macro_4_2", "title": "Revenue & Capital Expenditure", "chapterId": "eco_12_macro_ch4", "order": 2 },
            { "id": "topic_eco_12_macro_4_3", "title": "Budget Deficits", "chapterId": "eco_12_macro_ch4", "order": 3 },
            { "id": "topic_eco_12_macro_4_4", "title": "Fiscal Policy", "chapterId": "eco_12_macro_ch4", "order": 4 }
          ]
        },

        {
          "id": "eco_12_macro_ch5",
          "title": "Balance of Payments",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Foreign exchange, receipts & payments, disequilibrium.",
          "topics": [
            { "id": "topic_eco_12_macro_5_1", "title": "Current & Capital Account", "chapterId": "eco_12_macro_ch5", "order": 1 },
            { "id": "topic_eco_12_macro_5_2", "title": "Foreign Exchange Rate Systems", "chapterId": "eco_12_macro_ch5", "order": 2 },
            { "id": "topic_eco_12_macro_5_3", "title": "Devaluation & Depreciation", "chapterId": "eco_12_macro_ch5", "order": 3 },
            { "id": "topic_eco_12_macro_5_4", "title": "Deficit & Surplus", "chapterId": "eco_12_macro_ch5", "order": 4 }
          ]
        },

        {
          "id": "eco_12_macro_ch6",
          "title": "Open-Economy Macroeconomics",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Trade balance, capital flow, and macro policies in an open economy.",
          "topics": [
            { "id": "topic_eco_12_macro_6_1", "title": "Export & Import Functions", "chapterId": "eco_12_macro_ch6", "order": 1 },
            { "id": "topic_eco_12_macro_6_2", "title": "Net Capital Flow", "chapterId": "eco_12_macro_ch6", "order": 2 },
            { "id": "topic_eco_12_macro_6_3", "title": "Exchange Rate Impact", "chapterId": "eco_12_macro_ch6", "order": 3 }
          ]
        },
        {
          "id": "eco_12_ied_ch1",
          "title": "Indian Economy on the Eve of Independence",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Colonial exploitation and Indian economy at independence.",
          "topics": [
            { "id": "topic_eco_12_ied_1_1", "title": "Low Agricultural Productivity", "chapterId": "eco_12_ied_ch1", "order": 1 },
            { "id": "topic_eco_12_ied_1_2", "title": "Deindustrialization", "chapterId": "eco_12_ied_ch1", "order": 2 },
            { "id": "topic_eco_12_ied_1_3", "title": "Infrastructure Backwardness", "chapterId": "eco_12_ied_ch1", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch2",
          "title": "Indian Economy (1950–1990)",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Planning, agriculture, industries and public sector.",
          "topics": [
            { "id": "topic_eco_12_ied_2_1", "title": "Five-Year Plans", "chapterId": "eco_12_ied_ch2", "order": 1 },
            { "id": "topic_eco_12_ied_2_2", "title": "Green Revolution", "chapterId": "eco_12_ied_ch2", "order": 2 },
            { "id": "topic_eco_12_ied_2_3", "title": "Public Sector & Industrial Policy", "chapterId": "eco_12_ied_ch2", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch3",
          "title": "Liberalisation, Privatisation and Globalisation",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "1991 reforms and impact on Indian economy.",
          "topics": [
            { "id": "topic_eco_12_ied_3_1", "title": "Need for 1991 Economic Reforms", "chapterId": "eco_12_ied_ch3", "order": 1 },
            { "id": "topic_eco_12_ied_3_2", "title": "Liberalisation Measures", "chapterId": "eco_12_ied_ch3", "order": 2 },
            { "id": "topic_eco_12_ied_3_3", "title": "Privatisation & Disinvestment", "chapterId": "eco_12_ied_ch3", "order": 3 },
            { "id": "topic_eco_12_ied_3_4", "title": "Globalisation Impact", "chapterId": "eco_12_ied_ch3", "order": 4 }
          ]
        },

        {
          "id": "eco_12_ied_ch4",
          "title": "Human Capital Formation in India",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Role of education, health and skill development.",
          "topics": [
            { "id": "topic_eco_12_ied_4_1", "title": "Sources of Human Capital", "chapterId": "eco_12_ied_ch4", "order": 1 },
            { "id": "topic_eco_12_ied_4_2", "title": "Education Sector Problems", "chapterId": "eco_12_ied_ch4", "order": 2 },
            { "id": "topic_eco_12_ied_4_3", "title": "Health & Human Development", "chapterId": "eco_12_ied_ch4", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch5",
          "title": "Rural Development",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Credit, agricultural marketing, co-operatives and SHGs.",
          "topics": [
            { "id": "topic_eco_12_ied_5_1", "title": "Rural Credit & Microfinance", "chapterId": "eco_12_ied_ch5", "order": 1 },
            { "id": "topic_eco_12_ied_5_2", "title": "Agricultural Marketing", "chapterId": "eco_12_ied_ch5", "order": 2 },
            { "id": "topic_eco_12_ied_5_3", "title": "Self Help Groups (SHGs)", "chapterId": "eco_12_ied_ch5", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch6",
          "title": "Employment: Growth, Informalisation and Related Issues",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Types of employment, unemployment and informal sector.",
          "topics": [
            { "id": "topic_eco_12_ied_6_1", "title": "Types of Employment", "chapterId": "eco_12_ied_ch6", "order": 1 },
            { "id": "topic_eco_12_ied_6_2", "title": "Unemployment Issues", "chapterId": "eco_12_ied_ch6", "order": 2 },
            { "id": "topic_eco_12_ied_6_3", "title": "Informalisation of Workforce", "chapterId": "eco_12_ied_ch6", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch7",
          "title": "Infrastructure",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Energy, transport, health and communication.",
          "topics": [
            { "id": "topic_eco_12_ied_7_1", "title": "Economic & Social Infrastructure", "chapterId": "eco_12_ied_ch7", "order": 1 },
            { "id": "topic_eco_12_ied_7_2", "title": "Energy Crisis", "chapterId": "eco_12_ied_ch7", "order": 2 },
            { "id": "topic_eco_12_ied_7_3", "title": "Healthcare Infrastructure", "chapterId": "eco_12_ied_ch7", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch8",
          "title": "Environment and Sustainable Development",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Environmental issues and sustainable practices.",
          "topics": [
            { "id": "topic_eco_12_ied_8_1", "title": "Environmental Degradation", "chapterId": "eco_12_ied_ch8", "order": 1 },
            { "id": "topic_eco_12_ied_8_2", "title": "Renewable vs Non-renewable Resources", "chapterId": "eco_12_ied_ch8", "order": 2 },
            { "id": "topic_eco_12_ied_8_3", "title": "Sustainable Development Goals", "chapterId": "eco_12_ied_ch8", "order": 3 }
          ]
        },

        {
          "id": "eco_12_ied_ch9",
          "title": "Comparative Development Experiences of India and Neighbours",
          "subject": "Economics",
          "classLevel": "12th - Commerce stream",
          "description": "Development indicators of India, China and Pakistan.",
          "topics": [
            { "id": "topic_eco_12_ied_9_1", "title": "GDP & Human Development Comparison", "chapterId": "eco_12_ied_ch9", "order": 1 },
            { "id": "topic_eco_12_ied_9_2", "title": "Sectoral Contributions", "chapterId": "eco_12_ied_ch9", "order": 2 },
            { "id": "topic_eco_12_ied_9_3", "title": "Population & Infrastructure Gap", "chapterId": "eco_12_ied_ch9", "order": 3 }
          ]
        }
      ],
      "Applied Mathematics": [

        {
          "id": "apmath_12_ch1",
          "title": "Numbers, Quantification and Numerical Applications",
          "subject": "Applied Mathematics",
          "classLevel": "12th - Commerce stream",
          "description": "Numerical estimates, percentages, ratios and approximations.",
          "topics": [
            { "id": "topic_apmath_12_1_1", "title": "Rounding Off & Significant Figures", "chapterId": "apmath_12_ch1", "order": 1 },
            { "id": "topic_apmath_12_1_2", "title": "Percentages & Ratios", "chapterId": "apmath_12_ch1", "order": 2 },
            { "id": "topic_apmath_12_1_3", "title": "Estimation & Approximation", "chapterId": "apmath_12_ch1", "order": 3 }
          ]
        },

        {
          "id": "apmath_12_ch2",
          "title": "Algebra",
          "subject": "Applied Mathematics",
          "classLevel": "12th - Commerce stream",
          "description": "Matrices, determinants and linear equations.",
          "topics": [
            { "id": "topic_apmath_12_2_1", "title": "Matrices & Determinants Basics", "chapterId": "apmath_12_ch2", "order": 1 },
            { "id": "topic_apmath_12_2_2", "title": "Solving Linear Equations", "chapterId": "apmath_12_ch2", "order": 2 }
          ]
        },

        {
          "id": "apmath_12_ch3",
          "title": "Calculus",
          "subject": "Applied Mathematics",
          "classLevel": "12th - Commerce stream",
          "description": "Derivatives and applications of maxima-minima.",
          "topics": [
            { "id": "topic_apmath_12_3_1", "title": "Derivatives of Functions", "chapterId": "apmath_12_ch3", "order": 1 },
            { "id": "topic_apmath_12_3_2", "title": "Maxima & Minima Applications", "chapterId": "apmath_12_ch3", "order": 2 }
          ]
        },

        {
          "id": "apmath_12_ch4",
          "title": "Probability & Index Numbers",
          "subject": "Applied Mathematics",
          "classLevel": "12th - Commerce stream",
          "description": "Basic probability rules and statistical index numbers.",
          "topics": [
            { "id": "topic_apmath_12_4_1", "title": "Basic Probability Concepts", "chapterId": "apmath_12_ch4", "order": 1 },
            { "id": "topic_apmath_12_4_2", "title": "Index Numbers & CPI/WPI", "chapterId": "apmath_12_ch4", "order": 2 }
          ]
        }
      ],
      "Entrepreneurship": [

        {
          "id": "ent_12_ch1",
          "title": "Entrepreneurial Opportunities",
          "subject": "Entrepreneurship",
          "classLevel": "12th - Commerce stream",
          "description": "Identifying and evaluating business opportunities.",
          "topics": [
            { "id": "topic_ent_12_1_1", "title": "Meaning of Business Opportunity", "chapterId": "ent_12_ch1", "order": 1 },
            { "id": "topic_ent_12_1_2", "title": "Scanning the Environment", "chapterId": "ent_12_ch1", "order": 2 },
            { "id": "topic_ent_12_1_3", "title": "Market Assessment", "chapterId": "ent_12_ch1", "order": 3 }
          ]
        },

        {
          "id": "ent_12_ch2",
          "title": "Enterprise Planning",
          "subject": "Entrepreneurship",
          "classLevel": "12th - Commerce stream",
          "description": "Business plans, financial planning and strategy.",
          "topics": [
            { "id": "topic_ent_12_2_1", "title": "Components of Business Plan", "chapterId": "ent_12_ch2", "order": 1 },
            { "id": "topic_ent_12_2_2", "title": "Financial Planning", "chapterId": "ent_12_ch2", "order": 2 },
            { "id": "topic_ent_12_2_3", "title": "Marketing Plan", "chapterId": "ent_12_ch2", "order": 3 }
          ]
        },

        {
          "id": "ent_12_ch3",
          "title": "Enterprise Growth Strategies",
          "subject": "Entrepreneurship",
          "classLevel": "12th - Commerce stream",
          "description": "Scaling a business using growth and expansion strategies.",
          "topics": [
            { "id": "topic_ent_12_3_1", "title": "Franchising & Mergers", "chapterId": "ent_12_ch3", "order": 1 },
            { "id": "topic_ent_12_3_2", "title": "Expansion Strategies", "chapterId": "ent_12_ch3", "order": 2 }
          ]
        },

        {
          "id": "ent_12_ch4",
          "title": "Business Arithmetic",
          "subject": "Entrepreneurship",
          "classLevel": "12th - Commerce stream",
          "description": "Unit price, profit, cashflow and break-even estimates.",
          "topics": [
            { "id": "topic_ent_12_4_1", "title": "Unit Cost & Selling Price", "chapterId": "ent_12_ch4", "order": 1 },
            { "id": "topic_ent_12_4_2", "title": "Break-even Point", "chapterId": "ent_12_ch4", "order": 2 },
            { "id": "topic_ent_12_4_3", "title": "Cash-flow Projections", "chapterId": "ent_12_ch4", "order": 3 }
          ]
        },

        {
          "id": "ent_12_ch5 ",
          "title": "Resource Mobilization",
          "subject": "Entrepreneurship",
          "classLevel": "12th - Commerce stream",
          "description": "Funding options for start-ups and enterprise resources.",
          "topics": [
            { "id": "topic_ent_12_5_1", "title": "Sources of Capital", "chapterId": "ent_12_ch5 ", "order": 1 },
            { "id": "topic_ent_12_5_2", "title": "Working Capital & Fixed Capital", "chapterId": "ent_12_ch5 ", "order": 2 },
            { "id": "topic_ent_12_5_3", "title": "Bootstrapping", "chapterId": "ent_12_ch5 ", "order": 3 }
          ]
        }
      ],
      "Informatics Practices": [

        {
          "id": "ip_12_ch1",
          "title": "Data Handling Using Pandas",
          "subject": "Informatics Practices",
          "classLevel": "12th - Commerce stream",
          "description": "Series, DataFrame, data operations and statistics using Pandas.",
          "topics": [
            { "id": "topic_ip_12_1_1", "title": "Series & DataFrames", "chapterId": "ip_12_ch1", "order": 1 },
            { "id": "topic_ip_12_1_2", "title": "Handling Missing Data", "chapterId": "ip_12_ch1", "order": 2 },
            { "id": "topic_ip_12_1_3", "title": "Grouping & Merging Data", "chapterId": "ip_12_ch1", "order": 3 }
          ]
        },

        {
          "id": "ip_12_ch2",
          "title": "Database Query using SQL",
          "subject": "Informatics Practices",
          "classLevel": "12th - Commerce stream",
          "description": "DDL, DML, functions, joins and group operations.",
          "topics": [
            { "id": "topic_ip_12_2_1", "title": "Select, Where & Order By", "chapterId": "ip_12_ch2", "order": 1 },
            { "id": "topic_ip_12_2_2", "title": "Aggregate Functions", "chapterId": "ip_12_ch2", "order": 2 },
            { "id": "topic_ip_12_2_3", "title": "Joins & Subqueries", "chapterId": "ip_12_ch2", "order": 3 }
          ]
        },

        {
          "id": "ip_12_ch3",
          "title": "Data Visualization",
          "subject": "Informatics Practices",
          "classLevel": "12th - Commerce stream",
          "description": "Matplotlib charts and interpreting data.",
          "topics": [
            { "id": "topic_ip_12_3_1", "title": "Line, Bar & Scatter Plots", "chapterId": "ip_12_ch3", "order": 1 },
            { "id": "topic_ip_12_3_2", "title": "Histograms & Pie Charts", "chapterId": "ip_12_ch3", "order": 2 }
          ]
        },

        {
          "id": "ip_12_ch4",
          "title": "Social Impacts of IT",
          "subject": "Informatics Practices",
          "classLevel": "12th - Commerce stream",
          "description": "Security, cybercrime, privacy and data protection.",
          "topics": [
            { "id": "topic_ip_12_4_1", "title": "Cybersecurity Concepts", "chapterId": "ip_12_ch4", "order": 1 },
            { "id": "topic_ip_12_4_2", "title": "Digital Footprint & Privacy", "chapterId": "ip_12_ch4", "order": 2 }
          ]
        }
      ],
      "Legal Studies": [

        {
          "id": "ls_12_ch1",
          "title": "Judiciary",
          "subject": "Legal Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Structure and functioning of Indian judiciary.",
          "topics": [
            { "id": "topic_ls_12_1_1", "title": "Supreme Court Structure", "chapterId": "ls_12_ch1", "order": 1 },
            { "id": "topic_ls_12_1_2", "title": "High Courts & Subordinate Courts", "chapterId": "ls_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "ls_12_ch2",
          "title": "Topics in Law",
          "subject": "Legal Studies",
          "classLevel": "12th - Commerce stream",
          "description": "Legal principles, arbitration, PIL and legal aid.",
          "topics": [
            { "id": "topic_ls_12_2_1", "title": "Principles of Natural Justice", "chapterId": "ls_12_ch2", "order": 1 },
            { "id": "topic_ls_12_2_2", "title": "Alternative Dispute Resolution", "chapterId": "ls_12_ch2", "order": 2 }
          ]
        }
      ],

      "Physical Education": [

        {
          "id": "pe_12_ch1",
          "title": "Planning in Sports",
          "subject": "Physical Education",
          "classLevel": "12th - Commerce stream",
          "description": "Training plans, tournament fixtures and objectives.",
          "topics": [
            { "id": "topic_pe_12_1_1", "title": "Types of Training Plans", "chapterId": "pe_12_ch1", "order": 1 },
            { "id": "topic_pe_12_1_2", "title": "Knockout & League Fixtures", "chapterId": "pe_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "pe_12_ch2",
          "title": "Sports and Nutrition",
          "subject": "Physical Education",
          "classLevel": "12th - Commerce stream",
          "description": "Macronutrients, micronutrients and balanced diets.",
          "topics": [
            { "id": "topic_pe_12_2_1", "title": "Nutritional Requirements", "chapterId": "pe_12_ch2", "order": 1 },
            { "id": "topic_pe_12_2_2", "title": "Deficiency Disorders", "chapterId": "pe_12_ch2", "order": 2 }
          ]
        }
      ]
    },
    "12th - Arts stream": {
      "History": [
        {
          "id": "hist_12_ch1",
          "title": "Bricks, Beads and Bones – The Harappan Civilisation",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Urban planning, craft production, trade and discovery of Harappan culture.",
          "topics": [
            { "id": "topic_hist_12_1_1", "title": "Town Planning & Drainage System", "chapterId": "hist_12_ch1", "order": 1 },
            { "id": "topic_hist_12_1_2", "title": "Craft Production & Trade", "chapterId": "hist_12_ch1", "order": 2 },
            { "id": "topic_hist_12_1_3", "title": "Agriculture and Subsistence", "chapterId": "hist_12_ch1", "order": 3 },
            { "id": "topic_hist_12_1_4", "title": "End of the Civilisation", "chapterId": "hist_12_ch1", "order": 4 }
          ]
        },

        {
          "id": "hist_12_ch2",
          "title": "Kings, Farmers and Towns",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Mauryan Empire, Ashoka, agriculture and social structure.",
          "topics": [
            { "id": "topic_hist_12_2_1", "title": "Sources: Inscriptions & Literature", "chapterId": "hist_12_ch2", "order": 1 },
            { "id": "topic_hist_12_2_2", "title": "Mauryan Administration", "chapterId": "hist_12_ch2", "order": 2 },
            { "id": "topic_hist_12_2_3", "title": "Agrarian Expansion", "chapterId": "hist_12_ch2", "order": 3 },
            { "id": "topic_hist_12_2_4", "title": "Emerging Towns", "chapterId": "hist_12_ch2", "order": 4 }
          ]
        },

        {
          "id": "hist_12_ch3",
          "title": "Kinship, Caste and Class",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Social order in early societies based on kinship and caste.",
          "topics": [
            { "id": "topic_hist_12_3_1", "title": "Kinship Patterns (Gotra, Marriage)", "chapterId": "hist_12_ch3", "order": 1 },
            { "id": "topic_hist_12_3_2", "title": "Caste Hierarchies", "chapterId": "hist_12_ch3", "order": 2 },
            { "id": "topic_hist_12_3_3", "title": "Gender and Patriarchy", "chapterId": "hist_12_ch3", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch4",
          "title": "Thinkers, Beliefs and Buildings: Cultural Developments",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Buddhism, Jainism, art, stupas and religious developments.",
          "topics": [
            { "id": "topic_hist_12_4_1", "title": "Teachings of Buddha", "chapterId": "hist_12_ch4", "order": 1 },
            { "id": "topic_hist_12_4_2", "title": "Jain Philosophy", "chapterId": "hist_12_ch4", "order": 2 },
            { "id": "topic_hist_12_4_3", "title": "Stupas & Monasteries", "chapterId": "hist_12_ch4", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch5",
          "title": "Through the Eyes of Travellers",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Accounts of foreign travellers in medieval India.",
          "topics": [
            { "id": "topic_hist_12_5_1", "title": "Ibn Battuta’s Observations", "chapterId": "hist_12_ch5", "order": 1 },
            { "id": "topic_hist_12_5_2", "title": "Bernier & Mughal Society", "chapterId": "hist_12_ch5", "order": 2 },
            { "id": "topic_hist_12_5_3", "title": "Travel as a Source of History", "chapterId": "hist_12_ch5", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch6",
          "title": "Bhakti-Sufi Traditions",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Bhakti saints, Sufi saints and religious movements.",
          "topics": [
            { "id": "topic_hist_12_6_1", "title": "Early Bhakti Movement", "chapterId": "hist_12_ch6", "order": 1 },
            { "id": "topic_hist_12_6_2", "title": "Sufi Orders (Silsilahs)", "chapterId": "hist_12_ch6", "order": 2 },
            { "id": "topic_hist_12_6_3", "title": "Women in Bhakti Movement", "chapterId": "hist_12_ch6", "order": 3 }
          ]
        },
        {
          "id": "hist_12_ch7",
          "title": "An Imperial Capital: Vijayanagara",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Architecture, kingship and society of Vijayanagara Empire.",
          "topics": [
            { "id": "topic_hist_12_7_1", "title": "Hampi Monuments", "chapterId": "hist_12_ch7", "order": 1 },
            { "id": "topic_hist_12_7_2", "title": "Kingship & Administration", "chapterId": "hist_12_ch7", "order": 2 },
            { "id": "topic_hist_12_7_3", "title": "Agriculture & Society", "chapterId": "hist_12_ch7", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch8",
          "title": "Peasants, Zamindars and the State",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Agrarian structure of Mughal India.",
          "topics": [
            { "id": "topic_hist_12_8_1", "title": "Mughal Revenue System", "chapterId": "hist_12_ch8", "order": 1 },
            { "id": "topic_hist_12_8_2", "title": "Role of Zamindars", "chapterId": "hist_12_ch8", "order": 2 },
            { "id": "topic_hist_12_8_3", "title": "Village Society", "chapterId": "hist_12_ch8", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch9",
          "title": "Kings and Chronicles – The Mughal Courts",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Mughal chronicles and court culture.",
          "topics": [
            { "id": "topic_hist_12_9_1", "title": "Akbar Nama & Ain-i-Akbari", "chapterId": "hist_12_ch9", "order": 1 },
            { "id": "topic_hist_12_9_2", "title": "Court Rituals & Ceremonies", "chapterId": "hist_12_ch9", "order": 2 }
          ]
        },

        {
          "id": "hist_12_ch10",
          "title": "Colonialism and the Countryside",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Impact of British land settlement.",
          "topics": [
            { "id": "topic_hist_12_10_1", "title": "Permanent Settlement", "chapterId": "hist_12_ch10", "order": 1 },
            { "id": "topic_hist_12_10_2", "title": "Ryotwari System", "chapterId": "hist_12_ch10", "order": 2 },
            { "id": "topic_hist_12_10_3", "title": "Rebellions & Resistance", "chapterId": "hist_12_ch10", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch11",
          "title": "Rebels and the Raj (1857 Revolt)",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Causes, events and consequences of the 1857 revolt.",
          "topics": [
            { "id": "topic_hist_12_11_1", "title": "Causes of Revolt", "chapterId": "hist_12_ch11", "order": 1 },
            { "id": "topic_hist_12_11_2", "title": "Important Centres of Revolt", "chapterId": "hist_12_ch11", "order": 2 },
            { "id": "topic_hist_12_11_3", "title": "British Response", "chapterId": "hist_12_ch11", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch12",
          "title": "Colonial Cities – Urbanisation",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Urban development under British rule.",
          "topics": [
            { "id": "topic_hist_12_12_1", "title": "Growth of Presidency Cities", "chapterId": "hist_12_ch12", "order": 1 },
            { "id": "topic_hist_12_12_2", "title": "Urban Planning & Sanitation", "chapterId": "hist_12_ch12", "order": 2 }
          ]
        },
        {
          "id": "hist_12_ch13",
          "title": "Mahatma Gandhi and the National Movement",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Gandhi’s role in India’s freedom struggle.",
          "topics": [
            { "id": "topic_hist_12_13_1", "title": "Non-Cooperation Movement", "chapterId": "hist_12_ch13", "order": 1 },
            { "id": "topic_hist_12_13_2", "title": "Civil Disobedience Movement", "chapterId": "hist_12_ch13", "order": 2 },
            { "id": "topic_hist_12_13_3", "title": "Quit India Movement", "chapterId": "hist_12_ch13", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch14",
          "title": "Understanding Partition",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Events leading to partition and its consequences.",
          "topics": [
            { "id": "topic_hist_12_14_1", "title": "Communal Politics", "chapterId": "hist_12_ch14", "order": 1 },
            { "id": "topic_hist_12_14_2", "title": "Mountbatten Plan", "chapterId": "hist_12_ch14", "order": 2 },
            { "id": "topic_hist_12_14_3", "title": "Impact of Partition", "chapterId": "hist_12_ch14", "order": 3 }
          ]
        },

        {
          "id": "hist_12_ch15",
          "title": "Framing the Constitution",
          "subject": "History",
          "classLevel": "12th - Arts stream",
          "description": "Constituent Assembly debates and Indian Constitution formation.",
          "topics": [
            { "id": "topic_hist_12_15_1", "title": "Constituent Assembly Debates", "chapterId": "hist_12_ch15", "order": 1 },
            { "id": "topic_hist_12_15_2", "title": "Drafting Committee", "chapterId": "hist_12_ch15", "order": 2 },
            { "id": "topic_hist_12_15_3", "title": "Philosophy of Constitution", "chapterId": "hist_12_ch15", "order": 3 }
          ]
        }
      ],
      "Political Science": [

        {
          "id": "ps_12_cwp_ch1",
          "title": "The Cold War Era",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Origins of the Cold War, bipolarity and major alliances.",
          "topics": [
            { "id": "topic_ps_12_cwp_1_1", "title": "USA vs USSR Ideological Conflict", "chapterId": "ps_12_cwp_ch1", "order": 1 },
            { "id": "topic_ps_12_cwp_1_2", "title": "Military Alliances: NATO, Warsaw Pact", "chapterId": "ps_12_cwp_ch1", "order": 2 },
            { "id": "topic_ps_12_cwp_1_3", "title": "End of Cold War", "chapterId": "ps_12_cwp_ch1", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch2",
          "title": "The End of Bipolarity",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Disintegration of USSR and emerging world order.",
          "topics": [
            { "id": "topic_ps_12_cwp_2_1", "title": "Collapse of USSR", "chapterId": "ps_12_cwp_ch2", "order": 1 },
            { "id": "topic_ps_12_cwp_2_2", "title": "Shock Therapy", "chapterId": "ps_12_cwp_ch2", "order": 2 },
            { "id": "topic_ps_12_cwp_2_3", "title": "Unipolar World", "chapterId": "ps_12_cwp_ch2", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch3",
          "title": "US Hegemony in World Politics",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "American dominance and its implications.",
          "topics": [
            { "id": "topic_ps_12_cwp_3_1", "title": "Hard, Soft & Structural Power", "chapterId": "ps_12_cwp_ch3", "order": 1 },
            { "id": "topic_ps_12_cwp_3_2", "title": "US Role in World Economy", "chapterId": "ps_12_cwp_ch3", "order": 2 }
          ]
        },

        {
          "id": "ps_12_cwp_ch4",
          "title": "Alternative Centres of Power",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Rise of EU, China, ASEAN and their influence.",
          "topics": [
            { "id": "topic_ps_12_cwp_4_1", "title": "EU as a Supranational Entity", "chapterId": "ps_12_cwp_ch4", "order": 1 },
            { "id": "topic_ps_12_cwp_4_2", "title": "China’s Economic Rise", "chapterId": "ps_12_cwp_ch4", "order": 2 },
            { "id": "topic_ps_12_cwp_4_3", "title": "ASEAN Regional Cooperation", "chapterId": "ps_12_cwp_ch4", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch5",
          "title": "Contemporary South Asia",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "India and its neighbours – conflicts and cooperation.",
          "topics": [
            { "id": "topic_ps_12_cwp_5_1", "title": "India-Pakistan Relations", "chapterId": "ps_12_cwp_ch5", "order": 1 },
            { "id": "topic_ps_12_cwp_5_2", "title": "India-China Border Issues", "chapterId": "ps_12_cwp_ch5", "order": 2 },
            { "id": "topic_ps_12_cwp_5_3", "title": "SAARC & Regionalism", "chapterId": "ps_12_cwp_ch5", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch6",
          "title": "International Organizations",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "UN & reform debates, peacekeeping and global governance.",
          "topics": [
            { "id": "topic_ps_12_cwp_6_1", "title": "UN Structure & Agencies", "chapterId": "ps_12_cwp_ch6", "order": 1 },
            { "id": "topic_ps_12_cwp_6_2", "title": "Reforms in UN", "chapterId": "ps_12_cwp_ch6", "order": 2 },
            { "id": "topic_ps_12_cwp_6_3", "title": "UN Peacekeeping", "chapterId": "ps_12_cwp_ch6", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch7",
          "title": "Security in the Contemporary World",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Traditional vs non-traditional threats.",
          "topics": [
            { "id": "topic_ps_12_cwp_7_1", "title": "Military & Economic Security", "chapterId": "ps_12_cwp_ch7", "order": 1 },
            { "id": "topic_ps_12_cwp_7_2", "title": "Environmental Security", "chapterId": "ps_12_cwp_ch7", "order": 2 },
            { "id": "topic_ps_12_cwp_7_3", "title": "Human Security", "chapterId": "ps_12_cwp_ch7", "order": 3 }
          ]
        },

        {
          "id": "ps_12_cwp_ch8",
          "title": "Globalisation",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Political, economic and cultural effects of globalisation.",
          "topics": [
            { "id": "topic_ps_12_cwp_8_1", "title": "Causes of Globalisation", "chapterId": "ps_12_cwp_ch8", "order": 1 },
            { "id": "topic_ps_12_cwp_8_2", "title": "Political Consequences", "chapterId": "ps_12_cwp_ch8", "order": 2 },
            { "id": "topic_ps_12_cwp_8_3", "title": "Cultural Globalisation", "chapterId": "ps_12_cwp_ch8", "order": 3 }
          ]
        },
        {
          "id": "ps_12_india_ch1",
          "title": "Challenges of Nation Building",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Integration, reorganisation and consolidation after independence.",
          "topics": [
            { "id": "topic_ps_12_india_1_1", "title": "Partition Challenges", "chapterId": "ps_12_india_ch1", "order": 1 },
            { "id": "topic_ps_12_india_1_2", "title": "Integration of Princely States", "chapterId": "ps_12_india_ch1", "order": 2 },
            { "id": "topic_ps_12_india_1_3", "title": "Reorganisation of States", "chapterId": "ps_12_india_ch1", "order": 3 }
          ]
        },

        {
          "id": "ps_12_india_ch2",
          "title": "Era of One-Party Dominance",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Congress dominance, opposition and major political changes.",
          "topics": [
            { "id": "topic_ps_12_india_2_1", "title": "Congress Rule in Early Years", "chapterId": "ps_12_india_ch2", "order": 1 },
            { "id": "topic_ps_12_india_2_2", "title": "Rise of Opposition Parties", "chapterId": "ps_12_india_ch2", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch3",
          "title": "Politics of Planned Development",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Five-year plans, mixed economy and economic policies.",
          "topics": [
            { "id": "topic_ps_12_india_3_1", "title": "Planning Commission", "chapterId": "ps_12_india_ch3", "order": 1 },
            { "id": "topic_ps_12_india_3_2", "title": "Public vs Private Sector", "chapterId": "ps_12_india_ch3", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch4",
          "title": "India’s External Relations",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Non-alignment, regional relations, foreign policy.",
          "topics": [
            { "id": "topic_ps_12_india_4_1", "title": "Non-Aligned Movement (NAM)", "chapterId": "ps_12_india_ch4", "order": 1 },
            { "id": "topic_ps_12_india_4_2", "title": "Relations with Neighbours", "chapterId": "ps_12_india_ch4", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch5",
          "title": "Challenges to and Restoration of Congress System",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Political crises, emergency and changes in governance.",
          "topics": [
            { "id": "topic_ps_12_india_5_1", "title": "Emergency of 1975", "chapterId": "ps_12_india_ch5", "order": 1 },
            { "id": "topic_ps_12_india_5_2", "title": "Janata Government", "chapterId": "ps_12_india_ch5", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch6",
          "title": "The Crisis of Democratic Order",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Political tension, JP movement and emergency.",
          "topics": [
            { "id": "topic_ps_12_india_6_1", "title": "JP Movement", "chapterId": "ps_12_india_ch6", "order": 1 },
            { "id": "topic_ps_12_india_6_2", "title": "Emergency Impact", "chapterId": "ps_12_india_ch6", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch7",
          "title": "Regional Aspirations",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Regionalism in India, autonomy demands and identity movements.",
          "topics": [
            { "id": "topic_ps_12_india_7_1", "title": "Punjab & Khalistan Movement", "chapterId": "ps_12_india_ch7", "order": 1 },
            { "id": "topic_ps_12_india_7_2", "title": "North-East Insurgency", "chapterId": "ps_12_india_ch7", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch8",
          "title": "Recent Developments in Indian Politics",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Coalition politics, economic reforms and contemporary issues.",
          "topics": [
            { "id": "topic_ps_12_india_8_1", "title": "Coalition Governments", "chapterId": "ps_12_india_ch8", "order": 1 },
            { "id": "topic_ps_12_india_8_2", "title": "1991 Economic Reforms", "chapterId": "ps_12_india_ch8", "order": 2 }
          ]
        },

        {
          "id": "ps_12_india_ch9",
          "title": "Indian Politics: Trends and Developments",
          "subject": "Political Science",
          "classLevel": "12th - Arts stream",
          "description": "Changing electoral politics and new social movements.",
          "topics": [
            { "id": "topic_ps_12_india_9_1", "title": "Electoral Reforms", "chapterId": "ps_12_india_ch9", "order": 1 },
            { "id": "topic_ps_12_india_9_2", "title": "Rise of Regional Parties", "chapterId": "ps_12_india_ch9", "order": 2 }
          ]
        }
      ],
      "Fundamentals of Human Geography": [

        {
          "id": "geo_12_ch1",
          "title": "Human Geography: Nature and Scope",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Nature, core ideas and evolution of human geography.",
          "topics": [
            { "id": "topic_geo_12_1_1", "title": "Branches of Human Geography", "chapterId": "geo_12_ch1", "order": 1 },
            { "id": "topic_geo_12_1_2", "title": "Environmental Determinism vs Possibilism", "chapterId": "geo_12_ch1", "order": 2 },
            { "id": "topic_geo_12_1_3", "title": "Dualism in Geography", "chapterId": "geo_12_ch1", "order": 3 }
          ]
        },

        {
          "id": "geo_12_ch2",
          "title": "The World Population: Distribution, Density and Growth",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Global population patterns and demographic indicators.",
          "topics": [
            { "id": "topic_geo_12_2_1", "title": "Population Distribution Factors", "chapterId": "geo_12_ch2", "order": 1 },
            { "id": "topic_geo_12_2_2", "title": "Density of Population", "chapterId": "geo_12_ch2", "order": 2 },
            { "id": "topic_geo_12_2_3", "title": "Population Growth & Demographic Transition", "chapterId": "geo_12_ch2", "order": 3 }
          ]
        },

        {
          "id": "geo_12_ch3",
          "title": "Human Development",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "HDI, development goals and global inequality.",
          "topics": [
            { "id": "topic_geo_12_3_1", "title": "Human Development Indicators", "chapterId": "geo_12_ch3", "order": 1 },
            { "id": "topic_geo_12_3_2", "title": "Human Poverty Index", "chapterId": "geo_12_ch3", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch4",
          "title": "Primary Activities",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Farming, fishing, mining and gathering.",
          "topics": [
            { "id": "topic_geo_12_4_1", "title": "Subsistence & Commercial Agriculture", "chapterId": "geo_12_ch4", "order": 1 },
            { "id": "topic_geo_12_4_2", "title": "Fishing & Forestry", "chapterId": "geo_12_ch4", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch5",
          "title": "Secondary Activities",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Manufacturing, industries and industrial regions.",
          "topics": [
            { "id": "topic_geo_12_5_1", "title": "Industrial Systems", "chapterId": "geo_12_ch5", "order": 1 },
            { "id": "topic_geo_12_5_2", "title": "Industrial Location Factors", "chapterId": "geo_12_ch5", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch6",
          "title": "Tertiary and Quaternary Activities",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Services, IT, finance, tourism and knowledge sectors.",
          "topics": [
            { "id": "topic_geo_12_6_1", "title": "Types of Services", "chapterId": "geo_12_ch6", "order": 1 },
            { "id": "topic_geo_12_6_2", "title": "Information Technology & Outsourcing", "chapterId": "geo_12_ch6", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch7",
          "title": "Transport and Communication",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Transport networks and communication technologies.",
          "topics": [
            { "id": "topic_geo_12_7_1", "title": "Modes of Transport", "chapterId": "geo_12_ch7", "order": 1 },
            { "id": "topic_geo_12_7_2", "title": "Communication Systems", "chapterId": "geo_12_ch7", "order": 2 }
          ]
        },
        {
          "id": "geo_12_ch8",
          "title": "Population: Distribution, Density, Growth",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Demographic characteristics and growth patterns in India.",
          "topics": [
            { "id": "topic_geo_12_8_1", "title": "Population Distribution & Factors", "chapterId": "geo_12_ch8", "order": 1 },
            { "id": "topic_geo_12_8_2", "title": "Population Growth in India", "chapterId": "geo_12_ch8", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch9",
          "title": "Migration: Types, Causes and Consequences",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Internal and international migration, push-pull factors.",
          "topics": [
            { "id": "topic_geo_12_9_1", "title": "Push & Pull Factors", "chapterId": "geo_12_ch9", "order": 1 },
            { "id": "topic_geo_12_9_2", "title": "Consequences of Migration", "chapterId": "geo_12_ch9", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch10",
          "title": "Human Development in India",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "HDI variations, education, health and regional inequalities.",
          "topics": [
            { "id": "topic_geo_12_10_1", "title": "State-wise HDI Patterns", "chapterId": "geo_12_ch10", "order": 1 },
            { "id": "topic_geo_12_10_2", "title": "Education & Health Indicators", "chapterId": "geo_12_ch10", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch11",
          "title": "Human Settlements",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Rural and urban settlements in India.",
          "topics": [
            { "id": "topic_geo_12_11_1", "title": "Rural vs Urban Settlements", "chapterId": "geo_12_ch11", "order": 1 },
            { "id": "topic_geo_12_11_2", "title": "Urbanisation Trends", "chapterId": "geo_12_ch11", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch12",
          "title": "Resources and Development",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Land, soil, water and resource planning.",
          "topics": [
            { "id": "topic_geo_12_12_1", "title": "Land Resources", "chapterId": "geo_12_ch12", "order": 1 },
            { "id": "topic_geo_12_12_2", "title": "Soil Degradation", "chapterId": "geo_12_ch12", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch13",
          "title": "Agriculture",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Types of farming, crops and agricultural development.",
          "topics": [
            { "id": "topic_geo_12_13_1", "title": "Major Crops of India", "chapterId": "geo_12_ch13", "order": 1 },
            { "id": "topic_geo_12_13_2", "title": "Green Revolution Impact", "chapterId": "geo_12_ch13", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch14",
          "title": "Water Resources",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Water distribution, conservation and irrigation.",
          "topics": [
            { "id": "topic_geo_12_14_1", "title": "Multipurpose River Projects", "chapterId": "geo_12_ch14", "order": 1 },
            { "id": "topic_geo_12_14_2", "title": "Watershed Management", "chapterId": "geo_12_ch14", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch15",
          "title": "Mineral and Energy Resources",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Coal, petroleum, natural gas, and renewable resources.",
          "topics": [
            { "id": "topic_geo_12_15_1", "title": "Distribution of Minerals", "chapterId": "geo_12_ch15", "order": 1 },
            { "id": "topic_geo_12_15_2", "title": "Conventional & Non-Conventional Energy", "chapterId": "geo_12_ch15", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch16",
          "title": "Manufacturing Industries",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Industrial regions, raw materials and development.",
          "topics": [
            { "id": "topic_geo_12_16_1", "title": "Agro-based & Mineral-based Industries", "chapterId": "geo_12_ch16", "order": 1 },
            { "id": "topic_geo_12_16_2", "title": "Industrial Pollution", "chapterId": "geo_12_ch16", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch17",
          "title": "Transport and Communication",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Transport networks and communication infrastructure.",
          "topics": [
            { "id": "topic_geo_12_17_1", "title": "Roadways, Railways, Airways", "chapterId": "geo_12_ch17", "order": 1 },
            { "id": "topic_geo_12_17_2", "title": "Digital India & Communication", "chapterId": "geo_12_ch17", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch18",
          "title": "International Trade",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "India’s trade partners, exports and imports.",
          "topics": [
            { "id": "topic_geo_12_18_1", "title": "Major Export-Import Items", "chapterId": "geo_12_ch18", "order": 1 },
            { "id": "topic_geo_12_18_2", "title": "Balance of Trade", "chapterId": "geo_12_ch18", "order": 2 }
          ]
        },

        {
          "id": "geo_12_ch19",
          "title": "Geographical Perspective on Selected Issues & Problems",
          "subject": "Geography",
          "classLevel": "12th - Arts stream",
          "description": "Migration, slums, land degradation and pollution.",
          "topics": [
            { "id": "topic_geo_12_19_1", "title": "Urban Waste Disposal", "chapterId": "geo_12_ch19", "order": 1 },
            { "id": "topic_geo_12_19_2", "title": "Land Degradation", "chapterId": "geo_12_ch19", "order": 2 }
          ]
        }
      ],
      "Sociology": [

        {
          "id": "soc_12_ch1",
          "title": "Introducing Indian Society",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Understanding diversity, unity and cultural patterns.",
          "topics": [
            { "id": "topic_soc_12_1_1", "title": "Unity in Diversity", "chapterId": "soc_12_ch1", "order": 1 },
            { "id": "topic_soc_12_1_2", "title": "Cultural Diversity", "chapterId": "soc_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch2",
          "title": "The Demographic Structure of Indian Society",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Population composition, sex ratio, age structure.",
          "topics": [
            { "id": "topic_soc_12_2_1", "title": "Population Growth", "chapterId": "soc_12_ch2", "order": 1 },
            { "id": "topic_soc_12_2_2", "title": "Dependency Ratio", "chapterId": "soc_12_ch2", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch3",
          "title": "Social Institutions – Continuity and Change",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Caste, tribe, family and marriage.",
          "topics": [
            { "id": "topic_soc_12_3_1", "title": "Caste System Transformation", "chapterId": "soc_12_ch3", "order": 1 },
            { "id": "topic_soc_12_3_2", "title": "Tribal Communities", "chapterId": "soc_12_ch3", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch4",
          "title": "Patterns of Social Inequality and Exclusion",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Caste, class, gender and disability.",
          "topics": [
            { "id": "topic_soc_12_4_1", "title": "Caste Inequality", "chapterId": "soc_12_ch4", "order": 1 },
            { "id": "topic_soc_12_4_2", "title": "Gender Discrimination", "chapterId": "soc_12_ch4", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch5",
          "title": "The Challenges of Cultural Diversity",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Regionalism, communalism and assimilation.",
          "topics": [
            { "id": "topic_soc_12_5_1", "title": "Regional Movements", "chapterId": "soc_12_ch5", "order": 1 },
            { "id": "topic_soc_12_5_2", "title": "Minority Rights", "chapterId": "soc_12_ch5", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch6",
          "title": "Change and Development in Rural Society",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Land reforms, rural power structure and agrarian issues.",
          "topics": [
            { "id": "topic_soc_12_6_1", "title": "Land Reforms", "chapterId": "soc_12_ch6", "order": 1 },
            { "id": "topic_soc_12_6_2", "title": "Emerging Agrarian Structure", "chapterId": "soc_12_ch6", "order": 2 }
          ]
        },
        {
          "id": "soc_12_ch7",
          "title": "Structural Change (Colonialism, Industrialisation)",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Colonial impact, industrial change and modernisation.",
          "topics": [
            { "id": "topic_soc_12_7_1", "title": "Industrialisation & Urbanisation", "chapterId": "soc_12_ch7", "order": 1 },
            { "id": "topic_soc_12_7_2", "title": "Colonial Social Policies", "chapterId": "soc_12_ch7", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch8",
          "title": "Cultural Change (Sanskritisation, Globalisation)",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Processes of cultural change in India.",
          "topics": [
            { "id": "topic_soc_12_8_1", "title": "Sanskritisation & Westernisation", "chapterId": "soc_12_ch8", "order": 1 },
            { "id": "topic_soc_12_8_2", "title": "Cultural Globalisation", "chapterId": "soc_12_ch8", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch9",
          "title": "The Story of Indian Democracy",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Democratic institutions, elections and political processes.",
          "topics": [
            { "id": "topic_soc_12_9_1", "title": "Panchayati Raj Institutions", "chapterId": "soc_12_ch9", "order": 1 },
            { "id": "topic_soc_12_9_2", "title": "Electoral Politics", "chapterId": "soc_12_ch9", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch10",
          "title": "Change and Development in Industrial Society",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Labour issues, industrial relations and globalisation.",
          "topics": [
            { "id": "topic_soc_12_10_1", "title": "Formal & Informal Labour", "chapterId": "soc_12_ch10", "order": 1 },
            { "id": "topic_soc_12_10_2", "title": "Labour Movements", "chapterId": "soc_12_ch10", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch11",
          "title": "Globalisation and Social Change",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Economic reforms, consumerism and cultural shifts.",
          "topics": [
            { "id": "topic_soc_12_11_1", "title": "Economic Liberalisation", "chapterId": "soc_12_ch11", "order": 1 },
            { "id": "topic_soc_12_11_2", "title": "Consumer Society", "chapterId": "soc_12_ch11", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch12",
          "title": "Mass Media and Communications",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Growth of media, technology and representation.",
          "topics": [
            { "id": "topic_soc_12_12_1", "title": "Print & Electronic Media", "chapterId": "soc_12_ch12", "order": 1 },
            { "id": "topic_soc_12_12_2", "title": "Media Representation", "chapterId": "soc_12_ch12", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch13",
          "title": "Social Movements",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Environmental, women and workers’ movements.",
          "topics": [
            { "id": "topic_soc_12_13_1", "title": "Chipko Movement", "chapterId": "soc_12_ch13", "order": 1 },
            { "id": "topic_soc_12_13_2", "title": "Women’s Movements", "chapterId": "soc_12_ch13", "order": 2 }
          ]
        },

        {
          "id": "soc_12_ch14",
          "title": "Population, Environment and Development",
          "subject": "Sociology",
          "classLevel": "12th - Arts stream",
          "description": "Ecology, sustainability and demographic changes.",
          "topics": [
            { "id": "topic_soc_12_14_1", "title": "Population-Environment Linkages", "chapterId": "soc_12_ch14", "order": 1 },
            { "id": "topic_soc_12_14_2", "title": "Sustainable Development", "chapterId": "soc_12_ch14", "order": 2 }
          ]
        }
      ],
      "English": [

        {
          "id": "eng_12_fla_ch1",
          "title": "The Last Lesson",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Story about linguistic pride and loss in Alsace.",
          "topics": [
            { "id": "topic_eng_12_fla_1_1", "title": "Character Analysis", "chapterId": "eng_12_fla_ch1", "order": 1 },
            { "id": "topic_eng_12_fla_1_2", "title": "Theme of Language & Patriotism", "chapterId": "eng_12_fla_ch1", "order": 2 },
            { "id": "topic_eng_12_fla_1_3", "title": "Historical Context", "chapterId": "eng_12_fla_ch1", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_ch2",
          "title": "Lost Spring",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Stories highlighting poverty and exploitation of children.",
          "topics": [
            { "id": "topic_eng_12_fla_2_1", "title": "Theme of Poverty & Exploitation", "chapterId": "eng_12_fla_ch2", "order": 1 },
            { "id": "topic_eng_12_fla_2_2", "title": "Character Sketches", "chapterId": "eng_12_fla_ch2", "order": 2 },
            { "id": "topic_eng_12_fla_2_3", "title": "Social Critique", "chapterId": "eng_12_fla_ch2", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_ch3",
          "title": "Deep Water",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Autobiographical account of overcoming fear of water.",
          "topics": [
            { "id": "topic_eng_12_fla_3_1", "title": "Theme of Courage & Fear", "chapterId": "eng_12_fla_ch3", "order": 1 },
            { "id": "topic_eng_12_fla_3_2", "title": "Character Study", "chapterId": "eng_12_fla_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch4",
          "title": "The Rattrap",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Story of kindness, redemption and transformation.",
          "topics": [
            { "id": "topic_eng_12_fla_4_1", "title": "Theme of Compassion", "chapterId": "eng_12_fla_ch4", "order": 1 },
            { "id": "topic_eng_12_fla_4_2", "title": "Symbolism of Rattrap", "chapterId": "eng_12_fla_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch5",
          "title": "Indigo",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Gandhi’s Champaran struggle and Satyagraha movement.",
          "topics": [
            { "id": "topic_eng_12_fla_5_1", "title": "Gandhian Principles", "chapterId": "eng_12_fla_ch5", "order": 1 },
            { "id": "topic_eng_12_fla_5_2", "title": "Social Justice Theme", "chapterId": "eng_12_fla_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch6",
          "title": "Poets and Pancakes",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Humorous commentary on Gemini Studios and film industry.",
          "topics": [
            { "id": "topic_eng_12_fla_6_1", "title": "Satire & Irony", "chapterId": "eng_12_fla_ch6", "order": 1 },
            { "id": "topic_eng_12_fla_6_2", "title": "Film Industry Commentary", "chapterId": "eng_12_fla_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch7",
          "title": "The Interview",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Perspectives on interviews in literature and media.",
          "topics": [
            { "id": "topic_eng_12_fla_7_1", "title": "Debate on Interviews", "chapterId": "eng_12_fla_ch7", "order": 1 },
            { "id": "topic_eng_12_fla_7_2", "title": "Anecdotes and Examples", "chapterId": "eng_12_fla_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_12_fla_ch8",
          "title": "Going Places",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Teenage ambitions, fantasies and reality.",
          "topics": [
            { "id": "topic_eng_12_fla_8_1", "title": "Reality vs Fantasy", "chapterId": "eng_12_fla_ch8", "order": 1 },
            { "id": "topic_eng_12_fla_8_2", "title": "Character Study of Sophie", "chapterId": "eng_12_fla_ch8", "order": 2 }
          ]
        },
        {
          "id": "eng_12_fla_poem1",
          "title": "My Mother at Sixty-Six",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Poem about aging and emotional bonds.",
          "topics": [
            { "id": "topic_eng_12_fla_p1_1", "title": "Poem Summary", "chapterId": "eng_12_fla_poem1", "order": 1 },
            { "id": "topic_eng_12_fla_p1_2", "title": "Theme & Message", "chapterId": "eng_12_fla_poem1", "order": 2 },
            { "id": "topic_eng_12_fla_p1_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem1", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem2",
          "title": "An Elementary School Classroom in a Slum",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Poem depicting inequalities in education.",
          "topics": [
            { "id": "topic_eng_12_fla_p2_1", "title": "Summary", "chapterId": "eng_12_fla_poem2", "order": 1 },
            { "id": "topic_eng_12_fla_p2_2", "title": "Themes of Poverty & Inequality", "chapterId": "eng_12_fla_poem2", "order": 2 },
            { "id": "topic_eng_12_fla_p2_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem2", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem3",
          "title": "Keeping Quiet",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Poem promoting introspection and peace.",
          "topics": [
            { "id": "topic_eng_12_fla_p3_1", "title": "Summary", "chapterId": "eng_12_fla_poem3", "order": 1 },
            { "id": "topic_eng_12_fla_p3_2", "title": "Theme & Interpretation", "chapterId": "eng_12_fla_poem3", "order": 2 },
            { "id": "topic_eng_12_fla_p3_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem3", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem4",
          "title": "A Thing of Beauty",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Beauty as a source of permanent joy.",
          "topics": [
            { "id": "topic_eng_12_fla_p4_1", "title": "Summary", "chapterId": "eng_12_fla_poem4", "order": 1 },
            { "id": "topic_eng_12_fla_p4_2", "title": "Theme", "chapterId": "eng_12_fla_poem4", "order": 2 },
            { "id": "topic_eng_12_fla_p4_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem4", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem5",
          "title": "A Roadside Stand",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Poem about rural suffering and inequality.",
          "topics": [
            { "id": "topic_eng_12_fla_p5_1", "title": "Summary", "chapterId": "eng_12_fla_poem5", "order": 1 },
            { "id": "topic_eng_12_fla_p5_2", "title": "Theme of Urban-Rural Divide", "chapterId": "eng_12_fla_poem5", "order": 2 },
            { "id": "topic_eng_12_fla_p5_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem5", "order": 3 }
          ]
        },

        {
          "id": "eng_12_fla_poem6",
          "title": "Aunt Jennifer's Tigers",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Poem symbolising female oppression and freedom.",
          "topics": [
            { "id": "topic_eng_12_fla_p6_1", "title": "Summary", "chapterId": "eng_12_fla_poem6", "order": 1 },
            { "id": "topic_eng_12_fla_p6_2", "title": "Feminist Themes", "chapterId": "eng_12_fla_poem6", "order": 2 },
            { "id": "topic_eng_12_fla_p6_3", "title": "Literary Devices", "chapterId": "eng_12_fla_poem6", "order": 3 }
          ]
        },
        {
          "id": "eng_12_vis_ch1",
          "title": "The Third Level",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "A psychological fantasy exploring escapism.",
          "topics": [
            { "id": "topic_eng_12_vis_1_1", "title": "Theme of Escapism", "chapterId": "eng_12_vis_ch1", "order": 1 },
            { "id": "topic_eng_12_vis_1_2", "title": "Character Analysis", "chapterId": "eng_12_vis_ch1", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch2",
          "title": "The Tiger King",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Satire about power, arrogance and fate.",
          "topics": [
            { "id": "topic_eng_12_vis_2_1", "title": "Political Satire", "chapterId": "eng_12_vis_ch2", "order": 1 },
            { "id": "topic_eng_12_vis_2_2", "title": "Irony & Symbolism", "chapterId": "eng_12_vis_ch2", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch3",
          "title": "Journey to the End of the Earth",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Journey to Antarctica exploring climate and environment.",
          "topics": [
            { "id": "topic_eng_12_vis_3_1", "title": "Environmental Themes", "chapterId": "eng_12_vis_ch3", "order": 1 },
            { "id": "topic_eng_12_vis_3_2", "title": "Experiential Writing", "chapterId": "eng_12_vis_ch3", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch4",
          "title": "The Enemy",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Moral conflict of a Japanese doctor saving an enemy soldier.",
          "topics": [
            { "id": "topic_eng_12_vis_4_1", "title": "Humanity During War", "chapterId": "eng_12_vis_ch4", "order": 1 },
            { "id": "topic_eng_12_vis_4_2", "title": "Moral Dilemmas", "chapterId": "eng_12_vis_ch4", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch5",
          "title": "Should Wizard Hit Mommy?",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Story of imagination, parenting and conflict.",
          "topics": [
            { "id": "topic_eng_12_vis_5_1", "title": "Parent-Child Relationship", "chapterId": "eng_12_vis_ch5", "order": 1 },
            { "id": "topic_eng_12_vis_5_2", "title": "Moral Themes", "chapterId": "eng_12_vis_ch5", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch6",
          "title": "On the Face of It",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Story of friendship and acceptance despite physical differences.",
          "topics": [
            { "id": "topic_eng_12_vis_6_1", "title": "Theme of Acceptance", "chapterId": "eng_12_vis_ch6", "order": 1 },
            { "id": "topic_eng_12_vis_6_2", "title": "Disability & Empathy", "chapterId": "eng_12_vis_ch6", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch7",
          "title": "Evans Tries an O-Level",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Clever prison escape story filled with humour and suspense.",
          "topics": [
            { "id": "topic_eng_12_vis_7_1", "title": "Crime & Intelligence", "chapterId": "eng_12_vis_ch7", "order": 1 },
            { "id": "topic_eng_12_vis_7_2", "title": "Plot and Suspense Elements", "chapterId": "eng_12_vis_ch7", "order": 2 }
          ]
        },

        {
          "id": "eng_12_vis_ch8",
          "title": "Memories of Childhood",
          "subject": "English",
          "classLevel": "12th - Arts stream",
          "description": "Autobiographical stories on caste and racial discrimination.",
          "topics": [
            { "id": "topic_eng_12_vis_8_1", "title": "Theme of Discrimination", "chapterId": "eng_12_vis_ch8", "order": 1 },
            { "id": "topic_eng_12_vis_8_2", "title": "Autobiographical Elements", "chapterId": "eng_12_vis_ch8", "order": 2 }
          ]
        }
      ],
      "Philosophy": [

        {
          "id": "phil_12_ch1",
          "title": "Indian Philosophy",
          "subject": "Philosophy",
          "classLevel": "12th - Arts stream",
          "description": "Classical Indian schools and core ideas.",
          "topics": [
            { "id": "topic_phil_12_1_1", "title": "Astika & Nastika Schools", "chapterId": "phil_12_ch1", "order": 1 },
            { "id": "topic_phil_12_1_2", "title": "Nyaya, Samkhya, Yoga", "chapterId": "phil_12_ch1", "order": 2 },
            { "id": "topic_phil_12_1_3", "title": "Buddhism & Jainism", "chapterId": "phil_12_ch1", "order": 3 }
          ]
        },

        {
          "id": "phil_12_ch2",
          "title": "Western Philosophy",
          "subject": "Philosophy",
          "classLevel": "12th - Arts stream",
          "description": "Greek, modern and contemporary ideas.",
          "topics": [
            { "id": "topic_phil_12_2_1", "title": "Socrates, Plato, Aristotle", "chapterId": "phil_12_ch2", "order": 1 },
            { "id": "topic_phil_12_2_2", "title": "Rationalism vs Empiricism", "chapterId": "phil_12_ch2", "order": 2 },
            { "id": "topic_phil_12_2_3", "title": "Existentialism & Phenomenology", "chapterId": "phil_12_ch2", "order": 3 }
          ]
        }
      ],
      "Home Science": [

        {
          "id": "hs_12_ch1",
          "title": "Human Development",
          "subject": "Home Science",
          "classLevel": "12th - Arts stream",
          "description": "Growth, adolescence, personality and emotional development.",
          "topics": [
            { "id": "topic_hs_12_1_1", "title": "Adolescent Development", "chapterId": "hs_12_ch1", "order": 1 },
            { "id": "topic_hs_12_1_2", "title": "Emotional & Social Growth", "chapterId": "hs_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "hs_12_ch2",
          "title": "Food, Nutrition and Health",
          "subject": "Home Science",
          "classLevel": "12th - Arts stream",
          "description": "Balanced diet, macronutrients, micronutrients and health.",
          "topics": [
            { "id": "topic_hs_12_2_1", "title": "Balanced Diet Planning", "chapterId": "hs_12_ch2", "order": 1 },
            { "id": "topic_hs_12_2_2", "title": "Deficiency Diseases", "chapterId": "hs_12_ch2", "order": 2 }
          ]
        },

        {
          "id": "hs_12_ch3",
          "title": "Family and Community Resources",
          "subject": "Home Science",
          "classLevel": "12th - Arts stream",
          "description": "Resource management, budgeting and saving.",
          "topics": [
            { "id": "topic_hs_12_3_1", "title": "Time & Money Management", "chapterId": "hs_12_ch3", "order": 1 },
            { "id": "topic_hs_12_3_2", "title": "Household Budgeting", "chapterId": "hs_12_ch3", "order": 2 }
          ]
        }
      ],
      "Fine Arts": [

        {
          "id": "fa_12_paint_ch1",
          "title": "Miniature Painting Traditions",
          "subject": "Fine Arts - Painting",
          "classLevel": "12th - Arts stream",
          "description": "Rajput, Mughal and Deccan miniature style.",
          "topics": [
            { "id": "topic_fa_12_paint_1_1", "title": "Rajasthani School", "chapterId": "fa_12_paint_ch1", "order": 1 },
            { "id": "topic_fa_12_paint_1_2", "title": "Mughal School", "chapterId": "fa_12_paint_ch1", "order": 2 }
          ]
        },

        {
          "id": "fa_12_paint_ch2",
          "title": "Modern Indian Art",
          "subject": "Fine Arts - Painting",
          "classLevel": "12th - Arts stream",
          "description": "Evolution of modern Indian painters.",
          "topics": [
            { "id": "topic_fa_12_paint_2_1", "title": "Abanindranath Tagore", "chapterId": "fa_12_paint_ch2", "order": 1 },
            { "id": "topic_fa_12_paint_2_2", "title": "Nandalal Bose & Progressive Artists", "chapterId": "fa_12_paint_ch2", "order": 2 }
          ]
        },
        {
          "id": "fa_12_sculpt_ch1",
          "title": "Indian Sculpture Traditions",
          "subject": "Fine Arts - Sculpture",
          "classLevel": "12th - Arts stream",
          "description": "Ancient to medieval sculpture style.",
          "topics": [
            { "id": "topic_fa_12_sculpt_1_1", "title": "Indus Valley Sculptures", "chapterId": "fa_12_sculpt_ch1", "order": 1 },
            { "id": "topic_fa_12_sculpt_1_2", "title": "Buddhist & Jain Sculptures", "chapterId": "fa_12_sculpt_ch1", "order": 2 }
          ]
        },
        {
          "id": "fa_12_graphics_ch1",
          "title": "Printmaking Techniques",
          "subject": "Fine Arts - Graphics",
          "classLevel": "12th - Arts stream",
          "description": "Relief, intaglio, planographic and stencil printing.",
          "topics": [
            { "id": "topic_fa_12_graphics_1_1", "title": "Woodcut & Linocut", "chapterId": "fa_12_graphics_ch1", "order": 1 },
            { "id": "topic_fa_12_graphics_1_2", "title": "Lithography & Etching", "chapterId": "fa_12_graphics_ch1", "order": 2 }
          ]
        },
        {
          "id": "fa_12_applied_ch1",
          "title": "Basics of Advertising and Design",
          "subject": "Fine Arts - Applied Art",
          "classLevel": "12th - Arts stream",
          "description": "Elements of design, typography and layout.",
          "topics": [
            { "id": "topic_fa_12_applied_1_1", "title": "Principles of Design", "chapterId": "fa_12_applied_ch1", "order": 1 },
            { "id": "topic_fa_12_applied_1_2", "title": "Typography Basics", "chapterId": "fa_12_applied_ch1", "order": 2 }
          ]
        }
      ],
      "Legal Studies": [

        {
          "id": "lsart_12_ch1",
          "title": "Judiciary",
          "subject": "Legal Studies",
          "classLevel": "12th - Arts stream",
          "description": "Indian judicial system, courts and processes.",
          "topics": [
            { "id": "topic_lsart_12_1_1", "title": "Supreme Court & High Court Roles", "chapterId": "lsart_12_ch1", "order": 1 },
            { "id": "topic_lsart_12_1_2", "title": "Judicial Review", "chapterId": "lsart_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "lsart_12_ch2",
          "title": "Legal Services and Access to Justice",
          "subject": "Legal Studies",
          "classLevel": "12th - Arts stream",
          "description": "Legal aid systems, Lok Adalat, ADR mechanisms.",
          "topics": [
            { "id": "topic_lsart_12_2_1", "title": "Lok Adalats", "chapterId": "lsart_12_ch2", "order": 1 },
            { "id": "topic_lsart_12_2_2", "title": "Legal Aid", "chapterId": "lsart_12_ch2", "order": 2 }
          ]
        }
      ],
      "Physical Education": [

        {
          "id": "peart_12_ch1",
          "title": "Planning in Sports",
          "subject": "Physical Education",
          "classLevel": "12th - Arts stream",
          "description": "Sports planning, fixture preparation and time management.",
          "topics": [
            { "id": "topic_peart_12_1_1", "title": "Tournament Fixtures", "chapterId": "peart_12_ch1", "order": 1 },
            { "id": "topic_peart_12_1_2", "title": "Types of Training Plans", "chapterId": "peart_12_ch1", "order": 2 }
          ]
        },

        {
          "id": "peart_12_ch2",
          "title": "Sports and Nutrition",
          "subject": "Physical Education",
          "classLevel": "12th - Arts stream",
          "description": "Food groups, balanced diet and nutritional issues.",
          "topics": [
            { "id": "topic_peart_12_2_1", "title": "Macronutrients & Micronutrients", "chapterId": "peart_12_ch2", "order": 1 },
            { "id": "topic_peart_12_2_2", "title": "Sports Nutrition Guidelines", "chapterId": "peart_12_ch2", "order": 2 }
          ]
        }
      ]
    }
  }
};
