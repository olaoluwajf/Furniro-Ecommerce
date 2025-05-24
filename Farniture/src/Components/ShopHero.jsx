import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
const ShopHero = () => {
  return (
    <div className=" bg-[url('./assets/Rectangle1.png')] items-center text-center py-20 justify-center">
        <h1 className='text-center  text-4xl font-bold'>Shop</h1>
        <div className='text-center flex items-center'>
            <div className='flex items-center text-center'>
                <a href="" className='font-bold text-center'>Home</a> 
                <FaGreaterThan className='text-center'/>
            </div>
            <span className='text-center justify-center'>Shop</span>
        </div>
    </div>
  )
}

export default ShopHero