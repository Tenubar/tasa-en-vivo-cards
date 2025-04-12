
import React from 'react';
import Card from './Card';

interface CardWrapperProps {
  cardData: Array<{
    id: number;
    title: string;
    image: string;
    value: number;
    percentChange: number;
  }>;
  selectedCard: number | null;
  onCardClick: (cardId: number) => void;
  onImageClick: (value: number) => void;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  cardData,
  selectedCard,
  onCardClick,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardData.map(card => (
        <div key={card.id}>
          <Card
            title={card.title}
            image={card.image}
            value={card.value}
            percentChange={card.percentChange}
            onCardClick={() => onCardClick(card.id)}
            onImageClick={onImageClick}
            isSelected={selectedCard === card.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CardWrapper;
