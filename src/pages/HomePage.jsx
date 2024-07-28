import { House, SignOut, UserCircle, UserPlus } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../assets/images/logoDashboard.svg";

export default function HomePage() {
  const [data, setData] = useState([]);
  const handleHomePage = async () => {
    try {
      const response = await axios.post("http://localhost:8000/employee/get");
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleHomePage();
  }, []);

  return (
    <div className="bg-emptracky-f1 min-h-screen w-screen font-poppins flex">
      <div className="w-[15%] min-h-screen py-12 flex-row">
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" className="w-[80px]" />
        </div>
        <div>
          <House size={32} className="text-emptracky-darkgray" />
          <UserCircle size={32} className="text-emptracky-darkgray" />
          <UserPlus size={32} className="text-emptracky-darkgray" />
          <SignOut size={32} className="text-emptracky-darkgray" />
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="bg-[#f5f5f5] h-[90%] w-[95%] shadow-md">
        </div>
      </div>
    </div>
  );
}