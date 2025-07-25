import { createSlice, nanoid} from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    appointmentId: "",
    appointment: {
        petId:"",
        petName: "",
        ownerName: "",
        date:'',
        time:'',
        symptoms:''
    }
} 

const guestSlice = createSlice({
    name:'guest',
    initialState,
    reducers:{
        addAppointment: {
            reducer(state,action){
            const {appointmentId,appointment} = action.payload;
            state.appointmentId = appointmentId;
            state.appointment=appointment;
            },
            prepare({petName,ownerName, date,time,symptoms
            }){
                return ({
                    payload:{
                    appointmentId: nanoid(),
                    appointment:{
                        petId: nanoid(),
                        petName,
                        ownerName,
                        date,
                        time,
                        symptoms
                    }
                    }

                })
            }
        }
    }
})

