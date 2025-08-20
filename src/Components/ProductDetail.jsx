import { Link, useParams } from 'react-router-dom';
import { FaEllipsisV, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { products1, products2 } from '../Datas';
import Product2 from './Product2';
import Button from './Button';
import { useState } from 'react';
import ProductDescription from './ProductDescription';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));
  const [number, setNumber] = useState(1);

  const NumberIncrement = () => setNumber(number + 1);
  const NumberDecrement = () => number > 1 && setNumber(number - 1);

  if (!product) {
    return (
      <div className="not-found">
        Product not found. Please check the URL or return to the shop.
        <Link to="/shop" className="shop-link">Go to Shop</Link>
      </div>
    );
  }

  const AddToCart = () => {
    // Add your cart logic here
  };

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to='/Home'>Home</Link>
        <FaGreaterThan />
        <Link to='/ShopHero'>Shop</Link>
        <FaGreaterThan />
        <FaEllipsisV />
        <span>{product.name}</span>
      </div>

      <section className="product-main">
        <div className="product-images-section">
          <div className="thumbnails">
            <img src={product.img} alt={product.name} />
            <img src={product.img} alt={product.name} />
            <img src={product.img} alt={product.name} />
          </div>
          <div className="main-image">
            <img src={product.img} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
          <div className="reviews">
            <span>Rate</span>
            <FaEllipsisV />
            <span>Customer Review</span>
          </div>
          <p>{product.description}</p>
          <p>{product.features} Lorem ipsum dolor sit amet...</p>

          <div className="sizes">
            <h4>Size</h4>
            <div>
              <Link>L</Link>
              <Link>XL</Link>
              <Link>XS</Link>
            </div>
          </div>

          <div className="colors">
            <h4>Color</h4>
            <div>
              <span className="color-blue"></span>
              <span className="color-stone"></span>
              <span className="color-yellow"></span>
            </div>
          </div>

          <div className="quantity-add">
            <div className="quantity">
              <span onClick={NumberDecrement}>-</span>
              <span>{number}</span>
              <span onClick={NumberIncrement}>+</span>
            </div>

            <button onClick={AddToCart}>Add to cart</button>
            <Link to='/Comparison'>+ Compare</Link>
          </div>

          <div className="product-meta">
            <span>SKU: SS001</span>
            <span>Category: {product.description}</span>
            <span>Tags: Sofa, Chair, Home, Shop</span>
            <span>
              Share:
              <div className="social-icons">
                <Link><FaFacebook /></Link>
                <Link><FaLinkedin /></Link>
                <Link><FaTwitter /></Link>
              </div>
            </span>
          </div>
        </div>
      </section>

      <hr />
      <ProductDescription />
      <hr />

      <section className="related-products">
        <h2>Related Products</h2>
        <Product2 />
        <Button name='Show more' />
      </section>
    </div>
  );
};

export default ProductDetail;
