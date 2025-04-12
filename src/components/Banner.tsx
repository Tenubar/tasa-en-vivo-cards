
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-5">
          <Link to="/publicidad" className="text-gray-600 hover:text-tasaBlue transition-colors">
            Publicidad
          </Link>
          <Link to="/publicidad" className="text-gray-600 hover:text-tasaBlue transition-colors">
            Publicidad
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
