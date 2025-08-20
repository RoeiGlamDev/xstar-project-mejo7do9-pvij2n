'use client';

Here's a simple implementation of a slider component in React with TypeScript, designed to fit the luxurious and elegant theme of your HouseIL website. This slider can be used for showcasing images or properties.

// components/ui/Slider.tsx

import React, { useState } from 'react';
import './Slider.css'; // Import your CSS for styling

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      </div>
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
      <div className="slider-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

### CSS (Slider.css)

You can create a `Slider.css` file to style the slider according to your luxurious theme. Here's a basic example:

/* components/ui/Slider.css */

.slider {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
  border: 2px solid #000; /* Black border for luxury feel */
  border-radius: 10px;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-image {
  width: 100%;
  border-radius: 10px;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 192, 203, 0.8); /* Light pink */
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.slider-indicators {
  text-align: center;
  margin-top: 10px;
}

.indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #000; /* Black */
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: #ff69b4; /* Pink for active indicator */
}

### Usage

You can use the `Slider` component in your application like this:

import React from 'react';
import Slider from './components/ui/Slider';

const App: React.FC = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add your image URLs here
  ];

  return (
    <div>
      <h1>Welcome to HouseIL</h1>
      <Slider images={images} />
    </div>
  );
};

export default App;

Make sure to replace the image URLs with actual paths to your images. This slider component is simple yet elegant, fitting the luxurious theme of your website.