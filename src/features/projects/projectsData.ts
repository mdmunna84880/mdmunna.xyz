import { Project } from '../../types';
import AiOrchestrator from '../../assets/ai-orchestrator.png'
import FinSmart from '../../assets/fin-smart.png'
import MediBook from '../../assets/doctor-booking.png'

export const projectsData: Project[] = [
  {
    title: "FinSmart - AI Finance Dashboard",
    date: "Mar 2026 - Apr 2026",
    description: [
      "Developed a full-stack finance application with React, Node.js, MongoDB, and JWT authentication.",
      "Integrated AI assistant (Gemini) and implemented Redux-based state management with analytics dashboards.",
      "Utilized HTTP-only cookies for secure session management and enhanced data protection."
    ],
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini AI", "REST API"],
    imageUrl: FinSmart,
    liveLink: "https://fin-smart-tau.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/FinSmart",
  },
  {
    title: "Document Orchestrator AI",
    date: "2026",
    description: [
      "Built an AI-powered document processing platform using React, Node.js, and Google Gemini for automated data extraction.",
      "Designed scalable pipeline architecture and integrated n8n workflows to automate business processes.",
      "Implemented a responsive UI using Tailwind CSS for seamless user interaction across devices."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "n8n", "REST API", "Tailwind CSS"],
    imageUrl: AiOrchestrator,
    liveLink: "https://ai-orchastrator.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/ai-orchastrator",
  },
  {
    title: "MediBook - Doctor Appointment Platform",
    date: "Feb 2026",
    description: [
      "Developed a full-stack appointment system with React, Node.js, and MongoDB using MVC architecture.",
      "Implemented JWT authentication, Google OAuth, and Cloudinary for secure file uploads.",
      "Optimized appointment scheduling logic and improved user conversion rates."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "OAuth", "Cloudinary", "REST API"],
    imageUrl: MediBook,
    liveLink: "https://medibook-sigma.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/medibook",
  },
];
