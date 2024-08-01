import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import login from "../assets/images/bgLogin.svg"
import { Eye, EyeSlash } from "@phosphor-icons/react";

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
    <div className="min-h-screen  flex justify-center items-center bg-gradient-to-l from-[#619DC2] to-emptracky-f5 overflow-hidden font-poppins">
      <div className=" relative flex flex-col m-6 space-y-8 bg-emptracky-fd rounded-[20px] md:flex-row">
        <div className="relative">
          <img src={login}
          className="w-full h-full hidden rounded-l-[20px] md:block object-cover"/>
        </div>

        <div className="h-full  w-[60%] m-6 space-y-8 flex flex-col">
          <div>
            <h1 className="text-emptracky-blue font-bold text-4xl">WELCOME BACK!</h1>
            <h1 className="text-emptracky-darkgray text-2xl mb-2">Please login to your account</h1>  
          </div>

          <div>
            <h1 className="text-emptracky-darkgray text-2xl">Username</h1>
            <input className="shadow-md border border-emptracky-blue w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 outline-emptracky-blue" />
            <h1 className="text-emptracky-darkgray text-2xl mt-4 ">Password</h1>
            <input type="password" className=" shadow-md border border-emptracky-blue w-full h-12 bg-emptracky-f5 rounded-[30px] px-5 outline-emptracky-blue" />
           
          </div>

          <div className="w-full flex flex-col gap-3 justify-center items-center mt-12">
            <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px]">
              <h1 className="text-emptracky-f1 text-2xl" onClick={() => navigate("/home")}>Sign in</h1>
            </button>

            <h1 className="text-emptracky-darkgray text-lg text-center ">Already have an account?
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