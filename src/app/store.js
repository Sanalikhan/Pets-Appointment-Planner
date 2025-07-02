import {configureStore} from "@reduxjs/toolkit";
import appointmentReducer from  "../features/appointments/appointmentsSlice.jsx";



export const store=configureStore({
    reducer: {
        appointments: appointmentReducer,
    },
});