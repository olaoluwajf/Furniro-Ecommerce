<div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left column - text content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg font-medium text-gray-600">Now Arrival</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Discover Our<br />
            New Collection
          </h1>
          
          <p className="text-gray-600 max-w-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">
            BUY NOW
          </button>
          
          <div className="pt-6">
            <p className="text-gray-600 mb-4">Browse The Range</p>
            <p className="text-gray-600 max-w-md mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-800 font-medium hover:text-gray-600">Dining</a>
              <a href="#" className="text-gray-800 font-medium hover:text-gray-600">Living</a>
              <a href="#" className="text-gray-800 font-medium hover:text-gray-600">Bedroom</a>
            </div>
          </div>
        </div>
        
        {/* Right column - image placeholder */}
        <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg">
          {/* Replace this div with your actual image */}
          {/* <img src="/your-image.jpg" alt="New Collection" className="w-full h-full object-cover rounded-lg" /> */}
        </div>
      </div>
    </div>

    // header files

import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
              Furniro
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-600"
            >
              Contact
            </Link>
          </nav>

          {/* Icons Group */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <div className="relative group hidden md:block">
              <button className="text-gray-500 hover:text-amber-600 transition-colors">
                <FiSearch className="h-5 w-5" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-64 p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Mobile Search */}
            <Link to="/search" className="md:hidden text-gray-500 hover:text-amber-600">
              <FiSearch className="h-5 w-5" />
            </Link>

            {/* User Account */}
            <Link to="/account" className="text-gray-500 hover:text-amber-600 transition-colors">
              <FiUser className="h-5 w-5" />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative text-gray-500 hover:text-amber-600 transition-colors">
              <FiHeart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Shopping Cart */}
            <Link to="/cart" className="relative text-gray-500 hover:text-amber-600 transition-colors">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>

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
          <Link 
            to="/" 
            className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600"
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-amber-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;