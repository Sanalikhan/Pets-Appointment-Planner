import React from "react";
import img from '../assets/animal_logos-removebg-preview.png'
import img1 from '../assets/top-view-pet-accessories.jpg'
import img2 from '../assets/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white.jpg'
import AppointmentForm from "../features/appointments/AppointmentForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppointmentList from "../features/appointments/appointmentList";




function ProfilePage (){
    const navigate = useNavigate();
    const profileId = useSelector((state)=> state.auth.currentUser.profileId);
    return (
        <div className="flex flex-col">
            <nav className="flex w-screen bg-blue-200 sm:py-4 items-center justify-between gap-x-6">
                <div className="flex items-center lg:ml-5 slide-down">
                    <img src={img}/>
                    <div className="lg:text-5xl md:text-3xl text-3xl">Vetly</div> 
                </div>
                <div className="sm:flex items-center md:pr-2 lg:pr-7 gap-x-1 mr-15 px-3 lg:px-5 py-2 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:shadow-2xl slide-down">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-blue-600 rounded-full p-2" viewBox="0 0 640 640"> <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/></svg>
                </div>
            </nav>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent "></div>
            <div style={{backgroundImage: `url(${img1})`}} 
             className="bg-cover bg-center min-h-screen bg-repeat max-w-screen pr-20 pl-20">
                <h1 className="text-4xl font-light pt-20  pb-7 ">Welcome to Pet Appointment Planner! </h1>
                <p className="text-xl">Here you can book new appointments for your pets and track past visits easily.</p>
                <div>            
                    <button className="font-semibold my-7 mr-7 self-end bg-black py-2 px-4 hover:cursor-pointer hover:bg-gray-700  rounded-full transition hover:outline-black hover:outline-offset-1 hover:outline-1 ml-5 text-white "
                    onClick={()=>navigate('/appointmentform/profile')}
                    >Book an appointment</button>
                </div>
            <h1 className="text-2xl mt-7 mb-7">Appointment History</h1>
            <div className="bg-white rounded-2xl pl-10 pr-10 pt-4 pb-4">
                <AppointmentList profileId={profileId}/>
            </div>
            </div>
        </div>
    )
}
export default ProfilePage;