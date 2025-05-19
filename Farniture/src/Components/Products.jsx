import { products } from '../Datas';
import AddToCart from './UI/AddToCart';

const Products= () =>{
  return (
  <div className='justify-center px-5'>
    <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4">
      {products.map((item) => (
       <div className="relative group overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">

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
    </div>
  </div>
);
}

export default Products;