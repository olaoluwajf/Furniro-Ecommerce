import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Menu from './Menu';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Logo" className="logo-img" />
            <h1 className="logo-text">Furni</h1>
          </Link>
        </div>

        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-icons-desktop">
          <Link to="#"><FiUser className="icon"/></Link>
          <Link to="#"><FiSearch className="icon"/></Link>
          <Link to="#"><FiHeart className="icon"/></Link>
          <Link to="/cart"><FiShoppingCart className="icon"/></Link>
        </div>

        <div className="header-mobile-toggle">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
          </button>
        </div>
      </div>

      {isMenuOpen && <Menu />}
    </header>
  );
};

export default Header;
