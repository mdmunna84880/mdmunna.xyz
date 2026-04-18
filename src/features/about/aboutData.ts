import { AboutData } from '../../types';

export const aboutData: AboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a Full Stack Developer working with the MERN stack, focused on building structured and maintainable web applications using React.js, Node.js, and MongoDB. I have experience developing end-to-end systems covering frontend interfaces, backend APIs, and database integration.",

    "I have built applications including financial dashboards, AI-based document processing systems, and appointment management platforms. My work involves designing REST APIs, managing application state using Redux Toolkit, and implementing authentication using JWT and OAuth."
  ],

  coreTechnologies: [
    { 
      name: 'React.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
    },
    { 
      name: 'Express.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' 
    }
  ]
};