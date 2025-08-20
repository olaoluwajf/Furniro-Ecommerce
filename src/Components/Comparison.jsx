import Hero from './Hero';
import Logo from '../assets/logo.png';
import img from '../assets/Asgaard sofa 3.png';
import Features from './Features';
import { FaRulerVertical } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Comparison.css';

const products = [
  {
    name: 'Asgaard Sofa',
    price: 'Rs. 250,000.00',
    rating: 4.7,
    reviews: 204,
    icon: <FaRulerVertical />,
    img: img,
  },
  {
    name: 'Outdoor Sofa Set',
    price: 'Rs. 224,000.00',
    rating: 4.2,
    reviews: 145,
    icon: <RiArrowUpSLine />,
    img: img,
  },
];

const Comparison = () => {
  return (
    <div className="comparison-container">
      <Hero PageName="Comparison" img={Logo} />

      <div className="comparison-main">
        <div className="product-card info-card">
          <h1>Go to product page for more products</h1>
          <Link className="view-more" to="#">View more</Link>
        </div>

        {products.map((productItem, idx) => (
          <div className="product-card" key={idx}>
            <img src={productItem.img} alt={productItem.name} />
            <div className="product-details">
              <h1>{productItem.name}</h1>
              <h2>{productItem.price}</h2>
              <div className="rating">
                {productItem.rating} <span>star</span> {productItem.icon}{' '}
                <span>{productItem.reviews} Review</span>
              </div>
            </div>
          </div>
        ))}

        <div className="product-card product-select">
          <h1>Add a Product</h1>
          <select>
            <option>Choose a Product</option>
          </select>
        </div>
      </div>

      <hr />

      <div className="detail-info">
        {[...Array(3)].map((_, idx) => (
          <div className="detail-column" key={idx}>
            <h1>General</h1>
            <h2>Sales Package</h2>
            <h2>Model Number</h2>
            <h2>Secondary Material</h2>
            <h2>Configuration</h2>
            <h2>Upholstery Material</h2>
            <h2>Upholstery Color</h2>

            <h1>Product</h1>
            <h2>Filling Material</h2>
            <h2>Finish Type</h2>
            <h2>Adjustable Headrest</h2>
            <h2>Maximum Load Capacity</h2>
            <h2>Origin of Manufacture</h2>

            <h1>Dimensions</h1>
            <h2>Width</h2>
            <h2>Height</h2>
            <h2>Depth</h2>
            <h2>Weight</h2>
            <h2>Seat Height</h2>
            <h2>Leg Height</h2>

            <h1>Warranty</h1>
            <h2>Warranty Summary</h2>
            <h2>Warranty Service Type</h2>
            <h2>Covered in Warranty</h2>
            <h2>Not Covered in Warranty</h2>
            <h2>Domestic Warranty</h2>

            {idx > 0 && <Button name="Add to Cart" />}
          </div>
        ))}
      </div>

      <Features />
    </div>
  );
};

export default Comparison;
