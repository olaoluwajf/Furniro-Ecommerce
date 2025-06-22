import React from 'react'
import { FiSearch,FiShoppingCart,FiUser,FiHeart } from 'react-icons/fi'
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
   <div className='md:hidden mt-4 pb-4'>
    <div className='flex flex-col space-y-3'>
        <Link to="/" className='hover:text-amber-600 px-3 py-2 text-amber-500 text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
        Home
        </Link>
        <a to="#" className='hover:text-amber-600 px-3 py-2 text-amber-500 text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
        Shop
        </a>
        <a to="#" className='hover:text-amber-600 px-3 py-2 text-amber-500 text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
        About
        </a>
        <a to="#" className='hover:text-amber-600 px-3 py-2 text-amber-500 text-lg font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600'>
        Contact
        </a>
    </div>
    <div className='flex justify-center space-x-6 mt-4'>
        <a to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
        <FiSearch/>
        </a>
        <a to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
        <FiUser/>
        </a>
        <a to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
        <FiHeart/>
        </a>
        <a to="#" className='text-gray-500 hover:text-amber-600 cursor-pointer transition-colors text-xl'>
        <FiShoppingCart/>
        </a>
    </div>
    </div>
  )
}

export default Menu