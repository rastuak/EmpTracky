import axios from "axios";
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";
import { Plus, MagnifyingGlass } from "@phosphor-icons/react"

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
    // handleHomePage();
  }, []);

  return (
    <DashboardElement>
      <div className="w-full h-[15%] bg-home rounded-t-[10px] px-16 pt-5 pb-3 ">
        <div className="flex gap-4">
          <div className="h-[44px] w-[44px] bg-white rounded-[12px] group hover:bg-emptracky-blue transition-all duration-200 hover:cursor-pointer">
            <Plus size={42} className="text-emptracky-blue group-hover:text-white transition-all duration-200" />
          </div>
          <div className="w-full h-[44px] relative">
            <MagnifyingGlass size={40} className="text-emptracky-blue absolute right-3 hover:cursor-pointer" />
            <input placeholder="Search employee name..." className="w-full h-[44px] rounded-[12px] pl-3 pr-4 focus:outline-emptracky-blue" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        
      </div>

    </DashboardElement>
  );
}