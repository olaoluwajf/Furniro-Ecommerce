
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
        
      <div className='flex flex-col md:flex-col xl:flex-row lg:flex-row gap-2 m-5 justify-center items-center px-1'>
       <div className='flex-col gap-1 '>
            <div className='flex md:flex-row flex-col lg:flex-row xl:flex-row  gap-2 items-end'>
               
               <img src={g1} alt="Image" className='md:w-[100%] lg:w-15 xl:w-30'/>
               <img src={g3} alt="Image" className='md:w-[100%] lg:w-70 xl:w-150'/>
               
            </div>
            <div className='flex flex-col md:flex-row items-start lg:flex-row xl:flex-row md:items-start lg:items-start xl:items-start gap-2 mb-2 mt-2 '>
              <img src={g2} alt="Image" className='w-full md:w-[90%] lg:w-40 xl:w-50' />
              <img src={g4} alt="Image" className='w-full h-60 lg:h-70 xl:h-70 md:w-[70%] lg:w-45 xl:w-[70%]' />
            </div>
        </div>
        
        <div className='gap-2 m-2 flex flex-col items-center'>
          <img src={g5} alt="Image" className='w-full md:w-[100%] lg:w-50 xl:w-70 justify-center' />
        </div>

        <div className='gap-2 flex flex-col '>
          <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 items-end '>
            <img src={g7} alt="Image" className= 'h-[350px] lg:h-[260px] w-full md:w-[100%] lg:w-50 xl:w-80 '/>
            <img src={g9} alt="Image" className='  md:w-[100%] lg:w-50 xl:w-90 lg:h-80'/>
          </div>
          <div className=' flex md:flex-row flex-col lg:flex-row xl:flex-row gap-2 items-start justify-start'>
            <img src={g6} alt="Image" className='sm:w-full xl:h-[310px] lg:h-[280px] md:w-[90%] lg:w-50 xl:w-75'/>
            <img src={g8} alt="Image" className='sm:h-full md:w-[90%] lg:w-50 xl:w-85 '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImages