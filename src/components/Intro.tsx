"use client";
import React from 'react';
import Image from 'next/image';
import {useState, useEffect} from "react";
import { TextGenerateEffect } from "./ui/textEffect";
import { Spotlight } from "./ui/Spotlight";

import {
    LinkedinShareButton,
    LinkedinIcon,
    GithubIcon,

} from 'next-share';

export default function Intro({ aboutMe, setAboutMe } : any) {
    const [animation, setAnimation] = useState("first");

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimation("next");
        }, 2000); 

        return () => clearTimeout(timer); // Clean up timer
    }, []);

    return (
        <div className="bg-transparent w-full pt-10 rounded-md flex md:items-center md:justify-center antialiased relative">
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <div className="opacity-0 animate-slideBottom animation-delay-1000 mb-10">
                    <p className="mt-4 font-normal text-4xl text-black max-w-lg text-center mx-auto">
                        Hi, my name is
                    </p>
                    <h1 className="text-4xl md:text-7xl font-bold text-black text-center bg-clip-text  bg-opacity-50">
                        {/*<TextGenerateEffect duration={3} filter={false} words={intro} />*/}
                        Alex Qin
                    </h1>
                </div>

                <div className="relative flex justify-center items-center z-30">
                    <div className={`${animation === "first" ? "" : "group"} relative`}>
                        <Image
                            src="/korok.jpg"
                            alt="A beautiful landscape"
                            width={350} // Set width of the image
                            height={200} // Set height of the image
                            className={`${animation === "first"
                                ? "animate-shrink animation-delay-1000 scale-150"
                                : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer"
                                } rounded-full shadow-lg`}
                            onClick={() => setAboutMe(!aboutMe)}
                        />

                        {/* Popup */}
                        <div className="absolute w-[220] bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg text-center">
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-800"></div>
                            Yahaha, You found me! <br/>
                            Click to learn more
                        </div>
                    </div>
                </div>

                <div className="opacity-0 animate-slideTop animation-delay-1000 z-10">
                    <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                        I am a Computer Science student at the University of Waterloo
                    </p>

                    <div className="flex justify-center mt-10 space-x-4">
                        <a
                            href="https://www.linkedin.com/in/alex-qin-503088316/" // Your LinkedIn profile URL
                            target="_blank" 
                            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <LinkedinIcon size={40} round />
                        </a>

                        <a
                            href="https://github.com/korok-leaf" // Your GitHub profile URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <GithubIcon size={40} round />
                        </a>

                        <a
                        href="resume"
                        target="_blank"
                        >
                            <Image 
                            src="/resume-7.png"
                            alt="resume"
                            width={40}
                            height={40}
                            className="rounded-full bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}