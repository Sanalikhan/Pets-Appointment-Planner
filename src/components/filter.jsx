import React from "react";
import { useDispatch} from "react-redux";

export function Filter({ filterBy, setFilterBy, searchTerm, setSearchTerm }) {



    const dispatch = useDispatch();
    const filterOptions = [
  { label: "Pet Name", value: "petName" },
  { label: "Owner Name", value: "ownerName" },
  { label: "Date", value: "date" },
  { label: "Time", value: "time" },
  { label: "Symptoms", value: "symptoms" },
];

 return (
    <div className="flex text-xs sm:text-sm w-full px-2 gap-2">
        <input
        className="bg-gray-100 p-2 rounded-full sm:pl-4 sm:mr-6 w-30"
        type="text"
        placeholder={filterBy ? `Search by ${filterBy}` : `Select filter`}
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        disabled={!filterBy}
         />
         <select
         className="bg-gray-100 rounded-full w-35"
         value={filterBy}
         onChange={(e)=>{
            dispatch(setFilterBy(e.target.value));
            dispatch(setSearchTerm(""));
         }}
         >
            <option className="bg-amber-200" value=""  
            disabled>
                ---Select filter by---
            </option>
            {filterOptions.map((option) => 
                <option key={option.value} value={option.value}
                className="text-xs">
                    {option.label}
                </option>)
            }
         </select>
    </div>
 )
} 
export default Filter;