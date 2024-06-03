// pages/index.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import EyesRotation from '../components/eyesRotation';
import NavBar from '../components/NavBar';
// import CarouselSlider from '../components/CarouselSlider';
import ImageCarousel from '../components/ImageCarousel';

const Home: React.FC = () => {

  const slides = [
    {
      imageUrl: 'slider/Fb1.jpg',
      title: 'Slide 1',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni quas, doloribus aliquid",
    },
    {
      imageUrl: 'slider/Fb2.jpg',
      title: 'Slide 2',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni quas, doloribus aliquid",
    },
    {
      imageUrl: 'slider/Fb3.jpg',
      title: 'Slide 3',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni quas, doloribus aliquid",
    },
   
  ];
  

  return (
    <main className="min-h-screen px-20 mx-auto bg-gradient-to-tr from-blue-400 to-purple-600 dark:from-blue-800 dark:to-gray-900">
      <NavBar/>
      {/* page content */}
      <div className="relative container mx-auto  flex flex-row h-full w-full pt-16">
        <div className="flex w-1/2 h-full gap-10 flex-col px-10">
          <div className="flex-col text-left gap-5 w-full h-auto">
            <h1 className="text-2xl font-semibold text-white text-opacity-35 font-pacifico ">THILINA THENNAKOON</h1>
            <TypeAnimation
             //preRenderFirstString={true}
              style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              sequence={[
                'I am a Web Developer.',
                10000000,
                '',
              ]}
              speed={25}
              cursor={false}
              className="text-5xl font-bold text-white"
            />
             <div className="flex pt-4 flex-col text-white text-opacity-60">
            <p className="text-md font-mono">
              I am a web developer with a passion for creating beautiful and
              functional websites. I specialize in front-end development and
              have experience 
            </p>
          </div>
          </div>
          {/* About me */}
         
          
          {/* <div className="flex flex-row gap-4 justify-center items-center ">
            <div className="flex justify-center mt-8 lg:mt-0 md:mt-20">
              <a
                href="https://www.linkedin.com/in/thilina-thennakoon-tms7/"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 bg-white rounded-full shadow-lg text-purple-600 font-bold "
              >
                Connect with me
              </a>
            </div>

            <div className="flex justify-center lg:mt-0">
              <a
                href="./resume/resume.pdf"
                download="Thilina Thennakoon.pdf"
                className="inline-block px-8 py-4 bg-purple-600 rounded-full shadow-lg text-white font-bold"
              >
                My Resume
              </a>
            </div>

          </div> */}
          <div className="w-full h-[500px] gap-4 justify-center items-center ">
          {/* <CarouselSlider slides={slides} /> */}
          <ImageCarousel slides={slides} />
       
          </div>
        </div>

        {/* Adding the EyesRotation component */}
        <div className="flex items-center justify-center w-1/2 h-full bg-transparent">
          <EyesRotation />
        </div>
      </div>
    </main>
  );
};

export default Home;
