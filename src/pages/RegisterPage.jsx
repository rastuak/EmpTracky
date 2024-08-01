import React from 'react'
import { House, SignOut, UserCircle, UserPlus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/empTrackyLogo.svg"


const RegisterPage = () => {
const navigate = useNavigate();

  return (
    <div>
    <div className="min-h-screen w-screen flex justify-center items-center bg-no-repeat bg-cover bg-register  overflow-hidden font-poppins gap-12 ">
  
      <div className='w-[500px] justify-center items-center text-center m-6 space-y-8 text-emptracky-fd hidden rounded-[20px] md:block object-cover'>
        <div className='flex gap-3'>
          <img src={logo} />
          <h1 className=" font-bold text-[64px]">EmpTracky</h1>
        </div>
        <p className='text-3xl'>Save time and manage attendance more efficiently</p>
      </div>

      <div className="relative h-full w-[583px] bg-emptracky-fd rounded-[20px] m-6 space-y-8 flex flex-col">

        <div className="h-full w-full justify-center items-center p-12">
          <div className='flex w-full justify-center items-center'>
            <h1 className="text-emptracky-blue font-bold text-4xl mb-2">Register</h1>
          </div>

          <div>
            <h1 className="text-emptracky-darkgray text-2xl">Userame</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 border border-emptracky-blue outline-emptracky-blue  " />
            <h1 className="text-emptracky-darkgray text-2xl">Email</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 border border-emptracky-blue outline-emptracky-blue " />
            <h1 className="text-emptracky-darkgray text-2xl">Phone Number</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 border border-emptracky-blue outline-emptracky-blue" />
            <h1 className="text-emptracky-darkgray text-2xl">Password</h1>
            <input type="password" className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 border border-emptracky-blue outline-emptracky-blue" />
            <h1 className="text-emptracky-darkgray text-2xl">Confirm Password</h1>
            <input type="password" className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 border border-emptracky-blue outline-emptracky-blue" />

          </div>

          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px] mt-7">
              <h1 className="text-emptracky-f1 text-[26px]" onClick={() => navigate("/login")}>Sign up</h1>
            </button>

            <h1 className="text-emptracky-darkgray text-lg text-center">Already have an account?
              <span className=" text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/login")}>
                Login here!
              </span>
            </h1>


            {/* <div className="flex flex-row gap-1 text-[20px]"> 
              <h1 className="text-emptracky-darkgray">Already have an account?</h1>
              <h1 className='text-emptracky-blue'>Login here!</h1>
            </div> */}

          </div>
        </div>

      </div>
    </div>
    </div>
  
    
  )
}

export default RegisterPage