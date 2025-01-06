"use client";

import Image from "next/image"

import Badge from "./Badge";

const About = ({setAboutMe} : any) => {

    return (
        <div className="absolute w-full inset-0 bg-black/50 backdrop-blur-md z-20 overflow-scroll">
            <div className="relative flex flex-col items-center text-center p-10 animate-slideBottomFast">
                <div className="w-full text-center text-7xl font-bold mb-6">About Me</div>

                <div className="flex flex-col md:flex-row w-full md:w-2/3 p-5 gap-6">
                    <div className="flex-1 text-left text-lg space-y-4">
                        <div>
                            Hello! My name is Alex Qin. <br />
                            I am currently a student at the University of Waterloo studying Computer Science. <br />
                            There isn't much interesting about me, but here are some things I enjoy:
                        </div>

                        <div className="space-y-2 ml-6"> 
                            <div>⚽ Football</div>
                            <div>🏸 Badminton</div>
                            <div>📚 Reading</div>
                            <div>🎮 Not Gaming</div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/alex.jpg" // Replace with your actual image path
                            width={100}
                            height={100}
                            alt="Alex Qin"
                            className="w-64 h-64 shadow-lg rounded-lg object-cover"
                        />
                    </div>
                </div>

                <div className="w-full pt-5 text-4xl font-bold">skills</div>

                <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4 p-4">
                    <Badge source={"/c.png"} name={"c"}/>
                    <Badge source={"/c++.png"} name={"c++"}/>
                    <Badge source={"/css.png"} name={"css"}/>
                    <Badge source={"/github.png"} name={"github"}/>
                    <Badge source={"/html.png"} name={"html"}/>
                    <Badge source={"/java-script.png"} name={"javascript"}/>
                    <Badge source={"/java.png"} name={"java"}/>
                    <Badge source={"/nextjs.webp"} name={"next.js"}/>
                    <Badge source={"/nodejs.png"} name={"node.js"}/>
                    <Badge source={"/python.png"} name={"python"}/>
                    <Badge source={"/react.png"} name={"react"}/>
                    <Badge source={"/tailwind-css.svg"} name={"tailwind css"}/>
                    <Badge source={"/typescript.png"} name={"typescript"}/>
                </div>
                <div className="p-5">
                    <button className="px-6 py-3 bg-white-500 text-white font-semibold rounded-lg shadow-md hover:bg- 
                                       focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                            onClick={() => setAboutMe(false)}
                    >
                        Done
                    </button>
                </div>

            </div>

        </div>
    );
}

export default About;