import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import DashboardElement from "../components/ui/DashboardElement";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/manager/login", { name, password });
      if (response.status !== 200) throw new Error("Login failed");
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-l from-[#619DC2] to-emptracky-f5 overflow-hidden font-poppins">
      <div className="h-[70%] w-[50%] bg-emptracky-fd rounded-[20px] flex">
        <div className="h-full  w-[40%] bg-login rounded-l-[20px]"/>
        <div className="h-full  w-[60%] justify-center items-center p-12">
            <h1 className="text-emptracky-blue font-bold text-[32px]">WELCOME BACK!</h1>
            <h1 className="text-emptracky-darkgray text-[24px]">Please login to your account</h1>  
          
          <div className="p-8">
            <h1 className="text-emptracky-darkgray text-[24px]">Email</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            <h1 className="text-emptracky-darkgray text-[24px]">Password</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px]" />
            
          </div>

          <div className="p-8 ">
            <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px]">
            <h1 className="text-emptracky-f1 text-[24px]">Sign in</h1>
            </button>

          <div className="p-8">
            <h1 className="text-emptracky-darkgray text-[20px]">Don’t have an account?</h1> 
            
          </div>
      
          </div>
        </div>
      </div>
    </div>

  
  );
}