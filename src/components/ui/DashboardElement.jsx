/* eslint-disable react/prop-types */
import { House, SignOut, UserCircle, UserPlus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import line from "../../images/dashboardLine.svg";
import logo from "../../images/logoDashboard.svg";
import { Fragment, useState } from 'react';
import LogoutModal from "../LogoutModal";

export default function DashboardElement({ children }) {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="bg-emptracky-f1 h-screen w-screen font-poppins flex overflow-hidden">
        <div className="w-[15%] h-screen py-12 px-4 relative">
          <div className="w-full justify-center items-center h-[90%]">
            <div className="w-full flex justify-center">
              <img src={logo} alt="logo" className="w-[80px]" />
            </div>
            <img src={line} className="mt-6 mb-4" />
            <div className="text-emptracky-darkgray font-semibold">
              <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/home")}>
                <House size={32} className="md:w-24 lg:w-fit" />
                <p className="mt-1 hidden lg:block">Home</p>
              </div>
              <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/my-info")}>
                <UserCircle size={32} className="md:w-24 lg:w-fit" />
                <p className="mt-1 hidden lg:block">My Info</p>
              </div>
              <div className="flex gap-2 hover:text-emptracky-blue hover:cursor-pointer w-fit mb-3 transition-all duration-200" onClick={() => navigate("/add-employee")}>
                <UserPlus size={32} className="md:w-24 lg:w-fit" />
                <p className="mt-1 hidden lg:block">Add Employee</p>
              </div>
            </div>
            <img src={line} className="mt-6 mb-4" />
          </div>
          <div className="flex w-full justify-center">
            <div onClick={() => setShowLogout(true)} className="p-1 pr-3 rounded-md flex gap-2 text-emptracky-red hover:text-emptracky-fd hover:bg-emptracky-red hover:cursor-pointer w-fit transition-all duration-200">
              <SignOut size={32} />
              <p className="mt-1 hidden md:block">Sign out</p>
            </div>
          </div>
        </div>
        <div className="flex justify-left items-center w-[85%] min-h-screen  ">
          <div className="bg-emptracky-f5 h-[90%] w-[95%] shadow-xl rounded-[10px] overflow-hidden text-emptracky-darkgray relative">
            {children}
          </div>
        </div>
      </div>
      <LogoutModal isVisible={showLogout} onClose={() => setShowLogout(false)} />
    </Fragment>
  );
}
