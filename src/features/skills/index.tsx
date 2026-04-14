import Image from 'next/image';
import { Section } from '../../components/layout/Section';
import { Heading } from '../../components/ui/Heading';
import { AnimatedViewportSection } from '../../components/ui/AnimatedViewportSection';
import { skillsData } from './skillsData';
import { FiAward } from 'react-icons/fi';
import type { IconType } from 'react-icons';

// Map icon names to react-icons components
const iconMap: Record<string, IconType> = {
  FiAward,
};

/**
 * Feature: Skills Section
 * Displays categorised technical and professional skills with details.
 */
const Skills = () => {
  return (
    <Section id="skills">
      <Heading 
        title="Technical Skills, Professional Skills & Languages"
        subtitle="My expertise across the development stack."
      />

      <AnimatedViewportSection>
        <div className="space-y-16">
          {skillsData.map((categoryItem) => (
          <div key={categoryItem.category}>
            <h3 className="text-2xl font-bold text-left text-indigo-900 mb-8">{categoryItem.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryItem.skills.map((skill) => {
                const IconComponent = iconMap[skill.icon];
                const hasIcon = skill.icon && skill.icon.length > 0;

                return (
                  <div key={skill.name} className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      {hasIcon && IconComponent ? (
                        <IconComponent className="h-10 w-10 mr-4 text-indigo-600 flex-shrink-0" />
                      ) : hasIcon ? (
                        <Image src={skill.icon} alt={`${skill.name} icon`} width={40} height={40} className="h-10 w-10 mr-4"/>
                      ) : null}
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
                );
              })}
            </div>
            </div>
          ))}
        </div>
      </AnimatedViewportSection>
    </Section>
  );
};

export default Skills;
