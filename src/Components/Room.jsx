import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Room = () => {
  const [rooms, setRooms] = useState([]);

  // Fetch rooms from JSON Server API
  useEffect(() => {
    fetch("http://localhost:5000/Rooms") // change to your actual endpoint
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Error fetching rooms:", err));
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Browse the Range</h1>
        <p className="text-center">Choose your favorite. Enjoy comfortable sleep</p>
      </div>

      <div className="flex flex-col justify-center xl:flex-row lg:flex-row text-center items-center px-4 py-4">
        {rooms.map((item) => (
          <Link to={`/room/${item.id}`} key={item.id} className="px-3 items-center">
            <img src={item.img} alt={item.name} />
            <p className="py-4 text-center font-bold">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Room;
