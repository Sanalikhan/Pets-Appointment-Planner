import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { create } from "domain";


const initialState = [{
auth:
{
profileId: "",
email: "",
password: ""
},
appointments :{
list:[
    {
    petId:"",
    petName:"",
    ownerName:"",
    date: "",
    time:""
    }
],
searchTerm: '',
filter:''
}
}];

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        
    }
})







{/* 
    for pet history i might be useful see it later
export const syncPetWithHistory = createAsyncThunk(
    "profiles/syncPetWithHistory",
    async (newAppointment,{getState})=>{
        //accessing the whole state using getState()
        const state = getState();
        const profiles = state.profiles;
        const petId = newAppointment.petId;
        //Find the matching profile
        const existingProfile = profiles.find((profile)=> profile.petId === petId);
        // if the profile already exists
        if (existingProfile){
            return {
                type: "append",
                petId,
                history:{
                    symptoms: newAppointment.symptoms,
                    date:newAppointment.date,
                    time:newAppointment.time
                },
            };
        }
        else {
            return {
                type:"create",
                profile: {
                    petId,
                    name:newAppointment.name,
                    profilePic:newAppointment.profilePic,
                    history:[{
                        symptoms: newAppointment.symptoms,
                        date:newAppointment.date,
                        time:newAppointment.time
                    }],
                },

            }
        }
    }
);

const ProfilesSlice = createSlice({
    name: "profiles",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(syncPetWithHistory.fulfilled,(state,action)=>{
            const data = action.payload;

            if (data.type === "create"){
                //push whole new profile
                state.push(data.profile);
            }
            else if (data.type === "append"){
                const profile = state.find((profile)=>profile.petId === data.petId);
                if (profile) {
                    profile.history.push(data.history);
                }
            }
        });
    },
});

export default ProfilesSlice.reducer;*/}