import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'News', path: '/news' },
    { name: 'Join', path: '/join', isCta: true }
  ];

  return (
    <nav className="navbar" style={{
      backgroundColor: '#1e3a8a',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo/Brand */}
        <div style={{
          color: 'white',
          fontWeight: '700',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'scale(1.05)'
          }
        }}>
          BEF
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }} className="desktop-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: item.isCta ? '#3b82f6' : 'transparent',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: hoveredItem === item.name ? '100%' : '0',
                  height: '2px',
                  backgroundColor: '#bfdbfe',
                  transition: 'width 0.3s ease'
                },
                ':hover': {
                  backgroundColor: item.isCta ? '#2563eb' : 'rgba(191, 219, 254, 0.1)',
                  transform: item.isCta ? 'translateY(-2px)' : 'none',
                  boxShadow: item.isCta ? '0 4px 8px rgba(37, 99, 235, 0.3)' : 'none'
                }
              }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {!item.isCta && (
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: hoveredItem === item.name ? '100%' : '0',
                  height: '2px',
                  backgroundColor: '#bfdbfe',
                  transition: 'width 0.3s ease'
                }} />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block'
            },
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.1)',
              color: '#bfdbfe'
            }
          }}
          className="mobile-menu-button"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: '#1e3a8a',
          position: 'absolute',
          top: '70px',
          left: '0',
          right: '0',
          zIndex: '1000',
          padding: '1rem 2rem',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
          animation: 'slideDown 0.3s ease-out'
        }} className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                margin: '0.5rem 0',
                borderRadius: '4px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backgroundColor: item.isCta ? '#3b82f6' : 'transparent',
                ':hover': {
                  backgroundColor: item.isCta ? '#2563eb' : 'rgba(191, 219, 254, 0.2)',
                  transform: item.isCta ? 'translateX(5px)' : 'none'
                }
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Add this to your Navbar.css */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;