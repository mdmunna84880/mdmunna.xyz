import { SkillCategory } from '../../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Technical Expertise",
    skills: [
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        details: ["ES6+", "DOM Manipulation", "Promises", "Async/Await", "Event Handling"]
      },
      { 
        name: 'React.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        details: ["JSX", "Hooks", "React Router", "State Management", "UI Components"]
      },
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        details: ["RESTful APIs", "Server-Side Programming", "Event-Driven Architecture", "Middleware"]
      },
      { 
        name: 'Express.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        details: ["Routing", "Middleware", "Server-Side Framework", "CRUD Operations"]
      },
      { 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        details: ["NoSQL", "Mongoose", "Aggregation Pipelines", "Indexing", "Database Design"]
      },
      { 
        name: 'SQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        details: ["PostgreSQL", "MySQL", "Joins", "Indexing", "Query Optimization"]
      },
      { 
        name: 'Tailwind CSS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        details: ["Utility-First CSS", "Responsive Design", "Flexbox & Grid", "Customization"]
      },
      { 
        name: 'Git', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        details: ["Version Control", "Branching & Merging", "Pull Requests", "Collaboration"]
      },
    ]
  },
  {
    category: "Certifications",
    skills: [
      { 
        name: 'Full Stack Web Development Program', 
        icon: 'FiAward',
        details: ["AlmaBetter Edutech Pvt. Ltd.", "17-Mar-2026", "Certificate"]
      },
      { 
        name: 'Full Stack Web Development', 
        icon: 'FiAward',
        details: ["Apna college", "Dec-2025", "Certificate"]
      },
    ]
  },
  {
    category: "Languages",
    skills: [
      { 
        name: 'English', 
        icon: 'https://img.icons8.com/fluency/48/usa.png',
        details: ["Proficient"]
      },
      { 
        name: 'Hindi', 
        icon: 'https://img.icons8.com/fluency/48/india.png',
        details: ["Native Speaker"]
      },
    ]
  }
];
