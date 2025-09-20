import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Carousel slides using optimized responsive images
  const slides = [
    {
      id: 1,
      image: '/16355088121_ca168356a2_o.jpg',
      desktopImage: '/desktop/16355088121_ca168356a2_o_desktop.jpg',
      mobileImage: '/mobile/16355088121_ca168356a2_o_mobile.jpg',
      name: 'Photo 1'
    },
    {
      id: 2,
      image: '/432512_b37afa825b_o.jpg',
      desktopImage: '/desktop/432512_b37afa825b_o_desktop.jpg',
      mobileImage: '/mobile/432512_b37afa825b_o_mobile.jpg',
      name: 'Photo 2'
    },
    {
      id: 3,
      image: '/abstract-black-and-white-white-photography-city-urban-271384-pxhere.com.jpg',
      desktopImage: '/desktop/abstract-black-and-white-white-photography-city-urban-271384-pxhere.com_desktop.jpg',
      mobileImage: '/mobile/abstract-black-and-white-white-photography-city-urban-271384-pxhere.com_mobile.jpg',
      name: 'Photo 3'
    },
    {
      id: 4,
      image: '/architecture-abstract-free-stock-photo-2929.jpg',
      desktopImage: '/desktop/architecture-abstract-free-stock-photo-2929_desktop.jpg',
      mobileImage: '/mobile/architecture-abstract-free-stock-photo-2929_mobile.jpg',
      name: 'Photo 4'
    }
  ];

  // Handle window resize for responsive images
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slides every 5 seconds, reset when manually changed
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer when currentSlide changes

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !mouseStart || !mouseEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    
    setIsDragging(false);
  };

  return (
    <div className="carousel unselectable">
      <div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={isMobile ? slide.mobileImage : slide.desktopImage} 
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
