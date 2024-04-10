import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import hokusai from './images/hokusai.jpg';
import wave from './images/wave.jpg';
import fuji from './images/fuji.png';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="home">

    <Link to="/about">
      <div className="image-container">
        <img
          src={wave}
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
          src={hokusai}
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
          src={fuji}
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
