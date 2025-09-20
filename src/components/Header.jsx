import React from 'react';
import '../styles/Header.css';

const Header = ({ onSectionChange, onCloseMenu }) => {
  const handleHeaderClick = () => {
    onSectionChange('About');
    onCloseMenu();
  };

  return (
    <div>
      <header className="header header-aovel unselectable" onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>
        <span className="header-word">HOLISTIC</span>
        <span className="header-word">TECH</span>
        <span className="header-word">AGENCY</span>
      </header>
    </div>
  );
};

export default Header;
