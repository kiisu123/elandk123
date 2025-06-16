import React from 'react';

const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 transition-opacity duration-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-24 h-24">
          {/* Company Name */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">El&K</span>
          </div>
          
          {/* Spinning Circle */}
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"
            style={{ animationDuration: '1s' }}
          />
          
          {/* Clock Hand */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              animation: 'clockRotate 2s linear infinite'
            }}
          >
            <div className="w-1 h-12 bg-amber-500 rounded-full origin-bottom transform -translate-y-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;