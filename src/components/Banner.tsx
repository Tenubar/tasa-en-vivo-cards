
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-4 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-5">
          <Link to="/app" className="text-gray-600 hover:text-tasaBlue transition-colors">
            Descarga la App
          </Link>
          <Link to="/publicidad" className="text-gray-600 hover:text-tasaBlue transition-colors">
            Publicita tu Negocio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
