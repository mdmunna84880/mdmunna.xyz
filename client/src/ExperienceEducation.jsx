// src/components/ExperienceEducation.jsx
import { motion } from 'framer-motion';

// Data extracted from your resumes
const experienceData = [
  {
    role: "Software Trainee Engineer",
    company: "AlmaBetter",
    date: "June 2025 - Present",
    description: [
      "Developed full-stack applications using Java, Node.js, and React.js.",
      "Designed and implemented RESTful APIs and database schemas (MongoDB, SQL).",
      "Collaborated in agile projects, debugging issues, and optimizing performance."
    ]
  },
  {
    role: "Trainee",
    company: "Shilpan Steelcast Pvt. Ltd.",
    date: "Aug 2025 - Nov 2025",
    description: [
      "Gained experience in process tracking and documentation, strengthening analytical skills."
    ]
  }
];

const educationData = [
  {
    degree: "B.Tech",
    institution: "Gandhi Engineering College, Bhubaneswar",
    date: "2021 - 2025",
    score: "CGPA: 7.74"
  },
  {
    degree: "XII (BSEB)",
    institution: "C.N. College, Sahebganj, Muzaffarpur",
    date: "2019 - 2021",
    score: "66.8%"
  },
];

// A simplified and more robust TimelineItem component
const TimelineItem = ({ title, subtitle, date, details, index }) => (
  <motion.div
    className="relative pl-12 pb-12 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    {/* The timeline dot */}
    <div className="absolute top-2 left-[-9px] w-5 h-5 bg-white rounded-full border-2 border-indigo-600 z-10 transition-colors duration-300 group-hover:border-cyan-500"></div>
    
    {/* A simple, reliable CSS line connector */}
    <div className="absolute top-4 left-0 w-8 h-px bg-gray-300 transition-colors duration-300 group-hover:bg-cyan-500"></div>

    {/* The card with Framer Motion hover animation */}
    <motion.div
      className="p-6 rounded-lg bg-gray-50 ring-1 ring-gray-200"
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <p className="text-sm font-semibold text-indigo-600 mb-1">{date}</p>
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-md text-gray-500 mb-4">{subtitle}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            {details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
    </motion.div>
  </motion.div>
);


const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            My Journey
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {/* Left Column: Experience */}
          <div>
            <h3 className="text-2xl font-bold text-center text-indigo-900 mb-10">Experience</h3>
            <div className="relative border-l-2 border-gray-300">
              {experienceData.map((exp, index) => (
                <TimelineItem 
                  key={index}
                  index={index}
                  date={exp.date}
                  title={exp.role}
                  subtitle={exp.company}
                  details={exp.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div>
            <h3 className="text-2xl font-bold text-center text-indigo-900 mb-10">Education</h3>
            <div className="relative border-l-2 border-gray-300">
              {educationData.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  index={index}
                  date={edu.date}
                  title={edu.degree}
                  subtitle={edu.institution}
                  details={[edu.score]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;