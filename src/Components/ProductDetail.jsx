import { Link, useParams } from 'react-router-dom';
import { FaEllipsisV, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Product2 from './Product2';
import Button from './Button';
import ProductDescription from './ProductDescription';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [number, setNumber] = useState(1);

  // fetch product by ID from both endpoints
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // try products1 first
        let res = await fetch(`http://localhost:3000/products1/${id}`);
        if (!res.ok) {
          // if not found in products1, try products2
          res = await fetch(`http://localhost:3000/products2/${id}`);
        }
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  const NumberIncrement = () => setNumber(number + 1);
  const NumberDecrement = () => number > 1 && setNumber(number - 1);

  const AddToCart = () => {
    console.log("Add to cart:", product, "Quantity:", number);
    // later: update your cart state or API
  };

  if (!product) {
    return (
      <div className="p-5 text-center text-red-600">
        Product not found. Please check the URL or return to the shop.
        <Link to="/shop" className="block mt-4 text-blue-500 hover:underline">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className='py-15'>
      {/* Breadcrumb */}
      <div className='flex flex-row p-10 gap-3 m-0 bg-amber-100 items-center '>
        <Link to='/' className='items-center hover:text-stone-500 text-stone-400 text-xl'>Home</Link>
        <FaGreaterThan className='text-[12px]'/>
        <Link to='/shop' className=' hover:text-stone-500 text-stone-400 text-xl items-center'>Shop</Link>
        <FaGreaterThan className='text-[11px]'/>
        <span className='text-2xl '>{product.name}</span> 
      </div>

      {/* Main Product Section */}
      <section className='flex flex-col xl:flex-row lg:flex-row gap-2 gap-x-5 p-5 items-center justify-center'>
        {/* Images */}
        <div className='flex flex-col xl:flex-row lg:flex-row gap-3 gap-x-5 px-4 justify-center text-center w-[70%]' >
          <div className='flex flex-row gap-y-3 lg:flex-col xl:flex-col sm:gap-1 m-3'>
            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover rounded" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover rounded" />
            <img src={product.img} alt={product.name} className="w-40 p-4 h-30 object-cover rounded" />
          </div>
          <div className='flex flex-col lg:gap-1 w-full'>
            <img src={product.img} alt={product.name} className="w-full h-120 object-contain " /> 
          </div>
        </div>

        {/* Details */}
        <div className='flex flex-col p-3 text-start justify-center'>
          <h1 className="text-3xl text-stone-800 py-2">{product.name}</h1>
          <h3 className="text-[17px] p-3 text-stone-400 font-semibold">{product.price}</h3>
          <div className='flex flex-row items-center gap-2 px-2'>
            <span>Rate</span>
            <FaEllipsisV/>
            <span>Customer Review</span>
          </div>
          <div className='flex text-stone-600 py-2'>
            <p className='flex text-center p-2'>{product.description}</p>
          </div>
          <div>
            <p className='text-stone-600'>
              {product.features} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          {/* Quantity + Buttons */}
          <div className='flex flex-col lg:flex-row xl:flex-row p-3 gap-2 py-4 mb-5 items-center '>
            <button className='flex flex-row gap-3 border px-5 py-2 text-center justify-center w-50 rounded-xl items-center '>
              <span onClick={NumberDecrement} className='px-2 text-2xl font-bold cursor-pointer rounded-xl'>-</span>
              <span className='text-lg font-bold'>{number}</span>
              <span onClick={NumberIncrement} className='px-3 text-2xl cursor-pointer rounded-2xl'>+</span>
            </button>

            <button onClick={AddToCart} className='border px-5 py-2 rounded-xl cursor-pointer justify-center hover:bg-amber-50 w-50 text-center'>
              Add to cart
            </button>

            <Link to='/Comparison' className='border px-5 py-2 justify-center text-center rounded-xl cursor-pointer w-50 hover:bg-amber-50'>
              + Compare
            </Link>
          </div>

          <hr className=' font-bold text-gray-200 py-4'/>
          <div className='flex flex-col text-stone-400 text-lg gap-2'>
            <span>SKU: SS001</span>
            <span>Category: {product.description}</span>
            <span>Tags: Sofa, Chair, Home, Shop</span>
            <span className='flex items-center'>Share:
              <div className='flex flex-row gap-2 p-2 text-black'>
                <Link className='px-2'><FaFacebook/></Link>
                <Link className='px-2'><FaLinkedin/></Link>
                <Link className='px-2'><FaTwitter/></Link>
              </div>
            </span>
          </div>
        </div>
      </section>

      <hr className='gap-y-1 py-3 text-gray-200'/>
      <ProductDescription/>
      <hr className='gap-y-1 py-3 text-gray-200'/>

      {/* Related Products */}
      <section className='m-2 text-center'>
        <h1 className='text-3xl font-semibold p-3 text-center'>Related Products</h1>
        <Product2/>
        <Button name='Show more' />
      </section>
    </div>
  );
};

export default ProductDetail;
