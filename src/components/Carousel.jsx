import { useState, useEffect } from "react";
import "./Carousel.scss"; // Archivo de estilos personalizado
import imagen1 from "../assets/ate-berisso-verdepurpura-logo.jpg";
import imagen2 from "../assets/foto-aerea-bg.jpg";

// eslint-disable-next-line react/prop-types
const Carousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  images = [imagen1, imagen2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [images.length, autoPlayInterval]);

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel border w-full">
      <button className="carousel-button" onClick={goToPreviousImage}>
        Prev
      </button>
      <div className="flex flex-row justify-center items-center">
        <img
          className="carousel-image"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <button className="carousel-button" onClick={goToNextImage}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
