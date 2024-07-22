import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


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
    <div className="">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative ">
            <Image
              src={slide.imageUrl}
              alt={`image ${index + 1}`}
              className="object-cover rounded-3xl  "
              width={500}
              height={300}
            />
            <div className="absolute inset-0 grid h-auto w-1/3  rounded-l-3xl px-3 py-6 bg-black/75">
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
