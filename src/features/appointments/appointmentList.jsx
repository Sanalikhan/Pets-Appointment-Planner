import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAppointment } from "./appointmentsSlice";


const AppointmentList = ()=>{
    //access the appointment state from Redux store
    const {appointments, filterBy, searchTerm} = useSelector((state)=> state.appointments);
    
    console.log("Appointments from Redux:",appointments);
    const dispatch = useDispatch();

    //filtering logic
    const filteredAppointments = appointments.filter((appt) => {
        if (!filterBy || !searchTerm) return true;
        const filteredOption = appt[filterBy]?.toLowerCase();
        const searchedTerm = searchTerm.toLowerCase();
        return filteredOption.includes(searchedTerm);
    });
    console.log('filtering login complete!');

     if (appointments.length === 0){
     return (
        <div className="text-center text-gray-500 mt-10 text-lg">No appointments yet.
        </div>
     );
     }

     return (
        <div className=" mx-auto w-full mt-4 space-y-4 flex flex-col">
            <h2 className="font-bold ml-6 text-2xl">List of Appointments</h2>
            {filteredAppointments.map((appt)=>(
                <div key={appt.id} className="border border-2 border-blue-200 bg-gray-300 p-4 rounded-4xl shadow flex flex-col px-20 text-blue-900">
                    <h3 className="font-bold text-lg">{appt.petName}</h3>
                    <p><strong>Owner:</strong>{appt.ownerName}</p>
                    <p><strong>Date:</strong>{appt.date}</p>
                    <p><strong>Time:</strong>{appt.time}</p>
                    <p><strong>Symptoms:</strong>{appt.symptoms}</p>
                    <button 
                    onClick={()=> dispatch(deleteAppointment(appt.id))}
                    className="text-blue-600 w-auto  self-end"
                    >Delete</button>
                </div>
            ))}
        </div>
     )
};

export default AppointmentList;