
import React, { useState, useRef } from 'react';
import { X, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CurrencyInputProps {
  symbol: string;
  value: string;
  onChange: (value: string) => void;
  showCopyButton?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ 
  symbol, 
  value, 
  onChange, 
  showCopyButton = false 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    
    // Prevent multiple decimal points
    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) return;
    
    onChange(value);
  };

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value)
        .then(() => {
          toast({
            title: "Copiado al portapapeles",
            description: `Valor ${value} copiado correctamente`,
            duration: 2000,
          });
        })
        .catch(err => {
          console.error('Error al copiar:', err);
        });
    }
  };

  return (
    <div className="currency-input mb-4 group">
      <div className="px-3 py-2 text-gray-500 border-r">
        {symbol}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        className="flex-1 px-3 py-2 outline-none bg-transparent"
        placeholder="0.00"
      />
      <div className="flex items-center">
        {value && (
          <button 
            onClick={handleClear}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )}
        {showCopyButton && (
          <button 
            onClick={handleCopy}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors mr-1"
            aria-label="Copy value"
            disabled={!value}
          >
            <Copy size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CurrencyInput;
