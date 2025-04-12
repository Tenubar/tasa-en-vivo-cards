
import React from 'react';
import Logo from './Logo';
import { Link as ScrollLink } from 'react-scroll';

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-4 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-5">
          <ScrollLink 
            to="download-section" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 hover:text-tasaBlue transition-colors cursor-pointer"
          >
            Descarga la App
          </ScrollLink>
          <ScrollLink 
            to="advertising-section" 
            smooth={true} 
            duration={500}
            className="text-gray-600 hover:text-tasaBlue transition-colors cursor-pointer"
          >
            Publicita tu Negocio
          </ScrollLink>
          <ScrollLink 
            to="pricing-section" 
            smooth={true} 
            duration={500}
            className="text-gray-600 hover:text-tasaBlue transition-colors cursor-pointer"
          >
            Precios
          </ScrollLink>
          <ScrollLink 
            to="contact-section" 
            smooth={true} 
            duration={500}
            className="text-gray-600 hover:text-tasaBlue transition-colors cursor-pointer"
          >
            Contáctanos
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
