import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BgCover from '../assets/Rectangle1.png'

const Hero = (props) => {
  return (
    <div className=" p-10 flex flex-col" style={{backgroundImage:`url(${BgCover})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className='p-3 justify-center text-center'>
            <h1 className='text-[35px] py-3 font-bold'>{props.PageName}</h1>
            <div className='flex flex-row gap-1 text-center justify-center items-center'>
                <Link className='text-[15px] py-3 font-bold' to='/Home'>
                    Home
                </Link>
                <FaGreaterThan className='text-center  text-[13px]'/>
                <span className='gap-1 px-2'>{props.PageName}</span>

            </div>
        </div>
    </div>
  )
}

export default Hero