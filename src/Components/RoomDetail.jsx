import Hero from './Hero';
import Features from './Features';
import { useParams, Link } from 'react-router-dom';
import { Rooms } from '../Datas';
import './RoomDetail.css';

const RoomDetail = () => {
  const { id } = useParams();
  const room = Rooms.find(p => p.id === parseInt(id));

  if (!room) {
    return (
      <div className="room-not-found">
        Room not found. Please check the URL or return to the room list.
        <Link to="/room" className="room-link">Go to Room List</Link>
      </div>
    );
  }

  return (
    <div>
      <Hero PageName="RoomDetail" />
      <div className="room-detail-container">
        <h1 className="room-title">{room.name}</h1>
        <p className="room-subtitle">
          Explore the details of {room.name} and find your perfect fit.
        </p>

        <div className="room-detail-content">
          <img src={room.img} alt={room.name} className="room-image" />
          <div className="room-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, illo amet at pariatur 
              veritatis rem, numquam, velit eum doloribus iusto eos aliquid necessitatibus 
              tenetur nobis a quam ipsam unde libero! Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Ipsa, totam perspiciatis! Blanditiis cumque repellat dicta nisi qui 
              eum eos eius pariatur. Delectus saepe totam, minus eveniet deleniti impedit velit doloremque?
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default RoomDetail;
