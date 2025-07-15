import react, {useState} from "react";
import lineDivider from "../assets/lineDivider-removebg-preview.png"
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import d4 from '../assets/d4.jpg'


export default function Services (){

const [more1,setMore1] = useState("");
const [more2,setMore2] = useState("");
const [more3,setMore3] = useState("");
const [more4,setMore4] = useState("");

    return (
        <div className="flex flex-col items-center slide-up">    
        <h2 className="text-xl md:text-3xl sm:text-2xl slide-up text-center">Services we offer</h2>
        <img src={lineDivider} className="mb-7"/>
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-y-10 gap-x-10 mx-20 mt-6">
         <div className="">
        <img src={d1} className="rounded-3xl"/>
       <p></p>
        <button className="shadow-2xl">Show more</button>
        </div>
        <div className="">
        <img src={d2} className="rounded-3xl"/>
         <p></p>
         <button className="shadow-2xl">Show more</button>
         </div>
         <div className="">
          <img src={d3} className="rounded-3xl"/>
         <p></p>
           <button className="shadow-2xl">Show more</button>
         </div>
        <div className="">
            <img src={d4} className="rounded-3xl"/>
            <p></p>
            <button className="shadow-2xl">Show more</button>
        </div>
        </div>
        </div>
    );
}

            