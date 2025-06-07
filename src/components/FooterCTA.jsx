const FooterCTA = () => (
  <footer style={{
    backgroundColor: '#1e3a8a', // Dark blue to match sidebar theme
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '3px solid #3b82f6', // Accent blue border
    boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)'
  }}>
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)'
    }}>
      <h3 style={{
        margin: '0 0 15px',
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#fff'
      }}>
        Join Our Media Network
      </h3>
      
      <p style={{
        margin: '0 auto 20px',
        maxWidth: '600px',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>
        Have news to share? We're always looking for compelling stories and partnerships.
      </p>
      
      <a 
        href="mailto:press@bef.org" 
        style={{
          display: 'inline-block',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#2563eb';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#3b82f6';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        Send Press Materials
      </a>
      
      <p style={{
        margin: '20px auto 0',
        fontSize: '0.8rem',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '600px'
      }}>
        For media inquiries only. Response within 24-48 hours.
      </p>
    </div>
  </footer>
);

export default FooterCTA;