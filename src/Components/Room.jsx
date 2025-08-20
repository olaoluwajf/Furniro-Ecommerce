import { Link } from 'react-router-dom';
import { Rooms } from '../Datas';
import './Room.css';

const Room = () => {
  return (
    <div className="room-section">
      <div className="room-header">
        <h1>Browse the Range</h1>
        <p>Choose your favorite. Enjoy comfortable sleep</p>
      </div>

      <div className="room-grid">
        {Rooms.map((item) => (
          <Link to={`/room/${item.id}`} key={item.id} className="room-item">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Room;
