import React, { useState } from 'react';

const Sidebar = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or email marketing API (e.g. Mailchimp)
    console.log('Subscribe email:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <aside style={{
      width: '300px',
      marginLeft: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Subscribe Section */}
      <div style={{
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '30px'
      }}>
        <h3 style={{
          color: '#1e3a8a',
          marginTop: '0',
          fontSize: '1.2rem',
          fontWeight: '600',
          borderBottom: '2px solid #3b82f6',
          paddingBottom: '10px'
        }}>
          Subscribe to BEF News Alert
        </h3>
        
        {submitted ? (
          <div style={{
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            <p style={{ margin: '0' }}>Thank you for subscribing!</p>
            <p style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>You'll receive our latest updates soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '10px',
                border: '1px solid #bfdbfe',
                borderRadius: '6px',
                fontSize: '0.9rem',
                boxSizing: 'border-box',
                transition: 'border 0.3s',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                fontSize: '0.9rem'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              Subscribe Now
            </button>
            <p style={{
              fontSize: '0.8rem',
              color: '#64748b',
              marginTop: '10px',
              textAlign: 'center'
            }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>

      {/* Press Section */}
      <div style={{
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          color: '#1e3a8a',
          marginTop: '0',
          fontSize: '1.2rem',
          fontWeight: '600',
          borderBottom: '2px solid #3b82f6',
          paddingBottom: '10px',
          marginBottom: '15px'
        }}>
          In the Press
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <img 
            src="/Logo.jpg" 
            alt="Press Logo 1" 
            style={{ 
              width: '120px', 
              height: 'auto',
              filter: 'grayscale(30%)',
              opacity: '0.8',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.filter = 'grayscale(0%)';
              e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.target.style.filter = 'grayscale(30%)';
              e.target.style.opacity = '0.8';
            }}
          />
         
         
        </div>
        <p style={{
          textAlign: 'center',
          marginTop: '15px',
          fontSize: '0.8rem',
          color: '#64748b',
          fontStyle: 'italic'
        }}>
          Featured in leading publications worldwide
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;