import React, { useState } from "react";
import bgImage from '../assets/7777135.jpg';
import applelogo from '../assets/Apple-Logo-Png-Download-768x950.png'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn ,logOut} from "../features/Profiles/authSlice";
import {hardcodedAdmin} from '../features/Profiles/admin';
import bcrypt from "bcryptjs";



export default function LogInPage(){
    // the two states below are for password and password toggling
    const [showPassword, setShowPassword] =useState(false);
    const [password, setPassword] = useState("");
    //the two states below for email and email validation
    const [email,setEmail] = useState("");
    const [emailValid, setEmailValid] = useState("");
    //error ui if user is not found while logging in
    const [loginError, setloginError] = useState("");
    const allUsers = useSelector((state) => state.profiles.users);
    const auth= useSelector((state)=> state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validateEmail = (value) =>{
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!regex.test(value)){
            setEmailValid("Please enter a valid email address");
            console.log(emailValid);
         }
         else{
            setEmailValid("");
         }
    }
    const handleLogin =(email, password)=>{
      if (email === hardcodedAdmin.email){
      const isMatch = bcrypt.compareSync(password,hardcodedAdmin.hashedPassword);
      if (isMatch){
      dispatch(logIn({
       profileId: hardcodedAdmin.profileId,
       email: hardcodedAdmin.email,
       role: hardcodedAdmin.role,
      }));
      navigate('/');
      };
      }
      else{
      const u = allUsers.find((user)=> user.email === email && user.password && bcrypt.compareSync(password, user.password));
      if (!u){
        setloginError("Invalid email or password");
        return;
      }
      else{
      console.log('reducer triggered');
      dispatch(logIn({
      email,
      password,
      profileId: u.profileId,
      role: "client"
      }))
      navigate("/profile");
    }}}
    return  (
        <div className="flex items-center justify-center min-h-screen w-screen bg-cover bg-center"
        style={{backgroundImage: `url(${bgImage})`}}>
          <div className="items-center flex flex-col gap-y-2 h-full bg-white py-32 shadow-2xl rounded-4xl justify-between">
            <div>
                <h2 className="text-2xl text-gray-900 text-center">Sign In</h2>
                <p className="text-sm text-gray-500 mt-2 text-center">Welcome back! Please sign in to continue.</p>

                <form className="flex flex-col gap-y-1">
                    <div className="flex flex-col items-start gap-y-2 m-4">
                        
                    <label className="text-gray-400 pl-5" htmlFor="email">Email</label>
                    <input
                    className="bg-white p-3 rounded-full border border-gray-200 w-xs shadow-md" 
                    id="email"
                    required
                    type="email"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}/>
                    {emailValid && <p className="text-red-500 text-sm pl-5">{emailValid}</p>}
                    </div>
                    <div className="flex flex-col items-start gap-y-2 m-4">
                    <label htmlFor="password" className="text-gray-400 pl-5">Password</label>
                    <div  className="bg-white p-3 rounded-full border border-gray-200 w-xs shadow-md flex justify-between items-center focus-within:outline-black focus-within:outline-2">
                    <input
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    type={showPassword? "text":"password"}
                    required
                    minLength={5}
                    maxLength={8}
                    for="Password"
                    className="focus:outline-none flex-1"/>
                    {password.length > 0 && (
                        <button 
                        type="button"
                        onClick={()=> setShowPassword((prev)=> !prev)}>
                            {showPassword? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                            )}
                            
                        </button>
                    )}
                    </div>
                    </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-full mt-4 w-60 self-center"
              onClick={(e)=>{
                e.preventDefault();
                handleLogin(email,password);
              }}
            >
              Log in
            </button>
            <div className="flex flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 px-5 py-2 border rounded-full shadow-2xl border-gray-300">
                <img src={applelogo} alt="Apple" className="w-5 h-5" />
                <span>Apple</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2 border rounded-full shadow-2xl border-gray-300">
                <img src="../src/assets/google.png" alt="Google" className="w-5 h-5" />
                <span>Google</span>
              </button>
              
            </div>
            </form>
            </div>
            <div className="flex text-gray-500 justify-between text-xs absolute bottom-14 gap-16">
                <p>Terms and Conditions</p>
            </div>
            </div>
        </div>
    )
}

