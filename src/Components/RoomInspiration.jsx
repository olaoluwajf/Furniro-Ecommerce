import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { RoomImages } from '../Datas';
import Button from './Button';
import './RoomInspiration.css';

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRoom = () => {
    setCurrentIndex((prev) => (prev + 1) % RoomImages.length);
  };

  const prevIndex = (currentIndex - 1 + RoomImages.length) % RoomImages.length;
  const nextIndex = (currentIndex + 1) % RoomImages.length;

  return (
    <div className="room-inspiration">
      <div className="room-inspiration-container">
        <div className="room-inspiration-text">
          <h1>50+ Beautiful Rooms Inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <Button name="Explore More" />
        </div>

        <div className="room-inspiration-gallery">
          {/* Previous Image (hidden) */}
          <div className="room-image prev-image">
            <img
              src={RoomImages[prevIndex].image}
              alt={RoomImages[prevIndex].title}
            />
          </div>

          {/* Current Image */}
          <div className="room-image current-image">
            <img
              src={RoomImages[currentIndex].image}
              alt={RoomImages[currentIndex].title}
            />
            <div className="room-image-info">
              <span>0{currentIndex + 1} —</span>
              <div>
                <h3>{RoomImages[currentIndex].title}</h3>
                <p>{RoomImages[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Next Image Preview */}
          <div className="room-image next-image">
            <img
              src={RoomImages[nextIndex].image}
              alt={RoomImages[nextIndex].title}
            />
          </div>

          <button className="next-button" onClick={nextRoom}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
