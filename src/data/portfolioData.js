/**
 * @portfolioData.js
 * Centralized data source for the portfolio of Katreddy Lakshmi Kameswari.
 * You can edit all personal information, skills, projects, experience, education,
 * links, and assets here without touching the presentation components.
 */

export const portfolioData = {
  // ==========================================================================
  // 1. PERSONAL INFORMATION
  // ==========================================================================
  personal: {
    fullName: "Katreddy Lakshmi Kameswari",
    firstName: "Katreddy",
    lastName: "Lakshmi Kameswari",
    initials: "LK",
    role: "Aspiring AI & ML Engineer · Web Developer",
    degree: "B.Tech CSE (AI & ML)",
    batch: "2023–2027",
    cgpa: "9.0",
    location: "Guntur, Andhra Pradesh, India",
    primaryFocus: "Artificial Intelligence, Machine Learning, Python, Web Development",
    heroHeadingPrefix: "Katreddy",
    heroHeadingGradient: "Lakshmi Kameswari.",
    heroDescription:
      "B.Tech CSE (AI & ML) student focused on intelligent systems, responsive web experiences, practical problem solving, and continuous learning.",
    profileImage: "/assets/profile.jpg",
    resumeUrl: "/assets/resume.pdf",
    statusBadge: "Available for Internships & Projects",
  },

  // ==========================================================================
  // 2. CONTACT & SOCIAL CHANNELS
  // ==========================================================================
  contact: {
    email: "lakshmikameswari04@gmail.com",
    linkedIn: "https://www.linkedin.com/in/lakshmi-kameswariii-929166370",
    gitHub: "https://github.com/Lakshmi-Kameswari",
    location: "Guntur, Andhra Pradesh, India",
    heading: "Let's create something meaningful.",
    subheading:
      "Open to internships, student opportunities, project collaborations, and conversations around AI/ML and web development.",
  },

  // ==========================================================================
  // 3. FLOATING BADGES (Hero Section Portrait Orbit)
  // ==========================================================================
  heroFloatingCards: [
    { label: "Core Focus", value: "Artificial Intelligence", position: "top-left" },
    { label: "Frontend", value: "HTML · CSS · JavaScript", position: "top-right" },
    { label: "Data", value: "Python · SQL", position: "middle-left" },
    { label: "Collaboration", value: "Git & GitHub", position: "middle-right" },
    { label: "Current Goal", value: "Build · Learn · Grow", position: "bottom-left" },
    { label: "Design Style", value: "Clean · Modern · Human", position: "bottom-right" },
  ],

  // ==========================================================================
  // 4. ABOUT SECTION (Bento Grid)
  // ==========================================================================
  about: {
    tag: "About Me",
    heading: "Classic clarity. Modern energy.",
    lead: "I enjoy turning ideas into useful digital products — from clean interfaces and responsive websites to AI/ML concepts that solve real-world problems.",
    quote:
      "I want to keep learning, keep building, and create technology that feels useful, thoughtful, and beautifully engineered.",
    pillars: [
      {
        title: "Profile",
        text: "Engineering with creativity and purpose.",
        icon: "sparkle",
      },
      {
        title: "Strength",
        text: "Consistent learner.",
        icon: "zap",
      },
      {
        title: "Objective",
        text: "Grow through practical work.",
        icon: "target",
      },
      {
        title: "Location",
        text: "Guntur, Andhra Pradesh, India",
        icon: "mapPin",
      },
    ],
    stats: [
      { value: "9.0", label: "Academic CGPA", highlight: true },
      { value: "2027", label: "Graduation Batch" },
      { value: "6+", label: "Completed Projects" },
    ],
  },

  // ==========================================================================
  // 5. TECHNICAL SKILLS
  // ==========================================================================
  skills: [
    {
      name: "Python",
      level: 90,
      category: "Programming & AI",
      description: "Data manipulation, scripting, algorithms, and application logic",
    },
    {
      name: "HTML & CSS",
      level: 95,
      category: "Frontend Development",
      description: "Semantic architecture, responsive layouts, modern CSS systems",
    },
    {
      name: "JavaScript",
      level: 85,
      category: "Frontend Development",
      description: "Interactive DOM scripting, async utilities, modular UI logic",
    },
    {
      name: "Machine Learning",
      level: 80,
      category: "AI & ML",
      description: "Supervised models, data evaluation, model training fundamentals",
    },
    {
      name: "SQL",
      level: 75,
      category: "Database & Backend",
      description: "Relational queries, database structuring, data aggregation",
    },
    {
      name: "Git & GitHub",
      level: 78,
      category: "Version Control",
      description: "Repository workflows, branch management, collaborative versioning",
    },
  ],

  // ==========================================================================
  // 6. EXPERIENCE TIMELINE
  // ==========================================================================
  experience: [
    {
      id: "exp-01",
      number: "01",
      date: "Feb 2026 – Mar 2026",
      type: "Virtual Internship",
      role: "Web Development Virtual Intern",
      organization: "Oasis Infobyte",
      description:
        "Developed responsive web projects using HTML, CSS, and JavaScript; designed user-friendly interfaces and strengthened frontend development and problem-solving skills.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      isCurrent: false,
    },
    {
      id: "exp-02",
      number: "02",
      date: "Future / In Progress",
      type: "Internship / Research / Project",
      role: "AI & ML / Web Engineering Contributor",
      organization: "Next Opportunity (Editable in portfolioData.js)",
      description:
        "Open for upcoming Summer/Fall internships or research fellowships. Ready to contribute with Python, Machine Learning models, and modern web application development.",
      tags: ["Machine Learning", "Python", "Deep Learning", "Web Applications"],
      isPlaceholder: true,
      isCurrent: true,
    },
  ],

  // ==========================================================================
  // 7. FEATURED PROJECTS
  // ==========================================================================
  projects: [
    {
      id: "proj-01",
      number: "01",
      category: "Networking & Python",
      title: "Chat Application (Client–Server)",
      description:
        "A real-time text-based chat application built using Python socket programming and Tkinter GUI. It allows multiple users to communicate in real-time using a client-server architecture.",
      features: [
        "Real-time multi-client text exchange",
        "TCP socket-based client-server networking",
        "Clean Tkinter graphical user interface",
      ],
      technologies: ["Python", "Socket Programming", "Tkinter", "Threading"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/chat-application.py",
      liveUrl: null,
      gradient: "from-pink-500/20 to-purple-500/10",
    },
    {
      id: "proj-02",
      number: "02",
      category: "Desktop GUI & Health",
      title: "BMI Calculator (GUI)",
      description:
        "A professional GUI-based BMI calculator built using Tkinter. Calculates Body Mass Index and provides corresponding health categories with instant visual feedback.",
      features: [
        "Body Mass Index calculation engine",
        "WHO category classification (Underweight, Normal, Overweight)",
        "Input validation with instant error handling and reset",
      ],
      technologies: ["Python", "Tkinter", "GUI Development"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/bmi-calculator-gui",
      liveUrl: null,
      gradient: "from-purple-500/20 to-rose-500/10",
    },
    {
      id: "proj-03",
      number: "03",
      category: "Security & Tooling",
      title: "Password Generator (GUI)",
      description:
        "A customizable password generator allowing users to adjust length and complexity rules to generate cryptographically safe passphrases with single-click clipboard copy.",
      features: [
        "Customizable character sets (symbols, uppercase, numbers)",
        "Variable length slider and entropy verification",
        "Single-click copy to system clipboard",
      ],
      technologies: ["Python", "Tkinter", "Cybersecurity Basics"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/password-generator-gui",
      liveUrl: null,
      gradient: "from-rose-500/20 to-pink-500/10",
    },
    {
      id: "proj-04",
      number: "04",
      category: "Web Development",
      title: "Landing Page Development",
      description:
        "A responsive and visually engaging landing page focused on clean layout, modern styling, smooth transitions, and seamless user experience across all device viewports.",
      features: [
        "Fluid responsive layout with modern CSS Grid",
        "Engaging call-to-action sections and typography",
        "Lightweight vanilla architecture for instant load speeds",
      ],
      technologies: ["HTML5", "CSS3", "Responsive UI"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
      liveUrl:
        "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
      gradient: "from-pink-500/20 to-indigo-500/10",
    },
    {
      id: "proj-05",
      number: "05",
      category: "Interactive Portfolio",
      title: "Personal Portfolio Website",
      description:
        "A stylish interactive portfolio demonstrating skills, projects, and education with custom animations, responsive layout, and smooth navigation.",
      features: [
        "Interactive section navigation and scroll tracking",
        "Project showcase and skill visualization",
        "Clean dark aesthetic with polished transitions",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
      liveUrl:
        "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
      gradient: "from-violet-500/20 to-pink-500/10",
    },
    {
      id: "proj-06",
      number: "06",
      category: "Web Utility",
      title: "Temperature Converter",
      description:
        "An intuitive web utility using JavaScript logic to convert values between Celsius, Fahrenheit, and Kelvin in real time with bi-directional formula evaluation.",
      features: [
        "Instant multi-scale temperature calculation",
        "Bi-directional unit transformation logic",
        "Accessible, clear numerical display",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl:
        "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
      liveUrl:
        "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
      gradient: "from-pink-500/20 to-rose-500/10",
    },
  ],

  // ==========================================================================
  // 8. EDUCATION
  // ==========================================================================
  education: [
    {
      period: "2023 – 2027",
      degree: "B.Tech — CSE (AI & ML)",
      institution: "Kallam Haranadhareddy Institute of Technology",
      score: "CGPA: 9.0",
      description:
        "Specializing in Artificial Intelligence and Machine Learning, with strong coursework in Data Structures, Algorithms, Python, Database Systems, and Intelligent Software Engineering.",
      highlight: true,
    },
    {
      period: "2021 – 2023",
      degree: "Intermediate Education (MPC)",
      institution: "Abhyudaya Mahila Junior College",
      score: "CGPA: 9.2",
      description:
        "Completed higher secondary education in Mathematics, Physics, and Chemistry with academic distinction.",
      highlight: false,
    },
    {
      period: "2020 – 2021",
      degree: "Secondary Education (SSC)",
      institution: "Jain High School",
      score: "CGPA: 10.0",
      description:
        "Achieved a perfect 10.0 grade point average with outstanding performance across science and analytical disciplines.",
      highlight: false,
    },
    {
      period: "Continuous Focus",
      degree: "Career Focus: AI & ML + Web",
      institution: "Self-Driven & Applied Learning",
      score: "Practical Mastery",
      description:
        "Building practical skills through coursework, internships, personal open-source projects, and continuous hands-on experimentation.",
      highlight: false,
    },
  ],

  // ==========================================================================
  // 9. NAVIGATION LINKS
  // ==========================================================================
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};
