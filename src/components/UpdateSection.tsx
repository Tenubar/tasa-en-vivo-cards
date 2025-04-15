
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const UpdateSection: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const updateDate = (newDateString?: string) => {
    // const formattedDate = newDateString || new Date().toLocaleDateString('es-ES', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // });
    const formattedDate = newDateString;
    setDate(formattedDate);
};

const handleRefresh = () => {
    setIsRefreshing(true);
    // updateDate();
    // Simulate refresh delay
    setTimeout(() => {
        setIsRefreshing(false);
    }, 500);
};

  useEffect(() => {
    // Fetch date updates from the EventSource
    const eventSource3 = new EventSource(import.meta.env.VITE_API_FECHA);

    eventSource3.onmessage = (event) => {
        const messageData = event.data; // e.g., "martes, 15 abr. 2025, 01:20 PM"
        const cleanDate = messageData.replace(/"/g, ''); // Remove quotation marks if needed
        updateDate(cleanDate); // Update date with the received message
    };

    eventSource3.onerror = (error) => {
        console.error("EventSource error:", error);
        eventSource3.close();
    };

    // Call updateDate initially
    updateDate();

    // Update time every minute
    const interval = setInterval(updateDate, 60000);

    // Cleanup function
    return () => {
        clearInterval(interval);
        eventSource3.close(); // Close the EventSource on component unmount
    };
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
