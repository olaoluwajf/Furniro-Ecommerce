import { products1, products2 } from '../Datas';
import { useParams } from 'react-router-dom';
import './ProductDescription.css';

const ProductDescription = () => {
  const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) return <p className="not-found">Product not found.</p>;

  return (
    <div className="product-description-container">
      <section>
        <div className="tabs">
          <h1 className="tab active">Description</h1>
          <h1 className="tab">Additional Information</h1>
          <h1 className="tab">Reviews ({product.id})</h1>
        </div>

        <div className="product-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nam. In
            ducimus debitis magni, expedita eius illo vitae a asperiores voluptas labore eligendi
            cum, aliquid quod tempore veritatis? Ullam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum accusamus placeat
            voluptates dolores, consequatur ullam, ducimus nihil et delectus quaerat. Sunt,
            dignissimos! Quia rem dolor consectetur eum reprehenderit rerum. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Dolorem quibusdam quae, natus corporis eaque saepe
            iure eos mollitia laborum assumenda enim maxime provident temporibus excepturi, nobis
            similique consequuntur nostrum dicta.
          </p>
        </div>

        <div className="product-images">
          <div className="image-box">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="image-box">
            <img src={product.img} alt={product.name} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
