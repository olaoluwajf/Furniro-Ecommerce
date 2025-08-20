import Products from "./Products";
import Product2 from "./Product2";
import Button from "./Button";
import Room from './Room';
import GalleryImages from "./GalleryImage";
import RoomInspiration from "./RoomInspiration";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text">
            <h5 className="hero-subtitle">New Arrival</h5>
            <h1 className="hero-title">Discover Our New Collection</h1>
            <p className="hero-description">
              Discover premium furniture crafted for modern living. Explore
              our curated collection of sofas, beds, tables, and more—blending 
              timeless design with exceptional quality.
            </p>
            <button className="hero-button">
              Buy now
            </button>
          </div>
        </div>
      </section>

      {/* Room Section */}
      <div className="section-wrapper">
        <Room />
      </div>

      {/* Products Section */}
      <div className="section-wrapper">
        <div className="section-header">
          <h1>Our Products</h1>
        </div>
        <Products />
        <Product2 />
        <div className="show-more-btn">
          <Button name='Show more'/>
        </div>
      </div>

      {/* Room Inspiration Section */}
      <RoomInspiration />

      {/* Gallery Section */}
      <GalleryImages />

    </div>
  );
};

export default Home;
