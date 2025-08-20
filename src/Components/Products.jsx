import { products1, products2 } from '../Datas';
import AddToCart from './UI/AddToCart';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const allDatas = [...products1, ...products2];

  return (
    <div className="products-container">
      <div className="products-grid">
        {allDatas.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-card">
            <div className="product-image">
              <img src={item.img} alt={item.name} />
            </div>

            {item.new && <span className="badge-new">new</span>}
            {item.disPrecent && <span className="badge-discount">-{item.disPrecent}%</span>}

            <div className="product-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price-section">
                <span className="price">{item.price}</span>
                {item.discount && <span className="discount">{item.discount}</span>}
              </div>
            </div>

            <AddToCart />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
