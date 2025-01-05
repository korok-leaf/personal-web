"use client";

import React from "react";
import Image from "next/image";


const Badge = ({source, name} : any) => {


    return(
        <div className="bg-white rounded-lg flex flex-col items-center w-15 h-15">
            <Image
                src={source}
                alt={name}
                width={50}
                height={50}
                className="rounded-lg"
            />
        </div>
    );
}

export default Badge;