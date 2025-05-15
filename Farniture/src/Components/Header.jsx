import React from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Furniro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Shop
            </a>
            <a 
              href="#" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Contact
            </a>
          </nav>

          {/* Icons Group */}
          <div className="flex items-center space-x-6">
            {/* Search Icon with expandable input */}
            <div className="relative group hidden md:block">
              <FiSearch className="h-5 w-5 text-gray-500 hover:text-amber-600 cursor-pointer transition-colors" />
              <div className="absolute right-0 top-full mt-2 w-64 p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Mobile Search (always visible) */}
            <div className="md:hidden">
              <FiSearch className="h-5 w-5 text-gray-500 hover:text-amber-600 cursor-pointer" />
            </div>

            {/* User Account */}
            <div className="relative">
              <FiUser className="h-5 w-5 text-gray-500 hover:text-amber-600 cursor-pointer" />
            </div>

            {/* Wishlist */}
            <div className="relative">
              <FiHeart className="h-5 w-5 text-gray-500 hover:text-amber-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>

            {/* Shopping Cart */}
            <div className="relative">
              <FiShoppingCart className="h-5 w-5 text-gray-500 hover:text-amber-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600">
            Home
          </a>
          <a href="#" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600">
            Shop
          </a>
          <a href="#" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600">
            About
          </a>
          <a href="#" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;