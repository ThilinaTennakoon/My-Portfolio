
"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (

    <main className="min-h-screen p-10  pt-20 bg-gradient-to-tr from-blue-400 to-purple-600">
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        {/* For Large Screens */}
        <Image
          src="./images/bg-lg.jpeg"
          alt="Background Image LG"
          className="hidden sm:block  opacity-40"
          style={{ width : "100%", height : "100%", objectFit: "cover" }}
          width={1920}
          height={720}
        />

        {/* For Small Screens */}
        <Image
          src="./images/bg-sm.jpeg"
          alt="Background Image SM"
          className="sm:hidden opacity-20"
          style={{ width : "100%", height : "100%", objectFit: "cover" }}
          width={1920}
          height={1080}
        />
      </div>

      {/* page content*/}
      <div className="relative flex flex-col  h-full w-full">

        <div className=" lg:flex ">

          <div className="flex justify-center lg:mr-8">
            <div className="relative">
              <Image
                src="./images/dp.jpg"
                alt="Profile Image"
                className="rounded-full w-48 h-48 border-8 border-white shadow-xl"
                width={192}
                height={192}
              />
              {/* <div className="absolute -inset-2 border-dashed border-4 border-white rounded-full "></div> */}
            </div>
          </div>

          <div className="flex text-center justify-center lg:text-left lg:ml-8 lg:mt-8 mt-5">

            <TypeAnimation
              style={{ whiteSpace: 'pre-line', display: 'block' }}
              sequence={[
                'Hi, I am Thilina\nI am a Software Engineer.',
                10000000,
                '',
              ]}
              speed={25}
              className="lg:text-6xl font-bold text-white md:text-5xl  text-xl h-[60px] md:h-[100px]"

            />

          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row  lg:mt-8 gap-4">


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

      </div>


    </div>

    </main >

  );
}
