"use client";
import React from "react";

import Intro from "../components/Intro";
import Header from "../components/Header";
import Background from "../components/Background";
import BackgroundPic from "../components/BackgroundPic";

const Main = () => {

    return (
        <div className="relative w-screen h-screen bg-black overflow-scroll min-w-96">
            <div className="absolute h-2/3 w-screen overflow-hidden">
                <BackgroundPic/>  
            </div>
            <div className="relative p-10">
                <Header/>
                <Intro/>
            </div>

            {/*<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-20 flex justify-center items-center"></div>*/}
        </div>
    );
}

export default Main;