import Hero from './Hero'
import pcImage from '../assets/Rectangle 68.png'
import post2 from '../assets/Rectangle 68 (1).png'
import post3 from '../assets/Rectangle 68 (2).png'
import Post from './Post'
const Blog = () => {
  return (
    <div>
        
        <Hero PageName='Blog'/>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-5 m-5 mt-20'>
            <div className='side 1'>
                <div>
                    <Post image={pcImage} header='Going all-in with millennial design'/>
                </div>
                <div>
                    <Post image={post2} header='Exploring new ways of decorating'/>
                </div>
                <div>
                    <Post image={post3} header='Handmade pieces that took time to make'/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Blog