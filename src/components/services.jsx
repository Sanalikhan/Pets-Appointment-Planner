import React, {useState} from "react";
import lineDivider from "../assets/lineDivider-removebg-preview.png"
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import d4 from '../assets/d4.jpg'
import ServicesCard from "./ServicesCard";

export default function Services (){
const services = [
    {
        id: 1,
        img: d1 ,
        serviceDescription: "Preventive care is the cornerstone of a healthy and long life for pets. A veterinary clinic provides routine check-ups that include physical examinations, dental inspections, weight assessments, and early detection screenings.Regular vaccination schedules are tailored to each animal’s age, breed, and lifestyle, ensuring optimal protection. Through consistent preventive care, pet owners can avoid costly treatments later and ensure their companions remain happy and active." 
    },
    {
        id: 2,
        img: d2 ,
        serviceDescription: "Veterinary clinics often have the facilities and expertise to perform a variety of surgical procedures ranging from routine spaying to more complex operations like orthopedic surgeries. Each procedure is conducted with the utmost attention to safety, using modern equipment. This comprehensive surgical care not only helps in treating injuries and conditions but also plays a role in controlling pet populations and preventing certain diseases." 
    },
    {
        id: 3,
        img: d3 ,
        serviceDescription: "Advanced diagnostic tools such as X-rays, ultrasounds, and in-house laboratory testing allow veterinary clinics to quickly and accurately assess a pet’s health. Imaging helps in diagnosing fractures, internal injuries, or abnormalities in organs, while lab tests provide insights into blood chemistry, infections, and other internal conditions. Fast diagnostics lead to quicker treatment, which can significantly improve the chances of recovery and reduce discomfort for the animal." 
    },
    {
        id: 4,
        img: d4 ,
        serviceDescription: "Just like humans, pets need regular dental care to maintain overall health. Veterinary clinics offer professional dental cleaning services that remove plaque and tartar buildup, preventing gum disease, tooth loss, and systemic infections. Exams often include X-rays to identify issues below the gum line that can't be seen with the naked eye. Vets also educate pet owners on home dental care techniques. Addressing dental health prevents serious complications that can affect a pet’s heart, kidneys, and liver." 
    }
]
//states for all cards
const [individualState, setIndividualState] =useState(
    {
    1: false,
    2: false,
    3: false,
    4: false
}
);

//toggle card expansion
const toggleCardExpanison = (id)=>{
    setIndividualState((prev)=>({
        ...prev,
        [id]: !prev[id]
    }));
};

//expanded on show more/show less button toggling
const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col items-center slide-up justify-center">    
        <h2 className="text-xl md:text-3xl sm:text-2xl slide-up text-center">Services we offer</h2>
        <img src={lineDivider} className="mb-7"/>
        <div className="flex gap-6 flex-wrap justify-center mx-20 mt-6">
        {services.map((service)=>(
        <ServicesCard 
           key={service.id}
           img={service.img}
           serviceDescription={service.serviceDescription}
           expanded={individualState[service.id]}
           toggleExpanded={()=>{
           toggleCardExpanison(service.id);
        }}
            />
        ))}
        </div>
        </div>
    );
}

            