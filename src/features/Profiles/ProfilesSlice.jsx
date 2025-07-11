import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = [{
    petId:"",
    profilePic:null,
    name:"",
    history:[{
        symptoms:"",
        date:"",
        time:""
    }],
}]

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

export default ProfilesSlice.reducer;