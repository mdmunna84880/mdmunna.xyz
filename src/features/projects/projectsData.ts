import { Project } from '../../types';
import AiOrchestrator from '../../assets/ai-orchestrator.png'
import FinSmart from '../../assets/fin-smart.png'
import MediBook from '../../assets/doctor-booking.png'

export const projectsData: Project[] = [
  {
    title: "FinSmart — AI Finance Dashboard",
    date: "Mar 2026 - Apr 2026",
    description: [
      "Built a full-stack personal finance application with transaction tracking, budgeting, and analytics features.",
      "Implemented REST APIs for managing transactions, budgets, and user data with JWT-based authentication.",
      "Integrated AI-based financial insights using Gemini based on user financial data.",
      "Developed interactive dashboards with charts and managed application state using Redux Toolkit."
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Gemini AI"
    ],
    imageUrl: FinSmart,
    liveLink: "https://fin-smart-tau.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/FinSmart",
  },

  {
    title: "Document Orchestrator AI",
    date: "2026",
    description: [
      "Built an AI-based document processing system supporting PDF and text uploads.",
      "Extracted structured data from documents using Gemini AI and presented it for user verification.",
      "Integrated n8n workflows to automate email delivery by sending AI-processed document data, allowing users to review extracted data and trigger email workflows with AI-generated content.",
      "Developed frontend components for file upload, data display, and workflow configuration."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Gemini AI",
      "n8n",
      "REST API",
      "Tailwind CSS"
    ],
    imageUrl: AiOrchestrator,
    liveLink: "https://ai-orchastrator.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/ai-orchastrator",
  },

  {
    title: "MediBook — Doctor Appointment Platform",
    date: "Feb 2026",
    description: [
      "Developed a full-stack appointment booking system with authentication and user profile management.",
      "Implemented JWT authentication and Google OAuth for secure user access.",
      "Built file upload functionality for medical reports using Cloudinary integration.",
      "Designed REST APIs and backend structure using MVC pattern for managing users and appointments."
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OAuth",
      "Cloudinary",
      "REST API"
    ],
    imageUrl: MediBook,
    liveLink: "https://medibook-sigma.vercel.app/",
    sourceLink: "https://github.com/mdmunna84880/medibook",
  },
];