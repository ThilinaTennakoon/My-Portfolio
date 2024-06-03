import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img src="/slider/Fb1.jpg" alt="Image 1" className="w-full" />
        </div>
        <div>
          <img src="/slider/Fb2.jpg" alt="Image 2" className="w-full" />
        </div>
        <div>
          <img src="/slider/Fb3.jpg" alt="Image 3" className="w-full" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
