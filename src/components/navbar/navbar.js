import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><a href="#Home">MyPortfolio</a></div>
      <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
