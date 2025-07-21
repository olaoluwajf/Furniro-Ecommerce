import Hero from './Hero'
import Features from './Features'
import { useParams } from 'react-router-dom'
import { Rooms } from '../Datas'

const RoomDetail = () => {
    const {id} =useParams();
    const Room =Rooms.find(p => p.id===parseInt(id));

    if(!Room){
        return (
            <div className='text-red-700 text-2xl text-center'>
                Room not found. Please check the URL or return to the room list.
                <Link to="/room" className="block mt-4 text-blue-500 hover:underline">Go to Room List</Link>
            </div>   
        )
    }
  return (
    <div>
        <Hero PageName="RoomDetail"/>
        <div className='m-4 justify-center'>
            <h1 className='text-5xl  font-bold text-center mb-8'>{Room.name}</h1>
            <p className='text-center font-semibold text-2xl text-green-700'>Explore the details of {Room.name} and find your perfect fit.</p>
            <div className='w-full justify-center p-10  flex flex-col lg:flex-row xl:flex-row items-center mt-10 bg-white shadow-2xl'>
                <img src={Room.img} alt={Room.name} className='w-[50%]'/>
                <div className='justify-center m-5'>
                    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, illo amet at pariatur <br />veritatis rem, numquam, velit eum doloribus iusto eos aliquid necessitatibus <br />tenetur nobis a quam ipsam unde libero! Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Ipsa, totam perspiciatis! Blanditiis cumque repellat dicta nisi qui <br />eum eos eius pariatur. Delectus saepe totam, minus eveniet deleniti impedit velit doloremque?</p>
                </div>
            </div>
        </div>
        <Features/>
    </div>
  )
}

export default RoomDetail