import {configureStore} from "@reduxjs/toolkit";
import appointmentReducer from  "../features/appointments/appointmentsSlice.jsx";
import profileReducer from "../features/Profiles/ProfilesSlice.jsx"



export const store=configureStore({
    reducer: {
        appointments: appointmentReducer,
        profiles: profileReducer,
    },
});