import { FiShare, FiHeart } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';
import './AddToCart.css';

const AddToCart = () => {
  return (
    <div className="addtocart-overlay">
      <button className="addtocart-button">Add to Cart</button>

      <div className="addtocart-actions">
        <button className="addtocart-action">
          <FiShare size={16} />
          <span>Share</span>
        </button>
        <button className="addtocart-action">
          <FaExchangeAlt size={16} />
          <span>Compare</span>
        </button>
        <button className="addtocart-action">
          <FiHeart size={16} />
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
