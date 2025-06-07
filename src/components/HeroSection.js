import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-section" style={{
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    color: 'white',
    padding: '5rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Animated background elements */}
    <div style={{
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)'
    }}></div>
    <div style={{
      position: 'absolute',
      bottom: '-30px',
      left: '-30px',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)'
    }}></div>

    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        lineHeight: '1.2',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        Latest Updates from <span style={{ color: '#bfdbfe' }}>BEF</span>
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        opacity: '0.9',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        See what's happening at our Conclaves, Sprints, and in media coverage.
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#1e3a8a',
          border: 'none',
          borderRadius: '50px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
          }
        }}>
          Explore Updates
        </button>
        <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'transparent',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateY(-2px)'
          }
        }}>
          Watch Video
        </button>
      </div>
    </div>
  </div>
);

export default HeroSection;