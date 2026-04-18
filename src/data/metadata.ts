import { SiteMetadata } from '../types';

// General metadata and social links
export const siteMetadata: SiteMetadata = {
  name: "Md Munna",

  jobTitle:
    "Full Stack Developer (MERN) • React • Node.js • MongoDB • REST APIs",

  url: "https://mdmunna.xyz/",
  email: "mdmunna19434@gmail.com",
  github: "https://github.com/mdmunna84880",
  linkedin: "https://www.linkedin.com/in/mdmunna84880",
  x: "https://x.com/mdmunna84880",

  description:
    "Full Stack Developer building web applications using React.js, Node.js, and MongoDB. Experience in frontend development, backend APIs, database integration, and AI-based application workflows.",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Md Munna",
    url: "https://mdmunna.xyz/",

    jobTitle: "Full Stack Developer",

    worksFor: {
      "@type": "Organization",
      name: "AlmaBetter"
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gandhi Engineering College"
    },

    knowsAbout: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "Gemini AI",
      "n8n"
    ],

    sameAs: [
      "https://www.linkedin.com/in/mdmunna84880",
      "https://github.com/mdmunna84880",
      "https://x.com/mdmunna84880"
    ]
  }
};