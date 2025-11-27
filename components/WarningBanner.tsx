import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningBanner: React.FC = () => {
  return (
    <div className="w-full bg-yellow-500/10 border-b border-yellow-500/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-yellow-200">
        <AlertTriangle className="w-5 h-5 text-yellow-500 animate-pulse" />
        <p className="text-sm md:text-base font-medium text-center">
          <span className="font-bold text-yellow-400">Early Stage Warning:</span> Lumira engines are in active development. Expect bugs, errors, and experimental behavior. Use with patience.
        </p>
      </div>
    </div>
  );
};

export default WarningBanner;