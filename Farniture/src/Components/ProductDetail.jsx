import { Link, useParams } from 'react-router-dom';
import { FaEllipsisV, FaGreaterThan } from 'react-icons/fa';
import { products1, products2 } from '../Datas';
import { FaFacebook, FaTwitter,FaLinkedin } from 'react-icons/fa';
import Product2 from './Product2'
import Button from './Button'

import { useState } from 'react';
import ProductDescription from './ProductDescription';

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

  const AddToCart =() => {

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
      <section className='flex flex-col xl:flex-row lg:flex-row gap-2 gap-x-5 p-5 items-center justify-center  '>
        <div className='flex flex-col xl:flex-row lg:flex-row gap-3 gap-x-5 px-4 justify-center  text-center w-[70%]' >
          <div className='flex flex-row  gap-y-3 lg:flex-col xl:flex-col sm:gap-1  m-3 full'>

            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover border" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover border" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover border" />
          </div>

          <div className='flex flex-col lg:gap-1 w-full'>
            <img src={product.img} alt={product.name} className="w-full h-120 object-contain " /> 
          </div>
        </div>

        <div className='fex flex-col p-3 text-start justify-center'>
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
            <p className=' flex  text-left  items-center text-stone-600 flex-col sm:text-center sm:justfiy-center xl:text-left'>{product.features} Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero neque nostrum dolorum autem mollitia ut dolore eius aliquid et cumque maxime dolorem ea placeat, voluptatibus architecto ipsam! Voluptas, voluptatem!
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
          <div className='flex flex-col lg:flex-row xl:flex-row p-3 gap-2 py-4 mb-5 items-center '>
            <button className='flex flex-row gap-3 border px-5 py-2 text-center justify-center w-50 rounded-xl items-center '>
              <span onClick={NumberDecrement} className='px-2 text-2xl font-bold cursor-pointer rounded-xl hover:bg-amber-100'>-</span>
              <span className='text-lg font-bold'>{number}</span>
              <span onClick={NumberIncrement} className='px-3 text-2xl cursor-pointer hover:bg-amber-100 rounded-2xl'>+</span>
            </button>

            <Link to='' onClick={AddToCart}  className='border px-5 py-2 rounded-xl cursor-pointer justify-center hover:bg-amber-50 w-50 text-center'>
              Add to cart
            </Link>

            <Link to='/Comparison' className='border px-5 py-2 justify-center text-center rounded-xl cursor-pointer w-50  hover:bg-amber-50'>
              + Compare
            </Link>
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
      
      <ProductDescription/>

      <hr className='gap-y-1 py-3 text-stone-500'/>

      <section className='m-2 text-center'>
        <h1 className='text-3xl font-semibold p-3 text-center'>Related Products</h1>
        <Product2/>
        <Button name='Show more' />
      </section>
    </div>
  );
}

export default ProductDetail;