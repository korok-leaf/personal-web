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
        <div className="bg-transparent w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-scroll">
            
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <p className="mt-4 font-normal text-4xl text-neutral-300 max-w-lg text-center mx-auto">
                    Hi, my name is
                </p>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    <TextGenerateEffect duration={3} filter={false} words={intro} />
                </h1>
                <div className="flex justify-center items-center">
                    <Image
                        src="/korok.jpg"
                        alt="A beautiful landscape"
                        width={500} // Set width of the image
                        height={300} // Set height of the image
                        className="rounded-full shadow-lg scale-150 animate-shrink animation-delay-1000"
                    />
                </div>

                <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                    I am a Computer Science student at the University of Waterloo
                </p>

                <div className="flex justify-center mt-10 space-x-4">
                    <LinkedinShareButton
                        url="https://linkedin.com/in/your-username" // Your LinkedIn profile URL
                        title="Connect with me on LinkedIn!"
                    >
                        <LinkedinIcon size={40} round />
                    </LinkedinShareButton>

                    <a
                        href="https://github.com/your-username" // Your GitHub profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon size={40} round />
                    </a>
                </div>
            </div>
        </div>
    );
}