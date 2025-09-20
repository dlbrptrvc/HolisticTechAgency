import React, { useState, useEffect } from 'react';
import '../styles/SwipeableImages.css';

const SwipeableImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDots, setShowDots] = useState(false);
  
  // Images using optimized responsive images
  const images = [
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

  // Hide dots 2 seconds after last interaction
  useEffect(() => {
    if (showDots) {
      const timer = setTimeout(() => {
        setShowDots(false);
      }, 2000); // Hide dots after 2 seconds of no interaction

      return () => clearTimeout(timer);
    }
  }, [showDots]);

  const goToImage = (index) => {
    setCurrentIndex(index);
    setShowDots(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setShowDots(true);
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
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setShowDots(true);
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
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    
    setIsDragging(false);
  };

  const handleClick = () => {
    setShowDots(true);
  };

  return (
    <div className="swipeable-images unselectable">
      <div 
        className="images-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className="images-track"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="image-slide">
              <img 
                src={isMobile ? image.mobileImage : image.desktopImage} 
                alt={image.name}
                className="slide-image"
              />
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className={`images-dots ${showDots ? 'visible' : ''}`}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`image-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeableImages;
