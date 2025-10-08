import React from 'react';
import { FiMenu } from 'react-icons/fi'; // Hamburger icon
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">ZERODHA</div>
      <nav className="nav-links">
        <a href="#">Signup</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </nav>
      <div className="menu-icon">
        <FiMenu size={24} />
      </div>
    </header>
  );
};

export default Header;
