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
        <div className="h-full  w-[60%] justify-center items-center p-12 mt-6">
            <h1 className="text-emptracky-blue font-bold text-[32px]">WELCOME BACK!</h1>
            <h1 className="text-emptracky-darkgray text-[24px] mb-10">Please login to your account</h1>  
          
          <div>
            <h1 className="text-emptracky-darkgray text-[24px]">Email</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" />
            <h1 className="text-emptracky-darkgray text-[24px] mt-4">Password</h1>
            <input className="shadow-md w-full h-12 bg-emptracky-f5 rounded-[50px] px-5" />
            
          </div>

          <div className="w-full flex flex-col gap-3 justify-center items-center mt-12">
            <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px]">
              <h1 className="text-emptracky-f1 text-[28px]" onClick={() => navigate("/home")}>Sign in</h1>
            </button>

            <h1 className="text-emptracky-darkgray text-[20px] ">Already have an account?
              <span className= "text-emptracky-blue text-decoration-line: underline hover:cursor-pointer w-fit transition-all duration-200 ml-2" onClick={() => navigate("/register")}>
              Register here!
              </span>
            </h1>
        
          </div>
        </div>
      </div>
    </div>

  
  );
}