import Hero from './Hero'
import pcImage from '../assets/Rectangle 68.png'
import post2 from '../assets/Rectangle 68 (1).png'
import post3 from '../assets/Rectangle 68 (2).png'
import { FaSearch } from 'react-icons/fa'
import Post from './Post'
import Features from './Features'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div>
        
        <Hero PageName='Blog'/>
        <div className='flex flex-col lg:flex-row xl:flex-row  justify-center gap-5 m-5 mt-20'>
            <div className='side 1'>
                <div className=''>
                    <Post image={pcImage} header='Going all-in with millennial design'/>
                    <div>
                </div>
                </div>
                <div>
                    <Post image={post2} header='Exploring new ways of decorating'/>
                </div>
                <div>
                    <Post image={post3} header='Handmade pieces that took time to make'/>
                </div>
            </div>
            <div className='side 2 flex flex-col gap-5 w-[30%] p-3 ml-10 '>
                <div>
                    <div className='flex flex-row justify-between items-center gap-4 m-5 '>
                        <input type="text" className='border w-full p-4 rounded-xl text-gray-500' />
                        <span><FaSearch className='font-light text-2xl '/></span>
                    </div>
                    <h1 className='text-3xl font-semibold ml-10'>Categories</h1>
                    <div className='flex flex-row  items-center gap-5 mt-10 m-4 ml-5'>
                        <div className='flex flex-col  gap-12 w-[50%] text-gray-500'>
                            <span>Crafts</span>
                            <span>Design</span>
                            <span>Handmade</span>
                            <span>Interior</span>
                            <span>Wood</span>
                        </div>
                        <div className='flex flex-col gap-12 text-gray-500'>
                            <span>2</span>
                            <span>8</span>
                            <span>7</span>
                            <span>1</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Features/>
    </div>
  )
}

export default Blog