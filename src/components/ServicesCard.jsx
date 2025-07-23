import React, {useState} from "react";

export default function ServicesCard({ img, serviceDescription, expanded,toggleExpanded}){


return (

    <div className="w-[300px] bg-blue-200 text-black p-6 rounded-2xl ">
        <img src={img} 
        className="rounded-3xl shadow-xl slide-up"/>
        <p className="mt-4">{expanded? serviceDescription: serviceDescription.slice(0,100) + "..."}</p>
        <button className="shadow-2xl text-blue-800"
        onClick={()=>toggleExpanded()
        }>{expanded? "Show less" : "Show more" +" "+">>"}</button>
    </div>

);
}