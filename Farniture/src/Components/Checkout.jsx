import Hero from './Hero'
import Features from './Features'

const Checkout = () => {
  return (
    <div >
        <Hero PageName='Checkout'/>
        <div className='justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 p-2 mt-5 m-10'>
          <div className='side1 m-2 gap-5 '>
            <h1 className='text-3xl font-bold flex text-center gap-2 m-4 justify-center'>Billing details</h1>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row '>
              <div className='m-2'>
                <h1 className='m-1'>First Name</h1>
                <input type="text" className='py-3 px-4 rounded border-stone-500 border-2  w-full' />
              </div>
              <div className='m-2'>
                <h1 className='m-1 '>Last Name</h1>
                <input type="text " className='py-3 px-4 rounded border-stone-500 border-2 w-full ' />
              </div>
            </div>

            <div className='m-2'>
              <h1>Company Name (Optional)</h1>
              <input type="text" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 p-2 text-stone-500' />
            </div>
            <div className='m-2 py-2'>
              <h1 className='m-1'>Town/City</h1>
              <select name="" id="" className='border-2 w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>
              <option value="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>Western Province</option>
            </select>
            </div>

            <div className='m-2 py-1'>
              <h1 className='m-1'>Street address</h1>
              <input type="text" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 text-stone-500' />
            </div>

            <div className='m-2'>
              <h1 className='m-1'>Town/City</h1>
              <input type="text" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 px-2 h-15 text-stone-500' />
            </div>

            <div className='m-2 py-1'>
              <h1 className='m-1'>Province</h1>
              <select name="" id="" className='border-2 w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>
              <option value="" className='border w-full md:w-80 lg:w-100 xl:120 rounded h-13 border-stone-500 '>Western Province</option>
            </select>
            </div>

            <div className='m-2 py-1'>
              <h1 className='m-1'>Zip code</h1>
              <input type="text" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 text-stone-500 px-2' />
            </div>

            <div className='m-2 py-1'>
              <h1 className='m-1 '>Phone</h1>
              <input type="text" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 px-2 text-stone-500' />
            </div>
            
            <div className='flex flex-col gap-3 m-2'>
              <h1 className='m-1'>Email</h1>
              <input type="email" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 px-2 text-stone-500' />
              <input type="email" className='w-full md:w-80 lg:w-100 xl:120 border-2 rounded border-stone-400 h-15 p-3' placeholder='Additional information ' />
            </div>


          </div>

          <div className='side2 mt-5 justify-center m-3 '>
            <div className=' flex flex-row justify-between m-5'>
              <div>
                <h1 className='font-bold text-xl '>Product</h1>
                <p className='py-2 text-stone-400'>Asgaard sofa <span>x 1</span></p>
                <h1 className='py-2'>Subtotal</h1>
                <h1 className='text-bold py-2'>Total</h1>
              </div>

              <div className='gap-2'>
                <h1 className=' font-bold text-xl'>Subtotal</h1>
                <h2 className='py-2'>Rs.250,000.00</h2>
                <h2 className='py-2'>Rs. 250,000.00</h2>
                <p className='text-xl text-amber-600 font-bold '>Rs. 250,000.00</p>
              </div>
            </div>
            <hr className='w-full'/>
            <h1 className='font-semibold text-lg m-3'>Direct Bank Transfer</h1>
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shopped until the funds have cleared in our account</p>

            <ol className='mt-3 mb-3'>
               <input type="radio" value='Direct Bank Transfer' name='Direct Bank Transfer' className='p-2'/>
               <label className='p-3' htmlFor="">Direct Bank Transfer</label> <br />
               <input type="radio"  value='Cash On Delivery'/>   
               <label className='p-3'htmlFor="" >Cash On Delivery</label>           
            </ol>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-black'>privacy policy</span> .</p>

            <div className='justify-center text-center'>
              <button className='border-2 py-3 px-10 rounded text-stone-800 text-xl border-x-black border-stone-500 cursor-pointer mt-5 hover:bg-amber-50 ' type='submit'>
              Place Order
            </button>
            </div>            
          </div>
          
        </div>
        <Features/>
    </div>
  )
}

export default Checkout