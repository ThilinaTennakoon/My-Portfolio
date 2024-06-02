// pages/index.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import EyesRotation from './components/eyesRotation';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

const Home: React.FC = () => {

  const [textColor, setTextColor] = useState('');




  return (
    <main className="min-h-screen px-20 mx-auto bg-gradient-to-tr from-blue-400 to-purple-600 dark:from-blue-800 dark:to-gray-900">
      <Navbar />
      {/* page content */}
      <div className="relative  flex flex-row h-full w-full pt-16">
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
            <p className="text-lg">
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
          <div className="flex flex-grow items-center justify-center w-full bg-green-300">
            <Carousel />
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
