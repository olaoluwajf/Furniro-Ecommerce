import { FiSearch, FiUser, FiHeart, FiShoppingCart,FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import Menu from './Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <a href="/" className='flex items-center'>
              <img src={Logo} alt="Logo" className='h-10' />
              <h1 className='text-3xl px-2 font-bold text-amber-500'>Furni</h1>
            </a>   
          </div>
          
          <nav className='hidden md:flex space-x-6'>
            <a href="#" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
              Home
            </a>
            <a href="#" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
              Shop
            </a>
            <a href="#" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
              About
            </a>
            <a href="#" className='hover:text-amber-600 px-3 py-2 text-black text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
              Contact
            </a>
          </nav>

          <div className='hidden md:flex space-x-10'>
            <a href="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
              <FiSearch/>
            </a>
            <a href="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
              <FiUser/>
            </a>
            <a href="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
              <FiHeart/>
            </a>
            <a href="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
              <FiShoppingCart/>
            </a>
          </div>

          <div className='md:hidden flex items-center'>
            <button 
              onClick={toggleMenu}
              className='text-gray-500 hover:text-amber-600 focus:outline-none text-2xl'
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMenuOpen && 
            <Menu/>
        }
      </div>
    </header>
  );
};

export default Header;