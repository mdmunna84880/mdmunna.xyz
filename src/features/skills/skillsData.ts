import { SkillCategory } from '../../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        details: ["ES6+", "Async/Await", "Promises", "DOM Manipulation"]
      },
      { 
        name: 'React.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        details: ["Hooks", "Component-Based Architecture", "React Router"]
      },
      { 
        name: 'Redux Toolkit', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        details: ["State Management", "Async Thunks"]
      },
      { 
        name: 'Tailwind CSS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        details: ["Responsive Design", "Utility-First CSS"]
      },
    ]
  },

  {
    category: "Backend",
    skills: [
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        details: ["REST APIs", "Middleware", "Server-Side Development"]
      },
      { 
        name: 'Express.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        details: ["Routing", "API Development"]
      },
    ]
  },

  {
    category: "Database",
    skills: [
      { 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        details: ["CRUD Operations", "Mongoose"]
      },
      { 
        name: 'SQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        details: ["Basic Queries", "Joins"]
      },
    ]
  },

  {
    category: "Tools & Technologies",
    skills: [
      { 
        name: 'Git & GitHub', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        details: ["Version Control", "Branching"]
      },
      { 
        name: 'Postman', 
        icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        details: ["API Testing"]
      },
      { 
        name: 'JWT Authentication', 
        icon: '',
        details: ["Token-Based Authentication"]
      },
      { 
        name: 'OAuth', 
        icon: '',
        details: ["Google Authentication"]
      },
      { 
        name: 'Gemini AI', 
        icon: '',
        details: ["AI Integration"]
      },
      { 
        name: 'n8n', 
        icon: '',
        details: ["Workflow Automation"]
      },
    ]
  },

  {
    category: "Certifications",
    skills: [
      { 
        name: 'Full Stack Web Development Program', 
        icon: 'FiAward',
        details: ["AlmaBetter", "March 2026"]
      },
      { 
        name: 'Full Stack Web Development', 
        icon: 'FiAward',
        details: ["Apna College", "December 2025"]
      },
    ]
  },

  {
    category: "Languages",
    skills: [
      { 
        name: 'English', 
        icon: '',
        details: ["Professional Working Proficiency"]
      },
      { 
        name: 'Hindi', 
        icon: '',
        details: ["Native"]
      },
    ]
  }
];