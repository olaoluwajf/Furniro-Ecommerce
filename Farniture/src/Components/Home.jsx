
const Home = () => {
  return (
    <div className="relative">
      <section className="relative bg-[url('./assets/f.jpeg')] bg-cover bg-center w-full min-h-screen">

        <div className="absolute inset-0 bg-black/30"></div>  
        
        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className="bg-amber-400 p-8 rounded-2xl max-w-lg ml-auto mr-10 my-10 space-y-6">
            <h5 className='text-lg font-medium text-gray-600'>New Arrival</h5>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Discover Our New Collection</h1> 
            <p className="text-gray-600">
              Discover premium furniture crafted for modern living. Explore
              our curated collection of sofas, beds, tables, and more—blending 
              timeless design with exceptional quality.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white text-lg font-bold transition-colors">
              Buy now
            </button> 
          </div>
        </div>
      </section>

      <section className='bg-amber-300 py-16 px-4'>
        <div className="container mx-auto">
          <h1 className='text-3xl font-bold text-center mb-8'>Browse the Range</h1>
          <p className="text-center ">Choose your favorite. Enjoy comfortable sleep</p>
        </div>
      </section>
    </div>
  )
}

export default Home;