import React from "react";
import { setFilterBy, setSearchTerm } from "../features/appointments/appointmentsSlice";
import { useDispatch,useSelector } from "react-redux";

export function Filter() {
    const {filterBy,searchTerm} = useSelector((state)=> state.appointments);
    const dispatch = useDispatch();
    const filterOptions = [
  { label: "Pet Name", value: "petName" },
  { label: "Owner Name", value: "ownerName" },
  { label: "Date", value: "date" },
  { label: "Time", value: "time" },
  { label: "Symptoms", value: "symptoms" },
];

 return (
    <div>
        <input
        type="text"
        placeholder={filterBy ? `Search by ${filterBy}` : `Select filter`}
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        disabled={!filterBy}
         />
         <select
         value={filterBy}
         onChange={(e)=>{
            dispatch(setFilterBy(e.target.value));
            dispatch(setSearchTerm(""));
         }}
         >
            <option value="" 
            disabled>
                ---Select filter by--
            </option>
            {filterOptions.map((option) => 
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>)
            }
         </select>
    </div>
 )
} 