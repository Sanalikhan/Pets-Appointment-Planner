import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { setFilterBy, setSearchTerm } from "../appointments/appointmentsSlice";



const initialState = {
    users:[]
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        registerUser: {
            reducer(state,action){
            state.users.push(action.payload);
            },
            prepare({email,password}){
                return {
                    payload:{
                        profileId: nanoid(),
                        email,
                        password,
                        appointments: [],
                        filterBy:'',
                        searchTerm:''
                    }
                };
            }
        },
        addAppointment: {
            reducer(state,action){
                const {profileId,appointment} = action.payload;
                const user = state.users.find(user=> user.profileId === profileId);
                if (user) user.appointments.push(appointment);
                localStorage.setItem('appointments', JSON.stringify(state.appointments))
            },
            prepare({profileId,petName,ownerName,date,time,symptoms}){
                return {
                    payload:{
                        profileId,
                        appointment: {
                            petId: nanoid(),
                            petName,
                            ownerName,
                            date,
                            time,
                            symptoms
                        }
                    }
                };
            }
        },
        filterAppointments: {
            reducer(state,action){
            
            }
        },
        setSearchTerm:{
            reducer(state,action){
                const {profileId,term}= action.payload;
                const user= state.users.find(user=> user.profileId===profileId);
                user.searchTerm = term; 
            }
        },
        setFilterBy:{
            reducer(state,action){
                const {profileId,filter}= action.payload;
                const user= state.users.find(user=> user.profileId===profileId);
                if(user){
                user.filterBy = filter; 
            }}
        },
        editAppointment:{
            reducer(state,action){
                const {profileId,appointment}= action.payload;
                const user= state.users.find(user=> user.profileId===profileId);
                const appointmentToBeEdited = user.appointments.find((app)=>app.petId === appointment.petId);
                if (appointmentToBeEdited){
                    Object.assign(appointmentToBeEdited,appointment);
                }
            },
            prepare({profileId,petId,ownerName,petName,date,time,symptoms}){
                return {
                    payload:{
                        profileId,
                        appointment: {
                            petId,
                            petName,
                            ownerName,
                            date,
                            time,
                            symptoms
                        }
                    }
                }
            }
        },
        deleteAppointment:{
            reducer(state,action){
                const {profileId,petId} = action.payload;
                const user= state.users.find(u => u.profileId = profileId);
                if (user){
                    user.appointments = user.appointments.filter(app => app.petId !== petId); 
                }
            }
        }
});







{/* 

    //getting filter appointemnts, use it tommorrow
    export const selectFilteredAppointments = (state, profileId) => {
  const user = state.users.users.find(user => user.profileId === profileId);
  if (!user) return [];

  const { searchTerm, filterBy, appointments } = user;

  return appointments.filter(app => {
    const term = searchTerm.toLowerCase();

    const matchesSearch = 
      app.petName.toLowerCase().includes(term) ||
      app.ownerName.toLowerCase().includes(term) ||
      app.date.includes(term) ||
      app.time.includes(term);

    const matchesFilter = filterBy ? app.date === filterBy : true;

    return matchesSearch && matchesFilter;
  });
};
 


    for pet history it might be useful see it later
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