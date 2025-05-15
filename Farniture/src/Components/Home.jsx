import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <>
          <section className="flex-col absolute inset-0 bg-[url('./assets/f.jpeg')] bg-no-repeat bg-cover bg-fixed bg-center h-screen ">
            <Header/>

            <div className="bg-amber-400 items-center ml-[750px] mt-[100px] p-5 rounded-2xl justify-end flex flex-col md:w-1/2 space-y-6 ">
              <h5 className='text-lg font-medium text-gray-600'>New Arrival</h5>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Discover Our New Collection</h1> 
              <p className="text-gray-600 max-w-md">Discover premium furniture crafted for modern living. Explore
                 our curated collection of sofas, beds, tables, and more—blending 
                 timeless design with exceptional quality. Transform your space
                  with pieces that inspire</p>
              
              <button className="bg-violet-600 p-3 rounded-xl text-white m-1 hove:bg-violet-800 items-center text-lg font-bold ">
                Buy now</button> 
            </div>
          </section>
    </>
    
  )
}

export default Home