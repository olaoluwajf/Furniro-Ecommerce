import Hero from './Hero'
import Post from './Post'
const Blog = () => {
  return (
    <div>
        <Hero PageName='Blog'/>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-5 m-5 mt-20'>
            <div className='side 1'>
                <div>
                    <Post />
                </div>
                <div>
                    <Post />
                </div>
                <div>
                    <Post />
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Blog