import AppointmentForm from "./features/appointments/AppointmentForm";
import React, { useState } from "react";
import img from "./assets/icon-6951393_1280.jpg"
import AppointmentList from "./features/appointments/appointmentList";
import Filter from "./components/filter";


export default function App(){
    const [showForm, setShowForm] = useState(false);
     const handleToggleForm = ()=> {
        setShowForm((prev) => !prev);
     };
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-center gap-x-8 md:py-20 lg:pb-20 bg-black w-screen">
                <img src={img} alt="logo" className="h-20 w-20 border border-white rounded-full"/>
                <h1 className="font-bold text-white">Pet Appointment Planner</h1>
            </div>
            <div className=" container mx-auto px-4 space-y-10 mt-6">
            <AppointmentForm showForm={showForm} setShowForm={setShowForm}/>
            <Filter/>
            <AppointmentList/>
            </div>
        </div>
    );
}


