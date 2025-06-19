import React, { useState, useEffect, useRef, useCallback } from 'react';
import { slides } from './SlideData';
import NavigationDots from './NavigationDots';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [currentSlide, goToSlide, totalSlides]);

  // Setup and cleanup interval for auto-sliding
  useEffect(() => {
    intervalRef.current = window.setInterval(nextSlide, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  // Reset interval when slide changes manually
  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    goToSlide(index);
    intervalRef.current = window.setInterval(nextSlide, 5000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={import.meta.env.BASE_URL + slide.imageUrl}
              alt={slide.altText}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <HeroContent />

      {/* Navigation Dots */}
      <NavigationDots 
        total={totalSlides}
        active={currentSlide}
        onClick={handleDotClick}
      />
    </section>
  );
};

export default Hero;