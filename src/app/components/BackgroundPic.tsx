"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";

const BackgroundPic = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Image
            src="/forest.svg"
            alt="A beautiful landscape"
            width={innerWidth}
            height={innerHeight}
            className=""
        />
    );
}

export default BackgroundPic;