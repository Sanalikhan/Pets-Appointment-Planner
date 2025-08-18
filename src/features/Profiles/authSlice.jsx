import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser :null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
    logIn :
    {
    reducer(state,action){
    console.log('dispatching login with:', action.payload);
    const {profileId, email,password,role} = action.payload;
    state.currentUser = {profileId, email,password,role};
    state.isAuthenticated=true;
    }
    },
    logOut:{
        reducer (state,action){
        state.currentUser = null;
        state.isAuthenticated=false;
        }
    }

}});

export const {logIn, logOut} =authSlice.actions;
export default authSlice.reducer;

