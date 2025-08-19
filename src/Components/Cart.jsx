import Hero from './Hero'
import {Link, useParams } from 'react-router-dom'
import {products1,products2} from '../Datas'
import { FiTrash } from 'react-icons/fi'
import Features from './Features'
import Logo from '../assets/logo.png'

const Cart = () => {
  const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));
  return (
    <div className='justify-center'>
        <Hero PageName="Cart" img={Logo}/>
        <div className='ml-10 mr-10 mt-4 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 justify-center mb-5'>
          <div className='hidden md:flex-row  flex-col mr-4 lg:block xl:block'>
            <div className='flex flex-row gap-10  text-stone-900 bg-amber-50 p-5 px-30'>
              <span className='mr-5 ml-5 pl-5 '>Product</span>
              <span className='px-4'>Price</span>
              <span className='px-2 pl-4'>Quantity</span>
              <span className='px-5'>Subtotal</span>
            </div>
            <div className='flex flex-row gap-5 pt-5   items-center text-stone-500'>
              <div className='bg-amber-50 p-3 h-20  w-30 items-center justify-center'>
                <img src='' alt="img" className='mr-5'/>

              </div>
              
              <p className='mr-3'>product.name</p>
              <p>product.price</p>
              <p className='border px-2 ml-8'>1</p>
              <p className='ml-10'>product.subtotal</p>
              <div>
                <FiTrash className='text-2xl cursor-pointer hover:text-stone-600 text-amber-300 font-bold'/>
              </div>

            </div>

          </div>

          <div className='flex flex-col rounded bg-amber-50 px-10 md:justify-center sm:justify-center w-full md:w-full text-center lg:w-120 xl:w-140 '>
            <h1 className='text-center text-2xl py-1 mb-3 font-bold '>Cart Total</h1>
            <div className='flex flex-row gap-6 ml-3 mt-4 mb-3 justify-center'>
              <p className='flex'>Subtotal</p>
              <p className='ml-5 flex text-stone-400'>{product }
                price
              </p>
            </div>
            <div className='flex flex-row gap-6 ml-3 justify-center'>
              <p>
                Total
              </p>
              <p className='ml-10 text-amber-600'>
                { }
                total
              </p>
              
            </div>
            <div className='flex-col gap-3 p-10 mt-5'>
                <Link to='/Checkout' className='rounded-xl p-2 px-7 border'>
                  Check Out
                </Link>
            </div>

          </div>
          
        </div>

        <Features/>
    </div>
  )
}

export default Cart