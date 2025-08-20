import React from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="mobile-menu">
      {/* Navigation Links */}
      <div className="mobile-links">
        <Link to="/" className="mobile-link">Home</Link>
        <Link to="/ShopHero" className="mobile-link">Shop</Link>
        <Link to="/About" className="mobile-link">About</Link>
        <Link to="/Contact" className="mobile-link">Contact</Link>
      </div>

      {/* Icon Links */}
      <div className="mobile-icons">
        <Link to="#" className="mobile-icon"><FiSearch /></Link>
        <Link to="#" className="mobile-icon"><FiUser /></Link>
        <Link to="#" className="mobile-icon"><FiHeart /></Link>
        <Link to="#" className="mobile-icon"><FiShoppingCart /></Link>
      </div>
    </div>
  );
};

export default Menu;
