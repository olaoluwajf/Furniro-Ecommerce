import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';

const Shop = ({ filter, setFilter }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterSelect = (option) => {
    setFilter(option);
    setFilterOpen(false);
  };

  return (
    <div className='flex flex-col md:flex-row xl:flex-row lg:flex-row sm:gap-y-5 justify-start p-4 items-center'>

      {/* Filter Button */}
      <div className='relative'>
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className='flex py-3 gap-1 items-center px-3 bg-white'
        >
          <FaSlidersH className='text-2xl mx-2'/> Filter
        </button>

        {filterOpen && (
          <div className='absolute top-full mt-1 left-0 bg-white border rounded shadow-md z-50 w-36'>
            <p className='px-3 py-2 cursor-pointer hover:bg-amber-100' onClick={() => handleFilterSelect('all')}>All</p>
            <p className='px-3 py-2 cursor-pointer hover:bg-amber-100' onClick={() => handleFilterSelect('new')}>New</p>
            <p className='px-3 py-2 cursor-pointer hover:bg-amber-100' onClick={() => handleFilterSelect('discounted')}>Discounted</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Shop;
