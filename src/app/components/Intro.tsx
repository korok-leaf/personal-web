import { TextGenerateEffect } from "./ui/textEffect";
import { Spotlight } from "./ui/Spotlight";


export default function Intro() {

    const intro = "Hi, my name is Alex";

    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    <TextGenerateEffect duration={2} filter={false} words={intro} />
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    I am a Computer Science student at the University of Waterloo
                </p>
            </div>
        </div>
    );
}