import { createSlice, nanoid } from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";


const initialState =  {
    
    users: JSON.parse(localStorage.getItem('users')) || []
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        registerUser: {
            reducer(state,action){
            state.users.push(action.payload);
            localStorage.setItem('users',JSON.stringify(state.users));
            },
            prepare({email,password}){
                const salt = bcrypt.genSaltSync(10);//cost factor 10 , if its higher it means its more secure but slower 
                const hashedPassword = bcrypt.hashSync(password, salt);


                return {
                    payload:{
                        profileId: nanoid(),
                        email,
                        password: hashedPassword,
                        appointments: [],
                    }
                };
            }
        },
        addAppointment: {
            reducer(state,action){
                const {profileId,appointment} = action.payload;
                const user = state.users.find(user=> user.profileId === profileId);
                console.log('Dispatched payload:', action.payload);
                console.log('found user', user);
                if (user) user.appointments.push(appointment);
                console.log('list of appointments', user.appointments);
                localStorage.setItem('users', JSON.stringify(state.users));
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
        editAppointment:{
            reducer(state,action){
                const {profileId,appointment}= action.payload;
                const user= state.users.find(user=> user.profileId===profileId);
                const appointmentToBeEdited = user.appointments.find((app)=>app.petId === appointment.petId);
                if (appointmentToBeEdited){
                    Object.assign(appointmentToBeEdited,appointment);
                }
                localStorage.setItem('users',JSON.stringify(state.users));
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
                const user= state.users.find(u => u.profileId === profileId);
                if (user){
                    user.appointments = user.appointments.filter(app => app.petId !== petId); 
                }
                localStorage.setItem('users',JSON.stringify(state.users));
            }
        }
}});

export default usersSlice.reducer;
export const {deleteAppointment,addAppointment,editAppointment,registerUser} = usersSlice.actions;