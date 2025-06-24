
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
    <div className='text-center mt-4'>
        <p className=''>Share your setup with</p>
        <h1 className='font-bold text-3xl'>#Funiro Furniture</h1>
        
      <div className='flex flex-col xl:flex-row lg:flex-row lg:gap-1 py-1 justify-center items-center px-1'>
       <div className=''>
            <div className='flex px-3 gap-3 items-end'>
              { 
               <img src={g1} alt="Image" />}
               <img src={g3} alt="Image" className='h-[320px] '/>
               
            </div>
            <div className='flex px-3 gap-3 py-4 '>
              <img src={g2} alt="Image" />
              <img src={g4} alt="Image"  className='h-[250px]'/>
            </div>
        </div>
        
        <div>
          <img src={g5} alt="Image" />
        </div>

        <div>
          <div className='flex px-3 gap-3 py-3 items-end'>
            <img src={g7} alt="Image" className='h-[360px] '/>
            <img src={g9} alt="Image" />
            
            
            
          </div>
          <div className='flex @min-sm:grid px-3 gap-3 '>
            <img src={g6} alt="Image" />
            <img src={g8} alt="Image" className='h-[180px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImages