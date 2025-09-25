import React, { useEffect, useRef, useState } from 'react';
import '../styles/Content.css';

const DynamicHeading = ({ text, className }) => {
  const headingRef = useRef(null);
  const [fontSize, setFontSize] = useState('3rem');

  useEffect(() => {
    const calculateFontSize = () => {
      if (!headingRef.current) return;

      const container = headingRef.current.parentElement;
      const containerWidth = container.offsetWidth;
      
      // Create a temporary element to measure text width
      const tempElement = document.createElement('span');
      tempElement.style.fontSize = '1rem';
      tempElement.style.fontFamily = getComputedStyle(headingRef.current).fontFamily;
      tempElement.style.fontWeight = getComputedStyle(headingRef.current).fontWeight;
      tempElement.style.letterSpacing = '2px';
      tempElement.textContent = text;
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      
      document.body.appendChild(tempElement);
      const textWidth = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      
      // Calculate font size to fill the container width
      const scaleFactor = containerWidth / textWidth;
      const newFontSize = Math.max(1.5, Math.min(6, scaleFactor * 1.1)); // Min 1.5rem, Max 6rem, with 10% increase
      setFontSize(`${newFontSize}rem`);
    };

    calculateFontSize();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateFontSize);
    return () => window.removeEventListener('resize', calculateFontSize);
  }, [text]);

  return (
    <h2 
      ref={headingRef}
      className={className}
      style={{ 
        fontSize: fontSize
      }}
    >
      {text}
    </h2>
  );
};


const Content = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'Home':
        return (
          <div className="home-content">
            <div className="home-column-1">

              <div className="home-about-text">
                <span className="home-keyword-primary" style={{fontSize: '2rem'}}>THE AGENCY</span>
                <p>was founded in 2025 with the intention of providing digital services, including</p>
                <span className="home-keyword-tertiary" style={{fontSize: '1.4rem', display: 'block'}}>FULL-STACK APP<br/>DEVELOPMENT</span>
                <p>and</p>
                <span className="home-keyword-primary" style={{fontSize: '2.5rem', display: 'block'}}>QA</span>
                <p>as well as</p>
                <span className="home-keyword-primary" style={{fontSize: '1.3rem', display: 'block'}}>PROJECT MANAGEMENT</span>
                <p>and</p>
                <span className="home-keyword-tertiary" style={{fontSize: '1.4rem', display: 'block'}}>DIGITAL CONSULTING</span>
                <p>The idea was to foster a relationship towards work, projects, and digital products which would encompass these</p>
                <span className="home-keyword-primary-smaller" style={{fontSize: '0.9rem', display: 'block'}}>THREE IMPORTANT PRINCIPLES:</span>
              </div>
            </div>
            <div className="home-column-2">
                <p>&nbsp;</p>
                <DynamicHeading text="Attention to Detail" className="home-principle-heading" />
              <p className="home-principle-text">In an age where an increasing amount of work is outsourced to AI or non-English-speaking countries, there is an increasing need for detail-oriented work. For an app to be a successful product and provide the user with a seamless experience, it has to be designed with each and every aspect of it reflecting the whole. Gaps and bumps in the design or functionality make users wary of using the product and, with time, drop the overall support for it. At Holistic Tech each part of the software is taken care of as a thing in itself, and special care is taken to prevent and remove issues that would signal wrong practices to end users, such as low-effort coding, AI coding, cheap outsourced development teams, irresponsiveness, or rashness in complying with schedules. When all of this is circumvented, a development team can truly start to focus on the details of the product.</p>
              
              <DynamicHeading text="The Big Picture Perspective" className="home-principle-heading" />
              <p className="home-principle-text">It is not enough to develop a product that matches the owner's vision. We are here to make sure that vision is a sound one, and that the product developed will have a future on the market once it is ready to be released. Therefore, we manage our projects and products well before any real engineering takes place and stay with the product during each phase of its lifecycle. During development our team doing the hands-on work truly understands the product architecture and the plans and goals that the app needs to fulfill, which helps them do more meaningful and higher-quality work. This also helps in setting up the product and the team for future scaling.</p>
              
              <DynamicHeading text="Ethical Business" className="home-principle-heading" />
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