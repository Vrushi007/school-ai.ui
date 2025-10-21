export const SESSION_PLAN_MOCK_RESPONSE = {
  success: true,
  data: {
    lesson_plan: [
      {
        sessionNumber: 1,
        title: "Introduction to Light and Reflection",
        summary:
          "This session will introduce students to the fundamental properties of light, including its nature and behavior. Students will learn about reflection, how light interacts with reflective surfaces, and the laws of reflection.",
        duration: "40 minutes",
        objectives: [
          "Understand the nature of light and its dual characteristics.",
          "Define reflection and state the laws of reflection.",
          "Identify various reflective surfaces and their applications.",
          "Conduct a simple experiment to observe reflection.",
        ],
      },
      {
        sessionNumber: 2,
        title: "Concave and Convex Mirrors",
        summary:
          "Students will explore concave and convex mirrors in this session, focusing on their properties and image formation. The session will include discussions on real and virtual images and practical applications in everyday life.",
        duration: "40 minutes",
        objectives: [
          "Differentiate between concave and convex mirrors.",
          "Describe the formation of images by concave and convex mirrors.",
          "Discuss the applications of mirrors in various fields.",
          "Perform experiments to visualize image formation.",
        ],
      },
      {
        sessionNumber: 3,
        title: "Refraction: The Bending of Light",
        summary:
          "This session will cover the phenomenon of refraction, including the definition, laws of refraction, and factors affecting it. Students will investigate how light bends when it passes through different mediums.",
        duration: "40 minutes",
        objectives: [
          "Define refraction and its significance in daily life.",
          "Explain the laws of refraction and Snell's law.",
          "Identify factors affecting the angle of refraction.",
          "Conduct a practical activity demonstrating the refraction of light.",
        ],
      },
      {
        sessionNumber: 4,
        title: "Lenses: Types and Applications",
        summary:
          "In this session, students will learn about different types of lenses, including converging and diverging lenses. The focus will be on understanding lens formation and its applications in instruments like glasses and magnifying glasses.",
        duration: "40 minutes",
        objectives: [
          "Differentiate between convex and concave lenses.",
          "Describe image formation by lenses using ray diagrams.",
          "Discuss practical uses of lenses in everyday life.",
          "Perform experiments with lenses to observe image properties.",
        ],
      },
      {
        sessionNumber: 5,
        title: "Total Internal Reflection and Applications",
        summary:
          "The final session will cover total internal reflection, its conditions, and its applications, including fiber optics and optical instruments. Students will engage in exploring real-world applications of the concepts learned.",
        duration: "40 minutes",
        objectives: [
          "Define total internal reflection and describe its conditions.",
          "Explain the concept of critical angle.",
          "Discuss the applications of total internal reflection in technology.",
          "Conduct activities demonstrating total internal reflection.",
        ],
      },
    ],
  },
  message: "Lesson plan generated successfully",
  error: null,
};

export const DETAILED_SESSION_CONTENT_MOCK_RESPONSE = {
  success: true,
  data: {
    session_content: {
      sessionTitle: "Introduction to Light: Nature and Properties",
      duration: "40 minutes",
      introduction: {
        hook: "Ask students to close their eyes and envision a world without light. What do they feel? How does it impact their daily lives?",
        overview:
          "In today's session, we will explore the fundamental properties and behavior of light. We will cover its speed, the electromagnetic spectrum, and discuss how light influences our everyday life.",
        previousConnection:
          "Last class, we learned about the nature of waves. Today, we will dive deeper into understanding light as a wave.",
      },
      mainContent: {
        keyConcepts: [
          "Definition of light",
          "Speed of light (c = 3 x 10^8 m/s)",
          "Electromagnetic spectrum",
        ],
        teachingSequence: [
          "Introduce the definition of light and its significance in our universe.",
          "Explain the speed of light and its implications in various scenarios.",
          "Introduce the electromagnetic spectrum and identify its different parts.",
        ],
        formulas: [
          "c = λν (where c = speed of light, λ = wavelength, ν = frequency)",
        ],
        examples: [
          "How light travels from the sun to the Earth in 8 minutes.",
          "Identifying different uses of light in technology, such as fiber optics.",
        ],
      },
      activities: {
        interactive: [
          "Show a short video on the behavior of light.",
          "Conduct a quick class discussion on how light affects our vision and surroundings.",
        ],
        practiceProblems: [
          "Calculate the frequency of a light wave with a wavelength of 500 nm.",
          "If a light wave travels through a medium at 2 x 10^8 m/s, what is its wavelength if the frequency is 5 x 10^14 Hz?",
        ],
        groupWork:
          "Divide the class into small groups to create posters illustrating parts of the electromagnetic spectrum and their applications.",
        experiments: [
          "Use a prism to demonstrate the dispersion of light into different colors.",
          "Simple shadow formation activity using a flashlight and objects.",
        ],
      },
      assessment: {
        quickQuestions: [
          "What is the speed of light?",
          "Name two regions of the electromagnetic spectrum.",
          "How does light affect everyday activities?",
        ],
        exitTicket:
          "Write down one new thing you learned about light today and one question you still have.",
        homework:
          "Research an application of light in technology and prepare a short presentation for class.",
      },
      resources: {
        materials: [
          "Prism",
          "Flashlight",
          "Whiteboard and markers",
          "Video clips about light",
        ],
        references: [
          "NCERT Science Textbook for Class 10 - Chapter on Light",
          "Physics Lab Manual",
        ],
        additionalReading: [
          "A Brief History of Light by John H. W. R. Coverdale",
          "The Nature of Light by Chris Frith",
        ],
      },
      differentiation: {
        strugglingLearners:
          "Provide additional visuals and simplified terms to help clarify concepts. Pair them with stronger students for group activities.",
        advancedStudents:
          "Encourage them to explore advanced concepts such as the speed of light in different mediums and its implications in quantum physics.",
        multipleStyles:
          "Incorporate visual aids, hands-on activities, and group discussions to cater to different learning styles.",
      },
    },
  },
  message: "Session content generated successfully",
  error: null,
};

