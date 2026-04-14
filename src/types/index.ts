export interface HeroData {
  typewriterWords: string[];
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  coreTechnologies: Technology[];
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  technologies: string[];
  imageUrl: string | import('next/image').StaticImageData; // Supports both remote URLs and imported StaticImageData
  liveLink?: string;
  sourceLink?: string;
}

export interface SkillDetail {
  name: string;
  icon: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: SkillDetail[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  location?: string;
  link?: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  location?: string;
  link?: string;
  score: string;
}

export interface NavLink {
  href: string;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SiteMetadata {
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  github: string;
  linkedin: string;
  x?: string;
  description: string;
  structuredData: Record<string, unknown>; // Flexible allowing next/schema integration if needed
}
