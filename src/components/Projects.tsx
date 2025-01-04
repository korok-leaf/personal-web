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
        {
            title: "Sala behta hi jayega",
            src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Camping is for pros",
            src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The road not taken",
            src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const profileClick = () => {
        router.push("/");
    }


    return (
        <div className="relative p-10 min-w-96">
            <div className="flex w-full">
                <div className="flex float-left">
                    <Image
                        src="/korok.jpg"
                        alt="A beautiful landscape"
                        width={70} // Set width of the image
                        height={200} // Set height of the image // scale-150 translate-x-6 translate-y-6 animation-delay-1000 animate-profileA 
                        className="rounded-full shadow-lg 
                                   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        onClick={profileClick}
                    />
                </div>
                <div className="flex float-right">
                    <Header/>
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