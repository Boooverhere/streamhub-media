import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#2563EB"/>
            <path d="M7 15h10v-2H7v2zm0-4h10V9H7v2z" fill="#fff"/>
          </svg>
          <span>StreamHub Media</span>
        </div>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link className="btn" to="/checkout">Get Access</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;