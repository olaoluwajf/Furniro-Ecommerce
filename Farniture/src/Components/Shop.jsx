 import React from 'react'
 import {HiViewGrid} from 'react-icons/hi'
import { FaSlidersH, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
 
 const Shop = () => {
   return (
     <div className='flex flex-col md:flex-row xl:flex-row lg:flex-row sm:gap-y-5 justify-between p-4 bg-amber-100 items-center'>
        <div className='flex justify-center lg:flex-row xl:flex-row items-center px-3 py-5'>
            <Link className='flex py-3 gap-1 items-center px-3'>
                <FaSlidersH className='text-2xl mx-2'/> Filter
            </Link>
            <Link className='flex py-3 items-center px-3'>
                <HiViewGrid className='text-2xl mx-2'/> <FaBars className='text-2xl'/>
            </Link>
            <p>Showing  1-16 of 32 results</p>
        </div>

        <div className='flex items-center px-3 justify-between gap-1 text-[15px]'>
            Show <Link className='p-3 bg-amber-50'>16</Link>
            <div className='flex items-center mx-2 gap-1 text-[15px]'>
                Short by <Link className='bg-stone-50 p-3'>Default</Link>
            </div>
        </div>
     </div>
   )
 }
 
 export default Shop