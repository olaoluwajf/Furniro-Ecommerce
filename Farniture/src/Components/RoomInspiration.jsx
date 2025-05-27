import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { RoomImages } from '../Datas';
import Button from './Button';

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRoom = () => {
    setCurrentIndex((prev) => (prev + 1) % RoomImages.length);
  };

  // Calculate previous and next indexes for the sliding effect
  const prevIndex = (currentIndex - 1 + RoomImages.length) % RoomImages.length;
  const nextIndex = (currentIndex + 1) % RoomImages.length;

  return (
    <div className="bg-amber-50 px-1 py-12">
      <div className="max-w-6xl mx-auto flex justify-between flex-col md:flex-row items-center  gap-4 ">
        {/* Left Section - Text Content */}
        <div className="text-left ">
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            50+ Beautiful Rooms Inspiration
          </h1>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <Button name="Explore More" />
        </div>

        {/* Right Section - Sliding Gallery */}
        <div className="md:w-1/2 relative h-96 overflow-hidden">
          <div className="relative h-full flex items-center">
            {/* Previous Image (hidden) */}
            <div className="absolute left-0 w-full transform -translate-x-full transition-transform duration-300">
              <img
                src={RoomImages[prevIndex].image}
                alt={RoomImages[prevIndex].title}
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Current Image */}
            <div className="absolute left-0 w-4/5 z-10 transition-transform duration-300">
              <img
                src={RoomImages[currentIndex].image}
                alt={RoomImages[currentIndex].title}
                className="w-full h-64 object-cover shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                <div className="flex items-start">
                  <span className="text-gray-500 mr-2">0{currentIndex + 1} —</span>
                  <div>
                    <h3 className="font-medium">{RoomImages[currentIndex].title}</h3>
                    <p className="text-gray-600 text-sm">
                      {RoomImages[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Image Preview */}
            <div className="absolute right-0 w-1/3 transform translate-x-4">
              <img
                src={RoomImages[nextIndex].image}
                alt={RoomImages[nextIndex].title}
                className="w-full h-56 object-cover opacity-70 shadow-md"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextRoom}
              className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;