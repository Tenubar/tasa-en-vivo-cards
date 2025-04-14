
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const DownloadSection: React.FC = () => {
  return (
    <div id="download-section" className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Descarga Nuestra App!</h2>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3">
          <img 
            src="images/solarFlyer.png" 
            alt="App Screenshot" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <p className="text-lg mb-4">Obtén la App en Android</p>
          <Button className="flex items-center gap-2">
            <Download size={18} />
            Descargar App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
