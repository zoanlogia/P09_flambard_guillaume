import "./Carousel.scss";
import angle from "../../assets/svg/angle.png";
import { useRef } from "react";

const Carousel = ({ images }) => {
  
  const carouselDiv = useRef();

  const next = () => {
    const width = carouselDiv.current.clientWidth;
    const scrollLeft = carouselDiv.current.scrollLeft;
    carouselDiv.current.scrollLeft = scrollLeft + width;
    // Si le carousel est à la dernière photo on revient à la premiere
    if (carouselDiv.current.scrollLeft + width === carouselDiv.current.scrollWidth) {

      carouselDiv.current.scrollLeft = 0;
    }
  };

  const prev = () => {
    const width = carouselDiv.current.clientWidth;
    const scrollLeft = carouselDiv.current.scrollLeft;
    carouselDiv.current.scrollLeft = scrollLeft - width;
  };




  return (
    <div id="carousel" className="carousel">
      <button className="prev" onClick={prev}>
        <img src={angle} alt="angle" />
      </button>
      <div ref={carouselDiv} className="carousel__container">
        {images.map((image, index) => (
          <div key={index} className="carousel__item">
            <div className="list">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              {/* <img src={image} alt={`carousel item ${index + 1}`} /> */}
            </div>
          </div>
        ))}
      </div>
      <button className="next" onClick={next}>
        <img src={angle} alt="angle" />
      </button>
    </div>
  );
};

export default Carousel;
