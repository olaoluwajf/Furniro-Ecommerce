import Hero from './Hero'
import pcImage from '../assets/Rectangle 68.png'
import post2 from '../assets/Rectangle 68 (1).png'
import post3 from '../assets/Rectangle 68 (2).png'
import recent1 from '../assets/Rectangle 69.png'
import recent2 from '../assets/Rectangle 69 (1).png'
import recent3 from '../assets/Rectangle 69 (2).png'
import recent4 from '../assets/Rectangle 69 (3).png'
import recent5 from '../assets/Rectangle 69 (4).png'
import { FaSearch } from 'react-icons/fa'
import Post from './Post'
import Features from './Features'
import RecentPosts from './RecentPosts'
const Blog = () => {
  return (
    <div>
        
        <Hero PageName='Blog'/>
        <div className='flex flex-col lg:flex-row xl:flex-row  justify-center gap-5 m-5 mt-20'>
            <div className='side 1 w-{70%}'>
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
            <div className='side 2 flex flex-col gap-5 w-full md:w-[60%] lg:w-[30%] p-3 ml-10 xl:w-[40%] '>
                <div className='w-[80%] '>
                    <div className='flex flex-row  w-full  items-center justify-center gap-4 m-5 '>
                        <input type="text" className='border justify-center w-full p-4 rounded-xl text-gray-500' />
                        <span className=' '> <FaSearch className='font-light text-2xl justify-center text-center items-center'/></span>
                    </div>
                    <h1 className='text-3xl font-semibold ml-10'>Categories</h1>
                    <div className='flex flex-row gap-5 mt-10 m-4 ml-5'>
                        <div className='flex flex-col  gap-12 w-full xl:w-[50%] lg:w-[50%]  text-gray-500'>
                            <span>Crafts</span>
                            <span>Design</span>
                            <span>Handmade</span>
                            <span>Interior</span>
                            <span>Wood</span>
                        </div>
                        <div className='flex flex-col gap-12 text-gray-500 '>
                            <span>2</span>
                            <span>8</span>
                            <span>7</span>
                            <span>1</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <div >
                     <h1 className='font-bold text-2xl m-3'>
                        Recent Photos
                     </h1>
                    <RecentPosts image={recent5} description='Going all-in-with  millenial design' dayInfo='May 03 2025 G.C'/>
                    <RecentPosts image={recent4} description='Exploring new ways of decorating ' dayInfo='May 03 2025 G.C'/>
                    <RecentPosts image={recent3} description='Handmade pieces that took time to make ' dayInfo='May 03 2025 G.C'/>
                    <RecentPosts image={recent2} description='Modern home in Milan ' dayInfo='May 03 2025 G.C'/>

                    <RecentPosts image={recent1} description='Colorful office redesign ' dayInfo='May 03 2025 G.C'/>
                </div>
            </div>
        </div>
        <Features/>
    </div>
  )
}

export default Blog