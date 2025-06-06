import React, { useState } from 'react';

const Sidebar = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or email marketing API (e.g. Mailchimp)
    console.log('Subscribe email:', email);
    setSubmitted(true);
  };

  return (
    <aside style={{ width: '300px', marginLeft: '20px' }}>
      <div>
        <h3>Subscribe to BEF News Alert</h3>
        {submitted ? (
          <p>Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>In the Press</h3>
        <div className="press-logos-carousel">
          {/* Replace with real logos and a carousel library */}
          <img src="/logos/logo1.png" alt="Logo 1" style={{ width: '80px', margin: '10px' }} />
          <img src="/logos/logo2.png" alt="Logo 2" style={{ width: '80px', margin: '10px' }} />
          <img src="/logos/logo3.png" alt="Logo 3" style={{ width: '80px', margin: '10px' }} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
