import { Section } from '../../components/layout/Section';
import { AnimatedViewportSection } from '../../components/ui/AnimatedViewportSection';
import { aboutData } from './aboutData';
import Image from 'next/image';
const { coreTechnologies } = aboutData;

/**
 * Feature: About Section
 * Highlights professional background and core tech stack.
 */
const About = () => {
  return (
    <Section id="about">

      <AnimatedViewportSection>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Narrative */}
        <div>
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            {aboutData.title}
          </h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-4 text-lg text-gray-600">
              {paragraph}
            </p>
          ))}
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
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={64}
                    height={64}
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
      </AnimatedViewportSection>
    </Section>
  );
}

export default About;
