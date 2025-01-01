import React from "react";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Background from "./components/Background";
import BackgroundPic from "./components/BackgroundPic";

const Main = () => {

    return (
        <div className="relative h-screen w-screen">
            <div className="absolute h-1/2">
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