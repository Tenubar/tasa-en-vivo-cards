
import React, { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import UpdateSection from '@/components/UpdateSection';
import CurrencyInput from '@/components/CurrencyInput';
import ExchangeRateInfo from '@/components/ExchangeRateInfo';
import CardWrapper from '@/components/CardWrapper';
import DownloadSection from '@/components/DownloadSection';
import AdvertisingSection from '@/components/AdvertisingSection';

const cardData = [
  { id: 1, title: 'Banco A', image: 'ba', value: 78.36 },
  { id: 2, title: 'Mercado I', image: 'mi', value: 100.89 },
  { id: 3, title: 'Popular', image: 'po', value: 102.88 },
  { id: 4, title: 'Banco U', image: 'bu', value: 50.00 },
  { id: 5, title: 'Paralelo D', image: 'pd', value: 75.45 },
  { id: 6, title: 'Paralelo S', image: 'ps', value: 80.12 },
];

const Index: React.FC = () => {
  const [dollarValue, setDollarValue] = useState('1');
  const [bolivarValue, setBolivarValue] = useState('');
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [selectedRateTitle, setSelectedRateTitle] = useState('Banco Central');

  useEffect(() => {
    if (cardData.length > 0 && !selectedCard) {
      handleCardClick(cardData[0].id);
    }
  }, []);

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
    const card = cardData.find(card => card.id === cardId);
    if (card) {
      setExchangeRate(card.value);
      setSelectedRateTitle(card.title);
      
      updateBolivarBasedOnDollar(card.value);
    }
  };

  const updateBolivarBasedOnDollar = (rate: number) => {
    const dollars = parseFloat(dollarValue) || 0;
    const newBolivarValue = (dollars * rate).toFixed(2);
    setBolivarValue(newBolivarValue);
  };

  const handleRateChange = (rateTitle: string) => {
    const card = cardData.find(card => card.title === rateTitle);
    if (card) {
      handleCardClick(card.id);
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
      
      <main id="home" className="max-w-7xl mx-auto py-8 px-4 sm:px-6 pt-24">
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
              showCopyButton={true}
            />
          </div>
          
          <ExchangeRateInfo 
            selectedRate={selectedRateTitle}
            onRateChange={handleRateChange}
            rates={cardData}
          />
        </div>
        
        <CardWrapper 
          cardData={cardData}
          selectedCard={selectedCard}
          onCardClick={handleCardClick}
          onImageClick={() => {}} // Empty function as we're not using this anymore
        />
        
        <div id="download-section" className="mt-12">
          <DownloadSection />
        </div>
        
        <div id="advertising-section" className="mt-12">
          <AdvertisingSection />
        </div>

        <div id="pricing-section" className="mt-12">
          {/* Pricing section content will go here */}
        </div>
        
        <div id="contact-section" className="mt-12">
          {/* Contact section content will go here */}
        </div>
      </main>
    </div>
  );
};

export default Index;
