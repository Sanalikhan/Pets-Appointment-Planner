import AppointmentForm from "./features/appointments/AppointmentForm";
import React, { useState } from "react";
import img from "./assets/icon-6951393_1280.jpg"
import AppointmentList from "./features/appointments/appointmentList";


export default function App(){
    const [showForm, setShowForm] = useState(false);
     const handleToggleForm = ()=> {
        setShowForm((prev) => !prev);
     };
    return (
        <div className="flex flex-col min-w-screen h-screen">
            <div className="flex items-center justify-center gap-x-8 w-full md:py-20 lg:pb-20 bg-black">
                <img src={img} alt="logo" className="h-20 w-20 border border-white rounded-full"/>
                <h1 className="font-bold text-white">Pet Appointment Planner</h1>
            </div>
            <AppointmentForm showForm={showForm} setShowForm={setShowForm}/>
            <AppointmentList/>
        </div>
    );
}


