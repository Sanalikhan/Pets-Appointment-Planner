import React, {useState, useEffect, useRef} from "react";
import {jsPDF} from "jspdf";
import { useSelector } from "react-redux";


export function DownloadAlert(){
//to access the the appointments from the state 
const {appointments} = useSelector((state)=> state.appointments);
//state to handle the download format options
const [showPrompt, setShowPrompt] = useState(false);

//Close prompt if clicked outside
const promptRef = useRef(null); //for detecting outside clicks
useEffect (()=>{
    const handleClickOutside = (e) => {
    if (promptRef.current && !promptRef.current.contains(e.target)){
        setShowPrompt(false);
    }
    };
        console.log("use effect is running");
    document.addEventListener("mousedown", handleClickOutside);
    return ()=> document.removeEventListener("mousedown", handleClickOutside);
},[]);
//function to download on csv 
const handleCSVDownload = ()=>{
    //first prepare the data
const headers= ["Pet Name", "Owner Name", "Date","Time","Symptoms"];
const rows = appointments.map((appt)=> [appt.petName, appt.ownerName, appt.date, appt.time, appt.symptoms].join(","));
const csvContent = [headers.join(","), ...rows].join("\n");
const blob = new Blob ([csvContent], {type: "text/csv"});
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.setAttribute("download", "appointments.csv");
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
setShowPrompt(false);
console.log("the csv handler just ran");
console.log(`show prompt value:${showPrompt}`);
};

const handlePDFDownload =()=>{
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Pet Appointment List", 20, 20);
    let y=30;
    appointments.forEach((a)=>{
        doc.setFontSize(12);
        doc.text(`Pet Name: ${a.petName}`, 20, y);
        y+=7;
        doc.text(`Owner Name: ${a.ownerName}` , 20, y);
        y+=7;
        doc.text(`Date: ${a.date}`, 20, y);
        y+=7;
        doc.text(`Time: ${a.time}` , 20, y);
        y+=7;
        doc.text(`Symptoms: ${a.symptoms}`, 20, y);
        y+=10;
    });
    doc.save("appointments.pdf");
    setShowPrompt(false);
    console.log("the csv handler just ran");
    console.log(`show prompt value:${showPrompt}`);
};

const handleChange = (e) =>{
const value = e.target.value;
if (value === "csv") handleCSVDownload();
else if (value=== "pdf") handlePDFDownload();
setShowPrompt(false);
}

if (appointments.length === 0) return null;

return (
    <div className="relative">
            <div
            onClick={()=> setShowPrompt(true)}
            className="bg-black hover:bg-blue-600 p-2 rounded-full focus:outline focus: outline-2 focus:outline-blue hover:outline-offset-2 m-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
            </div>
            {showPrompt && (
            <form className="flex flex-col top-12 shadow-xl w-34 items-center text-xs border border-gray-300 p-1 rounded-md bg-white space-y-1 absolute right-0 transition-all duration-300 transform origin-top-right scale-100 opacity-100"
            ref= {promptRef}>
                  <label className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 w-full hover:bg-gray-300">
    <input
      type="radio"
      name="download"
      value="csv"
      onChange={handleChange}
      className="peer hidden"
    />
    <span className="w-2 h-2 rounded-full border border-gray-400 bg-black peer-checked:bg-black peer-checked:border-black transition-all duration-200"></span>
    <span className="peer-checked:text-black text-gray-600">CSV File</span>
  </label>

  <label className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 hover:bg-gray-300 w-full">
    <input
      type="radio"
      name="download"
      value="pdf"
      onChange={handleChange}
      className="peer hidden"
    />
    <span className="w-2 h-2 rounded-full border border-gray-400 bg-black peer-checked:bg-black peer-checked:border-black transition-all duration-200"></span>
    <span className="peer-checked:text-black text-gray-600">PDF File</span>
  </label>
            </form>
        
        )}
    </div>
);
}
     
