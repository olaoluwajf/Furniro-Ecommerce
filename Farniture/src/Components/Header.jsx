import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
   <div className='justify-between flex mr-4'>

      <div className='flex grid-cols-3'>
         <a href="" className='flex items-center'>
            <img src={Logo} alt="Logo" />
            <h1 className='text-2xl font-bold text-amber-500'>Furni</h1>
         </a>   
      </div>
      
      <div className='flex flex-row justify-between items-center space-x-8 '>
         <a href="" className=' hover:text-amber-600 px-5 py-5 text-amber-500 text-xl font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
            Home
         </a>

         <a href="" className=' hover:text-amber-600 px-5 py-5 text-amber-500 text-xl font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
            Shope
         </a>

         <a href="" className=' hover:text-amber-600 px-5 py-5 text-amber-500 text-xl font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
            About
         </a>

         <a href="" className=' hover:text-amber-600 px-5 py-5 text-amber-500 text-xl font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
            Contact
         </a>

      </div>

      <div className=' flex flex-row justify-between items-center space-x-6  mr-2'>
         <a href="" className='h-5 w-5 text-gray-500 px-5 hover:text-amber-600 cursor-pointer transition-colors text-2xl'>
            <FiSearch/>
         </a>

         <a href="" className='h-5 w-5 text-gray-500 px-5 hover:text-amber-600 cursor-pointer transition-colors text-2xl'>
            <FiUser/>
         </a>

         <a href="" className='h-5 w-5 text-gray-500 px-5  hover:text-amber-600 cursor-pointer transition-colors text-2xl'>
            <FiHeart/>
         </a>

         <a href="" className='h-5 w-5 text-gray-500 px-5 hover:text-amber-600 cursor-pointer transition-colors text-2xl'>
            <FiShoppingCart/>
         </a>
      </div>

   </div>
     
  );
};

export default Header;

