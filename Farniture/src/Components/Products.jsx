import { products1, products2 } from '../Datas';
import AddToCart from './UI/AddToCart';
import { Link } from 'react-router-dom';

const Products= () =>{
  const allDatas=[...products1, ...products2];
  return (
  <div className='justify-center px-5 py-5'>
    <Link to='/ProductDetail' className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4">
      {allDatas.map((item, index) => (
       <div className="relative group overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
       key={index}
       >
        <div className="relative z-0" >
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {item.new && (
          <span className='p-3 absolute bg-green-400 text-center text-white top-3 right-3 px-2 py-1 rounded-4xl w-[48px] h-[48px] z-32 font-bold justify-center'>
            new
          </span>  
        )}
        {item.disPrecent && (
          <div className='p-3 absolute bg-red-700 text-center  text-white top-3 right-3 px-2 py-1 rounded-4xl w-[48px] h-[45px] z-32 font-bold justify-center'>
            -{item.disPrecent}%
          </div>
        )}

        <div className="p-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <div className="mt-1">
            <span className="font-bold">{item.price}</span>
            {item.discount && 
                (<span className=' px-4 line-through'>
                  {item.discount}
                 </span>
                )
            }
          </div>
        </div>

        <AddToCart/>
      </div>
     ))}
    </Link>
  </div>
);
}

export default Products;