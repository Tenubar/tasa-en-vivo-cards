
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible';

interface PricingOption {
  id: string;
  price: number;
  title: string;
  features: string[];
  isPopular?: boolean;
}

const AdvertisingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const monthlyOptions: PricingOption[] = [
    {
      id: 'basic',
      price: 20,
      title: 'Básico',
      features: ['Banner en la página principal', 'Visibilidad por 30 días', 'Reportes básicos']
    },
    {
      id: 'standard',
      price: 40,
      title: 'Estándar',
      isPopular: true,
      features: ['Banner en todas las páginas', 'Visibilidad prioritaria', 'Reportes detallados', 'Soporte 24/7']
    },
    {
      id: 'premium',
      price: 60,
      title: 'Premium',
      features: ['Banner premium', 'Máxima visibilidad', 'Analíticas avanzadas', 'Soporte dedicado', 'Personalización completa']
    }
  ];
  
  const getPrice = (basePrice: number) => {
    if (billingPeriod === 'annual') {
      // 40% discount for annual
      return (basePrice * 12 * 0.6).toFixed(0);
    }
    return basePrice;
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setIsOpen(true);
  };
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Anuncia tu negocio!</h2>
        
        <div className="flex justify-center mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Advertising Banner" 
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>
        
        <div id="pricing-section" className="flex justify-center gap-2 mb-6">
          <Button 
            variant={billingPeriod === 'monthly' ? 'default' : 'outline'} 
            onClick={() => setBillingPeriod('monthly')}
            className="min-w-28"
          >
            Mensual
          </Button>
          <Button 
            variant={billingPeriod === 'annual' ? 'default' : 'outline'} 
            onClick={() => setBillingPeriod('annual')}
            className="min-w-28"
          >
            Anual (40% desc.)
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {monthlyOptions.map((option) => (
            <div 
              key={option.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all ${
                selectedPlan === option.id 
                  ? 'border-2 border-tasaBlue shadow-md' 
                  : 'hover:shadow-md'
              } ${option.isPopular ? 'relative' : ''}`}
              onClick={() => handlePlanSelect(option.id)}
            >
              {option.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-tasaBlue text-white text-xs px-3 py-1 rounded-full">
                  Más popular
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
              <p className="text-3xl font-bold mb-2">
                ${getPrice(option.price)}
                <span className="text-sm font-normal text-gray-500">
                  /{billingPeriod === 'monthly' ? 'mes' : 'año'}
                </span>
              </p>
              <ul className="space-y-2 mt-4">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 shrink-0 mt-1" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <CollapsibleTrigger asChild>
          <div className="flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              {isOpen ? 'Ocultar contacto' : 'Mostrar contacto'}
              <ChevronDown 
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              />
            </Button>
          </div>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent>
        <div id="contact-section" className="bg-white rounded-xl shadow-sm p-6 mt-2">
          <h3 className="text-xl font-semibold mb-4">Contáctanos para {
            selectedPlan === 'basic' ? 'el plan Básico' : 
            selectedPlan === 'standard' ? 'el plan Estándar' : 
            selectedPlan === 'premium' ? 'el plan Premium' : 'más información'
          }</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tasaBlue"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje:
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tasaBlue"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <Button>Enviar</Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AdvertisingSection;
