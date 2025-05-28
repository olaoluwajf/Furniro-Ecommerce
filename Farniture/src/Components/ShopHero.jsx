import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import Products from './Products'
import Shop from './Shop'
const ShopHero = () => {
  return (
    <div>
    <div className=" bg-[url('./assets/Rectangle1.png')] text-center py-20 justify-center">
        <h1 className='text-center justify-center text-4xl font-bold'>Shop</h1>
        <div className='text-center flex items-center'>
            <div className='flex items-center text-center'>
                <a href="" className='font-bold text-center'>Home</a> 
                <FaGreaterThan className='justify-center text-[10px]'/>
            </div>
            <span className='text-center justify-center'>Shop</span>
        </div>
    </div>
    <Shop/>
    <div>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
    </div>
  )
}

export default ShopHero