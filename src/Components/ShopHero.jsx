import { FaGreaterThan } from 'react-icons/fa';
import Shop from './Shop';
import Products from './Products';
import Features from './Features';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopHero = () => {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('./assets/Rectangle1.png')] text-center py-20 justify-center">
        <h1 className='text-center justify-center text-4xl font-bold gap-y-2 py-2'>Shop</h1>
        <div className='text-center justify-center flex items-center'>
          <div className='flex p-3 items-center text-center'>
            <Link to='/' className='font-bold text-[15px] p-1 justify-center text-center'>Home</Link> 
            <FaGreaterThan className='justify-center text-[10px]'/>
          </div>
          <span className='text-center justify-center'>Shop</span>
        </div>
      </div>

      {/* Filter UI */}
      <Shop filter={filter} setFilter={setFilter} />

      {/* Products List with Cart */}
<Products filter={filter} cart={cart} setCart={setCart} />
<Products filter={filter} cart={cart} setCart={setCart} />


      {/* Features */}
      <Features />

    </div>
  );
};

export default ShopHero;
