import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav: React.FC = () => {
  return (
    <header className="nav">
      <div className="nav__links">
        <Link className="nav__links__page" to="/">
          Home
        </Link>
        <Link className="nav__links__page" to="/about">
          About
        </Link>
        <Link className="nav__links__page" to="/features">
          Features
        </Link>
        <Link className="nav__links__page" to="/customers">
          Customers
        </Link>
        <Link className="nav__links__page" to="/pricing">
          Pricing
        </Link>
      </div>
    </header>
  );
};

export default Nav;
