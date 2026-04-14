import Hero from "../features/hero";
import About from "../features/about";
import Projects from "../features/projects";
import Skills from "../features/skills";
import Education from "../features/education";
import Contact from "../features/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
