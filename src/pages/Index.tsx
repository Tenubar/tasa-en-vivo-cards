
import React, { useState } from 'react';
import Banner from '@/components/Banner';
import UpdateSection from '@/components/UpdateSection';
import CurrencyInput from '@/components/CurrencyInput';
import ExchangeRateInfo from '@/components/ExchangeRateInfo';
import Card from '@/components/Card';

const cardData = [
  { id: 1, title: 'Banco A', image: 'ba', value: 78.36, percentChange: 1.2 },
  { id: 2, title: 'Mercado I', image: 'mi', value: 100.89, percentChange: -0.5 },
  { id: 3, title: 'Popular', image: 'po', value: 102.88, percentChange: 0.8 },
  { id: 4, title: 'Banco U', image: 'bu', value: 50.00, percentChange: -1.3 },
  { id: 5, title: 'Paralelo D', image: 'pd', value: 75.45, percentChange: 2.1 },
  { id: 6, title: 'Paralelo S', image: 'ps', value: 80.12, percentChange: -0.3 },
];

const Index: React.FC = () => {
  const [dollarValue, setDollarValue] = useState('');
  const [bolivarValue, setBolivarValue] = useState('');
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
    const card = cardData.find(card => card.id === cardId);
    if (card) {
      setExchangeRate(card.value);
      // If dollar value is set, calculate bolivar value
      if (dollarValue) {
        const newBolivarValue = (parseFloat(dollarValue) * card.value).toFixed(2);
        setBolivarValue(newBolivarValue);
      }
    }
  };

  const handleImageClick = (value: number) => {
    if (dollarValue) {
      const newBolivarValue = (parseFloat(dollarValue) * value).toFixed(2);
      setBolivarValue(newBolivarValue);
    } else {
      setBolivarValue(value.toString());
    }
  };

  const handleDollarChange = (value: string) => {
    setDollarValue(value);
    if (value && exchangeRate) {
      const newBolivarValue = (parseFloat(value) * exchangeRate).toFixed(2);
      setBolivarValue(newBolivarValue);
    }
  };

  const handleBolivarChange = (value: string) => {
    setBolivarValue(value);
    if (value && exchangeRate) {
      const newDollarValue = (parseFloat(value) / exchangeRate).toFixed(2);
      setDollarValue(newDollarValue);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <UpdateSection />
          
          <div className="mb-6">
            <CurrencyInput 
              symbol="$" 
              value={dollarValue} 
              onChange={handleDollarChange}
              showCopyButton={true}
            />
            <CurrencyInput 
              symbol="Bs." 
              value={bolivarValue} 
              onChange={handleBolivarChange}
            />
          </div>
          
          <ExchangeRateInfo />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardData.map(card => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              value={card.value}
              percentChange={card.percentChange}
              onCardClick={() => handleCardClick(card.id)}
              onImageClick={handleImageClick}
              isSelected={selectedCard === card.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
