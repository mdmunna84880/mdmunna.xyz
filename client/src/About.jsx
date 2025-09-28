// An array of your core technologies with simple SVG icons
const coreTechnologies = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const About = () => {
  return (
    <section id="about" className="p-y sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Narrative */}
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm a passionate and results-driven Software Engineer with a
              strong foundation in <b>full-stack development</b> and {" "}
              <b>Object-Oriented Programming</b> using <b>Java</b>. My journey in
              technology is fueled by a desire to build scalable, high-quality
              applications that solve real-world problems.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Through my training and hands-on projects, I've gained extensive
              experience in designing and implementing <b>RESTful APIs</b>,
              managing databases with both <b>SQL</b> and <b>MongoDB</b>, and
              developing responsive frontends with <b>React.js</b>. I thrive in collaborative agile environments and enjoy
              the entire development lifecycle, from debugging and optimizing
              code to deploying reliable solutions.
            </p>
          </div>

          {/* Right Column: Core Technologies */}
          <div className="mt-12 lg:mt-0">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center text-indigo-900">
                Core Technologies
              </h3>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {coreTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center transform hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="h-16 w-16"
                    />
                    <p className="mt-3 text-sm font-semibold text-gray-600">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
