import React from 'react';
import { GrAchievement } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { FiCheckCircle } from 'react-icons/fi';
import { FcCustomerSupport } from "react-icons/fc";
import Featur from './UI/Featur';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-wrapper">
        <Link to="#" className="feature-link">
          <Featur p="Crafted from top materials" span="High Quality" icon={<GrAchievement />} />
        </Link>

        <Link to="#" className="feature-link">
          <Featur p="Over two years" span="Warranty Protection" icon={<FiCheckCircle />} />
        </Link>

        <Link to="#" className="feature-link">
          <Featur p="Fast delivery" span="Quick Shipping" icon={<FaShippingFast />} />
        </Link>

        <Link to="#" className="feature-link">
          <Featur p="Dedicated Support" span="24/7 Support" icon={<FcCustomerSupport />} />
        </Link>
      </div>
    </div>
  );
};

export default Features;
