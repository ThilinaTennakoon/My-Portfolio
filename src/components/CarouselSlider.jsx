import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from 'next/image';

function CarouselSlider({ slides }) {
  return (
    <Carousel 
    className="rounded-xl"
    // navigation={({ setActiveIndex, activeIndex, length }) => (
    //   <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
    //     {new Array(length).fill("").map((_, i) => (
    //       <span
    //         key={i}
    //         className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
    //           activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
    //         }`}
    //         onClick={() => setActiveIndex(i)}
    //       />
    //     ))}
    //   </div>
    // )}

    //autoplay={true}
    //loop={true}
    // transition={
    //   {
    //     duration: 0.5,
    //     timingFunction: "ease-in-out",
    //     type: "tween",
    //   }
    // }
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={slide.imageUrl}
            alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
          layout="fill"
          width={500}
          height={300}
        />
        <div className="absolute inset-0 grid h-full w-1/2 place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-sm"
            >
              {slide.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              {slide.description}
            </Typography>
          </div>
        </div>
      </div>
    ))}
     
    </Carousel>
  );
}

export default CarouselSlider;
