import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SwipeableImages from './components/SwipeableImages';
import Content from './components/Content';
import './styles/App.css';

export default function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    if (section === 'About') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/#${section.toLowerCase()}`);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ['projects', 'products', 'services', 'contact'].includes(hash)) {
        const section = hash.charAt(0).toUpperCase() + hash.slice(1);
        setCurrentSection(section);
      } else {
        setCurrentSection('About');
      }
    };

    // Handle initial load
    handlePopState();

    // Listen for browser back/forward buttons
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="app">
      <Header onSectionChange={handleSectionChange} />
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      <SwipeableImages />
      <Content section={currentSection} />
    </div>
  );
}
