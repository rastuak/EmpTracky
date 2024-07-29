import { House, SignOut, UserCircle, UserPlus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import line from "../../assets/images/dashboardLine.svg";
import logo from "../../assets/images/logoDashboard.svg";

export default function DashboardElement({children}) {
  const navigate = useNavigate();

  return (
    <div className="bg-emptracky-f1 h-screen w-screen font-poppins flex overflow-hidden">
      <div className="w-[15%] h-screen py-12 px-4 relative">
        <div className="w-full justify-center items-center h-[90%]">
          <div className="w-full flex justify-center">
            <img src={logo} alt="logo" className="w-[80px]" />
          </div>
          <img src={line} className="mt-6 mb-4" />
          <div className="text-emptracky-darkgray font-semibold">
            <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/home")}>
              <House size={32} />
              <p className="mt-1">Home</p>
            </div>
            <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/my-info")}>
              <UserCircle size={32} />
              <p className="mt-1">My Info</p>
            </div>
            <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/add-employee")}>
              <UserPlus size={32} />
              <p className="mt-1">Add Employee</p>
            </div>
          </div>
          <img src={line} className="mt-6 mb-4" />
        </div>
        <div className="flex w-full justify-center">
          <div className="p-1 pr-3 rounded-md flex gap-2 text-emptracky-red hover:text-emptracky-fd hover:bg-emptracky-red hover:cursor-pointer w-fit transition-all duration-200">
            <SignOut size={32} />
            <p className="mt-1">Sign out</p>
          </div>
        </div>
      </div>
      <div className="flex justify-left items-center w-full min-h-screen overflow-hidden">
        <div className="bg-[#f5f5f5] h-[90%] w-[98%] shadow-xl rounded-[10px] max-h-[91%] overflow-hidden text-emptracky-darkgray">
        {children}
        </div>
      </div>
    </div>
  );
}
