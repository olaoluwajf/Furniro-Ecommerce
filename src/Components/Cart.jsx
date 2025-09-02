import Hero from './Hero'
import { Link } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'
import Features from './Features'
import Logo from '../assets/logo.png'
import { useCart } from './CartContext' // ✅ import our cart context

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="justify-center">
      <Hero PageName="Cart" img={Logo} />

      <div className="ml-10 mr-10 mt-4 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 justify-center mb-5">

        {/* LEFT: Cart items table */}
        <div className="flex-1 mr-4">
          {/* Table header */}
          <div className="hidden md:flex flex-row gap-10 text-stone-900 bg-amber-50 p-5">
            <span className="flex-1">Product</span>
            <span className="w-24 text-center">Price</span>
            <span className="w-24 text-center">Quantity</span>
            <span className="w-24 text-center">Subtotal</span>
            <span className="w-12"></span>
          </div>

          {/* Cart items */}
          {cart.length === 0 ? (
            <p className="p-5 text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex flex-row gap-5 py-5 border-b items-center text-stone-600"
              >
                {/* product image */}
                <div className="bg-amber-50 p-3 h-20 w-20 flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="h-full object-contain" />
                </div>

                {/* product name */}
                <p className="flex-1">{item.name}</p>

                {/* price */}
                <p className="w-24 text-center"> {item.price.toLocaleString()}</p>

                {/* quantity */}
                <p className="w-24 text-center">{item.quantity}</p>

                {/* subtotal */}
                <p className="w-24 text-center">
                  {(item.price * item.quantity).toLocaleString()}
                </p>

                {/* remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-12 text-center text-amber-500 hover:text-amber-700"
                >
                  <FiTrash className="text-xl" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT: Cart summary */}
        <div className="flex flex-col rounded bg-amber-50 px-10 py-6 w-full md:w-80 text-center">
          <h1 className="text-2xl mb-5 font-bold">Cart Total</h1>

          <div className="flex flex-row justify-between mb-3">
            <p>Subtotal</p>
            <p className="text-stone-600">Rs. {subtotal.toLocaleString()}</p>
          </div>

          <div className="flex flex-row justify-between font-semibold text-lg">
            <p>Total</p>
            <p className="text-amber-600">Rs. {subtotal.toLocaleString()}</p>
          </div>

          <div className="mt-6">
            <Link
              to="/checkout"
              className="block rounded-xl p-2 px-7 border bg-amber-500 text-white hover:bg-amber-600 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      <Features />
    </div>
  )
}

export default Cart
