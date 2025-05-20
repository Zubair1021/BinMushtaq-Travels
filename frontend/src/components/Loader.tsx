import React, { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 z-50 flex flex-col items-center justify-center">
      <div className="relative w-full h-32 overflow-hidden mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <Plane 
            className="text-white animate-plane h-16 w-16 transform -rotate-12" 
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-amber-400 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="h-1.5 w-60 bg-blue-700 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 animate-loadingBar"></div>
        </div>
        <p className="mt-4 text-white font-light text-lg tracking-wider">
          Preparing your journey...
        </p>
      </div>
    </div>
  );
};

export default Loader;