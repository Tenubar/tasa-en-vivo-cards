
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 bg-tasaBlue rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-lg">T</span>
      </div>
      <div className="font-semibold text-tasaDarkBlue">
        <span>Tasa</span>
        <span className="text-tasaBlue">EnVivo</span>
      </div>
    </div>
  );
};

export default Logo;
