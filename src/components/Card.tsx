
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  image: string;
  value: number;
  percentChange: number;
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
    onCardClick(); // Also change the rate when clicking the image
    onImageClick(value);
    setIsPulse(true);
    setTimeout(() => setIsPulse(false), 500);
  };

  const isPositive = percentChange >= 0;

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
        <div className="text-3xl font-bold text-gray-400">{image}</div>
      </div>
      <div className="text-lg font-semibold">{value.toFixed(2)}</div>
      <div className={isPositive ? "text-tasaGreen" : "text-tasaRed"}>
        {isPositive ? "+" : ""}{percentChange.toFixed(2)}%
      </div>
    </div>
  );
};

export default Card;
