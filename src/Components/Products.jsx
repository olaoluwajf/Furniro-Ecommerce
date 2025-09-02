import { Link } from "react-router-dom";
import { products1, products2 } from "../Datas";
import AddToCart from "./UI/AddToCart";

const Products = ({ filter, cart, setCart }) => {
  let allDatas = [...products1, ...products2];

  if (filter === "new") allDatas = allDatas.filter((p) => p.new);
  else if (filter === "discounted") allDatas = allDatas.filter((p) => p.disPrecent);

  return (
    <div className="justify-center px-5 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4">
        {allDatas.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >

            <Link to={`/product/${item.id}`} className="block cursor-pointer">

              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {item.new && (
                <span className="absolute top-3 right-3 bg-green-400 text-white p-2 rounded-full font-bold pointer-events-none">
                  new
                </span>
              )}
              {item.disPrecent && (
                <span className="absolute top-3 right-3 bg-red-700 text-white p-2 rounded-full font-bold pointer-events-none">
                  -{item.disPrecent}%
                </span>
              )}

              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-1">
                  <span className="font-bold">{item.price}</span>
                  {item.discount && (
                    <span className="px-4 line-through">{item.discount}</span>
                  )}
                </div>
              </div>
            </Link>

            {/* AddToCart OUTSIDE Link so it won’t trigger navigation */}
            {cart && setCart && (
              <AddToCart product={item} cart={cart} setCart={setCart} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
