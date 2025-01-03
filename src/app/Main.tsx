import React from "react";

import Intro from "../components/Intro";
import Header from "../components/Header";
import Background from "../components/Background";
import BackgroundPic from "../components/BackgroundPic";

const Main = () => {

    return (
        <div className="relative w-screen h-screen bg-black overflow-scroll">
            <div className="absolute h-2/3 w-screen overflow-x-hidden">
                <BackgroundPic/>  
            </div>
            <div className="relative p-10">
                {/*<Header/>*/}
                <Intro/>
            </div>
        </div>
    );
}

export default Main;