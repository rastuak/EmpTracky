import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/empTrackyLogo.svg"
import axios from 'axios';


const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.get("http://localhost:8000/users/logout", { withCredentials: true });

        console.log("Cookies cleared");
      } catch (error) {
        console.error(error.response.data.msg);
      }
    };
    handleLogout();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row items-center bg-gradient-to-b from-[#619DC2] to-emptracky-f5 overflow-hidden font-poppins">
      <div className='w-[500px] flex flex-col justify-center items-center text-center text-emptracky-fd'>
        <div className='flex gap-3'>
          <img src={logo} />
          <h1 className=" font-bold text-[64px]">EmpTracky</h1>
        </div>
        <p className='text-3xl'>Save time and manage attendance more efficiently</p>

        <div>
          <button className="shadow-md w-full h-12 bg-emptracky-fd rounded-[50px] mt-7">
            <h1 className="text-emptracky-blue text-[28px]" onClick={() => navigate("/login")}>Sign in</h1>
          </button>
          <button className="shadow-md w-full h-12 bg-emptracky-blue rounded-[50px] mt-7">
            <h1 className="text-emptracky-fd text-[28px]" onClick={() => navigate("/register")}>Sign up</h1>
          </button>
        </div>
      </div>



    </div>
  )
}

export default LandingPage;