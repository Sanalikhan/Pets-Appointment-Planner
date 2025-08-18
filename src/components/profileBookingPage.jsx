import React from "react";
import AppointmentForm from "../features/appointments/AppointmentForm";
import { addAppointment} from "../features/Profiles/ProfilesSlice";
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function ProfileBookingPage(){
    const dispatch = useDispatch();
    const profileId = useSelector((state)=> state.auth.currentUser.profileId);
    console.log('current profile id:', profileId);
    const navigate = useNavigate();
    
    //call back function passing as a prop for the parent to decide what action will be dispatched to the form and keep the form dumb for more flexible code
    const handleSubmit = (formData)=>{
        console.log('add appointment action gona dispatch')
        dispatch(addAppointment({profileId, ...formData}));
        console.log('add appointment action dispatched')
        navigate('/profile');
    };


    return <AppointmentForm onSubmit= {handleSubmit} mode="profile"/>;
} 