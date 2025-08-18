import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (page) => {
    setIsOpen(false);
    onNavigate(page);
  };

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
    // If we're not on the home page, navigate home first
    if (location.pathname !== '/') {
      onNavigate('home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2 onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            Alexander Bloom
          </h2>
        </div>
       
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <button 
            onClick={() => handleNavClick('home')}
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </button>
          <button onClick={() => handleSectionClick('about')}>
            About
          </button>
          <button onClick={() => handleSectionClick('skills')}>
            Skills
          </button>
          <button onClick={() => handleSectionClick('projects')}>
            Projects
          </button>
          <button onClick={() => handleSectionClick('contact')}>
            Contact
          </button>
        </div>
        
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;