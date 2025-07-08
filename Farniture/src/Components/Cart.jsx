import Hero from './Hero'
import { useParams } from 'react-router-dom'
import {products1,products2} from '../Datas'
import Features from './Features'
import Logo from '../assets/logo.png'

const Cart = () => {
  const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));
  return (
    <div>
        <Hero PageName="Cart" img={Logo}/>
        <div className='ml-4 mr-4 mt-4 flex flex-col lg:flex-row xl:flex-row gap-2'>
          <div className='flex flex-row gap-5 px-2 text-stone-900 bg-amber-100 p-5'>
            <span className='px-13 ml-3'>Product</span>
            <span className='px-4'>Price</span>
            <span className='px-2 pl-4'>Quantity</span>
            <span className='px-5'>Subtotal</span>

          </div>

          <div className='flex flex-col p-10 rounded bg-amber-100'>
            <h1 className='text-center text-2xl py-3 mb-3'>Cart Total</h1>
            <div className='flex flex-col lg:flex-row xl:flex-row gap-6 p-10'>
              <p>SubTotal</p>
              <p>{ }
                price
              </p>
            </div>
            <div className='flex flex-col lg:flex-row xl:flex-row gap-6 '>
              <p>
                Total
              </p>
              <p>
                { }
                total
              </p>
            </div>

          </div>
          
        </div>

        <Features/>
    </div>
  )
}

export default Cart