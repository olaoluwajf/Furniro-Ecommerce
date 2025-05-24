 import React from 'react'
 import {HiViewGrid} from 'react-icons/hi'
import { FaSlidersH, FaBars } from 'react-icons/fa'
 
 const Shop = () => {
   return (
     <div className='flex justify-between p-4 bg-amber-100 items-center'>
        <div className='flex items center px-3'>
            <div className='flex items-center px-3'>
                <FaSlidersH className='text-2xl mx-2'/> Filter
            </div>
            <div className='flex items-center px-3'>
                <HiViewGrid className='text-2xl mx-2'/> <FaBars className='text-2xl'/>
            </div>
            <p>Showing  1-16 of 32 results</p>
        </div>

        <div className='flex items-center px-3 justify-between'>
            Show <span className='p-3 bg-amber-50'>16</span>
            <div className='flex items-center mx-2'>
                Short by <span className='bg-stone-50 p-3'>Default</span>
            </div>
        </div>
     </div>
   )
 }
 
 export default Shop