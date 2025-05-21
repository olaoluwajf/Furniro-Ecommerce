const Footer = () => {
  
  const Links=['Payment Options', 'Returns', 'Privacy Policies']

  const Lists= Links.map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-stone-600 hover:text-amber-600 transition-colors block py-1"
                >
                  {item}
                </a>
              </li>
            ))
  return (
    <div className="bg-stone-300 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <a href="/" className="text-3xl font-bold text-amber-600 hover:text-amber-700 transition-colors">
            Funiro
          </a>
          <p className="text-stone-600 py-5">
            400 University Drive Suite
            200 Coral<br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-700 uppercase tracking-wider">Links</h3>
          <ul className="space-y-3">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item.toLowerCase()}`} 
                  className="text-stone-600 hover:text-amber-600 transition-colors block py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-700 uppercase tracking-wider">Help</h3>
          <ul className="space-y-3">
             {Lists}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-700 uppercase tracking-wider">Newsletter</h3>
          <form className="space-y-4 flex items-start gap-1 align-middle justify-between">
            <input 
              type="email" 
              placeholder="Enter Your Email Address"  
              className="w-full px-5 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-amber-600 transition-colors"
            />
            <button 
              type="submit"
              className="font-bold hover:underline-offset-2 cursor-pointer px-4 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-amber-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>



      <div className="max-w-7xl mx-auto border-t border-stone-600 mt-12 pt-6 text-left text-stone-600">
        <p>© {new Date().getFullYear()} Funiro. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;