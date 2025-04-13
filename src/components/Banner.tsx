
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link as ScrollLink } from 'react-scroll';

const Banner: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', position: 0 },
        { id: 'download-section', position: document.getElementById('download-section')?.offsetTop || 0 },
        { id: 'advertising-section', position: document.getElementById('advertising-section')?.offsetTop || 0 },
        { id: 'pricing-section', position: document.getElementById('pricing-section')?.offsetTop || 0 },
        { id: 'contact-section', position: document.getElementById('contact-section')?.offsetTop || 0 }
      ];
      
      const scrollPosition = window.scrollY + 100; // Add offset to improve detection
      
      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].position) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white shadow-sm py-3 px-4 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-5">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            spy={true}
            className={`transition-colors cursor-pointer ${
              activeSection === 'home' ? 'text-tasaBlue font-medium' : 'text-gray-600 hover:text-tasaBlue'
            }`}
          >
            Home
          </ScrollLink>
          <ScrollLink 
            to="download-section" 
            smooth={true} 
            duration={500}
            spy={true}
            className={`transition-colors cursor-pointer ${
              activeSection === 'download-section' ? 'text-tasaBlue font-medium' : 'text-gray-600 hover:text-tasaBlue'
            }`}
          >
            Descarga la App
          </ScrollLink>
          <ScrollLink 
            to="advertising-section" 
            smooth={true} 
            duration={500}
            spy={true}
            className={`transition-colors cursor-pointer ${
              activeSection === 'advertising-section' ? 'text-tasaBlue font-medium' : 'text-gray-600 hover:text-tasaBlue'
            }`}
          >
            Publicita tu Negocio
          </ScrollLink>
          <ScrollLink 
            to="pricing-section" 
            smooth={true} 
            duration={500}
            spy={true}
            className={`transition-colors cursor-pointer ${
              activeSection === 'pricing-section' ? 'text-tasaBlue font-medium' : 'text-gray-600 hover:text-tasaBlue'
            }`}
          >
            Precios
          </ScrollLink>
          <ScrollLink 
            to="contact-section" 
            smooth={true} 
            duration={500}
            spy={true}
            className={`transition-colors cursor-pointer ${
              activeSection === 'contact-section' ? 'text-tasaBlue font-medium' : 'text-gray-600 hover:text-tasaBlue'
            }`}
          >
            Contáctanos
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
