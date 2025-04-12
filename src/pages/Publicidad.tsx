
import React from 'react';
import Banner from '@/components/Banner';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Publicidad: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold text-tasaDarkBlue mb-6">
          Espacio Publicitario
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Esta página está reservada para contenido publicitario. 
          Si está interesado en anunciarse aquí, póngase en contacto con nosotros.
        </p>
        
        <Link to="/">
          <Button className="bg-tasaBlue hover:bg-tasaDarkBlue">
            Volver a Inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Publicidad;
