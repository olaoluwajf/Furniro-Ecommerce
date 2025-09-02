import Products from "./Products";
import Button from "./Button";
import Room from './Room'
import { useState } from 'react';
import GalleryImages from "./GalleryImage";
import RoomInspiration from "./RoomInspiration";
import { Link } from 'react-router-dom';


const Home = () => {
    const [cart, setCart] = useState([]);
  return (
    <div className="relative">
      <section className="bg-[url('./assets/hero.png')] bg-cover bg-center w-full min-h-screen">
        
        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className=" hero-background p-8 max-w-lg ml-auto mr-10 my-25 space-y-12">
            <h5 className='text-lg font-medium text-gray-600 tracking-widest'>New Arrival</h5>
            <h1 className="h1-color text-4xl md:text-5xl font-bold tracking-tight">Discover Our New Collection</h1> 
            <p className="text-gray-600">
              Discover premium furniture crafted for modern living. Explore
              our curated collection of sofas, beds, tables, and more—blending 
              timeless design with exceptional quality.
            </p>
            <button className="bg-colors space-x-4 px-6 py-4 rounded-[5px] text-white text-lg font-bold transition-colors cursor-pointer">
              <Link to="/shop">
              Buy now
              </Link>
            </button> 
          </div>
        </div>
      </section>
      <div className="  text-center justify-center px-4 py-4 ">
           <Room />
      </div>
      <div className='justify-center px-5 py-5'>
        <div className='justify-center text-center text-5xl font-bold py-4 mb-5'>
        <h1>Our Products</h1>
        </div>
        <Products cart={cart} setCart={setCart} />
          <div className='justify-center text-center p-5 '>
        <Link to="/shop" className="rounded text-sm bg-white-600 text-amber font-bold border-[1px] hover:bg-stone-200 transition-colors duration-400 px-4 py-3 sm:px-4 md:px-6 lg:px-8 xl:px-10  sm:text-sm sm:py-4 cursor-pointer ">Show More</Link>
        </div>
      </div>
      <div>
        <RoomInspiration/>
      </div>
      <div>
        <GalleryImages/>
      </div>

    </div>
  )
}

export default Home;