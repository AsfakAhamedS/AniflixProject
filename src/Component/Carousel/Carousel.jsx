import { useState,useEffect } from 'react'
import './style.css'

const movies = [
    {
      title: "One Piece",
      description: "Join Luffy and his crew on an adventurous journey to find the One Piece.",
      image: "../../public/slider/slideranimeone.jpg",
    },
    {
      title: "Naruto",
      description: "Follow Naruto Uzumaki as he strives to become the Hokage and protect his village.",
      image: "../../public/slider/slideranimetwo.jpg",
    },
    {
      title: "Attack on Titan",
      description: "Eren and his friends fight for survival against giant humanoid Titans.",
      image: "../../public/slider/slideranimethree.jpg",
    },
    {
      title: "Dragon Ball",
      description: "Goku and his friends embark on thrilling battles to protect Earth from powerful foes.",
      image: "../../public/slider/slideranimefour.jpg",
    },
    {
      title: "Demon Slayer",
      description: "Tanjiro sets out on a dangerous mission to avenge his family and fight demons.",
      image: "../../public/slider/slideranimefive.jpg",
    }
];

function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? movies.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel">
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : "inactive"}`}
            style={{ backgroundImage: `url(${movie.image})` }}
          >
            <div className="overlay"></div>
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    );
};
  
export default Carousel;