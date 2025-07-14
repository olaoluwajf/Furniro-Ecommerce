import Hero from './Hero'
import Logo from '../assets/logo.png'
import img from '../assets/Asgaard sofa 3.png'
import Features from './Features'
import { FaRulerVertical } from 'react-icons/fa'
import {RiArrowUpSLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Comparison = () => {
  return (
    <div>
        <Hero PageName='Comparison' img={Logo}/>
        <div className='m-3 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 justify-center  items-center '>
          <div className='w-full text-center lg:w-[25%] md:w-[100%] xl:w-[25%]'>
            <h1 className='text-2xl font-semibold m-2 text-center'>Go to product <br />page  for more <br /> products</h1>
            <Link className='decoration-stone-500 m-3 underline p-2 text-lg '>view more</Link>
            <hr className='w-full hidden xl:block' />
          </div>
          <div className='justify-center m-2 bg-amber-100 w-full  lg:w-[25%] xl:w-[25%] text-center'>
            <img src={img} alt="" className='w-full '/>
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
          <div className='bg-amber-100 m-2 justify-center w-full  lg:w-[25%] xl:w-[25%] text-center'>
            <img src={img} alt="" className='w-full lg:w-[60%]' />
            <div className='m-2 p-2'>
              <h1 className='text-xl font-semibold m-1'>Outdoor Sofa Set</h1>
              <h2 className='font-semibold m-1 '>Rs. 224,000.00</h2>
              <div className='flex gap-2 m-1 flex-row items-center justify-center'>4.2 <span className='font-semibold'>star</span>
              <RiArrowUpSLine className='flex flex-row'/>
               <span className='text-stone-400 '>145 Review </span> </div>
            </div>
          </div>
          <div className='m-4 justify-center text-center w-full  lg:w-[25%] xl:w-[25%] '>
            <h1 className='m-2 text-xl font-semibold '>Add A Product</h1>
            <select name="" className='bg-amber-600 py-2 px-5 text-white font-bold rounded cursor-pointer'id="">
              <option value="" className='rounded'>Choose a Product</option>
            </select>
          </div>
        </div>
        <Features/>
    </div>
  )
}

export default Comparison