import {configureStore} from "@reduxjs/toolkit";
import guestSliceReducer from '../features/Profiles/guestSlice';
import userSliceReducer from '../features/Profiles/ProfilesSlice';
import authSlice from '../features/Profiles/authSlice';



export const store=configureStore({
    reducer: {
        profiles : userSliceReducer,
        guests: guestSliceReducer,
        auth: authSlice
    },
});