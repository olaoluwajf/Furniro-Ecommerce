import Hero from './Hero'
import Features from './Features'
import './Checkout.css';


const Checkout = () => {
  return (
    <div className="checkout-container">
  <Hero PageName='Checkout' />

  <div className="checkout-main">
    <div className="side1">
      <h1>Billing details</h1>
      <div className="flex-row">
        <div>
          <h1>First Name</h1>
          <input type="text" />
        </div>
        <div>
          <h1>Last Name</h1>
          <input type="text" />
        </div>
      </div>

      <div>
        <h1>Company Name (Optional)</h1>
        <input type="text" />
      </div>

      <div>
        <h1>Town/City</h1>
        <select>
          <option>Western Province</option>
        </select>
      </div>

      <div>
        <h1>Street address</h1>
        <input type="text" />
      </div>

      <div>
        <h1>Province</h1>
        <select>
          <option>Western Province</option>
        </select>
      </div>

      <div>
        <h1>Zip code</h1>
        <input type="text" />
      </div>

      <div>
        <h1>Phone</h1>
        <input type="text" />
      </div>

      <div>
        <h1>Email</h1>
        <input type="email" />
        <input type="text" placeholder="Additional information" />
      </div>
    </div>

    <div className="side2">
      <div className="flex-row justify-between">
        <div>
          <h1>Product</h1>
          <p>Asgaard sofa x 1</p>
          <h1>Subtotal</h1>
          <h1>Total</h1>
        </div>
        <div>
          <h1>Subtotal</h1>
          <h2>Rs.250,000.00</h2>
          <h2>Rs.250,000.00</h2>
          <p>Rs.250,000.00</p>
        </div>
      </div>
      <hr />
      <h1>Direct Bank Transfer</h1>
      <p>Make your payment directly...</p>

      <ol>
        <input type="radio" value='Direct Bank Transfer' name='payment'/>
        <label>Direct Bank Transfer</label>
        <br />
        <input type="radio" value='Cash On Delivery' name='payment'/>
        <label>Cash On Delivery</label>
      </ol>

      <p>Your personal data will be used ... <span>privacy policy</span></p>

      <div>
        <button type='submit'>Place Order</button>
      </div>
    </div>
  </div>

  <Features/>
</div>

  )
}

export default Checkout