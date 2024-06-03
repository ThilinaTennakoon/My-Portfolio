// import React from 'react';
// import { Carousel, Typography, Button } from "@material-tailwind/react";
// import Image from 'next/image';

// function CarouselSlider() {
//   return (
//     <Carousel 
//     className="rounded-xl"
//     navigation={({ setActiveIndex, activeIndex, length }) => (
//       <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//         {new Array(length).fill("").map((_, i) => (
//           <span
//             key={i}
//             className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//               activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//             }`}
//             onClick={() => setActiveIndex(i)}
//           />
//         ))}
//       </div>
//     )}

//     autoplay={true}
//     //loop={true}
//     transition={
//       {
//         duration: 0.5,
//         timingFunction: "ease-in-out",
//         type: "tween",
//       }
//     }
//     >
//       <div className="relative h-full w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//           width={1200} // Replace with appropriate width
//           height={800} // Replace with appropriate height
//         />
//         <div className="absolute inset-0 grid h-full w-1/2 place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-sm"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim upon
//             </Typography>
//           </div>
//         </div>
//       </div>
//       <div className="relative h-full w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//           width={1200} // Replace with appropriate width
//           height={800} // Replace with appropriate height
//           />
//         <div className="absolute inset-0 grid h-full w-1/2 place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-sm"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim upon
//             </Typography>
//           </div>
//         </div>
//       </div>
//       <div className="relative h-full w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//           width={1200} // Replace with appropriate width
//           height={800} // Replace with appropriate height
//         />
//         <div className="absolute inset-0 grid h-full w-1/2 place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-sm"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim upon
//             </Typography>
//           </div>
//         </div>
//       </div>
//     </Carousel>
//   );
// }

// export default CarouselSlider;
