import React from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment as addGuestAppointment } from '../features/Profiles/guestSlice';
import AppointmentForm from '../features/appointments/AppointmentForm';

export default function GuestBookingPage (){
const dispatch = useDispatch();
const handleSubmit = (formData)=>{
    dispatch(addGuestAppointment({...formData}))
}
    return (
        <AppointmentForm onSubmit={handleSubmit} mode='guest'/>
    );
}