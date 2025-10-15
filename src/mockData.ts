import { MockData } from "./types";

// Restructured mock data: standard → subject → chapters
export const mockData: MockData = {
  chapters: {
    "8th": {
      mathematics: [
        {
          id: "math_8_ch1",
          title: "Rational Numbers",
          subject: "mathematics",
          classLevel: "8th",
          description: "Understanding rational numbers and their operations",
          topics: [
            {
              id: "topic_placeholder_1",
              title: "Introduction to Rational Numbers",
              chapterId: "math_8_ch1",
              order: 1,
            },
            {
              id: "topic_placeholder_2",
              title: "Properties of Rational Numbers",
              chapterId: "math_8_ch1",
              order: 2,
            },
          ],
        },
      ],
      science: [
        {
          id: "sci_8_ch1",
          title: "Crop Production and Management",
          subject: "science",
          classLevel: "8th",
          topics: [
            {
              id: "topic_placeholder_3",
              title: "Agricultural Practices",
              chapterId: "sci_8_ch1",
              order: 1,
            },
            {
              id: "topic_placeholder_4",
              title: "Crop Management",
              chapterId: "sci_8_ch1",
              order: 2,
            },
          ],
        },
      ],
      english: [
        {
          id: "eng_8_ch1",
          title: "The Best Christmas Present in the World",
          subject: "english",
          classLevel: "8th",
          topics: [
            {
              id: "topic_placeholder_5",
              title: "Character Analysis",
              chapterId: "eng_8_ch1",
              order: 1,
            },
          ],
        },
      ],
      history: [
        {
          id: "hist_8_ch1",
          title: "How, When and Where",
          subject: "history",
          classLevel: "8th",
          topics: [
            {
              id: "topic_placeholder_6",
              title: "Sources of History",
              chapterId: "hist_8_ch1",
              order: 1,
            },
          ],
        },
      ],
      geography: [
        {
          id: "geo_8_ch1",
          title: "Resources",
          subject: "geography",
          classLevel: "8th",
          topics: [
            {
              id: "topic_placeholder_7",
              title: "Types of Resources",
              chapterId: "geo_8_ch1",
              order: 1,
            },
          ],
        },
      ],
    },
    "9th": {
      mathematics: [
        {
          id: "math_9_ch1",
          title: "Number Systems",
          subject: "mathematics",
          classLevel: "9th",
          topics: [
            {
              id: "topic_placeholder_8",
              title: "Real Numbers",
              chapterId: "math_9_ch1",
              order: 1,
            },
          ],
        },
      ],
      science: [
        {
          id: "sci_9_ch1",
          title: "Matter in Our Surroundings",
          subject: "science",
          classLevel: "9th",
          topics: [
            {
              id: "topic_placeholder_9",
              title: "States of Matter",
              chapterId: "sci_9_ch1",
              order: 1,
            },
          ],
        },
      ],
      english: [
        {
          id: "eng_9_ch1",
          title: "The Fun They Had",
          subject: "english",
          classLevel: "9th",
          topics: [
            {
              id: "topic_placeholder_10",
              title: "Story Analysis",
              chapterId: "eng_9_ch1",
              order: 1,
            },
          ],
        },
      ],
      history: [
        {
          id: "hist_9_ch1",
          title: "The French Revolution",
          subject: "history",
          classLevel: "9th",
          topics: [
            {
              id: "topic_placeholder_11",
              title: "Causes of Revolution",
              chapterId: "hist_9_ch1",
              order: 1,
            },
          ],
        },
      ],
      geography: [
        {
          id: "geo_9_ch1",
          title: "India - Size and Location",
          subject: "geography",
          classLevel: "9th",
          topics: [
            {
              id: "topic_placeholder_12",
              title: "Physical Features",
              chapterId: "geo_9_ch1",
              order: 1,
            },
          ],
        },
      ],
    },
    "10th": {
      mathematics: [
        {
          id: "math_10_ch1",
          title: "Real Numbers",
          subject: "mathematics",
          classLevel: "10th",
          topics: [
            {
              id: "topic_placeholder_13",
              title: "Euclid's Division Lemma",
              chapterId: "math_10_ch1",
              order: 1,
            },
            {
              id: "topic_placeholder_14",
              title: "Fundamental Theorem of Arithmetic",
              chapterId: "math_10_ch1",
              order: 2,
            },
          ],
        },
      ],
      science: [
        {
          id: "sci_10_ch1",
          title: "Chemical Reactions and Equations",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_1_1",
              title: "Chemical Equations",
              chapterId: "sci_10_ch1",
              order: 1,
            },
            {
              id: "topic_1_2",
              title: "Types of Chemical Reactions",
              chapterId: "sci_10_ch1",
              order: 2,
            },
            {
              id: "topic_1_3",
              title: "Effects of Oxidation Reactions in Everyday Life",
              chapterId: "sci_10_ch1",
              order: 3,
            },
          ],
        },
        {
          id: "sci_10_ch2",
          title: "Acids, Bases and Salts",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_2_1",
              title: "Understanding the Chemical Properties of Acids and Bases",
              chapterId: "sci_10_ch2",
              order: 1,
            },
            {
              id: "topic_2_2",
              title: "What Do All Acids and All Bases Have in Common?",
              chapterId: "sci_10_ch2",
              order: 2,
            },
            {
              id: "topic_2_3",
              title: "How Strong are Acid or Base Solutions?",
              chapterId: "sci_10_ch2",
              order: 3,
            },
            {
              id: "topic_2_4",
              title: "More About Salts",
              chapterId: "sci_10_ch2",
              order: 4,
            },
            {
              id: "topic_2_5",
              title: "Chemicals from Common Salt",
              chapterId: "sci_10_ch2",
              order: 5,
            },
          ],
        },
        {
          id: "sci_10_ch3",
          title: "Metals and Non-Metals",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_3_1",
              title: "Physical Properties",
              chapterId: "sci_10_ch3",
              order: 1,
            },
            {
              id: "topic_3_2",
              title: "Chemical Properties of Metals",
              chapterId: "sci_10_ch3",
              order: 2,
            },
            {
              id: "topic_3_3",
              title: "How Do Metals and Non-Metals React?",
              chapterId: "sci_10_ch3",
              order: 3,
            },
            {
              id: "topic_3_4",
              title: "Occurrence of Metals",
              chapterId: "sci_10_ch3",
              order: 4,
            },
            {
              id: "topic_3_5",
              title: "Corrosion and Prevention",
              chapterId: "sci_10_ch3",
              order: 5,
            },
          ],
        },
        {
          id: "sci_10_ch4",
          title: "Carbon and Its Compounds",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_4_1",
              title: "Covalent Bonding in Carbon Compounds",
              chapterId: "sci_10_ch4",
              order: 1,
            },
            {
              id: "topic_4_2",
              title: "Versatile Nature of Carbon",
              chapterId: "sci_10_ch4",
              order: 2,
            },
            {
              id: "topic_4_3",
              title: "Chemical Properties of Carbon Compounds",
              chapterId: "sci_10_ch4",
              order: 3,
            },
            {
              id: "topic_4_4",
              title:
                "Some Important Carbon Compounds – Ethanol and Ethanoic Acid",
              chapterId: "sci_10_ch4",
              order: 4,
            },
            {
              id: "topic_4_5",
              title: "Soaps and Detergents",
              chapterId: "sci_10_ch4",
              order: 5,
            },
          ],
        },
        {
          id: "sci_10_ch5",
          title: "Periodic Classification of Elements",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_5_1",
              title: "Making Order Out of Chaos",
              chapterId: "sci_10_ch5",
              order: 1,
            },
            {
              id: "topic_5_2",
              title: "The Modern Periodic Table",
              chapterId: "sci_10_ch5",
              order: 2,
            },
            {
              id: "topic_5_3",
              title: "Trends in the Modern Periodic Table",
              chapterId: "sci_10_ch5",
              order: 3,
            },
          ],
        },
        {
          id: "sci_10_ch6",
          title: "Life Processes",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_6_1",
              title: "What Are Life Processes?",
              chapterId: "sci_10_ch6",
              order: 1,
            },
            {
              id: "topic_6_2",
              title: "Nutrition",
              chapterId: "sci_10_ch6",
              order: 2,
            },
            {
              id: "topic_6_3",
              title: "Respiration",
              chapterId: "sci_10_ch6",
              order: 3,
            },
            {
              id: "topic_6_4",
              title: "Transportation",
              chapterId: "sci_10_ch6",
              order: 4,
            },
            {
              id: "topic_6_5",
              title: "Excretion",
              chapterId: "sci_10_ch6",
              order: 5,
            },
          ],
        },
        {
          id: "sci_10_ch7",
          title: "Control and Coordination",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_7_1",
              title: "Animals – Nervous System",
              chapterId: "sci_10_ch7",
              order: 1,
            },
            {
              id: "topic_7_2",
              title: "Coordination in Plants",
              chapterId: "sci_10_ch7",
              order: 2,
            },
            {
              id: "topic_7_3",
              title: "Hormones in Animals",
              chapterId: "sci_10_ch7",
              order: 3,
            },
          ],
        },
        {
          id: "sci_10_ch8",
          title: "How Do Organisms Reproduce?",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_8_1",
              title: "Do Organisms Create Exact Copies of Themselves?",
              chapterId: "sci_10_ch8",
              order: 1,
            },
            {
              id: "topic_8_2",
              title: "Modes of Reproduction Used by Single Organisms",
              chapterId: "sci_10_ch8",
              order: 2,
            },
            {
              id: "topic_8_3",
              title: "Sexual Reproduction",
              chapterId: "sci_10_ch8",
              order: 3,
            },
            {
              id: "topic_8_4",
              title: "Reproductive Health",
              chapterId: "sci_10_ch8",
              order: 4,
            },
          ],
        },
        {
          id: "sci_10_ch9",
          title: "Heredity and Evolution",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_9_1",
              title: "Accumulation of Variation During Reproduction",
              chapterId: "sci_10_ch9",
              order: 1,
            },
            {
              id: "topic_9_2",
              title: "Heredity",
              chapterId: "sci_10_ch9",
              order: 2,
            },
            {
              id: "topic_9_3",
              title: "Evolution",
              chapterId: "sci_10_ch9",
              order: 3,
            },
          ],
        },
        {
          id: "sci_10_ch10",
          title: "Light – Reflection and Refraction",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_10_1",
              title: "Reflection of Light",
              chapterId: "sci_10_ch10",
              order: 1,
            },
            {
              id: "topic_10_2",
              title: "Spherical Mirrors",
              chapterId: "sci_10_ch10",
              order: 2,
            },
            {
              id: "topic_10_3",
              title: "Refraction of Light",
              chapterId: "sci_10_ch10",
              order: 3,
            },
            {
              id: "topic_10_4",
              title: "Refraction by Spherical Lenses",
              chapterId: "sci_10_ch10",
              order: 4,
            },
            {
              id: "topic_10_5",
              title: "Power of Lens",
              chapterId: "sci_10_ch10",
              order: 5,
            },
          ],
        },
        {
          id: "sci_10_ch11",
          title: "The Human Eye and the Colourful World",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_11_1",
              title: "The Human Eye",
              chapterId: "sci_10_ch11",
              order: 1,
            },
            {
              id: "topic_11_2",
              title: "Defects of Vision and Their Correction",
              chapterId: "sci_10_ch11",
              order: 2,
            },
            {
              id: "topic_11_3",
              title: "Refraction of Light Through a Prism",
              chapterId: "sci_10_ch11",
              order: 3,
            },
            {
              id: "topic_11_4",
              title: "Dispersion of White Light by a Glass Prism",
              chapterId: "sci_10_ch11",
              order: 4,
            },
            {
              id: "topic_11_5",
              title: "Atmospheric Refraction",
              chapterId: "sci_10_ch11",
              order: 5,
            },
            {
              id: "topic_11_6",
              title: "Scattering of Light",
              chapterId: "sci_10_ch11",
              order: 6,
            },
          ],
        },
        {
          id: "sci_10_ch12",
          title: "Electricity",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_12_1",
              title: "Electric Current and Circuit",
              chapterId: "sci_10_ch12",
              order: 1,
            },
            {
              id: "topic_12_2",
              title: "Electric Potential and Potential Difference",
              chapterId: "sci_10_ch12",
              order: 2,
            },
            {
              id: "topic_12_3",
              title: "Circuit Diagram",
              chapterId: "sci_10_ch12",
              order: 3,
            },
            {
              id: "topic_12_4",
              title: "Ohm's Law",
              chapterId: "sci_10_ch12",
              order: 4,
            },
            {
              id: "topic_12_5",
              title: "Resistance of a System of Resistors",
              chapterId: "sci_10_ch12",
              order: 5,
            },
            {
              id: "topic_12_6",
              title: "Heating Effect of Electric Current",
              chapterId: "sci_10_ch12",
              order: 6,
            },
            {
              id: "topic_12_7",
              title: "Electric Power",
              chapterId: "sci_10_ch12",
              order: 7,
            },
          ],
        },
        {
          id: "sci_10_ch13",
          title: "Magnetic Effects of Electric Current",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_13_1",
              title: "Magnetic Field and Field Lines",
              chapterId: "sci_10_ch13",
              order: 1,
            },
            {
              id: "topic_13_2",
              title: "Magnetic Field Due to a Current-Carrying Conductor",
              chapterId: "sci_10_ch13",
              order: 2,
            },
            {
              id: "topic_13_3",
              title:
                "Force on a Current-Carrying Conductor in a Magnetic Field",
              chapterId: "sci_10_ch13",
              order: 3,
            },
            {
              id: "topic_13_4",
              title: "Electric Motor",
              chapterId: "sci_10_ch13",
              order: 4,
            },
            {
              id: "topic_13_5",
              title: "Electromagnetic Induction",
              chapterId: "sci_10_ch13",
              order: 5,
            },
            {
              id: "topic_13_6",
              title: "Electric Generator",
              chapterId: "sci_10_ch13",
              order: 6,
            },
            {
              id: "topic_13_7",
              title: "Domestic Electric Circuits",
              chapterId: "sci_10_ch13",
              order: 7,
            },
          ],
        },
        {
          id: "sci_10_ch14",
          title: "Sources of Energy",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_14_1",
              title: "What is a Good Source of Energy?",
              chapterId: "sci_10_ch14",
              order: 1,
            },
            {
              id: "topic_14_2",
              title: "Conventional Sources of Energy",
              chapterId: "sci_10_ch14",
              order: 2,
            },
            {
              id: "topic_14_3",
              title: "Alternative or Non-Conventional Sources of Energy",
              chapterId: "sci_10_ch14",
              order: 3,
            },
            {
              id: "topic_14_4",
              title: "Environmental Consequences",
              chapterId: "sci_10_ch14",
              order: 4,
            },
          ],
        },
        {
          id: "sci_10_ch15",
          title: "Our Environment",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_15_1",
              title: "Eco-System – What Are Its Components?",
              chapterId: "sci_10_ch15",
              order: 1,
            },
            {
              id: "topic_15_2",
              title: "How Do Our Activities Affect the Environment?",
              chapterId: "sci_10_ch15",
              order: 2,
            },
          ],
        },
        {
          id: "sci_10_ch16",
          title: "Management of Natural Resources",
          subject: "science",
          classLevel: "10th",
          topics: [
            {
              id: "topic_16_1",
              title: "Why Do We Need to Manage Our Resources?",
              chapterId: "sci_10_ch16",
              order: 1,
            },
            {
              id: "topic_16_2",
              title: "Forests and Wildlife",
              chapterId: "sci_10_ch16",
              order: 2,
            },
            {
              id: "topic_16_3",
              title: "Water for All",
              chapterId: "sci_10_ch16",
              order: 3,
            },
            {
              id: "topic_16_4",
              title: "Coal and Petroleum",
              chapterId: "sci_10_ch16",
              order: 4,
            },
          ],
        },
      ],
      english: [
        {
          id: "eng_10_ch1",
          title: "A Letter to God",
          subject: "english",
          classLevel: "10th",
          topics: [
            {
              id: "topic_eng_10_1",
              title: "Character Study",
              chapterId: "eng_10_ch1",
              order: 1,
            },
            {
              id: "topic_eng_10_2",
              title: "Theme Analysis",
              chapterId: "eng_10_ch1",
              order: 2,
            },
          ],
        },
      ],
      history: [
        {
          id: "hist_10_ch1",
          title: "The Rise of Nationalism in Europe",
          subject: "history",
          classLevel: "10th",
          topics: [
            {
              id: "topic_hist_10_1",
              title: "French Revolution Impact",
              chapterId: "hist_10_ch1",
              order: 1,
            },
            {
              id: "topic_hist_10_2",
              title: "Making of Nationalism",
              chapterId: "hist_10_ch1",
              order: 2,
            },
          ],
        },
      ],
      geography: [
        {
          id: "geo_10_ch1",
          title: "Resources and Development",
          subject: "geography",
          classLevel: "10th",
          topics: [
            {
              id: "topic_geo_10_1",
              title: "Resource Planning",
              chapterId: "geo_10_ch1",
              order: 1,
            },
            {
              id: "topic_geo_10_2",
              title: "Land Resources",
              chapterId: "geo_10_ch1",
              order: 2,
            },
          ],
        },
      ],
    },
  },
};
