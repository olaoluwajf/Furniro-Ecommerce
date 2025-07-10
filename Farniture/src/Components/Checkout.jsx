import React from 'react'
import Hero from './Hero'
import { FaArrowDown } from 'react-icons/fa'

const Checkout = () => {
  return (
    <div>
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

          <div className='side2'>

          </div>
        </div>
    </div>
  )
}

export default Checkout