"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import EyesRotation from './EyesRotation';
// import Carousel from './Carousel';

export default function Home() {
  return (
    <main className="min-h-screen p-10 pt-20 bg-gradient-to-tr from-blue-400 to-purple-600">
      {/* <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
       
        <Image
          src="./images/bg-lg.jpeg"
          alt="Background Image LG"
          className="hidden sm:block  opacity-40"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={1920}
          height={720}
        />

        <Image
          src="./images/bg-sm.jpeg"
          alt="Background Image SM"
          className="sm:hidden opacity-20"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={1920}
          height={1080}
        />
      </div> */}

      {/* page content*/}
      <div className="relative flex flex-row h-full w-full">
        <div className="flex w-1/2 h-full gap-10 flex-col px-10">
          <div className="flex text-left h-[150px]">
            <TypeAnimation
              style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              sequence={[
                'Hi, I am Thilina \n I am a Developer.',
                1000,
                'Hi, I am Thilina \n I am a Designer.',
                1000,
                'Hi, I am Thilina \n I am a Programmer.',
                1000,
                'Hi, I am Thilina \n I am a Learner.',
                1000,
                'Hi, I am Thilina \n I am a Problem Solver.',
                1000,
                'Hi, I am Thilina \n I am a Creator.',
                1000,
                'Hi, I am Thilina \n I am a Developer.',
                10000000,
                '',
              ]}
              speed={25}
              cursor={false}
              className="lg:text-6xl font-bold text-white md:text-5xl text-xl"
            />
          </div>
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
            {/* <Carousel /> */}
          </div>
        </div>

        {/* Adding the EyesRotation component */}
        <div className="flex items-center justify-center w-1/2 h-full bg-transparent">
          <EyesRotation />
        </div>
      </div>
    </main>
  );
}
