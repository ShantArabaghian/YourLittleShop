import "./Brands.css";
import { useState } from "react";
import Slider from "react-slick";
import polo from "../assets/polo.png";
import hm from "../assets/hm.png";
import nike from "../assets/nike.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import zara from "../assets/zara.png";



import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [polo, hm, nike, gucci,zara,prada];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="brands">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "brandslide brandactiveSlide" : "brandslide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;