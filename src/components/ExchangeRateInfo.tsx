
import React, { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface ExchangeRateInfoProps {
  selectedRate: string;
  onRateChange: (rate: string) => void;
  rates: Array<{ id: number; title: string; value: number }>;
}

const ExchangeRateInfo: React.FC<ExchangeRateInfoProps> = ({ 
  selectedRate,
  onRateChange,
  rates
}) => {
  return (
    <div className="mb-6 text-center">
      <p className="text-gray-700 font-medium">
        Tasa: 
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-2 inline-flex items-center text-tasaBlue">
            {selectedRate}
            <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="bg-white">
            {rates.map(rate => (
              <DropdownMenuItem 
                key={rate.id}
                onClick={() => onRateChange(rate.title)}
                className="cursor-pointer"
              >
                {rate.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </p>
    </div>
  );
};

export default ExchangeRateInfo;
