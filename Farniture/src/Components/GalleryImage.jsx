
import g1 from '../assets/Rectangle 36.png'
import g2 from '../assets/Rectangle 37.png'
import g3 from '../assets/Rectangle 38.png'
import g4 from '../assets/Rectangle 39.png'
import g5 from '../assets/Rectangle 40.png'
import g6 from '../assets/Rectangle 41.png'
import g7 from '../assets/Rectangle 43.png'
import g8 from '../assets/Rectangle 44.png'
import g9 from '../assets/Rectangle 45.png'

const GalleryImages = () => {
  return (
    <div className='text-center'>
        <p>Share your setup with</p>
        <h1>#Funiro Furniture</h1>
        
      <div className='flex py-5 justify-center items-center px-1'>
       <div className=''>
            <div className='flex px-3 gap-3'>
              { 
               <img src={g1} alt="Image" />}
               <img src={g3} alt="Image" />
               
            </div>
            <div className='flex px-3 gap-3 py-4'>
              <img src={g2} alt="Image" />
              <img src={g4} alt="Image" />
            </div>
        </div>
        
        <div>
          <img src={g5} alt="Image" />
        </div>

        <div>
          <div className='flex px-3 gap-3 py-3'>
            <img src={g7} alt="Image" />
            <img src={g9} alt="Image" />
            
            
            
          </div>
          <div className='flex px-3 gap-3'>
            <img src={g6} alt="Image" />
            <img src={g8} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImages