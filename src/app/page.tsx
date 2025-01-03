"use client";
import React from "react";
import Image from "next/image";


import Main from "./Main";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Main/>
    {/*<Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>*/}
    </div>
  );
}
