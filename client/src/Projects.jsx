// Project data extracted from your resume

const projectsData = [
  {
    title: "Wanderlust: Full-Stack Travel Booking Platform",
    description: [
      "Built a travel booking platform inspired by Airbnb with secure user authentication and CRUD operations.",
      "Integrated interactive maps and category-based filters (e.g., Rooms, Pools, Farms) for better navigation.",
      "Optimized database queries, improving search performance by 30%, and deployed on Render for scalability."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "CSS", "EJS", "Map Integration"],
    imageUrl: "https://media.istockphoto.com/id/1392278203/photo/website-design-wireframe-examples-of-web-and-mobile-app-wireframe-sketches-on-white-board.jpg?s=2048x2048&w=is&k=20&c=laGTsXMDC3yIHF-2i5RZsQE5Tcbv0i5WPu_21v0b_lM=", // Placeholder image
    liveLink: "#", // Add your live project link here
    sourceLink: "#", // Add your GitHub repo link here
  },
  {
    title: "Weather App",
    description: [
      "Built an app allowing users to search cities and view real-time weather details like temperature, humidity, and conditions.",
      "Integrated Open Weather API for dynamic data fetching and used Material-UI for a responsive UI.",
      "Managed application state with React's useState and displayed weather data with conditional rendering."
    ],
    technologies: ["React.js", "Node.js", "Open Weather API", "Material-UI"],
    imageUrl: "https://media.istockphoto.com/id/1392278203/photo/website-design-wireframe-examples-of-web-and-mobile-app-wireframe-sketches-on-white-board.jpg?s=2048x2048&w=is&k=20&c=laGTsXMDC3yIHF-2i5RZsQE5Tcbv0i5WPu_21v0b_lM=", // Placeholder image
    liveLink: "#", // Add your live project link here
    sourceLink: "#", // Add your GitHub repo link here
  },
  {
    title: "Quora Clone: Question-and-Answer Platform",
    description: [
      "Developed a platform where users can create, edit, delete, and view posts, utilizing RESTful APIs for seamless CRUD operations.",
      "Implemented backend functionality with Node.js and Express.js, and built a dynamic frontend using EJS and JavaScript.",
      "Deployed the project with efficient handling of user interactions and data management."
    ],
    technologies: ["Node.js", "Express.js", "EJS", "JavaScript", "CSS", "RESTful API"],
    imageUrl: "https://media.istockphoto.com/id/1392278203/photo/website-design-wireframe-examples-of-web-and-mobile-app-wireframe-sketches-on-white-board.jpg?s=2048x2048&w=is&k=20&c=laGTsXMDC3yIHF-2i5RZsQE5Tcbv0i5WPu_21v0b_lM=", // Placeholder image
    liveLink: "#", // Add your live project link here
    sourceLink: "#", // Add your GitHub repo link here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Here are a few projects I've worked on.
          </p>
          
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          
          {projectsData.map((project) => (
            <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover" src={project.imageUrl} alt={`${project.title} screenshot`} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="mt-2 text-2xl font-semibold text-indigo-900">
                    {project.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-base text-gray-500 list-disc list-inside">
                    {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                    <p className="text-sm font-medium text-indigo-600 mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg font-semibold transition-colors duration-300">
                    View Live
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-block text-indigo-600 hover:text-indigo-900 font-semibold transition-colors duration-300">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;