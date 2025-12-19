import React, { useState, useEffect, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Navbar.css';
// Import the logo (Vite will optimize it automatically)
import logo from '../assets/Casanomads.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/how-to', label: 'How To', icon: '📹' },
    { path: '/experience', label: 'Whats Around', icon: '🌆' },
    { path: '/emergency', label: 'Emergency Contacts', icon: '🚨' },
    { path: '/contact', label: 'Contact Us', icon: '📞' }
  ];

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document.body.classList.toggle('menu-open', newIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => closeMenu(), [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove('menu-open');
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={menuRef}>
      <div className="navbar-container">
        {/* LOGO */}
        <NavLink to="/" className="brand-link">
          <img src={logo} alt="Casa Nomads" className="brand-logo" />
        </NavLink>

        <button
          className={`burger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;