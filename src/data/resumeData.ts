export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  type: 'data-analyst' | 'software-developer' | 'both';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'data-analyst' | 'software-developer' | 'both';
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'data' | 'tools' | 'frameworks';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
}

export interface Certification {
  name: string;
  provider: string;
  duration?: string;
  type: 'data-analyst' | 'software-developer' | 'both';
}

export const personalInfo = {
  name: "Gautam Das",
  phone: "8618633870",
  email: "gdas5262@gmail.com",
  location: "Belagavi, Karnataka, India",
  linkedin: "https://www.linkedin.com/in/gautam-das-10ba971b8/",
  github: "https://github.com/gautam-s-das",
  hackerrank: "https://www.hackerrank.com/profile/gdas5262"
};

export const professionalSummaries = {
  dataAnalyst: "MCA graduate with a focus on data analytics who is analytical and meticulous. Adept at using Python, SQL, and Power BI to turn unprocessed data into insights that can be put to use. Competent in database administration, dashboard design, and using statistical methods to address practical issues. Strong team player who is passionate about learning and using contemporary tools to produce significant business solutions.",
  softwareDeveloper: "Meticulous and enthusiastic Software Developer with a Master's degree in Computer Applications and experience in full-stack web development. Strong background in Java, Python, React, and cutting-edge database technology. Proven track record of designing and developing scalable applications, solving intricate issues, and learning new technologies and tools. Enthusiastic to join innovative development initiatives in a dynamic team setting."
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Data Analyst Intern",
    company: "Teachnook Careers",
    duration: "2 Months",
    description: [
      "Built interactive dashboards using Tableau and Power BI to present business insights",
      "Automated data cleaning workflows with Python, reducing preparation time by 30%",
      "Conducted exploratory data analysis (EDA) on real-world datasets for decision support"
    ],
    type: "data-analyst"
  },
  {
    id: "2",
    title: "Full Stack Developer Intern",
    company: "Xcel Corp",
    duration: "1 Month",
    description: [
      "Developed and maintained backend APIs using Django & MySQL",
      "Collaborated in an Agile team, supporting deployments and feature testing",
      "Assisted in database schema design and query optimization for web applications"
    ],
    type: "software-developer"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Movie Recommendation System using ML",
    description: "Built a movie recommendation system where movies are searched by user preferences. It is a content-based recommendation system.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/gautam-s-das",
    type: "data-analyst"
  },
  {
    id: "2",
    title: "TextUtils - Text Processing App",
    description: "Developed a single-page app for text analysis and formatting, deployed on GitHub Pages. Features real-time text transformations such as word/character count and case conversions.",
    technologies: ["React.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/gautam-s-das",
    type: "both"
  },
  {
    id: "3",
    title: "Responsive To-Do List App",
    description: "Developed an interactive task management web app with real-time DOM manipulation for task creation, editing, and deletion.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    githubUrl: "https://github.com/gautam-s-das",
    type: "software-developer"
  },
  {
    id: "4",
    title: "NFC-Based Student Attendance System",
    description: "Engineered a contact-less attendance system using NFC technology, enabling efficient data capture and storage for student attendance.",
    technologies: ["PHP", "MySQL", "NFC Technology", "Database Design"],
    type: "software-developer"
  },
  {
    id: "5",
    title: "Single Page Movie Info Application",
    description: "Implemented a React-based app using the TMDb API for live movie data retrieval, integrated responsive design and dynamic search functionality.",
    technologies: ["React.js", "API Integration", "TMDb API", "Responsive Design"],
    githubUrl: "https://github.com/gautam-s-das",
    type: "software-developer"
  }
];

export const skills: Skill[] = [
  // Programming Skills
  { name: "Python", level: 85, category: "programming" },
  { name: "Java", level: 80, category: "programming" },
  { name: "JavaScript", level: 75, category: "programming" },
  { name: "HTML/CSS", level: 85, category: "programming" },
  { name: "C", level: 70, category: "programming" },
  
  // Data Skills
  { name: "SQL", level: 85, category: "data" },
  { name: "MySQL", level: 80, category: "data" },
  { name: "Power BI", level: 75, category: "data" },
  { name: "Tableau", level: 75, category: "data" },
  { name: "Data Visualization", level: 80, category: "data" },
  { name: "Machine Learning", level: 70, category: "data" },
  
  // Frameworks
  { name: "React.js", level: 80, category: "frameworks" },
  { name: "Next.js", level: 70, category: "frameworks" },
  { name: "Django", level: 75, category: "frameworks" },
  { name: "Bootstrap", level: 80, category: "frameworks" },
  
  // Tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Excel", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 75, category: "tools" }
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Jain College of Engineering, Belagavi",
    duration: "2023 – 2025 (Expected)"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLS Gogte College of Commerce, Belagavi",
    duration: "2020 – 2023",
    cgpa: "7.8"
  }
];

export const certifications: Certification[] = [
  {
    name: "Python with Machine Learning",
    provider: "Swayam (NPTL)",
    duration: "12-week course",
    type: "both"
  },
  {
    name: "Advanced SQL",
    provider: "Mindluster",
    duration: "12-week course",
    type: "data-analyst"
  },
  {
    name: "JavaScript & React.js Bootcamp",
    provider: "Shape-AI",
    type: "software-developer"
  },
  {
    name: "Web Development Bootcamp (Basics)",
    provider: "Shape-AI",
    type: "software-developer"
  },
  {
    name: "Python Data Visualization Bootcamp",
    provider: "Shape-AI",
    type: "data-analyst"
  }
];

export const achievements = [
  "Participated in 4+ boot camps focused on full-stack web development and Python",
  "Active on HackerRank with multiple skill certifications",
  "Secured 9th place in inter-college hackathon among 60+ teams",
  "Continuous self-learning via personal projects and online platforms"
];