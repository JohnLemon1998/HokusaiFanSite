import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import foden from './images/foden.jpg';
import foden2 from './images/foden2.jpg';
import foden3 from './images/foden3.jpg';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="home">

    <Link to="/about">
      <div className="image-container">
        <img
          src={foden}
          alt="Header Image"
          className={selectedImage === 1 ? '' : 'grayscale'}
          onMouseEnter={() => setSelectedImage(1)}
          onMouseLeave={() => setSelectedImage(null)}
        />
        {selectedImage === 1 && <p className="overlay-text">About</p>}
      </div>
      </Link>

      <Link to="/portfolio">
      <div className="image-container">
        <img
          src={foden2}
          alt="Header Image2"
          className={selectedImage === 2 ? '' : 'grayscale'}
          onMouseEnter={() => setSelectedImage(2)}
          onMouseLeave={() => setSelectedImage(null)}
        />
        {selectedImage === 2 && <p className="overlay-text">Portfolio</p>}
      </div>
      </Link>

      <Link to="/resume">
      <div className="image-container">
        <img
          src={foden3}
          alt="Header Image3"
          className={selectedImage === 3 ? '' : 'grayscale'}
          onMouseEnter={() => setSelectedImage(3)}
          onMouseLeave={() => setSelectedImage(null)}
        />
        {selectedImage === 3 && <p className="overlay-text">Resume</p>}
      </div>
      </Link>
      
    </div>
  );
}

export default Home;
