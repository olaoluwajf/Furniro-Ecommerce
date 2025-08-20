import React from 'react';
import { products2 } from '../Datas';
import AddToCart from './UI/AddToCart';
import { Link } from 'react-router-dom';
import './Product2.css';

const Products = () => {
  return (
    <div className="products-container">
      <Link to="/ProductDetail" className="products-grid">
        {products2.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img
                src={item.img}
                alt={item.name}
                className="product-image"
              />
              {item.new && (
                <span className="product-badge new-badge">new</span>
              )}
              {item.disPrecent && (
                <span className="product-badge discount-badge">
                  -{item.disPrecent}%
                </span>
              )}
            </div>

            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-desc">{item.description}</p>
              <div className="product-price">
                <span className="current-price">{item.price}</span>
                {item.discount && (
                  <span className="old-price">{item.discount}</span>
                )}
              </div>
            </div>

            <AddToCart />
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Products;
