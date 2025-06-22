import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import Products from './Products'
import Shop from './Shop'
import Button from './Button'
import NButton from './UI/NButton'
import Features from './Features'
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
            <div className='flex flex-row justify-center' >
              <NButton name='1' className='bg-amber-500 font-bold'/>
              <NButton name='2'/>
              <NButton name='3' />
              <div onClick={"Hello"}>
                 <NButton name='next'/>
              </div>
            </div>
        </div>
      <Features/>
    </div>
  )
}

export default ShopHero