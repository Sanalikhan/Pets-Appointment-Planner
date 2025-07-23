import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "./appointmentsSlice";
import bgImage from '../../assets/beautiful-dog-looking-away-with-copy-space.jpg';
import bgImage1 from '../../assets/beautiful-shot-different-dog-breeds-resting.png';




const AppointmentForm  = () => {

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
};


    return(
    <div style={{backgroundImage:`url(${bgImage})`}}
    className="flex justify-center items-center w-screen h-screen bg-cover bg-center"> 
    <form onSubmit={handleSubmit}
    className="relative p-6 bg-white rounded-4xl flex flex-col  items-start gap-y-10 h">
    <img
    src={bgImage1} 
    className="absolute top-3/4 right-3/4 w-64 h-auto z-10"/>
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
      <button type="submit" className="self-end mr-28 bg-amber-400 px-6 py-2 rounded-full  focus:outline-2 focus:outline-offset-2 focus:outline-amber-600 hover:bg-amber-600">Submit</button>
    </form>
    </div>
    );
};

export default AppointmentForm;