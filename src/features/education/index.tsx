"use client";

import { Section } from '../../components/layout/Section';
import { Heading } from '../../components/ui/Heading';
import { experienceData, educationData } from './experienceData';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  link?: string;
  details: string[];
  index: number;
}

/**
 * Shared component for timeline entries (experience or education).
 */
const TimelineItem = ({ title, subtitle, date, location, link, details, index }: TimelineItemProps) => (
  <motion.div
    className="relative pl-12 pb-12 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="absolute top-2 left-[-9px] w-5 h-5 bg-white rounded-full border-2 border-indigo-600 z-10 transition-colors duration-300 group-hover:border-cyan-500"></div>
    <div className="absolute top-4 left-0 w-8 h-px bg-gray-300 transition-colors duration-300 group-hover:bg-cyan-500"></div>

    <motion.div
      className="p-6 rounded-lg bg-gray-50 ring-1 ring-gray-200"
      whileHover={{ scale: 1.02, boxShadow: "0px 8px 25px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full whitespace-nowrap">
          {date}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <p className="text-md font-bold text-indigo-900">{subtitle}</p>
        {(location || link) && (
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
            {location && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {location}
              </span>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-indigo-600 hover:text-cyan-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                Link
              </a>
            )}
          </div>
        )}
      </div>

      <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
        {details.map((detail, i) => <li key={i}>{detail}</li>)}
      </ul>
    </motion.div>
  </motion.div>
);

/**
 * Feature: Journey Section
 * Displays professional experience and academic background.
 */
const ExperienceEducation = () => {
  return (
    <Section id="experience">
      <Heading 
        title="My Journey"
        subtitle="A timeline of my professional experience and academic background."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        {/* Experience Column */}
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
                location={exp.location}
                link={exp.link}
                details={exp.description}
              />
            ))}
          </div>
        </div>

        {/* Education Column */}
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
                location={edu.location}
                link={edu.link}
                details={[edu.score]}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceEducation;
