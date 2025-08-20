import Hero from './Hero'
import { Link, useParams } from 'react-router-dom'
import { products1, products2 } from '../Datas'
import { FiTrash } from 'react-icons/fi'
import Features from './Features'
import Logo from '../assets/logo.png'
import './Cart.css'


const Cart = () => {
  const { id } = useParams()
  const allProducts = [...products1, ...products2]
  const product = allProducts.find((p) => p.id === parseInt(id))

  // For now, let's assume quantity = 1
  const quantity = 1
  const subtotal = product ? product.price * quantity : 0
  const total = subtotal

  return (
   <div className="cart-container">
  <Hero PageName='Cart' img={Logo} />

  <div className="cart-main">
    <div className="cart-left">
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {product ? (
        <div className="cart-item">
          <div className="cart-item-img">
            <img src={product.img} alt={product.name} />
          </div>

          <p className="cart-item-name">{product.name}</p>
          <p>₦{product.price}</p>
          <p className="cart-item-quantity">{quantity}</p>
          <p className="cart-item-subtotal">₦{subtotal}</p>
          <div className="cart-trash">
            <FiTrash />
          </div>
        </div>
      ) : (
        <p className="text-stone-400 p-5">No product found.</p>
      )}
    </div>

    <div className="cart-right">
      <h1>Cart Total</h1>

      <div className="cart-total-row">
        <p>Subtotal:</p>
        <p className="cart-total-value">₦{subtotal}</p>
      </div>

      <div className="cart-total-row">
        <p>Total:</p>
        <p className="cart-total-value-total">₦{total}</p>
      </div>

      <div className="cart-checkout">
        <Link to="/Checkout">Check Out</Link>
      </div>
    </div>
  </div>

  <Features />
</div>

  )
}

export default Cart
