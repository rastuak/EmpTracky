import { useNavigate } from "react-router-dom";
import { House, UserCircle, UserPlus, SignOut } from "@phosphor-icons/react"

export default function DashboardElement() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f1f1f1] h-screen w-[15%] flex flex-col py-8 font-poppins">
      <House size={32} className="text-[#f5f5f5]"/>
      <UserCircle size={32} className="text-[#f5f5f5]"/>
      <UserPlus size={32} className="text-[#f5f5f5]"/>
      <SignOut size={32} className="text-[#f5f5f5]"/>
    </div>
  );
}
