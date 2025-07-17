import BlogDescription from './BlogDescription'
import {Link} from 'react-router-dom'
import { Posts } from '../Datas'

const Post = () => {
  return (
    <>
    {Posts.map((post) => (
    <Link  className='mt-10 mb-10 flex flex-col rounded-lg'>
      <img src={post.img} alt="" />
      <BlogDescription  />
      <h1 className='text-2xl m-3'>{post.header}</h1>
      <p className='text-gray-500 m-5 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aliquid doloremque, <br /> in suscipit voluptates eos fugiat ratione architecto vitae omnis delectus sunt esse nesciunt beatae <br /> modi, incidunt cupiditate dolore. Doloribus.
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Doloribus, cumque.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.
      </p>

      <Link to='/Post ' className='font-bold text-lg hover:underline underline p-2 m-4'>
              Read more
      </Link>
    </Link>
     ))}
     </>
  )
}

export default Post