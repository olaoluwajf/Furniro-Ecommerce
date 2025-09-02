import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import CartSidebar from './CartSidebar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); 
    const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-white fixed z-50 shadow-sm w-full'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img src={Logo} alt="Logo" className='h-auto' />
              <h1 className='text-3xl px-2 font-bold text-black'>Furniro</h1>
            </Link>
          </div>

          <nav className='hidden md:flex space-x-6'>
            <Link to="/" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>Home</Link>
            <Link to="/shop" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>Shop</Link>
            <Link to="/blog" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>Blog</Link>
            <Link to="/contact" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>Contact</Link>
          </nav>

          <div className='hidden md:flex space-x-10 items-center'>
            <Link to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'><FiUser /></Link>
            <Link to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'><FiSearch /></Link>
            <Link to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'><FiHeart /></Link>


   {/* Cart Icon */}
            <div className='relative text-gray-500 mt-[8px] hover:text-amber-600 cursor-pointer transition-colors text-xl'>
        <button onClick={() => setIsCartOpen(true)}>
          <FiShoppingCart />
        
        {cart.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 w-5 h-5 text-xs flex items-center justify-center rounded-full text-white'>
            {cart.length}
          </span>
        )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </div>

          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-gray-500 hover:text-amber-600 focus:outline-none text-2xl'>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMenuOpen && <Menu />}
      </div>
    </header>
  );
};

export default Header;
