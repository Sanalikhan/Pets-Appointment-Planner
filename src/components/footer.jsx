import React from "react";
import img from '../assets/animal_logos-removebg-preview.png' 
import footerimg from '../assets/roberto-nickson-N_V13fMHtiE-unsplash-removebg-preview.png'


export default function Footer(){


    return (
        <div className="flex relative bg-pink-300 w-full mt-10 pt-5 sm:mt-15 sm:pt-14 sm:pb-14">
            <img src={footerimg} className="absolute sm:bottom-11 h-64 hidden"/>
            <div className="flex flex-col w-full items-center text-black">
            <div className="text-center">
                <img className="w-25" src={img}/>
            </div>
            <div className="flex gap-x-10 font-bold m-6 text-blue-900">
                <div>Home</div>
                <div>About Us</div>
                <div>Blog</div>
                <div>FAQs</div>
                <div>Contact Us</div>
            </div>
            <div className="flex justify-around gap-x-28 font-bold">
            <div className="flex flex-col items-center">
            <div>CALL US</div>
            <div>+91 999 0999 4547</div>
            </div>
            <div className="flex flex-col items-center">
            <div>LOCATION</div>
            <div>Cankaya Mahalesi, sokak 1232</div>
            <div>Kepez, Antalya, Turkiye</div>
            </div>
            <div className="flex flex-col items-center">
                <div>MAIL US</div>
                <div>info@Vetly.com</div>
            </div>
            </div>
            <div className=""></div>
            <p className="pb-3 mt-6">Copyright <strong>Vetly</strong> All Right Reserve 2025.</p>
        </div>
        </div>
    )
}