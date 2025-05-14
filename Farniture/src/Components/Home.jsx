import React from 'react'

const Home = () => {
  return (
    <>
          <section className="   bg-[url('./assets/f.jpeg')] bg-no-repeat bg-cover bg-fixed bg-center h-screen ">
            <div className="bg-amber-400 items-center ml-[100px] p-5 rounded-2xl justify-end  ">
              <h5>New Arrival</h5>
              <h1 className="h1">Discover Our New Collection</h1> 
              <p className="">Discover premium furniture crafted for modern living. Explore
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