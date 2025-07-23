import React, {useState} from "react";
import img from "../assets/animal_logos-removebg-preview.png"
import { useNavigate } from "react-router-dom";

function NavBar(){
const navigate = useNavigate();


    return (
        <div>
            <nav className="flex w-screen bg-blue-200 sm:py-4 items-center justify-between gap-x-6">
            <div className="flex items-center lg:ml-5 slide-down">
                <img src={img}/>
                <div className="lg:text-5xl md:text-3xl text-3xl">Vetly</div> 
            </div>
            <div className="sm:flex items-center hidden slide-down">
            <a className="lg:px-7 md:px-2 py-3 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:font-bold hover:cursor-pointer hover:shadow-md relative nav-divider custom3">Home</a>
            <a className="lg:px-7 md:px-2 py-3 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:font-bold hover:cursor-pointer hover:shadow-md relative nav-divider custom3">Services</a>
            <a className="lg:px-7 md:px-2 py-3 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:font-bold hover:cursor-pointer hover:shadow-md relative nav-divider custom3">Our Team</a>
            <a className="lg:px-7 md:px-2 py-3 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:font-bold hover:cursor-pointer hover:shadow-md relative nav-divider custom3">Blog</a>
            <a className="lg:px-7 md:px-2 py-3 transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:font-bold hover:cursor-pointer hover:shadow-2xl custom3">Contact</a>
            </div>
            <div className="sm:flex items-center md:pr-2 lg:pr-7 gap-x-1  text-white hidden mr-2 custom3 slide-down">
                <button className="px-3 lg:px-5 py-2 focus:outline-1 focus:outline-offset-1 rounded-3xl transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:shadow-2xl bg-black"
                onClick={()=> navigate('/login')}>Login</button>
                <button className="px-3 lg:px-5 bg-black hover:border hover:border-white focus:outline-white focus:outline-1 py-2 focus:outline-offset-1 rounded-3xl transition delay-100 duration-100 ease-in-out hover:translate-y-1 hover:shadow-2xl mr-2"
                onClick={()=> navigate('/signup')}>Register</button>
            </div>
            </nav>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>
    )
}
export default NavBar;