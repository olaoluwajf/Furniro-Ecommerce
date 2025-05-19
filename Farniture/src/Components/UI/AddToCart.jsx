import { FiShare, FiHeart } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';

const AddToCart = () => {
  return (
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60   
                  flex flex-col items-center justify-center gap-4 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300">

      <button className="bg-white cursor-pointer text-black font-medium py-2 px-8 rounded-full 
                        hover:bg-gray-100 transition-colors duration-200 shadow-lg">
        Add to Cart
      </button>

      <div className="flex cursor-pointer gap-6 text-white">
        <button className="flex items-center cursor-pointer gap-1 hover:text-gray-200 transition-colors">
          <FiShare size={16} />
          <span>Share</span>
        </button>
        <button className="flex items-center cursor-pointer gap-1 hover:text-gray-200 transition-colors">
          <FaExchangeAlt size={16} />
          <span>Compare</span>
        </button>
        <button className="flex items-center cursor-pointer gap-1 hover:text-gray-200 transition-colors">
          <FiHeart size={16} />
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;