import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
