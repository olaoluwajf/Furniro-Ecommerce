
const Home = () => {
  return (
    <div className="relative">
      <section className="relative bg-[url('./assets/hero.png')] bg-cover bg-center w-full min-h-screen">

        <div className="absolute inset-0 bg-black/30"></div>  
        
        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className=" hero-background p-8 rounded-2xl max-w-lg ml-auto mr-10 my-25 space-y-12">
            <h5 className='text-lg font-medium text-gray-600'>New Arrival</h5>
            <h1 className="h1-color text-4xl md:text-5xl font-bold tracking-tight">Discover Our New Collection</h1> 
            <p className="text-gray-600">
              Discover premium furniture crafted for modern living. Explore
              our curated collection of sofas, beds, tables, and more—blending 
              timeless design with exceptional quality.
            </p>
            <button className="bg-colors space-x-4 px-6 py-4 rounded-[5px] text-white text-lg font-bold transition-colors cursor-pointer">
              Buy now
            </button> 
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;