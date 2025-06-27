import { FaGreaterThan } from 'react-icons/fa'
import Products from './Products'
import Shop from './Shop'
import NButton from './UI/NButton'
import Features from './Features'
import { Link } from 'react-router-dom'
const ShopHero = () => {
  return (
    <div>
    <div className=" bg-[url('./assets/Rectangle1.png')] text-center py-20 justify-center">
        <h1 className='text-center justify-center text-4xl font-bold gap-y-2 py-2'>Shop</h1>
        <div className='text-center justify-center  flex items-center'>
            <div className='flex p-3 items-center text-center'>
                <Link to='/Home' className='font-bold text-[15px] p-1  justify-center text-center'>Home</Link> 
                <FaGreaterThan className='justify-center text-[10px]'/>
            </div>
            <span className='text-center justify-center'>Shop</span>
        </div>
    </div>
    <Shop/>
        <div>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
            <div className='flex flex-row justify-center' >
              <NButton name='1' className='bg-amber-500 font-bold'/>
              <NButton name='2'/>
              <NButton name='3' />
              <div onClick={"Hello"}>
                 <NButton name='next'/>
              </div>
            </div>
        </div>
      <Features/>
    </div>
  )
}

export default ShopHero