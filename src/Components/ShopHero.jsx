import { FaGreaterThan } from 'react-icons/fa';
import Products from './Products';
import Shop from './Shop';
import NButton from './UI/NButton';
import Features from './Features';
import { Link } from 'react-router-dom';
import './ShopHero.css';

const ShopHero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="shophero-hero">
        <h1 className="shophero-title">Shop</h1>
        <div className="shophero-breadcrumb">
          <div className="shophero-breadcrumb-left">
            <Link to="/Home" className="shophero-breadcrumb-link">
              Home
            </Link>
            <FaGreaterThan className="shophero-breadcrumb-icon" />
          </div>
          <span className="shophero-breadcrumb-current">Shop</span>
        </div>
      </div>

      {/* Shop Filter / Sorting */}
      <Shop />

      {/* Products */}
      <div className="shophero-products">
        <Products />
        <Products />
        <Products />
        <Products />

        <div className="shophero-pagination">
          <NButton name="1" className="active" />
          <NButton name="2" />
          <NButton name="3" />
          <div onClick={() => console.log("Next clicked")}>
            <NButton name="Next" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </div>
  );
};

export default ShopHero;
