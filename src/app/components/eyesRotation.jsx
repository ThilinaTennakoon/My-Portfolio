// EyesRotation.js

import React, { useEffect, useState } from "react";


function EyesRotation() {
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);
  const [containerRect, setContainerRect] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRect) {
        let mouseX = ((e.clientX - containerRect.left) * 100) / containerRect.width;
        let mouseY = ((e.clientY - containerRect.top) * 100) / containerRect.height;

        // Limit the movement to a range (for example, 10% to 90% of the container)
        mouseX = Math.max(10, Math.min(mouseX, 90));
        mouseY = Math.max(10, Math.min(mouseY, 90));

        setMouseX(mouseX + "%");
        setMouseY(mouseY + "%");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRect]);

  useEffect(() => {
    const container = document.getElementById("image-container");
    if (container) {
      setContainerRect(container.getBoundingClientRect());
    }
  }, []);

  const imgWidth = 600;
  const imgHeight = 600;

  return (
      <div className="flex items-center justify-center w-full h-full">
        <div
          id="image-container"
          className="relative"
          style={{
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
          }}
        >
          <img
            src="images/Profile.png"
            alt="Your Image"
            className="w-full  h-full rounded-full"
            style={{ position: 'absolute', zIndex: 2 }}
          />
          <div className="absolute flex gap-[50px] top-[31.5%] left-[48%] transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 1 }}>
            <div className="relative w-[38.5px] h-[22px] bg-gradient-to-br from-gray-800 via-pink-100 to-transparent rounded-full flex items-center justify-center">
              <div
                style={{
                  left: mouseX,
                  top: mouseY,
                  transform: `translate(-${mouseX}, -${mouseY})`,
                }}
                className="absolute w-[17px] h-[17px] bg-green-400 rounded-full"
              >
                <img 
                src="images/le.png"
                alt="Left Eye" 
                className="w-full h-full rounded-full" />
              </div>
            </div>
            <div className="relative w-[38.5px] h-[22px] bg-gradient-to-bl from-gray-800 via-pink-100 to-transparent rounded-full flex items-center justify-center">
              <div
                style={{
                  left: mouseX,
                  top: mouseY,
                  transform: `translate(-${mouseX}, -${mouseY})`,
                }}
                className="absolute w-[17px] h-[17px] bg-green-400 rounded-full"
              >
                <img 
                 src="images/le.png"
                 alt="Right Eye" 
                 className="w-full h-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EyesRotation;