export const GENERATED_QUESTIONS_MOCK_RESPONSE = {
  success: true,
  data: {
    questions: {
      questions: [
        {
          id: 1,
          questionText:
            "Which of the following statements is true about the law of reflection?",
          questionType: "MCQ",
          difficultyLevel: "Easy",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: [
            "Angle of incidence is equal to angle of refraction",
            "Angle of incidence is equal to angle of reflection",
            "Light travels faster in denser mediums",
            "All of the above",
          ],
          correctAnswer: "B",
          explanation:
            "According to the law of reflection, the angle of incidence is always equal to the angle of reflection.",
        },
        {
          id: 2,
          questionText:
            "What happens to light when it travels from air into water?",
          questionType: "MCQ",
          difficultyLevel: "Easy",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: [
            "It speeds up",
            "It slows down",
            "It changes direction",
            "Both B and C",
          ],
          correctAnswer: "D",
          explanation:
            "Light slows down and bends when it enters a denser medium like water.",
        },
        {
          id: 3,
          questionText:
            "Which type of lens is thicker at the center than at the edges?",
          questionType: "MCQ",
          difficultyLevel: "Easy",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: [
            "Concave lens",
            "Convex lens",
            "Biconvex lens",
            "Both B and C",
          ],
          correctAnswer: "D",
          explanation:
            "Convex lenses are thicker at the center than at the edges and converge light rays.",
        },
        {
          id: 4,
          questionText: "What is the focal length of a concave lens?",
          questionType: "MCQ",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: ["Positive", "Negative", "Zero", "Depends on the material"],
          correctAnswer: "B",
          explanation:
            "The focal length of a concave lens is negative because it diverges light rays.",
        },
        {
          id: 5,
          questionText: "The refractive index of a medium can be defined as:",
          questionType: "MCQ",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: [
            "Speed of light in vacuum divided by speed of light in the medium",
            "Speed of light in the medium divided by speed of light in vacuum",
            "Angle of incidence divided by angle of refraction",
            "None of the above",
          ],
          correctAnswer: "A",
          explanation:
            "The refractive index is defined as the speed of light in vacuum divided by the speed of light in the medium.",
        },
        {
          id: 6,
          questionText:
            "If a ray of light strikes a plane mirror at an angle of 30° to the normal, what is the angle of reflection?",
          questionType: "MCQ",
          difficultyLevel: "Hard",
          chapterReference: "Light – Reflection and Refraction",
          marks: 1,
          options: ["30°", "60°", "90°", "120°"],
          correctAnswer: "A",
          explanation:
            "According to the law of reflection, the angle of incidence equals the angle of reflection.",
        },
        {
          id: 7,
          questionText:
            "Explain the phenomenon of total internal reflection with an example.",
          questionType: "Short Answer",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 3,
          correctAnswer:
            "Total internal reflection occurs when light travels from a denser medium to a rarer medium and the angle of incidence exceeds the critical angle. An example is the use of optical fibers for communication, where light signals are transmitted through total internal reflection.",
          explanation:
            "This explains how and when total internal reflection occurs, along with a practical application.",
        },
        {
          id: 8,
          questionText:
            "Define critical angle and explain its significance in optics.",
          questionType: "Short Answer",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 3,
          correctAnswer:
            "The critical angle is the angle of incidence above which total internal reflection occurs when light travels from a denser medium to a rarer medium. Its significance lies in applications like fiber optics and prisms where efficient light transmission is critical.",
          explanation:
            "This answers the definition and importance of the critical angle.",
        },
        {
          id: 9,
          questionText:
            "What is the speed of light in a medium if its refractive index is 1.5? Assume the speed of light in vacuum is 3 × 10^8 m/s.",
          questionType: "Short Answer",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 3,
          correctAnswer:
            "Speed of light in the medium = Speed of light in vacuum / Refractive index = (3 × 10^8 m/s) / 1.5 = 2 × 10^8 m/s.",
          explanation:
            "This uses the formula for calculating speed of light in a medium based on its refractive index.",
        },
        {
          id: 10,
          questionText:
            "Describe how a convex lens forms an image of an object placed at different positions relative to its focal point.",
          questionType: "Long Answer",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 4,
          correctAnswer:
            "When an object is placed beyond the 2F point of a convex lens, the image formed is real, inverted, and smaller. At the 2F position, the image is real, inverted, and of the same size. Between F and 2F, the image is real, inverted, and larger. If the object is at the focus F, the image is formed at infinity. If the object is at the optical center, the image is the same size and upright.",
          explanation:
            "This provides a comprehensive understanding of image formation by convex lenses.",
        },
        {
          id: 11,
          questionText:
            "Explain the working of a simple microscope and derive its magnification formula.",
          questionType: "Long Answer",
          difficultyLevel: "Hard",
          chapterReference: "Light – Reflection and Refraction",
          marks: 4,
          correctAnswer:
            "A simple microscope uses a converging lens to magnify small objects. The formula for magnification (M) is M = v/u, where v is the image distance and u is the object distance. The closer the object is to the lens, the greater the magnification.",
          explanation:
            "This explains the working and derivation of magnification in a clear manner.",
        },
        {
          id: 12,
          questionText:
            "What is the difference between real and virtual images? Provide examples of each type of image.",
          questionType: "Long Answer",
          difficultyLevel: "Medium",
          chapterReference: "Light – Reflection and Refraction",
          marks: 4,
          correctAnswer:
            "Real images are formed when light rays converge and can be projected on a screen, like in a cinema projector. Virtual images are formed when light rays appear to diverge from a point and can’t be projected, like in a plane mirror. The key difference lies in the nature of light rays and how images are formed.",
          explanation:
            "This compares real and virtual images with examples, providing a clear distinction.",
        },
        {
          id: 13,
          questionText:
            "Illustrate the path of light through a glass prism and explain the phenomenon of dispersion.",
          questionType: "Long Answer",
          difficultyLevel: "Hard",
          chapterReference: "Light – Reflection and Refraction",
          marks: 4,
          correctAnswer:
            "When light enters a glass prism, it bends towards the base due to refraction. Different colors have different wavelengths, bending at different angles, leading to dispersion. A spectrum of colors (VIBGYOR) is formed, illustrating the separation of white light into its constituent colors.",
          explanation:
            "This shows the path of light through a prism and explains dispersion in detail.",
        },
        {
          id: 14,
          questionText:
            "Describe the process of refraction with a diagram and its applications in real life.",
          questionType: "Application",
          difficultyLevel: "Hard",
          chapterReference: "Light – Reflection and Refraction",
          marks: 3,
          correctAnswer:
            "Refraction is the bending of light as it passes from one medium to another, illustrated with a diagram showing light entering from air to glass. Applications include lenses in glasses, cameras, and microscopes, enhancing vision and technology.",
          explanation:
            "This explains refraction and its real-life applications with a diagram.",
        },
        {
          id: 15,
          questionText:
            "Discuss how the understanding of light and its behavior has influenced technological advancements.",
          questionType: "Application",
          difficultyLevel: "Hard",
          chapterReference: "Light – Reflection and Refraction",
          marks: 4,
          correctAnswer:
            "Understanding light behavior has led to innovations like lasers in medicine, optical fibers in communication, and lenses in cameras. These advancements show the practical application of optical principles.",
          explanation:
            "This discusses light's influence on technology thoroughly.",
        },
      ],
      metadata: {
        totalQuestions: 15,
        questionTypeBreakdown: {
          MCQ: 6,
          "Short Answer": 5,
          "Long Answer": 4,
          Application: 2,
        },
        difficultyBreakdown: {
          Easy: 3,
          Medium: 6,
          Hard: 6,
        },
        chapterBreakdown: {
          "Light – Reflection and Refraction": 15,
        },
        totalMarks: 30,
      },
    },
  },
  message: "Questions generated successfully",
  error: null,
};
