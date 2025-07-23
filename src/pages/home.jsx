import AppointmentForm from "../features/appointments/AppointmentForm";
import React, { useState } from "react";
import AppointmentList from "../features/appointments/appointmentList";
import Filter from "../components/filter";
import LoginPage from "./signUp"
 import NavBar from "../components/navBar";
 import lineDivider from "../assets/lineDivider-removebg-preview.png";
 import Services from "../components/services";
 import Footer from '../components/footer';
 import { useNavigate } from "react-router-dom";





export default function Home(){
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center h-screen w-full ">
            <NavBar/>
            <div className="flex mt-6">
            <div className="slide-up">
            <h1 className="text-black font-bold sm:text-7xl sm:mt-16 md:ml-3 sm:ml-10 sm:mb-6 mb-2 text-2xl text-center custom1">Happy Pets, Healthier Lives</h1>
            <h2 className="text-sm sm:text-xl sm:ml-10 sm:w-[60%] text-center custom2">Compassionate care, experienced veterinarians, and easy online booking — for every paw and whisker. From vaccinations to virtual consults for your pets</h2>
            </div>
            <div className="flex slide-left mr-2 w-full bg-[url('/assets/cat.jpg')] bg-center bg-cover bg-no-repeat sm:mask-b-from-95% sm:mask-t-from-80% custom-style rounded-full sm:rounded-xl md:rounded-xl lg:rounded-xl grow:2">
            </div>
            </div>
            <button className="font-semibold my-7 mr-7 self-end bg-black py-2 px-4 hover:cursor-pointer hover:bg-gray-700  rounded-full transition hover:outline-black hover:outline-offset-1 hover:outline-1 ml-9 text-white "
            onClick={()=>navigate('/appointmentform')}>Book an appointment</button>
            <div className="flex flex-col items-center my-10">
                <h2 className="text-xl md:text-3xl sm:text-2xl slide-up">WHY CHOOSE US?</h2>
                <img src={lineDivider}/>
                <p className="text-center sm:text-center w-full sm:w-[50%] mt-6 text-sm md:text-lg">Because your pet gets more than just care — they are provided treatment with expertise, and attention tailored just for them. We are trusted by hundreds of pet parents, we combine compassion with cutting-edge veterinary care to keep tails wagging.</p>
            </div>
            <Services/>
            <Footer/>
            <div>            
            <Filter/>
            <AppointmentList/>
            </div>
        </div>
    );
}


