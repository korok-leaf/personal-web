"use client";
import React from "react";
import {useState, useEffect} from "react";

import Intro from "../components/Intro";
import Header from "../components/Header";
import Background from "../components/Background";
import BackgroundPic from "../components/BackgroundPic";
import About from "../components/About";

const Main = () => {

    const [aboutMe, setAboutMe] = useState(false);

    return (
        <div className="relative w-screen bg-black min-w-96">
            <div className="absolute h-2/3 w-screen overflow-hidden">
                <BackgroundPic/>  
            </div>
            {aboutMe && (
                <About setAboutMe={setAboutMe}/>
            )}
            <div className="relative p-10">
                <Header/>
                <Intro setAboutMe={setAboutMe}/>
            </div>

            {/*<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-20 flex justify-center items-center"></div>*/}
        </div>
    );
}

export default Main;