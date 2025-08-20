import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to='/Home' className="footer-logo">
            <img src={Logo} alt="Logo" className="logo-img" />
            <h1 className="logo-text">Furni</h1>
          </Link>
          <p className="footer-address">
            400 University Drive Suite 200 Coral<br />
            Gables, FL 33134 USA
          </p>
        </div>

        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ShopHero">Shop</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-help">
          <h3>Help</h3>
          <ul>
            <li><Link to="/">Payment Options</Link></li>
            <li><Link to="/">Returns</Link></li>
            <li><Link to="/">Privacy Policies</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
