import Hero from './Hero'
import Features from './Features'

const Checkout = () => {
  return (
    <div >
        <Hero PageName='Checkout'/>
        <div className='justify-center '>
          <div className='side1 m-2 justify-center gap-5 '>
            <h1 className='text-3xl font-bold flex text-center gap-2'>Billing details</h1>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2'>
              <div>
                <h1>First Name</h1>
                <input type="text" className='py-3 px-4 rounded border-stone-500 border w-full' />
              </div>
              <div>
                <h1>Last Name</h1>
                <input type="text " className='py-3 px-4 rounded border-stone-500 border w-full ' />
              </div>
            </div>

            <div>
              <h1>Company Name (Optional)</h1>
              <input type="text" className='w-full md:w-60 lg:w-100 xl:w-150 border rounded border-stone-400 h-15' />
            </div>
            <div>
              <h1>Town/City</h1>
              <select name="" id="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>
              <option value="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>Western Province</option>
            </select>
            </div>

            <div>
              <h1>Street address</h1>
              <input type="text" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15' />
            </div>

            <div>
              <h1>Town/City</h1>
              <input type="text" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15' />
            </div>

            <div>
              <h1>Province</h1>
              <select name="" id="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>
              <option value="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>Western Province</option>
            </select>
            </div>

            <div>
              <h1>Zip code</h1>
              <input type="text" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15' />
            </div>

            <div>
              <h1>Phone</h1>
              <input type="text" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15' />
            </div>
            
            <div className='flex flex-col gap-3'>
              <h1>Email</h1>
              <input type="email" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15 ' />
              <input type="email" className='w-full md:w-60 lg:w-80 xl:w-100 border rounded border-stone-400 h-15 p-3' placeholder='Additional information ' />
            </div>


          </div>

          <div className='side2 justify-center '>
            <div className='flex flex-row justify-between'>
              <div>
                <h1>Product</h1>
                <p>Asgaard sofa <span>x 1</span></p>
                <h1>Subtotal</h1>
                <h1>Total</h1>
              </div>

              <div>
                <h1>Subtotal</h1>
                <span>Rs.250,000.00</span>
                <span>Rs. 250,000.00</span>
                <p>Rs. 250,000.00</p>
              </div>
            </div>
            <hr className='w-full'/>
            <h1 className='font-semibold text-'>Direct Bank Transfer</h1>
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shopped until the funds have cleared in our account</p>

            <ol>
               <input type="radio" value='Direct Bank Transfer' name='Direct Bank Transfer'/>
               <input type="radio"  value='Cash On Delivery'/>              
            </ol>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-black'>privacy policy</span> .</p>

            <button className='border py-3 px-3 rounded text-stone-800 text-xl text-center justify-center border-stone-500 cursor-pointer mt-5' type='submit'>
              Place Order
            </button>
          </div>
          <Features/>
        </div>
    </div>
  )
}

export default Checkout