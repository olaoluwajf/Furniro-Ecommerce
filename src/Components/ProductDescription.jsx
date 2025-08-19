import { products1, products2 } from '../Datas';
import {Link,useParams} from 'react-router-dom'

const ProductDescription = () => {
      const { id } = useParams();
  const allProducts = [...products1, ...products2];
  const product = allProducts.find(p => p.id === parseInt(id));
  return (
    <div>
        <section>
        <div className='flex flex-col xl:flex-row lg:flex-row gap-1 justify-center p-2 text-center items-center'>
          <div className='mr-2'>
            <h1 className='text-2xl p-2 font-semibold px-3'>Description</h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>Additional Information </h1>
          </div>
          <div>
            <h1 className='text-2xl text-stone-400 px-3'>Reviews([{product.id}])</h1>
          </div>
        </div>

        <div className='flex flex-col lg:ml-30 lg:mr-30 md:ml-20 md:mr-20 justify-center text-center'>
          <p className='flex flex-col p-3 xl:ml-20 xl:mr-20   sm:m-4 mb-2 mt-1 justify-center text-center lg:text-left xl:text-left text-lg text-stone-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nam. In ducimus debitis magni, expedita eius illo vitae a asperiores voluptas labore eligendi cum, aliquid quod tempore veritatis? Ullam.
          </p>
          <p className='flex flex-col xl:ml-20 xl:mr-20  mb-2 mt-1 p-3 py-1 justify-center text-center lg:text-left xl:text-left text-lg text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum accusamus placeat voluptates dolores, consequatur ullam, ducimus nihil et delectus quaerat. Sunt, dignissimos! Quia rem dolor consectetur eum reprehenderit rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quibusdam quae, natus corporis eaque saepe iure eos mollitia laborum assumenda enim maxime provident temporibus excepturi, nobis similique consequuntur nostrum dicta.</p>

          <p>{product.id}</p>
        </div>
        <div className='flex  flex-col lg:flex-row xl:flex-row gap-5 px-2 justify-center mb-3'>
          <div className='bg-stone-100 p-10'>
           <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
          <div className='bg-stone-100 p-10'>
            <img className='h-100 w-140' src={product.img} alt={product.name} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDescription