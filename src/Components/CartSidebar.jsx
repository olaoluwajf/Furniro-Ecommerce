import { useCart } from './CartContext';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, subtotal } = useCart();

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-100 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Shopping Cart</h2>
          <button
            aria-label="Close cart"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 px-3">
                  <Link
                    to={`/product/${item.id}`}
                    className="hover:underline"
                  >
                    <h3 className="font-semibold leading-tight">{item.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500">1 × {item.price}</p>
                </div>

                {/* THIS is the item remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-100 transition"
                >
                  <FiX size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className=" my-[-70px]">
          <div className="flex justify-between border-b py-[30px] mb-4">
            <span className="font-semibold px-[20px]">Subtotal</span>
            <span className="font-bold mx-[80px] text-amber-500">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-2 px-2">
            <Link
              to="/cart"
              className="flex-1 py-2 px-2 border text-center bg-white rounded-full hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              className="flex-1 py-2 px-2 border text-center bg-white text-black rounded-full hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Checkout
            </Link>
            <Link
              to="/comparison"
              className="flex-1 py-2 px-2 border text-center bg-white rounded-full hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Comparison
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
