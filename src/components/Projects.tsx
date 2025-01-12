"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import { div } from "framer-motion/client"
import { FocusCards } from "./ui/focus-cards";
import Header from "./Header";
import { TextGenerateEffect } from "./ui/textEffect";
import {useRouter} from "next/navigation";


const Projects = () => {
    const router = useRouter();

    const cards = [
        {
            title: "watClub",
            src: "/watClub.png",
            cardLink: "https://github.com/Brucewang15/WatClub",
        },
        {
            title: "User Graphics Processor",
            src: "/badImage.webp",
            cardLink: "https://futurescienceleaders.com/blog/2023/06/a-way-to-refine-drawings-by-the-power-of-computation/",
        },
    ];

    const profileClick = () => {
        router.push("/");
    }

    const [animation, setAnimation] = useState("first");
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setAnimation("next");
            }, 2000); 
    
            return () => clearTimeout(timer); // Clean up timer
        }, []);



    return (
        <div className="relative p-10 min-w-96">
            <div className="flex w-full items-center justify-between">
                <div className="flex">
                    <Image
                        src="/korok.jpg"
                        alt="A beautiful landscape"
                        width={70}
                        height={200}
                        className="rounded-full shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer"
                        onClick={profileClick}
                    />
                </div>
                <div className="flex">
                    <Header />
                </div>
            </div>

            <div className="flex w-full flex-col items-center text-center text-7xl pb-2 font-bold">
                Welcome to my Projects!
            </div>
            <div className="flex flex-col w-full justify-center items-center text-xl pb-7">
                <div className="text-center w-2/3">
                    Below are some projects that I have worked on!
                </div>
                <div className="w-2/3 border-b-2 animate-fadeCenter"></div>
            </div>
            <div className="flex w-full p-5 animate-slideBottom animation-delay-1000 opacity-0">
                <FocusCards cards={cards} />
            </div>
        </div>
    )
}

export default Projects;