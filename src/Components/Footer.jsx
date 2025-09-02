import { Link } from "react-router-dom"
const Footer = () => {
  
  const Links=['Payment Options', 'Returns', 'Privacy Policies']
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-12 h-120 border-t border-stone-300">
      <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <Link to='/' className='flex items-center'>
            <h1 className='text-3xl font-bold text-black'>Furniro.</h1>
          </Link>
          <p className="text-stone-400 py-5 font-medium">
            400 University Drive Suite
            200 Coral<br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-400 uppercase tracking-wider">Links</h3>
          <ul className="space-y-5 flex flex-col font-bold text-stone-700">
            <Link to='/' className="hover:text-amber-600">
              Home
            </Link>
            <Link to='/shop' className="hover:text-amber-600 ">
              Shop
            </Link>
            <Link to='/blog' className="hover:text-amber-600 ">
              Blog
            </Link>
            <Link to='/contact' className="hover:text-amber-600 ">
              Contact
            </Link>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-400 uppercase tracking-wider">Help</h3>
          <ul className="space-y-5 flex flex-col font-bold text-stone-700">
            <Link 
              href="/" 
              className="text-stone-600 hover:text-amber-600 transition-colors block py-1"
            >
              Payment Options
            </Link>
            <Link 
              href="/" 
              className="text-stone-600 hover:text-amber-600 transition-colors block py-1"
            >
              Returns
            </Link>
            <Link 
              href="/" 
              className="text-stone-600 hover:text-amber-600 transition-colors block py-1"
            >
              Privacy Policies
            </Link>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-400 uppercase tracking-wider">Newsletter</h3>
          <form className="space-y-4 flex items-start gap-3 align-middle justify-between">
            <input 
              type="email" 
              placeholder="Enter Your Email Address"  
              className="w-250 py-2 border-b border-stone-400 bg-transparent focus:outline-none focus:border-amber-600 transition-colors"
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



      <div className="max-w-7xl mx-auto border-t border-stone-600 mt-36 pt-6 text-left text-stone-600">
        <p>© {new Date().getFullYear()} Furniro. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;