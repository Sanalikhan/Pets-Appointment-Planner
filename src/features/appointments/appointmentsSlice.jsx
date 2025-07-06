import {createSlice, nanoid} from "@reduxjs/toolkit";



const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
const initialState = {
    appointments : savedAppointments,
    filterBy: "",
    searchTerm : "",
};

const appointmentSlice = createSlice({
name: "appointments",
initialState,
reducers: {
    addAppointment : {
        reducer(state, action) {
            state.appointments.push(action.payload);
            localStorage.setItem("appointments", JSON.stringify(state.appointments));
        },
        prepare({petName, ownerName, date, time, symptoms}){
            return {
                payload:{
                    id: nanoid(),
                    petName,
                    ownerName,
                    date,
                    time,
                    symptoms,
                },
            };
        },
    },
        deleteAppointment (state, action){
            state.appointments = state.appointments.filter((appt)=> appt.id !== action.payload);
            localStorage.setItem("appointments", JSON.stringify(state.appointments));
        },
        setFilterBy(state,action){
            state.filterBy = action.payload;
        },
        setSearchTerm(state, action){
            state.searchTerm= action.payload;
        }
},
});

export const {addAppointment, deleteAppointment,setFilterBy,setSearchTerm} = appointmentSlice.actions;
export default appointmentSlice.reducer;
