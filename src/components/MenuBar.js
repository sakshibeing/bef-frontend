import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <nav>
    <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/">News</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default MenuBar;
