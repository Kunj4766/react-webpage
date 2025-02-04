import React, { useState } from "react";
import { communities } from "../../utils/constants";
import "./carousel.css";

const ServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= communities.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? communities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">OUR SERVICES</h1>
      <button
        className="carousel-button prev"
        onClick={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Previous slides"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="carousel-content">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {communities.map((item) => (
            <div key={item.id} className="carousel-slide">
              <div className="carousel-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                />
                <div className="image-overlay">
                  <h3 className="slide-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button next"
        onClick={nextSlide}
        disabled={currentIndex === communities.length - 3}
        aria-label="Next slides"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default ServicesCarousel;
