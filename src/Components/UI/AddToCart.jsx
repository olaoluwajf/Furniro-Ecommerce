import { FiShare, FiHeart } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { useCart } from "../CartContext";

const AddToCart = ({ product }) => {
  const { cart, toggleCartItem } = useCart();
  const inCart = cart.some((item) => item.id === product?.id);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 
                 bg-black/0 group-hover:bg-black/60 opacity-0 group-hover:opacity-100 
                 transition-all duration-300"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleCartItem(product);
        }}
        className="bg-white text-black font-medium py-4 px-10 
                   hover:bg-gray-100 transition-colors duration-200 shadow-lg"
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      <div className="flex gap-6 text-white">
        <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
          <FiShare size={16} />
          <span>Share</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
          <FaExchangeAlt size={16} />
          <span>Compare</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
          <FiHeart size={16} />
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
