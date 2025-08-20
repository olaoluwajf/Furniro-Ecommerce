import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BgCover from '../assets/Rectangle1.png';
import './Hero.css';

const Hero = ({ PageName, img }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={img} alt="Logo" />
        </div>
        <h1 className="hero-title">{PageName}</h1>
        <div className="hero-breadcrumb">
          <Link to="/Home" className="breadcrumb-link">Home</Link>
          <FaGreaterThan className="breadcrumb-icon" />
          <span className="breadcrumb-current">{PageName}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
