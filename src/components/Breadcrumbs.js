import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '5px' }}>
        <li><Link to="/">Home</Link></li>
        {pathnames.map((name, idx) => {
          const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
          return (
            <li key={idx}>
              <span> &gt; </span>
              <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
