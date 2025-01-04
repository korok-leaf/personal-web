"use client";
import Image from "next/image";
import { div } from "framer-motion/client"
import { FocusCards } from "./ui/focus-cards";
import Header from "./Header";
import { TextGenerateEffect } from "./ui/textEffect";
import {useRouter} from "next/navigation";


const Projects = () => {
    const router = useRouter();

    const cards = [
        {
            title: "Forest Adventure",
            src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Valley of life",
            src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const profileClick = () => {
        router.push("/");
    }


    return (
        <div className="relative p-10 min-w-96">
            <div className="flex w-full items-center justify-between">
                <div className="flex">
                    <Image
                        src="/korok.jpg"
                        alt="A beautiful landscape"
                        width={80}
                        height={200}
                        className="rounded-full shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer"
                        onClick={profileClick}
                    />
                </div>
                <div className="flex">
                    <Header />
                </div>
            </div>

            <div className="flex w-full justify-center pb-10">
                <TextGenerateEffect words={"Welcome to my Projects"}/>
            </div>
            <div className="flex w-full">
                <FocusCards cards={cards} />
            </div>
        </div>
    )
}

export default Projects;