import { Section } from '../../components/layout/Section';
import { Heading } from '../../components/ui/Heading';
import { AnimatedViewportSection } from '../../components/ui/AnimatedViewportSection';
import { projectsData } from './projectsData';
import Image from 'next/image';

/**
 * Feature: Projects Section
 * Showcases recent work with live links and source code.
 */
const Projects = () => {
  return (
    <Section id="projects" background="bg-white">
      <Heading 
        title="Projects" 
        subtitle="Here are a few projects I've worked on recently."
      />
      {/* ... rest of the component ... */}
      <AnimatedViewportSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {projectsData.map((project) => (
          <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 relative h-64 w-full">
              <Image 
                className="object-cover" 
                src={project.imageUrl} 
                alt={`${project.title} screenshot`} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg font-semibold transition-colors duration-300">
                    View Live
                  </a>
                )}
                {project.sourceLink && (
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-block text-indigo-600 hover:text-indigo-900 font-semibold transition-colors duration-300">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
      </AnimatedViewportSection>
    </Section>
  );
};

export default Projects;
