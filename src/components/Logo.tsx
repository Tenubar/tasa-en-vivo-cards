
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 flex items-center justify-center">
          <img src = "/slogo.png"></img>
        </div>
        <div className="font-semibold text-tasaDarkBlue">
          <span>So</span>
          <span className="text-tasaBlue">lar</span>
        </div>
      </div>
      <span className="text-xs text-gray-500 ml-12 -mt-1">Mantente al día!</span>
    </div>
  );
};

export default Logo;
