import React from 'react'

const RegisterPage = () => {
  return (
  <div className="h-screen w-screen flex justify-center items-center bg-register overflow-hidden font-poppins">
    <div>
        <h1 className="text-emptracky-fd font-bold text-[64px]">EmpTracky</h1>
    </div>

    <div className="h-[800px] w-[583px] bg-emptracky-fd rounded-[20px] flex">

      <div className="h-full  w-[60%] justify-center items-center p-12">
          <h1 className="text-emptracky-blue font-bold text-[32px]">Register</h1> 
        
        <div className="p-8">
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

        <div className="p-8 ">
          <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px]">
          <h1 className="text-emptracky-f1 text-[24px]">Sign up</h1>
          </button>

        <div className="p-8">
          <h1 className="text-emptracky-darkgray text-[20px]">Already have an account?</h1> 
          
        </div>
    
        </div>
      </div>

    </div>
  </div>
  )
}

export default RegisterPage