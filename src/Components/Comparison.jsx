import Hero from './Hero'
import Logo from '../assets/logo.png'
import img from '../assets/Asgaard sofa 3.png'
import Features from './Features'
import { FaRulerVertical } from 'react-icons/fa'
import {RiArrowUpSLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Button from './Button'

const Comparison = () => {
  return (
    <div>
        <Hero PageName='Comparison' img={Logo}/>
        <div className='m-3 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 justify-center bg-white   items-center '>
          <div className='w-full text-center lg:w-[23%] md:w-[100%] xl:w-[25%] justify-end'>
            <h1 className='text-2xl font-semibold m-2 text-center'>Go to product <br />page  for more <br /> products</h1>
            <Link className='decoration-stone-500 m-3 underline p-2 text-lg '>view more</Link>
          </div>
          <div className='justify-center m-2  w-full  lg:w-[25%] xl:w-[23%] text-center'>
            <img src={img} alt="" className='w-full bg-amber-100'/>
            <div className='m-2 p-2'>
              <h1 className='text-xl font-semibold m-1'>Asagaard sofa</h1>
              <h2 className='font-semibold m-1 '>Rs. 250,000.00</h2>
              <div className='flex gap-2 m-1 flex-row items-center text-center justify-center'>
                4.7 <span className='font-semibold'>star</span>
              <FaRulerVertical className='flex flex-row '/>
               <span className='text-stone-400 '>204 Review </span> 
              </div>
              

            </div>

          </div>
          <div className=' m-2 justify-center w-full  lg:w-[23%] xl:w-[23%] text-center'>
            <img src={img}  alt="" className='w-full bg-amber-100' />
            <div className='m-2 p-2'>
              <h1 className='text-xl font-semibold m-1'>Outdoor Sofa Set</h1>
              <h2 className='font-semibold m-1 '>Rs. 224,000.00</h2>
              <div className='flex gap-2 m-1 flex-row items-center justify-center'>4.2 <span className='font-semibold'>star</span>
              <RiArrowUpSLine className='flex flex-row'/>
               <span className='text-stone-400 '>145 Review </span> </div>
            </div>
             
          </div>
          <div className='m-4 text-center w-full  lg:w-[23%] xl:w-[25%] relative justify-end'>
            <h1 className='m-2 text-xl font-semibold '>Add A Product</h1>
            <select name="" className='bg-amber-600 py-2 px-5 text-white font-bold rounded cursor-pointer'id="">
              <option value="" className='rounded'>Choose a Product</option>
            </select>
          </div>
        </div>

        <hr className='m-3'/>
        <div className='Detail info flex flex-row m-3 px-4'>
          <div className='m-3 text-left justify-center gap-2 mt-20 w-[25%] '>
              <h1 className='text-xl font-bold m-2 pt-5'>General</h1>
              <h2 className='mb-2 p-2 font-semibold'>Sales Package</h2>
              <h2 className='mb-2 p-2 font-semibold'>Model Number</h2>
              <h2 className='mb-2 font-semibold p-2'>Secondary Materila</h2>
              <h2 className='mb-2 font-semibold p-2 '>Configuration</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Color</h2>

              <h1 className='mt-10 pt-20 p-2 text-xl font-bold'>Product </h1>
              <h2 className='mb-2 font-semibold p-2'>Filling Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Finish Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Adjustabble Headrest</h2>
              <h2 className='mb-2 font-semibold p-2'>Maximum Load Capacity</h2>
              <h2 className='mb-2 font-semibold p-2'>Origin of Manufacture</h2>

              <h1 className='mb-1 font-bold p-2 mt-10 pt-20'>Dimensions</h1>
              <h2 className='mb-2 font-semibold p-2'>Width</h2>
              <h2 className='mb-2 font-semibold p-2'>Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Depth</h2>
              <h2 className='mb-2 font-semibold p-2'>Weight</h2>
              <h2 className='mb-2 font-semibold p-2'>Seat Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Leg Height</h2>

              <h1 className='mt-10 text-xl font-bold p-3 pt-10 '>Warranty</h1>
              <h2 className='mb-2 font-semibold p-2'>Warranty Summary</h2>
              <h2 className='mb-2 font-semibold p-2'>Warranty Service Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Not Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Domestic Warranty</h2>

          </div>
          <div className='m-3 text-left justify-center gap-2 mt-20 w-[25%]'>
             <h1 className='text-xl font-bold m-2 pt-5'>General</h1>
              <h2 className='mb-2 p-2 font-semibold'>Sales Package</h2>
              <h2 className='mb-2 p-2 font-semibold'>Model Number</h2>
              <h2 className='mb-2 font-semibold p-2'>Secondary Materila</h2>
              <h2 className='mb-2 font-semibold p-2 '>Configuration</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Color</h2>

              <h1 className='mt-10 pt-20 p-2 text-xl font-bold'>Product </h1>
              <h2 className='mb-2 font-semibold p-2'>Filling Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Finish Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Adjustabble Headrest</h2>
              <h2 className='mb-2 font-semibold p-2'>Maximum Load Capacity</h2>
              <h2 className='mb-2 font-semibold p-2'>Origin of Manufacture</h2>

              <h1 className='mb-1 font-bold p-2 mt-10 pt-20'>Dimensions</h1>
              <h2 className='mb-2 font-semibold p-2'>Width</h2>
              <h2 className='mb-2 font-semibold p-2'>Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Depth</h2>
              <h2 className='mb-2 font-semibold p-2'>Weight</h2>
              <h2 className='mb-2 font-semibold p-2'>Seat Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Leg Height</h2>

              <h1 className='mt-10 text-xl font-bold p-3 pt-10 '>Warranty</h1>
              <h2 className='mb-2 font-semibold p-2'>Warranty Summary</h2>
              <h2 className='mb-2 font-semibold p-2'>Warranty Service Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Not Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Domestic Warranty</h2>
              <Button name='Add to Cart'/>
          </div>
          <div className='m-3 text-left justify-center gap-2 mt-20 w-[25%]'>
             <h1 className='text-xl font-bold m-2 pt-5'>General</h1>
              <h2 className='mb-2 p-2 font-semibold'>Sales Package</h2>
              <h2 className='mb-2 p-2 font-semibold'>Model Number</h2>
              <h2 className='mb-2 font-semibold p-2'>Secondary Materila</h2>
              <h2 className='mb-2 font-semibold p-2 '>Configuration</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Uphoistery Color</h2>

              <h1 className='mt-10 pt-20 p-2 text-xl font-bold'>Product </h1>
              <h2 className='mb-2 font-semibold p-2'>Filling Material</h2>
              <h2 className='mb-2 font-semibold p-2'>Finish Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Adjustabble Headrest</h2>
              <h2 className='mb-2 font-semibold p-2'>Maximum Load Capacity</h2>
              <h2 className='mb-2 font-semibold p-2'>Origin of Manufacture</h2>

              <h1 className='mb-1 font-bold p-2 mt-10 pt-20'>Dimensions</h1>
              <h2 className='mb-2 font-semibold p-2'>Width</h2>
              <h2 className='mb-2 font-semibold p-2'>Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Depth</h2>
              <h2 className='mb-2 font-semibold p-2'>Weight</h2>
              <h2 className='mb-2 font-semibold p-2'>Seat Height</h2>
              <h2 className='mb-2 font-semibold p-2'>Leg Height</h2>

              <h1 className='mt-10 text-xl font-bold p-3 pt-10 '>Warranty</h1>
              <h2 className='mb-2 font-semibold p-2'>Warranty Summary</h2>
              <h2 className='mb-2 font-semibold p-2'>Warranty Service Type</h2>
              <h2 className='mb-2 font-semibold p-2'>Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Not Covered in Warranty</h2>
              <h2 className='mb-2 font-semibold p-2'>Domestic Warranty</h2>
              <Button name='Add to Cart'/>
          </div>
        </div>
        <Features/>
    </div>
  )
}

export default Comparison