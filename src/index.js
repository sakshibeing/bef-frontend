import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional: for performance tracking

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance (can be removed if not needed)
reportWebVitals();
