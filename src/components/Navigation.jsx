import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ currentSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    onSectionChange(section);
    closeMenu();
  };

  return (
    <div className="navigation-wrapper">
      <nav className="navigation unselectable">
        {/* Burger Menu Button */}
        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-text">{isMenuOpen ? 'X' : 'E'}</span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }} className={currentSection === 'Home' ? 'active' : ''}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Projects'); }} className={currentSection === 'Projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Products'); }} className={currentSection === 'Products' ? 'active' : ''}>Products</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Services'); }} className={currentSection === 'Services' ? 'active' : ''}>Services</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Contact'); }} className={currentSection === 'Contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
