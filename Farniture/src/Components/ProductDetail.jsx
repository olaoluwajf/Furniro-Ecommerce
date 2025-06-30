import { Link, useParams } from 'react-router-dom';
import { FaEllipsisV, FaGreaterThan } from 'react-icons/fa';
import { products1, products2 } from '../Datas';
import { FaFacebook, FaTwitter,FaLinkedin } from 'react-icons/fa';
import Product2 from './Product2'
import Button from './Button'

import { useState } from 'react';
const ProductDetail = () => {
  const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));
  const [number, setNumber] = useState(1);
  const NumberIncrement = () => {
    setNumber(number + 1);
  };

  const NumberDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  if (!product) {
    return (
      <div className="p-5 text-center text-red-600">
        Product not found. Please check the URL or return to the shop.
        <Link to="/shop" className="block mt-4 text-blue-500 hover:underline">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div>
      <div className='flex flex-row p-10 gap-3 m-1 bg-amber-100 items-center '>
        <Link to='/Home' className='items-center hover:text-stone-500 text-stone-400 text-xl'>Home</Link>
        <FaGreaterThan className='text-[12px]'/>
        <Link to='/ShopHero' className=' hover:text-stone-500 text-stone-400 text-xl items-center'>Shop</Link>
        <FaGreaterThan className='text-[12px] text-'/>
        <FaEllipsisV/>
        <span className='text-2xl '>{product.name}</span> 
      </div>
      <section className='flex flex-col xl:flex-row lg:flex-row gap-2 gap-x-5 p-5 justify-center  '>
        <div className='flex flex-col xl:flex-row lg:flex-col gap-3 gap-x-5 px-4 justify-center text-center' >
          <div className='flex flex-row  gap-y-3 lg:flex-col xl:flex-col sm:gap-2 sm:py-2 '>

            <img src={product.img} alt={product.name} className="w-30 p-4 h-30 object-cover border" />
            <img src={product.img} alt={product.name} className="w-30 p-4 h-30 object-cover border" />
            <img src={product.img} alt={product.name} className="w-30 p-4 h-30 object-cover border" />
          </div>

          <div className='flex flex-col'>
            <img src={product.img} alt={product.name} className="w-full h-120 object-contain" /> 
          </div>
        </div>

        <div className='fex flex-col p-3 text-start'>
          <h1 className="text-3xl  text-stone-800 py-2">{product.name}</h1>
          <h3 className="text-[17px] p-3 text-stone-400 font-semibold"> {product.price}</h3>
          <div className='flex flex-row items-center gap-2 px-2'>
            <span>Rate</span>
            <FaEllipsisV/>
            <span>Customer Review</span>
          </div>
          <div className='flex text-stone-600 py-2'>
            <p className='flex text-center p-2 '>{product.description}</p>
            
          </div>
          <div>
            <p className='w-110 lg:w-140  xl:w-160  md:w-80 items-center text-start text-stone-600 flex flex-col sm:text-center sm:justfiy-center xl:text-left'>{product.features} Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero neque nostrum dolorum autem mollitia ut dolore eius aliquid et cumque maxime dolorem ea placeat, voluptatibus architecto ipsam! Voluptas, voluptatem!
            </p>
          </div>
          <div className='flex flex-col py-3 gap-3'>
            <h1 className='text-stone-700'>Size</h1>
            <div className='flex flex-row items-center gap-1 px-3 '>
              <Link className='bg-amber-50 border px-2 rounded-sm'>L</Link>
              <Link className='bg-amber-50 border px-2 rounded-sm'>XL</Link>
              <Link className='bg-amber-50 border px-2 rounded-sm'>XS</Link>
            </div>
          </div>
          <div className='color gap-y-1'>
            <h1 className='py-2'>Color</h1>
            <div className='flex gap-1'>
              <span className=' bg-sky-700 p-[4px] rounded-4xl h-[20px] w-[20px]  '>  </span>
              <span className=' bg-stone-700 rounded-4xl h-[20px] w-[20px]  '> </span>
              <span className=' bg-yellow-600 p-[4px] rounded-4xl h-[20px] w-[20px]  '></span>
            </div>
          </div>
          <div className='flex flex-row p-3 gap-2 py-4 mb-5'>
            <button className='flex flex-row gap-3 border px-5 py-2 rounded-xl items-center'>
              <span onClick={NumberDecrement} className='px-2 text-lg'>-</span>
              <span>{number}</span>
              <span onClick={NumberIncrement} className='px-3 text-lg'>+</span>
            </button>

            <button className='border px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-50'>
              Add to cart
            </button>

            <button className='border px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-50'>
              + Compare
            </button>
          </div>
          <hr className=' font-light text-stone-400 py-4'/>
          <div className='flex flex-col text-stone-400 text-lg gap-2'>
            <span className='gap-3'>SKU  :  SS001</span>
            <span className='gap-3'>catagory   :  {product.description} </span>
            <span className='gap-3'>Tags   :  Sofa,Chair,Home,Shop</span>
            <span className='flex items-center'>Share   :  
              <div className='flex flex-row gap-2 p-2 text-black'>
                <Link className='px-2'> <FaFacebook/> </Link>
                <Link className='px-2 '> <FaLinkedin/> </Link>
                <Link className='px-2'> <FaTwitter/> </Link>
              </div>
            </span>
          </div>
        </div>
      </section>
      <hr className='gap-y-1 py-3 text-stone-500'/>
      <section>
        <div className='flex flex-col xl:flex-row lg:flex-row gap-1 justify-center p-2 text-center items-center'>
          <div className='mr-2'>
            <h1 className='text-2xl p-2 font-semibold px-3'>Description</h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>Additional Information </h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>Reviews([{product.id}])</h1>
          </div>
        </div>

        <div className='flex flex-col '>
          <p className='flex flex-col p-3  sm:m-4 mb-2 mt-1 justify-center text-center lg:text-left xl:text-left text-lg text-stone-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nam. In ducimus debitis magni, expedita eius illo vitae a asperiores voluptas labore eligendi cum, aliquid quod tempore veritatis? Ullam.
          </p>
          <p className='flex flex-col mb-2 mt-1 p-3 py-1 justify-center text-center lg:text-left xl:text-left text-lg text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum accusamus placeat voluptates dolores, consequatur ullam, ducimus nihil et delectus quaerat. Sunt, dignissimos! Quia rem dolor consectetur eum reprehenderit rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quibusdam quae, natus corporis eaque saepe iure eos mollitia laborum assumenda enim maxime provident temporibus excepturi, nobis similique consequuntur nostrum dicta.</p>

          <p>{product.id}</p>
        </div>
        <div className='flex  flex-col lg:flex-row xl:flex-row gap-5 px-2 justify-center mb-3'>
          <div className='bg-stone-100 p-10'>
           <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
          <div className='bg-stone-100 p-10'>
            <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
        </div>
      </section>

      <hr className='gap-y-1 py-3 text-stone-500'/>

      <section cl>
        <h1>Related Products</h1>
        <Product2/>
        <Button/>
      </section>
    </div>
  );
}

export default ProductDetail;