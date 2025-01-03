"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const BackgroundPic = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
        if (window.innerWidth < 950) {
            setWindowDimensions({
                width: 950, 
                height: window.innerHeight,
            })
        } else {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        } 
    };

    // Set initial dimensions and add event listener
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Image
      src="/forest.svg" // Replace with your image path
      alt="A beautiful landscape"
      height={3}
      width={windowDimensions.width}
      className="object-cover absolute bottom-0 max-w-none"
    />
  );
};

export default BackgroundPic;
