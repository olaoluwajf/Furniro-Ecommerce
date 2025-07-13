import React from 'react'
import Hero from './Hero'
import Logo from '../assets/logo.png'
import img from '../assets/Asgaard sofa 3.png'
import Features from './Features'
import { FaRulerVertical } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Comparison = () => {
  return (
    <div>
        <Hero PageName='Comparison' img={Logo}/>
        <div className='m-3 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2'>
          <div className='justify-center '>
            <h1 className='text-2xl font-semibold m-2 w-50  '>Go to product page for more products</h1>
            <Link classname='decoration-stone-500 m-3'>view more</Link>
          </div>
          <div className='justify-center m-2 bg-amber-100 '>
            <img src={img} alt="" />
            <div className='m-2 p-2'>
              <h1 className='text-xl font-semibold m-1'>Asagaard sofa</h1>
              <h2 className='font-semibold m-1 '>Rs. 250,000.00</h2>
              <p className='flex gap-2 m-1 flex-row items-center'>4.7 <span className='font-semibold'>star</span>
              <FaRulerVertical className='flex flex-row'/>
               <span className='text-stone-400 '>204 Review </span> </p>
            </div>

          </div>
          <div className='bg-amber-100 m-2'>
            <img src={img} alt="" />
            <div className='m-2 p-2'>
              <h1 className='text-xl font-semibold m-1'>Outdoor Sofa Set</h1>
              <h2 className='font-semibold m-1 '>Rs. 224,000.00</h2>
              <p className='flex gap-2 m-1 flex-row items-center'>4.2 <span className='font-semibold'>star</span>
              <FaRulerVertical className='flex flex-row'/>
               <span className='text-stone-400 '>145 Review </span> </p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <Features/>
    </div>
  )
}

export default Comparison