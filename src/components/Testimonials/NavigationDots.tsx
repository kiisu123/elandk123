import React from 'react';

interface NavigationDotsProps {
  total: number;
  active: number;
  onClick: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ total, active, onClick }) => {
  return (
    <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            active === index 
              ? 'bg-amber-500 scale-110' 
              : 'bg-gray-300 hover:bg-amber-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;