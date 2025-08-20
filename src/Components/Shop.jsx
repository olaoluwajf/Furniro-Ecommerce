import React from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { FaSlidersH, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shop-left">
        <Link className="shop-filter">
          <FaSlidersH className="icon" /> Filter
        </Link>
        <Link className="shop-view">
          <HiViewGrid className="icon" /> <FaBars className="icon" />
        </Link>
        <p className="shop-results">Showing 1-16 of 32 results</p>
      </div>

      <div className="shop-right">
        <span>Show</span>
        <Link className="shop-show-count">16</Link>
        <div className="shop-sort">
          <span>Sort by</span>
          <Link className="shop-sort-option">Default</Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
