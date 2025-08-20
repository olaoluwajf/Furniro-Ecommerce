import g1 from '../assets/Rectangle 36.png';
import g2 from '../assets/Rectangle 37.png';
import g3 from '../assets/Rectangle 38.png';
import g4 from '../assets/Rectangle 39.png';
import g5 from '../assets/Rectangle 40.png';
import g6 from '../assets/Rectangle 41.png';
import g7 from '../assets/Rectangle 43.png';
import g8 from '../assets/Rectangle 44.png';
import g9 from '../assets/Rectangle 45.png';
import './GalleryImages.css';

const GalleryImages = () => {
  return (
    <section className="gallery-container">
      <p className="gallery-subtitle">Share your setup with</p>
      <h1 className="gallery-title">#Funiro Furniture</h1>

      <div className="gallery-grid">
        <div className="gallery-column">
          <div className="gallery-row">
            <img src={g1} alt="Gallery 1" className="gallery-img" />
            <img src={g3} alt="Gallery 3" className="gallery-img-large" />
          </div>
          <div className="gallery-row">
            <img src={g2} alt="Gallery 2" className="gallery-img-medium" />
            <img src={g4} alt="Gallery 4" className="gallery-img-tall" />
          </div>
        </div>

        <div className="gallery-column">
          <img src={g5} alt="Gallery 5" className="gallery-img-large-center" />
        </div>

        <div className="gallery-column">
          <div className="gallery-row">
            <img src={g7} alt="Gallery 7" className="gallery-img-tall" />
            <img src={g9} alt="Gallery 9" className="gallery-img-tall" />
          </div>
          <div className="gallery-row">
            <img src={g6} alt="Gallery 6" className="gallery-img-medium" />
            <img src={g8} alt="Gallery 8" className="gallery-img-medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryImages;
