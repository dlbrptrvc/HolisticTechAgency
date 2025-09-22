import React, { useEffect, useRef, useState } from 'react';
import '../styles/Content.css';

const StretchedText = ({ text, className }) => {
  const textRef = useRef(null);
  const [letterSpacing, setLetterSpacing] = useState(0);

  useEffect(() => {
    const calculateLetterSpacing = () => {
      if (!textRef.current) return;

      const container = textRef.current.parentElement;
      const containerWidth = container.offsetWidth;
      
      // Create a temporary element to measure text width
      const tempElement = document.createElement('span');
      const originalFontSize = getComputedStyle(textRef.current).fontSize;
      const fontSizeValue = parseFloat(originalFontSize);
      const smallerFontSize = `${fontSizeValue * 0.95}px`; // Make letters 5% smaller
      
      tempElement.style.fontSize = smallerFontSize;
      tempElement.style.fontFamily = getComputedStyle(textRef.current).fontFamily;
      tempElement.style.fontWeight = getComputedStyle(textRef.current).fontWeight;
      tempElement.style.letterSpacing = '0px';
      tempElement.textContent = text;
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      
      document.body.appendChild(tempElement);
      const textWidth = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      
      // Calculate required letter spacing with smaller font (eased down)
      const totalSpacing = containerWidth - textWidth;
      const spacesNeeded = text.length - 1;
      const spacingPerLetter = spacesNeeded > 0 ? totalSpacing / spacesNeeded : 0;
      
      // Ease down the spacing by 30% to make it less aggressive
      setLetterSpacing(Math.max(0, spacingPerLetter * 0.7));
    };

    calculateLetterSpacing();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateLetterSpacing);
    return () => window.removeEventListener('resize', calculateLetterSpacing);
  }, [text]);

  return (
    <span 
      ref={textRef}
      className={className}
      style={{ 
        letterSpacing: `${letterSpacing}px`,
        fontSize: '95%'
      }}
    >
      {text}
    </span>
  );
};

const Content = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'Home':
        return (
          <div className="home-content">
            <div className="home-column-1">

              <p className="home-about-text"><span className="home-keyword-primary">The Agency</span> was founded in 2025 with the intention of providing digital services, including <span className="home-keyword-tertiary">full-stack app development</span> and <span className="home-keyword-primary">QA</span>, as well as <span className="home-keyword-primary">project management</span> and <span className="home-keyword-tertiary">digital consulting</span>. The idea was to foster a relationship towards work, projects, and digital products which would encompass these <span className="home-keyword-primary">three important principles</span>:</p>
            </div>
            <div className="home-column-2">
                <h2 className="home-principle-heading">
                  <StretchedText text="Attention to Detail" className="stretched-text" />
                </h2>
              <p className="home-principle-text">In an age where an increasing amount of work is outsourced to AI or non-English-speaking countries, there is an increasing need for detail-oriented work. For an app to be a <span className="home-principle-highlight-green">successful product</span> and provide the user with a <span className="home-principle-highlight-orange">seamless experience</span>, it has to be designed with each and every aspect of it reflecting the whole. Gaps and bumps in the design or functionality make users wary of using the product and, with time, drop the overall support for it. At <span className="home-principle-highlight-green">Holistic Tech</span> each part of the software is taken care of as a thing in itself, and special care is taken to prevent and remove issues that would signal wrong practices to end users, such as low-effort coding, AI coding, cheap outsourced development teams, irresponsiveness, or rashness in complying with schedules. When all of this is circumvented, a development team can truly start to focus on the details of the product.</p>
              
              <h4>The Big Picture Perspective</h4>
              <p className="home-principle-text">It is not enough to develop a product that matches the owner's vision. We are here to make sure that vision is a sound one, and that the product developed will have a future on the market once it is ready to be released. Therefore, we manage our projects and products well before any real engineering takes place and stay with the product during each phase of its lifecycle. During development our team doing the hands-on work truly understands the product architecture and the plans and goals that the app needs to fulfill, which helps them do more meaningful and higher-quality work. This also helps in setting up the product and the team for future scaling.</p>
              
              <h4>Ethical Business</h4>
              <p className="home-principle-text-last">We also make sure that the work we provide is highly ethical with regard to the environment, and human and animal rights. We like to see our work, and the way we delegate and do work, as a force for good in the world. We in no way support any form of involuntary oppression, exploitation, or non-ethical behavior, and choose our work and associates based on those qualities as well as their expertise.</p>
            </div>
          </div>
        );
      
      case 'Services':
        return (
          <div>
            <h3>Full-Stack Development (Web & Mobile)</h3>
            <p style={{ marginBottom: '1rem' }}>We design and build scalable applications, covering frontend, backend, databases, and deployment. From responsive web platforms to mobile apps, we deliver solutions that are reliable, fast, and ready to grow.</p>
            
            <h3>Quality Assurance</h3>
            <p style={{ marginBottom: '1rem' }}>We test every feature to ensure your product is stable, secure, and user-friendly. Through manual and automated testing, we catch issues early and guarantee smooth performance across devices and platforms.</p>
            
            <h3>Project Management</h3>
            <p>We manage the full product lifecycle — from planning to launch. Using agile methods, clear reporting, and risk control, we keep projects on track, on budget, and aligned with your goals.</p>
          </div>
        );
      
      case 'Contact':
        return (
          <div>
            <h3>Get In Touch</h3>
            <p style={{ marginBottom: '1rem' }}>Ready to start your digital project? Contact us to discuss your needs and how we can help bring your vision to life with our comprehensive development and project management services.</p>
            
            <h3>Why Choose Us</h3>
            <p>We combine technical expertise with ethical business practices. Our attention to detail, big picture perspective, and commitment to quality ensure your project succeeds from concept to launch and beyond.</p>
          </div>
        );
      
      default:
        return <p>Content for {section} section coming soon.</p>;
    }
  };

  return (
    <div className="content">
      <div style={{ marginBottom: '2rem' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;