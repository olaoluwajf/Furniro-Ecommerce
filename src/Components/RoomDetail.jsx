import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from './Hero'
import Features from './Features'

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`) // adjust to your JSON Server URL
      .then(res => res.json())
      .then(data => {
        setRoom(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching room:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading room details...</div>;
  }

  if (!room || Object.keys(room).length === 0) {
    return (
      <div className='text-red-700 text-2xl text-center'>
        Room not found. Please check the URL or return to the room list.
        <Link to="/room" className="block mt-4 text-blue-500 hover:underline">Go to Room List</Link>
      </div>
    )
  }

  return (
    <div>
      <Hero PageName="RoomDetail" />
      <div className='m-4 justify-center'>
        <h1 className='text-5xl font-bold text-center mb-8'>{room.name}</h1>
        <p className='text-center font-semibold text-2xl text-green-700'>
          Explore the details of {room.name} and find your perfect fit.
        </p>
        <div className='w-full justify-center p-10 flex flex-col lg:flex-row xl:flex-row items-center mt-10 bg-white shadow-2xl'>
          <img src={room.img} alt={room.name} className='w-[50%]' />
          <div className='justify-center m-5'>
            <p className='text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, illo amet at pariatur <br />
              veritatis rem, numquam, velit eum doloribus iusto eos aliquid necessitatibus <br />
              tenetur nobis a quam ipsam unde libero! Lorem ipsum dolor sit, amet consectetur <br />
              adipisicing elit. Ipsa, totam perspiciatis! Blanditiis cumque repellat dicta nisi qui <br />
              eum eos eius pariatur. Delectus saepe totam, minus eveniet deleniti impedit velit doloremque?
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  )
}

export default RoomDetail
