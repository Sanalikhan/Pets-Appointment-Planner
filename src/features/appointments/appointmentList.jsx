import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAppointment } from "../../features/Profiles/ProfilesSlice";
import { DownloadAlert } from "../../components/DownloadAlert";
import Filter from "../../components/filter";



const AppointmentList = ({profileId})=>{
    console.log('profile id, appointments of which will be displayed', profileId);
    //for accessing appointments
    const user = useSelector((state)=> state.profiles.users.find((user)=> user.profileId === profileId));
    console.log('user whose profile is opened', user);
    const appointments = user.appointments;
    console.log('appointments history',appointments);
    //local states for filtering 
    const [filterBy, setFilterBy] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    
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
        <div className=" mx-auto mt-4 w-full space-y-4 flex flex-col">
            <div className="flex justify-between items-start mx-6">            
            <h2 className="font-bold text-xl">List of Appointments</h2>
            <DownloadAlert appointments={appointments}/>
            </div>
            <Filter filterBy={filterBy} setFilterBy={setFilterBy}
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {filteredAppointments.map((appt)=>(
                <div key={appt.petId} className="border-2 border-blue-200 bg-gray-300 py-1 rounded-4xl shadow flex flex-col px-5 sm:px-20 text-blue-900 text-xs sm:text-sm">
                    <h3 className="font-bold pt-3 sm:pb-2 sm:text-sm text-sm">{appt.petName}</h3>
                    <p><strong className="pr-3">Owner:</strong>{appt.ownerName}</p>
                    <p><strong className="pr-3">Date:</strong>{appt.date}</p>
                    <p><strong className="pr-3">Time:</strong>{appt.time}</p>
                    <div className="flex justify-between">
                   <p><strong className="pr-3">Symptoms:</strong>{appt.symptoms}</p>
                  <button 
                    onClick={()=> dispatch(deleteAppointment({profileId, petId: appt.petId}))}
                    className="text-white w-auto  self-end bg-black py-1 px-2 rounded-2xl hover:bg-gray-800"
                    >Delete</button>
                    </div>
                </div>
            ))}
        </div>
     )
};

export default AppointmentList;