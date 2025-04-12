
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const UpdateSection: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const updateDate = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    setDate(formattedDate);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    updateDate();
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  useEffect(() => {
    updateDate();
    // Update time every minute
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-gray-600">
        <button 
          onClick={handleRefresh}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Refresh"
        >
          <RefreshCw 
            size={18} 
            className={`${isRefreshing ? 'animate-spin' : ''}`} 
          />
        </button>
        <span>Última actualización:</span>
      </div>
      <div className="text-tasaGreen font-medium ml-6">
        {date}
      </div>
    </div>
  );
};

export default UpdateSection;
