"use client";
import React, { useState } from 'react';
import './navbar.css'; 

interface NavbarProps {
  onLinkChange: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkChange }) => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    onLinkChange(link);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {['home', 'members', 'projects', 'achievements','events'].map(link => (
          <a
            key={link}
            href="#"
            className={`link ${activeLink === link ? 'activeLink' : ''}`}
            onClick={() => handleLinkClick(link)} 
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
