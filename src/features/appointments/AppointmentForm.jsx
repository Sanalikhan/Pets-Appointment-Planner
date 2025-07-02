import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "./appointmentsSlice";



const AppointmentForm  = ({showForm,setShowForm}) => {
const dispatch = useDispatch();
const [formData, setFormData]= useState({
    petName:"",
    ownerName:"",
    date:"",
    time:"",
    symptoms:'',
});

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev)=> ({
        ...prev,
        [name]:value,
    }));
};
const handleSubmit= (e)=>{
e.preventDefault();
dispatch(addAppointment(formData));
setFormData({
    petName:'',
    ownerName:'',
    date: '',
    time: '',
    symptoms: '',
});
setShowForm(false);
};


    return(<div className="flex flex-col"> 
        {showForm?
    <form onSubmit={handleSubmit}
    className="w-[50%] p-6 mx-auto bg-white flex flex-col  items-start gap-y-10 h">
    <button
    onClick={()=>setFormData({
    petName:'',
    ownerName:'',
    date: '',
    time: '',
    symptoms: '',
})}
    className="font-semibold self-end md:mr-20 lg:mr-20 sm:mr-10">Add Appointment</button>
    <div className="flex flex-col w-auto items-start ml-16 md:ml-10 sm:ml-5 gap-y-8">
    <div className="flex items-start gap-x-4">
    <label>Pet Name</label>
    <input
    type="text"
    name="petName"
    placeholder="Pet Name"
    value={formData.petName}
    onChange={handleChange}
    required
    />
    </div>
    <div className="flex items-start gap-x-4">
    <label className="mr-15">Owner Name</label>
    <input type='text'
    name="ownerName"
    placeholder="Owner Name"
    value={formData.ownerName}
    onChange={handleChange}
    required
    />
    </div>
    <div className="flex items-start gap-x-4">
        <label className="mr-15">Date</label>
        <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required/>
    </div>
    <div className="flex items-start gap-x-4">
      <label>Time</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-start gap-x-4">
      <label className="min-w-[100px] mt-1">Symptoms</label>
      <textarea
      className="border border-gray-300 rounded p-2 w-64"
      rows={4}
      name="symptoms"
      placeholder="symptoms"
      value={formData.symptoms}
      onChange={handleChange}
      required
      />
    </div>
    </div>
      <button type="submit" className="self-end mr-28">Submit</button>
    </form>
    :            
    <button 
     onClick={()=>setShowForm(true)}
     className="font-semibold mt-7 mr-7 self-end">Book an appointment</button>}
    </div>
    );
};

export default AppointmentForm;