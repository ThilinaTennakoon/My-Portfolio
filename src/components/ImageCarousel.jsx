import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageCarousel = ({ slides }) => {
  const settings = {
    //SSS customPaging:  true,
    dots: false,
    dotsClass: "justify-center w-full",
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.imageUrl}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover shadow-xl rounded-3xl  "
            />
            <div className="absolute inset-0 grid h-full w-1/3  rounded-l-3xl px-3 py-6 bg-black/75">
              <div className="w-full flex-col gap-2 flex text-left">
                <h4 className="text-white text-lg">
                  {slide.title}
                </h4>
                <p className="text-white text-sm opacity-80">{slide.description}
                  
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
