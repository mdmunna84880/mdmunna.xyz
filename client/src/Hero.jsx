// 1. Import the hook from the library
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Professional from "./assets/Professional.jpg";
import FloatingKeywords from './components/FloatingKeywords';

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/mdmunna84880',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    ),
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/mdmunna84880',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  { 
    name: 'X (Twitter)', 
    href: 'https://x.com/mdmunna84880',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const bgKeywords = [
  // Pillar 1: Core Technologies (Your Proven Arsenal)
  // These are the non-negotiable skills you have explicitly listed and used.
  'Java',             // [cite: 6, 38, 47, 55, 57, 74, 108, 143, 162]
  'JavaScript',       // [cite: 6, 19, 29, 31, 108, 118, 134, 136, 162, 183]
  'React.js',         // [cite: 7, 24, 27, 55, 109, 127, 132, 143, 162, 173]
  'Node.js',          // [cite: 7, 19, 24, 29, 31, 48, 55, 109, 118, 127, 134, 136, 143, 162, 186]
  'Express.js',       // [cite: 7, 19, 29, 31, 48, 109, 118, 134, 136, 162, 188]
  'SQL',              // [cite: 8, 48, 56, 110, 162, 84]
  'MongoDB',          // [cite: 8, 19, 56, 110, 118, 162, 87]
  'Git & GitHub',     // [cite: 9, 111, 90]
  'HTML/CSS',         // [cite: 7, 19, 29, 109, 118, 134, 162, 176, 180]

  // Pillar 2: Applied Concepts (Your Demonstrated Strategy)
  // These are the actions and methodologies you have proven through your projects.
  'Full-Stack Applications', // [cite: 38, 48, 55, 97, 143, 161, 164, 193]
  'RESTful APIs',           // [cite: 29, 48, 56, 134, 135, 163, 188]
  'CRUD Operations',        // [cite: 20, 30, 122, 135, 83, 89]
  'API Integration',        // [cite: 19, 26, 131]
  'OOP',                    // [cite: 38, 47, 57, 75]
  'Data Structures',        // [cite: 57, 75, 93, 190]
  'Responsive UI',          // [cite: 26, 131]
  'Query Optimization',     // [cite: 22, 124, 86]

  // Pillar 3: Professional Vision (Your Emerging Mission)
  // These are the business-oriented outcomes and mindsets you've demonstrated.
  'Problem-Solving',        // [cite: 57, 63, 77, 185]
  'Product Development',    // Your projects are evidence of this 
  'Scalability',            // Mentioned in your Wanderlust deployment [cite: 22, 125, 153]
  'User Authentication'     // [cite: 20, 121]
];

const Hero = () => {
  // 2. Use the hook to create the typewriter effect
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full-Stack Developer', 'Backend Developer', 'Frontend Developer', 'Java Developer'],
    loop: true, // This will make the animation loop indefinitely
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden">
        {/* ADD THIS DIV FOR THE 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <FloatingKeywords keywords={bgKeywords}/>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 tracking-tight">
            Md Munna 
          </h1>

          {/* 3. The animated text is rendered here */}
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-600 h-16 sm:h-auto">
            Aspiring <span className="text-cyan-700">{text}</span>
            <Cursor cursorStyle='|' />
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            I build robust, full-stack web applications with a focus on clean back-end architecture. Passionate about leveraging technologies like Java, Node.js, and React to solve complex problems and create scalable, high-impact solutions.
          </p>
          
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a href="#projects" className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              View Projects
            </a>
            <a href="/Md_Munna_Resume.pdf" download className="inline-block text-indigo-600 bg-white hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-lg ring-1 ring-indigo-600">
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            {socialLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500/50">
            <img 
              className="w-full h-full object-cover" 
              src={Professional} 
              alt="Professional headshot of Md Munna" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;