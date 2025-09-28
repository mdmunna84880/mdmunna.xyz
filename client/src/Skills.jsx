// Detailed skill data extracted directly from your resumes
const skillsData = [
  {
    category: "Languages & Core Concepts",
    skills: [
      { 
        name: 'Java', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        details: ["OOP", "Core Java", "DSA", "Collections", "Conditional Statements"]
      },
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        details: ["ES6+", "DOM Manipulation", "Promises", "Async/Await"]
      },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        details: ["RESTful APIs", "Middleware", "Asynchronous Programming", "Event-Driven Architecture"]
      },
      { 
        name: 'Express.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        details: ["Routing", "Middleware", "Request Handling", "CRUD Operations"]
      },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
        { 
            name: 'React.js', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            details: ["JSX", "Components", "State & Props", "React Router", "Conditional Rendering"]
        },
        { 
            name: 'HTML5', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            details: ["Semantic HTML", "Forms & Multimedia", "Accessibility", "SEO"]
        },
        { 
            name: 'CSS3', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            details: ["Flexbox", "Grid", "Responsive Design", "Animations"]
        },
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        details: ["NoSQL", "Collections", "Aggregation Pipelines", "Mongoose"]
      },
      { 
        name: 'SQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        details: ["Relational Databases", "Query Optimization", "Joins", "Database Design"]
      },
      { 
        name: 'Git & GitHub', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        details: ["Version Control", "Branching & Merging", "Pull Requests", "Collaboration"]
      },
    ]
  },
  {
    category: "Professional Skills & Languages",
    skills: [
      { 
        name: 'Problem Solving', 
        icon: 'https://img.icons8.com/fluency/48/light-on.png',
        details: ["Critical Thinking", "Debugging", "Optimization"]
      },
      { 
        name: 'Teamwork', 
        icon: 'https://img.icons8.com/fluency/48/conference-call.png',
        details: ["Collaboration", "Agile Methodologies", "Communication"]
      },
      { 
        name: 'Mindset', 
        icon: 'https://img.icons8.com/fluency/48/brain.png',
        details: ["Learning Mindset", "Resilience", "Adaptability"]
      },
      { 
        name: 'Languages', 
        icon: 'https://img.icons8.com/fluency/48/language.png',
        details: ["English (Proficient)", "Hindi (Native)", "Bhojpuri (Native)"]
      },
    ]
  }
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            Technical Skills, Professional Skills & Languages
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            My expertise across the development stack.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {skillsData.map((categoryItem) => (
            <div key={categoryItem.category}>
              <h3 className="text-2xl font-bold text-left text-indigo-900 mb-8">{categoryItem.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryItem.skills.map((skill) => (
                  // HOVER EFFECT CHANGE: Now uses scale-105 to match the hero section
                  <div key={skill.name} className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <img src={skill.icon} alt={`${skill.name} icon`} className="h-10 w-10 mr-4"/>
                      <h4 className="text-xl font-bold text-gray-800">{skill.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;