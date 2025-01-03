"use client";
import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from "./ui/textEffect";
import { Spotlight } from "./ui/Spotlight";

import {
    LinkedinShareButton,
    LinkedinIcon,
    GithubIcon,

} from 'next-share';

export default function Intro() {

    const intro = "Alex Qin";

    return (
        <div className="bg-transparent w-full pt-20 rounded-md flex md:items-center md:justify-center antialiased relative ">
            
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

                <div className="flex justify-center items-center z-50">
                    <Image
                        src="/korok.jpg"
                        alt="A beautiful landscape"
                        width={350} // Set width of the image
                        height={200} // Set height of the image
                        className="rounded-full shadow-lg scale-150 animate-shrink animation-delay-1000"
                    />
                </div>

                <div className="opacity-0 animate-slideTop animation-delay-1000 z-10">
                    <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                        I am a Computer Science student at the University of Waterloo
                    </p>

                    <div className="flex justify-center mt-10 space-x-4">
                        <a
                            href="https://linkedin.com/in/your-username" // Your LinkedIn profile URL
                            target="_blank" 
                            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <LinkedinIcon size={40} round />
                        </a>

                        <a
                            href="https://github.com/your-username" // Your GitHub profile URL
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