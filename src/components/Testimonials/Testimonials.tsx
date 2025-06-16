import React, { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioItems } from './SlideData';
import NavigationDots from './NavigationDots';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const totalSlides = portfolioItems.length;

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = portfolioItems.map(item => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = item.imageUrl;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false); // Changed to resolve(false) instead of reject
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        // This catch block should no longer be reached since we're not rejecting anymore
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [currentSlide, goToSlide, totalSlides]);

  useEffect(() => {
    if (!isLoading) {
      intervalRef.current = window.setInterval(nextSlide, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, isLoading]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    goToSlide(index);
    intervalRef.current = window.setInterval(nextSlide, 5000);
  };

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
          
          <NavigationDots
            total={totalSlides}
            active={currentSlide}
            onClick={handleDotClick}
          />
        </>
      )}
    </div>
  );
};

export default Testimonials;