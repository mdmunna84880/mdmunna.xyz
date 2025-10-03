import About from "./About"
import Contact from "./Contact"
import ExperienceEducation from "./ExperienceEducation"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
import { Helmet } from 'react-helmet-async';


function App() {
  
  // This is structured data (JSON-LD), a "cheat sheet" for Google.
  // It explicitly tells Google who you are, what you do, and where to find you.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md Munna",
    "url": "https://mdmunna.xyz/",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "AlmaBetter"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Gandhi Engineering College" // [cite: 32, 78, 162]
    },
    "knowsAbout": ["Java", "Next.js", "React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Full Stack Development", "Backend Development"], // [cite: 13, 124]
    "sameAs": [
      "https://www.linkedin.com/in/mdmunna84880", // [cite: 6]
      "https://github.com/mdmunna84880" // [cite: 8]
    ]
  };

  const pageTitle = "Md Munna - Engineer";
  const pageDescription = "Md Munna's engineering portfolio. I build scalable backend systems and responsive frontends using Node.js, Next.js, and React.js.";
  const pageUrl = "https://mdmunna.xyz/";
  const imageUrl = `${pageUrl}preview-image.png`; // An image for social sharing
  
  return (
    <>
    <Helmet>
  {/* Primary Meta */}
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={pageUrl} />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={imageUrl} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={pageUrl} />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={imageUrl} />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <ExperienceEducation/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
