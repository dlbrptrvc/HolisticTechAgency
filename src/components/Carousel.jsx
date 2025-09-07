import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel slides using generated images
  const slides = [
    {
      id: 1,
      image: '/primary_carousel.jpg',
      name: 'Primary'
    },
    {
      id: 2,
      image: '/secondary_carousel.jpg',
      name: 'Secondary'
    },
    {
      id: 3,
      image: '/tertiary_carousel.jpg',
      name: 'Tertiary'
    },
    {
      id: 4,
      image: '/accent_carousel.jpg',
      name: 'Accent'
    }
  ];

  // Auto-advance slides every 8 seconds (slower)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel unselectable">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={slide.name}
              className="slide-image"
            />
          </div>
        ))}
        
        {/* Dots indicator */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
