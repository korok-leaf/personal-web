import React from "react";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Background from "./components/Background";

function Main() {

    return (
        <div>
            <Background/>
            <Header/>
            <Intro/>
        </div>
    );
}

export default Main;