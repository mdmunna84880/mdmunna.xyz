"use client";
import Link from 'next/link';

import { Container } from '../../components/ui/Container';
import { AnimatedViewportSection } from '../../components/ui/AnimatedViewportSection';
import { heroData } from './heroData';
import { siteMetadata } from '../../data/metadata';
import { SocialLinks } from './SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import Professional from '../../assets/Professional.jpg';

/**
 * Feature: Hero Section (Wrapper)
 * Displays the introduction, role with typewriter effect, and social links.
 */
const Hero = () => {
  const [text] = useTypewriter({
    words: heroData.typewriterWords,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden">
      <AnimatedViewportSection className="w-full">
        <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 tracking-tight">
            {siteMetadata.name}
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-600 h-16 sm:h-auto">
            Aspiring <span className="text-cyan-700">{text}</span>
            <Cursor cursorStyle='|' />
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            {heroData.description}
          </p>
          
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a href="#projects" className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              View Projects
            </a>
            <Link href="/resume" className="inline-block text-indigo-600 bg-white hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-lg ring-1 ring-indigo-600">
              View Resume
            </Link>
          </div>

          <SocialLinks />
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500/50">
            <Image 
              className="w-full h-full object-cover" 
              src={Professional} 
              alt={`Professional headshot of ${siteMetadata.name}`} 
              loading='eager'
            />
          </div>
        </div>
        </Container>
      </AnimatedViewportSection>
    </section>
  );
};

export default Hero;
