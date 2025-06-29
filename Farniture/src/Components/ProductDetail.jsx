// ProductDetail.jsx
import { Link, useParams } from 'react-router-dom';
import { FaEllipsisV, FaGreaterThan } from 'react-icons/fa';
import { products1, products2 } from '../Datas';

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
      <div className='flex flex-row p-3 gap-x-1 bg-amber-100 items-center '>
        <Link to='/Home' className='px-1 hover:text-stone-400 text-stone-600'>Home</Link>
        <FaGreaterThan className='text-[12px]'/>
        <Link to='/ShopHero' className='px-1 hover:text-stone-400 text-stone-600'>Shop</Link>
        <FaGreaterThan className='text-[12px] px-'/>
        <FaEllipsisV/>
        <span>{product.name}</span> {/* Display product name here */}
      </div>
      <section className='flex flex-col xl:flex-row lg:flex-row gap-2 gap-x-5 p-2 p-5'>
        <div className='flex flex-col xl:flex-row lg:flex-row gap-3 gap-x-5 px-4' >
          <div className='flex flex-col gap-y-3  items-center'>

            <img src={product.img} alt={product.name} className="w-40 p-4 h-40 object-cover border" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-40 object-cover border" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-40 object-cover border" />
          </div>

          <div className='flex flex-col'>
            <img src={product.img} alt={product.name} className="w-full h-120 object-contain" /> {/* Main Image */}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h3 className="text-2xl font-semibold text-gray-800">Rs.{product.price}</h3>
          {product.discount && (
            <span className='px-2 line-through text-gray-500'>
              Rs.{product.discount}
            </span>
          )}
          {product.disPrecent && (
             <span className='ml-2 text-red-600 font-bold'>
               -{product.disPrecent}%
             </span>
          )}


          <div className='flex flex-row items-center gap-2 px-2'>
            <span>Rate</span>
            <FaEllipsisV/>
            <span>Customer Review</span>
          </div>
          <div className='flex text-stone-600 py-2'>
            <p className='flex text-center p-2 '>{product.description}</p>
          </div>
          {/* You'll need to add logic for size and color based on your product data structure if applicable */}
          <div className='flex flex-col py-3'>
            <h1>Size</h1>
            <div className='flex flex-row items-center gap-1 px-3'>
              <Link className='bg-amber-50 border px-2 rounded-sm'>L</Link>
              <Link className='bg-amber-50 border px-2 rounded-sm'>XL</Link>
              <Link className='bg-amber-50 border px-2 rounded-sm'>XS</Link>
            </div>
          </div>
          <div>
            <h1>Color</h1>
            <div className='flex gap-1'>
              <span>Blue </span>
              <span>Black </span>
              <span>Yellow </span>
            </div>
          </div>
          <div className='flex flex-row p-3 gap-2'>
            <button className='flex flex-row gap-3 border px-5 py-2 rounded-xl'>
              <span onClick={NumberDecrement}>-</span>
              <span>{number}</span>
              <span onClick={NumberIncrement}>+</span>
            </button>

            <button className='border px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-50'>
              Add to cart
            </button>

            <button className='border px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-50'>
              + Compare
            </button>
          </div>
          <hr className='py-2'/>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;