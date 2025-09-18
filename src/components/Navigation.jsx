import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = ({ currentSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (section) => {
    onSectionChange(section);
    closeMenu();
  };

  return (
    <nav className="navigation unselectable">
      {/* Burger Menu Button */}
      <button 
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="menu-text">{isOpen ? 'X' : 'E'}</span>
      </button>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('About'); }} className={currentSection === 'About' ? 'active' : ''}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Projects'); }} className={currentSection === 'Projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Products'); }} className={currentSection === 'Products' ? 'active' : ''}>Products</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Services'); }} className={currentSection === 'Services' ? 'active' : ''}>Services</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Contact'); }} className={currentSection === 'Contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
