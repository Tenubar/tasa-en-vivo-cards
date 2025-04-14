
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  image: string;
  value: number;
  percentChange?: number; // Make percentChange optional
  onCardClick: () => void;
  onImageClick: (value: number) => void;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  value,
  percentChange,
  onCardClick,
  onImageClick,
  isSelected,
}) => {
  const [isPulse, setIsPulse] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCardClick(); // This triggers the rate change
    // We're not calling onImageClick(value) anymore since it should behave the same as clicking the card
    setIsPulse(true);
    setTimeout(() => setIsPulse(false), 500);
  };

  // Check if percentChange exists before using it
  const isPositive = percentChange !== undefined ? percentChange >= 0 : true;

  return (
    <div
      className={cn(
        "tasa-card p-4 rounded-lg cursor-pointer transition-all",
        isSelected ? "border-2 border-tasaBlue" : "border border-gray-200",
        isPulse && "animate-card-pulse"
      )}
      onClick={onCardClick}
    >
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <div 
        className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={`/images/${image}.png`} 
          alt={title}
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            // Fallback to a default image if the specified one doesn't exist
            (e.target as HTMLImageElement).src = '/images/default-bank.png';
          }}
        />
      </div>
      <div className="text-lg font-semibold">{value.toFixed(2)}</div>
      {/* Only render the percentChange if it exists */}
      {percentChange !== undefined && (
        <div className={isPositive ? "text-tasaGreen" : "text-tasaRed"}>
          {isPositive ? "+" : ""}{percentChange.toFixed(2)}%
        </div>
      )}
    </div>
  );
};

export default Card;