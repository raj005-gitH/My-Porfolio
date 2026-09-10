// src/portfolioData.js

export const portfolioData = {
  personalInfo: {
    name: "Jayraj Singh",
    title: "Aspiring Software Engineer | Full-Stack Developer",
    subTitle:
      "I build scalable web and android applications, solve complex problems with Java, and explore AI-powered products.",
    email: "jayrajmthakur@gmail.com",
    github: "https://github.com/raj005-gitH", // Modify to your github
    linkedin: "https://www.linkedin.com/in/jayrajsinght", // Modify to your linkedin
    resumeUrl:
      "https://drive.google.com/file/d/1mtGimgnDRADfsenhZGTyURYlePVYuF2O/view?usp=sharing", // Add your resume link here (e.g., Google Drive link or static PDF path)
    leetcode: "https://leetcode.com/u/raj005-leetC", // Modify to your leetcode profile
    dsaRepo: "https://github.com/rajthakur/DSA-Practice", // Modify to your DSA repository
  },
  about: {
    description:
      "I’m a Computer Science student focused on software engineering, full-stack development, and problem solving. I enjoy turning ideas into real products, building backend systems, working with modern web technologies, and continuously improving my DSA and system design skills.",
    primaryTechnologies: [
      "Java",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "React Native",
      "Operating System",
      "DBMS",
      "System Design",
      "Computer Networks",
      "OOP",
      "Data Structures and Algorithms",
    ],
  },
  skills: {
    categories: [
      {
        title: "Languages",
        items: ["Java", "JavaScript", "Python", "Cpp"],
      },
      {
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs"],
      },
      {
        title: "Databases",
        items: ["MongoDB", "MySQL"],
      },
      {
        title: "Tools & Platforms",
        items: ["Git", "GitHub", "VS Code", "Postman"],
      },
      {
        title: "Currently Exploring",
        items: ["System Architecture", "AI / LLM applications", "RAG"],
      },
    ],
  },
  projects: [
    {
      id: "hukoom",
      name: "Hukoom",
      type: "Featured Project",
      description:
        "A platform designed to connect users with verified nearby service providers, making it easier to discover, request, and book everyday services.",
      techStack: [
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
      highlights: [
        "User and service-provider workflows",
        "Secure user authentication & authorization",
        "Location-based service discovery",
        "Interactive end-to-end booking flow",
        "Robust REST API integration",
        "Companion mobile application build",
        "Scalable backend deployment structure",
      ],
      image: "/hukoom.png",
      githubUrl: "https://github.com/raj005-gitH/Hukoom-Web", // Replace with your repository
      liveUrl: "https://hukoomweb.vercel.app/", // Replace with your live deployment URL
      caseStudyUrl: "#", // Replace or remove if not applicable
      imagePlaceholder: "Hukoom Platform Architecture", // Label for image placeholder
    },
    {
      id: "avoa",
      name: "Avoa - Find Your Next Stay",
      type: "Full-Stack Project",
      description:
        "A full-stack accommodation platform inspired by modern property-booking applications.",
      techStack: [
        "MERN Stack",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Cloudinary",
      ],
      highlights: [
        "Multi-role user authentication",
        "Complete CRUD operations for property listings",
        "Interactive review and rating system",
        "Optimized image uploads & storage using Cloudinary",
        "Responsive, modern property dashboard UI",
        "Production deployment and testing configurations",
      ],
      image: "/Avoa.png",
      githubUrl: "https://github.com/raj005-gitH/Avoa", // Replace with your repository
      liveUrl: "https://avoa-find-your-next-stay.onrender.com/listings", // Replace with your live deployment URL
      caseStudyUrl: "#",
      imagePlaceholder: "Avoa Property Dashboard",
    },
    {
      id: "ascend",
      name: "Ascend AI",
      type: "AI/ML Project",
      description: "Ascend is a AI-guide that helps user to be more productive",
      techStack: [
        "MERN Stack",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Cloudinary",
      ],
      highlights: [
        "A perosnalised AI Agent",
        "With every use Ascend learns more about user",
        "Responsive, modern property dashboard UI",
        "Production deployment and testing configurations",
      ],
      image: "",
      githubUrl: "", // Replace with your repository
      liveUrl: "",
      caseStudyUrl: "#",
      imagePlaceholder: "Ascend Property Dashboard",
    },
    {
      id: "hukoomandroid",
      name: "Hukoom Mobile",
      type: "",
      description: "Ascend is a AI-guide that helps user to be more productive",
      techStack: [
        "MERN Stack",
        "MongoDB",
        "Express",
        "React Native",
        "Node.js",
      ],
      highlights: [
        "Responsive, modern property dashboard UI",
        "Production deployment and testing configurations",
      ],
      image: "",
      githubUrl: "", // Replace with your repository
      liveUrl: "",
      caseStudyUrl: "#",
      imagePlaceholder: "Hukoom Property Dashboard",
    },
    {
      id: "voiceflow-ai",
      name: "Voiceflow AI",
      type: "AI Project",
      description:
        "An intelligent voice-driven task manager and journal designed to understand natural-language requests, manage tasks, provide suggestions, and interact with users through an AI assistant.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI APIs",
        "Voice Tech",
      ],
      image: "",
      highlights: [
        "Advanced conversational AI assistant",
        "Voice interaction and speech-to-text recognition",
        "Natural-language parsing for task management",
        "Intelligent productivity and scheduling suggestions",
        "Unified secure task and journal manager dashboard",
      ],
      githubUrl: "https://github.com/raj005-gitH/Voiceflow-AI", // Replace with your repository
      liveUrl: "#", // Replace with your live deployment URL
      caseStudyUrl: "#",
      imagePlaceholder: "Voiceflow AI Interface",
    },
    {
      id: "tradeblitz",
      name: "TradeBlitz",
      type: "Financial Application",
      description:
        "A stock-trading platform inspired by modern brokerage applications, built to practice full-stack architecture and financial application workflows.",
      techStack: [
        "MERN Stack",
        "REST APIs",
        "React",
        "Express",
        "Node.js",
        "MongoDB",
      ],
      highlights: [
        "Dynamic, responsive dashboard UI displaying market charts",
        "Simulated trading-related order placement workflows",
        "Robust REST APIs for order and portfolio handling",
        "Secure database integration and schema design",
        "Intuitive state management for real-time visual updates",
      ],
      image: "/TradeBlitz.png",
      githubUrl: "https://github.com/raj005-gitH/TradeBlitz", // Replace with your repository
      liveUrl: "#", // Replace with your live deployment URL
      caseStudyUrl: "#",
      imagePlaceholder: "TradeBlitz Mock Trading Dashboard",
    },
  ],
  dsa: {
    title: "Problem Solving",
    content:
      "I use Java as my primary language for Data Structures and Algorithms and regularly practice coding problems to strengthen algorithmic thinking.",
    topics: [
      "Arrays",
      "Strings",
      "Hashing",
      "Two Pointers",
      "Sliding Window",
      "Binary Search",
      "Sorting",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Stack / Queue",
    ],
    // Statistics are configurable in one place here
    stats: [
      { label: "Problems Solved", value: "250+" },
      { label: "LeetCode Contest Rating", value: "700+" }, // Editable stats
      { label: "Coding Accuracy", value: "85%" },
    ],
  },
  experience: {
    title: "Project Leadership",
    items: [
      {
        title: "Final Year Project — Hukoom",
        role: "Team Lead / Developer",
        duration: "2025 - 2026",
        highlights: [
          "Led development of the project with a cross-functional team, planning sprints and task distribution.",
          "Worked across frontend (React), backend (Node/Express), and mobile (React Native) development.",
          "Integrated core APIs, location-based services, and established MongoDB database schemas.",
          "Managed GitHub collaboration, code reviews, branches, and conflict resolution.",
          "Oversaw testing phases and production deployments.",
        ],
      },
    ],
  },
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Dr APJ Abdul Kalam Technical University",
    graduationYear: "2027", // Easy to edit
    cgpa: "7.42 / 10", // Easy to edit
  },
  achievements: [
    {
      title: "LeetCode Badges",
      description:
        "Earned 365- Days Badge and solved over 250+ DSA problems in Java.",
    },
    {
      title: "Smart India Hackathon",
      description:
        "Participated and contributed to building a prototype solution for service discovery.",
    },
    {
      title: "Google Cloud Skill Badges",
      description:
        "Completed labs on cloud fundamentals, IAM, and VM configurations.",
    },
  ],
};
