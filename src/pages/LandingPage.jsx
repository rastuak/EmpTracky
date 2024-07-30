import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/empTrackyLogo.svg"

const LandingPage = () => {
const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-[#619DC2] to-emptracky-f5 overflow-hidden font-poppins">
      <div className='w-[500px] flex flex-col justify-center items-center text-center text-emptracky-fd'>
        <div className='flex gap-3'>
          <img src={logo} />
          <h1 className=" font-bold text-[64px]">EmpTracky</h1>
        </div>
        <p className='text-3xl'>Save time and manage attendance more Efficiently</p>
      </div>

      <div className="h-fit w-[583px] bg-landing rounded-[20px] flex">

        <div className="h-full w-full justify-center items-center p-12">
          <div className='flex w-full justify-center items-center'>
            <h1 className="text-emptracky-blue font-bold text-[32px] mb-2">Register</h1>
          </div>

          <div>
            <h1 className="text-emptracky-darkgray text-[24px]">Full Name</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            <h1 className="text-emptracky-darkgray text-[24px]">Email</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            <h1 className="text-emptracky-darkgray text-[24px]">Phone Number</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            <h1 className="text-emptracky-darkgray text-[24px]">Password</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            <h1 className="text-emptracky-darkgray text-[24px]">Confirm Password</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />

          </div>

          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px] mt-7">
              <h1 className="text-emptracky-f1 text-[28px]" onClick={() => navigate("/login")}>Sign up</h1>
            </button>

            <h1 className="text-emptracky-darkgray text-[20px] ">Already have an account?
              <span className=" text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/login")}>
                Login here!
              </span>
            </h1>

          </div>
        </div>

      </div>
       
    
      

    </div>
  )
}

export default LandingPage